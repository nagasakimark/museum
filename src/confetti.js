// A short confetti burst drawn on a 2D canvas over the museum.
let cv = null, g = null, parts = [], raf = 0;
const COLS = ["#e8731c", "#2f8fb0", "#e0b100", "#4f8a3c", "#d16ba5", "#8e44ad", "#d9534f", "#ffffff"];
function ensure() {
  if (cv) return;
  cv = document.createElement("canvas"); cv.id = "confetti";
  cv.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:15";
  document.body.appendChild(cv); g = cv.getContext("2d");
}
export function confetti(n = 140, x = .5, y = .38) {
  ensure();
  cv.width = innerWidth; cv.height = innerHeight;
  const cx = cv.width * x, cy = cv.height * y;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, s = 4 + Math.random() * 9;
    parts.push({ x: cx, y: cy, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 6, w: 6 + Math.random() * 6, h: 4 + Math.random() * 5,
      r: Math.random() * 6, vr: (Math.random() - .5) * .4, c: COLS[i % COLS.length], life: 90 + Math.random() * 50 });
  }
  if (!raf) raf = requestAnimationFrame(step);
}
function step() {
  g.clearRect(0, 0, cv.width, cv.height);
  parts = parts.filter(p => p.life > 0);
  for (const p of parts) {
    p.vy += .32; p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life--;
    g.save(); g.globalAlpha = Math.min(1, p.life / 30); g.translate(p.x, p.y); g.rotate(p.r);
    g.scale(1, Math.abs(Math.cos(p.r * 2))); g.fillStyle = p.c; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); g.restore();
  }
  raf = parts.length ? requestAnimationFrame(step) : 0;
  if (!raf) g.clearRect(0, 0, cv.width, cv.height);
}
