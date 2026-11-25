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
import { WINGS_N7 } from "./wings/n7_extremes.js";
import { WINGS_C1 } from "./wings/c1_asia.js";
import { WINGS_C2 } from "./wings/c2_europe.js";
import { WINGS_C3 } from "./wings/c3_world.js";
import { WINGS_N10 } from "./wings/n10_maps.js";
import { WINGS_N11_14 } from "./wings/n11_14.js";
import { WINGS_D1 } from "./wings/d1_japan.js";
import { WINGS_D2 } from "./wings/d2_prefectures.js";
import { WINGS_A1 } from "./wings/a1_animals.js";
import { WINGS_I1 } from "./wings/i1_food.js";
import { WINGS_F1 } from "./wings/f1_science.js";
import { WINGS_B1 } from "./wings/b1_space.js";
import { WINGS_M1 } from "./wings/m1_philosophy.js";
import { WINGS_M2 } from "./wings/m2_philosophy.js";
import { WINGS_E1 } from "./wings/e1_english.js";
import { WINGS_K1 } from "./wings/k1_history.js";
import { WINGS_J1 } from "./wings/j1_people.js";
import { WINGS_H1 } from "./wings/h1_sports.js";
import { WINGS_C4 } from "./wings/c4_culture.js";
import { WINGS_G1 } from "./wings/g1_art.js";

export const WINGS = { ...WINGS_N1, ...WINGS_N2, ...WINGS_N3, ...WINGS_N4, ...WINGS_O1, ...WINGS_O2, ...WINGS_N5, ...WINGS_N6, ...WINGS_N8, ...WINGS_N7, ...WINGS_C1, ...WINGS_C2, ...WINGS_C3, ...WINGS_N10, ...WINGS_N11_14, ...WINGS_D1, ...WINGS_D2, ...WINGS_A1, ...WINGS_I1, ...WINGS_F1, ...WINGS_B1, ...WINGS_M1, ...WINGS_M2, ...WINGS_E1, ...WINGS_K1, ...WINGS_J1, ...WINGS_H1, ...WINGS_C4, ...WINGS_G1 };

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
  // C countries
  "asia": ["southeast-asia", "south-asia", "west-asia"], "europe": ["nordic", "western-europe-2", "eastern-europe"],
  "americas": ["central-america-caribbean", "south-america-2"], "africa": ["africa-2"], "oceania": ["pacific-islands"],
  "regions": ["southeast-asia", "africa-2", "south-america-2", "nordic", "continents-oceans"],
  // N7 extremes
  "animal-records": ["big-small-animals", "fast-slow"], "geo-records": ["long-short-tall", "hot-cold"], "vehicles": ["fast-slow"],
  "landmarks": ["long-short-tall"], "rocks-gems": ["old-new", "heavy-light"], "dinosaurs": ["old-new"], "instruments": ["loud-quiet"],
  "world-tales": ["libraries-world"], "toys-tales": ["libraries-world"], "secondary-schools-world": ["school-buildings-world"],
};

const BACK3 = {
  // N10 maps
  "japan-islands": ["islands-world", "japan-geography"], "japan": ["japan-geography"], "geo-records": ["continents-oceans"],
  "time": ["time-zones-world", "units-history"], "earth-science": ["continents-oceans"],
  // N11-N14
  "festivals-world": ["holidays-world"], "months1": ["japanese-holidays", "holidays-world"], "months2": ["holidays-world"],
  "numbers": ["units-history"], "science-fun": ["magnets", "measuring-tools"], "robots": ["how-computers-work"],
  "inventions": ["how-computers-work"], "words-from-japanese": ["how-internet-works"], "japan-inventions": ["how-internet-works"],
  "human-body": ["senses"], "animal-superpowers": ["senses"], "living-together": ["how-internet-works"],
};

const BACK4 = {
  // D Japan
  "japan": ["pref-hokkaido-tohoku", "pref-kanto", "pref-chubu", "pref-kinki", "pref-chugoku-shikoku", "pref-kyushu-okinawa", "japanese-castles", "trains-japan"],
  "nagasaki": ["nagasaki-prefecture", "nagasaki-festivals", "pref-kyushu-okinawa"], "nagasaki-city": ["nagasaki-festivals", "nagasaki-prefecture"],
  "landmarks": ["japanese-castles"], "vehicles": ["trains-japan"], "sweets": ["wagashi-seasons"], "art-world-crafts": ["crafts-japan"],
  "japanese-food": ["wagashi-seasons"],
  // E English
  "words-from-japanese": ["words-from-languages", "onomatopoeia"], "hello-world": ["uk-us-english", "onomatopoeia", "world-wisdom-words"],
  "town": ["symbols-signs"], "olympics": ["symbols-signs"], "how-computers-work": ["codes"], "games-world": ["tongue-twisters"],
  // M philosophy
  "philosophy-questions": ["thought-experiments-2", "paradoxes", "logic-puzzles", "philosophy-of-happiness"],
  "philosophers": ["eastern-thinkers", "western-thinkers"], "japanese-values": ["philosophy-of-happiness", "eastern-thinkers"],
  "puzzles": ["logic-puzzles"], "living-together": ["philosophy-of-happiness", "ethics-for-kids", "critical-thinking"],
  "human-body": ["mind-and-feelings"], "proverbs": ["world-wisdom-words"],
  "time": ["time-philosophy"], "inventions": ["philosophy-of-science"],
  // B space and earth
  "solar-system": ["moons", "comets-asteroids", "constellations"], "moon-stars": ["moons", "constellations"],
  "space-explore": ["space-japan", "comets-asteroids"], "earth-science": ["volcanoes-world"], "geo-records": ["volcanoes-world"],
  "water-cycle": ["clouds"], "camping-outdoors": ["constellations"],
  // F science
  "science-fun": ["simple-machines", "electricity", "light-color", "sound-science", "states-of-matter"], "weather": ["water-cycle", "light-color"],
  "loud-quiet": ["sound-science"], "how-home-works": ["electricity", "water-cycle"], "magnets": ["electricity"],
  // I food
  "world-dishes": ["noodles-world", "bread-world", "street-food", "soups-world", "spices"], "fruits": ["tropical-fruits"],
  "breakfast-world": ["bread-world", "soups-world"], "nagasaki-food": ["noodles-world"],
  // A animals
  "animals": ["african-mammals", "asian-mammals", "americas-animals", "australia-animals", "whales-dolphins", "sharks-rays"],
  "africa": ["african-mammals"], "asia": ["asian-mammals"], "americas": ["americas-animals"], "oceania": ["australia-animals"],
  "ocean": ["whales-dolphins", "sharks-rays"], "aquarium": ["whales-dolphins", "sharks-rays"], "savanna": ["african-mammals"], "japan-traditions": ["crafts-japan", "japanese-castles"], "festivals-world": ["nagasaki-festivals"],
};

// Each later batch gets its own object so keys never collide.
const EXTRA = [
  {
    "art": ["paintings-italy-spain", "paintings-uk-usa", "art-asia", "architecture-timeline"],
    "art-movements": ["paintings-italy-spain", "paintings-uk-usa"],
    "landmarks": ["architecture-timeline"],
    "orchestra": ["music-genres"],
    "world-dance": ["dance-japan", "music-genres"],
    "art-world-crafts": ["art-asia"],
  },
  {
    "festivals-world": ["world-new-year", "traditional-clothes"],
    "holidays-world": ["world-new-year"],
    "world-dishes": ["markets-world"],
    "toys-tales": ["mythical-creatures"],
    "world-tales": ["mythical-creatures"],
    "family-celebrations": ["birthdays-world"],
    "japan-traditions": ["lucky-symbols"],
    "regions": ["traditional-clothes"],
  },
  {
    "olympics": ["olympic-sports", "paralympic-sports"],
    "ball-sports": ["olympic-sports", "stadiums"],
    "club-origins-sports": ["martial-arts"],
    "games-world": ["japanese-games", "playground-world"],
    "toys-history": ["japanese-games"],
    "landmarks": ["stadiums"],
  },
  {
    "jobs-dream": ["jobs-hospital", "jobs-airport", "jobs-creative", "jobs-nature"],
    "jobs-town": ["jobs-hospital"],
    "heroes": ["women-science", "explorers"],
    "continents-oceans": ["explorers"],
  },
  {
  // K history
  "landmarks": ["ancient-civilizations"], "art-timeline": ["ancient-civilizations"], "writing": ["writing-history"],
  "vehicles": ["transport-history"], "japanese-games": ["toys-history"], "art-japan-history": ["edo-life"],
  },
];

export const BACKLINKS = {};
for (const m of [BACK1, BACK2, BACK3, BACK4, ...EXTRA]) for (const [k, v] of Object.entries(m)) BACKLINKS[k] = [...new Set([...(BACKLINKS[k] || []), ...v])];
