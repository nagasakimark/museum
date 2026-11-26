// Quiet background music: a shuffled playlist of calm piano pieces (Kevin MacLeod, CC BY).
const TRACKS = ["01-gymnopedie-no-1", "02-meditation-impromptu-01", "03-dreamer", "04-gymnopedie-no-2", "05-bathed-in-the-light",
  "06-meditation-impromptu-02", "07-at-rest", "08-gymnopedie-no-3", "09-lasting-hope", "10-meditation-impromptu-03"];
const VOLUME = 0.32;
let order = [], idx = 0, audio = null, started = false;
let on = true;
try { on = localStorage.getItem("museum-music") !== "off"; } catch { }

function shuffled() { const a = TRACKS.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function playNext() {
  if (!on) return;
  if (idx >= order.length) { order = shuffled(); idx = 0; }
  audio.src = `audio/bgm/${order[idx++]}.mp3`;
  audio.volume = 0;
  audio.play().then(() => fade(VOLUME, 2500)).catch(() => { });
}
let fadeTimer;
function fade(to, ms, then) {
  clearInterval(fadeTimer);
  const from = audio.volume, t0 = performance.now();
  fadeTimer = setInterval(() => {
    const k = Math.min(1, (performance.now() - t0) / ms);
    audio.volume = from + (to - from) * k;
    if (k >= 1) { clearInterval(fadeTimer); then?.(); }
  }, 50);
}
// call from a click/keypress (browsers only allow sound after the user does something)
export function startMusic() {
  if (started) return; started = true;
  audio = new Audio(); audio.preload = "auto";
  audio.addEventListener("ended", () => setTimeout(playNext, 2500));
  order = shuffled(); idx = 0;
  if (on) playNext();
}
export function musicOn() { return on; }
export function toggleMusic() {
  on = !on;
  try { localStorage.setItem("museum-music", on ? "on" : "off"); } catch { }
  if (!audio) return on;
  if (on) { if (audio.src && audio.currentTime > 0 && !audio.ended) { audio.play().catch(() => { }); fade(VOLUME, 1200); } else playNext(); }
  else fade(0, 600, () => audio.pause());
  return on;
}
