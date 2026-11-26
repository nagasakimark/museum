// Quiet sound effects (Kenney RPG Audio, CC0): footsteps that echo in big halls, doors, notebook pages.
// Uses the same on/off switch as the music.
let ctx = null, out = null, dry = null, wet = null, verb = null;
const buf = {};
let enabled = true;
const NAMES = [...Array(10)].map((_, i) => "footstep0" + i).concat(["doorOpen_1", "doorOpen_2", "doorClose_1", "doorClose_2", "bookOpen", "bookClose", "bookFlip1", "bookFlip2", "bookFlip3"]);

// a long soft echo, like a stone-and-wood museum hall
function impulse(sec, decay) {
  const n = Math.floor(ctx.sampleRate * sec), b = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const d = b.getChannelData(c); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay); }
  return b;
}
export function startSfx() {
  if (ctx) return;
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
  out = ctx.createGain(); out.gain.value = enabled ? 1 : 0; out.connect(ctx.destination);
  dry = ctx.createGain(); dry.connect(out);
  verb = ctx.createConvolver(); verb.buffer = impulse(2.6, 3.2);
  wet = ctx.createGain(); wet.gain.value = .35; verb.connect(wet); wet.connect(out);
  for (const n of NAMES) fetch(`audio/sfx/${n}.mp3`).then(r => r.arrayBuffer()).then(a => ctx.decodeAudioData(a)).then(b => { buf[n] = b; }).catch(() => { });
}
export function setSfx(on) { enabled = on; if (out) out.gain.setTargetAtTime(on ? 1 : 0, ctx.currentTime, .05); }
// how echoey the current room is (0 small room .. 1 grand hall)
export function setRoomSize(k) { if (wet) wet.gain.setTargetAtTime(.18 + .45 * k, ctx.currentTime, .3); }

function play(name, vol, rate = 1, lowpass = 0) {
  if (!ctx || !enabled || !buf[name]) return;
  if (ctx.state === "suspended") ctx.resume();
  const s = ctx.createBufferSource(); s.buffer = buf[name]; s.playbackRate.value = rate;
  const g = ctx.createGain(); g.gain.value = vol;
  let node = s;
  if (lowpass) { const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = lowpass; s.connect(f); node = f; }
  node.connect(g); g.connect(dry); g.connect(verb);
  s.start();
}
let lastStep = -1;
export function footstep() {
  let i; do { i = Math.floor(Math.random() * 10); } while (i === lastStep);
  lastStep = i;
  play("footstep0" + i, .1 + Math.random() * .03, .9 + Math.random() * .15, 2600);
}
export function door() {
  play(Math.random() < .5 ? "doorOpen_1" : "doorOpen_2", .07, .95, 1800);
  setTimeout(() => play(Math.random() < .5 ? "doorClose_1" : "doorClose_2", .05, 1, 1500), 650);
}
export const bookOpen = () => play("bookOpen", .35);
export const bookClose = () => play("bookClose", .3);
export const pageFlip = () => play("bookFlip" + (1 + Math.floor(Math.random() * 3)), .35, .95 + Math.random() * .1);
// a soft two-note chime (made here, no file) for confetti moments
export function chime() {
  if (!ctx || !enabled) return;
  if (ctx.state === "suspended") ctx.resume();
  [[784, 0], [1175, .12]].forEach(([f, t]) => {
    const o = ctx.createOscillator(), g = ctx.createGain(), at = ctx.currentTime + t;
    o.type = "sine"; o.frequency.value = f;
    g.gain.setValueAtTime(0, at); g.gain.linearRampToValueAtTime(.06, at + .02); g.gain.exponentialRampToValueAtTime(.0005, at + 1.2);
    o.connect(g); g.connect(dry); g.connect(verb); o.start(at); o.stop(at + 1.3);
  });
}
