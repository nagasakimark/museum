// Curriculum wings (backlog section N) and thin-room sisters (section O).
// Item: [ja, en, pic, fact, rows, year]
import { WINGS_N1 } from "./wings/n1_families.js";
import { WINGS_N2 } from "./wings/n2_can.js";
import { WINGS_N3 } from "./wings/n3_jhs.js";
import { WINGS_N4 } from "./wings/n4_summer.js";
import { WINGS_O1 } from "./wings/o1_animals.js";
import { WINGS_O2 } from "./wings/o2_animals.js";
import { WINGS_N5 } from "./wings/n5_seasons.js";
import { WINGS_N6 } from "./wings/n6_home.js";
import { WINGS_N8 } from "./wings/n8_school.js";

export const WINGS = { ...WINGS_N1, ...WINGS_N2, ...WINGS_N3, ...WINGS_N4, ...WINGS_O1, ...WINGS_O2, ...WINGS_N5, ...WINGS_N6, ...WINGS_N8 };

// Extra doors from rooms that were built earlier, so the new rooms can be found.
const BACK1 = {
  "pets": ["pets-as-family", "animal-families"],
  "daily-life": ["generations", "family-names-world"],
  "time": ["generations"],
  "inventions": ["generations"],
  "hello-world": ["family-names-world"],
  "writing": ["family-names-world"],
  "months1": ["family-celebrations"],
  "dog-breeds": ["pets-as-family"],
  "japanese-values": ["generations"],
  // N2
  "animal-records": ["animal-superpowers", "how-animals-move"],
  "insects": ["animal-superpowers"],
  "birds": ["how-animals-move"],
  "robots": ["robots-can"],
  "human-body": ["body-can"],
  "games-world": ["human-skills-world"],
  "olympics": ["body-can"],
  // N3
  "school-subjects": ["jhs-life-japan", "secondary-schools-world"],
  "school-events": ["jhs-life-japan"],
  "ball-sports": ["club-origins-sports"],
  "orchestra": ["club-origins-culture"],
  "school-lunch-world": ["secondary-schools-world"],
  "jobs-dream": ["jhs-life-japan"],
  // N4
  "months2": ["family-celebrations", "summer-japan"],
  "festivals-world": ["family-celebrations", "summer-japan", "summer-world"],
  "moon-stars": ["camping-outdoors", "seaside-science"],
  "japan": ["school-trips-japan"],
  "nagasaki-city": ["school-trips-japan"],
  "landmarks": ["school-trips-japan"],
  // O — animal sister rooms
  "ocean": ["seaside-science", "ocean-2"],
  "aquarium": ["seaside-science", "ocean-2"],
  "deepsea": ["ocean-2", "cave-deep-earth"],
  "polar": ["animal-families", "arctic"],
  "japan-animals": ["animal-families", "japan-animals-2", "mountain-animals"],
  "endangered-japan": ["japan-animals-2", "wetlands-mangroves", "islands-animals"],
  "rainforest": ["rainforest-2"],
  "savanna": ["animal-families", "savanna-2"],
  "desert": ["desert-2"],
  "forest": ["camping-outdoors", "mountain-animals", "japan-animals-2"],
  "town": ["city-animals"],
  "japan-islands": ["islands-animals"],
  "earth-science": ["cave-deep-earth"],
  "rocks-gems": ["cave-deep-earth"],
  "environment": ["wetlands-mangroves"],
};

const BACK2 = {
  // N5 seasons
  "weather": ["why-seasons"], "solar-system": ["why-seasons"], "summer-world": ["why-seasons"],
  "months1": ["seasons-72"], "months2": ["seasons-72"],
  "writing": ["haiku-seasons", "libraries-world"], "japan-traditions": ["haiku-seasons", "japanese-home"], "proverbs": ["haiku-seasons"],
  "fruits": ["shun-food"], "vegetables": ["shun-food"], "nagasaki-food": ["shun-food"], "japanese-food": ["shun-food"],
  "birds": ["animals-through-seasons"], "insects": ["animals-through-seasons"],
  // N6 home
  "houses-world": ["japanese-home", "rooms-world"], "inventions": ["home-objects-history"], "japan-inventions": ["home-objects-history"],
  "daily-life": ["chores-world"], "environment": ["chores-world"], "science-fun": ["how-home-works"], "generations": ["home-objects-history"],
  // N8 school places
  "school-subjects": ["inside-japanese-school"], "school-events": ["inside-japanese-school"], "jhs-life-japan": ["inside-japanese-school"],
  "world-tales": ["libraries-world"], "toys-tales": ["libraries-world"], "secondary-schools-world": ["school-buildings-world"],
};

export const BACKLINKS = {};
for (const m of [BACK1, BACK2]) for (const [k, v] of Object.entries(m)) BACKLINKS[k] = [...new Set([...(BACKLINKS[k] || []), ...v])];
