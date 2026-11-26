// ことばノート: every exhibit you open adds its word to a paper notebook you can flip through.
import { ruby } from "./text.js";
import { bookOpen, bookClose, pageFlip } from "./sfx.js";

const PER = 3;                    // words on one page
let getWords = () => [], drawPic = null, onPick = null, title = () => null;
let el = null, spread = 0, busy = false;

export function initNotebook(opts) {
  ({ getWords, drawPic, onPick, title } = opts);
  const link = document.createElement("link"); link.rel = "stylesheet"; link.href = "fonts/notebook.css"; document.head.appendChild(link);
  css();
}
export const notebookOpen = () => !!el && !el.hidden;
const esc = s => ruby(String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])));

// page 0 is the cover's inside (title page); then PER words per page
function pages() {
  const w = getWords(), out = [{ intro: true, count: w.length }];
  for (let i = 0; i < w.length; i += PER) out.push({ words: w.slice(i, i + PER), from: i });
  if (out.length % 2) out.push({ blank: true });
  return out;
}
const tilt = i => [-2.2, 1.6, -1.1, 2.4, -1.8, 1.2][i % 6];
const tape = i => ["#f6c9c9", "#c9e4f6", "#f6eac0", "#cdeccf", "#e3d0f4"][i % 5];

function pageHTML(p, side, n) {
  if (!p) return `<div class="nb-page ${side}"></div>`;
  let body = "";
  if (p.intro) {
    const t = title();
    body = `<div class="nb-title"><div class="nb-hand-ja">ことばノート</div><div class="nb-hand-en">My Word Notebook</div>
      ${t ? `<div class="nb-owner"><span>${esc(t[0])}</span><i>${esc(t[1])}</i></div>` : ""}
      <div class="nb-count"><b>${p.count}</b> <span>words</span> ・ ${p.count} こ あつめたよ！</div>
      <p class="nb-tip">てんじを ひらくと、ことばが ここに ふえるよ。<br><i>Open exhibits to collect new words.</i></p></div>`;
  } else if (p.words) {
    body = p.words.map((w, k) => { const i = p.from + k;
      return `<button class="nb-word" data-i="${i}">
        <span class="nb-photo" style="--t:${tilt(i)}deg">${w.img ? `<img src="${w.img}" alt="" loading="lazy">` : `<canvas width="160" height="160" data-pic="${esc(w.pic || "")}"></canvas>`}<span class="nb-tape" style="--c:${tape(i)}"></span></span>
        <span class="nb-text"><b${w.en.length > 16 ? ` style="font-size:${w.en.length > 24 ? 24 : 30}px"` : ""}>${esc(w.en)}</b><span>${esc(w.ja)}</span><small>${esc(w.room)}</small></span>
        <span class="nb-num">${i + 1}</span></button>`; }).join("");
  }
  return `<div class="nb-page ${side}">${body}<div class="nb-foot">${n + 1}</div></div>`;
}
function paintPics(root) {
  root.querySelectorAll("canvas[data-pic]").forEach(c => { const g = c.getContext("2d"); drawPic(g, c.dataset.pic, 80, 80, 140); c.removeAttribute("data-pic"); });
}

function render() {
  const P = pages(), last = Math.max(0, Math.ceil(P.length / 2) - 1);
  spread = Math.min(spread, last);
  el.querySelector(".nb-book").innerHTML = pageHTML(P[spread * 2], "left", spread * 2) + `<div class="nb-rings"></div>` + pageHTML(P[spread * 2 + 1], "right", spread * 2 + 1);
  el.querySelector(".nb-pg").textContent = `${spread + 1} / ${last + 1}`;
  el.querySelector(".nb-prev").disabled = spread === 0;
  el.querySelector(".nb-next").disabled = spread === last;
  paintPics(el);
  el.querySelectorAll(".nb-word").forEach(b => b.onclick = () => { const w = getWords()[+b.dataset.i]; if (w) { closeNotebook(); onPick(w); } });
}

export function openNotebook() {
  if (!el) {
    el = document.createElement("div"); el.id = "nb";
    el.innerHTML = `<div class="nb-desk"><div class="nb-book"></div>
      <div class="nb-nav"><button class="nb-prev" aria-label="previous">◀</button><span class="nb-pg"></span><button class="nb-next" aria-label="next">▶</button></div>
      <button class="nb-close" aria-label="close">✕</button></div>`;
    document.body.appendChild(el);
    el.querySelector(".nb-prev").onclick = () => flip(-1);
    el.querySelector(".nb-next").onclick = () => flip(1);
    el.querySelector(".nb-close").onclick = closeNotebook;
    el.addEventListener("click", e => { if (e.target === el) closeNotebook(); });
    addEventListener("keydown", e => {
      if (!notebookOpen()) return;
      if (e.key === "ArrowRight") flip(1); else if (e.key === "ArrowLeft") flip(-1);
      else if (e.key === "Escape" || e.key === "n") closeNotebook(); else return;
      e.preventDefault(); e.stopImmediatePropagation();
    }, true);
  }
  // open at the newest words
  spread = Math.max(0, Math.ceil(pages().length / 2) - 1);
  el.hidden = false; render(); bookOpen();
  el.querySelector(".nb-book").classList.remove("opening"); void el.offsetWidth; el.querySelector(".nb-book").classList.add("opening");
}
export function closeNotebook() { if (el && !el.hidden) { el.hidden = true; bookClose(); } }

function flip(d) {
  const P = pages(), last = Math.ceil(P.length / 2) - 1, to = spread + d;
  if (busy || to < 0 || to > last) return;
  busy = true; pageFlip();
  const book = el.querySelector(".nb-book");
  // a page lifts from one side, turns over the rings and lands on the other
  const leaf = document.createElement("div"); leaf.className = "nb-leaf " + (d > 0 ? "fwd" : "back");
  leaf.innerHTML = d > 0
    ? `<div class="face front">${pageHTML(P[spread * 2 + 1], "right", spread * 2 + 1)}</div><div class="face backf">${pageHTML(P[to * 2], "left", to * 2)}</div>`
    : `<div class="face front">${pageHTML(P[spread * 2], "left", spread * 2)}</div><div class="face backf">${pageHTML(P[to * 2 + 1], "right", to * 2 + 1)}</div>`;
  // underneath: the page that will be revealed
  const under = d > 0 ? book.querySelector(".nb-page.right") : book.querySelector(".nb-page.left");
  under.outerHTML = d > 0 ? pageHTML(P[to * 2 + 1], "right", to * 2 + 1) : pageHTML(P[to * 2], "left", to * 2);
  book.appendChild(leaf); paintPics(book);
  setTimeout(() => { spread = to; busy = false; render(); }, 620);
}

function css() {
  const st = document.createElement("style");
  st.textContent = `
  #nb { position: fixed; inset: 0; z-index: 13; background: radial-gradient(ellipse at 50% 40%, rgba(60,40,22,.55), rgba(20,12,6,.8)); display: flex; align-items: center; justify-content: center; }
  #nb[hidden] { display: none; }
  .nb-desk { position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .nb-book { position: relative; display: flex; width: min(1060px, 96vw); height: min(470px, 78vh); perspective: 2200px;
    filter: drop-shadow(0 14px 22px rgba(0,0,0,.45)); }
  .nb-book.opening { animation: nbOpen .45s ease-out; }
  @keyframes nbOpen { from { transform: scale(.92) translateY(14px); opacity: 0; } to { transform: none; opacity: 1; } }
  .nb-page { position: relative; flex: 1; overflow: hidden; padding: 30px 34px 26px 58px;
    background-color: #fffdf4;
    background-image: linear-gradient(90deg, transparent 46px, #f2a7a7 46px, #f2a7a7 48px, transparent 48px),
      repeating-linear-gradient(180deg, transparent 0, transparent 33px, #c8dbef 33px, #c8dbef 34px);
    background-position: 0 0, 0 18px; display: flex; flex-direction: column; justify-content: space-around; }
  .nb-page.left { border-radius: 10px 2px 2px 10px; box-shadow: inset -18px 0 22px -14px rgba(90,60,30,.35); }
  .nb-page.right { border-radius: 2px 10px 10px 2px; box-shadow: inset 18px 0 22px -14px rgba(90,60,30,.35); padding-left: 64px; }
  .nb-page.right { background-image: linear-gradient(90deg, transparent 52px, #f2a7a7 52px, #f2a7a7 54px, transparent 54px),
      repeating-linear-gradient(180deg, transparent 0, transparent 33px, #c8dbef 33px, #c8dbef 34px); }
  .nb-rings { position: relative; width: 26px; z-index: 3; margin: 0 -13px;
    background: radial-gradient(circle at 50% 50%, #5b5b62 0 5px, #c9c9d0 6px 8px, transparent 9px) 0 6px / 26px 30px repeat-y; }
  .nb-foot { position: absolute; bottom: 8px; left: 0; right: 0; text-align: center; font: 20px 'Patrick Hand', cursive; color: #8a7a64; }
  .nb-word { all: unset; cursor: pointer; display: flex; align-items: center; gap: 18px; position: relative; padding: 4px 6px; border-radius: 10px; }
  .nb-word:hover { background: rgba(255,230,160,.35); }
  .nb-photo { position: relative; flex: none; width: 112px; height: 100px; padding: 6px 6px 16px; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.25); transform: rotate(var(--t)); }
  .nb-photo img, .nb-photo canvas { width: 100%; height: 100%; object-fit: cover; display: block; background: #f3efe6; }
  .nb-tape { position: absolute; top: -9px; left: 50%; width: 54px; height: 18px; margin-left: -27px; background: var(--c); opacity: .85; transform: rotate(-4deg);
    clip-path: polygon(3% 0, 97% 4%, 100% 50%, 96% 100%, 2% 96%, 0 50%); }
  .nb-text { display: flex; flex-direction: column; line-height: 1.15; min-width: 0; }
  .nb-text b { font: 38px 'Patrick Hand', 'Comic Sans MS', cursive; color: #1f3f7a; font-weight: 400; overflow-wrap: anywhere; }
  .nb-text > span { font: 600 19px 'Klee One', 'Noto Sans JP', sans-serif; color: #3a2c1c; margin-top: 2px; }
  .nb-text small { font: 600 12.5px 'Klee One', 'Noto Sans JP', sans-serif; color: #9a8a70; margin-top: 3px; }
  .nb-text rt { font-size: .55em; }
  .nb-num { position: absolute; right: 4px; top: 4px; font: 18px 'Patrick Hand', cursive; color: #c0a98a; }
  .nb-title { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .nb-hand-ja { font: 600 46px 'Klee One', sans-serif; color: #3a2c1c; }
  .nb-hand-en { font: 40px 'Patrick Hand', cursive; color: #1f3f7a; margin-top: -6px; }
  .nb-owner { margin-top: 14px; padding: 8px 18px; border: 2px dashed #c9b48f; border-radius: 12px; display: flex; flex-direction: column; }
  .nb-owner span { font: 600 22px 'Klee One', sans-serif; } .nb-owner i { font: 22px 'Patrick Hand', cursive; color: #1f3f7a; }
  .nb-count { margin-top: 18px; font: 600 20px 'Klee One', sans-serif; color: #3a2c1c; }
  .nb-count b { font: 54px 'Patrick Hand', cursive; color: #e8731c; font-weight: 400; } .nb-count > span { font: 26px 'Patrick Hand', cursive; color: #e8731c; }
  .nb-tip { font: 600 15px 'Klee One', sans-serif; color: #7a6a52; margin-top: 18px; } .nb-tip i { font: 18px 'Patrick Hand', cursive; color: #2f6f9f; }
  .nb-leaf { position: absolute; top: 0; bottom: 0; width: calc(50% - 0px); transform-style: preserve-3d; z-index: 5; }
  .nb-leaf.fwd { right: 0; transform-origin: left center; animation: nbFwd .6s ease-in-out forwards; }
  .nb-leaf.back { left: 0; transform-origin: right center; animation: nbBack .6s ease-in-out forwards; }
  .nb-leaf .face { position: absolute; inset: 0; display: flex; backface-visibility: hidden; }
  .nb-leaf .face > .nb-page { height: 100%; }
  .nb-leaf .backf { transform: rotateY(180deg); }
  @keyframes nbFwd { to { transform: rotateY(-180deg); } }
  @keyframes nbBack { to { transform: rotateY(180deg); } }
  .nb-nav { display: flex; align-items: center; gap: 16px; }
  .nb-nav button { border: 0; width: 52px; height: 44px; border-radius: 12px; background: #fff8e8; font-size: 20px; cursor: pointer; box-shadow: 0 2px 0 rgba(0,0,0,.25); }
  .nb-nav button:disabled { opacity: .35; cursor: default; }
  .nb-pg { color: #fff; font: 24px 'Patrick Hand', cursive; min-width: 70px; text-align: center; }
  .nb-close { position: absolute; top: -14px; right: -14px; z-index: 6; border: 0; width: 42px; height: 42px; border-radius: 50%; background: #fff8e8; font-size: 18px; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,.3); }
  `;
  document.head.appendChild(st);
}
