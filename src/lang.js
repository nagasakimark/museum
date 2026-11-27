// Exhibit text language: "ja" (Japanese, as written), "both" (Japanese with the English translation under it), "en" (English).
// Set in the teacher menu (saved in this browser) or with ?lang=ja|both|en in the link (the link wins).
// The English translations live in data/en.json and are only downloaded when they are needed.
const KEY = "museum-lang", OK = ["ja", "both", "en"];
const fromUrl = new URLSearchParams(location.search).get("lang");
let saved = null; try { saved = localStorage.getItem(KEY); } catch { }
export let LANG = OK.includes(fromUrl) ? fromUrl : OK.includes(saved) ? saved : "ja";
export function setLang(l) { try { localStorage.setItem(KEY, l); } catch { } }

let EN = {};
export const enReady = LANG === "ja" ? Promise.resolve() :
  fetch("data/en.json").then(r => r.ok ? r.json() : {}).then(d => { EN = d; }).catch(() => { });

// English for an exhibit: { fact, about } (either may be missing while translations are still being added)
export const enFor = key => (key && EN[key]) || null;
export const enIntro = topicId => EN["#" + topicId] || null;
