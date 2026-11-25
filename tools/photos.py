"""Download photos for the museum's exhibits from Wikipedia / Wikimedia Commons.

Run from the repo root (D:\\Programming\\museum):

    python tools/photos.py            # find + download (safe to stop and re-run; it resumes)
    python tools/photos.py --review   # writes tools/photo_review.html to check every photo
    python tools/photos.py --apply    # writes src/photos.js + credits in README.md
    sh tools/build.sh                 # rebuild museum.js

Needs Python 3.9+ and Pillow (pip install pillow). Node is used to refresh the
exhibit list if it's installed; otherwise the committed photo_manifest.json is used.

How it chooses a photo:
  * the exhibit's English name must match a Wikipedia article title (or a redirect);
    phrases like "onsen manners" simply get no photo and keep their drawn icon
  * country/prefecture names used inside other topics (e.g. a school lunch in India)
    are skipped, so they don't get a random photo of the country
  * only free Commons photos (JPEG) are used: no flags, maps, logos, diagrams,
    and no non-free Wikipedia images
  * articles about people are skipped (no photos of real people)
  * topics that are about ideas, words or people are skipped entirely (SKIP_TOPICS)

Safety: every photo still needs a human look. --review shows them all on one page;
put the key of anything unsuitable in tools/photo_reject.txt (one per line), then
run --apply again. Rejected keys are never downloaded again; to try a different
article for an exhibit, add it to tools/photo_overrides.json.

Pace: one API call per second and one image every 1.5 seconds, with polite
back-off when Wikimedia asks us to slow down. Expect roughly 30-60 minutes.
"""
import io, json, os, re, subprocess, sys, time, urllib.parse, urllib.request

# Wikimedia asks for a descriptive User-Agent with a way to contact you.
CONTACT = "EduMuseum/1.0 (school museum for Nagasaki elementary students; github.com/nagasakimark/museum)"
API = "https://en.wikipedia.org/w/api.php"
API_PAUSE, IMG_PAUSE = 1.0, 1.5      # seconds between requests
THUMB_W = 960                         # a standard Wikimedia thumbnail width
SAVE_MAX, SAVE_Q = 720, 80            # stored size: max side in px, JPEG quality

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = lambda *p: os.path.join(ROOT, "tools", *p)
OUT = os.path.join(ROOT, "img", "p")
STATE = T("photo_state.json")
REJECT = T("photo_reject.txt")
OVERRIDES = T("photo_overrides.json")

# Topics that are about ideas, words, feelings or people: these keep their icons.
SKIP_TOPICS = {
    "philosophy-questions", "philosophers", "japanese-values", "proverbs", "living-together", "thought-experiments-2",
    "paradoxes", "logic-puzzles", "eastern-thinkers", "western-thinkers", "philosophy-of-happiness", "ethics-for-kids",
    "critical-thinking", "philosophy-of-science", "time-philosophy", "mind-and-feelings", "world-wisdom-words",
    "onomatopoeia", "uk-us-english", "tongue-twisters", "words-from-languages", "wasei-eigo", "words-from-japanese",
    "feelings", "colors-shapes", "numbers", "hello-world", "family-names-world", "generations", "heroes", "women-science",
    "explorers", "composers", "japanese-painters", "daily-life", "body-can", "human-skills-world", "months1", "months2",
    "time", "school-subjects", "sdgs", "haiku-seasons", "family-celebrations", "pets-as-family", "animal-families",
    "jobs-town", "jobs-dream", "jobs-hospital", "jobs-airport", "jobs-creative", "jobs-nature", "bosai", "codes",
    "secondary-schools-world", "school-lunch-world", "breakfast-world", "birthdays-world", "chores-world", "rooms-world",
    "summer-world", "school-buildings-world", "table-manners", "world-new-year",
}
# Topics whose exhibits ARE countries/places: their names don't count as "a country used as a label".
PLACE_TOPICS = {"asia", "europe", "africa", "americas", "oceania", "southeast-asia", "south-asia", "west-asia", "nordic",
                "western-europe-2", "eastern-europe", "central-america-caribbean", "south-america-2", "africa-2",
                "pacific-islands", "regions", "continents-oceans"}
BAD_NAME = re.compile(r"flag|map|logo|coat[ _]of[ _]arms|emblem|seal[ _]of|locator|diagram|chart|icon|symbol|svg", re.I)
PERSON_DESC = re.compile(r"\((born |c\. |b\. )?\d{3,4}\s*[–-]|\(born |\bborn \d{4}\b", re.I)


try: sys.stdout.reconfigure(encoding="utf-8", errors="replace")  # Windows consoles
except Exception: pass


def log(*a): print(*a, flush=True)


def get(url, tries=6):
    """GET with polite retries; honours Retry-After on 429/503."""
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": CONTACT, "Accept-Encoding": "identity"})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (400, 403, 404): return None
            wait = int(e.headers.get("Retry-After") or 0) or 20 * (i + 1)
            log(f"   slowing down ({e.code}), waiting {wait}s"); time.sleep(min(wait, 300))
        except Exception as e:
            log(f"   network hiccup ({e}), retrying"); time.sleep(10 * (i + 1))
    return None


def api(**params):
    params.update(format="json", formatversion="2", maxlag="5")
    time.sleep(API_PAUSE)
    b = get(API + "?" + urllib.parse.urlencode(params))
    return json.loads(b) if b else {}


def load(path, default):
    try:
        with open(path, encoding="utf8") as f: return json.load(f)
    except FileNotFoundError: return default


def save_state(st):
    tmp = STATE + ".tmp"
    with open(tmp, "w", encoding="utf8") as f: json.dump(st, f, ensure_ascii=False, indent=0)
    os.replace(tmp, STATE)


def rejects():
    if not os.path.exists(REJECT): return set()
    with open(REJECT, encoding="utf8") as f: return {l.strip() for l in f if l.strip() and not l.startswith("#")}


def slug(s): return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:60] or "x"


def manifest():
    try:
        subprocess.run(["node", T("photo_manifest.mjs")], cwd=ROOT, check=True, capture_output=True)
    except Exception:
        log("(node not found - using the existing tools/photo_manifest.json)")
    return load(T("photo_manifest.json"), [])


def clean(name):
    n = re.sub(r"^(the|a|an) ", "", name.strip(), flags=re.I)
    return re.sub(r"^Mt\.? ", "Mount ", n)


def candidates(rows, st, rej, ov):
    places = {r["en"].lower() for r in rows if r["topic"] in PLACE_TOPICS or r["topic"].startswith("pref-")}
    out = []
    for r in rows:
        key = r["topic"] + "|" + r["en"]
        if key in rej or r["topic"] in SKIP_TOPICS: continue
        if key in ov:
            if ov[key]: out.append((key, r, ov[key]))
            continue
        if r["topic"] not in PLACE_TOPICS and r["en"].lower() in places: continue
        if "?" in r["en"] or len(r["en"].split()) > 5: continue
        out.append((key, r, clean(r["en"])))
    return out


def resolve(todo, st):
    """Batch-look up article titles -> lead image (50 per API call)."""
    for i in range(0, len(todo), 50):
        chunk = todo[i:i + 50]
        titles = [t for _, _, t in chunk if not t.startswith("File:")]
        d = api(action="query", titles="|".join(titles), redirects=1, prop="pageimages|pageprops|description",
                piprop="name", ppprop="disambiguation|wikibase_item") if titles else {}
        q = d.get("query", {})
        norm = {x["from"]: x["to"] for x in q.get("normalized", [])}
        redir = {x["from"]: x["to"] for x in q.get("redirects", [])}
        pages = {p["title"]: p for p in q.get("pages", [])}
        for key, r, title in chunk:
            if title.startswith("File:"):
                st[key] = {"title": title, "file": title[5:], "how": "override"}; continue
            t = norm.get(title, title); t = redir.get(t, t); p = pages.get(t, {})
            info = {"title": t}
            if p.get("missing") or not p: info["skip"] = "no article"
            elif "disambiguation" in p.get("pageprops", {}): info["skip"] = "ambiguous"
            elif PERSON_DESC.search(p.get("description", "")): info["skip"] = "person"
            elif not p.get("pageimage"): info["skip"] = "no picture"
            else: info.update(file=p["pageimage"], qid=p.get("pageprops", {}).get("wikibase_item"), desc=p.get("description", ""))
            st[key] = info
        log(f"looked up {min(i + 50, len(todo))}/{len(todo)} names")
        save_state(st)


def ambiguous_retry(todo, st):
    """For ambiguous names, search with the room's subject as a hint (one call each)."""
    for key, r, title in todo:
        if st.get(key, {}).get("skip") != "ambiguous" or st[key].get("retried"): continue
        hint = re.sub(r"\b(the|of|and|around|world|in|II)\b", "", r["topicEn"], flags=re.I)
        d = api(action="query", generator="search", gsrsearch=f'{clean(r["en"])} {hint}', gsrlimit=3,
                prop="pageimages|pageprops|description", piprop="name", ppprop="disambiguation|wikibase_item")
        pages = sorted(d.get("query", {}).get("pages", []), key=lambda p: p.get("index", 9))
        st[key]["retried"] = True
        for p in pages:
            low = p["title"].lower()
            if "disambiguation" in p.get("pageprops", {}) or not p.get("pageimage"): continue
            if not low.startswith(clean(r["en"]).lower().split(" (")[0]): continue
            if PERSON_DESC.search(p.get("description", "")): continue
            st[key] = {"title": p["title"], "file": p["pageimage"], "qid": p.get("pageprops", {}).get("wikibase_item"),
                       "desc": p.get("description", ""), "how": "search", "retried": True}
            break
        log(f"  {key} -> {st[key].get('title') if st[key].get('file') else 'none'}")
        save_state(st)


def drop_people(st):
    """Wikidata check: skip anything that is a human (P31 = Q5)."""
    ids = sorted({v["qid"] for v in st.values() if v.get("file") and v.get("qid") and "human" not in v})
    for i in range(0, len(ids), 50):
        time.sleep(API_PAUSE)
        b = get("https://www.wikidata.org/w/api.php?" + urllib.parse.urlencode(
            dict(action="wbgetentities", format="json", ids="|".join(ids[i:i + 50]), props="claims")))
        if not b: log("(Wikidata unavailable - relying on the description check for people)"); return
        ents = json.loads(b).get("entities", {})
        for v in st.values():
            e = ents.get(v.get("qid") or "")
            if e is None: continue
            p31 = [c["mainsnak"].get("datavalue", {}).get("value", {}).get("id") for c in e.get("claims", {}).get("P31", [])]
            v["human"] = "Q5" in p31
            if v["human"]: v["skip"] = "person"; v.pop("file", None)
        log(f"checked {min(i + 50, len(ids))}/{len(ids)} for people")
        save_state(st)


def file_info(st):
    """Batch imageinfo: keep only free Commons JPEGs, collect credits + thumbnail URL."""
    need = [k for k, v in st.items() if v.get("file") and "url" not in v and "skip" not in v]
    for i in range(0, len(need), 50):
        chunk = need[i:i + 50]
        d = api(action="query", titles="|".join("File:" + st[k]["file"] for k in chunk), prop="imageinfo",
                iiprop="url|size|mime|extmetadata", iiurlwidth=THUMB_W,
                iiextmetadatafilter="Artist|LicenseShortName|Credit|UsageTerms|Restrictions")
        q = d.get("query", {})
        norm = {x["from"]: x["to"] for x in q.get("normalized", [])}
        pages = {p["title"]: p for p in q.get("pages", [])}
        for k in chunk:
            v = st[k]; t = "File:" + v["file"]; p = pages.get(norm.get(t, t), {})
            ii = (p.get("imageinfo") or [{}])[0]
            em = ii.get("extmetadata", {})
            txt = lambda n: re.sub(r"<[^>]+>", "", em.get(n, {}).get("value", "")).strip()
            if p.get("imagerepository") != "shared": v["skip"] = "not on Commons (not free)"
            elif ii.get("mime") != "image/jpeg": v["skip"] = "not a photo (" + str(ii.get("mime")) + ")"
            elif BAD_NAME.search(v["file"]): v["skip"] = "flag/map/logo"
            elif txt("Restrictions"): v["skip"] = "restricted: " + txt("Restrictions")[:40]
            elif min(ii.get("width", 0), ii.get("height", 0)) < 300: v["skip"] = "too small"
            else:
                v.update(url=ii.get("thumburl") or ii.get("url"), page=ii.get("descriptionurl"),
                         artist=txt("Artist")[:120] or "unknown", license=txt("LicenseShortName") or "see file page")
        log(f"checked {min(i + 50, len(need))}/{len(need)} picture files")
        save_state(st)


def download(st, rej):
    from PIL import Image
    todo = [k for k, v in st.items() if v.get("url") and not v.get("saved") and k not in rej]
    log(f"downloading {len(todo)} photos (about {len(todo) * IMG_PAUSE / 60:.0f} min)")
    for n, k in enumerate(todo, 1):
        topic, en = k.split("|", 1)
        rel = f"img/p/{topic}/{slug(en)}.jpg"; path = os.path.join(ROOT, *rel.split("/"))
        os.makedirs(os.path.dirname(path), exist_ok=True)
        time.sleep(IMG_PAUSE)
        b = get(st[k]["url"])
        if not b: log(f"  [{n}/{len(todo)}] {k}: failed, will retry next run"); continue
        try:
            im = Image.open(io.BytesIO(b)).convert("RGB"); im.thumbnail((SAVE_MAX, SAVE_MAX), Image.LANCZOS)
            im.save(path, "JPEG", quality=SAVE_Q, optimize=True, progressive=True)
        except Exception as e:
            log(f"  [{n}/{len(todo)}] {k}: unreadable ({e})"); st[k]["skip"] = "unreadable"; continue
        st[k]["saved"] = rel
        if n % 10 == 0 or n == len(todo): save_state(st); log(f"  [{n}/{len(todo)}] {k}")
    save_state(st)


def review(st, rows):
    rej = rejects()
    by = {}
    for r in rows:
        k = r["topic"] + "|" + r["en"]; v = st.get(k)
        if v and v.get("saved") and k not in rej: by.setdefault((r["topic"], r["topicEn"]), []).append((k, r, v))
    esc = lambda s: (s or "").replace("&", "&amp;").replace("<", "&lt;").replace('"', "&quot;")
    html = ["<!doctype html><meta charset=utf-8><title>Photo review</title><style>body{font:14px sans-serif;margin:20px;background:#f6f3ee}"
            "h2{margin:28px 0 8px}.g{display:flex;flex-wrap:wrap;gap:10px}.c{width:230px;background:#fff;border-radius:8px;padding:6px;box-shadow:0 1px 3px #0002}"
            ".c img{width:100%;height:170px;object-fit:cover;border-radius:4px}.k{font:11px monospace;color:#555;word-break:break-all;user-select:all}"
            ".c.x{opacity:.35}</style><h1>Photo review</h1><p>Click a card to mark it. Then copy the list at the bottom into "
            "<b>tools/photo_reject.txt</b> and run <code>python tools/photos.py --apply</code>.</p>"]
    total = 0
    for (topic, ten), items in sorted(by.items()):
        html.append(f"<h2>{esc(ten)} <small>({topic})</small></h2><div class=g>")
        for k, r, v in items:
            total += 1
            html.append(f'<div class=c data-k="{esc(k)}"><img loading=lazy src="../{v["saved"]}"><b>{esc(r["ja"])}</b> / {esc(r["en"])}'
                        f'<div class=k>{esc(k)}</div><small>{esc(v["title"])} — {esc(v.get("desc", ""))}</small></div>')
        html.append("</div>")
    html.append("<h2>Rejected (copy into tools/photo_reject.txt)</h2><textarea id=out rows=12 cols=90></textarea>"
                "<script>const s=new Set();document.querySelectorAll('.c').forEach(c=>c.onclick=()=>{const k=c.dataset.k;"
                "s.has(k)?s.delete(k):s.add(k);c.classList.toggle('x');out.value=[...s].join('\\n')})</script>")
    with open(T("photo_review.html"), "w", encoding="utf8") as f: f.write("\n".join(html))
    log(f"wrote tools/photo_review.html ({total} photos) - open it in your browser")


def apply(st, rows):
    rej = rejects()
    photos, credits = {}, []
    for r in rows:
        k = r["topic"] + "|" + r["en"]; v = st.get(k)
        if not v or not v.get("saved") or k in rej or not os.path.exists(os.path.join(ROOT, *v["saved"].split("/"))): continue
        photos[k] = v["saved"]
        credits.append(f'| {r["en"]} | {v["artist"].replace("|", "/")} | {v["license"]} | {v.get("page", "")} |')
    with open(os.path.join(ROOT, "src", "photos.js"), "w", encoding="utf8") as f:
        f.write("// Generated by tools/photos.py --apply. Keys are topic|English name.\nexport const PHOTOS = "
                + json.dumps(photos, ensure_ascii=False, indent=0) + ";\n")
    readme = os.path.join(ROOT, "README.md")
    text = open(readme, encoding="utf8").read() if os.path.exists(readme) else "# Museum\n"
    text = re.split(r"\n## Exhibit photo credits\n", text)[0].rstrip() + "\n\n## Exhibit photo credits\n\n" \
        "Photos from Wikimedia Commons, used under their free licences.\n\n| Exhibit | Author | Licence | Source |\n|---|---|---|---|\n" \
        + "\n".join(credits) + "\n"
    with open(readme, "w", encoding="utf8") as f: f.write(text)
    log(f"src/photos.js: {len(photos)} photos; credits written to README.md. Now run: sh tools/build.sh")


def main():
    rows = manifest(); st = load(STATE, {}); rej = rejects(); ov = load(OVERRIDES, {})
    if "--review" in sys.argv: return review(st, rows)
    if "--apply" in sys.argv: return apply(st, rows)
    cands = candidates(rows, st, rej, ov)
    for k in list(st):                       # an override replaces an earlier choice
        if k in ov and st[k].get("title") != ov[k]: st.pop(k)
    todo = [c for c in cands if c[0] not in st]
    log(f"{len(rows)} exhibits, {len(cands)} could have a photo, {len(todo)} still to look up")
    resolve(todo, st)
    ambiguous_retry(cands, st)
    drop_people(st)
    file_info(st)
    download(st, rej)
    got = sum(1 for v in st.values() if v.get("saved"))
    why = {}
    for v in st.values():
        if v.get("skip"): why[v["skip"].split(":")[0]] = why.get(v["skip"].split(":")[0], 0) + 1
    log(f"\nDone: {got} photos saved. Skipped: {why}")
    log("Next: python tools/photos.py --review   (check them), then --apply, then sh tools/build.sh")


if __name__ == "__main__":
    main()
