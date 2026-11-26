"""Builds src/data.js (app content) and README.md (photo credits) from content.json + meta.json."""
import json, re, html, os

C = json.load(open("tools/content.json"))
M = json.load(open("tools/meta.json"))
REVIEW = json.load(open("tools/review.json")) if os.path.exists("tools/review.json") else {}

def clean(s):
    s = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]*)\]\]", r"\1", s)          # [[a|b]] -> b
    s = re.sub(r"\[https?://\S+ ([^\]]+)\]", r"\1", s)               # [url text] -> text
    s = re.sub(r"\[https?://\S+\]", "", s)
    s = re.sub(r"\{\{[Uu]ser:([^|}]+)[^}]*\}\}", r"\1", s)
    s = re.sub(r"\{\{(?:[Cc]reator|[Uu]nknown)[:|]?([^}]*)\}\}", r"\1", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = re.sub(r"'''?", "", s)
    s = re.sub(r"\{\{[^}]*\}\}", "", s)
    return html.unescape(s).strip(" |\n\t")

MANUAL = {
    "Dugong.JPG": ("Gejuni", "GFDL"),
    "Vulpes_lagopus_in_Iceland_(cropped_3).jpg": ("Jonatan Pie", "Unsplash License"),
    "Giraffe_Mikumi_National_Park.jpg": ("Muhammad Mahdi Karim", "GFDL 1.2"),
    "Thornydevil.jpg": ("Bäras", "GFDL, CC BY-SA 3.0"),
}
def credit(m):
    if m.get("file", "").replace(" ", "_") in MANUAL: return MANUAL[m["file"].replace(" ", "_")]
    t = m.get("wikitext", "")
    a = re.search(r"\|\s*[Aa]uthor\s*=\s*(.+)", t)
    author = clean(a.group(1)) if a else ""
    if not author:
        a = re.search(r"\|\s*[Pp]hotographer\s*=\s*(.+)", t)
        author = clean(a.group(1)) if a else "see file page"
    lic = []
    for tpl in re.findall(r"\{\{\s*([^{}|]+?)\s*(?:\||\}\})", t):
        k = tpl.strip()
        kl = k.lower()
        if kl.startswith(("cc-", "pd-", "gfdl", "cc0", "fal", "attribution")) or kl in ("self", "licensereview"):
            lic.append(k)
    for self_ in re.findall(r"\{\{\s*self\s*\|([^}]*)\}\}", t, re.I):
        lic += [x.strip() for x in self_.split("|") if x.strip() and "=" not in x]
    lic = [l for l in dict.fromkeys(lic) if l.lower() not in ("self", "licensereview")]
    return author, ", ".join(lic) or "see file page"

rooms = C["rooms"]
out = {"rooms": rooms, "doors": C["doors"], "groups": [], "animals": []}
credits = []
for g in C["groups"]:
    m = M.get("g_" + g["id"], {})
    out["groups"].append({**g, "img": "img/g_%s.jpg" % g["id"]})
    credits.append(("g_" + g["id"], g["animal"][1], m))
for a in C["animals"]:
    m = M.get(a["id"], {})
    out["animals"].append({**a, "img": "img/%s.jpg" % a["id"]})
    credits.append((a["id"], a["en"], m))

os.makedirs("src", exist_ok=True)
open("src/data.js", "w").write("export const DATA = " + json.dumps(out, ensure_ascii=False) + ";\n")

lines = ["# Credits", "",
         "Photos are from Wikimedia Commons, used under the licences listed below.",
         "Each photo was resized for this app. Text was written for this museum.", "",
         "| Exhibit | Photo file | Author | Licence |", "|---|---|---|---|"]
for id, name, m in credits:
    au, li = credit(m)
    f = m.get("file", "?")
    lines.append("| %s | [%s](https://commons.wikimedia.org/wiki/File:%s) | %s | %s |" % (
        name, f, f.replace(" ", "_"), au.replace("|", "/")[:120], li))
lines += ["", "Conservation statuses: IUCN Red List (Tsushima leopard cat: Japan Ministry of the Environment Red List).",
          "", "3D engine: [three.js](https://threejs.org) (MIT licence).",
          "", "Museum guests: Mini Characters by Kenney (www.kenney.nl), CC0.",
          "", "Sound effects: RPG Audio by Kenney (www.kenney.nl), CC0.",
          "", "Mascots: Cube Pets by Kenney (www.kenney.nl), CC0 (party hats added in the app).",
          "", "Display pieces in My Museum: models by Quaternius (quaternius.com), CC0 (animations removed or trimmed, files compressed for the app).",
          "", "Notebook fonts: Patrick Hand (Patrick Wagesreiter) and Klee One (Fontworks), SIL Open Font License 1.1.",
          "", "Background music by Kevin MacLeod (incompetech.com), licensed under Creative Commons: By Attribution 3.0/4.0",
          "(http://creativecommons.org/licenses/by/4.0/). Tracks: Gymnopedie No 1, Gymnopedie No 2, Gymnopedie No 3 (Erik Satie, arranged and performed by Kevin MacLeod),",
          "Meditation Impromptu 01, Meditation Impromptu 02, Meditation Impromptu 03, Dreamer, Bathed in the Light, At Rest, Lasting Hope.",
          "The tracks were converted to quiet mono MP3s for this app."]
# Keep the exhibit photo credits that tools/photos.py --apply adds below.
import os
old = open("README.md", encoding="utf8").read() if os.path.exists("README.md") else ""
keep = old[old.find("\n## Exhibit photo credits\n"):] if "\n## Exhibit photo credits\n" in old else ""
open("README.md", "w", encoding="utf8").write("\n".join(lines) + "\n" + keep)

# status check report
for a in C["animals"]:
    wd = M.get(a["id"], {}).get("wd_status")
    if wd is not None and a["status"] not in wd:
        print("STATUS MISMATCH", a["id"], "mine", a["status"], "wikidata", wd)
print("built", len(out["animals"]), "animals")
