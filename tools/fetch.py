import json,time,urllib.request,urllib.parse,os,sys,re,io
from PIL import Image
UA={"User-Agent":"EduMuseumPrototype/0.1 (educational, low-volume)"}
def get(url,tries=6):
    for i in range(tries):
        try:
            return urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout=40).read()
        except Exception as e:
            if getattr(e,"code",0) in (400,404): return None
            print("  retry",i,url[:90],e,file=sys.stderr); time.sleep(8*(i+1))
    return None
C=json.load(open("tools/content.json"))
FILEOV={a["id"]:a["file"] for a in C["animals"] if a.get("file")}
items=[(a["id"],a["wiki"]) for a in C["animals"]]+[("g_"+g["id"],g["wiki"]) for g in C["groups"]]
only=[a for a in sys.argv[1:] if not a.startswith("--")]
ST={"Q211005":"LC","Q719675":"NT","Q278113":"VU","Q11394":"EN","Q219127":"CR","Q239509":"EW","Q237350":"EX","Q3245245":"DD","Q96377276":"EN"}
meta=json.load(open("tools/meta.json")) if os.path.exists("tools/meta.json") else {}
for id,wiki in items:
    if only and id not in only: continue
    if not only and id in meta and meta[id].get("ok"): continue
    m=meta.get(id,{})
    if not m.get("src"):
        r=get("https://en.wikipedia.org/api/rest_v1/page/summary/"+urllib.parse.quote(wiki.replace(" ","_")))
        if not r: print(id,"SKIP"); time.sleep(30); continue
        s=json.loads(r)
        m={"wiki":wiki,"title":s.get("title"),"qid":s.get("wikibase_item"),
           "src":(s.get("originalimage") or {}).get("source"),"thumb":(s.get("thumbnail") or {}).get("source")}
        m["file"]=re.sub(r"^\d+px-","",urllib.parse.unquote(m["src"].split("?")[0].split("/")[-1]))
    if id in FILEOV and m.get("file")!=FILEOV[id]:
        m["file"]=FILEOV[id]; m.pop("wikitext",None); m["thumb"]=None
        m["src"]="https://commons.wikimedia.org/wiki/Special:FilePath/"+urllib.parse.quote(FILEOV[id].replace(" ","_"))+"?width=960"
        if os.path.exists(f"img/{id}.jpg"): os.rename(f"img/{id}.jpg",f"img/{id}_old.jpg.bak")
    if "wd_status" not in m and m.get("qid"):
        d=get(f"https://www.wikidata.org/wiki/Special:EntityData/{m['qid']}.json")
        if d:
            cl=json.loads(d)["entities"][m["qid"]]["claims"].get("P141",[])
            pref=[c for c in cl if c.get("rank")=="preferred"] or [c for c in cl if c.get("rank")!="deprecated"]
            m["wd_status"]=[ST.get(c["mainsnak"].get("datavalue",{}).get("value",{}).get("id"),c["mainsnak"].get("datavalue",{}).get("value",{}).get("id")) for c in pref]
    if "wikitext" not in m and "--credits" in sys.argv:
        t=get("https://commons.wikimedia.org/w/index.php?title="+urllib.parse.quote("File:"+m["file"])+"&action=raw")
        if t: m["wikitext"]=t.decode("utf8","replace")[:3000]
    if not os.path.exists(f"img/{id}.jpg"):
        cands=[]
        if m.get("thumb"): cands += [re.sub(r"/\d+px-","/960px-",m["thumb"]).split("?")[0], re.sub(r"/\d+px-","/500px-",m["thumb"]).split("?")[0]]
        cands.append(m["src"])
        for u in cands:
            b=get(u,2)
            if b:
                im=Image.open(io.BytesIO(b)).convert("RGB"); im.thumbnail((900,900)); im.save(f"img/{id}.jpg",quality=82); break
    m["ok"]=os.path.exists(f"img/{id}.jpg") and ("wikitext" in m or "--credits" not in sys.argv)
    meta[id]=m; json.dump(meta,open("tools/meta.json","w"),ensure_ascii=False,indent=1)
    print(id,m["file"][:50],m.get("wd_status"),"OK" if m["ok"] else "MISSING",flush=True); time.sleep(0.5)
