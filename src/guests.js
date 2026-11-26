// Low-poly museum guests (Kenney Mini Characters, CC0) who wander, stop at exhibits and look.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone as skClone } from "three/examples/jsm/utils/SkeletonUtils.js";

const FILES = ["female-a", "female-b", "female-c", "female-d", "female-e", "female-f", "male-a", "male-b", "male-c", "male-d", "male-e", "male-f", "male-g"];
const HEIGHT = 1.55;          // metres, roughly a visitor's height in our world
const SPEED = 1.05;           // walking speed m/s
const models = [];            // { scene, clips, scale }
let wheelchair = null;
// wheelchair users: about 1 guest in 30, and at least 20 other guests between two of them,
// so you meet one now and then rather than in every room
let sinceChair = 12;
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
  const pics = [...r.exhibits.filter(e => !e.ex.text && !r.topic.lobby).map(e => ({ pos: e.pos, normal: e.normal, ex: e.ex })), ...(r.sights || [])];
  for (let k = 0; k < 8; k++) {
    if (pics.length && Math.random() < .8) {
      const e = pics[Math.floor(Math.random() * pics.length)];
      const side = (Math.random() - .5) * 1.4, back = 1.9 + Math.random() * .8;
      const tx = e.pos.x + e.normal.x * back + e.normal.z * side, tz = e.pos.z + e.normal.z * back - e.normal.x * side;
      if (crowded(r, tx, tz, g)) continue;
      if (!g || !blocked(r, g.obj.position.x, g.obj.position.z, tx, tz)) return { x: tx, z: tz, look: e.pos, ex: e.ex };
    } else {
      const tx = r.x + (Math.random() * 2 - 1) * (r.hx - 2.5), tz = r.z + (Math.random() * 2 - 1) * (r.hz - 2.5);
      if (crowded(r, tx, tz, g)) continue;
      if (!g || !blocked(r, g.obj.position.x, g.obj.position.z, tx, tz)) return { x: tx, z: tz, look: null };
    }
  }
  return null;
}

function play(g, name, fade = .3) {
  if (g.model.alias) { name = g.model.alias[name]; if (!name) return; }
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
  for (let i = 0; i < Math.max(n, (opts.askers || 0) + (opts.guides || 0)); i++) {
    const spot = pickSpot(r); if (!spot) continue;
    let mi; do { mi = Math.floor(Math.random() * models.length); } while (used.has(mi) && used.size < models.length);
    used.add(mi);
    const m = models[mi], obj = new THREE.Group(), body = skClone(m.scene);
    body.scale.setScalar(m.scale); obj.add(body);
    const sitting = !opts.noWheelchair && wheelchair && sinceChair >= 20 && Math.random() < .08;
    sinceChair = sitting ? 0 : sinceChair + 1;
    // the wheelchair-sit animation sits at floor level, so lift the person onto the seat
    if (sitting) { const w = skClone(wheelchair); w.scale.setScalar(m.scale); obj.add(w); body.position.y = .24 * m.scale; }
    obj.position.set(spot.x, 0, spot.z);
    if (spot.look) obj.rotation.y = Math.atan2(spot.look.x - spot.x, spot.look.z - spot.z);
    else obj.rotation.y = Math.random() * Math.PI * 2;
    r.group.add(obj);
    const g = { obj, model: m, mixer: new THREE.AnimationMixer(body), anim: null, action: null, sitting,
      state: "look", t: 2 + Math.random() * 6, target: null, look: spot.look, lookEx: spot.ex, room: r };
    const role = i < (opts.askers || 0) ? "asker" : i < (opts.askers || 0) + (opts.guides || 0) && !sitting ? "guide" : null;
    if (role && opts.makeBubble) makeAsker(g, role, opts.makeBubble);
    play(g, sitting ? "wheelchair-sit" : "idle", 0);
    g.mixer.update(Math.random() * 2);
    r.guests.push(g);
  }
}

// ---------- comments: now and then a nearby guest says something simple ----------
let commentT = 4, speaking = null, lineFor = () => null;
export function setLines(fn) { lineFor = fn; }
function speech(en, ja) {
  const c = document.createElement("canvas"), g = c.getContext("2d");
  g.font = "800 44px Nunito, system-ui, sans-serif"; const w1 = g.measureText(en).width;
  g.font = "600 26px 'Noto Sans JP', sans-serif"; const w2 = ja ? g.measureText(ja).width : 0;
  const W = Math.ceil(Math.max(w1, w2) + 60), H = ja ? 132 : 96;
  c.width = W; c.height = H + 22;
  g.fillStyle = "#fff"; g.strokeStyle = "rgba(60,40,20,.35)"; g.lineWidth = 4;
  g.beginPath(); g.roundRect(2, 2, W - 4, H - 4, 26); g.fill(); g.stroke();
  g.beginPath(); g.moveTo(W / 2 - 14, H - 4); g.lineTo(W / 2, H + 18); g.lineTo(W / 2 + 14, H - 4); g.fill();
  g.textAlign = "center"; g.textBaseline = "middle"; g.fillStyle = "#1d4f75"; g.font = "800 44px Nunito, system-ui, sans-serif"; g.fillText(en, W / 2, ja ? 46 : H / 2);
  if (ja) { g.fillStyle = "#6b5a44"; g.font = "600 26px 'Noto Sans JP', sans-serif"; g.fillText(ja, W / 2, 96); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: true }));
  const k = .0042; sp.scale.set(c.width * k, c.height * k, 1); sp.renderOrder = 5;
  return sp;
}
export function say(g, en, ja, secs = 3.5) {
  hush();
  const sp = speech(en, ja); sp.position.y = HEIGHT + .55 + sp.scale.y / 2; g.obj.add(sp);
  speaking = { g, sp, t: secs };
}
function hush() { if (!speaking) return; speaking.g.obj.remove(speaking.sp); speaking.sp.material.map.dispose(); speaking.sp.material.dispose(); speaking = null; }
function commentTick(rooms, dt, player) {
  if (speaking && (speaking.t -= dt) <= 0) hush();
  if ((commentT -= dt) > 0 || speaking) return;
  commentT = 7 + Math.random() * 9;
  const near = rooms.flatMap(r => (r.guests || []).map(g => ({ g, r }))).filter(({ g }) => !g.asker && !g.mascot && g.state === "look" &&
    Math.hypot(g.obj.position.x - player.x, g.obj.position.z - player.z) < 9);
  if (!near.length) return;
  const { g, r } = near[Math.floor(Math.random() * near.length)];
  const line = lineFor(r, g.lookEx); if (line) say(g, line[0], line[1]);
}

// ---------- a guest who follows you to an exhibit they want to see ----------
let follower = null, sceneRef = null;
export function setScene(s) { sceneRef = s; }
export function startFollow(g) {
  const r = g.room;
  r.guests = r.guests.filter(x => x !== g);
  r.clickables = r.clickables.filter(m => m.userData.guest !== g);
  if (g.bubble) { g.obj.remove(g.bubble); g.bubble = null; }
  g.obj.traverse(o => { if (o.userData.guest) o.visible = false; });
  const p = g.obj.getWorldPosition(new THREE.Vector3());
  g.obj.parent.remove(g.obj); sceneRef.add(g.obj); g.obj.position.copy(p);
  g.asker = false; g.state = "follow"; follower = g;
}
export const following = () => follower;
export function endFollow(r) {
  const g = follower; if (!g) return; follower = null;
  sceneRef.remove(g.obj);
  if (r && r.group) { r.group.add(g.obj); g.room = r; g.state = "look"; g.t = 6; r.guests = r.guests || []; r.guests.push(g); play(g, "idle"); }
  else g.mixer.stopAllAction();
}
function followTick(dt, player, yaw, lookAt) {
  const g = follower; if (!g) return;
  const p = g.obj.position;
  const want = { x: player.x + Math.sin(yaw) * 1.7, z: player.z + Math.cos(yaw) * 1.7 };  // a little behind you
  const dx = want.x - p.x, dz = want.z - p.z, d = Math.hypot(dx, dz);
  if (d > 7) { p.set(want.x, 0, want.z); }                              // went through a door: catch up
  else if (d > .6) {
    const step = Math.min(d, (d > 2.5 ? 5 : 3) * dt);
    p.x += dx / d * step; p.z += dz / d * step;
    g.obj.rotation.y += angDiff(Math.atan2(dx, dz), g.obj.rotation.y) * Math.min(1, dt * 8);
    play(g, "walk");
  } else {
    const t = lookAt || player;
    g.obj.rotation.y += angDiff(Math.atan2(t.x - p.x, t.z - p.z), g.obj.rotation.y) * Math.min(1, dt * 4);
    play(g, "idle");
  }
  g.mixer.update(dt);
}

// turn a guest into one who wants to talk (question "?" or guide "🗺️")
function makeAsker(g, role, makeBubble) {
  const r = g.room;
  g.asker = true; g.role = role;
  g.bubble = makeBubble(role); g.bubble.position.y = HEIGHT + .45; g.obj.add(g.bubble);
  // a generous invisible box so the guest is easy to click
  const hit = new THREE.Mesh(new THREE.BoxGeometry(.9, HEIGHT + .7, .9), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
  hit.position.y = (HEIGHT + .7) / 2; hit.userData.guest = g; g.obj.add(hit); r.clickables.push(hit);
  if (g.state === "walk") play(g, g.sitting ? "wheelchair-sit" : "idle");
  g.state = "wait"; g.t = 1e9;
}
// a wandering guest in this room thinks of a new question
export function newAsker(r, makeBubble, not) {
  const pool = (r.guests || []).filter(g => !g.asker && !g.mascot && g !== not);
  const g = pool.length ? pool[Math.floor(Math.random() * pool.length)] : (not && !not.asker ? not : null);
  if (!g) return false;
  makeAsker(g, "asker", makeBubble);
  return true;
}
// stop being an asker (answered)
export function doneAsking(g) {
  g.asker = false; g.question = null;
  if (g.bubble) { g.obj.remove(g.bubble); g.bubble = null; }
  g.room.clickables = g.room.clickables.filter(m => m.userData.guest !== g);
  g.obj.children.filter(o => o.userData.guest).forEach(o => g.obj.remove(o));
  g.state = "look"; g.t = 2;
}

// ---------- mascots (Kenney Cube Pets, made costume-sized) ----------
const MASCOT_H = 1.5;
const mascotModels = {}, mascotLoading = {};
const mascotWhere = {};            // mascot id -> room it is in right now (only one place at a time)
function partyHat(scale, box) {
  // a little striped party hat with a pompom, like a theme-park costume
  const g = new THREE.Group();
  const tex = (() => { const c = document.createElement("canvas"); c.width = 64; c.height = 64; const x = c.getContext("2d");
    for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? "#ffffff" : "#e8731c"; x.fillRect(i * 8, 0, 8, 64); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const cone = new THREE.Mesh(new THREE.ConeGeometry(.17, .42, 16), new THREE.MeshLambertMaterial({ map: tex }));
  cone.position.y = .21; g.add(cone);
  const pom = new THREE.Mesh(new THREE.SphereGeometry(.065, 10, 8), new THREE.MeshLambertMaterial({ color: 0xffffff })); pom.position.y = .44; g.add(pom);
  g.position.set((box.min.x + box.max.x) / 2 * scale + .12, box.max.y * scale - .06, (box.min.z + box.max.z) / 2 * scale);
  g.rotation.z = -.22;
  return g;
}
function loadMascot(id) {
  if (mascotModels[id]) return Promise.resolve(mascotModels[id]);
  return mascotLoading[id] ||= new Promise(res => loader.load(`models/pets/${id}.glb`, g => {
    markShared(g.scene);
    const box = new THREE.Box3().setFromObject(g.scene), h = box.max.y - box.min.y || 1;
    res(mascotModels[id] = { scene: g.scene, clips: g.animations, scale: MASCOT_H / h, box, alias: { idle: "static", walk: "walk", "wheelchair-sit": "static" } });
  }, undefined, () => res(null)));
}
export function spawnMascots(r, list, force) {
  for (const [id, ja, en] of list) {
    if (mascotWhere[id] && mascotWhere[id].group) continue;
    const chance = force ? 1 : r.topic.lobby ? .9 : r.topic.hall ? .4 : .2;
    if (Math.random() > chance) continue;
    if ((r.guests || []).filter(g => g.mascot).length >= (r.topic.lobby ? 4 : 3)) break;
    mascotWhere[id] = r;
    loadMascot(id).then(m => {
      if (!m || !r.group || mascotWhere[id] !== r) return;
      const spot = pickSpot(r); if (!spot) { delete mascotWhere[id]; return; }
      const obj = new THREE.Group(), body = skClone(m.scene); body.scale.setScalar(m.scale); obj.add(body);
      obj.add(partyHat(m.scale, m.box));
      obj.position.set(spot.x, 0, spot.z); obj.rotation.y = Math.random() * Math.PI * 2; r.group.add(obj);
      const g = { obj, model: m, mixer: new THREE.AnimationMixer(body), anim: null, action: null, mascot: id, name: [ja, en],
        state: "look", t: 2 + Math.random() * 5, target: null, look: null, room: r };
      const hit = new THREE.Mesh(new THREE.BoxGeometry(1.2, MASCOT_H + .2, 1.2), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
      hit.position.y = (MASCOT_H + .2) / 2; hit.userData.mascot = g; obj.add(hit); r.clickables.push(hit);
      play(g, "idle", 0);
      r.guests = r.guests || []; r.guests.push(g);
    });
  }
}

export function updateGuests(rooms, dt, player, yaw = 0, lookAt = null) {
  commentTick(rooms, dt, player);
  followTick(dt, player, yaw, lookAt);
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
      if (!g.sitting && !g.mascot && g.anim === "idle" && Math.random() < dt * .04) { play(g, Math.random() < .5 ? "emote-yes" : "interact-right"); setTimeout(() => g.anim !== "walk" && play(g, "idle"), 1600); }
      if (g.t <= 0) {
        const s = pickSpot(r, g);
        if (s) { g.target = s; g.state = "walk"; play(g, g.sitting ? "wheelchair-move-forward" : "walk"); }
        else g.t = 3;
      }
    } else if (g.state === "walk") {
      const dx = g.target.x - p.x, dz = g.target.z - p.z, d = Math.hypot(dx, dz);
      if (d < .1) {
        g.state = "look"; g.look = g.target.look; g.lookEx = g.target.ex; g.t = 4 + Math.random() * 8;
        play(g, g.sitting ? "wheelchair-sit" : "idle");
      } else {
        const want = Math.atan2(dx, dz);
        g.obj.rotation.y += angDiff(want, g.obj.rotation.y) * Math.min(1, dt * 6);
        const step = Math.min(d, SPEED * (g.sitting || g.mascot ? .8 : 1) * dt);
        p.x += dx / d * step; p.z += dz / d * step;
      }
    }
    g.mixer.update(dt);
  }
}
const angDiff = (a, b) => ((a - b + Math.PI * 3) % (Math.PI * 2)) - Math.PI;

// stop tracking a room's guests (their meshes go with the room's group)
export function clearGuests(r) {
  for (const id in mascotWhere) if (mascotWhere[id] === r) delete mascotWhere[id];
  if (speaking && speaking.g.room === r && speaking.g !== follower) hush();
  for (const g of r.guests || []) g.mixer.stopAllAction();
  r.guests = [];
  const i = waiting.findIndex(([x]) => x === r); if (i >= 0) waiting.splice(i, 1);
}
