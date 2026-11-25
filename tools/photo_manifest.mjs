// Lists every exhibit that could get a photo: node tools/photo_manifest.mjs
// Writes tools/photo_manifest.json, which tools/photos.py reads.
import { writeFileSync } from "node:fs";
const here = new URL("../src/", import.meta.url);
const mods = ["topics_nature", "topics_world", "topics_more", "topics_art", "topics_philosophy", "topics_batch1", "topics_wings"];
const all = {};
for (const m of mods) {
  const x = await import(new URL(m + ".js", here));
  for (const [k, v] of Object.entries(x)) {
    if (!v || typeof v !== "object" || Array.isArray(v) || k.startsWith("DETAILS") || k.startsWith("BACK")) continue;
    for (const [id, t] of Object.entries(v)) if (t && t.en) all[id] = t;
  }
}
const rows = [];
for (const [id, t] of Object.entries(all)) for (const it of t.items || []) rows.push({ topic: id, topicEn: t.en, en: it[1], ja: it[0] });
writeFileSync(new URL("photo_manifest.json", import.meta.url), JSON.stringify(rows, null, 0).replace(/},{/g, "},\n{"));
console.log(rows.length, "exhibits listed");
