// Guest questions for My Museum: very simple English with a Japanese helper line.
// Each maker returns null if it can't make a fair question for this room, or
// { en, ja, show?: item, opts: [{ en?, ja?, item? }], right: index, ans: [en, ja] }.

import { plain } from "./text.js";
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const hasPic = x => !x.text && (x.img || x.pic);
// the "Is this ___?" question underlines the name instead of guessing a/an/the
const row = (x, ...keys) => (x.rows || []).find(r => keys.some(k => plain(r[0]).includes(k)));
const clean = s => plain(s || "").replace(/\s*\(.*?\)\s*/g, " ").split(/[,、]/)[0].trim();
const lc = s => s.toLowerCase();
// "a lion", "an owl", but "the UK", "Mars", "mammals", "Water Lilies" stay as they are
function art(en) {
  if (/^(the |a |an )/i.test(en) || /^[A-Z]/.test(en) || /s$/.test(en) && !/ss$/.test(en) || en.includes(" and ")) return en;
  return (/^[aeiou]/i.test(en) ? "an " : "a ") + en;
}

// build three options: the right one plus two different wrong ones
const short = k => k && k.length <= 26 && !k.includes(":");
function three(right, pool, key = o => lc(o.en)) {
  if (!short(plain(key(right)))) return null;
  const seen = new Set([key(right)]), wrong = [];
  for (const o of shuffle(pool)) { const k = key(o); if (!short(plain(k)) || seen.has(k)) continue; seen.add(k); wrong.push(o); if (wrong.length === 2) break; }
  if (wrong.length < 2) return null;
  const opts = shuffle([right, ...wrong]);
  return { opts, right: opts.indexOf(right) };
}

export function makeQuestion(topic, ALL) {
  const items = (topic.list || []).filter(x => !x.text);
  const pics = items.filter(hasPic);
  const everyItem = ALL.flatMap(t => (t.list || []).filter(x => !x.text));
  const rowPool = (...keys) => everyItem.map(x => ({ x, r: row(x, ...keys) })).filter(o => o.r && o.r[2]);
  const makers = [];

  // 1. Which one is ___? (three pictures)
  makers.push([3, () => {
    if (pics.length < 3) return null;
    const r = pick(pics), t = three(r, pics); if (!t) return null;
    return { en: `Which one is <u>${r.en}</u>?`, ja: `「${r.ja}」は どれ？ えを えらぼう。`, opts: t.opts.map(o => ({ item: o })), right: t.right, ans: [r.en, r.ja] };
  }]);
  // 2. What is this? (one picture, three words)
  makers.push([3, () => {
    if (pics.length < 3) return null;
    const r = pick(pics), t = three(r, items); if (!t) return null;
    return { en: "What is this?", ja: "これは なに？ えいごを えらぼう。", show: r, opts: t.opts.map(o => ({ en: o.en })), right: t.right, ans: [r.en, r.ja] };
  }]);
  // 3. Is this a ___? (yes / no)
  makers.push([2, () => {
    if (pics.length < 2) return null;
    const r = pick(pics), yes = Math.random() < .5, other = pick(items.filter(o => lc(o.en) !== lc(r.en)));
    const named = yes ? r : other; if (!named) return null;
    if (!short(named.en)) return null;
    return { en: `Is this <u>${named.en}</u>?`, ja: `これは「${named.ja}」ですか？`, show: r,
      opts: [{ en: "Yes", ja: "はい" }, { en: "No", ja: "いいえ" }], right: yes ? 0 : 1, ans: [r.en, r.ja] };
  }]);
  // 4. 「ねこ」 in English? (no picture)
  makers.push([2, () => {
    if (items.length < 3) return null;
    const r = pick(items); if (!r.ja || !/[ぁ-んァ-ヶ一-龯]/.test(plain(r.ja))) return null;
    const t = three(r, items); if (!t) return null;
    return { en: `What is 「${r.ja}」 in English?`, ja: `「${r.ja}」は えいごで なに？`, opts: t.opts.map(o => ({ en: o.en })), right: t.right, ans: [r.en, r.ja] };
  }]);
  // 5. First letter
  makers.push([1, () => {
    const ok = pics.filter(x => /^[a-z]{3,10}$/.test(x.en));
    if (!ok.length) return null;
    const r = pick(ok), L = r.en[0].toUpperCase();
    const letters = shuffle("ABCDEFGHIJKLMNOPRSTUVWY".split("").filter(c => c !== L)).slice(0, 2);
    const opts = shuffle([L, ...letters]);
    return { en: `What is the first letter? <u>_${r.en.slice(1)}</u>`, ja: `「${r.ja}」の さいしょの もじは どれ？`, show: r,
      opts: opts.map(c => ({ en: c })), right: opts.indexOf(L), ans: [r.en, r.ja] };
  }]);
  // 6. Capital city (countries and prefectures)
  makers.push([4, () => {
    const mine = items.map(x => ({ x, r: row(x, "首都", "県庁所在地") })).filter(o => o.r && o.r[2]);
    if (!mine.length) return null;
    const m = pick(mine), pool = rowPool(m.r[0].includes("県") ? "県庁所在地" : "首都");
    const t = three(m, pool, o => lc(o.r[2])); if (!t) return null;
    return { en: `What is the capital of ${m.x.en}?`, ja: `${m.x.ja}の ${m.r[0].includes("県") ? "けんちょう しょざいち" : "しゅと"}は どこ？`, show: hasPic(m.x) ? m.x : null,
      opts: t.opts.map(o => ({ en: o.r[2], ja: o.r[1] })), right: t.right, ans: [m.r[2], m.r[1]] };
  }]);
  // 7. Famous food
  makers.push([4, () => {
    const mine = items.map(x => ({ x, r: row(x, "有名な 食べもの", "名物") })).filter(o => o.r && o.r[2]);
    if (!mine.length) return null;
    const m = pick(mine), t = three(m, rowPool("有名な 食べもの", "名物"), o => lc(clean(o.r[2]))); if (!t) return null;
    return { en: `What food is famous in ${m.x.en}?`, ja: `${m.x.ja}で ゆうめいな たべものは？`,
      opts: t.opts.map(o => ({ en: clean(o.r[2]), ja: clean(o.r[1]) })), right: t.right, ans: [clean(m.r[2]), clean(m.r[1])] };
  }]);
  // 8. Hello in other languages
  makers.push([4, () => {
    const mine = items.map(x => ({ x, r: row(x, "こんにちは") })).filter(o => o.r && o.r[2]);
    if (!mine.length) return null;
    const m = pick(mine), t = three(m, rowPool("こんにちは"), o => lc(o.r[2])); if (!t) return null;
    return { en: `How do you say "hello" in ${m.x.en}?`, ja: `${m.x.ja}の「こんにちは」は どれ？`,
      opts: t.opts.map(o => ({ en: o.r[2], ja: o.r[1] })), right: t.right, ans: [m.r[2], m.r[1]] };
  }]);
  // 9. Language
  makers.push([3, () => {
    const mine = items.map(x => ({ x, r: row(x, "ことば") })).filter(o => o.r && o.r[2]);
    if (!mine.length) return null;
    const m = pick(mine), t = three(m, rowPool("ことば"), o => lc(clean(o.r[2]))); if (!t) return null;
    return { en: `What language do people speak in ${m.x.en}?`, ja: `${m.x.ja}では なにご を はなす？`,
      opts: t.opts.map(o => ({ en: clean(o.r[2]), ja: clean(o.r[1]) })), right: t.right, ans: [clean(m.r[2]), clean(m.r[1])] };
  }]);
  // 10. What does it eat? (animals)
  makers.push([4, () => {
    const mine = pics.map(x => ({ x, r: row(x, "食べもの") })).filter(o => o.r && o.r[2] && !row(o.x, "有名な", "首都"));
    if (!mine.length) return null;
    const m = pick(mine), t = three(m, rowPool("食べもの").filter(o => !row(o.x, "有名な", "首都")), o => lc(clean(o.r[2]))); if (!t) return null;
    return { en: `What does it eat?`, ja: `${m.x.ja}は なにを たべる？`, show: m.x,
      opts: t.opts.map(o => ({ en: clean(o.r[2]), ja: clean(o.r[1]) })), right: t.right, ans: [clean(m.r[2]), clean(m.r[1])] };
  }]);
  // 11. Where does it live? (habitat)
  makers.push([3, () => {
    const mine = pics.map(x => ({ x, r: row(x, "すみか") })).filter(o => o.r && o.r[2]);
    if (!mine.length) return null;
    const m = pick(mine), t = three(m, rowPool("すみか"), o => lc(o.r[2])); if (!t) return null;
    return { en: `Where does it live?`, ja: `${m.x.ja}は どこに すんでいる？`, show: m.x,
      opts: t.opts.map(o => ({ en: o.r[2], ja: o.r[1] })), right: t.right, ans: [m.r[2], m.r[1]] };
  }]);
  // 12. Animal group
  makers.push([3, () => {
    const mine = pics.map(x => ({ x, r: row(x, "なかま") })).filter(o => o.r && o.r[2]);
    if (!mine.length) return null;
    const m = pick(mine), t = three(m, rowPool("なかま"), o => lc(o.r[2])); if (!t) return null;
    return { en: `What is it?`, ja: `${m.x.ja}は なんの なかま？`, show: m.x,
      opts: t.opts.map(o => ({ en: o.r[2], ja: o.r[1] })), right: t.right, ans: [m.r[2], m.r[1]] };
  }]);
  // 13. Which country is it from?
  makers.push([3, () => {
    const mine = pics.map(x => ({ x, r: row(x, "🌍 国", "国・地いき") })).filter(o => o.r && o.r[2] && !/,|、/.test(o.r[2]));
    if (!mine.length) return null;
    const m = pick(mine), t = three(m, rowPool("🌍 国", "国・地いき").filter(o => !/,|、/.test(o.r[2])), o => lc(o.r[2])); if (!t) return null;
    return { en: `Where is it from?`, ja: `${m.x.ja}は どこの くに？`, show: m.x,
      opts: t.opts.map(o => ({ en: o.r[2], ja: o.r[1] })), right: t.right, ans: [m.r[2], m.r[1]] };
  }]);
  // 14. Who painted it?
  makers.push([4, () => {
    const mine = pics.map(x => ({ x, r: row(x, "画家", "作家") })).filter(o => o.r && o.r[2]);
    if (!mine.length) return null;
    const m = pick(mine), t = three(m, rowPool("画家", "作家"), o => lc(o.r[2])); if (!t) return null;
    return { en: `Who made this?`, ja: `「${m.x.ja}」を つくったのは だれ？`, show: m.x,
      opts: t.opts.map(o => ({ en: o.r[2], ja: o.r[1] })), right: t.right, ans: [m.r[2], m.r[1]] };
  }]);
  // 15. Which is older? (timelines)
  makers.push([3, () => {
    const yr = x => { const r = row(x, "年代", "ころ", "いつ"); if (!r) return null; const m = String(r[1]).match(/\d{2,4}/); if (!m) return null;
      return /前|BC|B\.C/.test(r[1]) ? -(+m[0]) : +m[0]; };
    const dated = pics.map(x => ({ x, y: yr(x) })).filter(o => o.y != null);
    if (dated.length < 2) return null;
    const [a, b] = shuffle(dated); if (Math.abs(a.y - b.y) < 20) return null;
    const old = a.y < b.y ? a : b;
    return { en: "Which is older?", ja: "どっちが むかし？", opts: [a, b].map(o => ({ item: o.x })), right: [a, b].indexOf(old), ans: [old.x.en, old.x.ja] };
  }]);
  // 16. What is this room about?
  makers.push([1, () => {
    const others = ALL.filter(t => t.id !== topic.id && !t.hall && t.en);
    const t = three(topic, others); if (!t) return null;
    return { en: "What is this room about?", ja: "この へやの テーマは なに？", opts: t.opts.map(o => ({ en: o.en, ja: o.ja })), right: t.right, ans: [topic.en, topic.ja] };
  }]);

  // weighted pick among makers that work for this room
  for (let tries = 0; tries < 12; tries++) {
    const total = makers.reduce((n, m) => n + m[0], 0);
    let k = Math.random() * total, mi = 0;
    while (k > makers[mi][0]) { k -= makers[mi][0]; mi++; }
    const q = makers[mi][1]();
    if (q) {
      const np = t => t && String(t).replace(/\s*[（(][^)）]*[)）]/g, "");
      q.ja = np(q.ja); q.opts.forEach(o => { o.ja = np(o.ja); }); q.ans[1] = np(q.ans[1]);
      return q;
    }
    makers.splice(mi, 1); if (!makers.length) break;
  }
  return null;
}
