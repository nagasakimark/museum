// Low-poly museum guests (Kenney Mini Characters, CC0) who wander, stop at exhibits and look.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone as skClone } from "three/examples/jsm/utils/SkeletonUtils.js";

const FILES = ["female-a", "female-b", "female-c", "female-d", "female-e", "female-f", "male-a", "male-b", "male-c", "male-d", "male-e", "male-f", "male-g"];
const HEIGHT = 1.55;          // metres, roughly a visitor's height in our world
const SPEED = 1.05;           // walking speed m/s
const models = [];            // { scene, clips, scale }
let wheelchair = null;
let ready = false;
const waiting = [];           // rooms built before the models arrived

const loader = new GLTFLoader();
function markShared(root) { root.traverse(o => { if (o.geometry) o.geometry.userData.shared = true; }); }
function load(name) {
  return new Promise(res => loader.load(`models/guests/${name === "wheelchair" ? name : "character-" + name}.glb`, g => res(g), undefined, () => res(null)));
}
export function loadGuests(onReady) {
  Promise.all([...FILES.map(load), load("wheelchair")]).then(list => {
    const wc = list.pop();
    for (const g of list) {
      if (!g) continue;
      markShared(g.scene);
      g.scene.traverse(o => { if (o.isMesh) { o.castShadow = false; o.frustumCulled = true; } });
      const box = new THREE.Box3().setFromObject(g.scene), h = box.max.y - box.min.y || 1;
      models.push({ scene: g.scene, clips: g.animations, scale: HEIGHT / h });
    }
    if (wc) { markShared(wc.scene); wheelchair = wc.scene; }
    ready = models.length > 0;
    if (ready) { onReady?.(); waiting.splice(0).forEach(([r, opts]) => r.group && spawnGuests(r, opts)); }
  });
}

const clip = (m, name) => m.clips.find(c => c.name === name);
const blocked = (r, ax, az, bx, bz) => {
  const d = Math.hypot(bx - ax, bz - az), n = Math.max(1, Math.ceil(d / .35));
  for (let i = 0; i <= n; i++) {
    const x = ax + (bx - ax) * i / n, z = az + (bz - az) * i / n;
    if (Math.abs(x - r.x) > r.hx - .8 || Math.abs(z - r.z) > r.hz - .8) return true;
    for (const b of r.colliders) if (x > b.minX - .45 && x < b.maxX + .45 && z > b.minZ - .45 && z < b.maxZ + .45) return true;
  }
  return false;
};
// a place to stand: in front of a picture, or a free spot to wander to
const crowded = (r, x, z, me) => (r.guests || []).some(o => o !== me && (Math.hypot(o.obj.position.x - x, o.obj.position.z - z) < 1.3 || (o.target && Math.hypot(o.target.x - x, o.target.z - z) < 1.3)));
function pickSpot(r, g) {
  const pics = [...r.exhibits.filter(e => !e.ex.text && !r.topic.lobby).map(e => ({ pos: e.pos, normal: e.normal })), ...(r.sights || [])];
  for (let k = 0; k < 8; k++) {
    if (pics.length && Math.random() < .8) {
      const e = pics[Math.floor(Math.random() * pics.length)];
      const side = (Math.random() - .5) * 1.4, back = 1.9 + Math.random() * .8;
      const tx = e.pos.x + e.normal.x * back + e.normal.z * side, tz = e.pos.z + e.normal.z * back - e.normal.x * side;
      if (crowded(r, tx, tz, g)) continue;
      if (!g || !blocked(r, g.obj.position.x, g.obj.position.z, tx, tz)) return { x: tx, z: tz, look: e.pos };
    } else {
      const tx = r.x + (Math.random() * 2 - 1) * (r.hx - 2.5), tz = r.z + (Math.random() * 2 - 1) * (r.hz - 2.5);
      if (crowded(r, tx, tz, g)) continue;
      if (!g || !blocked(r, g.obj.position.x, g.obj.position.z, tx, tz)) return { x: tx, z: tz, look: null };
    }
  }
  return null;
}

function play(g, name, fade = .3) {
  const c = clip(g.model, name); if (!c || g.anim === name) return;
  const a = g.mixer.clipAction(c); a.reset().fadeIn(fade).play();
  if (g.action) g.action.fadeOut(fade);
  g.action = a; g.anim = name;
}

// opts.askers: how many guests carry a question bubble; opts.makeBubble(): Object3D to float above them
export function spawnGuests(r, opts = {}) {
  if (!ready) { waiting.push([r, opts]); return; }
  if (r.guests?.length) return;
  r.guests = [];
  const area = r.hx * r.hz * 4;
  let n = r.topic.lobby ? 5 : r.topic.hall ? 3 : area > 500 ? 3 : area > 250 ? 2 : 1;
  if (Math.random() < .25) n = Math.max(0, n - 1);
  const used = new Set();
  for (let i = 0; i < Math.max(n, opts.askers || 0); i++) {
    const spot = pickSpot(r); if (!spot) continue;
    let mi; do { mi = Math.floor(Math.random() * models.length); } while (used.has(mi) && used.size < models.length);
    used.add(mi);
    const m = models[mi], obj = new THREE.Group(), body = skClone(m.scene);
    body.scale.setScalar(m.scale); obj.add(body);
    const sitting = !opts.noWheelchair && wheelchair && i === 1 && Math.random() < .35;
    if (sitting) { const w = skClone(wheelchair); w.scale.setScalar(m.scale); obj.add(w); }
    obj.position.set(spot.x, 0, spot.z);
    if (spot.look) obj.rotation.y = Math.atan2(spot.look.x - spot.x, spot.look.z - spot.z);
    else obj.rotation.y = Math.random() * Math.PI * 2;
    r.group.add(obj);
    const g = { obj, model: m, mixer: new THREE.AnimationMixer(body), anim: null, action: null, sitting,
      state: "look", t: 2 + Math.random() * 6, target: null, look: spot.look, room: r };
    if (i < (opts.askers || 0) && opts.makeBubble) {
      g.asker = true;
      g.bubble = opts.makeBubble(); g.bubble.position.y = HEIGHT + .45; obj.add(g.bubble);
      // a generous invisible box so the guest is easy to click
      const hit = new THREE.Mesh(new THREE.BoxGeometry(.9, HEIGHT + .7, .9), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
      hit.position.y = (HEIGHT + .7) / 2; hit.userData.guest = g; obj.add(hit); r.clickables.push(hit);
      g.state = "wait"; g.t = 1e9;
    }
    play(g, sitting ? "wheelchair-sit" : "idle", 0);
    g.mixer.update(Math.random() * 2);
    r.guests.push(g);
  }
}

export function updateGuests(rooms, dt, player) {
  for (const r of rooms) for (const g of r.guests || []) {
    const p = g.obj.position;
    if (g.asker) {
      // question guests stay put and turn towards you when you come near
      const d = Math.hypot(player.x - p.x, player.z - p.z);
      if (d < 6) { const want = Math.atan2(player.x - p.x, player.z - p.z); g.obj.rotation.y += angDiff(want, g.obj.rotation.y) * Math.min(1, dt * 3); }
      if (g.bubble) g.bubble.position.y = HEIGHT + .45 + Math.sin(performance.now() / 400) * .06;
      g.mixer.update(dt); continue;
    }
    g.t -= dt;
    if (g.state === "look") {
      if (g.look) g.obj.rotation.y += angDiff(Math.atan2(g.look.x - p.x, g.look.z - p.z), g.obj.rotation.y) * Math.min(1, dt * 3);
      if (!g.sitting && g.anim === "idle" && Math.random() < dt * .04) { play(g, Math.random() < .5 ? "emote-yes" : "interact-right"); setTimeout(() => g.anim !== "walk" && play(g, "idle"), 1600); }
      if (g.t <= 0) {
        const s = pickSpot(r, g);
        if (s) { g.target = s; g.state = "walk"; play(g, g.sitting ? "wheelchair-move-forward" : "walk"); }
        else g.t = 3;
      }
    } else if (g.state === "walk") {
      const dx = g.target.x - p.x, dz = g.target.z - p.z, d = Math.hypot(dx, dz);
      if (d < .1) {
        g.state = "look"; g.look = g.target.look; g.t = 4 + Math.random() * 8;
        play(g, g.sitting ? "wheelchair-sit" : "idle");
      } else {
        const want = Math.atan2(dx, dz);
        g.obj.rotation.y += angDiff(want, g.obj.rotation.y) * Math.min(1, dt * 6);
        const step = Math.min(d, SPEED * (g.sitting ? .8 : 1) * dt);
        p.x += dx / d * step; p.z += dz / d * step;
      }
    }
    g.mixer.update(dt);
  }
}
const angDiff = (a, b) => ((a - b + Math.PI * 3) % (Math.PI * 2)) - Math.PI;

// stop tracking a room's guests (their meshes go with the room's group)
export function clearGuests(r) {
  for (const g of r.guests || []) g.mixer.stopAllAction();
  r.guests = [];
  const i = waiting.findIndex(([x]) => x === r); if (i >= 0) waiting.splice(i, 1);
}
