// Merge all per-exhibit details. Keys: topic id -> (animal id | item English name) -> [about, "EN / JA", ...]
import { ANIMAL_DETAILS } from "./animals.js";
import { COUNTRY_DETAILS } from "./countries.js";
import { EVERYDAY1 } from "./everyday1.js";
import { EVERYDAY2 } from "./everyday2.js";
const parts = [ANIMAL_DETAILS, COUNTRY_DETAILS, EVERYDAY1, EVERYDAY2];
export const DETAILS = {};
for (const p of parts) for (const [topic, items] of Object.entries(p)) Object.assign(DETAILS[topic] ||= {}, items);
