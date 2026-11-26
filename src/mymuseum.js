// "My Museum" mode: earn stars by exploring and answering guests' questions,
// spend them to open new rooms, name your museum and paint rooms your colour.
import * as THREE from "three";
import { makeQuestion } from "./questions.js";
import { ruby } from "./text.js";
import { confetti } from "./confetti.js";
import { chime } from "./sfx.js";
import { FLOORS, FRAMES, floorPreview, framePreview } from "./decor.js";
import { wingRooms } from "./halls.js";
import { DISPLAYS } from "./displays.js";

let T = null, HALLS = null, drawPic = null, onChange = () => { };
export let active = false;
let S = null;              // saved state
let GATE_IDS = [];         // every room that sits behind a wing-hall door
let STARTERS = new Set();  // the first room in each wing is open once the wing is open
const WINGS_OF = {};
const KEY = "museum-mymuseum-v1";

export const NAME_PARTS = [
  [["ふしぎな", "Amazing"], ["きらきら", "Sparkling"], ["すてきな", "Wonderful"], ["グランド", "Grand"], ["ロイヤル", "Royal"], ["にじいろの", "Rainbow"], ["ひみつの", "Secret"],
   ["ほしぞらの", "Starry"], ["おうごんの", "Golden"], ["ハッピー", "Happy"], ["わくわく", "Exciting"], ["まほうの", "Magical"], ["せかいいちの", "World's Best"]],
  [["ながさき", "Nagasaki"], ["とまち", "Tomachi"], ["せかい", "World"], ["どうぶつ", "Animal"], ["うちゅう", "Space"], ["きょうりゅう", "Dinosaur"], ["うみ", "Ocean"],
   ["さくら", "Sakura"], ["たからもの", "Treasure"], ["ゆめ", "Dream"], ["みらい", "Future"], ["れきし", "History"], ["アート", "Art"], ["サイエンス", "Science"]],
  [["はくぶつかん", "Museum"], ["びじゅつかん", "Art Museum"], ["かがくかん", "Science Museum"], ["ギャラリー", "Gallery"], ["はっけんかん", "Discovery Center"], ["ワンダーランド", "Wonderland"]],
];
export const COLOURS = [["#d9534f", "あか", "red"], ["#e8731c", "オレンジ", "orange"], ["#e0b100", "きいろ", "yellow"], ["#4f8a3c", "みどり", "green"], ["#2f8fb0", "みずいろ", "light blue"],
  ["#34407a", "あお", "blue"], ["#8e44ad", "むらさき", "purple"], ["#d16ba5", "ピンク", "pink"], ["#8a5a2b", "ちゃいろ", "brown"], ["#5b6470", "グレー", "gray"]];
export const PAINT_PRICE = 15, FLOOR_PRICE = 25, FRAME_PRICE = 25, WING_PRICE = 30;
export { FLOORS, FRAMES };
// mascots (Kenney Cube Pets), in costume size
export const MASCOTS = [
  ["cat", "ねこの ミケ", "Mike the Cat", 60], ["dog", "いぬの ポチ", "Pochi the Dog", 60], ["bunny", "うさぎの モモ", "Momo the Bunny", 60],
  ["chick", "ひよこの ピヨ", "Piyo the Chick", 60], ["pig", "ぶたの ブーちゃん", "Boo the Pig", 70], ["cow", "うしの モーモー", "Moo the Cow", 70],
  ["monkey", "さるの キキ", "Kiki the Monkey", 80], ["elephant", "ぞうの パオ", "Pao the Elephant", 80], ["giraffe", "きりんの リン", "Rin the Giraffe", 90],
  ["lion", "ライオンの レオ", "Leo the Lion", 100], ["tiger", "とらの トラッキー", "Tora the Tiger", 100], ["parrot", "オウムの ポリー", "Polly the Parrot", 90],
  ["fish", "さかなの ギョギョ", "Gyo the Fish", 90], ["hog", "いのししの ボタン", "Botan the Boar", 80], ["caterpillar", "いもむしの ニョロ", "Nyoro the Caterpillar", 70],
];
// ?teacher: unlimited stars and reset buttons
export const TEACHER = new URLSearchParams(location.search).has("teacher");
const pay = n => { if (TEACHER) return true; if (S.points < n) return false; S.points -= n; return true; };
const canPay = n => TEACHER || S.points >= n;

const fresh = () => ({ name: null, points: 30, wings: [], bought: [], seen: [], visited: [], done: [], asked: {}, colors: {}, paints: {}, mascots: [],
  floorInv: {}, frameInv: {}, floors: {}, frames: {}, mascotAt: {}, displays: [] });
function load() {
  let raw = null; try { raw = JSON.parse(localStorage.getItem(KEY) || "null"); } catch { }
  S = Object.assign(fresh(), raw || {});
  // museums made before wings could be locked keep every wing open
  if (raw && raw.name && !Array.isArray(raw.wings)) S.wings = Object.keys(HALLS);
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { } }

export function init(opts) {
  ({ TOPICS: T, HALLS, drawPic, onChange } = opts);
  GATE_IDS = [...new Set(Object.keys(HALLS).flatMap(wingRooms).filter(id => T[id]))].sort();
  for (const w of Object.keys(HALLS)) for (const id of wingRooms(w)) (WINGS_OF[id] ||= []).push(w);
  STARTERS = new Set(Object.values(HALLS).map(h => h.gates.map(g => g[0]).find(id => T[id])).filter(Boolean));
  load(); css();
}
export function activate() { active = true; }
export function start() { active = true; if (!S.name) openSetup(); else if (!S.wings.length) openWingPick(); refreshHud(); }

// ---------- rules ----------
export const isUnlocked = id => {
  if (!active) return true;
  if (HALLS[id]) return S.wings.includes(id);                                   // a wing
  if (!GATE_IDS.includes(id)) return true;
  return (WINGS_OF[id] || []).some(w => S.wings.includes(w)) && (STARTERS.has(id) || S.bought.includes(id));
};
export const inMode = id => GATE_IDS.includes(id);               // rooms that exist in My Museum
// cheap enough to open a few rooms in one 45-minute lesson
export const price = id => HALLS[id] ? WING_PRICE : Math.min(35, Math.max(20, Math.round((12 + (T[id]?.list?.length || 8)) / 5) * 5));
export const roomColour = id => active ? S.colors[id] : null;
export const hasDisplay = id => active && (S.displays || []).includes(id);
// clicking a display plinth
export function displayHint(d) {
  if (d.owned) toast("✨", `「${d.ja}」`, d.en);
  else toast("🛍️", `ロビーの ギフトショップで 「${d.ja}」を 買えるよ`, `Buy the ${d.en} at the gift shop in the lobby`);
}
export const roomFloor = id => active ? S.floors[id] : null;
export const roomFrame = id => active ? S.frames[id] : null;
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
  const nm = museumName(); document.title = nm ? `${nm[0]} – ${nm[1]}` : "わたしの はくぶつかん – My Museum";
  hudEl.innerHTML = `⭐ <b>${TEACHER ? "∞" : S.points}</b>　🏛️ ${S.wings.length}/${Object.keys(HALLS).length}　🔓 ${open} へや`;
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
  ov.dataset.lock = ""; ov.dataset.tab = "";
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
  const pick = S.name && S.name.every((k, i) => k < NAME_PARTS[i].length) ? S.name.slice() : [0, 0, 0];
  const card = overlay(`<div class="mm-step">${rename ? "" : `<span class="on">① なまえ <i>Name</i></span><span>② ウィング <i>Wing</i></span>`}</div>
    <h2>${rename ? "なまえを かえる" : "あなたの はくぶつかんに なまえを つけよう！"}</h2>
    <div class="mm-en">${rename ? "Rename your museum" : "Give your museum a name!"}</div>
    ${NAME_PARTS.map((part, r) => `<div class="mm-chips" data-r="${r}">${part.map(([ja, en], k) => `<button data-k="${k}"><b>${ja}</b><i>${en}</i></button>`).join("")}</div>`).join("")}
    <div class="mm-namebar"><div class="mm-preview"></div>
      <button class="mm-go">${rename ? "これに する！ <span>OK</span>" : "つぎへ ➜ <span>Next</span>"}</button></div>
`, true);
  card.classList.add("mm-setup");
  if (!S.name) ov.dataset.lock = "1";
  const paint = () => {
    card.querySelectorAll(".mm-chips").forEach(row => row.querySelectorAll("button").forEach(b => b.classList.toggle("on", +b.dataset.k === pick[+row.dataset.r])));
    card.querySelector(".mm-preview").innerHTML = `<b>${pick.map((k, i) => NAME_PARTS[i][k][0]).join(" ")}</b><i>${pick.map((k, i) => NAME_PARTS[i][k][1]).join(" ")}</i>`;
  };
  card.querySelectorAll(".mm-chips").forEach(row => row.addEventListener("click", e => { const b = e.target.closest("button"); if (b) { pick[+row.dataset.r] = +b.dataset.k; paint(); } }));
  paint();
  card.querySelector(".mm-go").onclick = () => {
    S.name = pick; save(); refreshHud(); onChange("name");
    if (!S.wings.length) openWingPick(); else { ov.dataset.lock = ""; close(); }
  };
}
// step two: the first wing (free)
function openWingPick() {
  let wing = null;
  const card = overlay(`<div class="mm-step"><span class="done">① なまえ ✓ <i>Name</i></span><span class="on">② ウィング <i>Wing</i></span></div>
    <h2>さいしょに ひらく ウィングを 1つ えらぼう！</h2>
    <div class="mm-en">Choose your first wing. You can open the others later with ⭐.</div>
    <div class="mm-wings">${Object.entries(HALLS).map(([w, h]) => `<button data-w="${w}" style="--c:${h.c}"><span>${h.icon}</span><b>${esc(h.ja)}</b><i>${esc(h.en)}</i></button>`).join("")}</div>
    <div class="mm-namebar"><button class="mm-back">⬅ もどる <span>Back</span></button><button class="mm-go" disabled>ウィングを えらんでね <span>Pick a wing</span></button></div>`, true);
  card.classList.add("mm-setup"); ov.dataset.lock = "1";
  card.querySelector(".mm-x").remove();
  card.querySelectorAll(".mm-wings button").forEach(b => b.onclick = () => {
    wing = b.dataset.w; card.querySelectorAll(".mm-wings button").forEach(x => x.classList.toggle("on", x === b));
    const g = card.querySelector(".mm-go"); g.disabled = false; g.innerHTML = `スタート！ <span>Start</span>`; });
  card.querySelector(".mm-back").onclick = () => openSetup(false);
  card.querySelector(".mm-go").onclick = () => {
    if (!wing) return;
    S.wings = [wing]; save(); ov.dataset.lock = ""; close(); refreshHud(); onChange("unlock", wing);
    toast(HALLS[wing].icon, `「${HALLS[wing].ja}」ウィングが ひらいた！`, `The ${HALLS[wing].en} wing is open!`); confetti(180, .5, .3); chime();
  };
}

// ---------- shop ----------
export function openShop(focusId) {
  const wings = Object.entries(HALLS).map(([wid, h]) => ({ wid, h, rooms: wingRooms(wid).filter(id => T[id]) }));
  const card = overlay(`<h2>🔑 へやを ひらく</h2><div class="mm-en">Open new wings and rooms</div>
    <div class="mm-bal">⭐ <b>${TEACHER ? "∞" : S.points}</b> <span>へやを 見たり、ゲストの しつもんに こたえたり して ⭐を ためよう！ <i>Explore and answer guests' questions to earn stars.</i></span></div>
    <div class="mm-shop">${wings.map(({ wid, h, rooms }) => { const wopen = isUnlocked(wid);
      return `<section class="${wopen ? "" : "locked"}${wid === focusId ? " focus" : ""}" data-w="${wid}"><h3 style="--c:${h.c}">${h.icon} ${esc(h.ja)} <i>${esc(h.en)}</i>
        ${wopen ? "" : `<button class="mm-wingbuy" ${canPay(WING_PRICE) ? "" : "disabled"}>🔒 ウィングを ひらく <i>Open wing</i> ${WING_PRICE} ⭐</button>`}</h3>
      <div class="mm-rooms">${rooms.map(id => { const t = T[id], open = isUnlocked(id), p = price(id);
        return `<div class="mm-room${open ? " open" : ""}${id === focusId ? " focus" : ""}" data-id="${id}" style="--c:${t.c}"><span class="ic">${roomIcon(h, id)}</span><b>${esc(t.ja)}</b><i>${esc(t.en)}</i>
        ${open ? `<em>✓ ひらいてる <i>Open</i></em>` : !wopen ? `<em class="wait">🔒</em>` : `<button ${canPay(p) ? "" : "disabled"}>🔒 ${p} ⭐</button>`}</div>`; }).join("")}
    </div></section>`; }).join("")}</div>
    <div class="mm-foot"><button class="mm-rename">✏️ なまえを かえる <i>Rename</i></button></div>`, true);
  card.querySelectorAll(".mm-wingbuy").forEach(b => b.onclick = () => {
    const w = b.closest("section").dataset.w;
    if (isUnlocked(w) || !pay(WING_PRICE)) return;
    S.wings.push(w); save(); refreshHud();
    toast("🏛️", `「${HALLS[w].ja}」ウィングが ひらいた！`, `The ${HALLS[w].en} wing is open!`); confetti(180, .5, .3); chime();
    onChange("unlock", w); openShop(w);
  });
  card.querySelectorAll(".mm-room button").forEach(b => b.onclick = () => {
    const id = b.closest(".mm-room").dataset.id, p = price(id);
    if (isUnlocked(id) || !pay(p)) return;
    S.bought.push(id); save(); refreshHud();
    toast("🔓", `「${T[id].ja}」が ひらいた！`, `${T[id].en} is open!`); confetti(160, .5, .3); chime();
    onChange("unlock", id); openShop(id);
  });
  card.querySelector(".mm-rename").onclick = () => openSetup(true);
  card.querySelector(".focus")?.scrollIntoView({ block: "center" });
}
function roomIcon(h, id) { const g = h.gates.find(x => x[0] === id)?.[1] || T[id]?.items?.find(it => it[2] && !/^[a-z]+:/.test(it[2]))?.[2] || "✨"; return g.startsWith("planet:") ? "🪐" : g; }

// a big, happy "you got it!" on the item that was just bought
function celebrate(card, key) {
  const btn = card.querySelector(`[data-buy="${key}"]`), item = (btn || card.querySelector(`[data-id="${key.split(":")[1]}"]`) || card.querySelector(".gs-item.own:last-of-type"))?.closest(".gs-item");
  const bal = card.querySelector(".mm-bal b");
  if (bal) { bal.classList.remove("mm-pulse"); void bal.offsetWidth; bal.classList.add("mm-pulse"); }
  if (!item) return;
  item.classList.add("gs-got");
  const pop = document.createElement("div"); pop.className = "gs-pop"; pop.innerHTML = `<b>+1</b><span>ゲット！</span>`; item.appendChild(pop);
  const r = item.getBoundingClientRect();
  confetti(70, (r.left + r.width / 2) / innerWidth, (r.top + r.height / 2) / innerHeight);
  chime();
  setTimeout(() => { item.classList.remove("gs-got"); pop.remove(); }, 1400);
}

// ---------- decorating a room: walls, floor, frames ----------
const DECOR_TABS = [["walls", "🎨 かべ", "Walls"], ["floor", "🪵 ゆか", "Floor"], ["frames", "🖼️ がくぶち", "Frames"], ["mascot", "🐾 マスコット", "Mascots"]];
const tabsHtml = (list, tab) => `<div class="gs-tabs">${list.map(([t, ja, en]) => `<button data-t="${t}" class="${t === tab ? "on" : ""}">${ja} <i>${en}</i></button>`).join("")}</div>`;
function decorMascots(topic) {
  const here = mascotsFor(topic.id).length, full = here >= MASCOTS_PER_ROOM, owned = ownedMascots();
  const card = overlay(`<h2>🎨 「${esc(topic.ja)}」を かざろう</h2><div class="mm-en">Decorate ${esc(topic.en)}</div>
    ${tabsHtml(DECOR_TABS, "mascot")}
    <p class="mm-p">マスコットを この へやに よぼう！ 1つの へやに ${MASCOTS_PER_ROOM}ひきまで。 <i>Bring your mascots to this room! Up to ${MASCOTS_PER_ROOM} in one room.</i></p>
    ${owned.length ? `<div class="gs-grid mascots">${owned.map(([id, ja, en]) => { const at = S.mascotAt[id], isHere = at === topic.id;
      return `<div class="gs-item${isHere ? " own" : ""}"><img src="models/pets/preview/${id}.png" alt=""><b>${ja}</b><i>${en}</i>
        <small>${isHere ? "✓ この へやに いる <i>Here</i>" : at && T[at] ? `いま <i>now</i>: ${esc(T[at].ja)}` : "まだ おいてない <i>Not placed</i>"}</small>
        ${isHere ? `<button class="gs-off" data-off="${id}">かえす <i>Remove</i></button>` : `<button data-put="${id}" ${full ? "disabled" : ""}>ここに よぶ <i>Bring here</i></button>`}</div>`; }).join("")}</div>`
      : `<div class="gs-note">🐾 まだ マスコットが いないよ。ロビーの 🛍️ ギフトショップで 買ってね！ <i>You have no mascots yet. Buy one at the gift shop in the lobby!</i></div>`}`, true);
  card.querySelectorAll(".gs-tabs button").forEach(b => b.onclick = () => openDecor(topic, b.dataset.t));
  card.querySelectorAll("[data-put]").forEach(b => b.onclick = () => {
    const id = b.dataset.put, old = S.mascotAt[id]; S.mascotAt[id] = topic.id; save(); onChange("decor", [topic.id, old]); close(); confetti(90); chime();
  });
  card.querySelectorAll("[data-off]").forEach(b => b.onclick = () => { delete S.mascotAt[b.dataset.off]; save(); onChange("decor", [topic.id]); decorMascots(topic); });
}
const inv = { walls: () => S.paints, floor: () => S.floorInv, frames: () => S.frameInv };
const used = { walls: () => S.colors, floor: () => S.floors, frames: () => S.frames };
function decorItems(tab) {
  if (tab === "walls") return COLOURS.map(([c, ja, en]) => ({ id: c, ja, en, swatch: c }));
  if (tab === "floor") return Object.entries(FLOORS).filter(([id]) => id !== "oak").map(([id, f]) => ({ id, ja: f.ja, en: f.en, img: () => floorPreview(id) }));
  return Object.entries(FRAMES).filter(([id]) => id !== "gold").map(([id, f]) => ({ id, ja: f.ja, en: f.en, img: () => framePreview(id) }));
}
function itemCard(it, extra) {
  return `<div class="gs-item${extra.cls || ""}" data-id="${it.id}">
    ${it.swatch ? `<div class="gs-can" style="--c:${it.swatch}"><span></span></div>` : `<canvas class="gs-prev" data-prev="${it.id}" width="160" height="120"></canvas>`}
    <b>${esc(it.ja)}</b><i>${esc(it.en)}</i>${extra.html}</div>`;
}
function fillPreviews(card, items) {
  card.querySelectorAll("canvas[data-prev]").forEach(c => { const it = items.find(x => x.id === c.dataset.prev); if (!it) return;
    const src = it.img(), g = c.getContext("2d"); g.fillStyle = "#f6f1e7"; g.fillRect(0, 0, c.width, c.height);
    const k = Math.min(c.width / src.width, c.height / src.height), w = src.width * k, h = src.height * k; g.drawImage(src, (c.width - w) / 2, (c.height - h) / 2, w, h); });
}
export function openDecor(topic, tab = "walls") {
  const ok = topic && (topic.lobby || (topic.hall ? isUnlocked(topic.id) : isUnlocked(topic.id) && inMode(topic.id)));
  if (!ok) {
    overlay(`<h2>🎨 へやを かざる</h2><div class="mm-en">Decorate a room</div><p class="mm-p">かざりたい へやの 中で 🎨 を おしてね。 <i>Go into one of your rooms, then press 🎨.</i></p>`);
    return;
  }
  if (tab === "mascot") return decorMascots(topic);
  const items = decorItems(tab), have = id => TEACHER ? "∞" : (inv[tab]()[id] || 0), cur = used[tab]()[topic.id];
  const card = overlay(`<h2>🎨 「${esc(topic.ja)}」を かざろう</h2><div class="mm-en">Decorate ${esc(topic.en)}</div>
    ${tabsHtml(DECOR_TABS, tab)}
    <p class="mm-p">1つ つかうと、この へやだけ かわるよ。ロビーの 🛍️ ギフトショップで 買えるよ。 <i>Using one changes only this room. Buy more at the gift shop in the lobby.</i></p>
    <div class="gs-grid">${items.map(it => itemCard(it, { cls: it.id === cur ? " own" : "", html: it.id === cur ? `<em>✓ いま <i>Now</i></em>`
      : `<small>もっている <i>have</i>: ${have(it.id)}</small><button data-use="${it.id}" ${have(it.id) === 0 ? "disabled" : ""}>つかう <i>Use</i></button>` })).join("")}</div>
    <button class="mm-reset">もとに もどす <i>Back to normal</i></button>`, true);
  fillPreviews(card, items);
  card.querySelectorAll(".gs-tabs button").forEach(b => b.onclick = () => openDecor(topic, b.dataset.t));
  card.querySelectorAll("[data-use]").forEach(b => b.onclick = () => {
    const id = b.dataset.use, bag = inv[tab]();
    if (!TEACHER) { if (!(bag[id] > 0)) return; bag[id]--; }
    used[tab]()[topic.id] = id; save(); onChange("decor", [topic.id]); close(); confetti(90); chime();
  });
  card.querySelector(".mm-reset").onclick = () => { delete used[tab]()[topic.id]; save(); onChange("decor", [topic.id]); close(); };
}
export const openColour = topic => openDecor(topic, "walls");

// ---------- gift shop ----------
const SHOP_TABS = [["paint", "🎨 ペンキ", "Paint"], ["floor", "🪵 ゆか", "Floors"], ["frames", "🖼️ がくぶち", "Frames"], ["display", "🦖 てんじひん", "Displays"], ["mascot", "🐾 マスコット", "Mascots"]];
export function openGiftShop(tab = "paint", bought = null) {
  const keep = ov && !ov.hidden && ov.querySelector(".gs-grid") && ov.dataset.tab === tab ? ov.querySelector(".mm-card").scrollTop : 0;
  const tabs = tabsHtml(SHOP_TABS, tab) + `<div class="gs-note"><span class="gs-steps"><b>① 買う</b><i>Buy</i></span>➜<span class="gs-steps"><b>② かざりたい へやに 行く</b><i>Go to the room</i></span>➜<span class="gs-steps"><b>③ 🎨 かざる を おす</b><i>Press 🎨 Decorate</i></span>
    <div>${tab === "mascot" ? "マスコットは 1つの へやに すむよ。" : "1つで 1つの へやだけ かざれるよ。"} <i>${tab === "mascot" ? "Each mascot lives in one room you choose." : "One item decorates one room only."}</i></div></div>`;
  const dispNote = `<div class="gs-note">🦖 てんじひんは その へやの まんなかの だいに かざられるよ。 買うと すぐに かざられる！ <i>Each display goes on the stand in the middle of its own room, as soon as you buy it.</i></div>`;
  let body = "", items = [];
  const buy = (key, p, n) => `<small>もっている <i>have</i>: ${TEACHER ? "∞" : n}</small><button data-buy="${key}" ${canPay(p) ? "" : "disabled"}>${p} ⭐</button>`;
  if (tab === "paint") body = `<div class="gs-grid">${COLOURS.map(([c, ja, en]) => itemCard({ id: c, ja, en, swatch: c }, { html: buy("paint:" + c, PAINT_PRICE, S.paints[c] || 0) })).join("")}</div>`;
  else if (tab === "floor" || tab === "frames") {
    items = decorItems(tab); const p = tab === "floor" ? FLOOR_PRICE : FRAME_PRICE, bag = tab === "floor" ? S.floorInv : S.frameInv;
    body = `<div class="gs-grid">${items.map(it => itemCard(it, { html: buy(tab + ":" + it.id, p, bag[it.id] || 0) })).join("")}</div>`;
  } else if (tab === "display") {
    const open = DISPLAYS.filter(([id]) => inMode(id) && isUnlocked(id)), shut = DISPLAYS.length - open.length;
    body = (open.length ? `<div class="gs-grid mascots">${open.map(([id, ja, en, p]) => { const own = S.displays.includes(id), t = T[id];
      return `<div class="gs-item${own ? " own" : ""}" data-id="${id}"><img src="models/decor/preview/${id}.png" alt=""><b>${ja}</b><i>${en}</i>
      <small>📍 ${esc(t?.ja || "")} <i>${esc(t?.en || "")}</i></small>
      ${own ? `<em>✓ かざったよ <i>On display!</i></em>` : `<button data-buy="display:${id}" ${canPay(p) ? "" : "disabled"}>${p} ⭐</button>`}</div>`; }).join("")}</div>`
      : `<div class="gs-note">🔒 まだ ないよ。 <i>Nothing yet.</i></div>`)
      + (shut ? `<p class="mm-p">🔓 へやを ひらくと、あと ${shut}こ ふえるよ！ <i>Open more rooms to find ${shut} more displays!</i></p>` : "");
  } else body = `<div class="gs-grid mascots">${MASCOTS.map(([id, ja, en, p]) => { const own = S.mascots.includes(id);
      return `<div class="gs-item${own ? " own" : ""}" data-id="${id}"><img src="models/pets/preview/${id}.png" alt=""><b>${ja}</b><i>${en}</i>
      ${own ? `<em>✓ なかま <i>Yours!</i></em>` : `<button data-buy="mascot:${id}" ${canPay(p) ? "" : "disabled"}>${p} ⭐</button>`}</div>`; }).join("")}</div>`;
  const card = overlay(`<h2>🛍️ ギフトショップ</h2><div class="mm-en">Gift Shop</div>
    <div class="mm-bal">⭐ <b>${TEACHER ? "∞" : S.points}</b> <span>⭐で へやの かざりや マスコットを 買おう！ <i>Spend your stars here!</i></span></div>${tab === "display" ? tabsHtml(SHOP_TABS, tab) + dispNote : tabs}${body}`, true);
  fillPreviews(card, items);
  ov.dataset.tab = tab; card.scrollTop = keep;
  if (bought) celebrate(card, bought);
  card.querySelectorAll(".gs-tabs button").forEach(b => b.onclick = () => openGiftShop(b.dataset.t));
  card.querySelectorAll("[data-buy]").forEach(b => b.onclick = () => {
    const [kind, id] = b.dataset.buy.split(":");
    if (kind === "paint") { if (!pay(PAINT_PRICE)) return; S.paints[id] = (S.paints[id] || 0) + 1; toast("🥫", "ペンキを 買った！ へやに 行って 🎨で ぬろう", "Got paint! Go to a room and press 🎨"); }
    else if (kind === "floor") { if (!pay(FLOOR_PRICE)) return; S.floorInv[id] = (S.floorInv[id] || 0) + 1; toast("🪵", "ゆかを 買った！ へやに 行って 🎨で つかおう", "Got a floor! Go to a room and press 🎨"); }
    else if (kind === "frames") { if (!pay(FRAME_PRICE)) return; S.frameInv[id] = (S.frameInv[id] || 0) + 1; toast("🖼️", "がくぶちを 買った！ へやに 行って 🎨で つかおう", "Got frames! Go to a room and press 🎨"); }
    else if (kind === "display") { const d = DISPLAYS.find(x => x[0] === id); if (!d || S.displays.includes(id) || !isUnlocked(id) || !pay(d[3])) return; S.displays.push(id);
      toast("🦖", `「${d[1]}」を かざったよ！ 「${T[id].ja}」に 見に いこう`, `The ${d[2]} is on display in ${T[id].en}!`); onChange("decor", [id]); }
    else { const m = MASCOTS.find(x => x[0] === id); if (S.mascots.includes(id) || !pay(m[3])) return; S.mascots.push(id);
      toast("🐾", `${m[1]}が なかまに なった！ へやに 行って 🎨で よぼう`, `${m[2]} joined! Go to a room and press 🎨 to bring it there`); }
    save(); refreshHud(); openGiftShop(tab, b.dataset.buy);
  });
}
export const ownedMascots = () => active ? MASCOTS.filter(m => S.mascots.includes(m[0])) : [];
export const MASCOTS_PER_ROOM = 3;
export const mascotsFor = id => active ? MASCOTS.filter(m => S.mascots.includes(m[0]) && S.mascotAt[m[0]] === id) : [];

// ---------- teacher tools ----------
export function openTeacher() {
  const card = overlay(`<h2>🧑‍🏫 せんせい メニュー</h2><div class="mm-en">Teacher tools</div>
    <p class="mm-p">In teacher mode you have unlimited stars. These buttons only change <b>this</b> browser.</p>
    <div class="t-btns">
      <button data-a="mm">🏛️ Delete My Museum<small>name, stars, rooms, paint, mascots</small></button>
      <button data-a="words">📓 Delete words collected<small>notebook words, rooms seen</small></button>
      <button data-a="all">🧹 Delete everything<small>both of the above + settings</small></button>
    </div><div class="t-msg"></div>`);
  card.querySelectorAll(".t-btns button").forEach(b => b.onclick = () => {
    const a = b.dataset.a;
    if (!b.dataset.sure) { b.dataset.sure = "1"; b.classList.add("sure"); b.firstChild.textContent = "⚠️ Click again to delete"; return; }
    try {
      if (a === "mm" || a === "all") localStorage.removeItem(KEY);
      if (a === "words" || a === "all") localStorage.removeItem("museum-seen2");
      if (a === "all") Object.keys(localStorage).filter(k => k.startsWith("museum-")).forEach(k => localStorage.removeItem(k));
    } catch { }
    const u = new URL(location.href); u.searchParams.delete("mode"); location.href = u.toString();
  });
}

// ---------- guest questions ----------
export function ask(topic, done, again) {
  const q = again || makeQuestion(topic, Object.values(T).filter(t => t.list));
  if (!q) return done(true);
  const pic = (it, cls) => it.img ? `<img class="${cls}" src="${it.img}" alt="">` : `<canvas class="${cls}" width="300" height="300" data-pic="${esc(it.pic || "")}"></canvas>`;
  const picOpts = q.opts.every(o => o.item);
  const word = o => `<b>${esc(o.en)}</b>${o.ja ? `<small>${esc(o.ja)}</small>` : ""}`;
  const card = overlay(`<div class="mm-q"><div class="mm-guest">🙋</div><div>
      <h2>${q.en.split(/(<u>.*?<\/u>)/).map(x => x.startsWith("<u>") ? `<u>${esc(x.slice(3, -4))}</u>` : esc(x)).join("")}</h2>
      <div class="mm-en">${esc(q.ja)}</div></div></div>
    ${q.show ? `<div class="mm-big">${pic(q.show, "p")}</div>` : ""}
    ${picOpts ? `<div class="mm-opts pics">${q.opts.map((o, i) => `<button data-i="${i}">${pic(o.item, "p")}</button>`).join("")}</div>`
      : `<div class="mm-opts words">${q.opts.map((o, i) => `<button data-i="${i}">${word(o)}</button>`).join("")}</div>`}
    <div class="mm-result"></div>
    <button class="mm-later">🔎 あとで こたえる — さがしてくる！ <i>Let me look around first.</i></button>`, true);
  card.querySelector(".mm-later").onclick = () => { ov.dataset.lock = ""; close(); toast("🔎", "へやの 中を さがしてみよう！", "Look around the room!"); done(null, q); };
  card.querySelectorAll("canvas[data-pic]").forEach(c => { const g = c.getContext("2d"); g.fillStyle = "#f6f1e7"; g.fillRect(0, 0, 300, 300); drawPic(g, c.dataset.pic, 150, 150, 260); });
  ov.dataset.lock = "1";
  card.querySelector(".mm-x").hidden = true;
  card.querySelectorAll(".mm-opts button").forEach(b => b.onclick = () => {
    if (card.dataset.done) return; card.dataset.done = "1"; card.querySelector(".mm-later").remove();
    const ok = +b.dataset.i === q.right;
    card.querySelectorAll(".mm-opts button").forEach(x => x.classList.add(+x.dataset.i === q.right ? "right" : x === b ? "wrong" : "dim"));
    S.asked[topic.id] = (S.asked[topic.id] || 0) + 1; save();
    card.querySelector(".mm-result").innerHTML = `${ok ? `<b class="ok">⭕ せいかい！ Great job!</b>` : `<b class="ng">❌ ざんねん… Nice try!</b>`}
      <div class="ans"><b>${esc(q.ans[0])}</b>${q.ans[1] ? ` = ${esc(q.ans[1])}` : ""}</div><button class="mm-go">OK</button>`;
    card.querySelector(".mm-result .mm-go").onclick = () => { ov.dataset.lock = ""; close(); if (ok) award(15, "せいかい！", "Correct!"); done(ok); };
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
  .mm-swatches { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 14px 0; }
  .mm-swatches button { width: 54px; height: 54px; border-radius: 50%; border: 4px solid #fff; background: var(--c); box-shadow: 0 0 0 2px #d8c9ae; cursor: pointer; }
  .mm-swatches button.on { box-shadow: 0 0 0 4px #2c2118; }
  .mm-swatches button { width: 74px; height: 74px; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 4px; }
  .mm-swatches button:disabled { opacity: .3; cursor: default; }
  .mm-swatches .can { background: rgba(255,255,255,.92); border-radius: 8px; padding: 0 5px; font: 800 13px 'Nunito', sans-serif; }
  .mm-swatches small { position: absolute; bottom: -20px; font-size: 12px; font-weight: 700; white-space: nowrap; }
  .mm-swatches { margin-bottom: 30px; row-gap: 30px; }
  .gs-tabs { display: flex; gap: 8px; justify-content: center; margin: 4px 0 10px; }
  .gs-tabs button { border: 2px solid #d8c9ae; background: #fff; border-radius: 999px; padding: 6px 18px; font: inherit; font-weight: 800; cursor: pointer; }
  .gs-tabs button.on { background: #e8731c; border-color: #e8731c; color: #fff; } .gs-tabs button.on i { color: #fff; }
  .gs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
  .gs-item { border: 2px solid #e4d8c3; border-radius: 14px; padding: 8px; display: flex; flex-direction: column; align-items: center; background: #fff; }
  .gs-item.own { background: #eef7ea; border-color: #9cc98a; }
  .gs-item img { width: 110px; height: 110px; object-fit: contain; }
  .gs-item b { font-size: 15px; } .gs-item > i { font-size: 13px; } .gs-item small { font-size: 12px; color: #6b5a44; margin-top: 2px; }
  .gs-item button { margin-top: 6px; border: 0; border-radius: 999px; padding: 5px 16px; background: #e8731c; color: #fff; font: inherit; font-weight: 800; cursor: pointer; }
  .gs-item button:disabled { background: #c9bfae; cursor: default; }
  .gs-item em { font-style: normal; color: #4f8a3c; font-weight: 800; margin-top: 6px; }
  .gs-can { width: 70px; height: 80px; margin: 6px 0; border-radius: 8px 8px 12px 12px; background: linear-gradient(90deg, #9aa0a8, #e8ebef 35%, #b8bdc4 70%, #8a9098); position: relative; box-shadow: 0 3px 0 rgba(0,0,0,.2); }
  .gs-can::before { content: ""; position: absolute; left: -2px; right: -2px; top: -6px; height: 10px; border-radius: 50%; background: #c7ccd2; border: 2px solid #8a9098; }
  .gs-can span { position: absolute; left: 0; right: 0; top: 22px; height: 34px; background: var(--c); }
  .gs-can span::after { content: ""; position: absolute; left: 22px; top: -12px; width: 26px; height: 16px; border-radius: 0 0 50% 50%; background: var(--c); }
  .mm-card.mm-setup { width: min(1180px, 97vw); padding: 14px 22px 16px; }
  .mm-setup h2 { font-size: 24px; margin: 2px 0 0; } .mm-setup .mm-en { margin-bottom: 4px; }
  .mm-setup .mm-chips { margin: 5px 0; padding: 6px; gap: 5px; }
  .mm-setup .mm-chips button { padding: 3px 9px; } .mm-setup .mm-chips button b { font-size: 15px; } .mm-setup .mm-chips button i { font-size: 11px; }
  .mm-step { display: flex; justify-content: center; gap: 10px; margin-bottom: 4px; min-height: 4px; }
  .mm-step span { padding: 3px 14px; border-radius: 999px; background: #eee6d6; color: #8a7a60; font-weight: 800; font-size: 14px; }
  .mm-step span.on { background: #e8731c; color: #fff; } .mm-step span.on i { color: #fff3e0; } .mm-step span.done { background: #cfe8d4; color: #2f7a45; }
  .mm-namebar { display: flex; align-items: center; justify-content: center; gap: 18px; margin-top: 8px; }
  .mm-namebar .mm-preview { margin: 0; } .mm-namebar .mm-go { margin: 0; }
  .mm-back { border: 2px solid #d8c9ae; background: #fff; border-radius: 999px; padding: 9px 22px; font: inherit; font-weight: 800; font-size: 17px; color: #6b4d2c; cursor: pointer; }
  .mm-back span { font-size: 13px; }
  .mm-setup .mm-wings { gap: 10px; margin: 12px 0; }
  .mm-setup .mm-wings button { padding: 10px 4px; } .mm-setup .mm-wings button span { font-size: 32px; } .mm-setup .mm-wings button b { font-size: 15px; } .mm-setup .mm-wings button i { font-size: 12px; }
  .gs-item { position: relative; }
  .gs-got { animation: gsGot 1.1s ease; z-index: 2; }
  @keyframes gsGot { 0% { transform: scale(1); } 15% { transform: scale(1.18) rotate(-3deg); box-shadow: 0 0 0 6px #ffd34d, 0 0 30px #ffb300; }
    35% { transform: scale(1.08) rotate(2deg); } 60% { transform: scale(1.12); box-shadow: 0 0 0 4px #ffd34d, 0 0 22px #ffb300; } 100% { transform: scale(1); } }
  .gs-pop { position: absolute; left: 50%; top: 30%; transform: translate(-50%, 0); pointer-events: none; animation: gsPop 1.3s ease-out forwards;
    background: #2fa24f; color: #fff; border-radius: 999px; padding: 6px 14px; box-shadow: 0 4px 14px rgba(0,0,0,.3); white-space: nowrap; }
  .gs-pop b { font-size: 26px; margin-right: 4px; } .gs-pop span { font-size: 16px; font-weight: 800; }
  @keyframes gsPop { 0% { opacity: 0; transform: translate(-50%, 20px) scale(.4); } 20% { opacity: 1; transform: translate(-50%, 0) scale(1.25); }
    70% { opacity: 1; transform: translate(-50%, -30px) scale(1); } 100% { opacity: 0; transform: translate(-50%, -60px) scale(.9); } }
  .mm-pulse { display: inline-block; animation: mmPulse .6s ease; }
  @keyframes mmPulse { 0%, 100% { transform: scale(1); } 40% { transform: scale(1.5); color: #e8731c; } }
  .gs-note { background: #fff4d6; border: 2px dashed #e0a840; border-radius: 12px; padding: 8px 12px; margin: 8px 0; text-align: center; font-size: 15px; line-height: 1.5; }
  .gs-note i { color: #2f6f9f; } .gs-note > div { margin-top: 4px; font-weight: 700; }
  .gs-steps { display: inline-flex; flex-direction: column; align-items: center; background: #fff; border-radius: 10px; padding: 3px 10px; margin: 0 6px; line-height: 1.25; }
  .gs-steps b { font-size: 15px; color: #6b4d2c; } .gs-steps i { font-size: 12px; }
  .gs-off { background: #9a8a70 !important; }
  .gs-prev { width: 140px; height: 105px; border-radius: 8px; margin: 4px 0; }
  .gs-item button i { color: #fff; }
  .mm-wings { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; margin: 6px 0 4px; }
  .mm-wings button { border: 2px solid #e4d8c3; background: #fff; border-radius: 12px; padding: 6px 4px; cursor: pointer; font: inherit; display: flex; flex-direction: column; align-items: center; line-height: 1.2; }
  .mm-wings button span { font-size: 26px; } .mm-wings button b { font-size: 13px; } .mm-wings button i { font-size: 11px; }
  .mm-wings button.on { border-color: var(--c); box-shadow: 0 0 0 3px var(--c); background: color-mix(in srgb, var(--c) 12%, white); }
  .mm-go:disabled { background: #c9bfae; cursor: default; }
  .mm-shop section.locked .mm-room { opacity: .55; }
  .mm-shop section.focus h3 { box-shadow: 0 0 0 3px #e8731c; }
  .mm-shop h3 { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .mm-wingbuy { margin-left: auto; border: 0; border-radius: 999px; padding: 4px 12px; background: #fff; color: #6b4d2c; font: inherit; font-weight: 800; font-size: 14px; cursor: pointer; }
  .mm-wingbuy:disabled { opacity: .6; cursor: default; } .mm-wingbuy i { color: #2f6f9f !important; }
  .mm-room em.wait { color: #9a8a70; }
  .t-btns { display: flex; flex-direction: column; gap: 10px; align-items: stretch; max-width: 420px; margin: 10px auto 0; }
  .t-btns button { border: 0; border-radius: 12px; padding: 10px 14px; background: #6b4d2c; color: #fff; font: inherit; font-weight: 800; font-size: 17px; cursor: pointer; display: flex; flex-direction: column; }
  .t-btns button small { font-weight: 600; font-size: 12.5px; opacity: .85; }
  .t-btns button.sure { background: #c0392b; }
  .mm-reset { border: 0; border-radius: 10px; padding: 7px 14px; background: #eee5d6; font: inherit; font-weight: 700; cursor: pointer; }
  .mm-q { display: flex; gap: 14px; align-items: center; justify-content: center; text-align: left; }
  .mm-guest { font-size: 54px; }
  .mm-later { margin-top: 8px; border: 2px solid #d8c9ae; background: #f6f1e7; border-radius: 999px; padding: 6px 18px; color: #6b4d2c; font: inherit; font-weight: 700; font-size: 15px; cursor: pointer; }
  .mm-later i { font-size: 13px; }
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
  body:has(#mm:not([hidden])) #mm-toast { top: auto; bottom: 18px; }
  #mm-toast { position: fixed; top: 64px; left: 50%; transform: translate(-50%, -12px); opacity: 0; z-index: 14; pointer-events: none; transition: .35s;
    background: #fff8e3; border: 3px solid #e8c25a; border-radius: 16px; padding: 8px 20px; display: flex; gap: 10px; align-items: baseline; box-shadow: 0 4px 14px rgba(0,0,0,.2); }
  #mm-toast.show { opacity: 1; transform: translate(-50%, 0); }
  #mm-toast b { font-size: 24px; color: #b07a00; } #mm-toast span { font-weight: 800; }
  `;
  document.head.appendChild(st);
}
