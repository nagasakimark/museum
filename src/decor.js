// Room decorations for My Museum: floors and picture frames.
import * as THREE from "three";

// ---------- small canvas helpers ----------
function cnv(w, h, draw) { const c = document.createElement("canvas"); c.width = w; c.height = h; draw(c.getContext("2d"), w, h); return c; }
const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
function shadeHex(hex, k) {
  const n = parseInt(hex.slice(1), 16); let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  const f = v => Math.max(0, Math.min(255, Math.round(k < 0 ? v * (1 + k) : v + (255 - v) * k)));
  return `rgb(${f(r)},${f(g)},${f(b)})`;
}
function planks(g, w, h, base, rows = 16) {
  const rh = h / rows;
  for (let r = 0; r < rows; r++) {
    let x = -((r * 173) % 300);
    while (x < w) {
      const len = 220 + ((r * 97 + x * 3) % 200), tone = (((r * 31 + x * 7) % 11) - 5) / 360;
      g.fillStyle = shadeHex(base, tone); g.fillRect(x, r * rh, len, rh);
      g.globalAlpha = .08; g.strokeStyle = shadeHex(base, -.3);
      for (let k = 0; k < 6; k++) { const yy = r * rh + 4 + rnd() * (rh - 8); g.beginPath(); g.moveTo(x, yy); g.bezierCurveTo(x + len * .3, yy + 3, x + len * .6, yy - 3, x + len, yy + 1); g.stroke(); }
      g.globalAlpha = 1; g.fillStyle = "rgba(40,25,10,.22)"; g.fillRect(x, r * rh, 2, rh);
      x += len;
    }
    g.fillStyle = "rgba(40,25,10,.2)"; g.fillRect(0, r * rh, w, 2);
  }
}
function veins(g, w, h, col, n, alpha) {
  g.strokeStyle = col;
  for (let i = 0; i < n; i++) {
    g.globalAlpha = alpha * (.4 + rnd() * .6); g.lineWidth = .6 + rnd() * 2.2;
    let x = rnd() * w, y = rnd() * h; g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 9; k++) { x += (rnd() - .3) * w / 5; y += (rnd() - .5) * h / 7; g.lineTo(x, y); }
    g.stroke();
  }
  g.globalAlpha = 1;
}

// ---------- floors ----------
// tile: metres covered by one copy of the picture
export const FLOORS = {
  oak: { ja: "オークの ゆか", en: "Oak boards", tile: 6, shine: 60, draw: (g, w, h) => planks(g, w, h, "#d4ae7e") },
  maple: { ja: "メープルの ゆか", en: "Maple boards", tile: 6, shine: 70, draw: (g, w, h) => planks(g, w, h, "#ead1a8") },
  walnut: { ja: "ウォルナットの ゆか", en: "Walnut boards", tile: 6, shine: 80, draw: (g, w, h) => planks(g, w, h, "#7b5034") },
  herringbone: { ja: "ヘリンボーン", en: "Herringbone", tile: 2.4, shine: 70, draw: (g, w, h) => {
    g.fillStyle = "#b88452"; g.fillRect(0, 0, w, h);
    const L = w / 4, T = L / 3;
    g.save(); g.translate(w / 2, h / 2); g.rotate(Math.PI / 4); g.translate(-w, -h);
    for (let i = -4; i < 16; i++) for (let j = -4; j < 16; j++) {
      const x = i * L + j * T, y = j * T * 3 - i * T;
      const tone = ((i * 7 + j * 13) % 9 - 4) / 40;
      g.fillStyle = shadeHex("#c08a55", tone); g.fillRect(x, y, L - 3, T - 3);
      g.fillStyle = shadeHex("#c08a55", -tone); g.fillRect(x + L - T, y + T, T - 3, L - 3);
    }
    g.restore();
  } },
  checker: { ja: "白と 黒の 大理石", en: "Checkered marble", tile: 2.4, shine: 110, draw: (g, w, h) => {
    const n = 2, s = w / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const dark = (i + j) % 2;
      g.fillStyle = dark ? "#2c2c30" : "#f1efea"; g.fillRect(i * s, j * s, s, s);
      g.save(); g.beginPath(); g.rect(i * s, j * s, s, s); g.clip();
      veins(g, w, h, dark ? "#8a8a92" : "#b8b4ac", 10, .5); g.restore();
      g.strokeStyle = "rgba(0,0,0,.25)"; g.lineWidth = 2; g.strokeRect(i * s, j * s, s, s);
    }
  } },
  marble: { ja: "白い 大理石", en: "White marble", tile: 3.2, shine: 120, draw: (g, w, h) => {
    g.fillStyle = "#f2efe9"; g.fillRect(0, 0, w, h);
    veins(g, w, h, "#a9a39a", 26, .45); veins(g, w, h, "#c9b38a", 6, .35);
    g.strokeStyle = "rgba(120,110,100,.3)"; g.lineWidth = 2; g.strokeRect(0, 0, w / 2, h / 2); g.strokeRect(w / 2, 0, w / 2, h / 2); g.strokeRect(0, h / 2, w / 2, h / 2); g.strokeRect(w / 2, h / 2, w / 2, h / 2);
  } },
  tatami: { ja: "たたみ", en: "Tatami", tile: 3.6, shine: 15, draw: (g, w, h) => {
    // four mats in a pinwheel; each mat is 1.8 x 0.9 m
    const u = w / 4;
    const mat = (x, y, mw, mh, vertical) => {
      g.fillStyle = "#c9c27a"; g.fillRect(x, y, mw, mh);
      g.strokeStyle = "rgba(110,100,40,.35)"; g.lineWidth = 1;
      if (vertical) for (let k = 0; k < mw; k += 4) { g.beginPath(); g.moveTo(x + k, y); g.lineTo(x + k, y + mh); g.stroke(); }
      else for (let k = 0; k < mh; k += 4) { g.beginPath(); g.moveTo(x, y + k); g.lineTo(x + mw, y + k); g.stroke(); }
      g.fillStyle = "#2e3a2a"; // cloth edging on the long sides
      if (vertical) { g.fillRect(x, y, 6, mh); g.fillRect(x + mw - 6, y, 6, mh); } else { g.fillRect(x, y, mw, 6); g.fillRect(x, y + mh - 6, mw, 6); }
    };
    mat(0, 0, u * 2, u, false); mat(u * 2, 0, u, u * 2, true); mat(u, u * 2, u * 2, u, false); mat(0, u, u, u * 2, true);
    mat(u, u, u, u, false);
    mat(u * 3, 0, u, u * 2, true); mat(u * 3, u * 2, u, u * 2, true); mat(0, u * 3, u * 3, u, false);
  } },
  redcarpet: { ja: "赤い じゅうたん", en: "Red carpet", tile: 2, shine: 5, draw: (g, w, h) => {
    g.fillStyle = "#8e1f2b"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(${rnd() < .5 ? "0,0,0" : "255,120,120"},.06)`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    g.strokeStyle = "#c9a24a"; g.lineWidth = 4;
    const s = w / 2;
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const cx = i * s + s / 2, cy = j * s + s / 2;
      g.beginPath(); g.moveTo(cx, cy - s * .3); g.lineTo(cx + s * .3, cy); g.lineTo(cx, cy + s * .3); g.lineTo(cx - s * .3, cy); g.closePath(); g.stroke();
      g.fillStyle = "#c9a24a"; g.beginPath(); g.arc(cx, cy, 6, 0, Math.PI * 2); g.fill();
    }
  } },
  starcarpet: { ja: "星空の じゅうたん", en: "Starry carpet", tile: 2.4, shine: 5, draw: (g, w, h) => {
    g.fillStyle = "#1d2a5c"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) { g.fillStyle = `rgba(${rnd() < .5 ? "0,0,0" : "140,160,255"},.06)`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    const star = (x, y, r, c) => { g.fillStyle = c; g.beginPath(); for (let k = 0; k < 10; k++) { const a = k * Math.PI / 5 - Math.PI / 2, rr = k % 2 ? r * .45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); };
    for (let i = 0; i < 26; i++) star(rnd() * w, rnd() * h, 6 + rnd() * 14, rnd() < .7 ? "#ffd75e" : "#ffffff");
  } },
  terrazzo: { ja: "テラゾー", en: "Terrazzo", tile: 2, shine: 90, draw: (g, w, h) => {
    g.fillStyle = "#efe6d8"; g.fillRect(0, 0, w, h);
    const cols = ["#e8731c", "#2f8fb0", "#e0b100", "#4f8a3c", "#d16ba5", "#8a8a8a", "#ffffff", "#c0392b"];
    for (let i = 0; i < 700; i++) {
      g.fillStyle = cols[Math.floor(rnd() * cols.length)]; g.beginPath();
      const x = rnd() * w, y = rnd() * h, r = 2 + rnd() * 9, n = 4 + Math.floor(rnd() * 3);
      for (let k = 0; k < n; k++) { const a = k / n * Math.PI * 2 + rnd(); g.lineTo(x + Math.cos(a) * r * (.6 + rnd() * .5), y + Math.sin(a) * r * (.6 + rnd() * .5)); }
      g.closePath(); g.fill();
    }
  } },
  pastel: { ja: "パステル タイル", en: "Pastel tiles", tile: 2, shine: 80, draw: (g, w, h) => {
    const cols = ["#f8c8d4", "#c8e6f8", "#d8f0c8", "#fbe7b4"], n = 4, s = w / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { g.fillStyle = cols[(i + j * 2) % 4]; g.fillRect(i * s, j * s, s, s); }
    g.strokeStyle = "#ffffff"; g.lineWidth = 5; for (let i = 0; i <= n; i++) { g.beginPath(); g.moveTo(i * s, 0); g.lineTo(i * s, h); g.stroke(); g.beginPath(); g.moveTo(0, i * s); g.lineTo(w, i * s); g.stroke(); }
  } },
};
const floorCanvas = {};
export function floorPreview(id) { return floorCanvas[id] ||= cnv(512, 512, (g, w, h) => FLOORS[id].draw(g, w, h)); }
const floorMats = {};
export function floorMaterial(id, W, D) {
  const f = FLOORS[id] || FLOORS.oak, key = id + W + "x" + D;
  return floorMats[key] ||= (() => {
    const t = new THREE.CanvasTexture(floorPreview(id)); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
    t.repeat.set(W / f.tile, D / f.tile);
    return new THREE.MeshPhongMaterial({ map: t, specular: f.shine > 60 ? "#8a8070" : "#3a3028", shininess: f.shine });
  })();
}

// ---------- frames ----------
const M = {};
const phong = (c, spec, sh) => new THREE.MeshPhongMaterial({ color: c, specular: spec, shininess: sh });
function mats() {
  if (M.gold) return M;
  Object.assign(M, {
    gold: phong("#c39a42", "#fff0b8", 60), goldDark: phong("#8e6a24", "#d8b870", 40), goldBright: phong("#e2be63", "#fff6d8", 80),
    black: phong("#1d1b1a", "#666", 40), lacquer: phong("#121010", "#ffffff", 120), red: phong("#a5212b", "#ffb0b0", 60),
    white: phong("#f4f2ee", "#ffffff", 30), silver: phong("#b9bec6", "#ffffff", 110), silverDark: phong("#7d838c", "#ffffff", 80),
    oak: (() => { const t = new THREE.CanvasTexture(cnv(256, 256, (g, w, h) => planks(g, w, h, "#b07a46", 8))); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 3);
      return new THREE.MeshPhongMaterial({ map: t, specular: "#5a4030", shininess: 40 }); })(),
    pink: phong("#f29bb8", "#ffffff", 60), mint: phong("#8fdcc0", "#ffffff", 60),
    matWhite: new THREE.MeshLambertMaterial({ color: "#f7f4ec" }), matCream: new THREE.MeshLambertMaterial({ color: "#efe4cc" }),
    matGrey: new THREE.MeshLambertMaterial({ color: "#dcdcdc" }), matNavy: new THREE.MeshLambertMaterial({ color: "#26304f" }),
    rainbow: new THREE.MeshPhongMaterial({ vertexColors: true, specular: "#ffffff", shininess: 60 }),
  });
  return M;
}
// layers from the picture outwards: inset = gap from the picture edge, b = width, d = depth, bev = rounded edge
export const FRAMES = {
  gold: { ja: "金の がくぶち", en: "Classic gold", layers: [{ b: .045, d: .09, bev: .012, m: "goldDark" }, { inset: .045, b: .15, d: .055, bev: .03, m: "gold" }, { inset: .195, b: .04, d: .085, bev: .015, m: "goldBright" }] },
  royal: { ja: "おうさまの がくぶち", en: "Royal gold", corners: "goldBright", layers: [{ b: .05, d: .1, bev: .012, m: "goldDark" }, { inset: .05, b: .08, d: .075, bev: .02, m: "gold" },
    { inset: .13, b: .06, d: .11, bev: .03, m: "goldBright" }, { inset: .19, b: .12, d: .065, bev: .04, m: "gold" }, { inset: .31, b: .045, d: .1, bev: .02, m: "goldBright" }] },
  modern: { ja: "黒い モダン", en: "Black & white mat", mat: { b: .26, m: "matWhite" }, layers: [{ inset: .26, b: .045, d: .075, bev: .006, m: "black" }] },
  oak: { ja: "木の がくぶち", en: "Natural wood", mat: { b: .15, m: "matCream" }, layers: [{ inset: .15, b: .13, d: .06, bev: .02, m: "oak" }] },
  silver: { ja: "銀の がくぶち", en: "Silver", mat: { b: .12, m: "matGrey" }, layers: [{ inset: .12, b: .025, d: .07, bev: .008, m: "silverDark" }, { inset: .145, b: .13, d: .055, bev: .03, m: "silver" }] },
  gallery: { ja: "白い ギャラリー", en: "White gallery", layers: [{ b: .07, d: .14, bev: .008, m: "white" }] },
  lacquer: { ja: "うるし", en: "Black lacquer", mat: { b: .14, m: "matNavy" }, layers: [{ inset: .14, b: .025, d: .07, bev: .006, m: "goldBright" }, { inset: .165, b: .13, d: .06, bev: .015, m: "lacquer" }, { inset: .295, b: .02, d: .07, bev: .006, m: "red" }] },
  rainbow: { ja: "にじいろ", en: "Rainbow", layers: [{ b: .04, d: .08, bev: .01, m: "white" }, { inset: .04, b: .17, d: .06, bev: .035, m: "rainbow" }] },
  candy: { ja: "キャンディ", en: "Candy pink", mat: { b: .1, m: "matWhite" }, layers: [{ inset: .1, b: .035, d: .08, bev: .015, m: "mint" }, { inset: .135, b: .15, d: .06, bev: .045, m: "pink" }] },
};
const outer = f => Math.max(f.mat ? f.mat.b : 0, ...f.layers.map(l => (l.inset || 0) + l.b));
function ringGeo(w, h, inset, b, d, bev) {
  // the rounded edge eats into the ring from both sides; keep some flat width or the hole gets filled in
  bev = Math.min(bev, b * .35);
  const hw = w / 2 + inset, hh = h / 2 + inset, ow = hw + b - bev, oh = hh + b - bev, iw = hw + bev, ih = hh + bev;
  const s = new THREE.Shape(); s.moveTo(-ow, -oh); s.lineTo(ow, -oh); s.lineTo(ow, oh); s.lineTo(-ow, oh); s.closePath();
  const hole = new THREE.Path(); hole.moveTo(-iw, -ih); hole.lineTo(-iw, ih); hole.lineTo(iw, ih); hole.lineTo(iw, -ih); hole.closePath(); s.holes.push(hole);
  const g = new THREE.ExtrudeGeometry(s, { depth: Math.max(.001, d - bev * 2), bevelEnabled: bev > 0, bevelThickness: bev, bevelSize: bev, bevelSegments: 2, curveSegments: 1 });
  g.translate(0, 0, bev);
  return g;
}
function rainbowColours(g) {
  const p = g.attributes.position, c = new Float32Array(p.count * 3), col = new THREE.Color();
  for (let i = 0; i < p.count; i++) { col.setHSL(((Math.atan2(p.getY(i), p.getX(i)) / (Math.PI * 2)) + 1) % 1, .75, .58); c.set([col.r, col.g, col.b], i * 3); }
  g.setAttribute("color", new THREE.BufferAttribute(c, 3));
}
// a frame (and mat) around a w x h picture; the picture sits at z = .06
export function buildFrame(id, w, h) {
  const f = FRAMES[id] || FRAMES.gold, mm = mats(), grp = new THREE.Group();
  if (f.mat) {
    const s = new THREE.Shape(), o = { x: w / 2 + f.mat.b + .01, y: h / 2 + f.mat.b + .01 };
    s.moveTo(-o.x, -o.y); s.lineTo(o.x, -o.y); s.lineTo(o.x, o.y); s.lineTo(-o.x, o.y); s.closePath();
    const hole = new THREE.Path(); hole.moveTo(-w / 2, -h / 2); hole.lineTo(-w / 2, h / 2); hole.lineTo(w / 2, h / 2); hole.lineTo(w / 2, -h / 2); hole.closePath(); s.holes.push(hole);
    const m = new THREE.Mesh(new THREE.ShapeGeometry(s), mm[f.mat.m]); m.position.z = .061; grp.add(m);
    const back = new THREE.Mesh(new THREE.PlaneGeometry(w + f.mat.b * 2, h + f.mat.b * 2), mm[f.mat.m]); back.position.z = .02; grp.add(back);
  }
  for (const l of f.layers) {
    const g = ringGeo(w, h, l.inset || 0, l.b, l.d, l.bev || 0);
    if (l.m === "rainbow") rainbowColours(g);
    grp.add(new THREE.Mesh(g, mm[l.m]));
  }
  if (f.corners) {
    const o = outer(f) - .06, sg = new THREE.SphereGeometry(.085, 12, 8);
    for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { const s = new THREE.Mesh(sg, mm[f.corners]); s.position.set(sx * (w / 2 + o), sy * (h / 2 + o), .11); s.scale.z = .6; grp.add(s); }
  }
  grp.userData.outer = outer(f);
  return grp;
}
// a little drawing of the frame for the menus
export function framePreview(id) {
  const f = FRAMES[id] || FRAMES.gold;
  return cnv(220, 170, (g, W, H) => {
    const k = 120, pw = 1.2, ph = .85, o = outer(f), tw = (pw + o * 2) * k, th = (ph + o * 2) * k, s = Math.min((W - 16) / tw, (H - 16) / th);
    const px = pw * k * s, py = ph * k * s, cx = W / 2, cy = H / 2;
    const col = { gold: "#c39a42", goldDark: "#8e6a24", goldBright: "#e9c76d", black: "#1d1b1a", lacquer: "#121010", red: "#a5212b", white: "#f4f2ee", silver: "#c3c8cf", silverDark: "#7d838c", oak: "#b07a46", pink: "#f29bb8", mint: "#8fdcc0",
      matWhite: "#f7f4ec", matCream: "#efe4cc", matGrey: "#dcdcdc", matNavy: "#26304f" };
    const rect = (inset, b, c) => { const a = (inset + b) * k * s; g.fillStyle = c; g.fillRect(cx - px / 2 - a, cy - py / 2 - a, px + a * 2, py + a * 2); };
    const layers = [...f.layers].sort((a, b) => ((b.inset || 0) + b.b) - ((a.inset || 0) + a.b));
    for (const l of layers) {
      if (l.m === "rainbow") { const a = ((l.inset || 0) + l.b) * k * s, gr = g.createConicGradient(0, cx, cy); for (let i = 0; i <= 6; i++) gr.addColorStop(i / 6, `hsl(${i * 60},75%,58%)`); g.fillStyle = gr; g.fillRect(cx - px / 2 - a, cy - py / 2 - a, px + a * 2, py + a * 2); }
      else {
        rect(l.inset || 0, l.b, col[l.m]);
        const a = ((l.inset || 0) + l.b) * k * s, gr = g.createLinearGradient(0, cy - py / 2 - a, 0, cy + py / 2 + a);
        gr.addColorStop(0, "rgba(255,255,255,.28)"); gr.addColorStop(.5, "rgba(255,255,255,0)"); gr.addColorStop(1, "rgba(0,0,0,.22)");
        g.fillStyle = gr; g.fillRect(cx - px / 2 - a, cy - py / 2 - a, px + a * 2, py + a * 2);
      }
    }
    if (f.mat) rect(0, f.mat.b, col[f.mat.m]);
    if (f.corners) for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { const o2 = (o - .06) * k * s; g.fillStyle = col[f.corners]; g.beginPath(); g.arc(cx + sx * (px / 2 + o2), cy + sy * (py / 2 + o2), 6, 0, Math.PI * 2); g.fill(); }
    // a little landscape picture
    const sky = g.createLinearGradient(0, cy - py / 2, 0, cy + py / 2); sky.addColorStop(0, "#8ec9f0"); sky.addColorStop(1, "#d9f0ff");
    g.fillStyle = sky; g.fillRect(cx - px / 2, cy - py / 2, px, py);
    g.fillStyle = "#6fb35a"; g.beginPath(); g.moveTo(cx - px / 2, cy + py / 2); g.lineTo(cx - px / 2, cy + py * .1); g.quadraticCurveTo(cx - px * .1, cy - py * .25, cx + px * .2, cy + py * .1); g.quadraticCurveTo(cx + px * .4, cy + py * .25, cx + px / 2, cy); g.lineTo(cx + px / 2, cy + py / 2); g.fill();
    g.fillStyle = "#ffd75e"; g.beginPath(); g.arc(cx + px * .28, cy - py * .22, py * .12, 0, Math.PI * 2); g.fill();
  });
}
