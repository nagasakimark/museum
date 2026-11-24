import sys,os,glob
from PIL import Image,ImageDraw,ImageFont
ids=sys.argv[2:]; out=sys.argv[1]
fs=[f"img/{i}.jpg" for i in ids if os.path.exists(f"img/{i}.jpg")]
W=300; cols=4; rows=(len(fs)+cols-1)//cols
sh=Image.new("RGB",(cols*W,rows*(W+20)),"white"); d=ImageDraw.Draw(sh)
for k,f in enumerate(fs):
    im=Image.open(f); im.thumbnail((W-6,W-6)); x=(k%cols)*W; y=(k//cols)*(W+20)
    sh.paste(im,(x+3,y+3)); d.text((x+4,y+W),os.path.basename(f),fill="black")
sh.save(out)
