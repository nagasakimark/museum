// The grand lobby opens onto broad "wing halls"; each hall has a door for every
// room in its wing. gates: [topicId, icon]
// more: rooms of the wing that have no door in the hall; they are reached through doors in other rooms of the wing
const H = (ja, en, c, icon, intro, gates, more = []) => ({ ja, en, c, icon, intro, hall: true, items: [], gates, more });

export const HALLS = {
  "wing-wonder": H("ふしぎ・おもしろ", "Weird & Wonderful", "#8e44ad", "🌀",
    "{妖怪|ようかい}、ミステリー、目の さっかく、体の なぜ？、{忍者|にんじゃ}に まんが。「えっ！？」と おどろく ものを 集めた へやです。 Wow, that's strange!",
    [["yokai", "👺"], ["mysteries", "🗿"], ["optical-illusions", "🌀"], ["why-body", "🤧"], ["spooky-science", "👻"], ["household-spirits", "🧚"], ["manga-anime", "💬"], ["video-games-history", "🎮"], ["ninja", "🥷"], ["famous-animals", "🐕"], ["cambrian-weirdos", "🦐"], ["hidden-places", "🕳️"]]),
  "wing-animals": H("どうぶつ", "Animals", "#4f8a3c", "🦁",
    "陸、海、空 —— 地球には 800万 しゅるい いじょうの 生きものが いると 言われます。気に なる ドアを えらんで 会いに 行こう！ What animals do you like?",
    [["animals", "🐾"], ["african-mammals", "🦁"], ["asian-mammals", "🐼"], ["ocean", "🐠"], ["whales-dolphins", "🐋"], ["birds-world", "🦜"], ["insects", "🦋"], ["reptiles", "🐊"], ["pets", "🐕"], ["farm", "🐄"], ["animal-records", "🏆"], ["night-animals", "🦉"]]),
  "wing-nature": H("自然と 地球", "Nature & Earth", "#2f7f6f", "🌋",
    "山、川、火山、天気、そして 46億年の 地球の 歴史。わたしたちが すむ 星の ひみつを さがそう。 How does the Earth work?",
    [["plants", "🌻"], ["trees", "🌳"], ["flowers-world", "🌷"], ["weather", "⛅"], ["volcanoes-world", "🌋"], ["mountains-world", "🏔️"], ["rivers-lakes", "🏞️"], ["rocks-gems", "💎"], ["earth-timeline", "🌍"], ["dinosaurs", "🦖"], ["climate-zones", "🗺️"], ["environment", "♻️"]]),
  "wing-space": H("{宇宙|うちゅう}", "Space", "#34407a", "🪐",
    "夜空の 向こうには 何が ある？ 太陽、わく星、星ざ、ロケット —— {宇宙|うちゅう}への 旅に 出発！ Let's go to space!",
    [["solar-system", "planet:#ffb52e"], ["moon-stars", "🌕"], ["moons", "🌙"], ["constellations", "✨"], ["comets-asteroids", "☄️"], ["space-explore", "🚀"], ["space-japan", "🛰️"], ["why-seasons", "🌏"], ["telescopes-observatories", "🔭"], ["astronaut-life", "👩‍🚀"], ["space-records", "🏆"]]),
  "wing-science": H("科学", "Science", "#2a76b8", "🔬",
    "なぜ？ どうして？ を 実験で たしかめるのが 科学。体、光、音、電気、じしゃくの ふしぎに せまろう。 Science is fun!",
    [["science-fun", "🧪"], ["human-body", "🫀"], ["senses", "👀"], ["magnets", "🧲"], ["electricity", "⚡"], ["light-color", "🌈"], ["sound-science", "🔊"], ["states-of-matter", "🧊"], ["simple-machines", "⚙️"], ["water-cycle", "💧"], ["earth-science", "🌐"], ["philosophy-of-science", "🔍"]]),
  "wing-tech": H("技術と 発明", "Technology & Inventions", "#5b6470", "⚙️",
    "車輪から インターネットまで。人間の アイデアが 世界を 変えて きました。次の 発明家は きみかも！ What's your favorite invention?",
    [["inventions", "💡"], ["robots", "🤖"], ["how-computers-work", "💻"], ["how-internet-works", "🌐"], ["vehicles", "🚗"], ["trains-japan", "🚄"], ["transport-history", "✈️"], ["communication-history", "📞"], ["home-objects-history", "📺"], ["japan-inventions", "🍜"], ["measuring-tools", "📏"], ["codes", "📡"]]),
  "wing-history": H("歴史", "History", "#8a5a2b", "🏛️",
    "ピラミッドの 時代、たんけん家の 船、{江戸|えど}の 町。むかしの 人たちは どんな くらしを して いたのかな？ Let's travel in time!",
    [["ancient-civilizations", "🏛️"], ["japan-history", "🏯"], ["edo-life", "🏮"], ["japanese-castles", "🏯"], ["heroes", "🌟"], ["explorers", "🧭"], ["women-science", "👩‍🔬"], ["writing-history", "📜"], ["money-history", "🪙"], ["clothes-history", "👘"], ["toys-history", "🪀"], ["units-history", "⚖️"]]),
  "wing-art": H("美術と 音楽", "Art & Music", "#b8457a", "🎨",
    "名画、ちょうこく、たてもの、オーケストラ、世界の おどり。人の 心を うごかす 作品に 出会おう。 What do you like, art or music?",
    [["art", "🖼️"], ["art-timeline", "🎨"], ["paintings-france", "🌻"], ["paintings-italy-spain", "🖌️"], ["japanese-painters", "🗻"], ["art-asia", "🏮"], ["sculpture-world", "🗿"], ["architecture-timeline", "🏰"], ["orchestra", "🎻"], ["composers", "🎼"], ["world-instruments", "🪕"], ["world-dance", "💃"]]),
  "wing-world": H("世界の 国と 文化", "World & Cultures", "#2f8fb0", "🌏",
    "世界には 190いじょうの 国が あります。ことば、服、家、お祭り —— どこへ 行って みたい？ Where do you want to go?",
    [["regions", "🗺️"], ["continents-oceans", "🌊"], ["asia", "🏯"], ["europe", "🏰"], ["africa", "🦒"], ["americas", "🗽"], ["oceania", "🦘"], ["landmarks", "🗼"], ["hello-world", "👋"], ["traditional-clothes", "👘"], ["festivals-world", "🎉"], ["houses-world", "🏠"]]),
  "wing-japan": H("日本と 長崎", "Japan & Nagasaki", "#c0392b", "🗾",
    "わたしたちの 国、そして わたしたちの 町。知って いる つもりでも、まだまだ ひみつが いっぱい！ I love Japan. I love Nagasaki.",
    [["japan", "🗾"], ["japan-geography", "🏔️"], ["pref-kyushu-okinawa", "🌺"], ["japan-unesco", "⛩️"], ["japan-traditions", "🎎"], ["crafts-japan", "🏺"], ["japanese-gardens", "🌸"], ["onsen", "♨️"], ["nagasaki", "⛵"], ["nagasaki-city", "🌉"], ["nagasaki-festivals", "🐉"], ["nagasaki-food", "🍜"]]),
  "wing-food": H("食べもの", "Food", "#d9822b", "🍙",
    "世界の 料理、パン、めん、おかし。そして 食べものは どこから 来るの？ 食べものの 世界を めぐろう。 What food do you like?",
    [["world-dishes", "🍛"], ["japanese-food", "🍣"], ["food-origins", "🌽"], ["noodles-world", "🍜"], ["bread-world", "🥖"], ["street-food", "🌮"], ["sweets", "🍰"], ["fruits", "🍎"], ["vegetables", "🥕"], ["spices", "🌶️"], ["rice", "🍚"], ["table-manners", "🥢"]]),
  "wing-sports": H("スポーツと 遊び", "Sports & Play", "#3a9a5a", "⚽",
    "ボール、オリンピック、武道、そして 世界の 遊び。体を 動かす のが すきな 人は ここへ！ What sport do you like?",
    [["ball-sports", "⚽"], ["olympics", "🏅"], ["olympic-sports", "🏊"], ["paralympic-sports", "🦽"], ["winter-sports", "⛷️"], ["martial-arts", "🥋"], ["sports-world", "🏏"], ["stadiums", "🏟️"], ["games-world", "♟️"], ["japanese-games", "🪁"], ["playground-world", "🛝"], ["logic-puzzles", "🧩"]]),
  "wing-people": H("人と 仕事", "People & Jobs", "#7a5ab0", "👩‍🚒",
    "町を ささえる 仕事、ゆめの 仕事、みんなで くらす ための ちえ。しょうらい、何に なりたい？ What do you want to be?",
    [["jobs-dream", "🌠"], ["jobs-town", "👮"], ["jobs-hospital", "🩺"], ["jobs-airport", "🛫"], ["jobs-creative", "🎬"], ["jobs-nature", "🌾"], ["human-skills-world", "🤹"], ["generations", "👨‍👩‍👧"], ["family-names-world", "📛"], ["living-together", "🤝"], ["sdgs", "🎯"], ["bosai", "⛑️"]]),
  "wing-life": H("くらしと 学校", "Everyday Life", "#c79a2a", "🏠",
    "毎日の くらし、家、学校、きせつ、行事。いつもの 毎日を 世界と くらべると ふしぎが いっぱい！ What time do you get up?",
    [["daily-life", "⏰"], ["school-subjects", "📚"], ["inside-japanese-school", "🏫"], ["school-buildings-world", "🌍"], ["jhs-life-japan", "🎒"], ["japanese-home", "🏡"], ["how-home-works", "🚿"], ["seasons-72", "🍂"], ["months1", "📅"], ["holidays-world", "🎊"], ["birthdays-world", "🎂"], ["time", "🕰️"]]),
  "wing-words": H("ことばと 考える", "Words & Ideas", "#5a7f9a", "💬",
    "英語、文字、ことわざ、そして「なぜ？」と 考える {哲学|てつがく}。ことばと 考えの 世界へ ようこそ。 Let's think together!",
    [["writing", "🔤"], ["wasei-eigo", "🗣️"], ["words-from-japanese", "🍣"], ["onomatopoeia", "💥"], ["uk-us-english", "🔠"], ["tongue-twisters", "👅"], ["proverbs", "📖"], ["symbols-signs", "🚸"], ["philosophy-questions", "❓"], ["philosophers", "🤔"], ["paradoxes", "🌀"], ["ethics-for-kids", "⚖️"]]),
};
export const LOBBY_GATES = Object.keys(HALLS);

// every room belongs to one wing (rooms not listed here only appear through the hall's doors)
const MORE = {"wing-wonder": ["mythical-creatures", "lucky-symbols", "weird-festivals", "toys-tricks", "chindogu", "vending-gachapon", "fake-food", "roller-coasters", "weird-buildings", "strange-nature", "be-a-detective", "accidental-inventions", "kid-inventors", "tiny-world", "emoji-pictograms", "origami-science", "strange-foods", "magic-tricks", "superstitions", "spies-codes"], "wing-animals": ["japan-animals", "birds", "deepsea", "aquarium", "dog-breeds", "animal-families", "pets-as-family", "animal-superpowers", "how-animals-move", "ocean-2", "arctic", "japan-animals-2", "rainforest-2", "savanna-2", "desert-2", "mountain-animals", "city-animals", "islands-animals", "cave-deep-earth", "animals-through-seasons", "big-small-animals", "americas-animals", "australia-animals", "sharks-rays", "animal-babies", "animal-homes", "camouflage", "migration", "coral-reef", "butterflies-moths", "beetles-japan", "insect-sounds", "birds-japan", "endangered-japan", "antarctic-life", "rivers-ponds", "winter-animals", "food-chain", "prehistoric-mammals", "cats-breeds", "horses", "small-pets", "animal-islands-japan"], "wing-nature": ["forest", "rainforest", "savanna", "desert", "polar", "geo-records", "wetlands-mangroves", "clouds", "mushrooms", "dinosaurs-2", "evolution-fossils", "seeds-growing", "waterfalls-caves", "deserts-world", "extreme-weather", "satoyama", "world-records-nature", "flowers-japan-seasons", "seaside-science", "islands-world"], "wing-space": [], "wing-science": ["chemistry", "forces-motion", "medicine-health", "maths-nature", "body-can", "fast-slow", "hot-cold", "heavy-light", "loud-quiet", "long-short-tall", "flight", "floating-boats", "energy", "materials"], "wing-tech": ["robots-can", "computers-history", "internet-safety", "coding", "bridges-towers", "future-tech", "world-transport", "world-records-human", "maps-compass", "ships-sea", "building-engineering", "old-new"], "wing-history": ["middle-ages", "silk-road", "ancient-greece", "ancient-rome", "world-myths", "archaeology"], "wing-art": ["instruments", "art-movements", "art-japan-history", "art-world-crafts", "art-mediums", "paintings-netherlands", "paintings-uk-usa", "music-genres", "dance-japan", "architects", "picture-books", "photography", "crafts-to-make", "world-theatre", "movies-animation", "comics-world", "fashion-design", "pottery-world"], "wing-world": ["cities-world", "money", "world-tales", "southeast-asia", "south-asia", "west-asia", "nordic", "western-europe-2", "eastern-europe", "central-america-caribbean", "south-america-2", "africa-2", "pacific-islands", "time-zones-world", "world-new-year", "markets-world", "christmas-world", "ghost-festivals", "shrines-temples", "world-houses-2"], "wing-japan": ["toys-tales", "japan-islands", "japanese-values", "nagasaki-prefecture", "wagashi-seasons", "pref-hokkaido-tohoku", "pref-kanto", "pref-chubu", "pref-kinki", "pref-chugoku-shikoku", "japanese-mountains", "japan-records", "japanese-holidays", "school-trips-japan", "summer-japan", "haiku-seasons"], "wing-food": ["breakfast-world", "foods-health", "school-lunch-world", "shun-food", "soups-world", "tropical-fruits", "farm-to-table", "regional-dishes", "sweets-world-2", "tea-world", "dairy-cheese", "kitchen-tools", "festival-food"], "wing-sports": ["club-origins-sports", "camping-outdoors", "puzzles", "sports-equipment", "sports-japan-history"], "wing-people": ["how-towns-work", "family-celebrations", "jobs-az", "children-rights", "community"], "wing-life": ["traffic-safety", "months2", "school-events", "town", "stationery", "clothes", "colors-shapes", "numbers", "secondary-schools-world", "summer-world", "rooms-world", "chores-world", "libraries-world", "club-origins-culture"], "wing-words": ["riddles-jokes", "feelings", "thought-experiments-2", "eastern-thinkers", "western-thinkers", "philosophy-of-happiness", "critical-thinking", "time-philosophy", "mind-and-feelings", "world-wisdom-words", "words-from-languages", "alphabet-story", "phonics", "sign-braille", "body-words", "colors-languages", "numbers-languages"]};
for (const [w, ids] of Object.entries(MORE)) HALLS[w].more = ids.map(id => [id]);
// all the rooms of a wing, hall doors first
export const wingRooms = w => [...HALLS[w].gates, ...HALLS[w].more].map(g => g[0]);

