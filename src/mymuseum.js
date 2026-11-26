// "My Museum" mode: earn stars by exploring and answering guests' questions,
// spend them to open new rooms, name your museum and paint rooms your colour.
import * as THREE from "three";
import { makeQuestion } from "./questions.js";
import { ruby } from "./text.js";
import { confetti } from "./confetti.js";
import { chime } from "./sfx.js";

let T = null, HALLS = null, drawPic = null, onChange = () => { };
export let active = false;
let S = null;              // saved state
let GATE_IDS = [];         // every room that sits behind a wing-hall door, sorted (for save codes)
let STARTERS = new Set();  // the first room in each wing is open from the start
const KEY = "museum-mymuseum-v1";

export const NAME_PARTS = [
  [["ふしぎな", "Amazing"], ["きらきら", "Sparkling"], ["ひみつの", "Secret"], ["せかいいちの", "Greatest"], ["わくわく", "Exciting"], ["ちいさな", "Little"], ["おおきな", "Giant"], ["にじいろの", "Rainbow"], ["ゆかいな", "Happy"], ["まほうの", "Magic"]],
  [["どうぶつ", "Animal"], ["うちゅう", "Space"], ["せかい", "World"], ["たべもの", "Food"], ["アート", "Art"], ["サイエンス", "Science"], ["ゆめ", "Dream"], ["たから", "Treasure"], ["ながさき", "Nagasaki"], ["みらい", "Future"]],
  [["はくぶつかん", "Museum"], ["ギャラリー", "Gallery"], ["やかた", "Mansion"], ["おしろ", "Castle"], ["ラボ", "Lab"], ["パレス", "Palace"]],
];
const COLOURS = ["#d9534f", "#e8731c", "#e0b100", "#4f8a3c", "#2f8fb0", "#34407a", "#8e44ad", "#d16ba5", "#8a5a2b", "#5b6470"];

const fresh = () => ({ name: null, points: 30, bought: [], seen: [], visited: [], done: [], asked: {}, colors: {} });
function load() { try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || "null") || {}); } catch { S = fresh(); } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { } }

export function init(opts) {
  ({ TOPICS: T, HALLS, drawPic, onChange } = opts);
  GATE_IDS = [...new Set(Object.values(HALLS).flatMap(h => h.gates.map(g => g[0])).filter(id => T[id]))].sort();
  STARTERS = new Set(Object.values(HALLS).map(h => h.gates.map(g => g[0]).find(id => T[id])).filter(Boolean));
  load(); css();
}
export function start() { active = true; if (!S.name) openSetup(); refreshHud(); }

// ---------- rules ----------
export const isUnlocked = id => !active || !GATE_IDS.includes(id) || STARTERS.has(id) || S.bought.includes(id);
export const inMode = id => GATE_IDS.includes(id);               // rooms that exist in My Museum
// cheap enough to open a few rooms in one 45-minute lesson
export const price = id => Math.min(35, Math.max(20, Math.round((12 + (T[id]?.list?.length || 8)) / 5) * 5));
export const roomColour = id => active ? S.colors[id] : null;
export const museumName = () => S?.name ? [S.name.map((k, i) => NAME_PARTS[i][k][0]).join(" "), S.name.map((k, i) => NAME_PARTS[i][k][1]).join(" ")] : null;
export const askersFor = topic => !active || topic.hall || topic.lobby || (topic.list || []).filter(x => !x.text).length < 3 ? 0
  : Math.max(0, Math.min(2, 8 - (S.asked[topic.id] || 0)));
const picItems = t => (t.list || []).filter(x => !x.text && (x.img || x.pic));

function award(n, ja, en) {
  if (!active || n <= 0) return;
  S.points += n; save(); refreshHud();
  toast(`+${n} ⭐`, ja, en);
}
export function enteredRoom(topic) {
  if (!active || topic.hall || S.visited.includes(topic.id)) return;
  S.visited.push(topic.id); award(10, "はじめての へや！", "New room!");
}
export function openedExhibit(ex) {
  if (!active || !ex.key || ex.text || S.seen.includes(ex.key)) return;
  S.seen.push(ex.key); award(3, "見つけた！", "Discovered!");
  const t = T[ex.topic]; if (!t || S.done.includes(t.id)) return;
  const all = (t.list || []).filter(x => !x.text);
  if (all.length && all.every(x => S.seen.includes(x.key))) { S.done.push(t.id); setTimeout(() => { award(20, `「${t.ja}」コンプリート！`, "Room complete!"); confetti(); chime(); }, 900); }
}

// ---------- HUD ----------
let hudEl = null;
export function hud(el) { hudEl = el; refreshHud(); }
function refreshHud() {
  if (!hudEl || !active) return;
  const open = GATE_IDS.filter(isUnlocked).length;
  hudEl.innerHTML = `⭐ <b>${S.points}</b>　🔓 ${open} / ${GATE_IDS.length} へや`;
}
let toastT;
function toast(big, ja, en) {
  let t = document.getElementById("mm-toast");
  if (!t) { t = document.createElement("div"); t.id = "mm-toast"; document.body.appendChild(t); }
  t.innerHTML = `<b>${big}</b><span>${esc(ja)}</span><i>${esc(en)}</i>`;
  t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
}

// ---------- overlay ----------
let ov = null;
export const isOpen = () => !!ov && !ov.hidden;
function overlay(html, wide) {
  if (!ov) {
    ov = document.createElement("div"); ov.id = "mm"; document.body.appendChild(ov);
    ov.addEventListener("click", e => { if (e.target === ov && !ov.dataset.lock) close(); });
  }
  ov.dataset.lock = "";
  ov.innerHTML = `<div class="mm-card${wide ? " wide" : ""}">${html}<button class="mm-x" aria-label="close">✕</button></div>`;
  ov.querySelector(".mm-x").onclick = close;
  ov.hidden = false;
  return ov.querySelector(".mm-card");
}
export function close() { if (ov && !ov.dataset.lock) { ov.hidden = true; ov.innerHTML = ""; } }
addEventListener("keydown", e => { if (isOpen() && e.key === "Escape") { close(); e.stopImmediatePropagation(); } }, true);
const esc = s => ruby(String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])));

// ---------- naming ----------
export function openSetup(rename) {
  const pick = S.name ? S.name.slice() : [0, 2, 0];
  const card = overlay(`<h2>${rename ? "なまえを かえる" : "わたしの はくぶつかんを つくろう！"}</h2>
    <div class="mm-en">${rename ? "Rename your museum" : "Let's make your own museum!"}</div>
    <p class="mm-p">ことばを えらんで、はくぶつかんに なまえを つけよう。 <i>Choose words to name your museum.</i></p>
    ${NAME_PARTS.map((part, r) => `<div class="mm-chips" data-r="${r}">${part.map(([ja, en], k) => `<button data-k="${k}"><b>${ja}</b><i>${en}</i></button>`).join("")}</div>`).join("")}
    <div class="mm-preview"></div>
    <button class="mm-go">${rename ? "これに する！" : "スタート！"} <span>${rename ? "OK" : "Start"}</span></button>
    ${rename ? "" : `<details class="mm-load"><summary>セーブコードで つづきから <i>Continue with a save code</i></summary>
      <input placeholder="XXXX-XXXX-XXXX" maxlength="80"><button class="mm-loadbtn">よみこむ Load</button><div class="mm-err"></div></details>`}`, true);
  if (!S.name) ov.dataset.lock = "1";
  const paint = () => {
    card.querySelectorAll(".mm-chips").forEach(row => row.querySelectorAll("button").forEach(b => b.classList.toggle("on", +b.dataset.k === pick[+row.dataset.r])));
    card.querySelector(".mm-preview").innerHTML = `<b>${pick.map((k, i) => NAME_PARTS[i][k][0]).join(" ")}</b><i>${pick.map((k, i) => NAME_PARTS[i][k][1]).join(" ")}</i>`;
  };
  card.querySelectorAll(".mm-chips").forEach(row => row.addEventListener("click", e => { const b = e.target.closest("button"); if (b) { pick[+row.dataset.r] = +b.dataset.k; paint(); } }));
  paint();
  card.querySelector(".mm-go").onclick = () => { S.name = pick; save(); ov.dataset.lock = ""; close(); refreshHud(); onChange("name"); };
  const lb = card.querySelector(".mm-loadbtn");
  if (lb) lb.onclick = () => {
    const ok = applyCode(card.querySelector(".mm-load input").value);
    if (!ok) { card.querySelector(".mm-err").textContent = "コードが ちがうみたい。 That code doesn't work."; return; }
    ov.dataset.lock = ""; close(); refreshHud(); onChange("name"); onChange("unlock");
    toast("✓", "つづきから はじめるよ！", "Welcome back!");
  };
}

// ---------- shop ----------
export function openShop(focusId) {
  const wings = Object.entries(HALLS).map(([wid, h]) => ({ h, rooms: h.gates.map(g => g[0]).filter(id => T[id]) }));
  const card = overlay(`<h2>🔑 へやを ひらく</h2><div class="mm-en">Open new rooms</div>
    <div class="mm-bal">⭐ <b>${S.points}</b> <span>へやを 見たり、ゲストの しつもんに こたえたり して ⭐を ためよう！ <i>Explore and answer guests' questions to earn stars.</i></span></div>
    <div class="mm-shop">${wings.map(({ h, rooms }) => `<section><h3 style="--c:${h.c}">${h.icon} ${esc(h.ja)} <i>${esc(h.en)}</i></h3><div class="mm-rooms">
      ${rooms.map(id => { const t = T[id], open = isUnlocked(id), p = price(id);
        return `<div class="mm-room${open ? " open" : ""}${id === focusId ? " focus" : ""}" data-id="${id}" style="--c:${t.c}"><span class="ic">${roomIcon(h, id)}</span><b>${esc(t.ja)}</b><i>${esc(t.en)}</i>
        ${open ? `<em>✓ ひらいてる <i>Open</i></em>` : `<button ${S.points < p ? "disabled" : ""}>🔒 ${p} ⭐</button>`}</div>`; }).join("")}
    </div></section>`).join("")}</div>
    <div class="mm-foot"><button class="mm-rename">✏️ なまえを かえる <i>Rename</i></button>
      <div class="mm-code">セーブコード <i>Save code</i>: <code>${code()}</code></div></div>`, true);
  card.querySelectorAll(".mm-room button").forEach(b => b.onclick = () => {
    const id = b.closest(".mm-room").dataset.id, p = price(id);
    if (S.points < p || isUnlocked(id)) return;
    S.points -= p; S.bought.push(id); save(); refreshHud();
    toast("🔓", `「${T[id].ja}」が ひらいた！`, `${T[id].en} is open!`); confetti(160, .5, .3); chime();
    onChange("unlock", id); openShop(id);
  });
  card.querySelector(".mm-rename").onclick = () => openSetup(true);
  card.querySelector(".mm-room.focus")?.scrollIntoView({ block: "center" });
}
function roomIcon(h, id) { const g = h.gates.find(x => x[0] === id)?.[1] || "✨"; return g.startsWith("planet:") ? "🪐" : g; }

// ---------- colours ----------
export function openColour(topic) {
  if (!topic || topic.hall || !isUnlocked(topic.id) || !inMode(topic.id)) {
    overlay(`<h2>🎨 へやの 色</h2><div class="mm-en">Room colour</div><p class="mm-p">ぬりたい へやの 中で 🎨 を おしてね。 <i>Go into one of your rooms, then press 🎨.</i></p>`);
    return;
  }
  const cur = S.colors[topic.id];
  const card = overlay(`<h2>🎨 「${esc(topic.ja)}」の かべの 色</h2><div class="mm-en">Choose a wall colour for ${esc(topic.en)}</div>
    <div class="mm-swatches">${COLOURS.map(c => `<button data-c="${c}" style="--c:${c}" class="${c === cur ? "on" : ""}"></button>`).join("")}</div>
    <button class="mm-reset">もとに もどす <i>Reset</i></button>`);
  card.querySelectorAll(".mm-swatches button").forEach(b => b.onclick = () => { S.colors[topic.id] = b.dataset.c; save(); onChange("colour", topic.id); close(); });
  card.querySelector(".mm-reset").onclick = () => { delete S.colors[topic.id]; save(); onChange("colour", topic.id); close(); };
}

// ---------- guest questions ----------
export function ask(topic, done) {
  const q = makeQuestion(topic, Object.values(T).filter(t => t.list));
  if (!q) return done(false);
  const pic = (it, cls) => it.img ? `<img class="${cls}" src="${it.img}" alt="">` : `<canvas class="${cls}" width="300" height="300" data-pic="${esc(it.pic || "")}"></canvas>`;
  const picOpts = q.opts.every(o => o.item);
  const word = o => `<b>${esc(o.en)}</b>${o.ja ? `<small>${esc(o.ja)}</small>` : ""}`;
  const card = overlay(`<div class="mm-q"><div class="mm-guest">🙋</div><div>
      <h2>${q.en.split(/(<u>.*?<\/u>)/).map(x => x.startsWith("<u>") ? `<u>${esc(x.slice(3, -4))}</u>` : esc(x)).join("")}</h2>
      <div class="mm-en">${esc(q.ja)}</div></div></div>
    ${q.show ? `<div class="mm-big">${pic(q.show, "p")}</div>` : ""}
    ${picOpts ? `<div class="mm-opts pics">${q.opts.map((o, i) => `<button data-i="${i}">${pic(o.item, "p")}</button>`).join("")}</div>`
      : `<div class="mm-opts words">${q.opts.map((o, i) => `<button data-i="${i}">${word(o)}</button>`).join("")}</div>`}
    <div class="mm-result"></div>`, true);
  card.querySelectorAll("canvas[data-pic]").forEach(c => { const g = c.getContext("2d"); g.fillStyle = "#f6f1e7"; g.fillRect(0, 0, 300, 300); drawPic(g, c.dataset.pic, 150, 150, 260); });
  ov.dataset.lock = "1";
  card.querySelector(".mm-x").hidden = true;
  card.querySelectorAll(".mm-opts button").forEach(b => b.onclick = () => {
    if (card.dataset.done) return; card.dataset.done = "1";
    const ok = +b.dataset.i === q.right;
    card.querySelectorAll(".mm-opts button").forEach(x => x.classList.add(+x.dataset.i === q.right ? "right" : x === b ? "wrong" : "dim"));
    S.asked[topic.id] = (S.asked[topic.id] || 0) + 1; save();
    card.querySelector(".mm-result").innerHTML = `${ok ? `<b class="ok">⭕ せいかい！ Great job!</b>` : `<b class="ng">❌ ざんねん… Nice try!</b>`}
      <div class="ans"><b>${esc(q.ans[0])}</b>${q.ans[1] ? ` = ${esc(q.ans[1])}` : ""}</div><button class="mm-go">OK</button>`;
    card.querySelector(".mm-result .mm-go").onclick = () => { ov.dataset.lock = ""; close(); award(ok ? 15 : 3, ok ? "せいかい！" : "チャレンジ！", ok ? "Correct!" : "Good try!"); done(ok); };
  });
}

// ---------- guiding a guest ----------
export function offerGuide(item, wing, room, done) {
  const pic = item.img ? `<img class="p" src="${item.img}" alt="">` : `<canvas class="p" width="300" height="300" data-pic="${esc(item.pic || "")}"></canvas>`;
  const card = overlay(`<div class="mm-q"><div class="mm-guest">🧑‍🦱</div><div>
      <h2>I want to see <u>${esc(item.en)}</u>!</h2>
      <div class="mm-en">「${esc(item.ja)}」を 見たいな。 つれて いってくれる？</div></div></div>
    <div class="mm-big">${pic}</div>
    <div class="mm-where">📍 ${esc(wing[0])} <i>${esc(wing[1])}</i> › ${esc(room[0])} <i>${esc(room[1])}</i></div>
    <div class="mm-opts words"><button data-ok="1"><b>OK! Let's go!</b><small>いいよ！ いこう！</small></button><button data-ok=""><b>Sorry, not now.</b><small>ごめんね、いまは むり。</small></button></div>
    ${active ? `<p class="mm-p">つれていくと ⭐25！ <i>Take them there to get 20 stars!</i></p>` : ""}`, true);
  card.querySelectorAll("canvas[data-pic]").forEach(c => { const g = c.getContext("2d"); g.fillStyle = "#f6f1e7"; g.fillRect(0, 0, 300, 300); drawPic(g, c.dataset.pic, 150, 150, 260); });
  card.querySelectorAll(".mm-opts button").forEach(b => b.onclick = () => { close(); done(!!b.dataset.ok); });
}
export function guideDone(item) { if (active) award(25, "あんない できた！", "You helped a guest!"); else toast("🎉", "あんない できた！", "You helped a guest!"); }

// ---------- save codes ----------
const B32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
function code() {
  const bits = [];
  const put = (v, n) => { for (let i = n - 1; i >= 0; i--) bits.push((v >> i) & 1); };
  const bought = S.bought.map(id => GATE_IDS.indexOf(id)).filter(i => i >= 0);
  put(1, 2); put(Math.min(4095, S.points), 12);
  const nm = S.name || [0, 0, 0]; nm.forEach(k => put(k, 4));
  put(bought.length, 8); bought.forEach(i => put(i, 8));
  let sum = 0; for (let i = 0; i < bits.length; i++) sum = (sum * 3 + bits[i] + i) % 32; put(sum, 5);
  while (bits.length % 5) bits.push(0);
  let s = ""; for (let i = 0; i < bits.length; i += 5) s += B32[bits.slice(i, i + 5).reduce((a, b) => a * 2 + b, 0)];
  return s.match(/.{1,4}/g).join("-");
}
function applyCode(txt) {
  const s = String(txt).toUpperCase().replace(/[^0-9A-Z]/g, "").replace(/O/g, "0").replace(/[IL]/g, "1");
  if (s.length < 7) return false;
  const bits = [];
  for (const ch of s) { const v = B32.indexOf(ch); if (v < 0) return false; for (let i = 4; i >= 0; i--) bits.push((v >> i) & 1); }
  let p = 0; const get = n => { let v = 0; for (let i = 0; i < n; i++) v = v * 2 + (bits[p++] || 0); return v; };
  if (get(2) !== 1) return false;
  const points = get(12), name = [get(4), get(4), get(4)], n = get(8), bought = [];
  for (let i = 0; i < n; i++) bought.push(get(8));
  const end = p; let sum = 0; for (let i = 0; i < end; i++) sum = (sum * 3 + bits[i] + i) % 32;
  if (get(5) !== sum || p > bits.length) return false;
  if (name.some((k, i) => k >= NAME_PARTS[i].length) || bought.some(i => i >= GATE_IDS.length)) return false;
  S = Object.assign(fresh(), { name, points, bought: bought.map(i => GATE_IDS[i]) }); save();
  return true;
}

function css() {
  const st = document.createElement("style");
  st.textContent = `
  #mm { position: fixed; inset: 0; z-index: 12; background: rgba(30,22,14,.55); display: flex; align-items: center; justify-content: center; }
  #mm[hidden] { display: none; }
  .mm-card { position: relative; width: min(640px, 94vw); max-height: 92vh; overflow: auto; background: #fffdf8; border-radius: 20px; padding: 20px 26px; box-shadow: 0 10px 40px rgba(0,0,0,.35); text-align: center; }
  .mm-card.wide { width: min(1000px, 96vw); }
  .mm-card h2 { margin: 0; font-size: 26px; } .mm-card h2 u { text-decoration: none; color: #2f6f9f; font-family: 'Nunito', system-ui, sans-serif; font-size: 32px; }
  .mm-en { font-family: 'Nunito', system-ui, sans-serif; font-weight: 800; color: #2f6f9f; font-size: 17px; margin-bottom: 10px; }
  .mm-p { font-size: 16px; }
  .mm-x { position: absolute; top: 10px; right: 10px; border: 0; background: #eee5d6; border-radius: 50%; width: 38px; height: 38px; font-size: 18px; cursor: pointer; }
  .mm-chips { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin: 8px 0; padding: 8px; background: #f6f1e7; border-radius: 14px; }
  .mm-chips button { border: 2px solid #d8c9ae; background: #fff; border-radius: 12px; padding: 5px 10px; cursor: pointer; font: inherit; display: flex; flex-direction: column; line-height: 1.2; }
  .mm-chips button b { font-size: 16px; } .mm-chips button i { font-size: 12px; }
  .mm-chips button.on { border-color: #e8731c; background: #fff1e3; box-shadow: 0 0 0 2px #e8731c; }
  .mm-preview { margin: 12px auto; padding: 10px 18px; border-radius: 14px; background: #6b4d2c; color: #fff; display: inline-flex; flex-direction: column; }
  .mm-preview b { font-size: 26px; } .mm-preview i { color: #ffe7a8; font-size: 18px; }
  .mm-go { display: block; margin: 10px auto 0; border: 0; border-radius: 999px; padding: 11px 34px; background: #e8731c; color: #fff; font: inherit; font-weight: 800; font-size: 20px; cursor: pointer; }
  .mm-go span { font-size: 14px; opacity: .9; }
  .mm-load { margin-top: 14px; font-size: 14px; } .mm-load summary { cursor: pointer; color: #6b4d2c; font-weight: 700; }
  .mm-load input { font: 700 18px monospace; padding: 6px 10px; border-radius: 8px; border: 2px solid #d8c9ae; margin: 8px; width: 60%; }
  .mm-load button { border: 0; border-radius: 10px; padding: 8px 14px; background: #6b4d2c; color: #fff; font: inherit; font-weight: 700; cursor: pointer; }
  .mm-err { color: #c0392b; font-weight: 700; }
  .mm-bal { display: flex; gap: 12px; align-items: center; justify-content: center; background: #fff8e3; border: 2px solid #e8c25a; border-radius: 12px; padding: 8px 14px; margin-bottom: 10px; text-align: left; }
  .mm-bal > b { font-size: 28px; } .mm-bal span { font-size: 13.5px; }
  .mm-shop section { margin-bottom: 12px; text-align: left; }
  .mm-shop h3 { margin: 6px 0; padding: 4px 12px; border-radius: 10px; background: var(--c); color: #fff; font-size: 17px; } .mm-shop h3 i { color: #fff; opacity: .85; font-size: 14px; }
  .mm-rooms { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }
  .mm-room { border: 2px solid #e4d8c3; border-radius: 12px; padding: 6px 8px; display: flex; flex-direction: column; align-items: center; text-align: center; background: #fff; }
  .mm-room.open { background: color-mix(in srgb, var(--c) 12%, white); border-color: color-mix(in srgb, var(--c) 50%, white); }
  .mm-room.focus { box-shadow: 0 0 0 3px #e8731c; }
  .mm-room .ic { font-size: 26px; } .mm-room b { font-size: 14px; line-height: 1.3; } .mm-room > i { font-size: 12px; }
  .mm-room em { font-style: normal; color: #4f8a3c; font-weight: 800; font-size: 13px; margin-top: 4px; }
  .mm-room button { margin-top: 4px; border: 0; border-radius: 999px; padding: 5px 12px; background: #e8731c; color: #fff; font: inherit; font-weight: 800; cursor: pointer; }
  .mm-room button:disabled { background: #c9bfae; cursor: default; }
  .mm-foot { display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; border-top: 2px dashed #e4d8c3; padding-top: 10px; font-size: 14px; }
  .mm-foot button { border: 0; border-radius: 10px; padding: 7px 12px; background: #6b4d2c; color: #fff; font: inherit; font-weight: 700; cursor: pointer; } .mm-foot button i { color: #ffe7a8; }
  .mm-code code { font: 800 18px monospace; background: #f6f1e7; padding: 4px 8px; border-radius: 8px; user-select: all; }
  .mm-swatches { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 14px 0; }
  .mm-swatches button { width: 54px; height: 54px; border-radius: 50%; border: 4px solid #fff; background: var(--c); box-shadow: 0 0 0 2px #d8c9ae; cursor: pointer; }
  .mm-swatches button.on { box-shadow: 0 0 0 4px #2c2118; }
  .mm-reset { border: 0; border-radius: 10px; padding: 7px 14px; background: #eee5d6; font: inherit; font-weight: 700; cursor: pointer; }
  .mm-q { display: flex; gap: 14px; align-items: center; justify-content: center; text-align: left; }
  .mm-guest { font-size: 54px; }
  .mm-where { display: inline-block; background: #eaf4fb; border-radius: 999px; padding: 5px 16px; font-weight: 700; margin-bottom: 4px; }
  .mm-opts { display: flex; gap: 12px; justify-content: center; margin: 12px 0; }
  .mm-opts.pics button { border: 4px solid #e4d8c3; border-radius: 16px; padding: 0; background: #f6f1e7; cursor: pointer; overflow: hidden; width: 260px; height: 220px; }
  .mm-opts .p { width: 100%; height: 100%; object-fit: cover; display: block; }
  .mm-big { margin: 8px auto; width: 300px; height: 200px; border-radius: 16px; overflow: hidden; background: #f6f1e7; }
  .mm-big .p { width: 100%; height: 100%; object-fit: cover; display: block; }
  .mm-big canvas.p { object-fit: contain; }
  .mm-opts.words { flex-wrap: wrap; }
  .mm-opts.words button { border: 3px solid #bcdcf0; border-radius: 14px; padding: 10px 18px; background: #eaf4fb; font: 800 22px 'Nunito', system-ui, sans-serif; color: #1d4f75; cursor: pointer; min-width: 180px; max-width: 300px; display: flex; flex-direction: column; align-items: center; }
  .mm-opts.words button small { font: 600 13px 'Noto Sans JP', sans-serif; color: #555; margin-top: 2px; }
  .mm-opts button.right { border-color: #4f8a3c !important; box-shadow: 0 0 0 4px #4f8a3c; }
  .mm-opts button.wrong { border-color: #c0392b !important; opacity: .7; }
  .mm-opts button.dim { opacity: .45; }
  .mm-result .ok { color: #4f8a3c; font-size: 24px; } .mm-result .ng { color: #c0392b; font-size: 24px; }
  .mm-result .ans { font-size: 20px; margin: 4px 0; } .mm-result .ans b { font-family: 'Nunito', system-ui, sans-serif; color: #2f6f9f; }
  #mm-toast { position: fixed; top: 64px; left: 50%; transform: translate(-50%, -12px); opacity: 0; z-index: 14; pointer-events: none; transition: .35s;
    background: #fff8e3; border: 3px solid #e8c25a; border-radius: 16px; padding: 8px 20px; display: flex; gap: 10px; align-items: baseline; box-shadow: 0 4px 14px rgba(0,0,0,.2); }
  #mm-toast.show { opacity: 1; transform: translate(-50%, 0); }
  #mm-toast b { font-size: 24px; color: #b07a00; } #mm-toast span { font-weight: 800; }
  `;
  document.head.appendChild(st);
}
