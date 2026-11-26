// Display pieces for My Museum: one low-poly model per room, shown on a plinth in the middle of the room.
// Every room that has one keeps an empty plinth with a sign until the piece is bought at the gift shop.
// Models: Quaternius (CC0).
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone as skClone } from "three/examples/jsm/utils/SkeletonUtils.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// [room, ja, en, stars, size]  size: S small object, M medium, L big animal or vehicle, XL dinosaur
export const DISPLAYS = [
  ["dinosaurs", "ティラノサウルス", "T. rex", 80, "XL"],
  ["dinosaurs-2", "トリケラトプス", "Triceratops", 80, "XL"],
  ["earth-timeline", "ステゴサウルス", "Stegosaurus", 80, "XL"],
  ["evolution-fossils", "アパトサウルス", "Apatosaurus", 80, "XL"],
  ["sharks-rays", "サメ", "Shark", 60, "L"],
  ["whales-dolphins", "クジラ", "Whale", 60, "L"],
  ["ocean", "イルカ", "Dolphin", 60, "L"],
  ["ocean-2", "マンタ", "Manta ray", 60, "L"],
  ["farm", "うし", "Cow", 60, "L"],
  ["horses", "うま", "Horse", 60, "L"],
  ["dog-breeds", "しばいぬ", "Shiba Inu", 50, "M"],
  ["americas-animals", "アルパカ", "Alpaca", 60, "L"],
  ["mountain-animals", "オスの シカ", "Stag", 60, "L"],
  ["winter-animals", "ハスキー", "Husky", 50, "M"],
  ["city-animals", "キツネ", "Fox", 50, "M"],
  ["forest", "シカ", "Deer", 60, "L"],
  ["trees", "アカシアの 木", "Acacia tree", 50, "M"],
  ["deserts-world", "サボテン", "Cactus", 40, "M"],
  ["islands-world", "ヤシの 木", "Palm tree", 50, "M"],
  ["rocks-gems", "クリスタル", "Crystal", 50, "S"],
  ["mushrooms", "キノコ", "Mushroom", 40, "S"],
  ["vegetables", "ニンジン", "Carrot", 40, "S"],
  ["solar-system", "ちきゅう", "Earth", 60, "M"],
  ["space-explore", "たんさしゃ", "Space rover", 60, "L"],
  ["astronaut-life", "カエルの うちゅうひこうし", "Frog astronaut", 70, "M"],
  ["traffic-safety", "しんごうき", "Traffic light", 40, "M"],
  ["ships-sea", "はんせん", "Sailing ship", 70, "L"],
  ["explorers", "ほかけぶね", "Sailing boat", 50, "M"],
  ["nordic", "バイキングの ふね", "Viking ship", 70, "L"],
  ["world-transport", "きゃくせん", "Cruise ship", 70, "L"],
  ["maps-compass", "コンパス", "Compass", 40, "S"],
  ["middle-ages", "よろい", "Suit of armour", 60, "M"],
  ["ancient-greece", "ギリシャの はしら", "Greek column", 50, "M"],
  ["money-history", "たからばこ", "Treasure chest", 50, "S"],
  ["writing-history", "ふるい 本", "Old book", 40, "S"],
  ["spies-codes", "なんきんじょう", "Padlock", 40, "S"],
  ["camping-outdoors", "テント", "Tent", 50, "M"],
  ["markets-world", "おみせの やたい", "Market stall", 60, "L"],
  ["medicine-health", "きゅうきゅうばこ", "First aid kit", 40, "S"],
  ["communication-history", "ラジオ", "Radio", 40, "S"],
  ["how-towns-work", "かねの とう", "Bell tower", 60, "L"],
];
// longest side across, height (metres); plinth radius
const SIZE = { S: [1.1, 1.1, 1.05], M: [1.9, 2.0, 1.3], L: [2.6, 2.1, 1.55], XL: [3.3, 2.6, 1.8] };
// pieces that need a little help to sit nicely
const TWEAK = { "middle-ages": { stand: true }, "solar-system": { float: .35, spin: .5 }, "rocks-gems": { spin: .4 } };
export const displayFor = id => DISPLAYS.find(d => d[0] === id) || null;
export const plinthRadius = id => SIZE[displayFor(id)?.[4] || "M"][2];

// ---------- a bright, toy-like look ----------
// The models come with dull, half-metal materials that look muddy in our warm light.
// Repaint them: livelier colours, a soft sheen, real shine on metal and gold, and a glow on gems.
const SHINY = /metal|gold|silver|iron|steel|brass|chrome|armor|armour/i;
const LOOK = { "middle-ages": "chrome", "rocks-gems": "gem", "money-history": "gold-bits", "maps-compass": "gold-bits", "spies-codes": "shine" };
// extra colour for the big animals, so they read from across the room
const POP = { dinosaurs: .9, "dinosaurs-2": .9, "earth-timeline": .9, "evolution-fossils": .9, "solar-system": .8, "whales-dolphins": .5, "sharks-rays": .5, ocean: .5, "ocean-2": .5 };
// metal needs something to reflect: a small studio-style reflection, made once
let env = null;
export function setDisplayRenderer(r) {
  if (env) return;
  const pm = new THREE.PMREMGenerator(r); env = pm.fromScene(new RoomEnvironment(), .04).texture; pm.dispose();
}
const metal = (color, rough = .18) => env ? new THREE.MeshStandardMaterial({ color, metalness: 1, roughness: rough, envMap: env, envMapIntensity: 1.35 })
  : new THREE.MeshPhongMaterial({ color, specular: "#ffffff", shininess: 140 });
function lively(c, ds = .3, dl = .22, minS = 0) {
  const h = {}; c.getHSL(h);
  const s = h.s < .06 ? h.s : Math.max(minS, Math.min(1, h.s * (1 + ds) + .06));   // greys stay grey
  return new THREE.Color().setHSL(h.h, s, Math.min(.82, h.l * (1 + dl) + .1));
}
export function brighten(root, id) {
  const look = LOOK[id], done = new Map();
  root.traverse(o => {
    if (!o.isMesh) return;
    const fix = m => {
      if (done.has(m)) return done.get(m);
      const base = m.color ? m.color.clone() : new THREE.Color("#cccccc"), name = m.name || "";
      let n;
      if (look === "chrome") n = metal("#e8eef6", .14);
      else if (look === "gem") n = new THREE.MeshPhongMaterial({ color: lively(base, .6, .5), specular: "#ffffff", shininess: 160, emissive: lively(base, .5, .1).multiplyScalar(.45), transparent: true, opacity: .92 });
      else if (look === "shine") n = metal("#c9d3de", .25);
      else if (SHINY.test(name) || (look === "gold-bits" && base.r > base.b * 1.6 && base.g > base.b * 1.3)) {
        const goldish = base.r > base.b * 1.4;
        n = metal(goldish ? "#ffc93c" : "#dfe6ee", .2);
      } else {
        const c = lively(base, POP[id] ?? .3, id === "solar-system" ? -.25 : POP[id] ? .3 : .22, POP[id] ? .62 : 0);
        n = new THREE.MeshPhongMaterial({ color: c, specular: "#3a3a3a", shininess: 28, emissive: c.clone().multiplyScalar(.14) });
      }
      n.name = name; n.flatShading = !!m.flatShading; n.vertexColors = !!m.vertexColors; n.side = m.side;
      if (m.map) n.map = m.map;
      done.set(m, n); return n;
    };
    o.material = Array.isArray(o.material) ? o.material.map(fix) : fix(o.material);
  });
}
const loader = new GLTFLoader(), cache = {};
function load(id) {
  return cache[id] ||= new Promise(res => loader.load(`models/decor/${id}.glb`, g => { brighten(g.scene, id); res(g); }, undefined, () => res(null)));
}
const live = new Set();   // spinning / animated pieces currently built

// Build the plinth (and the piece, if bought) at x,z. Returns {collider, sight, group, hit}.
export function buildDisplay(r, x, z, facing, owned, mats, makeTex) {
  const d = displayFor(r.topic.id); if (!d) return null;
  const [id, ja, en, , size] = d, [W, Hh, R] = SIZE[size];
  const grp = new THREE.Group(); grp.position.set(x, 0, z); r.group.add(grp);
  // round stone plinth with a brass rim
  const pl = new THREE.Mesh(new THREE.CylinderGeometry(R, R + .08, .45, 40), mats.plinth); pl.position.y = .225; grp.add(pl);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(R + .02, .035, 6, 48), mats.brass); rim.rotation.x = Math.PI / 2; rim.position.y = .45; grp.add(rim);
  const hit = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 2.6, 16), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
  hit.position.y = 1.3; grp.add(hit);
  const plaque = (lines, w, h) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: makeTex(lines, w, h), transparent: true }));
    m.userData.own = true; return m;
  };
  if (owned) {
    const turn = new THREE.Group(); turn.position.y = .45; grp.add(turn);
    const t = TWEAK[id] || {};
    let lift = 0;
    if (t.stand) {   // a simple mannequin pole for armour
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, 1.35, 10), mats.brass); pole.position.y = .68; turn.add(pole);
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(.32, .36, .06, 20), mats.brass); foot.position.y = .03; turn.add(foot);
      lift = 1.0;
    }
    load(id).then(g => {
      if (!g || !r.group) return;
      const body = g.animations.length ? skClone(g.scene) : g.scene.clone(true);
      let mixer = null;
      if (g.animations.length) { mixer = new THREE.AnimationMixer(body); mixer.clipAction(g.animations[0]).play(); mixer.update(.4); }
      body.updateMatrixWorld(true);
      const b = new THREE.Box3().setFromObject(body), sz = b.getSize(new THREE.Vector3());
      const across = Math.max(sz.x, sz.z), k = Math.min(W / across, (t.stand ? .9 : Hh) / sz.y);
      body.scale.setScalar(k);
      const c = b.getCenter(new THREE.Vector3());
      body.position.set(-c.x * k, -b.min.y * k + lift + (t.float || 0), -c.z * k);
      turn.add(body);
      const rec = { turn, mixer, spin: t.spin ?? .18, room: r };
      live.add(rec); r.displayRec = rec;
    });
    const p = plaque([[ja, "#3a2a18", 46], [en, "#2f6f9f", 38]], .9, .32);
    p.position.set(Math.sin(facing) * (R + .1), .3, Math.cos(facing) * (R + .1)); p.rotation.y = facing; p.rotation.x = -.35; grp.add(p);
    hit.userData.display = { id, ja, en, owned: true };
  } else {
    // an empty spot: a dashed ring on top and a little sign
    const ring = new THREE.Mesh(new THREE.CircleGeometry(R - .08, 40), new THREE.MeshBasicMaterial({ map: makeTex("ring", 1, 1), transparent: true }));
    ring.material.userData.own = true; ring.rotation.x = -Math.PI / 2; ring.position.y = .452; grp.add(ring);
    const sign = new THREE.Group(); sign.position.y = .45; sign.rotation.y = facing; grp.add(sign);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(.035, .035, 1.0, 8), mats.brass); post.position.y = .5; sign.add(post);
    const board = plaque([["🛍️ ここに かざれるよ！", "#6b4d2c", 50], ["A display can go here!", "#2f6f9f", 40], [`「${ja}」`, "#3a2a18", 46], [`${en}`, "#3a2a18", 38], ["ギフトショップで 買おう", "#6b4d2c", 40], ["Get it at the Gift Shop", "#2f6f9f", 34]], 1.6, 1.28);
    board.position.y = 1.55; board.material.side = THREE.DoubleSide; sign.add(board);
    hit.userData.display = { id, ja, en, owned: false };
  }
  const collider = { minX: x - R, maxX: x + R, minZ: z - R, maxZ: z + R };
  // guests like to stop and look at the display from the front
  const sight = { pos: new THREE.Vector3(x + Math.sin(facing) * R, 0, z + Math.cos(facing) * R), normal: new THREE.Vector3(Math.sin(facing), 0, Math.cos(facing)) };
  return { collider, sight, hit };
}
export function forgetDisplay(r) { if (r.displayRec) { live.delete(r.displayRec); r.displayRec = null; } }
export function updateDisplays(dt) {
  for (const d of live) {
    if (!d.room.group) { live.delete(d); continue; }
    d.turn.rotation.y += d.spin * dt;
    d.mixer?.update(dt);
  }
}
