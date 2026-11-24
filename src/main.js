import * as THREE from "three";
import { DATA } from "./data.js";
import { NATURE } from "./topics_nature.js";
import { WORLD } from "./topics_world.js";
import { MORE } from "./topics_more.js";
import { ART } from "./topics_art.js";
import { PHILOSOPHY } from "./topics_philosophy.js";
import { BATCH1 } from "./topics_batch1.js";
import { DETAILS } from "./details/index.js";

// ================= content =================
const TOPICS = { ...NATURE, ...WORLD, ...MORE, ...ART, ...PHILOSOPHY, ...BATCH1 };
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
    list = (t.items || []).map(([ja, en, pic, fact, rows, year]) => ({ ja, en, pic, fact, rows: (rows || []).concat(year ? [["📅 年代", year, ""]] : []), year }));
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
  const row = k => (it.rows || []).find(r => r[0].includes(k));
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
const ALL_ITEMS = Object.values(TOPICS).reduce((n, t) => n + t.list.length, 0);
const HUBS = ["animals", "regions", "japan", "solar-system", "world-dishes", "ball-sports", "jobs-dream", "inventions", "nagasaki", "dinosaurs", "heroes", "science-fun", "aquarium", "town", "art", "art-timeline", "art-world-crafts", "human-body", "japan-islands", "games-world", "philosophy-questions", "hello-world", "nagasaki-city", "orchestra", "sdgs"];
const LOBBY = {
  id: "lobby", ja: "ロビー", en: "Lobby", c: "#6b4d2c", lobby: true,
  list: [
    { ja: "ようこそ！", en: "Welcome to the Museum", text: true,
      fact: "ここは どこまでも つづく ふしぎな はくぶつかん。ドアを くぐる たびに、新しい へやが あらわれます。どこへ 行くかは、あなた しだい！" },
    { ja: "あそびかた", en: "How to explore", text: true,
      fact: "↑↓←→ か WASD で 歩く。画面を ドラッグして 見回す。ゆかを クリックすると そこまで 歩くよ。え を クリックすると くわしく 見られる！ 「？」の ドアは どこに つながるか わからない ふしぎな ドア。" },
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
const scene = new THREE.Scene();
scene.background = new THREE.Color("#e9e7e3");
scene.fog = new THREE.Fog("#e9e7e3", 22, 55);
const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 80);
scene.add(new THREE.HemisphereLight("#ffffff", "#e2ddd3", 2.3));
const sun = new THREE.DirectionalLight("#fff4e0", 1.3); sun.position.set(3, 10, 6); scene.add(sun);
scene.add(sun.target);
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); }
addEventListener("resize", resize); resize();

// ================= textures =================
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
const floorMap = plankTex("#dcae74"); floorMap.repeat.set(ROOM / 6, ROOM / 6);
const corrMap = plankTex("#dcae74", 512); corrMap.repeat.set(1, 1);
const wallMap = (() => {
  const t = canvasTex(256, 256, (g, w, h) => { g.fillStyle = "#ecebe7"; g.fillRect(0, 0, w, h); for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${Math.random() < .5 ? "255,255,255" : "0,0,0"},${Math.random() * .05})`; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); } });
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
const mats = {
  wall: new THREE.MeshLambertMaterial({ map: wallMap, color: "#dad9d5" }),
  base: lamb("#cfcac2"),
  floor: new THREE.MeshPhongMaterial({ map: floorMap, specular: "#7a6a5a", shininess: 90 }),
  floorC: new THREE.MeshPhongMaterial({ map: corrMap, specular: "#5a4a3a", shininess: 70 }),
  ceiling: new THREE.MeshBasicMaterial({ color: "#5f5f5f" }),
  black: lamb("#151515"), brass: lamb("#c9a44c"), rope: lamb("#a52a2a"), glass: lamb("#cfdde6"),
  bench: new THREE.MeshPhongMaterial({ color: "#d9a868", specular: "#333", shininess: 30 }),
  lampFace: new THREE.MeshBasicMaterial({ color: "#fffbe8" }),
  scallop: new THREE.MeshBasicMaterial({ map: scallopMap, transparent: true, depthWrite: false }),
};

// palette for a topic: wall colour (light) + floor (mid)
const wallColor = t => mix(t.c, "#f6f0e4", 0.78);
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
function labelTex(ja, en, status, year) {
  return canvasTex(480, 150, (g, w, h) => {
    g.fillStyle = "#f7f5f0"; g.fillRect(0, 0, w, h);
    if (year) { g.fillStyle = "#b0542a"; g.textAlign = "right"; g.textBaseline = "middle"; g.font = `bold 30px ${FONT}`; g.fillText(year, w - 18, 108); }
    g.fillStyle = "#222"; g.textAlign = "left"; g.textBaseline = "middle";
    fitFont(g, ja, w - 70, 46); g.fillText(ja, 22, 52);
    g.fillStyle = "#555"; fitFont(g, en, year ? w - 190 : w - 50, 30, "500"); g.fillText(en, 22, 108);
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
  square: { w: 22, d: 22, h: 5.4 },
  small: { w: 14, d: 14, h: 4.6 },
  long: { w: 13, d: 50, h: 5.8 },
  wide: { w: 32, d: 20, h: 6.2 },
  tall: { w: 18, d: 18, h: 8 },
};
function pickLayout(t) {
  if (t.layout) return t.layout;
  if (t.lobby) return "square";
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
  r.box = roomBox(x, z, hx, hz);
  rooms.push(r); reserved.push(r.box); return r;
}
function corridorBox(x0, z0, dir, len) {
  const [dx, dz] = DIRS[dir], hw = DOOR_W / 2 + WALL_T + 0.1;
  const x1 = x0 + dx * len, z1 = z0 + dz * len;
  return { minX: Math.min(x0, x1) - (dx ? 0 : hw), maxX: Math.max(x0, x1) + (dx ? 0 : hw), minZ: Math.min(z0, z1) - (dz ? 0 : hw), maxZ: Math.max(z0, z1) + (dz ? 0 : hw) };
}
function pickTopics(r, n) {
  const t = TOPICS[r.topic.id] || r.topic;
  const parentTopic = r.parent != null ? rooms[r.parent].topic.id : null;
  let pool = (t.links || HUBS).filter(id => TOPICS[id] && id !== parentTopic && id !== t.id);
  pool = shuffle(pool).sort((a, b) => (visitCount[a] || 0) - (visitCount[b] || 0));
  return pool.slice(0, n);
}
// decide exits and reserve space for the next rooms
function planExits(r) {
  if (r.exits) return;
  r.exits = {};
  const sides = shuffle(Object.keys(DIRS).filter(s => s !== r.entry));
  if (r.topic.lobby) {
    const start = new URLSearchParams(location.search).get("start");
    const hubs = shuffle(HUBS.filter(h => h !== start)).slice(0, 3); if (TOPICS[start]) hubs[0] = start;
    ["N", "E", "W"].forEach((s, i) => tryExit(r, s, TOPICS[hubs[i]], false));
    r.exits.S = { closed: true, label: ["いりぐち", "Entrance"] };
    return;
  }
  const n = r.topic.timeline ? 1 : Math.random() < 0.55 ? 3 : 2;
  if (r.topic.timeline && r.entry) { const far = OPP[r.entry]; sides.sort((a, b) => (b === far) - (a === far)); }
  const picks = pickTopics(r, n);
  const mystery = Math.random() < 0.35;
  // keep trying walls until we have n doors (or run out of walls)
  let made = 0;
  for (const s of sides) {
    if (made >= n) break;
    let topic = TOPICS[picks[made]], isMystery = false;
    if (mystery && made === n - 1) { topic = TOPICS[rand(Object.keys(TOPICS).filter(id => id !== r.topic.id))]; isMystery = true; }
    if (!topic) topic = TOPICS[rand(Object.keys(TOPICS))];
    if (tryExit(r, s, topic, isMystery)) made++;
  }
  if (made === 0) {
    const side = sides.find(s => !r.exits[s]);
    if (side) makeWarp(r, side, TOPICS[rand(Object.keys(TOPICS).filter(id => id !== r.topic.id))]);
  }
}
function tryExit(r, side, topic, mystery) {
  const [dx, dz] = DIRS[side];
  const x0 = r.x + dx * r.hx, z0 = r.z + dz * r.hz;
  // fallbacks must still hold every exhibit (+ intro)
  const need = topic.list.length + 1, CAP = { small: 8, tall: 12, square: 12, wide: 20, long: 18 };
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
    r.exits[side] = { child: child.i, len, mystery };
    return true;
  }
  return false;
}

// A warp: a short corridor ending in a portal that jumps to a new room built in open space far away.
function makeWarp(r, side, topic) {
  const layout = pickLayout(topic), { hx, hz } = dims(layout, "S");
  for (let k = 1; k < 400; k++) {
    const cx = 600 * Math.ceil(k / 8) * (k % 2 ? 1 : -1), cz = 600 * ((k % 8) - 4);
    const box = roomBox(cx, cz, hx, hz, 30);
    if (reserved.some(b => overlaps(b, box))) continue;
    const child = newRoom(topic, cx, cz, "S", r.i, layout);
    child.warpFrom = side;
    reserved.push(roomBox(cx, cz + hz + 3, 3, 3)); // child's back stub
    const [dx, dz] = DIRS[side];
    reserved.push(corridorBox(r.x + dx * r.hx, r.z + dz * r.hz, side, 4));
    r.exits[side] = { child: child.i, len: 4, warp: true, mystery: true };
    return true;
  }
  return false;
}
const portalMat = new THREE.MeshBasicMaterial({ map: canvasTex(256, 256, (g, w, h) => {
  const gr = g.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 2);
  gr.addColorStop(0, "#ffffff"); gr.addColorStop(.35, "#c9a8ff"); gr.addColorStop(.75, "#6a3dc2"); gr.addColorStop(1, "#2a1a5a");
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.fillStyle = "#fff"; g.font = `bold 44px ${FONT}`; g.textAlign = "center"; g.fillText("ワープ", w / 2, h / 2 + 15);
}) });
function addPortal(r, x0, z0, side, len, target) {
  // portal plane at the far end of a stub corridor; walking into it teleports
  const [dx, dz] = DIRS[side];
  const ex = x0 + dx * (len - .05), ez = z0 + dz * (len - .05);
  const p = new THREE.Mesh(new THREE.PlaneGeometry(DOOR_W, DOOR_H), portalMat);
  p.position.set(ex, DOOR_H / 2, ez); p.lookAt(ex - dx, DOOR_H / 2, ez - dz); r.group.add(p);
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
const roomH = r => 5.4;

function buildWall(r, side) {
  const [sx, sz] = DIRS[side], along = sx === 0, H = r.h;
  const half = along ? r.hx : r.hz, dist = along ? r.hz : r.hx;
  const off = dist - WALL_T / 2, wx = r.x + sx * off, wz = r.z + sz * off;
  const ex = side === r.entry ? { back: true } : r.exits[side];
  const segs = ex ? [[-half, -DOOR_W / 2], [DOOR_W / 2, half]] : [[-half, half]];
  for (const [a, b] of segs) {
    const len = b - a, mid = (a + b) / 2;
    const px = along ? r.x + mid : wx, pz = along ? wz : r.z + mid;
    addBox(r, along ? len : WALL_T, H, along ? WALL_T : len, mats.wall, px, H / 2, pz, true);
    const ix = along ? px : wx - sx * (WALL_T / 2 + .015), iz = along ? wz - sz * (WALL_T / 2 + .015) : pz;
    addBox(r, along ? len : .03, .1, along ? .03 : len, mats.base, ix, .05, iz); // skirting
  }
  if (!ex) return;
  addBox(r, along ? DOOR_W : WALL_T, H - DOOR_H, along ? WALL_T : DOOR_W, mats.wall, wx, DOOR_H + (H - DOOR_H) / 2, wz);
  // vinyl lettering above the opening, facing into the room
  let ja, en, col = "#3a3a3a";
  if (ex.back) { const p = r.parent != null ? rooms[r.parent].topic : null; ja = p ? "← " + p.ja : "もどる"; en = p ? p.en : "Back"; }
  else if (ex.closed) { [ja, en] = ex.label; }
  else { const ct = rooms[ex.child].topic; if (ex.warp && !visitCount[ct.id + "@" + ex.child]) { ja = "✦ ワープ ✦"; en = "Warp door"; col = "#5a3d8a"; } else if (ex.mystery && !visitCount[ct.id + "@" + ex.child]) { ja = "？ ふしぎな へや"; en = "Mystery room"; col = "#5a3d8a"; } else { ja = ct.ja; en = ct.en; col = shade(ct.c, -0.12); } }
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(5, 1), own(new THREE.MeshBasicMaterial({ map: letterTex(ja, en, col), transparent: true })));
  sign.position.set(wx - sx * (WALL_T / 2 + .02), DOOR_H + .75, wz - sz * (WALL_T / 2 + .02));
  sign.lookAt(sign.position.x - sx, sign.position.y, sign.position.z - sz); r.group.add(sign);
  if (ex.closed) {
    const bx = wx - sx * .7, bz = wz - sz * .7;
    for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(.05, .07, 1, 10), mats.brass); p.position.set(along ? bx + s * 1.4 : bx, .5, along ? bz : bz + s * 1.4); r.group.add(p); }
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 2.8, 6), mats.rope); rope.rotation.z = along ? Math.PI / 2 : 0; rope.rotation.x = along ? 0 : Math.PI / 2; rope.position.set(bx, .85, bz); r.group.add(rope);
    r.colliders.push({ minX: wx - (along ? DOOR_W / 2 : .8), maxX: wx + (along ? DOOR_W / 2 : .8), minZ: wz - (along ? .8 : DOOR_W / 2), maxZ: wz + (along ? .8 : DOOR_W / 2) });
    const back = new THREE.Mesh(new THREE.PlaneGeometry(DOOR_W, DOOR_H), mats.glass);
    back.position.set(wx + sx * .05, DOOR_H / 2, wz + sz * .05); back.lookAt(back.position.x - sx, back.position.y, back.position.z - sz); r.group.add(back);
  }
}
function buildCorridor(r, side, ex) {
  const [dx, dz] = DIRS[side], along = dx !== 0;
  const x0 = r.x + dx * r.hx, z0 = r.z + dz * r.hz, len = ex.len;
  const cx = x0 + dx * len / 2, cz = z0 + dz * len / 2, H = DOOR_H + .6;
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(along ? len : DOOR_W, along ? DOOR_W : len), mats.floorC);
  fl.rotation.x = -Math.PI / 2; fl.position.set(cx, .003, cz); fl.userData.floor = true; r.group.add(fl); r.floors.push(fl);
  const ce = new THREE.Mesh(new THREE.PlaneGeometry(along ? len : DOOR_W, along ? DOOR_W : len), mats.ceiling);
  ce.rotation.x = Math.PI / 2; ce.position.set(cx, H, cz); r.group.add(ce);
  for (const s of [-1, 1]) {
    const off = DOOR_W / 2 + WALL_T / 2;
    addBox(r, along ? len : WALL_T, H, along ? WALL_T : len, mats.wall, along ? cx : cx + s * off, H / 2, along ? cz + s * off : cz, true);
  }
  for (let k = 1.5; k < len; k += 3) { const l = new THREE.Mesh(new THREE.CircleGeometry(.22, 16), mats.lampFace); l.rotation.x = Math.PI / 2; l.position.set(x0 + dx * k, H - .01, z0 + dz * k); r.group.add(l); }
  if (ex.warp) {
    addBox(r, along ? .3 : DOOR_W + .6, H, along ? DOOR_W + .6 : .3, mats.wall, x0 + dx * (len + .15), H / 2, z0 + dz * (len + .15), true);
    const c = rooms[ex.child], [ix, iz] = DIRS[c.entry];
    addPortal(r, x0, z0, side, len, { room: c.i, x: c.x + ix * (c.hx - 2.5), z: c.z + iz * (c.hz - 2.5), dx: -ix, dz: -iz });
  }
}
// slots: wall positions + both faces of a free-standing partition
function slotsFor(r) {
  const out = [];
  for (const side of ["N", "E", "S", "W"]) {
    const hasDoor = side === r.entry || (r.exits && r.exits[side]);
    const along = DIRS[side][0] === 0, L = 2 * (along ? r.hx : r.hz);
    const sp = L <= 16 ? 4.6 : L >= 30 ? 5.4 : 6.4;
    for (let k = -10; k <= 10; k++) {
      const o = k * sp;
      if (Math.abs(o) > L / 2 - 2.2 || (hasDoor && Math.abs(o) < 3.4)) continue;
      out.push({ side, o, wall: true, door: !!hasDoor });
    }
  }
  return out;
}
function partition(r, ox = 0, oz = 0, alongX = r.hx >= r.hz ? r.i % 3 !== 0 : r.i % 3 === 0) {
  // a free-standing wall; orientation chosen per room
  const L = 9, T = .45, H = Math.min(r.h - .9, 4.6);
  addBox(r, alongX ? L : T, H, alongX ? T : L, mats.wall, r.x + ox, H / 2, r.z + oz, true);
  addBox(r, alongX ? L + .02 : T + .02, .1, alongX ? T + .02 : L + .02, mats.base, r.x + ox, .05, r.z + oz);
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
  // light scallop on the wall + track spot aimed at the work
  const sc = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 4.8), mats.scallop); sc.position.set(0, cy + .9, -.02); grp.add(sc);
  const spot = new THREE.Group(); spot.position.set(0, r.h - .35, 2.2); grp.add(spot);
  const can = new THREE.Mesh(new THREE.CylinderGeometry(.11, .14, .38, 12), mats.black); can.rotation.x = 0.9; spot.add(can);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, .3, 6), mats.black); stem.position.y = .2; spot.add(stem);
  const rec = { ex, pos: new THREE.Vector3(px, 0, pz), normal: new THREE.Vector3(nx, 0, nz) };
  r.exhibits.push(rec);
  if (ex.text) {
    // museum wall text: big title and a paragraph printed straight on the wall
    const m = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 3.15), own(new THREE.MeshBasicMaterial({ map: wallTextTex(ex.ja, ex.en, ex.fact, ex.color || r.topic.c), transparent: true })));
    m.position.set(0, 2.35, .02); grp.add(m); m.userData.exhibit = ex; r.clickables.push(m);
    sc.visible = false; return;
  }
  const W = slot.small ? 2.3 : 2.7, H = slot.small ? 1.75 : 2.05;
  const frame = new THREE.Mesh(new THREE.BoxGeometry(W + .12, H + .12, .06), mats.black); frame.position.y = cy; grp.add(frame);
  const pm = own(new THREE.MeshBasicMaterial({ color: "#fff" }));
  const pic = new THREE.Mesh(new THREE.PlaneGeometry(W, H), pm); pic.position.set(0, cy, .035); grp.add(pic);
  const lb = new THREE.Mesh(new THREE.PlaneGeometry(1.5, .47), own(new THREE.MeshBasicMaterial({ map: labelTex(ex.ja, ex.en, ex.status, ex.year) })));
  lb.position.set(0, cy - H / 2 - .42, .01); grp.add(lb);
  if (ex.img) {
    pm.color.set("#cfcfcf");
    new THREE.TextureLoader().load(ex.img, tx => {
      if (!r.group) { tx.dispose(); return; }
      tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = 4; const a = tx.image.width / tx.image.height;
      let w = W, h = W / a; if (h > H) { h = H; w = H * a; }
      pic.geometry.dispose(); pic.geometry = new THREE.PlaneGeometry(w, h);
      frame.scale.set((w + .12) / (W + .12), (h + .12) / (H + .12), 1);
      lb.position.y = cy - h / 2 - .42;
      pm.color.set("#fff"); pm.map = tx; pm.needsUpdate = true;
    });
  } else { pm.map = picTex(ex, (TOPICS[ex.topic] || r.topic).c); pm.needsUpdate = true; }
  for (const m of [pic, frame, lb]) { m.userData.exhibit = ex; r.clickables.push(m); }
}
function build(r) {
  if (r.group) return;
  planExits(r);
  const t = r.topic; r.group = new THREE.Group(); r.colliders = []; r.clickables = []; r.floors = []; r.exhibits = [];
  scene.add(r.group);
  const H = r.h, W2 = r.hx * 2, D2 = r.hz * 2;
  const fmat = shared["floor" + W2 + "x" + D2] ||= (() => { const tx = floorMap.clone(); tx.repeat.set(W2 / 6, D2 / 6); tx.needsUpdate = true; return new THREE.MeshPhongMaterial({ map: tx, specular: "#7a6a5a", shininess: 90 }); })();
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W2, D2), fmat);
  floor.rotation.x = -Math.PI / 2; floor.position.set(r.x, 0, r.z); floor.userData.floor = true; r.group.add(floor); r.floors.push(floor);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W2, D2), mats.ceiling); ceil.rotation.x = Math.PI / 2; ceil.position.set(r.x, H, r.z); r.group.add(ceil);
  for (const s of Object.keys(DIRS)) buildWall(r, s);
  r.portals = [];
  for (const [s, ex] of Object.entries(r.exits)) if (ex.child != null) buildCorridor(r, s, ex);
  if (r.warpFrom) {
    const p = rooms[r.parent], [px, pz] = DIRS[r.warpFrom], [dx, dz] = DIRS[r.entry];
    buildCorridor(r, r.entry, { len: 4, child: r.parent, warp: false, back: true });
    const along = dx !== 0, x0 = r.x + dx * r.hx, z0 = r.z + dz * r.hz;
    addBox(r, along ? .3 : DOOR_W + .6, DOOR_H + .6, along ? DOOR_W + .6 : .3, mats.wall, x0 + dx * 4.15, (DOOR_H + .6) / 2, z0 + dz * 4.15, true);
    addPortal(r, x0, z0, r.entry, 4, { room: p.i, x: p.x + px * (p.hx - 2.5), z: p.z + pz * (p.hz - 2.5), dx: -px, dz: -pz });
  }
  const items = t.lobby
    ? [...t.list.map(x => ({ ...x, color: "#6b4d2c" })), ...shuffle(Object.values(TOPICS).flatMap(x => x.list)).slice(0, 6)]
    : [{ text: true, ja: t.ja, en: t.en, fact: t.intro, color: t.c }, ...t.list];
  // intro text goes on a door-free wall centre; then walls; then partition
  const wallSlots = slotsFor(r);
  const centre = wallSlots.find(s => !s.door && s.o === 0) || wallSlots[0];
  let slots = [centre, ...wallSlots.filter(s => s !== centre)];
  if (t.lobby) { slots = wallSlots.filter(s => !s.door && s.o === 0).concat(wallSlots.filter(s => s.door || s.o !== 0)); }
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
  if (needPartition) {
    if (r.layout === "wide") {
      const p1 = partition(r, longX ? -7.5 : 0, longX ? 0 : -7.5, !longX), p2 = partition(r, longX ? 7.5 : 0, longX ? 0 : 7.5, !longX);
      slots = [slots[0], ...p1.slots, ...p2.slots, ...slots.slice(1)];
      addBench(r, r.x, r.z, longX);
    } else {
      const p = partition(r); slots = [slots[0], ...p.slots, ...slots.slice(1)];
      const bx = p.alongX ? 0 : 4.2, bz = p.alongX ? 4.2 : 0;
      addBench(r, r.x + bx, r.z + bz, p.alongX);
    }
  } else if (!t.lobby) {
    if (r.layout === "long") { const span = (longX ? r.hx : r.hz) - 8; for (let k = -span; k <= span; k += 11) addBench(r, r.x + (longX ? k : 0), r.z + (longX ? 0 : k), longX); }
    else if (r.layout !== "small") addBench(r, r.x, r.z, longX);
  }
  if (slots.length < items.length) console.warn("room too small", t.id, r.layout, slots.length, items.length);
  r.shortfall = Math.max(0, items.length - slots.length);
  slots.slice(0, items.length).forEach((s, i) => addExhibit(r, s, items[i]));
  // track rails along every wall that carries lights
  for (const side of Object.keys(DIRS)) {
    const [sx, sz] = DIRS[side], along = sx === 0, d = (along ? r.hz : r.hx) - WALL_T - 2.25, L = (along ? r.hx : r.hz) * 2 - 4;
    addBox(r, along ? L : .06, .06, along ? .06 : L, mats.black, r.x + (along ? 0 : sx * d), H - .1, r.z + (along ? sz * d : 0));
  }
}
function addBench(r, x, z, alongX) {
  addBox(r, alongX ? 2.6 : .75, .42, alongX ? .75 : 2.6, mats.bench, x, .45, z, true);
}
function dispose(r) {
  if (!r.group) return;
  r.group.traverse(o => {
    if (o.geometry) o.geometry.dispose();
    if (o.material && o.material.userData.own) { o.material.map?.dispose(); o.material.dispose(); }
  });
  scene.remove(r.group); r.group = null; r.colliders = []; r.clickables = []; r.floors = []; r.exhibits = [];
}

// ================= player & streaming =================
newRoom(LOBBY, 0, 0, null, null);
const player = { pos: new THREE.Vector3(0, 0, 5.5), yaw: 0, pitch: -0.05, room: 0, target: null };
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
function enterRoom(i) {
  const r = rooms[i]; const first = !r.seen;
  player.room = i;
  if (first) { r.seen = true; roomsVisited++; visitCount[r.topic.id] = (visitCount[r.topic.id] || 0) + 1; visitCount[r.topic.id + "@" + i] = 1; }
  // a mystery door gets its real name once you've been through it
  if (first && r.parent != null) { const p = rooms[r.parent]; if (p.group) { dispose(p); } }
  stream(); updateHud(); showBanner(r);
}

// ================= input =================
const keys = new Set(), btnHeld = new Set();
const panel = document.getElementById("panel");
const panelOpen = () => !panel.hidden;
addEventListener("keydown", e => {
  const hp = document.getElementById("help");
  if (hp && !hp.hidden) { if (["Enter", " ", "Escape"].includes(e.key)) { hp.hidden = true; try { localStorage.setItem("museum-help-seen", "1"); } catch { } e.preventDefault(); } return; }
  if (panelOpen()) {
    if (["Escape", "Enter", " "].includes(e.key)) { closePanel(); e.preventDefault(); }
    else if (e.key === "ArrowRight") { stepPanel(1); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { stepPanel(-1); e.preventDefault(); }
    return;
  }
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
  if (drag.moved > 6) { player.yaw += dx * .005; player.pitch = Math.max(-.9, Math.min(.7, player.pitch - dy * .004)); player.target = null; }
});
cv.addEventListener("pointerup", e => { if (drag && drag.moved <= 6) click(e); drag = null; });
const ray = new THREE.Raycaster();
function pick(e, list) { ray.setFromCamera(new THREE.Vector2(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1), camera); return ray.intersectObjects(list, false)[0]; }
function click(e) {
  const b = built(); const hit = pick(e, [...b.flatMap(r => r.clickables), ...b.flatMap(r => r.floors)]);
  if (!hit) return;
  const ex = hit.object.userData.exhibit;
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
  closePanel(); player.pos.set(0, 0, 5.5); player.yaw = 0; player.pitch = -0.05; player.target = null; enterRoom(0);
});

// ================= seen tracker / HUD =================
let seen = new Set();
try { seen = new Set(JSON.parse(localStorage.getItem("museum-seen2") || "[]")); } catch { }
function markSeen(key) { if (!key || seen.has(key)) return; seen.add(key); try { localStorage.setItem("museum-seen2", JSON.stringify([...seen])); } catch { } updateHud(); }
const hudRoom = document.getElementById("room"), hudSeen = document.getElementById("seen"), hint = document.getElementById("hint");
function updateHud() {
  const r = rooms[player.room];
  hudRoom.innerHTML = `<b>${r.topic.ja}</b><span>${r.topic.en}</span>`;
  hudSeen.innerHTML = `🚪 ${roomsVisited} へや　👀 ${seen.size} / ${ALL_ITEMS}`;
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
    if (r.parent != null) { const p = rooms[r.parent]; mg.strokeStyle = "#c9b48a"; mg.lineWidth = 6; mg.beginPath(); mg.moveTo(cx + (p.x - ox) * S, cy + (p.z - oz) * S); mg.lineTo(x, y); mg.stroke(); }
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
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
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
    markSeen(ex.key);
  }
  panel.hidden = false;
}
function statusScale(st, src) {
  return `<div class="status">${src === "japan" ? `<div class="src">日本の レッドリスト(かんきょうしょう)</div>` : ""}
    <div class="bar">${STATUS_ORDER.map(k => `<div class="seg${k === st ? " on" : ""}" style="--c:${STATUS[k].c}"><b>${k}</b></div>`).join("")}</div>
    <div class="label" style="color:${STATUS[st].c}">${STATUS[st].ja} <i>${STATUS[st].en}</i></div></div>`;
}
function closePanel() { panel.hidden = true; panelEx = null; }
function stepPanel(d) {
  if (!panelEx) return;
  const list = rooms[player.room].exhibits.filter(x => !x.ex.text);
  const i = list.findIndex(x => x.ex === panelEx); if (i < 0 || !list.length) return;
  const next = list[(i + d + list.length) % list.length];
  openPanel(next.ex);
  player.pos.copy(next.pos).addScaledVector(next.normal, 3.2);
  player.yaw = Math.atan2(next.normal.x, next.normal.z);
}
document.getElementById("close").addEventListener("click", closePanel);
document.getElementById("prev").addEventListener("click", () => stepPanel(-1));
document.getElementById("next").addEventListener("click", () => stepPanel(1));
panel.addEventListener("click", e => { if (e.target === panel) closePanel(); });

// ================= loop =================
let focused = null, mapT = 0;
const fwd = new THREE.Vector3(), timer = new THREE.Timer();
function frame() {
  timer.update(); const dt = Math.min(timer.getDelta(), .05);
  if (!panelEx) {
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
  const ri = roomAt(player.pos); if (ri !== player.room) enterRoom(ri);
  camera.position.set(player.pos.x, EYE, player.pos.z); camera.rotation.set(player.pitch, player.yaw, 0, "YXZ");
  camera.getWorldDirection(fwd); const f2 = new THREE.Vector3(fwd.x, 0, fwd.z).normalize();
  let best = null, bs = 0;
  for (const x of rooms[player.room].exhibits) {
    const to = new THREE.Vector3(x.pos.x - player.pos.x, 0, x.pos.z - player.pos.z); const d = to.length(); if (d > 5.5) continue;
    const dot = to.normalize().dot(f2); if (dot > .8 && dot / d > bs) { bs = dot / d; best = x.ex; }
  }
  if (best !== focused) { focused = best; if (focused) hint.innerHTML = `<b>Enter</b> か クリックで 見る — ${esc(focused.ja)}`; }
  hint.hidden = !focused || panelOpen();
  if ((mapT += dt) > .12) { mapT = 0; drawMap(); }
  renderer.render(scene, camera); requestAnimationFrame(frame);
}
let bannerT;
function showBanner(r) {
  const b = document.getElementById("banner");
  b.innerHTML = `<b>${esc(r.topic.ja)}</b><span>${esc(r.topic.en)}</span>`; b.classList.add("show");
  clearTimeout(bannerT); bannerT = setTimeout(() => b.classList.remove("show"), 2200);
}
enterRoom(0);
if (location.search.includes("debug")) window.__m = { player, rooms, openPanel, closePanel, TOPICS, enterRoom, makeWarp, build, dispose };
document.getElementById("loading").remove();
const help = document.getElementById("help");
const showHelp = () => { help.hidden = false; keys.clear(); };
const hideHelp = () => { help.hidden = true; try { localStorage.setItem("museum-help-seen", "1"); } catch { } };
document.getElementById("help-ok").addEventListener("click", hideHelp);
document.getElementById("helpbtn").addEventListener("click", showHelp);
help.addEventListener("click", e => { if (e.target === help) hideHelp(); });
let helpSeen = false; try { helpSeen = !!localStorage.getItem("museum-help-seen"); } catch { }
if (!helpSeen) showHelp();
requestAnimationFrame(frame);
