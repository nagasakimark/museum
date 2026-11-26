"""Mark kanji above MEXT grade 5 with readings:  恐竜 -> {恐竜|きょうりゅう}

    pip install fugashi unidic-lite
    python tools/furigana.py            # rewrites the source files in place (safe to run again)
    python tools/furigana.py --check    # only lists what would change

In the app, {漢字|かんじ} shows as furigana (ruby) in HTML panels and as plain
hiragana on 3D signs and labels (see ruby()/plain() in src/main.js).
Readings come from the UniDic dictionary; fix any wrong one by editing the
{...|...} in the source, or add it to FIX below so reruns get it right.
"""
import glob, json, os, re, sys
import fugashi

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GRADES = json.load(open(os.path.join(ROOT, "tools", "kanji_grades.json"), encoding="utf8"))
OK = {k for k, v in GRADES.items() if v <= 5}
FILES = [f for f in glob.glob(os.path.join(ROOT, "src", "**", "*.js"), recursive=True)
         if not f.endswith(("data.js", "photos.js", "questions.js"))] + [os.path.join(ROOT, "tools", "content.json"), os.path.join(ROOT, "index.html")]
# readings the dictionary gets wrong for this museum
FIX = {"日本": "にほん", "韓国": "かんこく", "大韓民国": "だいかんみんこく", "宇宙": "うちゅう", "江戸": "えど", "恐竜": "きょうりゅう",
       "遺跡": "いせき", "世界遺産": "せかいいさん", "銀河": "ぎんが", "惑星": "わくせい", "彗星": "すいせい", "妖怪": "ようかい",
       "俳句": "はいく", "忍者": "にんじゃ", "温泉": "おんせん", "砂漠": "さばく", "噴火": "ふんか", "牛乳": "ぎゅうにゅう", "廿日市": "はつかいち",
       "柴犬": "しばいぬ", "外尾": "そとお", "小籠": "しょうろん", "拉": "らー", "世宗": "せじょん", "地獄谷": "じごくだに", "尾羽": "おばね",
       "釜山": "ぷさん", "鶏": "にわとり", "狩野": "かのう", "秋芳": "あきよし", "峰": "ほう"}
KANJI = re.compile(r"[一-鿿々〆]")
RUN = re.compile(r"[ぁ-ゖァ-ヺー一-鿿々〆ヵヶ]+")
tag = fugashi.Tagger()
hira = lambda s: "".join(chr(ord(c) - 0x60) if "ァ" <= c <= "ヶ" else c for c in s)
hard = lambda s: any(KANJI.match(c) and c not in OK for c in s)
log = {}

def reading(word):
    if word in FIX: return FIX[word]
    r = "".join((w.feature.kana or "") if KANJI.search(w.surface) else w.surface for w in tag(word))
    return hira(r) if r and not re.search(r"[一-鿿]", r) else None

def mark_run(run):
    if not hard(run): return run
    out = []
    for w in tag(run):
        t = w.surface
        if not hard(t): out.append(t); continue
        # keep trailing kana (okurigana) outside the ruby
        m = re.match(r"^(.*?[\u4e00-\u9fff々〆])([\u3041-\u3096]*)$", t)
        base, tail = (m.group(1), m.group(2)) if m else (t, "")
        r = FIX.get(base)
        if not r:
            k = hira(w.feature.kana or "") if w.feature.kana else ""
            if k and tail and k.endswith(tail): k = k[: -len(tail)]
            r = k if k and not re.search(r"[\u4e00-\u9fff]", k) else reading(base)
        if not r or "?" in r: out.append(t); log.setdefault(base, "?"); continue
        log[base] = r
        out.append((HTML_FMT if HTML else "{%s|%s}") % (base, r) + tail)
    return "".join(out)

def process(text):
    res, pos = [], 0
    for m in RUN.finditer(text):
        s, e = m.span()
        if s > 0 and text[s - 1] in "{": continue       # already marked
        if text[max(0, s - 6):s] == "<ruby>": continue
        res.append(text[pos:s]); res.append(mark_run(m.group(0))); pos = e
    res.append(text[pos:])
    return "".join(res)

HTML_FMT = "<ruby>%s<rt>%s</rt></ruby>"
HTML = False
changed = 0
for f in FILES:
    HTML = f.endswith(".html")
    src = open(f, encoding="utf8").read()
    # fix words first so the tokenizer can't split them differently
    new = process(src)
    if new != src:
        changed += 1
        if "--check" not in sys.argv: open(f, "w", encoding="utf8").write(new)
print("files changed:", changed, "| words marked:", len(log))
pass
