import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { DATA } from "./data.js";
import { NATURE } from "./topics_nature.js";
import { WORLD } from "./topics_world.js";
import { MORE } from "./topics_more.js";
import { ART } from "./topics_art.js";
import { PHILOSOPHY } from "./topics_philosophy.js";
import { BATCH1 } from "./topics_batch1.js";
import { WINGS, BACKLINKS } from "./topics_wings.js";
import { HALLS, LOBBY_GATES, wingRooms } from "./halls.js";
import { PHOTOS } from "./photos.js";
import { DETAILS } from "./details/index.js";
import { plain, ruby } from "./text.js";
import { loadGuests, spawnGuests, spawnMascots, updateGuests, clearGuests, newAsker, doneAsking, setLines, setScene, startFollow, endFollow, following, say } from "./guests.js";
import { startSfx, setSfx, setRoomSize, footstep, door, chime } from "./sfx.js";
import { buildDisplay, displayFor, forgetDisplay, updateDisplays, setDisplayRenderer } from "./displays.js";
import { confetti } from "./confetti.js";
import { initNotebook, openNotebook, notebookOpen } from "./notebook.js";
import { startMusic, toggleMusic, musicOn } from "./music.js";
import * as MM from "./mymuseum.js";
import { buildFrame, floorMaterial } from "./decor.js";

// ================= content =================
const TOPICS = { ...NATURE, ...WORLD, ...MORE, ...ART, ...PHILOSOPHY, ...BATCH1, ...WINGS, ...HALLS };
for (const [id, extra] of Object.entries(BACKLINKS)) if (TOPICS[id]) TOPICS[id].links = [...new Set([...(TOPICS[id].links || []), ...extra])];
const GROUPS = Object.fromEntries(DATA.groups.map(g => [g.id, g]));
const STATUS = {
  LC: { ja: "今は しんぱい なし", en: "Least Concern", c: "#3a9d5d" },
  NT: { ja: "しんぱいに なりそう", en: "Near Threatened", c: "#9bbf3a" },
  VU: { ja: "ぜつめつの おそれ", en: "Vulnerable", c: "#e8b21c" },
  EN: { ja: "ぜつめつの きけんが 高い", en: "Endangered", c: "#e8731c" },
  CR: { ja: "ぜつめつ すんぜん", en: "Critically Endangered", c: "#d33c2f" },
};
const STATUS_ORDER = ["LC", "NT", "VU", "EN", "CR"];
const BIOME = { ocean: ["海", "ocean"], rainforest: ["ねったいうりん", "rainforest"], savanna: ["サバンナ", "savanna"], desert: ["さばく", "desert"], forest: ["森", "forest"] };

// normalise every topic's exhibits into objects
for (const [id, t] of Object.entries(TOPICS)) {
  t.id = id;
  let list = [];
  if (t.animals) {
    list = DATA.animals.filter(a => a.room === t.animals).map(a => {
      const g = GROUPS[a.group];
      const rows = [["🌏 すんでいる 国", a.countries.map(c => c[0]).join("、"), a.countries.map(c => c[1]).join(", ")]];
      if (a.room === "polar") rows.push(["🏞️ すみか", a.pole === "S" ? "南極" : "北極", a.pole === "S" ? "Antarctica" : "the Arctic"]);
      else if (BIOME[a.room]) rows.push(["🏞️ すみか", ...BIOME[a.room]]);
      rows.push(["🍽️ 食べもの", a.eats.map(e => e[0]).join("、"), a.eats.map(e => e[1]).join(", ")]);
      rows.push(["🧬 なかま", g.ja, g.en]);
      return { id: a.id, ja: a.ja, en: a.en, img: a.img, fact: a.fact, rows, status: a.status, statusSource: a.statusSource, animal: a };
    });
  } else if (t.groups) {
    list = DATA.groups.map(g => ({ ja: g.ja, en: g.en, img: g.img, fact: g.ja_text, rows: [["📷 しゃしん", g.animal[0], g.animal[1]]] }));
  } else {
    list = (t.items || []).map(([ja, en, pic, fact, rows, year, x]) => ({ ja, en, pic, img: PHOTOS[id + "|" + en], fact, rows: (rows || []).concat(year ? [["📅 年代", year, ""]] : []), year, status: x?.s, statusSource: x?.src }));
  }
  list.forEach((it, i) => {
    it.key = id + ":" + i; it.topic = id;
    // longer explanation + English practice lines, written per exhibit in src/details/
    const d = DETAILS[id]?.[it.id || it.en];
    if (d) { it.about = d[0]; it.say = d.slice(1).map(x => x.split(" / ")); }
    if (!it.say?.length) it.say = templateSay(id, it);
  });
  t.list = list;
}
function templateSay(id, it) {
  const row = k => (it.rows || []).find(r => plain(r[0]).includes(k));
  const an = w => /^[aeiou]/i.test(w) ? "an" : "a";
  if (it.animal) {
    const a = it.animal, c = a.countries[0], e = a.eats[0];
    return [[`This is ${an(a.en)} ${a.en}.`, `これは ${a.ja}です。`],
      [`It lives in ${c[1]}.`, `${c[0].replace(/\(.*\)/, "")}に すんで います。`],
      [`It eats ${e[1]}.`, `${e[0]}を 食べます。`]];
  }
  const cap = row("首都"), food = row("食べもの");
  if (cap || food) return [[`I want to go to ${it.en}.`, `${it.ja}に 行きたいです。`],
    ...(cap ? [[`The capital is ${cap[2]}.`, `首都は ${cap[1]}です。`]] : []),
    ...(food ? [[`I want to eat ${food[2]}.`, `${food[1]}を 食べたいです。`]] : [])];
  return [];
}
const ROAM = Object.keys(TOPICS).filter(id => !TOPICS[id].hall);
// rooms a door may lead to (in My Museum: only rooms you have opened)
const canVisit = id => !MM.active || (MM.inMode(id) && MM.isUnlocked(id));
const roamPick = not => { const pool = ROAM.filter(id => id !== not && canVisit(id)); return TOPICS[rand(pool.length ? pool : ROAM)]; };
const ALL_ITEMS = Object.values(TOPICS).reduce((n, t) => n + t.list.length, 0);
const HUBS = ["animals", "regions", "japan", "solar-system", "world-dishes", "ball-sports", "jobs-dream", "inventions", "nagasaki", "dinosaurs", "heroes", "science-fun", "aquarium", "town", "art", "art-timeline", "art-world-crafts", "human-body", "japan-islands", "games-world", "philosophy-questions", "hello-world", "nagasaki-city", "orchestra", "sdgs"];
const LOBBY = {
  id: "lobby", ja: "ロビー", en: "Grand Hall", c: "#6b4d2c", lobby: true, hall: true,
  gates: LOBBY_GATES.map(id => [id, TOPICS[id].icon]),
  list: [
    { ja: "ようこそ！", en: "Welcome to the Museum", text: true,
      fact: "ここは どこまでも つづく ふしぎな はくぶつかん。まずは 気に なる テーマの ドアを えらぼう。その 先には もっと くわしい へやが たくさん！ どこへ 行くかは、あなた しだい！" },
    { ja: "フロアガイド", en: "Floor guide", text: true,
      fact: LOBBY_GATES.map(id => TOPICS[id].icon + " " + TOPICS[id].ja).join("　") },
  ],
};

// ================= constants =================
const ROOM = 22, HALF = ROOM / 2, WALL_T = 0.3, DOOR_W = 3.6, DOOR_H = 3.6, EYE = 1.6, RADIUS = 0.45;
const FONT = "'Noto Sans JP','Noto Sans CJK JP','Hiragino Sans','Yu Gothic','Meiryo',sans-serif";
const EMOJI_FONT = "'Noto Color Emoji','Apple Color Emoji','Segoe UI Emoji',sans-serif";
const DIRS = { N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0] };
const OPP = { N: "S", S: "N", E: "W", W: "E" };
const rand = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ================= renderer =================
const app = document.getElementById("app");
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "low-power" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
renderer.outputColorSpace = THREE.SRGBColorSpace;
app.appendChild(renderer.domElement);
setDisplayRenderer(renderer);
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f1ece3");
scene.fog = new THREE.Fog("#f1ece3", 34, 90);
const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 110);
// soft skylit look: bright warm sky from above, warm bounce from the wooden floor
scene.add(new THREE.HemisphereLight("#fffefa", "#f3eadc", 2.2));
const sun = new THREE.DirectionalLight("#fff3dc", 0.85); sun.position.set(2, 10, 3); scene.add(sun);
scene.add(sun.target);
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
addEventListener("resize", resize); resize();

// ================= textures =================
// sign and name plate for a display plinth: lines = [[text, colour, px], ...], or "ring" for the dashed circle on an empty plinth
function displayTex(lines, w, h) {
  if (lines === "ring") return canvasTex(256, 256, (g, W) => {
    g.strokeStyle = "rgba(107,77,44,.55)"; g.lineWidth = 7; g.setLineDash([18, 14]); g.beginPath(); g.arc(W / 2, W / 2, W / 2 - 10, 0, Math.PI * 2); g.stroke();
    g.setLineDash([]); g.fillStyle = "rgba(107,77,44,.45)"; g.font = `bold 120px ${FONT}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("?", W / 2, W / 2 + 6);
  });
  const W = 600, H = Math.round(W * h / w);
  return canvasTex(W, H, (g) => {
    g.fillStyle = "#fffaf0"; g.beginPath(); g.roundRect(4, 4, W - 8, H - 8, 26); g.fill();
    g.strokeStyle = "#c9a24a"; g.lineWidth = 8; g.stroke();
    const total = lines.reduce((a, l) => a + l[2] * 1.25, 0); let y = (H - total) / 2;
    g.textAlign = "center"; g.textBaseline = "top";
    for (const [t, c, px] of lines) { g.fillStyle = c; fitFont(g, t, W - 50, px); g.fillText(t, W / 2, y + px * .1); y += px * 1.25; }
  });
}
function canvasTex(w, h, draw) {
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function shade(hex, amt) { const c = new THREE.Color(hex), hsl = {}; c.getHSL(hsl); c.setHSL(hsl.h, hsl.s, Math.max(0, Math.min(1, hsl.l + amt))); return "#" + c.getHexString(); }
function mix(hex, to, t) { return "#" + new THREE.Color(hex).lerp(new THREE.Color(to), t).getHexString(); }
function fitFont(g, text, max, size, weight = "bold", font = FONT) {
  g.font = `${weight} ${size}px ${font}`;
  while (g.measureText(text).width > max && size > 18) { size -= 2; g.font = `${weight} ${size}px ${font}`; }
  return size;
}
function wrapText(g, text, x, y, maxW, lh, maxLines = 9) {
  text = plain(text);
  const parts = text.split(/(?<= )/); let line = ""; const lines = [];
  for (const p of parts) {
    if (g.measureText(line + p).width > maxW && line) { lines.push(line); line = ""; }
    if (g.measureText(p).width > maxW) { for (const ch of p) { if (g.measureText(line + ch).width > maxW) { lines.push(line); line = ""; } line += ch; } }
    else line += p;
  }
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((l, i) => g.fillText(l.trim(), x, y + i * lh));
}
const shared = {}; // shared (never disposed) textures/materials
function plankTex(base, w = 1024) {
  const t = canvasTex(w, w, (g, W, H) => {
    g.fillStyle = base; g.fillRect(0, 0, W, H);
    const rows = 16, rh = H / rows;
    for (let r = 0; r < rows; r++) {
      let x = -((r * 173) % 300);
      while (x < W) {
        const len = 260 + ((r * 97 + x * 3) % 220);
        const tone = (((r * 31 + x * 7) % 11) - 5) / 420;
        g.fillStyle = shade(base, tone); g.fillRect(x, r * rh, len, rh);
        // grain
        g.globalAlpha = .07; g.strokeStyle = shade(base, -.25);
        for (let k = 0; k < 6; k++) { const yy = r * rh + 4 + Math.random() * (rh - 8); g.beginPath(); g.moveTo(x, yy); g.bezierCurveTo(x + len * .3, yy + 3, x + len * .6, yy - 3, x + len, yy + 1); g.stroke(); }
        g.globalAlpha = 1; g.fillStyle = "rgba(90,60,30,.18)"; g.fillRect(x, r * rh, 2, rh);
        x += len;
      }
      g.fillStyle = "rgba(90,60,30,.16)"; g.fillRect(0, r * rh, W, 2);
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
const floorMap = plankTex("#d4ae7e"); floorMap.repeat.set(ROOM / 6, ROOM / 6);
const corrMap = plankTex("#d4ae7e", 512); corrMap.repeat.set(1, 1);
const wallMap = (() => {
  const t = canvasTex(256, 256, (g, w, h) => { g.fillStyle = "#ffffff"; g.fillRect(0, 0, w, h); for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${Math.random() < .5 ? "255,255,255" : "120,100,80"},${Math.random() * .035})`; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); } });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(5, 2); return t; })();
const scallopMap = canvasTex(256, 256, (g, w, h) => {
  // soft arch of light thrown up the wall by a spotlight
  const img = g.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const nx = (x / w - .5) * 2, ny = y / h; // 0 top
    const edge = 0.18 + nx * nx * 0.55;           // parabola: arc top
    let a = ny < edge ? Math.max(0, 1 - (edge - ny) / 0.06) : 1;
    a *= Math.max(0, 1 - Math.abs(nx) ** 3);       // fade sides
    a *= Math.min(1, (1 - ny) / 0.55);             // fade down
    const i = (y * w + x) * 4; img.data[i] = 255; img.data[i + 1] = 250; img.data[i + 2] = 240; img.data[i + 3] = Math.max(0, Math.min(255, a * 200));
  }
  g.putImageData(img, 0, 0);
});
const lamb = c => shared["l" + c] ||= new THREE.MeshLambertMaterial({ color: c });
// coffered plaster for vaults and domes
const cofferImg = (() => { const c = document.createElement("canvas"); c.width = c.height = 128; const g = c.getContext("2d");
  g.fillStyle = "#fbf8f2"; g.fillRect(0, 0, 128, 128);
  const gr = g.createLinearGradient(14, 14, 114, 114); gr.addColorStop(0, "#d9d0c2"); gr.addColorStop(.5, "#ece5d9"); gr.addColorStop(1, "#f7f3ec");
  g.fillStyle = gr; g.fillRect(14, 14, 100, 100);
  g.fillStyle = "#f6f1e8"; g.fillRect(30, 30, 68, 68);
  g.fillStyle = "#e6dccb"; g.beginPath(); g.arc(64, 64, 11, 0, Math.PI * 2); g.fill();
  g.fillStyle = "#f8f4ec"; g.beginPath(); g.arc(62, 62, 6, 0, Math.PI * 2); g.fill();
  return c; })();
function coffer(rx, ry) {
  return shared["cof" + rx + "x" + ry] ||= (() => { const t = new THREE.CanvasTexture(cofferImg); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.anisotropy = 4;
    return new THREE.MeshLambertMaterial({ map: t, side: THREE.DoubleSide }); })();
}
const skyTex = canvasTex(256, 256, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, "#ffffff"); gr.addColorStop(.6, "#e4f0fb"); gr.addColorStop(1, "#c9def3");
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.fillStyle = "rgba(255,255,255,.55)"; for (let i = 0; i < 5; i++) { g.beginPath(); g.ellipse(40 + i * 50, 60 + (i % 3) * 60, 46, 16, 0, 0, Math.PI * 2); g.fill(); }
  g.strokeStyle = "#e9e3d8"; g.lineWidth = 7; for (let k = 0; k <= 4; k++) { g.beginPath(); g.moveTo(k * w / 4, 0); g.lineTo(k * w / 4, h); g.stroke(); g.beginPath(); g.moveTo(0, k * h / 4); g.lineTo(w, k * h / 4); g.stroke(); }
});
skyTex.wrapS = skyTex.wrapT = THREE.RepeatWrapping;
const aoTex = canvasTex(8, 64, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "rgba(60,40,20,0)"); gr.addColorStop(1, "rgba(60,40,20,.2)"); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
const stoneMap = (() => { const t = canvasTex(256, 256, (g, w, h) => { g.fillStyle = "#d3cfc8"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 1800; i++) { g.fillStyle = `rgba(${Math.random() < .5 ? "255,255,255" : "90,85,80"},${Math.random() * .06})`; g.fillRect(Math.random() * w, Math.random() * h, 3, 3); }
  g.strokeStyle = "rgba(120,110,100,.35)"; g.lineWidth = 2; g.strokeRect(1, 1, w - 2, h - 2); g.beginPath(); g.moveTo(w / 2, 0); g.lineTo(w / 2, h / 2); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.moveTo(w / 4, h / 2); g.lineTo(w / 4, h); g.moveTo(w * .75, h / 2); g.lineTo(w * .75, h); g.stroke(); });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; })();
const mats = {
  wall: new THREE.MeshLambertMaterial({ map: wallMap, color: "#f7f3ec" }),
  trim: lamb("#fdfaf4"), trim2: new THREE.MeshLambertMaterial({ color: "#f8f4ec", side: THREE.DoubleSide }),
  base: lamb("#e3d9c9"),
  floor: new THREE.MeshPhongMaterial({ map: floorMap, specular: "#5a4a3a", shininess: 60 }),
  floorC: new THREE.MeshPhongMaterial({ map: corrMap, specular: "#5a4a3a", shininess: 60 }),
  black: lamb("#2a2622"), brass: new THREE.MeshPhongMaterial({ color: "#c9a44c", specular: "#fff2c0", shininess: 70 }), rope: lamb("#8e2a33"),
  glass: new THREE.MeshBasicMaterial({ color: "#eef4f8" }),
  gold: new THREE.MeshPhongMaterial({ color: "#c39a42", specular: "#fff0b8", shininess: 55 }),
  bench: new THREE.MeshPhongMaterial({ color: "#c99a60", specular: "#333", shininess: 30 }),
  plinth: lamb("#d8d4cd"),
  sky: new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.DoubleSide, fog: false }),
  ao: new THREE.MeshBasicMaterial({ map: aoTex, transparent: true, depthWrite: false }),
  stone: new THREE.MeshPhongMaterial({ map: stoneMap, specular: "#444", shininess: 40 }),
};

// palette for a topic: wall colour (light) + floor (mid)
const wallColor = t => mix(t.c, "#f6f0e4", 0.78);
// My Museum: a room painted in the colour its owner chose
const wallM = r => { const c = MM.roomColour(r.topic.id); if (!c) return mats.wall;
  return shared["wall" + c] ||= new THREE.MeshLambertMaterial({ map: wallMap, color: mix(c, "#ffffff", .62) }); };
const floorColor = t => mix(t.c, "#6b5136", 0.55);

function drawPic(g, pic, x, y, size) {
  if (pic && pic.startsWith("planet:")) {
    const [, col, ring] = pic.split(":"); const r = size * 0.36;
    if (ring) { g.strokeStyle = shade(col, -0.15); g.lineWidth = r * 0.16; g.beginPath(); g.ellipse(x, y, r * 1.75, r * 0.45, -0.25, Math.PI, Math.PI * 2); g.stroke(); }
    const gr = g.createRadialGradient(x - r * .35, y - r * .35, r * .1, x, y, r);
    gr.addColorStop(0, shade(col, 0.2)); gr.addColorStop(1, shade(col, -0.22));
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    if (ring) { g.strokeStyle = shade(col, -0.05); g.lineWidth = r * 0.16; g.beginPath(); g.ellipse(x, y, r * 1.75, r * 0.45, -0.25, 0, Math.PI); g.stroke(); }
    return;
  }
  const isGlyph = /^[\p{L}\p{N}]/u.test(pic || "");
  g.textAlign = "center"; g.textBaseline = "middle";
  g.font = `${isGlyph ? "bold " : ""}${size * (isGlyph ? 0.55 : 0.6)}px ${isGlyph ? FONT : EMOJI_FONT}`;
  g.fillStyle = isGlyph ? "#ffffff" : "#000";
  g.fillText(pic || "?", x, y + size * 0.03);
}
function picTex(item, color) {
  // a printed poster: pale paper tinted with the room colour, the picture large in the middle
  return canvasTex(512, 384, (g, w, h) => {
    g.fillStyle = mix(color, "#fbf9f4", .82); g.fillRect(0, 0, w, h);
    const gr = g.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, 260); gr.addColorStop(0, "rgba(255,255,255,.75)"); gr.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = mix(color, "#ffffff", .45); g.lineWidth = 3; g.strokeRect(16, 16, w - 32, h - 32);
    if (!item.pic?.startsWith("planet:") && /^[\p{L}\p{N}]/u.test(item.pic || "")) { g.fillStyle = shade(color, -.05); g.beginPath(); g.arc(w / 2, h / 2, 140, 0, Math.PI * 2); g.fill(); }
    drawPic(g, item.pic, w / 2, h / 2, 300);
  });
}
// a short year ("1969") sits beside the English; a long one ("66 million years ago") gets its own line
const longYear = year => { if (!year) return false; const g = longYear.g ||= document.createElement("canvas").getContext("2d"); g.font = `bold 30px ${FONT}`; return g.measureText(year).width > 150; };
function labelTex(ja, en, status, year) {
  const tall = longYear(year);
  return canvasTex(480, tall ? 196 : 150, (g, w, h) => {
    g.fillStyle = "#f7f5f0"; g.fillRect(0, 0, w, h);
    if (year) { g.fillStyle = "#b0542a"; g.textBaseline = "middle";
      if (tall) { g.textAlign = "left"; fitFont(g, year, w - 44, 30); g.fillText(year, 22, 156); }
      else { g.textAlign = "right"; g.font = `bold 30px ${FONT}`; g.fillText(year, w - 18, 108); } }
    g.fillStyle = "#222"; g.textAlign = "left"; g.textBaseline = "middle";
    fitFont(g, ja, w - 70, 46); g.fillText(ja, 22, 52);
    g.fillStyle = "#555"; fitFont(g, en, year && !tall ? w - 190 : w - 50, 30, "500"); g.fillText(en, 22, 108);
    if (status) { g.fillStyle = STATUS[status].c; g.beginPath(); g.arc(w - 26, 30, 11, 0, Math.PI * 2); g.fill(); }
  });
}
function wallTextTex(title, en, body, color) {
  return canvasTex(1024, 768, (g, w, h) => {
    g.textAlign = "left"; g.textBaseline = "top";
    g.fillStyle = shade(color, -.12); fitFont(g, title, w - 40, 110); g.fillText(title, 10, 10);
    g.fillStyle = "#555"; fitFont(g, en, w - 40, 54, "600"); g.fillText(en, 14, 140);
    g.fillStyle = shade(color, -.05); g.fillRect(14, 220, 120, 8);
    g.fillStyle = "#2c2c2c"; g.font = `500 44px ${FONT}`; wrapText(g, body || "", 14, 262, w - 40, 66, 7);
  });
}
function letterTex(ja, en, color) {
  return canvasTex(1024, 205, (g, w, h) => {
    g.textAlign = "center"; g.textBaseline = "middle";
    g.fillStyle = color; fitFont(g, ja, w - 40, 96); g.fillText(ja, w / 2, 70);
    g.fillStyle = "#555"; fitFont(g, en, w - 40, 50, "600"); g.fillText(en, w / 2, 160);
  });
}

// ================= world model =================
// A room record lives forever (so the layout stays consistent); its meshes are built/disposed on demand.
const rooms = [];
const reserved = []; // AABBs {minX,maxX,minZ,maxZ}
const visitCount = {};
let roomsVisited = 0;
const overlaps = (a, b) => a.minX < b.maxX && a.maxX > b.minX && a.minZ < b.maxZ && a.maxZ > b.minZ;
const roomBox = (x, z, hx, hz, m = 0) => ({ minX: x - hx - m, maxX: x + hx + m, minZ: z - hz - m, maxZ: z + hz + m });
// room shapes: w = width across the entrance, d = depth away from it
const LAYOUTS = {
  square: { w: 22, d: 22, h: 7.8, roof: "dome" },
  small: { w: 14, d: 14, h: 7.7, roof: "cove" },
  long: { w: 13, d: 50, h: 7.8, roof: "vault" },
  wide: { w: 32, d: 20, h: 8, roof: "vault" },
  tall: { w: 18, d: 18, h: 8.6, roof: "dome" },
  hall: { w: 38, d: 26, h: 10.2, roof: "vault" },
};
function pickLayout(t) {
  if (t.layout) return t.layout;
  if (t.hall) return "hall";
  if (t.timeline) return "long";
  const n = t.list.length, x = Math.random();
  if (n >= 12) return t.timeline ? "long" : "wide";
  if (n <= 7 && x < .35) return "small";
  if (n >= 8 && x < .22) return "long";
  if (x < .32) return "wide";
  if (x < .4) return "tall";
  return "square";
}
function dims(layout, entry) {
  const L = LAYOUTS[layout];
  return entry === "E" || entry === "W" ? { hx: L.d / 2, hz: L.w / 2 } : { hx: L.w / 2, hz: L.d / 2 };
}
function newRoom(topic, x, z, entry, parent, layout) {
  layout ||= pickLayout(topic);
  const { hx, hz } = dims(layout, entry);
  const r = { i: rooms.length, topic, x, z, entry, parent, layout, hx, hz, h: LAYOUTS[layout].h, exits: null, group: null, colliders: [], exhibits: [] };
  r.wing = topic.hall ? (topic.lobby ? null : topic.id) : parent != null ? rooms[parent].wing : null;
  r.box = roomBox(x, z, hx, hz);
  rooms.push(r); reserved.push(r.box); return r;
}
function corridorBox(x0, z0, dir, len) {
  const [dx, dz] = DIRS[dir], hw = DOOR_W / 2 + WALL_T + 0.1;
  const x1 = x0 + dx * len, z1 = z0 + dz * len;
  return { minX: Math.min(x0, x1) - (dx ? 0 : hw), maxX: Math.max(x0, x1) + (dx ? 0 : hw), minZ: Math.min(z0, z1) - (dz ? 0 : hw), maxZ: Math.max(z0, z1) + (dz ? 0 : hw) };
}
// Doors lead on to other open rooms of the same wing that haven't been reached by a door yet,
// related rooms first. When a wing runs out, the room is a dead end (until a new room is opened).
const doorPlaced = {};   // wing id -> topic ids already behind a door somewhere
function wingCandidates(r) {
  const hall = HALLS[r.wing]; if (!hall || r.topic.hall) return [];
  const anc = new Set(); for (let q = r; q; q = q.parent != null ? rooms[q.parent] : null) anc.add(q.topic.id);
  const used = doorPlaced[r.wing] ||= new Set(), links = new Set(TOPICS[r.topic.id]?.links || []);
  return shuffle(wingRooms(r.wing).filter(id => TOPICS[id] && !anc.has(id) && !used.has(id) && canVisit(id)))
    .sort((a, b) => (links.has(b) - links.has(a)) || (visitCount[a] || 0) - (visitCount[b] || 0));
}
const doorsWanted = r => r.topic.timeline ? 1 : r.i % 2 ? 3 : 2;
// decide exits and reserve space for the next rooms
function planExits(r) {
  if (r.exits) return;
  r.exits = {};
  if (r.topic.hall) {
    if (r.topic.lobby) r.exits.S = { closed: true, label: ["いりぐち", "Entrance"] };
    planGates(r);
    return;
  }
  addDoors(r, doorsWanted(r));
}
function freeSides(r) {
  const sides = shuffle(Object.keys(DIRS).filter(s => s !== r.entry && !r.exits[s]));
  if (r.topic.timeline && r.entry) { const far = OPP[r.entry]; sides.sort((a, b) => (b === far) - (a === far)); }
  return sides;
}
function addDoors(r, n, only) {
  let made = 0;
  const picks = only ? [only] : wingCandidates(r);
  for (const id of picks) {
    if (made >= n) break;
    const side = freeSides(r).find(s => tryExit(r, s, TOPICS[id]));
    if (side) { (doorPlaced[r.wing] ||= new Set()).add(id); made++; }
  }
  return made;
}
// a room was just opened: give it a door from a room of its wing that has space for one
function doorToNewRoom(id) {
  const fwd = r => Object.values(r.exits || {}).filter(e => e.child != null).length;
  const cands = rooms.filter(r => r.exits && !r.topic.hall && HALLS[r.wing] && r.topic.id !== id && !(doorPlaced[r.wing] || new Set()).has(id)
    && wingRooms(r.wing).includes(id) && fwd(r) < 3)
    .sort((a, b) => (a !== rooms[player.room]) - (b !== rooms[player.room]) || fwd(a) - fwd(b) || b.i - a.i);
  for (const r of cands) if (addDoors(r, 1, id)) { if (r.group) dispose(r); return r; }
  return null;
}
function tryExit(r, side, topic) {
  const [dx, dz] = DIRS[side];
  const x0 = r.x + dx * r.hx, z0 = r.z + dz * r.hz;
  // fallbacks must still hold every exhibit (+ intro)
  const need = topic.list.length + 1, CAP = { small: 8, tall: 12, square: 12, wide: 20, long: 18, hall: 14 };
  const layouts = [...new Set([pickLayout(topic), ...(topic.timeline ? ["long"] : ["square", "wide", "small"])])].filter(l => CAP[l] >= need || l === topic.layout);
  for (const layout of layouts) for (const len of shuffle([3, 5, 8]).concat([12, 18, 26])) {
    const { hx, hz } = dims(layout, OPP[side]);
    const cx = x0 + dx * (len + hx), cz = z0 + dz * (len + hz);
    const box = roomBox(cx, cz, hx, hz, 0.6), cor = corridorBox(x0, z0, side, len);
    const shrink = { minX: cor.minX + (dx ? 0.05 : 0), maxX: cor.maxX - (dx ? 0.05 : 0), minZ: cor.minZ + (dz ? 0.05 : 0), maxZ: cor.maxZ - (dz ? 0.05 : 0) };
    const hit = reserved.some(b => overlaps(b, box) || (overlaps(b, shrink) && b !== r.box));
    if (hit) continue;
    const child = newRoom(topic, cx, cz, OPP[side], r.i, layout);
    reserved.push(cor);
    r.exits[side] = { child: child.i, len };
    return true;
  }
  return false;
}

// A warp: a short corridor ending in a portal that jumps to a new room built in open space far away.
// wing halls: a glowing doorway for every room in the wing, each a warp
function gateSpots(r) {
  const entry = r.entry || "S", far = OPP[entry], out = [];
  const sides = [far, ...Object.keys(DIRS).filter(s => s !== far && s !== entry)];
  for (const s of sides) {
    const along = DIRS[s][0] === 0, half = along ? r.hx : r.hz, n = Math.floor((half * 2 - 2) / 6);
    for (let i = 0; i < n; i++) out.push({ side: s, o: (i - (n - 1) / 2) * 6, far: s === far });
  }
  // big halls can also use the entrance wall, well away from the entrance itself
  { const along = DIRS[entry][0] === 0, half = along ? r.hx : r.hz;
    if (half >= 15) for (const o of [-(half - 6), half - 6]) out.push({ side: entry, o, far: false, entryWall: true }); }
  const [ex, ez] = DIRS[entry];
  const pos = g => { const [sx, sz] = DIRS[g.side]; return sx === 0 ? [g.o, sz * r.hz] : [sx * r.hx, g.o]; };
  // far wall first (centre out), then side walls from the far end
  const near = g => { const [px, pz] = pos(g); return ex * px + ez * pz; };
  out.sort((a, b) => (!!a.entryWall - !!b.entryWall) || (b.far - a.far) || (a.far ? Math.abs(a.o) - Math.abs(b.o) : near(a) - near(b)));
  return { out, pos };
}
function planGates(r) {
  const start = r.topic.lobby ? new URLSearchParams(location.search).get("start") : null;
  const list = r.topic.gates.filter(([id]) => TOPICS[id]);
  if (TOPICS[start]) { list[0] = [start, "⭐"]; const lay = new URLSearchParams(location.search).get("layout"); if (LAYOUTS[lay]) TOPICS[start].layout = lay; }
  const { out, pos } = gateSpots(r), [ex, ez] = DIRS[r.entry || "S"];
  const spots = out.slice(0, list.length);
  // hand them out in a sweep round the room, starting on the left of the entrance
  const ang = g => { const [px, pz] = pos(g); return (Math.atan2(ez * px - ex * pz, -(ex * px + ez * pz)) + Math.PI * 3) % (Math.PI * 2); };
  spots.sort((a, b) => ang(a) - ang(b));
  r.gates = [];
  spots.forEach((g, i) => {
    const [id, icon] = list[i], child = placeFar(r, TOPICS[id]);
    if (!child) return;
    child.warpFrom = g.side; child.warpO = g.o;
    r.gates.push({ side: g.side, o: g.o, child: child.i, icon, len: 4, warp: true, gate: true });
  });
}
function placeFar(r, topic) {
  const layout = pickLayout(topic), { hx, hz } = dims(layout, "S");
  for (let k = 1; k < 4000; k++) {
    const cx = 600 * Math.ceil(k / 8) * (k % 2 ? 1 : -1), cz = 600 * ((k % 8) - 4);
    const box = roomBox(cx, cz, hx, hz, 30);
    if (reserved.some(b => overlaps(b, box))) continue;
    const child = newRoom(topic, cx, cz, "S", r.i, layout);
    reserved.push(roomBox(cx, cz + hz + 3, 3, 3));
    return child;
  }
  return null;
}
const portalMat = new THREE.MeshBasicMaterial({ map: canvasTex(256, 256, (g, w, h) => {
  const gr = g.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 2);
  gr.addColorStop(0, "#ffffff"); gr.addColorStop(.35, "#c9a8ff"); gr.addColorStop(.75, "#6a3dc2"); gr.addColorStop(1, "#2a1a5a");
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.fillStyle = "#fff"; g.font = `bold 44px ${FONT}`; g.textAlign = "center"; g.fillText("ワープ", w / 2, h / 2 + 15);
}) });
function addPortal(r, x0, z0, side, len, target, mat) {
  // portal plane at the far end of a stub corridor; walking into it teleports
  const [dx, dz] = DIRS[side];
  const ex = x0 + dx * (len - .05), ez = z0 + dz * (len - .05);
  const p = new THREE.Mesh(archPlane(DOOR_W, ARCH_TOP), mat || portalMat);
  p.position.set(ex, 0, ez); p.lookAt(ex - dx, 0, ez - dz); r.group.add(p);
  r.portals.push({ x: x0 + dx * (len - 1), z: z0 + dz * (len - 1), target });
}

// ================= building meshes =================
const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
function addBox(r, w, h, d, m, x, y, z, solid) {
  const b = box(w, h, d, m); b.position.set(x, y, z); r.group.add(b);
  if (solid) r.colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 });
  return b;
}
function own(mat) { mat.userData.own = true; return mat; }

// ================= architecture =================
// Decoration is gathered per material and merged into one mesh each, so a room
// full of pilasters, ribs and ropes still costs only a few draw calls.
const ARCH_R = DOOR_W / 2, ARCH_TOP = DOOR_H + ARCH_R;
function kitAdd(r, geom, mat) {
  let g = geom.index ? geom.toNonIndexed() : geom; if (g !== geom) geom.dispose();
  for (const k of Object.keys(g.attributes)) if (!["position", "normal", "uv"].includes(k)) g.deleteAttribute(k);
  if (!g.attributes.uv) g.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  g.clearGroups(); g.morphAttributes = {};
  let list = r.kit.get(mat); if (!list) r.kit.set(mat, list = []); list.push(g);
}
function kitBox(r, w, h, d, mat, x, y, z) { const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z); kitAdd(r, g, mat); }
function kitFlush(r) {
  for (const [mat, gs] of r.kit) { const g = mergeGeometries(gs); gs.forEach(x => x.dispose()); if (g) r.group.add(new THREE.Mesh(g, mat)); }
  r.kit.clear();
}
// wall piece above a doorway with a round arch cut out of it
function lintelGeom(H) {
  const R = ARCH_R, sh = new THREE.Shape();
  sh.moveTo(-R, DOOR_H); sh.lineTo(-R, H); sh.lineTo(R, H); sh.lineTo(R, DOOR_H); sh.absarc(0, DOOR_H, R, 0, Math.PI, false);
  const g = new THREE.ExtrudeGeometry(sh, { depth: WALL_T, bevelEnabled: false, curveSegments: 16 }); g.translate(0, 0, -WALL_T / 2); return g;
}
// an arch-topped plane (portals, glass doors) with uvs stretched 0..1
function archPlane(w, h) {
  const R = w / 2, sh = new THREE.Shape(); sh.moveTo(-R, 0); sh.lineTo(R, 0); sh.lineTo(R, h - R); sh.absarc(0, h - R, R, 0, Math.PI, false); sh.lineTo(-R, 0);
  const g = new THREE.ShapeGeometry(sh, 16), uv = g.attributes.uv, pos = g.attributes.position;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (pos.getX(i) + R) / w, pos.getY(i) / h);
  return g;
}
// orient a geometry built facing +z (x along the wall) onto a wall side, at (x, z)
function onWall(g, side, x, z) { const [sx] = DIRS[side]; if (sx !== 0) g.rotateY(Math.PI / 2); g.translate(x, 0, z); return g; }
function doorwayTrim(r, side, wx, wz, H) {
  const [sx, sz] = DIRS[side], along = sx === 0;
  kitAdd(r, onWall(lintelGeom(H), side, wx, wz), wallM(r));
  const f = WALL_T / 2 + .05, fx = wx - sx * f, fz = wz - sz * f;
  const arc = new THREE.TorusGeometry(ARCH_R + .09, .1, 6, 20, Math.PI); arc.translate(0, DOOR_H, 0); kitAdd(r, onWall(arc, side, fx, fz), mats.trim);
  for (const k of [-1, 1]) { const j = new THREE.BoxGeometry(.2, DOOR_H, .1); j.translate(k * (ARCH_R + .09), DOOR_H / 2, 0); kitAdd(r, onWall(j, side, fx, fz), mats.trim); }
  const key = new THREE.BoxGeometry(.34, .42, .16); key.translate(0, ARCH_TOP + .06, 0); kitAdd(r, onWall(key, side, fx, fz), mats.trim);
}
// slot spacing on a wall (shared with slotsFor so pilasters land between pictures)
const slotSpacing = L => L <= 16 ? 4.6 : L >= 30 ? 5.4 : 6.4;
function pilasterOffsets(r, side) {
  const along = DIRS[side][0] === 0, half = along ? r.hx : r.hz, sp = slotSpacing(half * 2), ds = doorsOn(r, side), out = [];
  for (let k = -10; k <= 10; k++) {
    const o = (k + .5) * sp;
    if (Math.abs(o) > half - 1.2 || ds.some(d => Math.abs(o - d.o) < ARCH_R + .75)) continue;
    out.push(o);
  }
  if (r.layout !== "small") for (const o of [-(half - .4), half - .4]) if (!ds.some(d => Math.abs(o - d.o) < ARCH_R + .75)) out.push(o);
  return out;
}
function decorateWalls(r) {
  const Hw = r.h;
  for (const side of Object.keys(DIRS)) {
    const [sx, sz] = DIRS[side], along = sx === 0, half = along ? r.hx : r.hz, inner = (along ? r.hz : r.hx) - WALL_T;
    const at = (o, d) => along ? [r.x + o, r.z + sz * (inner - d)] : [r.x + sx * (inner - d), r.z + o];
    const box = (o, d, w, h, dep, y, m = mats.trim) => { const [x, z] = at(o, d); kitBox(r, along ? w : dep, h, along ? dep : w, m, x, y, z); };
    for (const o of pilasterOffsets(r, side)) {
      box(o, .07, .56, Hw - .7, .14, (Hw - .7) / 2 + .1);
      box(o, .1, .72, .26, .2, Hw - .72);
      box(o, .1, .7, .3, .2, .15, mats.base);
    }
    // cornice: two stepped mouldings round the top of the wall
    box(0, .12, half * 2, .3, .24, Hw - .55);
    box(0, .2, half * 2, .16, .4, Hw - .32);
    box(0, .06, half * 2, .12, .12, Hw - .9);
  }
}
// dark gradients where wall meets floor give the room soft depth
function contactShade(r, side, a, b) {
  const [sx, sz] = DIRS[side], along = sx === 0, inner = (along ? r.hz : r.hx) - WALL_T - .02, len = b - a, mid = (a + b) / 2;
  const w = new THREE.PlaneGeometry(len, .8); w.translate(0, .4, 0); w.rotateY(along ? (sz < 0 ? 0 : Math.PI) : (sx < 0 ? Math.PI / 2 : -Math.PI / 2));
  w.translate(along ? r.x + mid : r.x + sx * inner, 0, along ? r.z + sz * inner : r.z + mid); kitAdd(r, w, mats.ao);
  const f = new THREE.PlaneGeometry(len, .7); f.rotateX(-Math.PI / 2);
  const uv = f.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) > .5 ? 1 : 0);
  // after rotateX, +v points to -z: aim the dark edge at the wall
  if (along) { if (sz > 0) f.rotateY(Math.PI); } else f.rotateY(sx > 0 ? -Math.PI / 2 : Math.PI / 2);
  f.translate(along ? r.x + mid : r.x + sx * (inner - .35), .004, along ? r.z + sz * (inner - .35) : r.z + mid); kitAdd(r, f, mats.ao);
}
// velvet ropes on brass posts in front of the pictures
function ropeLine(r, side, a, b) {
  if (b - a < 3.6) return;
  const [sx, sz] = DIRS[side], along = sx === 0, d = (along ? r.hz : r.hx) - WALL_T - 1.05;
  const P = o => along ? new THREE.Vector3(r.x + o, 0, r.z + sz * d) : new THREE.Vector3(r.x + sx * d, 0, r.z + o);
  const n = Math.max(1, Math.round((b - a - 1.2) / 2.9)), step = (b - a - 1.2) / n;
  for (let i = 0; i <= n; i++) {
    const p = P(a + .6 + i * step);
    const post = new THREE.CylinderGeometry(.035, .035, .92, 8); post.translate(p.x, .46, p.z); kitAdd(r, post, mats.brass);
    const foot = new THREE.CylinderGeometry(.16, .17, .05, 12); foot.translate(p.x, .025, p.z); kitAdd(r, foot, mats.brass);
    const top = new THREE.SphereGeometry(.06, 8, 6); top.translate(p.x, .95, p.z); kitAdd(r, top, mats.brass);
    if (i < n) {
      const q = P(a + .6 + (i + 1) * step), m = p.clone().add(q).multiplyScalar(.5);
      const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(p.x, .88, p.z), new THREE.Vector3(m.x, .66, m.z), new THREE.Vector3(q.x, .88, q.z));
      kitAdd(r, new THREE.TubeGeometry(curve, 8, .028, 5), mats.rope);
    }
  }
  const p0 = P(a + .6), p1 = P(b - .6);
  r.colliders.push({ minX: Math.min(p0.x, p1.x) - .08, maxX: Math.max(p0.x, p1.x) + .08, minZ: Math.min(p0.z, p1.z) - .08, maxZ: Math.max(p0.z, p1.z) + .08 });
}
// ---- ceilings ----
function buildRoof(r) {
  const roof = r.topic.lobby ? "dome" : LAYOUTS[r.layout].roof, Hw = r.h;
  if (roof === "vault") return vault(r);
  if (roof === "dome") return dome(r, r.topic.lobby ? 8 : Math.min(r.hx, r.hz) - 2.6);
  return cove(r);
}
function vault(r) {
  const longX = r.hx > r.hz, S = longX ? r.hz : r.hx, L = (longX ? r.hx : r.hz) * 2, k = Math.min(.6, 3.6 / S + .12), Hw = r.h, crown = Hw + S * k;
  // half cylinder, axis along the room, bulging upwards
  const g = new THREE.CylinderGeometry(S, S, L, 40, 1, true, -Math.PI / 2, Math.PI);
  const m = new THREE.Matrix4();
  if (longX) m.set(0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1); else m.set(-1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1);
  g.applyMatrix4(m); g.scale(1, k, 1); g.translate(r.x, Hw, r.z);
  const arc = Math.PI * S * (1 + k) / 2;
  r.group.add(new THREE.Mesh(g, coffer(Math.round(arc / 1.5), Math.round(L / 1.5))));
  // lunettes filling the end walls
  for (const s of [-1, 1]) {
    const sh = new THREE.Shape(); sh.absarc(0, 0, S, 0, Math.PI, false); sh.lineTo(-S, 0);
    const lg = new THREE.ShapeGeometry(sh, 24); lg.scale(1, k, 1); lg.translate(0, Hw - .01, 0);
    if (longX) lg.rotateY(Math.PI / 2);
    const off = L / 2 - WALL_T;
    lg.translate(r.x + (longX ? s * off : 0), 0, r.z + (longX ? 0 : s * off)); kitAdd(r, lg, mats.wall);
  }
  // transverse ribs over every second pilaster, skylights in between
  const sp = slotSpacing(L), ribs = [];
  for (let o = .5 * sp - Math.ceil(L / sp) * 2 * sp; o < L / 2; o += 2 * sp) if (Math.abs(o) < L / 2 - 1.5) ribs.push(o);
  for (const o of ribs) {
    const sh = new THREE.Shape(); sh.absarc(0, 0, S, 0, Math.PI, false); sh.absarc(0, 0, S - .45, Math.PI, 0, true);
    const rg = new THREE.ExtrudeGeometry(sh, { depth: .55, bevelEnabled: false, curveSegments: 24 }); rg.translate(0, 0, -.275); rg.scale(1, k, 1); rg.translate(0, Hw - .02, 0);
    if (longX) rg.rotateY(Math.PI / 2);
    rg.translate(r.x + (longX ? o : 0), 0, r.z + (longX ? 0 : o)); kitAdd(r, rg, mats.trim);
  }
  const edges = [-L / 2 + 1, ...ribs, L / 2 - 1];
  for (let i = 0; i < edges.length - 1; i++) {
    const a = edges[i] + .7, b = edges[i + 1] - .7; if (b - a < 2) continue;
    const w = Math.min(2.6, S * .4), sk = new THREE.PlaneGeometry(longX ? b - a : w, longX ? w : b - a), suv = sk.attributes.uv;
    for (let i = 0; i < suv.count; i++) suv.setXY(i, suv.getX(i) * Math.max(1, Math.round((longX ? b - a : w) / 2)), suv.getY(i) * Math.max(1, Math.round((longX ? w : b - a) / 2)));
    sk.rotateX(Math.PI / 2);
    const mid = (a + b) / 2; sk.translate(r.x + (longX ? mid : 0), crown - .08, r.z + (longX ? 0 : mid)); kitAdd(r, sk, mats.sky);
  }
}
function flatCeiling(r, y, holeR) {
  const sh = new THREE.Shape(); sh.moveTo(-r.hx, -r.hz); sh.lineTo(r.hx, -r.hz); sh.lineTo(r.hx, r.hz); sh.lineTo(-r.hx, r.hz); sh.lineTo(-r.hx, -r.hz);
  if (holeR) { const hp = new THREE.Path(); hp.absarc(0, 0, holeR, 0, Math.PI * 2, true); sh.holes.push(hp); }
  const g = new THREE.ShapeGeometry(sh, 32), uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 1.6, uv.getY(i) / 1.6);
  g.rotateX(Math.PI / 2); g.translate(r.x, y, r.z); r.group.add(new THREE.Mesh(g, coffer(1, 1)));
}
function dome(r, R) {
  const Hw = r.h, k = .62, th0 = .2;
  flatCeiling(r, Hw, R);
  const g = new THREE.SphereGeometry(R, 40, 10, 0, Math.PI * 2, th0, Math.PI / 2 - th0); g.scale(1, k, 1); g.translate(r.x, Hw, r.z);
  r.group.add(new THREE.Mesh(g, coffer(20, 5)));
  const ring = new THREE.TorusGeometry(R + .05, .16, 6, 48); ring.rotateX(Math.PI / 2); ring.translate(r.x, Hw - .05, r.z); kitAdd(r, ring, mats.trim);
  const oc = new THREE.CircleGeometry(R * Math.sin(th0) + .05, 32); oc.rotateX(Math.PI / 2); oc.translate(r.x, Hw + R * k * Math.cos(th0) - .02, r.z); kitAdd(r, oc, mats.sky);
  const lip = new THREE.TorusGeometry(R * Math.sin(th0), .08, 6, 32); lip.rotateX(Math.PI / 2); lip.translate(r.x, Hw + R * k * Math.cos(th0) - .05, r.z); kitAdd(r, lip, mats.trim);
}
function cove(r) {
  // a sloped cove round the edge, then a flat ceiling with a big frosted laylight
  const Hw = r.h, c = 1.1, rise = .9, X = r.hx, Z = r.hz, x = X - c, z = Z - c, y0 = Hw, y1 = Hw + rise;
  const pos = [], quad = (a, b, cc, d) => pos.push(...a, ...b, ...cc, ...a, ...cc, ...d);
  const P = (px, py, pz) => [r.x + px, py, r.z + pz];
  quad(P(-X, y0, -Z), P(X, y0, -Z), P(x, y1, -z), P(-x, y1, -z));
  quad(P(X, y0, -Z), P(X, y0, Z), P(x, y1, z), P(x, y1, -z));
  quad(P(X, y0, Z), P(-X, y0, Z), P(-x, y1, z), P(x, y1, z));
  quad(P(-X, y0, Z), P(-X, y0, -Z), P(-x, y1, -z), P(-x, y1, z));
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.computeVertexNormals();
  kitAdd(r, g, mats.trim2);
  const top = new THREE.PlaneGeometry(x * 2, z * 2); top.rotateX(Math.PI / 2); top.translate(r.x, y1, r.z); kitAdd(r, top, mats.trim);
  const lw = x * 2 - 1.6, ld = z * 2 - 1.6, ll = new THREE.PlaneGeometry(lw, ld), uv = ll.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * Math.round(lw / 2.2), uv.getY(i) * Math.round(ld / 2.2));
  ll.rotateX(Math.PI / 2); ll.translate(r.x, y1 - .02, r.z); kitAdd(r, ll, mats.sky);
}
const roomH = r => 5.4;

function doorsOn(r, side) {
  const d = [];
  if (side === r.entry) d.push({ o: 0, ex: { back: true } });
  else if (r.exits && r.exits[side]) d.push({ o: 0, ex: r.exits[side] });
  for (const g of r.gates || []) if (g.side === side) d.push({ o: g.o, ex: g });
  return d.sort((a, b) => a.o - b.o);
}
function buildWall(r, side) {
  const [sx, sz] = DIRS[side], along = sx === 0, H = r.h;
  const half = along ? r.hx : r.hz, dist = along ? r.hz : r.hx;
  const off = dist - WALL_T / 2, wx0 = r.x + sx * off, wz0 = r.z + sz * off;
  const doors = doorsOn(r, side), segs = [];
  let cur = -half;
  for (const d of doors) { segs.push([cur, d.o - DOOR_W / 2]); cur = d.o + DOOR_W / 2; }
  segs.push([cur, half]);
  for (const [a, b] of segs) {
    const len = b - a, mid = (a + b) / 2; if (len <= 0.01) continue;
    const px = along ? r.x + mid : wx0, pz = along ? wz0 : r.z + mid;
    addBox(r, along ? len : WALL_T, H, along ? WALL_T : len, wallM(r), px, H / 2, pz, true);
    const ix = along ? px : wx0 - sx * (WALL_T / 2 + .03), iz = along ? wz0 - sz * (WALL_T / 2 + .03) : pz;
    kitBox(r, along ? len : .06, .2, along ? .06 : len, mats.base, ix, .1, iz); // skirting
    contactShade(r, side, a, b);
    if (r.layout !== "small" && !r.topic.hall) ropeLine(r, side, a, b);
    else if (r.topic.lobby && MM.active && side === "S" && a < 13 && b > 13) ropeLine(r, side, a, 10.2);  // leave room for the gift shop
    else if (r.topic.hall && (b - a) > 6) ropeLine(r, side, a, b);
  }
  for (const { o, ex } of doors) {
    const wx = along ? wx0 + o : wx0, wz = along ? wz0 : wz0 + o;
    doorwayTrim(r, side, wx, wz, H);
    // vinyl lettering above the opening, facing into the room
    let ja, en, col = "#3a3a3a";
    if (ex.back) { const p = r.parent != null ? rooms[r.parent].topic : null; ja = p ? "← " + p.ja : "もどる"; en = p ? p.en : "Back"; }
    else if (ex.closed) { [ja, en] = ex.label; }
    else { const ct = rooms[ex.child].topic; if (ex.gate) { ja = (visitCount[ct.id] ? "✓ " : "") + ct.ja; en = ct.en; col = shade(ct.c, -0.12); } else { ja = ct.ja; en = ct.en; col = shade(ct.c, -0.12); } }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.6, .92), own(new THREE.MeshBasicMaterial({ map: letterTex(ja, en, col), transparent: true })));
    sign.position.set(wx - sx * (WALL_T / 2 + .14), ARCH_TOP + .72, wz - sz * (WALL_T / 2 + .14));
    sign.lookAt(sign.position.x - sx, sign.position.y, sign.position.z - sz); r.group.add(sign);
    if (ex.gate) gateDressing(r, ex, wx, wz, sx, sz, along);
    if (ex.closed) {
      const bx = wx - sx * .7, bz = wz - sz * .7;
      for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(.05, .07, 1, 10), mats.brass); p.position.set(along ? bx + s * 1.4 : bx, .5, along ? bz : bz + s * 1.4); r.group.add(p); }
      const rope = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 2.8, 6), mats.rope); rope.rotation.z = along ? Math.PI / 2 : 0; rope.rotation.x = along ? 0 : Math.PI / 2; rope.position.set(bx, .85, bz); r.group.add(rope);
      r.colliders.push({ minX: wx - (along ? DOOR_W / 2 : .8), maxX: wx + (along ? DOOR_W / 2 : .8), minZ: wz - (along ? .8 : DOOR_W / 2), maxZ: wz + (along ? .8 : DOOR_W / 2) });
      const back = new THREE.Mesh(archPlane(DOOR_W, ARCH_TOP), mats.glass);
      back.position.set(wx + sx * .05, 0, wz + sz * .05); back.lookAt(back.position.x - sx, back.position.y, back.position.z - sz); r.group.add(back);
    }
  }
}
// coloured door frame + a hanging banner with the wing's picture
function gateDressing(r, g, wx, wz, sx, sz, along) {
  const ct = rooms[g.child].topic, fm = own(new THREE.MeshPhongMaterial({ color: ct.c, shininess: 40 }));
  const side = Object.keys(DIRS).find(k => DIRS[k][0] === sx && DIRS[k][1] === sz), f = WALL_T / 2 + .12;
  const geo = [new THREE.TorusGeometry(ARCH_R + .2, .13, 6, 24, Math.PI).translate(0, DOOR_H, 0),
    new THREE.BoxGeometry(.26, DOOR_H, .16).translate(-(ARCH_R + .2), DOOR_H / 2, 0), new THREE.BoxGeometry(.26, DOOR_H, .16).translate(ARCH_R + .2, DOOR_H / 2, 0)].map(x => x.index ? x.toNonIndexed() : x);
  const fr = new THREE.Mesh(onWall(mergeGeometries(geo), side, wx - sx * f, wz - sz * f), fm); r.group.add(fr);
  if (r.h < 8.5) return;
  const bh = r.h - 1.25 - (ARCH_TOP + 1.3), bw = bh * .85;
  const ban = new THREE.Mesh(new THREE.PlaneGeometry(bw, bh), own(new THREE.MeshBasicMaterial({ map: bannerTex(g.icon || ct.icon || ct.list.find(x => x.pic)?.pic, ct.c), transparent: true })));
  ban.position.set(wx - sx * (WALL_T / 2 + .1), ARCH_TOP + 1.3 + bh / 2, wz - sz * (WALL_T / 2 + .1));
  ban.lookAt(ban.position.x - sx, ban.position.y, ban.position.z - sz); r.group.add(ban);
  // brass hanging rod with two cords up to the cornice
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, bw + .35, 8), mats.brass);
  rod.rotation.z = Math.PI / 2; if (!along) rod.rotation.y = Math.PI / 2;
  rod.position.set(wx - sx * (WALL_T / 2 + .14), ARCH_TOP + 1.32 + bh, wz - sz * (WALL_T / 2 + .14)); r.group.add(rod);
}
function bannerTex(pic, c) {
  return canvasTex(256, 300, (g, w, h) => {
    g.fillStyle = c; g.beginPath(); g.moveTo(8, 0); g.lineTo(w - 8, 0); g.lineTo(w - 8, h - 40); g.lineTo(w / 2, h - 4); g.lineTo(8, h - 40); g.closePath(); g.fill();
    g.strokeStyle = "rgba(255,255,255,.55)"; g.lineWidth = 6; g.beginPath(); g.moveTo(22, 14); g.lineTo(w - 22, 14); g.lineTo(w - 22, h - 48); g.lineTo(w / 2, h - 22); g.lineTo(22, h - 48); g.closePath(); g.stroke();
    g.fillStyle = "rgba(255,255,255,.92)"; g.beginPath(); g.arc(w / 2, 128, 88, 0, Math.PI * 2); g.fill();
    drawPic(g, pic || "✨", w / 2, 128, 190);
  });
}
function gatePortalTex(ct, pic) {
  return canvasTex(256, 256, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w * .62);
    gr.addColorStop(0, "#ffffff"); gr.addColorStop(.45, mix(ct.c, "#ffffff", .55)); gr.addColorStop(1, shade(ct.c, -0.1));
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.globalAlpha = .9; drawPic(g, pic || "✨", w / 2, h / 2 - 10, 150); g.globalAlpha = 1;
  });
}
function lockTex(ct, pic) {
  return canvasTex(256, 384, (g, w, h) => {
    g.fillStyle = mix(ct.c, "#f4ede2", .7); g.fillRect(0, 0, w, h);
    g.strokeStyle = shade(ct.c, -.1); g.lineWidth = 10; g.strokeRect(14, 14, w - 28, h - 28);
    g.globalAlpha = .35; drawPic(g, pic && !pic.startsWith("planet:") ? pic : "✨", w / 2, 150, 150); g.globalAlpha = 1;
    drawPic(g, "🔒", w / 2, 250, 110);
    g.fillStyle = "#3a2c1c"; g.font = `bold 30px ${FONT}`; g.textAlign = "center"; g.fillText(`${MM.price(ct.id)} ⭐`, w / 2, 340);
  });
}
function buildCorridor(r, side, ex) {
  const [dx, dz] = DIRS[side], along = dx !== 0;
  const o = ex.o || 0, x0 = r.x + dx * r.hx + (along ? 0 : o), z0 = r.z + dz * r.hz + (along ? o : 0), len = ex.len;
  const cx = x0 + dx * len / 2, cz = z0 + dz * len / 2, H = DOOR_H;
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(along ? len : DOOR_W, along ? DOOR_W : len), mats.floorC);
  fl.rotation.x = -Math.PI / 2; fl.position.set(cx, .003, cz); fl.userData.floor = true; r.group.add(fl); r.floors.push(fl);
  const vg = new THREE.CylinderGeometry(ARCH_R, ARCH_R, len, 20, 1, true, -Math.PI / 2, Math.PI), vm = new THREE.Matrix4();
  if (along) vm.set(0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1); else vm.set(-1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1);
  vg.applyMatrix4(vm); vg.translate(cx, DOOR_H, cz); r.group.add(new THREE.Mesh(vg, coffer(4, Math.max(1, Math.round(len / 1.4)))));
  for (const s of [-1, 1]) {
    const off = DOOR_W / 2 + WALL_T / 2;
    addBox(r, along ? len : WALL_T, H, along ? WALL_T : len, mats.wall, along ? cx : cx + s * off, H / 2, along ? cz + s * off : cz, true);
  }
  if (ex.gate && !MM.isUnlocked(rooms[ex.child].topic.id)) {
    // My Museum: a locked room — a closed door with a padlock; click it to open the room
    addBox(r, along ? .3 : DOOR_W + .6, ARCH_TOP + .2, along ? DOOR_W + .6 : .3, mats.wall, x0 + dx * (len + .15), (ARCH_TOP + .2) / 2, z0 + dz * (len + .15), true);
    const ct = rooms[ex.child].topic;
    const lock = new THREE.Mesh(archPlane(DOOR_W, ARCH_TOP), own(new THREE.MeshBasicMaterial({ map: lockTex(ct, ex.icon) })));
    lock.position.set(x0 + dx * .25, 0, z0 + dz * .25); lock.lookAt(lock.position.x - dx, 0, lock.position.z - dz); r.group.add(lock);
    lock.userData.locked = ct.id; r.clickables.push(lock);
    r.colliders.push({ minX: Math.min(x0, x0 + dx * .5) - (along ? 0 : DOOR_W / 2), maxX: Math.max(x0, x0 + dx * .5) + (along ? 0 : DOOR_W / 2), minZ: Math.min(z0, z0 + dz * .5) - (along ? DOOR_W / 2 : 0), maxZ: Math.max(z0, z0 + dz * .5) + (along ? DOOR_W / 2 : 0) });
    return;
  }
  if (ex.warp) {
    addBox(r, along ? .3 : DOOR_W + .6, ARCH_TOP + .2, along ? DOOR_W + .6 : .3, mats.wall, x0 + dx * (len + .15), (ARCH_TOP + .2) / 2, z0 + dz * (len + .15), true);
    const c = rooms[ex.child], [ix, iz] = DIRS[c.entry];
    addPortal(r, x0, z0, side, len, { room: c.i, x: c.x + ix * (c.hx - 2.5), z: c.z + iz * (c.hz - 2.5), dx: -ix, dz: -iz },
      ex.gate ? own(new THREE.MeshBasicMaterial({ map: gatePortalTex(c.topic, ex.icon) })) : null);
  }
}
// slots: wall positions + both faces of a free-standing partition
function slotsFor(r) {
  const out = [];
  for (const side of ["N", "E", "S", "W"]) {
    const ds = doorsOn(r, side), hasDoor = ds.length > 0;
    const along = DIRS[side][0] === 0, L = 2 * (along ? r.hx : r.hz);
    const sp = L <= 16 ? 4.6 : L >= 30 ? 5.4 : 6.4;
    for (let k = -10; k <= 10; k++) {
      const o = k * sp;
      // keep a whole wall text (2m each side) clear of a doorway and its arch trim
      if (Math.abs(o) > L / 2 - 2.2 || ds.some(d => Math.abs(o - d.o) < 4.3)) continue;
      out.push({ side, o, wall: true, door: !!hasDoor });
    }
  }
  return out;
}
// share the exhibits out between the walls (by how much room each has), evenly spaced along each wall
function spreadSlots(list, need) {
  if (need >= list.length) return list.slice();
  if (need <= 0) return [];
  const by = {}; for (const s of list) (by[s.side] ||= []).push(s);
  const raw = Object.entries(by).map(([sd, a]) => [sd, a.length * need / list.length]), alloc = {};
  let left = need;
  for (const [sd, v] of raw) { alloc[sd] = Math.floor(v); left -= alloc[sd]; }
  raw.sort((a, b) => (b[1] % 1) - (a[1] % 1) || by[b[0]].length - by[a[0]].length);
  for (let k = 0; left > 0 && k < 8; k++) for (const [sd] of raw) if (left > 0 && alloc[sd] < by[sd].length) { alloc[sd]++; left--; }
  const out = [];
  for (const [sd, a] of Object.entries(by)) {
    const arr = a.slice().sort((p, q) => p.o - q.o), n = alloc[sd];
    for (let i = 0; i < n; i++) out.push(arr[Math.min(arr.length - 1, Math.round((i + .5) * arr.length / n - .5))]);
  }
  return out;
}
function partition(r, ox = 0, oz = 0, alongX = r.hx >= r.hz ? r.i % 3 !== 0 : r.i % 3 === 0) {
  // a free-standing wall; orientation chosen per room
  const L = 9, T = .45, H = Math.min(r.h - .9, 4.6);
  addBox(r, alongX ? L : T, H, alongX ? T : L, wallM(r), r.x + ox, H / 2, r.z + oz, true);
  kitBox(r, alongX ? L + .06 : T + .06, .2, alongX ? T + .06 : L + .06, mats.base, r.x + ox, .1, r.z + oz);
  kitBox(r, alongX ? L + .16 : T + .16, .18, alongX ? T + .16 : L + .16, mats.trim, r.x + ox, H + .09, r.z + oz);
  const s = [];
  for (const face of [-1, 1]) for (const o of [-2.3, 2.3]) {
    const nx = alongX ? 0 : face, nz = alongX ? face : 0;
    s.push({ x: ox + (alongX ? o : face * (T / 2 + .06)), z: oz + (alongX ? face * (T / 2 + .06) : o), nx, nz, small: true });
  }
  return { slots: s, alongX };
}
function addExhibit(r, slot, ex) {
  let px, pz, nx, nz;
  if (slot.wall) {
    const [sx, sz] = DIRS[slot.side], along = sx === 0, inner = (along ? r.hz : r.hx) - WALL_T - .05;
    px = along ? r.x + slot.o : r.x + sx * inner; pz = along ? r.z + sz * inner : r.z + slot.o; nx = -sx; nz = -sz;
  } else { px = r.x + slot.x; pz = r.z + slot.z; nx = slot.nx; nz = slot.nz; }
  const grp = new THREE.Group(); grp.position.set(px, 0, pz); grp.lookAt(px + nx, 0, pz + nz); r.group.add(grp);
  const cy = 2.15;
  const rec = { ex, pos: new THREE.Vector3(px, 0, pz), normal: new THREE.Vector3(nx, 0, nz) };
  r.exhibits.push(rec);
  if (ex.text) {
    // museum wall text: big title and a paragraph printed straight on the wall
    const m = new THREE.Mesh(new THREE.PlaneGeometry(4, 3), own(new THREE.MeshBasicMaterial({ map: wallTextTex(ex.ja, ex.en, ex.fact, ex.color || r.topic.c), transparent: true })));
    m.position.set(0, 2.35, .02); grp.add(m); m.userData.exhibit = ex; r.clickables.push(m);
    return;
  }
  const W = slot.small ? 2.3 : 2.7, H = slot.small ? 1.75 : 2.05;
  const style = MM.roomFrame(r.topic.id) || "gold";
  let frame = null;
  const pm = own(new THREE.MeshBasicMaterial({ color: "#fff" }));
  const pic = new THREE.Mesh(new THREE.PlaneGeometry(W, H), pm); pic.position.set(0, cy, .066); grp.add(pic);
  const lbH = longYear(ex.year) ? .47 * 196 / 150 : .47;
  const lb = new THREE.Mesh(new THREE.PlaneGeometry(1.5, lbH), own(new THREE.MeshBasicMaterial({ map: labelTex(ex.ja, ex.en, ex.status, ex.year) })));
  grp.add(lb);
  const setFrame = (w, h) => {
    if (frame) { grp.remove(frame); frame.traverse(o => { if (o.geometry) o.geometry.dispose(); }); r.clickables = r.clickables.filter(m => m.parent !== frame); }
    frame = buildFrame(style, w, h); frame.position.y = cy; grp.add(frame);
    frame.children.forEach(m => { m.userData.exhibit = ex; r.clickables.push(m); });
    lb.position.set(0, cy - h / 2 - frame.userData.outer - .065 - lbH / 2, .01);
  };
  setFrame(W, H);
  if (ex.img) {
    pm.color.set("#cfcfcf");
    new THREE.TextureLoader().load(ex.img, tx => {
      if (!r.group) { tx.dispose(); return; }
      tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = 4; const a = tx.image.width / tx.image.height;
      let w = W, h = W / a; if (h > H) { h = H; w = H * a; }
      pic.geometry.dispose(); pic.geometry = new THREE.PlaneGeometry(w, h);
      setFrame(w, h);
      pm.color.set("#fff"); pm.map = tx; pm.needsUpdate = true;
    });
  } else { pm.map = picTex(ex, (TOPICS[ex.topic] || r.topic).c); pm.needsUpdate = true; }
  for (const m of [pic, lb]) { m.userData.exhibit = ex; r.clickables.push(m); }
}
function build(r) {
  if (r.group) return;
  planExits(r);
  const t = r.topic; r.group = new THREE.Group(); r.colliders = []; r.clickables = []; r.floors = []; r.exhibits = []; r.kit = new Map();
  scene.add(r.group);
  const H = r.h, W2 = r.hx * 2, D2 = r.hz * 2;
  const myFloor = MM.roomFloor(t.id);
  const fmat = myFloor ? floorMaterial(myFloor, W2, D2) : shared["floor" + W2 + "x" + D2] ||= (() => { const tx = floorMap.clone(); tx.repeat.set(W2 / 6, D2 / 6); tx.needsUpdate = true; return new THREE.MeshPhongMaterial({ map: tx, specular: "#5a4a3a", shininess: 60 }); })();
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W2, D2), fmat);
  floor.rotation.x = -Math.PI / 2; floor.position.set(r.x, 0, r.z); floor.userData.floor = true; r.group.add(floor); r.floors.push(floor);
  buildRoof(r); decorateWalls(r);
  // a pale stone runner down the middle of long galleries
  if (!myFloor && (r.layout === "long" || (r.layout === "hall" && !t.lobby))) {
    const longX = r.hx > r.hz, L = (longX ? r.hx : r.hz) * 2 - .1, w = Math.min(r.hx, r.hz) * (r.layout === "long" ? .62 : .42);
    const sm = shared["stone" + L + "x" + w] ||= (() => { const tx = stoneMap.clone(); tx.repeat.set(longX ? L / 2.4 : w / 2.4, longX ? w / 2.4 : L / 2.4); tx.needsUpdate = true; return new THREE.MeshPhongMaterial({ map: tx, specular: "#444", shininess: 40 }); })();
    const run = new THREE.Mesh(new THREE.PlaneGeometry(longX ? L : w, longX ? w : L), sm); run.rotation.x = -Math.PI / 2; run.position.set(r.x, .003, r.z);
    run.userData.floor = true; r.group.add(run); r.floors.push(run);
    const edge = shared.edge ||= lamb("#b9ad9b");
    for (const s of [-1, 1]) { const e = new THREE.PlaneGeometry(longX ? L : .12, longX ? .12 : L); e.rotateX(-Math.PI / 2); e.translate(r.x + (longX ? 0 : s * w / 2), .005, r.z + (longX ? s * w / 2 : 0)); kitAdd(r, e, edge); }
  }
  for (const s of Object.keys(DIRS)) buildWall(r, s);
  r.portals = [];
  for (const [s, ex] of Object.entries(r.exits)) if (ex.child != null) buildCorridor(r, s, ex);
  for (const g of r.gates || []) buildCorridor(r, g.side, g);
  if (r.warpFrom) {
    const p = rooms[r.parent], [px, pz] = DIRS[r.warpFrom], [dx, dz] = DIRS[r.entry];
    buildCorridor(r, r.entry, { len: 4, child: r.parent, warp: false, back: true });
    const along = dx !== 0, x0 = r.x + dx * r.hx, z0 = r.z + dz * r.hz;
    addBox(r, along ? .3 : DOOR_W + .6, ARCH_TOP + .2, along ? DOOR_W + .6 : .3, mats.wall, x0 + dx * 4.15, (ARCH_TOP + .2) / 2, z0 + dz * 4.15, true);
    const wo = r.warpO || 0;
    addPortal(r, x0, z0, r.entry, 4, { room: p.i, x: p.x + px * (p.hx - 2.5) + (px === 0 ? wo : 0), z: p.z + pz * (p.hz - 2.5) + (px === 0 ? 0 : wo), dx: -px, dz: -pz },
      r.warpO != null ? own(new THREE.MeshBasicMaterial({ map: gatePortalTex(p.topic.lobby ? { c: "#c9a24a" } : p.topic, p.topic.lobby ? "🏛️" : p.topic.icon) })) : null);
  }
  // a wing hall shows one highlight from each of its rooms, to tempt you through
  if (t.hall && !t.lobby && !r.featured) r.featured = shuffle(r.gates.map(g => rand(rooms[g.child].topic.list.filter(x => !x.text)))).filter(Boolean).slice(0, 13);
  const items = t.lobby ? t.list.map(x => ({ ...x, color: "#6b4d2c" }))
    : [{ text: true, ja: t.ja, en: t.en, fact: t.intro, color: t.c }, ...t.list, ...(r.featured || [])];
  // intro text goes on a door-free wall centre; then walls; then partition
  const wallSlots = slotsFor(r);
  const centre = wallSlots.find(s => !s.door && s.o === 0) || wallSlots[0];
  let slots = [centre, ...wallSlots.filter(s => s !== centre)];
  if (t.lobby) { lobbyCentre(r); slots = wallSlots.slice().sort((a, b) => Math.abs(a.o) - Math.abs(b.o) || a.o - b.o); }
  const minDim = Math.min(r.hx, r.hz) * 2, longX = r.hx > r.hz;
  if (t.timeline) {
    // walk-through order: round the room starting beside the entrance
    const [ex, ez] = DIRS[r.entry || "S"];
    const ang = s => { const [sx, sz] = DIRS[s.side], along = sx === 0;
      const px = along ? s.o : sx * r.hx, pz = along ? sz * r.hz : s.o;
      return (Math.atan2(ex * pz - ez * px, ex * px + ez * pz) + Math.PI * 2) % (Math.PI * 2); };
    slots = wallSlots.slice().sort((a, b) => ang(a) - ang(b));
    // a coloured time ribbon along the long walls
    for (const side of Object.keys(DIRS)) {
      const [sx, sz] = DIRS[side], along = sx === 0, half = along ? r.hx : r.hz, dist = (along ? r.hz : r.hx) - WALL_T - .02;
      if (half < 10) continue;
      addBox(r, along ? half * 2 - 1 : .03, .14, along ? .03 : half * 2 - 1, lamb(t.c), r.x + sx * dist, .62, r.z + sz * dist);
    }
  }
  const needPartition = !t.timeline && minDim >= 18 && (items.length > slots.length - 2 || (!t.lobby && items.length > 7));
  // My Museum: rooms with a display piece keep a plinth for it in the middle of the floor
  const hasDisplay = MM.active && !t.lobby && !t.hall && !!displayFor(t.id);
  let dspot = null;
  if (needPartition) {
    if (r.layout === "wide" || r.layout === "hall") {
      const p1 = partition(r, longX ? -7.5 : 0, longX ? 0 : -7.5, !longX), p2 = partition(r, longX ? 7.5 : 0, longX ? 0 : 7.5, !longX);
      slots = [slots[0], ...p1.slots, ...p2.slots, ...slots.slice(1)];
      if (hasDisplay) { dspot = [r.x, r.z]; addBench(r, r.x + (longX ? 0 : 3.6), r.z + (longX ? 3.6 : 0), longX); }
      else addBench(r, r.x, r.z, longX);
    } else {
      const p = partition(r); slots = [slots[0], ...p.slots, ...slots.slice(1)];
      // with a display, it stands on the entrance side of the partition (so you see it as you come in) and the bench moves behind
      const [ex, ez] = DIRS[r.entry || "S"], sgn = hasDisplay ? -((p.alongX ? ez : ex) || 1) : 1;
      const bx = p.alongX ? 0 : 4.2 * sgn, bz = p.alongX ? 4.2 * sgn : 0;
      addBench(r, r.x + bx, r.z + bz, p.alongX);
      if (hasDisplay) dspot = [r.x - bx, r.z - bz];
    }
  } else if (!t.lobby) {
    if (hasDisplay) dspot = [r.x, r.z];
    if (r.layout === "long") { const span = (longX ? r.hx : r.hz) - 8; for (let k = -span; k <= span; k += 11) addBench(r, r.x + (longX ? k : 0), r.z + (longX ? 0 : k), longX); }
    else if (r.layout !== "small") {
      if (!hasDisplay) addBench(r, r.x, r.z, longX);
      else { const ax = r.hx >= r.hz; addBench(r, r.x + (ax ? 3.8 : 0), r.z + (ax ? 0 : 3.8), !ax); }   // beside the display, facing it
    }
  }
  if (dspot) {
    const [ex, ez] = DIRS[r.entry || "S"], facing = Math.atan2(ex, ez);
    const d = buildDisplay(r, dspot[0], dspot[1], facing, MM.hasDisplay(t.id), mats, displayTex);
    if (d) { r.colliders.push(d.collider); r.displaySight = d.sight; d.hit.userData.room = t.id; r.clickables.push(d.hit); }
  }
  if (!t.lobby) {
    const part = slots.filter(s => !s.wall);
    if (t.timeline) { const keep = new Set(spreadSlots(wallSlots, items.length)); slots = slots.filter(s => keep.has(s)); }
    else slots = [centre, ...part, ...spreadSlots(wallSlots.filter(s => s !== centre), items.length - 1 - part.length)];
  }
  if (slots.length < items.length) console.warn("room too small", t.id, r.layout, slots.length, items.length);
  r.shortfall = Math.max(0, items.length - slots.length);
  slots.slice(0, items.length).forEach((s, i) => addExhibit(r, s, items[i]));
  kitFlush(r);
  // in halls, guests stop and look at the doorways and their banners
  r.sights = (r.gates || []).map(g => { const [sx, sz] = DIRS[g.side], along = sx === 0, inner = (along ? r.hz : r.hx) - WALL_T;
    return { pos: new THREE.Vector3(along ? r.x + g.o : r.x + sx * inner, 0, along ? r.z + sz * inner : r.z + g.o), normal: new THREE.Vector3(-sx, 0, -sz) }; });
  if (r.displaySight) r.sights.push(r.displaySight);
  const guides = !following() && !guideReq && (t.lobby || t.hall || Math.random() < .3) && guideTargets(t.id).length ? 1 : 0;
  spawnGuests(r, { askers: MM.askersFor(t), guides, makeBubble: bubble });
  spawnMascots(r, MM.mascotsFor(t.id), true);
  if (t.lobby && MM.active) giftShop(r);
}
// the lobby's centrepiece: a round dais, a ring of wing colours and a signpost
// ---------- gift shop: a little shop against the lobby's entrance wall ----------
const GIFT = { x: 13, z: 0 };
function openGift() { closePanel(); keys.clear(); btnHeld.clear(); player.target = null; MM.openGiftShop(); }
function giftShop(r) {
  const wz = r.z + r.hz - WALL_T / 2, x = r.x + 13; GIFT.x = x; GIFT.z = wz;
  const wood = mats.bench, brass = mats.brass;
  // back shelves full of goods
  addBox(r, 4.6, 2.5, .5, wood, x, 1.25, wz - .3, true);
  for (const y of [.75, 1.4, 2.05]) {
    const sh = new THREE.Mesh(new THREE.BoxGeometry(4.4, .06, .5), brass); sh.position.set(x, y, wz - .6); r.group.add(sh);
  }
  const cans = new THREE.CylinderGeometry(.13, .13, .26, 12);
  MM.COLOURS.forEach(([c], i) => {
    const m = new THREE.Mesh(cans, own(new THREE.MeshLambertMaterial({ color: c })));
    m.position.set(x - 2 + (i % 10) * .44, .9, wz - .62); r.group.add(m);
  });
  const toyCols = ["#f4c542", "#e57a3a", "#9b7ad1", "#5fb3d6", "#e86f9a", "#7cc36a", "#ffffff", "#d9534f"];
  for (let i = 0; i < 16; i++) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(.3, .3, .3), own(new THREE.MeshLambertMaterial({ color: toyCols[i % toyCols.length] })));
    b.position.set(x - 2 + (i % 8) * .57, i < 8 ? 1.58 : 2.23, wz - .6); b.rotation.y = (i * 1.7) % .6 - .3; r.group.add(b);
  }
  // counter
  const cz = wz - 2.3;
  addBox(r, 3.6, 1.0, .8, wood, x, .5, cz, true);
  const top = new THREE.Mesh(new THREE.BoxGeometry(3.8, .08, 1.0), brass); top.position.set(x, 1.04, cz); r.group.add(top);
  // striped awning
  const aw = new THREE.Mesh(new THREE.BoxGeometry(5, .08, 1.9), own(new THREE.MeshLambertMaterial({ map: canvasTex(256, 64, (g, w, h) => {
    for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? "#fff6e8" : "#e8731c"; g.fillRect(i * w / 8, 0, w / 8, h); } }) })));
  aw.position.set(x, 3.0, wz - 1.1); aw.rotation.x = -.28; r.group.add(aw);
  // sign
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.05), own(new THREE.MeshBasicMaterial({ transparent: true, map: canvasTex(800, 200, (g, w, h) => {
    g.fillStyle = "#6b4d2c"; g.beginPath(); g.roundRect(6, 6, w - 12, h - 12, 30); g.fill();
    g.strokeStyle = "#c9a24a"; g.lineWidth = 8; g.stroke();
    g.fillStyle = "#fff"; g.textAlign = "center"; g.textBaseline = "middle"; g.font = `bold 78px ${FONT}`; g.fillText("🛍️ ギフトショップ", w / 2, 78);
    g.fillStyle = "#ffe7a8"; g.font = `700 44px ${FONT}`; g.fillText("Gift Shop", w / 2, 150); }) })));
  sign.position.set(x, 3.75, wz - 2.0); sign.rotation.y = Math.PI; r.group.add(sign);
  // anything here opens the shop
  const hit = new THREE.Mesh(new THREE.BoxGeometry(5, 4.4, 3), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
  hit.position.set(x, 2.2, wz - 1.5); hit.userData.giftshop = true; r.group.add(hit); r.clickables.push(hit);
}

function lobbyCentre(r) {
  const cols = (r.gates || []).map(g => rooms[g.child].topic.c);
  const ring = new THREE.Mesh(new THREE.CircleGeometry(6.2, 64), own(new THREE.MeshBasicMaterial({ transparent: true, map: canvasTex(512, 512, (g, w) => {
    const n = Math.max(1, cols.length), c = w / 2;
    cols.forEach((col, i) => { g.fillStyle = col; g.beginPath(); g.moveTo(c, c); g.arc(c, c, c - 4, (i / n) * Math.PI * 2, ((i + 1) / n) * Math.PI * 2); g.closePath(); g.fill(); });
    g.globalCompositeOperation = "destination-out"; g.beginPath(); g.arc(c, c, c * .72, 0, Math.PI * 2); g.fill();
    g.globalCompositeOperation = "source-over"; g.strokeStyle = "#c9a24a"; g.lineWidth = 6;
    for (const k of [c - 6, c * .72]) { g.beginPath(); g.arc(c, c, k, 0, Math.PI * 2); g.stroke(); }
  }) })));
  ring.rotation.x = -Math.PI / 2; ring.position.set(r.x, .006, r.z); r.group.add(ring);
  // a ring of columns holds up the dome
  const R = 8, Hw = r.h;
  for (let k = 0; k < 6; k++) {
    const an = k * Math.PI / 3, x = r.x + Math.cos(an) * R, z = r.z + Math.sin(an) * R;
    const sh = new THREE.CylinderGeometry(.34, .4, Hw - 1.5, 16); sh.translate(x, .45 + (Hw - 1.5) / 2, z); kitAdd(r, sh, mats.trim);
    kitBox(r, 1.05, .45, 1.05, mats.base, x, .225, z);
    const cap = new THREE.CylinderGeometry(.6, .38, .5, 16); cap.translate(x, Hw - .8, z); kitAdd(r, cap, mats.trim);
    r.colliders.push({ minX: x - .5, maxX: x + .5, minZ: z - .5, maxZ: z + .5 });
  }
  const beam = new THREE.CylinderGeometry(R + .55, R + .55, .6, 64, 1, true); beam.translate(r.x, Hw - .3, r.z); kitAdd(r, beam, mats.trim2);
  const beam2 = new THREE.CylinderGeometry(R - .55, R - .55, .6, 64, 1, true); beam2.translate(r.x, Hw - .3, r.z); kitAdd(r, beam2, mats.trim2);
  const soff = new THREE.RingGeometry(R - .55, R + .55, 64); soff.rotateX(Math.PI / 2); soff.translate(r.x, Hw - .6, r.z); kitAdd(r, soff, mats.trim2);
  const dais = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.75, .3, 48), mats.bench); dais.position.set(r.x, .15, r.z); r.group.add(dais);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(2.68, .05, 8, 64), mats.brass); rim.rotation.x = Math.PI / 2; rim.position.set(r.x, .3, r.z); r.group.add(rim);
  r.colliders.push({ minX: r.x - 2.5, maxX: r.x + 2.5, minZ: r.z - 2.5, maxZ: r.z + 2.5 });
  addBox(r, 1.9, 3.4, 1.9, mats.wall, r.x, .3 + 1.7, r.z);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(2.2, .16, 2.2), mats.brass); cap.position.set(r.x, 3.78, r.z); r.group.add(cap);
  const face = own(new THREE.MeshBasicMaterial({ transparent: true, map: canvasTex(512, 850, (g, w, h) => {
    g.textAlign = "center"; g.fillStyle = "#6b4d2c";
    const nm = MM.active && MM.museumName();
    if (nm) {
      const parts = nm[0].split(" "), l1 = parts.slice(0, -1).join(" "), l2 = parts[parts.length - 1];
      fitFont(g, l1, w - 40, 72); g.fillText(l1, w / 2, 120); fitFont(g, l2, w - 40, 84); g.fillText(l2, w / 2, 220);
      g.fillStyle = "#8a7356"; fitFont(g, nm[1], w - 40, 44, "600"); g.fillText(nm[1], w / 2, 290);
    } else {
    g.font = `bold 84px ${FONT}`; g.fillText("わたしの", w / 2, 120); fitFont(g, "はくぶつかん", w - 40, 84); g.fillText("はくぶつかん", w / 2, 220);
    g.font = `600 44px ${FONT}`; g.fillStyle = "#8a7356"; g.fillText("My Museum", w / 2, 290);
    }
    g.fillStyle = "#c9a24a"; g.fillRect(70, 335, w - 140, 7);
    g.fillStyle = "#3a3a3a"; g.font = `bold 70px ${FONT}`; g.fillText("どこから 見る？", w / 2, 450);
    g.font = `500 48px ${FONT}`; g.fillStyle = "#6a6a6a"; g.fillText("Where shall we start?", w / 2, 525);
    g.font = `130px ${EMOJI_FONT}`; g.fillText("🚪👀", w / 2, 720);
  }) }));
  for (const [nx, nz] of Object.values(DIRS)) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.76, 2.92), face);
    m.position.set(r.x + nx * .96, .3 + 1.7, r.z + nz * .96); m.lookAt(m.position.x + nx, m.position.y, m.position.z + nz); r.group.add(m);
  }
}
function addBench(r, x, z, alongX) {
  // timber seat on a pale stone plinth
  addBox(r, alongX ? 2.6 : .8, .1, alongX ? .8 : 2.6, mats.bench, x, .47, z, true);
  kitBox(r, alongX ? 2.3 : .6, .42, alongX ? .6 : 2.3, mats.plinth, x, .21, z);
}
function dispose(r) {
  if (!r.group) return;
  r.group.traverse(o => {
    if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose();
    if (o.material && o.material.userData.own) { o.material.map?.dispose(); o.material.dispose(); }
  });
  clearGuests(r); forgetDisplay(r); r.displaySight = null;
  scene.remove(r.group); r.group = null; r.colliders = []; r.clickables = []; r.floors = []; r.exhibits = [];
}

// ================= player & streaming =================
newRoom(LOBBY, 0, 0, null, null);
const player = { pos: new THREE.Vector3(0, 0, 11.6), yaw: 0, pitch: -0.05, room: 0, target: null };
function neighbours(r) {
  const out = [r];
  if (r.parent != null) out.push(rooms[r.parent]);
  for (const ex of Object.values(r.exits || {})) if (ex.child != null) out.push(rooms[ex.child]);
  return out;
}
function stream() {
  const r = rooms[player.room]; planExits(r);
  const keep = new Set(neighbours(r).map(x => x.i));
  // also keep the parent's other children visible down corridors
  rooms.forEach(x => { if (x.group && !keep.has(x.i)) dispose(x); });
  keep.forEach(i => build(rooms[i]));
}
const built = () => rooms.filter(r => r.group);
function roomAt(p) {
  for (const r of built()) if (Math.abs(p.x - r.x) <= r.hx - .2 && Math.abs(p.z - r.z) <= r.hz - .2) return r.i;
  return player.room;
}
function collide(nx, nz) {
  for (const r of built()) for (const b of r.colliders)
    if (nx + RADIUS > b.minX && nx - RADIUS < b.maxX && nz + RADIUS > b.minZ && nz - RADIUS < b.maxZ) return true;
  return false;
}
function move(dx, dz) {
  let m = false;
  if (!collide(player.pos.x + dx, player.pos.z)) { player.pos.x += dx; m = true; }
  if (!collide(player.pos.x, player.pos.z + dz)) { player.pos.z += dz; m = true; }
  return m;
}
let lastDoor = 0, stepAcc = 0, lastStepT = 0;
function enterRoom(i) {
  const r = rooms[i]; const first = !r.seen;
  if (player.room !== i && performance.now() - lastDoor > 1500) { lastDoor = performance.now(); door(); }
  player.room = i;
  setRoomSize(r.topic.lobby || r.topic.hall ? 1 : Math.min(1, r.hx * r.hz / 300));
  if (first) { r.seen = true; roomsVisited++; visitCount[r.topic.id] = (visitCount[r.topic.id] || 0) + 1; visitCount[r.topic.id + "@" + i] = 1; }
  stream(); updateHud(); showBanner(r);
  MM.enteredRoom(r.topic);
}

// ================= input =================
const keys = new Set(), btnHeld = new Set();
const panel = document.getElementById("panel");
const panelOpen = () => !panel.hidden;
addEventListener("keydown", e => {
  const hp = document.getElementById("help");
  if (hp && !hp.hidden) { if (["Enter", " ", "Escape"].includes(e.key)) { hideHelp(); chooseMode("my"); e.preventDefault(); } return; }
  if (MM.isOpen() || notebookOpen()) return;
  if (e.key === "n" && !panelOpen()) { openNotebook(); e.preventDefault(); return; }
  if (panelOpen()) {
    if (["Escape", "Enter", " "].includes(e.key)) { closePanel(); e.preventDefault(); }
    return;
  }
  if ((e.key === "Enter" || e.key === " ") && focusShop) { openGift(); e.preventDefault(); return; }
  if ((e.key === "Enter" || e.key === " ") && focusGuest) { talkTo(focusGuest); e.preventDefault(); return; }
  if ((e.key === "Enter" || e.key === " ") && focused) { openPanel(focused); e.preventDefault(); return; }
  keys.add(e.key.toLowerCase()); if (e.key.startsWith("Arrow")) e.preventDefault();
});
addEventListener("keyup", e => keys.delete(e.key.toLowerCase()));
addEventListener("blur", () => { keys.clear(); btnHeld.clear(); });
const cv = renderer.domElement; let drag = null;
cv.addEventListener("pointerdown", e => { drag = { x: e.clientX, y: e.clientY, moved: 0 }; cv.setPointerCapture(e.pointerId); });
cv.addEventListener("pointermove", e => {
  if (!drag) { cv.style.cursor = pick(e, built().flatMap(r => r.clickables)) ? "pointer" : "default"; return; }
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; drag.moved += Math.abs(dx) + Math.abs(dy);
  if (drag.moved > 6) { player.yaw += dx * .005; player.pitch = Math.max(-.9, Math.min(.7, player.pitch + dy * .004)); player.target = null; }
});
cv.addEventListener("pointerup", e => { if (drag && drag.moved <= 6) click(e); drag = null; });
const ray = new THREE.Raycaster();
function pick(e, list) { ray.setFromCamera(new THREE.Vector2(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1), camera); return ray.intersectObjects(list, false)[0]; }
function click(e) {
  const b = built(); const hit = pick(e, [...b.flatMap(r => r.clickables), ...b.flatMap(r => r.floors)]);
  if (!hit) return;
  const ex = hit.object.userData.exhibit, gu = hit.object.userData.guest, lk = hit.object.userData.locked, ms = hit.object.userData.mascot;
  if (lk) { MM.openShop(lk); return; }
  if (hit.object.userData.giftshop) { if (hit.distance < 9) openGift(); else player.target = new THREE.Vector3(GIFT.x, 0, GIFT.z - 2.2); return; }
  if (ms) { say(ms, `Hi! I'm ${ms.name[1]}!`, `${ms.name[0]}だよ！`, 3); return; }
  const dp = hit.object.userData.display;
  if (dp) { MM.displayHint(dp); return; }
  if (gu) {
    if (hit.distance < 7) talkTo(gu);
    else { const p = gu.obj.getWorldPosition(new THREE.Vector3()), d = new THREE.Vector3().subVectors(player.pos, p).setY(0).normalize(); player.target = p.addScaledVector(d, 1.8).setY(0); }
    return;
  }
  if (ex) {
    if (hit.distance < 9) openPanel(ex);
    else { const rec = b.flatMap(r => r.exhibits).find(x => x.ex === ex); if (rec) player.target = rec.pos.clone().addScaledVector(rec.normal, 2.6); }
  } else if (hit.object.userData.floor) player.target = hit.point.clone();
}
document.querySelectorAll("[data-btn]").forEach(b => {
  const k = b.dataset.btn, off = () => btnHeld.delete(k);
  b.addEventListener("pointerdown", e => { e.preventDefault(); btnHeld.add(k); player.target = null; });
  ["pointerup", "pointerleave", "pointercancel"].forEach(ev => b.addEventListener(ev, off));
});
document.getElementById("fs").addEventListener("click", () => { try { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.(); } catch { } });
document.getElementById("home").addEventListener("click", () => {
  closePanel(); player.pos.set(0, 0, 11.6); player.yaw = 0; player.pitch = -0.05; player.target = null; enterRoom(0);
});

// ================= seen tracker / HUD =================
let seen = new Set();
try { seen = new Set(JSON.parse(localStorage.getItem("museum-seen2") || "[]")); } catch { }
function markSeen(key) { if (!key || seen.has(key)) return; seen.add(key); try { localStorage.setItem("museum-seen2", JSON.stringify([...seen])); } catch { } updateHud(); }
const hudRoom = document.getElementById("room"), hudSeen = document.getElementById("seen"), hint = document.getElementById("hint");
function updateHud() {
  const r = rooms[player.room];
  const nm = r.topic.lobby && MM.museumName();
  hudRoom.innerHTML = nm ? `<b>${esc(nm[0])}</b><span>${esc(nm[1])} · ロビー Lobby</span>` : `<b>${esc(r.topic.ja)}</b><span>${esc(r.topic.en)}</span>`;
  if (MM.active) MM.hud(hudSeen);
  else hudSeen.innerHTML = `🚪 ${roomsVisited} へや　👀 ${seen.size} / ${ALL_ITEMS}`;
}
const mapCv = document.getElementById("map"), mg = mapCv.getContext("2d");
function drawMap() {
  const W = mapCv.width, H = mapCv.height, S = 1.6; // px per metre
  mg.clearRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2, ox = player.pos.x, oz = player.pos.z;
  for (const r of rooms) {
    if (!r.seen && !(r.parent != null && rooms[r.parent].seen)) continue;
    const x = cx + (r.x - ox) * S, y = cy + (r.z - oz) * S;
    if (x < -40 || y < -40 || x > W + 40 || y > H + 40) continue;
    if (r.parent != null && r.warpFrom == null) { const p = rooms[r.parent]; mg.strokeStyle = "#c9b48a"; mg.lineWidth = 6; mg.beginPath(); mg.moveTo(cx + (p.x - ox) * S, cy + (p.z - oz) * S); mg.lineTo(x, y); mg.stroke(); }
  }
  for (const r of rooms) {
    if (!r.seen && !(r.parent != null && rooms[r.parent].seen)) continue;
    const x = cx + (r.x - ox) * S, y = cy + (r.z - oz) * S, sw = r.hx * 2 * S, sh = r.hz * 2 * S;
    mg.fillStyle = r.seen ? r.topic.c : "#d9d0c0"; mg.globalAlpha = r.i === player.room ? 1 : .75;
    mg.fillRect(x - sw / 2, y - sh / 2, sw, sh); mg.globalAlpha = 1;
    if (!r.seen) { mg.fillStyle = "#7a6a55"; mg.font = "bold 16px sans-serif"; mg.textAlign = "center"; mg.textBaseline = "middle"; mg.fillText("?", x, y); }
  }
  mg.save(); mg.translate(cx, cy); mg.rotate(-player.yaw);
  mg.fillStyle = "#e8731c"; mg.strokeStyle = "#fff"; mg.lineWidth = 2;
  mg.beginPath(); mg.moveTo(0, -9); mg.lineTo(6, 6); mg.lineTo(-6, 6); mg.closePath(); mg.fill(); mg.stroke(); mg.restore();
}

// ================= panel =================
let panelEx = null;
const esc = s => ruby(String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])));
function openPanel(ex) {
  panelEx = ex; keys.clear(); btnHeld.clear(); player.target = null;
  const body = document.getElementById("pbody");
  if (ex.text) {
    body.innerHTML = `<div class="ptext"><h2>${esc(ex.ja)}</h2><div class="en">${esc(ex.en)}</div><p>${esc(ex.fact || "")}</p></div>`;
  } else {
    const t = TOPICS[ex.topic];
    const pic = ex.img ? `<img src="${ex.img}" alt="">` : `<div class="bigpic" style="--c:${t.c}"><canvas width="560" height="560"></canvas></div>`;
    body.innerHTML = `${pic}<div class="info"><div class="crumb">${esc(t.ja)} ・ ${esc(t.en)}</div><h2>${esc(ex.ja)}</h2><div class="en big">${esc(ex.en)}</div>
      ${ex.rows.map(([k, j, e]) => `<div class="row"><span class="k">${esc(k)}</span><span>${esc(j)} <i>${esc(e)}</i></span></div>`).join("")}
      <p class="fact">💡 ${esc(ex.fact)}</p>
      ${ex.about ? `<div class="about">${ex.about.split("\n").map(p => `<p>${esc(p)}</p>`).join("")}</div>` : ""}
      ${ex.say?.length ? `<div class="say"><div class="say-h">🗣️ 英語で 言って みよう！ <i>Let's say it!</i></div>${ex.say.map(([e, j]) => `<div class="line"><b>${esc(e)}</b><span>${esc(j || "")}</span></div>`).join("")}</div>` : ""}
      ${ex.status ? statusScale(ex.status, ex.statusSource) : ""}</div>`;
    const c = body.querySelector("canvas");
    if (c) { const g = c.getContext("2d"); drawPic(g, ex.pic, 280, 280, 520); }
    startReading(ex, body);
  }
  panel.hidden = false;
}
// stars only come after the exhibit window has been open for 5 seconds (counted only while the tab is visible)
const READ_MS = 5000;
let readTimer = null;
function startReading(ex, body) {
  clearInterval(readTimer); readTimer = null;
  if (seen.has(ex.key) && !(MM.active && !MM.hasSeen(ex.key))) return;
  const bar = document.createElement("div"); bar.className = "readbar";
  bar.innerHTML = `<div class="rb-fill"></div><span>📖 よんでね… <i>Keep reading…</i></span>`;
  body.querySelector(".info")?.prepend(bar);
  const fill = bar.firstElementChild; let t = 0, last = performance.now();
  readTimer = setInterval(() => {
    const now = performance.now(), dt = now - last; last = now;
    if (panelEx !== ex || panel.hidden) { clearInterval(readTimer); readTimer = null; return; }
    if (document.visibilityState === "visible") t += Math.min(dt, 250);
    fill.style.width = Math.min(100, t / READ_MS * 100) + "%";
    if (t >= READ_MS) {
      clearInterval(readTimer); readTimer = null;
      markSeen(ex.key); MM.openedExhibit(ex);
      bar.classList.add("done"); bar.querySelector("span").innerHTML = MM.active ? "⭐ よくできました！ <i>Well done!</i>" : "✓";
    }
  }, 100);
}
function statusScale(st, src) {
  return `<div class="status">${src === "japan" ? `<div class="src">日本の レッドリスト(かんきょうしょう)</div>` : ""}
    <div class="bar">${STATUS_ORDER.map(k => `<div class="seg${k === st ? " on" : ""}" style="--c:${STATUS[k].c}"><b>${k}</b></div>`).join("")}</div>
    <div class="label" style="color:${STATUS[st].c}">${STATUS[st].ja} <i>${STATUS[st].en}</i></div></div>`;
}
function closePanel() { panel.hidden = true; panelEx = null; }
document.getElementById("close").addEventListener("click", closePanel);
panel.addEventListener("click", e => { if (e.target === panel) closePanel(); });

// ================= loop =================
let focused = null, focusGuest = null, focusShop = false, mapT = 0;
const lastPos = new THREE.Vector3();
const fwd = new THREE.Vector3(), timer = new THREE.Timer();
function frame() {
  timer.update(); const dt = Math.min(timer.getDelta(), .05);
  if (!panelEx && !MM.isOpen() && !notebookOpen()) {
    const k = n => keys.has(n) || btnHeld.has(n);
    player.yaw += ((k("arrowleft") || k("q") ? 1 : 0) - (k("arrowright") || k("e") ? 1 : 0)) * dt * 1.9;
    const f = (k("arrowup") || k("w") ? 1 : 0) - (k("arrowdown") || k("s") ? 1 : 0), s = (k("d") ? 1 : 0) - (k("a") ? 1 : 0);
    const sp = 4.4 * dt, sin = Math.sin(player.yaw), cos = Math.cos(player.yaw);
    if (f || s) { player.target = null; move((-sin * f + cos * s) * sp, (-cos * f - sin * s) * sp); }
    else if (player.target) {
      const d = new THREE.Vector3().subVectors(player.target, player.pos); d.y = 0; const dist = d.length();
      if (dist < .15) player.target = null;
      else {
        d.normalize(); const want = Math.atan2(-d.x, -d.z);
        player.yaw += (((want - player.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI) * Math.min(1, dt * 5);
        if (!move(d.x * Math.min(sp, dist), d.z * Math.min(sp, dist))) player.target = null;
      }
    }
  }
  for (const r of built()) for (const pt of r.portals || []) {
    if (Math.hypot(player.pos.x - pt.x, player.pos.z - pt.z) < 1.1) {
      player.pos.set(pt.target.x, 0, pt.target.z); player.yaw = Math.atan2(-pt.target.dx, -pt.target.dz); player.target = null;
      enterRoom(pt.target.room); break;
    }
  }
  const moved = Math.hypot(player.pos.x - lastPos.x, player.pos.z - lastPos.z);
  // Leisurely footsteps: about 1.6 steps a second at full walking speed, never closer than 0.55s apart.
  if (moved < 1) { stepAcc += moved; const now = performance.now(); if (stepAcc > 2.7 && now - lastStepT > 550) { stepAcc = 0; lastStepT = now; footstep(); } } else stepAcc = 0;
  lastPos.copy(player.pos);
  const ri = roomAt(player.pos); if (ri !== player.room) enterRoom(ri);
  camera.position.set(player.pos.x, EYE, player.pos.z); camera.rotation.set(player.pitch, player.yaw, 0, "YXZ");
  camera.getWorldDirection(fwd); const f2 = new THREE.Vector3(fwd.x, 0, fwd.z).normalize();
  let best = null, bs = 0;
  for (const x of rooms[player.room].exhibits) {
    const to = new THREE.Vector3(x.pos.x - player.pos.x, 0, x.pos.z - player.pos.z); const d = to.length(); if (d > 5.5) continue;
    const dot = to.normalize().dot(f2); if (dot > .8 && dot / d > bs) { bs = dot / d; best = x.ex; }
  }
  // a question guest close by and in view takes priority
  let fg = null;
  for (const g of rooms[player.room].guests || []) {
    if (!g.asker) continue;
    const to = new THREE.Vector3(g.obj.position.x - player.pos.x, 0, g.obj.position.z - player.pos.z), d = to.length();
    if (d < 3.6 && to.normalize().dot(f2) > .7) fg = g;
  }
  const atShop = MM.active && rooms[player.room].topic.lobby && !fg && Math.hypot(player.pos.x - GIFT.x, player.pos.z - (GIFT.z - 2.3)) < 4.2
    && new THREE.Vector3(GIFT.x - player.pos.x, 0, GIFT.z - player.pos.z).normalize().dot(f2) > .6;
  if (atShop !== focusShop) { focusShop = atShop; focusGuest = null; focused = null; if (atShop) hint.innerHTML = `<b>Enter</b> か クリックで 🛍️ ギフトショップ <i>Gift Shop</i>`; }
  if (focusShop) { /* keep the shop hint */ }
  else if (fg !== focusGuest || (!fg && best !== focused)) {
    focusGuest = fg; focused = fg ? null : best;
    if (fg) hint.innerHTML = fg.role === "guide" ? `<b>Enter</b> か クリックで 話す — こまっている みたい！ <i>Talk</i>` : `<b>Enter</b> か クリックで 話す — しつもんに こたえよう！ <i>Talk</i>`;
    else if (focused) hint.innerHTML = `<b>Enter</b> か クリックで 見る — ${esc(focused.ja)}`;
  }
  hint.hidden = !(focused || focusGuest || focusShop) || panelOpen() || MM.isOpen() || notebookOpen();
  const gl = guideCheck();
  updateGuests(built(), dt, player.pos, player.yaw, gl); updateDisplays(dt);
  if ((mapT += dt) > .12) { mapT = 0; drawMap(); }
  renderer.render(scene, camera); requestAnimationFrame(frame);
}
let bannerT;
function showBanner(r) {
  const b = document.getElementById("banner");
  b.innerHTML = `<b>${esc(r.topic.ja)}</b><span>${esc(r.topic.en)}</span>`; b.classList.add("show");
  clearTimeout(bannerT); bannerT = setTimeout(() => b.classList.remove("show"), 2200);
}
// ================= guests, music, modes =================
const bubbleMat = new THREE.SpriteMaterial({ map: canvasTex(128, 128, (g, w, h) => {
  g.fillStyle = "#fff"; g.strokeStyle = "#e8731c"; g.lineWidth = 8;
  g.beginPath(); g.arc(w / 2, 56, 46, 0, Math.PI * 2); g.fill(); g.stroke();
  g.beginPath(); g.moveTo(w / 2 - 14, 96); g.lineTo(w / 2, 122); g.lineTo(w / 2 + 14, 96); g.closePath(); g.fill();
  g.fillStyle = "#e8731c"; g.font = `bold 66px ${FONT}`; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText("?", w / 2, 60);
}), depthTest: true });
const guideMat = new THREE.SpriteMaterial({ map: canvasTex(128, 128, (g, w, h) => {
  g.fillStyle = "#fff"; g.strokeStyle = "#2f8fb0"; g.lineWidth = 8;
  g.beginPath(); g.arc(w / 2, 56, 46, 0, Math.PI * 2); g.fill(); g.stroke();
  g.beginPath(); g.moveTo(w / 2 - 14, 96); g.lineTo(w / 2, 122); g.lineTo(w / 2 + 14, 96); g.closePath(); g.fill();
  drawPic(g, "🗺️", w / 2, 58, 58);
}), depthTest: true });
function bubble(role) { const sp = new THREE.Sprite(role === "guide" ? guideMat : bubbleMat); sp.scale.set(.55, .55, 1); return sp; }

// ---------- guiding a guest to an exhibit ----------
// which room each topic sits in (wing hall), for the "where is it?" hint
const WING_OF = {};
for (const wid of Object.keys(HALLS)) for (const id of wingRooms(wid)) if (TOPICS[id]) WING_OF[id] = wid;
function guideTargets(notId) {
  return Object.keys(WING_OF).filter(id => id !== notId && (!MM.active || MM.isUnlocked(id)))
    .flatMap(id => TOPICS[id].list.filter(x => !x.text && (x.img || x.pic) && x.en && plain(x.en).length <= 26 && !x.en.includes(":")));
}
let guideReq = null;   // { item, g } while a guest is following you
const guideChip = document.getElementById("guide");
function offerGuide(g) {
  const pool = guideTargets(rooms[player.room].topic.id); if (!pool.length) return;
  const item = pool[Math.floor(Math.random() * pool.length)], t = TOPICS[item.topic], w = HALLS[WING_OF[item.topic]];
  MM.offerGuide(item, [w.ja, w.en], [t.ja, t.en], ok => {
    if (!ok) return;
    startFollow(g); guideReq = { item, g }; focusGuest = null;
    say(g, "Let's go!", "いこう！", 2.5);
    guideChip.innerHTML = `${item.img ? `<img src="${item.img}" alt="">` : ""}<div><b>🗺️ ${esc(item.en)}</b><span>${esc(item.ja)}</span>
      <small>📍 ${esc(w.ja)} › ${esc(t.ja)}</small></div><button title="Stop">✕</button>`;
    guideChip.hidden = false;
    guideChip.querySelector("button").onclick = () => { endFollow(null); guideReq = null; guideChip.hidden = true; };
  });
}
function guideCheck() {
  if (!guideReq) return null;
  const r = rooms[player.room]; if (r.topic.id !== guideReq.item.topic || !r.group) return null;
  const e = r.exhibits.find(x => x.ex.key === guideReq.item.key); if (!e) return null;
  if (Math.hypot(e.pos.x - player.pos.x, e.pos.z - player.pos.z) < 4.7) {
    const { g, item } = guideReq; guideReq = null; guideChip.hidden = true;
    endFollow(r); g.look = e.pos; g.t = 12;
    say(g, "Thank you!", "ありがとう！", 3.5);
    confetti(); chime(); MM.guideDone(item);
  }
  return e.pos;
}

// ---------- things guests say ----------
const LINES = {
  all: [["Wow!", "わあ！"], ["Cool!", "かっこいい！"], ["I like this!", "これ、すき！"], ["Amazing!", "すごい！"], ["Look at this!", "これ 見て！"], ["Interesting!", "おもしろい！"], ["Beautiful!", "きれい！"]],
  "wing-animals": [["So cute!", "かわいい！"], ["Is it big?", "大きいの かな？"], ["I like animals!", "どうぶつ、だいすき！"]],
  "wing-nature": [["So pretty!", "きれい！"], ["I like nature!", "しぜん、すき！"]],
  "wing-space": [["So far away!", "とおい！"], ["I want to go to space!", "うちゅうに 行きたい！"]],
  "wing-food": [["Yummy!", "おいしそう！"], ["I'm hungry!", "おなか すいた！"], ["I want to eat this!", "これ 食べたい！"]],
  "wing-world": [["I want to go there!", "ここに 行きたい！"], ["Hello, world!", "こんにちは、せかい！"]],
  "wing-japan": [["I know this!", "これ 知ってる！"], ["I want to go there!", "ここに 行きたい！"]],
  "wing-history": [["So old!", "古い！"], ["Long, long ago…", "むかし むかし…"]],
  "wing-art": [["Beautiful!", "きれい！"], ["I like the colors!", "色が すき！"]],
  "wing-sports": [["Let's play!", "あそぼう！"], ["I like sports!", "スポーツ、すき！"]],
  "wing-tech": [["How does it work?", "どう うごくの？"], ["Cool!", "かっこいい！"]],
  "wing-science": [["How does it work?", "どう うごくの？"], ["I didn't know that!", "知らなかった！"]],
  "wing-wonder": [["How strange!", "ふしぎ！"], ["Really?!", "ほんとう？！"]],
  "wing-words": [["I can read this!", "これ よめる！"]],
};
setLines((r, ex) => {
  const pool = [...LINES.all, ...(LINES[WING_OF[r.topic.id]] || LINES[r.topic.id] || []), ...(LINES[WING_OF[r.topic.id]] || [])];
  if (ex && ex.en && plain(ex.en).length < 18 && Math.random() < .35) return [`I like the ${plain(ex.en).replace(/^(the|a|an) /i, "")}!`, `${plain(ex.ja)}、すき！`];
  return pool[Math.floor(Math.random() * pool.length)];
});
setScene(scene);

function talkTo(g) {
  if (!g.asker || !g.room.group) return;
  closePanel(); keys.clear(); btnHeld.clear(); player.target = null;
  if (g.role === "guide") { if (!guideReq) offerGuide(g); return; }
  MM.ask(g.room.topic, (result, q) => {
    // "later": keep the same question so they can go and look for the answer
    if (result == null) { g.question = q; return; }
    const r = g.room;
    doneAsking(g); focusGuest = null;
    // a wrong answer: after a while someone else in this room has a new question
    if (result === false) setTimeout(() => { if (r.group && MM.askersFor(r.topic) > 0 && (r.guests || []).filter(x => x.asker && x.role !== "guide").length < 2) newAsker(r, bubble, g); }, window.__askDelay || 25000);
  }, g.question);
}
function rebuildAll() { built().forEach(dispose); stream(); updateHud(); }
MM.init({ TOPICS, HALLS, drawPic, onChange: (what, id) => {
  if (what === "name") { if (rooms[0].group) { dispose(rooms[0]); stream(); } }
  else if (what === "colour" || what === "decor") {
    const ids = Array.isArray(id) ? id : [id];
    built().filter(r => r === rooms[player.room] || ids.includes(r.topic.id)).forEach(dispose); stream(); }
  else if (what === "unlock") {
    if (id && TOPICS[id] && !TOPICS[id].hall) doorToNewRoom(id);
    built().filter(r => r.topic.hall || r.topic.lobby).forEach(dispose); stream(); }
  else if (what === "mascot") { const m = MM.MASCOTS.find(x => x[0] === id); spawnMascots(rooms[player.room], [m], true); }
  updateHud();
} });
loadGuests();
MM.activate(); document.body.classList.add("my");
let MODE = null;
function chooseMode(m) {
  startMusic(); syncMusicBtn(); startSfx(); setSfx(sfxOn);
  if (MODE) return;
  MODE = m;
  MM.start(); rebuildAll();
}
const musicBtn = document.getElementById("music");
const syncMusicBtn = () => { musicBtn.textContent = musicOn() ? "🎵" : "🔇"; musicBtn.title = musicOn() ? "Music on" : "Music off"; };
musicBtn.addEventListener("click", () => { startMusic(); toggleMusic(); syncMusicBtn(); });
let sfxOn = true; try { sfxOn = localStorage.getItem("museum-sfx") !== "off"; } catch { }
const sfxBtn = document.getElementById("sfx");
const syncSfxBtn = () => { sfxBtn.textContent = sfxOn ? "🔊" : "🔈"; sfxBtn.style.opacity = sfxOn ? 1 : .6; sfxBtn.title = sfxOn ? "Sounds on" : "Sounds off"; };
sfxBtn.addEventListener("click", () => { sfxOn = !sfxOn; try { localStorage.setItem("museum-sfx", sfxOn ? "on" : "off"); } catch { } startSfx(); setSfx(sfxOn); syncSfxBtn(); });
syncSfxBtn();
// ---------- word notebook ----------
const ITEM_BY_KEY = {};
for (const t of Object.values(TOPICS)) for (const x of t.list) if (x.key) ITEM_BY_KEY[x.key] = x;
initNotebook({
  getWords: () => [...seen].map(k => ITEM_BY_KEY[k]).filter(x => x && !x.text && x.en && TOPICS[x.topic])
    .map(x => ({ ...x, room: TOPICS[x.topic].ja + " · " + TOPICS[x.topic].en })),
  drawPic, onPick: w => openPanel(ITEM_BY_KEY[w.key]), title: () => MM.active ? MM.museumName() : null,
});
document.getElementById("notebook").addEventListener("click", () => { closePanel(); openNotebook(); });
const teachBtn = document.getElementById("teacher");
if (MM.TEACHER) { teachBtn.hidden = false; teachBtn.addEventListener("click", () => { closePanel(); MM.openTeacher(); }); }
syncMusicBtn();
document.getElementById("shop").addEventListener("click", () => { closePanel(); MM.openShop(); });
document.getElementById("paint").addEventListener("click", () => { closePanel(); MM.openDecor(rooms[player.room].topic); });

enterRoom(0);
if (location.search.includes("debug")) window.__m = { player, rooms, placeFar, LAYOUTS, openPanel, closePanel, TOPICS, enterRoom, build, dispose, MM, talkTo, built, guide: () => guideReq, openNotebook };
window.__say = say;
document.getElementById("loading").remove();
const help = document.getElementById("help");
const showHelp = () => { help.hidden = false; keys.clear(); };
function hideHelp() { help.hidden = true; try { localStorage.setItem("museum-help-seen", "1"); } catch { } }
document.getElementById("help-my").addEventListener("click", () => { hideHelp(); chooseMode("my"); });
document.getElementById("helpbtn").addEventListener("click", showHelp);
help.addEventListener("click", e => { if (e.target === help && MODE) hideHelp(); });
const urlMode = new URLSearchParams(location.search).get("mode");
if (urlMode) { help.hidden = true; chooseMode("my"); }
else showHelp(); // how to play, every time the museum opens
requestAnimationFrame(frame);
