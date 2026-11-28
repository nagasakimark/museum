// Phone/tablet controls: left thumb stick to walk, right side drag to look, and an action button.
// Only on touch-only devices (not Chromebooks/laptops, which also have a trackpad).
export const mobile = matchMedia("(pointer: coarse)").matches && !matchMedia("(any-pointer: fine)").matches;
export const stick = { x: 0, y: 0 };   // -1..1, y = forward
export function initTouch({ look, act, label }) {
  if (!mobile) return () => {};
  document.body.classList.add("mobile");
  const el = (cls, html = "") => { const d = document.createElement("div"); d.className = cls; d.innerHTML = html; document.body.appendChild(d); return d; };
  const L = el("tz tz-l"), R = el("tz tz-r"); el("tlook", "👀"); const base = el("tstick", '<i></i>'), knob = base.firstChild;
  const btn = document.createElement("button"); btn.className = "tact"; document.body.appendChild(btn);
  const MAX = 52; let mv = null, lk = null;
  L.addEventListener("pointerdown", e => { e.preventDefault(); L.setPointerCapture(e.pointerId); mv = { id: e.pointerId, x: e.clientX, y: e.clientY };
    base.style.left = e.clientX + "px"; base.style.top = e.clientY + "px"; base.classList.add("on"); });
  L.addEventListener("pointermove", e => { if (!mv || e.pointerId !== mv.id) return;
    let dx = e.clientX - mv.x, dy = e.clientY - mv.y; const d = Math.hypot(dx, dy); if (d > MAX) { dx *= MAX / d; dy *= MAX / d; }
    knob.style.transform = `translate(${dx}px,${dy}px)`; stick.x = dx / MAX; stick.y = -dy / MAX; });
  const endMv = e => { if (!mv || e.pointerId !== mv.id) return; mv = null; stick.x = stick.y = 0; knob.style.transform = ""; base.classList.remove("on"); };
  L.addEventListener("pointerup", endMv); L.addEventListener("pointercancel", endMv);
  R.addEventListener("pointerdown", e => { e.preventDefault(); R.setPointerCapture(e.pointerId); lk = { id: e.pointerId, x: e.clientX, y: e.clientY }; });
  R.addEventListener("pointermove", e => { if (!lk || e.pointerId !== lk.id) return; look(e.clientX - lk.x, e.clientY - lk.y); lk.x = e.clientX; lk.y = e.clientY; });
  const endLk = e => { if (lk && e.pointerId === lk.id) lk = null; };
  R.addEventListener("pointerup", endLk); R.addEventListener("pointercancel", endLk);
  btn.addEventListener("pointerdown", e => { e.preventDefault(); act(); });
  let last = null;
  return () => { const t = label(); if (t !== last) { last = t; btn.textContent = t || "👆"; btn.classList.toggle("dim", !t); } };
}
