// node tools/coverage.mjs  — how many exhibits have a longer explanation, and which keys don't match an exhibit
import { NATURE } from "../src/topics_nature.js"; import { WORLD } from "../src/topics_world.js"; import { MORE } from "../src/topics_more.js";
import { ART } from "../src/topics_art.js"; import { PHILOSOPHY } from "../src/topics_philosophy.js"; import { BATCH1 } from "../src/topics_batch1.js";
import { WINGS } from "../src/topics_wings.js";
import { DETAILS } from "../src/details/index.js"; import { DATA } from "../src/data.js";
const T = { ...NATURE, ...WORLD, ...MORE, ...ART, ...PHILOSOPHY, ...BATCH1, ...WINGS };
const R = { ocean: "ocean", polar: "polar", rainforest: "rainforest", savanna: "savanna", desert: "desert", forest: "forest", japan: "japan-animals" };
let total = 0, done = 0; const unknown = [], todo = [];
for (const [id, t] of Object.entries(T)) {
  const keys = t.animals ? DATA.animals.filter(a => R[a.room] === id).map(a => a.id) : t.groups ? DATA.groups.map(g => g.en) : (t.items || []).map(i => i[1]);
  const d = DETAILS[id] || {}; total += keys.length;
  const n = keys.filter(k => d[k]).length; done += n;
  if (n < keys.length) todo.push(`${id} ${n}/${keys.length}`);
  for (const k of Object.keys(d)) if (!keys.includes(k)) unknown.push(id + ":" + k);
}
console.log(`detailed ${done}/${total} exhibits`);
if (unknown.length) console.log("UNMATCHED KEYS:", unknown.join(", "));
if (process.argv[2] === "-v") console.log("todo:", todo.join(" | "));
