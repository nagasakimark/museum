// Merge all per-exhibit details. Keys: topic id -> (animal id | item English name) -> [about, "EN / JA", ...]
import { ANIMAL_DETAILS } from "./animals.js";
import { COUNTRY_DETAILS } from "./countries.js";
import { EVERYDAY1 } from "./everyday1.js";
import { EVERYDAY2 } from "./everyday2.js";
import { NATURE1 } from "./nature1.js";
import { WORLD1 } from "./world1.js";
import { SCIENCE1 } from "./science1.js";
import { ART1 } from "./art1.js";
import { ART2 } from "./art2.js";
import { FINAL1 } from "./final1.js";
const parts = [ANIMAL_DETAILS, COUNTRY_DETAILS, EVERYDAY1, EVERYDAY2, NATURE1, WORLD1, SCIENCE1, ART1, ART2, FINAL1];
export const DETAILS = {};
for (const p of parts) for (const [topic, items] of Object.entries(p)) Object.assign(DETAILS[topic] ||= {}, items);
