# Museum content backlog

A planning list for せかい はくぶつかん. Ask Claude things like:

- "Build the next 5 topics from section D"
- "Do all of 'World Music & Dance'"
- "Add photos for the art rooms"
- "Pick 10 unbuilt topics at random and build them"
- "Build wing N3 (junior high)" / "Do the O expansions for the animal rooms"

Each built topic becomes one room. Doors between rooms come from each topic's `links`.

## Content rules (apply to everything)

- **Japanese first, simple English** for key words: names, countries, foods, colours, numbers, etc.
- **Kanji:** keep to roughly 5th-grade level; otherwise use kana.
- **Nothing controversial or upsetting.** No war scenes, violence, injury, death imagery, nudity, romance, alcohol, tobacco or gambling. No religious debate, politics or current conflicts. Nothing about Japan's controversial history (e.g. wartime forced labour; avoid Gunkanjima). A plain mention of a historical war is OK, but nothing graphic.
- **Art:** only calm, family-friendly works such as landscapes, still lifes, portraits, patterns, crafts and abstract art. Avoid nude sculpture and paintings (e.g. Botticelli's *Venus*, Michelangelo's *David*), war art (*Guernica*, Goya), and frightening works.
- **No external links in the app.** Credits go in `site/README.md`.
- **Facts:** well established and checkable. Conservation statuses use the IUCN Red List (the Japan Red List for Japanese subspecies).
- **Photos:** Wikimedia Commons, downloaded on Mark's laptop (`tools/fetch.py`). Every photo is checked by eye before use.
- **Every exhibit** needs: a one-line fact, a 2–3 sentence explanation (`src/details/*.js`, keyed by topic → English name / animal id) and 1–3 English lines in New Horizon patterns ("EN / JA"). Check with `node tools/coverage.mjs -v`.
- **Size:** 6–11 exhibits per normal room, and up to ~16 for `long` / `timeline` rooms.

Layout tags: `square` (default), `small`, `wide` (two partition walls), `tall`, `long` (gallery), `timeline` (long gallery, walk-through order with years).

---

## ✅ Built (302 topics) — all 2714 exhibits have full explanations + English lines (src/details/)

animals, ocean, polar, rainforest, savanna, desert, forest, japan-animals, insects, birds, dinosaurs, pets, farm, deepsea, animal-records, plants, weather, solar-system, moon-stars, space-explore, regions, asia, europe, africa, americas, oceania, landmarks, geo-records, writing, japan, nagasaki, japanese-food, japan-traditions, japan-inventions, months1, months2, festivals-world, world-dishes, sweets, fruits, vegetables, ball-sports, olympics, winter-sports, jobs-town, jobs-dream, vehicles, instruments, school-subjects, school-events, inventions, town, stationery, clothes, feelings, colors-shapes, human-body, earth-science, rocks-gems, science-fun, heroes, money, games-world, toys-tales (Japanese folk tales), world-tales, robots, environment, endangered-japan, japan-islands, reptiles, aquarium, dog-breeds, art, numbers, time, daily-life, breakfast-world, houses-world, foods-health, sports-world, art-timeline `timeline`, art-movements `wide`, art-japan-history `timeline`, art-world-crafts `wide`, art-mediums,
philosophy-questions, philosophers `timeline`, japanese-values, proverbs, living-together,
hello-world, school-lunch-world, orchestra `wide`, composers `timeline`, world-instruments, world-dance, paintings-france, paintings-netherlands, japanese-painters, sculpture-world, nagasaki-city, nagasaki-food, wasei-eigo, words-from-japanese (was japanese-words-english), sdgs `wide`, bosai

Wings (src/wings/, registered in src/topics_wings.js with BACKLINKS from older rooms): N1 families, N2 can, N3 junior high, N4 summer, N5 seasons, N6 home, N7 biggest & smallest, N8 school places, and all 11 O animal sister rooms. Also built: section C country rooms, N10 maps, N11 holidays, N12 measuring, N13 computers & internet, N14 magnets & senses (N9 flags skipped). Next up: remaining sections A–M. Item tuples may carry a 7th element `{ s: "EN", src: "japan" }` for a Red List status.

---

## A. Animals & Nature

- ✅ ~~**african-mammals**~~ アフリカの 動物 — gorilla (mountain), chimpanzee, bonobo, African wild dog, meerkat, warthog, aardvark, okapi, African buffalo, wildebeest (migration), Thomson's gazelle, impala, spotted hyena (neutral facts), African penguin, ring-tailed lemur, fossa
- ✅ ~~**asian-mammals**~~ アジアの 動物 — Asian elephant, Bengal tiger, snow leopard, red panda, sun bear, orangutan (Sumatran), proboscis monkey, slow loris, Malayan tapir, Indian rhinoceros, yak, Bactrian camel, Przewalski's horse, takin, binturong
- ✅ ~~**americas-animals**~~ アメリカ大陸の 動物 — bald eagle, American bison, grizzly bear, raccoon, skunk, armadillo, capybara, giant anteater, llama, alpaca, Andean condor, poison dart frog, toucan, jaguar, manatee
- ✅ ~~**australia-animals**~~ オーストラリアの 動物 — kangaroo, wallaby, koala, wombat, platypus, echidna, Tasmanian devil, quokka, emu, cassowary, kookaburra, cockatoo, sugar glider, dingo, frilled lizard
- **antarctic-life** 南極の 生きもの — emperor penguin, Adélie penguin, chinstrap penguin, king penguin, leopard seal, Weddell seal, krill, Antarctic toothfish, snow petrel, wandering albatross, orca, humpback whale
- ✅ ~~**whales-dolphins**~~ クジラと イルカ — blue whale, humpback whale, sperm whale, orca, beluga, narwhal, minke whale, bottlenose dolphin, Pacific white-sided dolphin, finless porpoise (Japan), Amazon river dolphin, Hector's dolphin
- ✅ ~~**sharks-rays**~~ サメと エイ — whale shark, great white shark, hammerhead, tiger shark, megamouth shark (found in Japan), goblin shark (Japan), basking shark, nurse shark, manta ray, stingray, sawfish, Greenland shark
- ✅ ~~**coral-reef**~~ サンゴしょう — coral polyps, clownfish, sea anemone, parrotfish, butterflyfish, moray eel, sea turtle, giant clam, sea slug, cleaner wrasse, Okinawa reefs, Great Barrier Reef
- **rivers-ponds** 川と 池の 生きもの — killifish (medaka), carp (koi), catfish, freshwater crab, crayfish, frog tadpole, newt, water strider, dragonfly larva, kingfisher, otter, platypus, salmon run, ayu (sweetfish)
- **satoyama** 里山の 生きもの — Japanese tanuki, fox, hare, badger, weasel, firefly, rhinoceros beetle, stag beetle, rice-field frog, heron, swallow, Japanese white-eye, bush warbler (uguisu), cicada
- ✅ ~~**birds-japan**~~ 日本の 鳥 — green pheasant (national bird), Japanese white-eye, bush warbler, sparrow, swallow, crow, Japanese tit, kingfisher, grey heron, red-crowned crane, Japanese crested ibis, Steller's sea eagle, Blakiston's fish owl, Okinawa rail, ptarmigan
- ✅ ~~**birds-world**~~ 世界の めずらしい 鳥 — kiwi, puffin, toucan, quetzal, bird-of-paradise, secretary bird, albatross, hornbill, shoebill, hoatzin, kakapo, Arctic tern (longest migration), roadrunner, hummingbird, lyrebird (mimic)
- ✅ ~~**butterflies-moths**~~ チョウと ガ — monarch, swallowtail, Japanese emperor (oomurasaki, national butterfly), cabbage white, morpho, birdwing, glasswing, atlas moth, luna moth, silkworm (silk), life cycle (egg → caterpillar → pupa → butterfly)
- ✅ ~~**beetles-japan**~~ 日本の 甲虫 — rhinoceros beetle, Miyama stag beetle, giant stag beetle, ladybird, jewel beetle (tamamushi), firefly, longhorn beetle, dung beetle, diving beetle, weevil, Hercules beetle (world)
- ✅ ~~**insect-sounds**~~ 秋の 鳴く虫 — bell cricket (suzumushi), pine cricket (matsumushi), field cricket, katydid, Japanese cicadas (minmin, higurashi, tsukutsuku-boshi), grasshopper; how insects make sound
- ✅ ~~**night-animals**~~ 夜の 動物 — owl, bat, aye-aye, slow loris, kiwi, firefly, moth, hedgehog, tarsier, kinkajou, raccoon, flying squirrel (momonga), why eyes shine at night
- ✅ ~~**animal-babies**~~ 動物の 赤ちゃん — joey (kangaroo), calf, cub, kitten, puppy, foal, chick, tadpole, caterpillar, eaglet, piglet, lamb, kid (goat), panda cub (tiny at birth)
- ✅ ~~**animal-homes**~~ 動物の すみか — beaver dam, bird's nest, beehive, ant nest, termite mound, rabbit burrow, spider web, bear den, weaver bird nest, hermit crab shell, prairie dog town, swallow nest under eaves
- ✅ ~~**camouflage**~~ かくれる 名人 — chameleon, stick insect, leaf insect, octopus, flounder, snowshoe hare, arctic fox, owl, orchid mantis, leafy sea dragon, ptarmigan, zebra stripes
- ✅ ~~**migration**~~ 旅を する 動物 — Arctic tern, monarch butterfly, wildebeest, salmon, eel, humpback whale, swallow, white-fronted goose, caribou, sea turtle, Japanese swallow to Southeast Asia
- **winter-animals** 冬の すごし方 — bear (hibernation), dormouse (yamane), chipmunk, frog, snake, ladybirds clustering, snow monkeys, ptarmigan colour change, stoat, swans arriving in Japan
- **food-chain** 食べる・食べられる — sun → plants → herbivores → carnivores, plankton chain, decomposers (mushrooms, earthworms), ocean food web, balance of nature (gentle, no hunting images)
- **prehistoric-mammals** 大むかしの ほにゅうるい — woolly mammoth, Naumann's elephant (Japan), sabre-toothed cat (no hunting scene), giant sloth, woolly rhino, Irish elk, Megalodon (shark), Desmostylus (Japan), glyptodont
- ✅ ~~**dinosaurs-2**~~ きょうりゅう 時代別 `timeline` — Triassic (Eoraptor, Plateosaurus), Jurassic (Allosaurus, Diplodocus, Archaeopteryx), Cretaceous (Spinosaurus, Velociraptor, Ankylosaurus, Parasaurolophus, Pachycephalosaurus), Japanese finds (Fukuisaurus, Tambatitanis, Kamuysaurus)
- **cats-breeds** ネコの しゅるい — Japanese bobtail, Maine Coon, Persian, Siamese, Scottish Fold, Russian Blue, Bengal, Sphynx, Norwegian Forest Cat, American Shorthair, Munchkin, Ragdoll
- **horses** ウマの せかい — Dosanko (Hokkaido), Taishu horse (Tsushima, Nagasaki!), Misaki horse, Arabian, Thoroughbred, Shetland pony, Clydesdale, Przewalski's horse, zebra relatives, horseshoes
- **small-pets** 小さな ペット — guinea pig, hamster (types), rabbit breeds, chinchilla, ferret, budgie, Java sparrow, goldfish types, medaka, stag beetle keeping, hermit crab
- ✅ ~~**mushrooms**~~ きのこの せかい — shiitake, enoki, maitake, matsutake, shimeji, eringi, button mushroom, glowing mushrooms, giant puffball, mould and penicillin, yeast in bread ("don't pick wild mushrooms" safety note)
- ✅ ~~**trees**~~ 世界の 木 — cherry, maple (momiji), ginkgo, Japanese cedar, pine, bamboo, baobab, coast redwood, giant sequoia, banyan, olive, coconut palm, rubber tree, cork oak, maple syrup tree
- ✅ ~~**flowers-world**~~ 世界の 花・国花 — cherry blossom & chrysanthemum (Japan), rose (UK), tulip (Netherlands), lotus (India), plum blossom (China), hibiscus (Korea: mugunghwa), edelweiss, sunflower, protea (South Africa), orchids, lavender, lily of the valley
- **flowers-japan-seasons** 日本の 四季の 花 — plum, cherry, wisteria, azalea, hydrangea, morning glory, sunflower, lotus, cosmos, chrysanthemum, camellia, narcissus
- ✅ ~~**rice**~~ お米が できるまで `long` — seeds, seedlings, rice planting, rice paddy life, growing, harvest, drying, milling, kinds of rice, rice dishes of the world, mochi, rice in Japanese words (ご飯 = meal)
- ✅ ~~**seeds-growing**~~ たねと 成長 — sunflower seed, dandelion fluff, maple helicopter seeds, coconut floating, burrs (inspired Velcro), germination, roots, photosynthesis basics, giant pumpkins
- **world-records-nature** 自然の 世界一 II — largest flower (Rafflesia), tallest tree, oldest tree (bristlecone pine), largest seed (coco de mer), fastest-growing plant (bamboo), largest leaf, biggest lily pad (Victoria amazonica)

## B. Earth, Weather & Space

- ✅ ~~**volcanoes-world**~~ 世界の 火山 — Mt Fuji, Sakurajima, Unzen (Nagasaki, factual), Aso, Kilauea, Mauna Kea, Vesuvius (no casualty details), Etna, Krakatoa, Kilimanjaro (dormant), Olympus Mons (Mars), volcanic islands (Nishinoshima growing)
- ✅ ~~**mountains-world**~~ 世界の 山 — Everest, K2, Kilimanjaro, Mont Blanc, Matterhorn, Denali, Aconcagua, Table Mountain, Mt Fuji, Uluru, Mt Kosciuszko, Andes, Himalayas, highest in each continent
- ✅ ~~**rivers-lakes**~~ 川と みずうみ — Nile, Amazon, Yangtze, Mississippi, Danube (10 countries), Ganges, Shinano (Japan's longest), Lake Biwa, Lake Baikal, Lake Titicaca, Great Lakes, Dead Sea (float), Caspian Sea
- ✅ ~~**waterfalls-caves**~~ たきと どうくつ — Angel Falls, Niagara, Victoria Falls, Iguazu, Kegon Falls, Nachi Falls, Akiyoshido Cave, Son Doong (largest cave), Waitomo glowworm caves, Mammoth Cave, stalactites vs stalagmites
- ✅ ~~**deserts-world**~~ 世界の さばく — Sahara, Gobi, Atacama (driest; flowers bloom), Arabian, Kalahari, Namib (red dunes), Antarctica (cold desert), Tottori sand dunes, oasis, sandstorms, desert plants
- ✅ ~~**clouds**~~ 雲の しゅるい — cumulus, cumulonimbus, stratus, cirrus, altocumulus (sheep clouds), lenticular, mammatus, fog, contrails, rainbow clouds; Japanese cloud names (うろこ雲, いわし雲, 入道雲)
- ✅ ~~**extreme-weather**~~ 地球の 天気 世界一 — hottest place (Death Valley), coldest (Antarctica), wettest (Mawsynram), snowiest in Japan, biggest hailstone, auroras, typhoon vs hurricane vs cyclone names, tornadoes (no damage pictures)
- ✅ ~~**climate-zones**~~ 世界の 気候 — tropical, dry, temperate, cold, polar; Christmas in summer (Australia); midnight sun; monsoon; Japan's long north–south climate
- ✅ ~~**earth-timeline**~~ 地球 46億年の 旅 `timeline` — Earth forms, first ocean, first life, Snowball Earth, Cambrian explosion, first fish, plants on land, first amphibians, dinosaurs, flowering plants, dinosaurs end, mammals rise, ice ages, humans
- ✅ ~~**moons**~~ 太陽系の 月 — Moon, Phobos, Europa (ice ocean), Io (volcanoes), Ganymede (largest), Titan (thick air), Enceladus (geysers), Triton, Charon; Japanese moon-rabbit story
- ✅ ~~**constellations**~~ 星座の 物語 — Orion, Big Dipper, Cassiopeia, Southern Cross, Pleiades (Subaru), Summer Triangle (Vega, Altair, Deneb — Tanabata), Scorpius, Leo, zodiac signs, how to find the North Star
- **telescopes-observatories** 天文台と 望遠鏡 — Galileo's telescope, Subaru Telescope (Hawaii, Japan), Hubble, James Webb, ALMA (Chile), Nobeyama, planetarium, radio telescopes
- ✅ ~~**comets-asteroids**~~ すい星と 小わくせい — Halley's Comet, Hale-Bopp, Itokawa, Ryugu, Ceres, meteor showers (Perseids, Geminids), meteorites, Hayabusa missions
- ✅ ~~**space-japan**~~ 日本の 宇宙開発 `timeline` — Pencil rocket (1955), Osumi satellite (1970), Kibo module, Japanese astronauts (Mohri, Mukai, Wakata, Noguchi, Hoshide, Yui, Furukawa, Onishi, Kanai), H-II/H3 rockets, Hayabusa 1/2, SLIM moon landing (2024)
- **astronaut-life** 宇宙での くらし — sleeping, eating, toilets (lightly), exercise, washing hair, floating water, view of Earth, spacesuits, training, mission patches

## C. World Cultures & Countries

- ✅ ~~**southeast-asia**~~ 東南アジアの 国 — Thailand, Vietnam, Cambodia (Angkor Wat), Laos, Myanmar (neutral), Malaysia, Singapore (Merlion), Indonesia, Philippines, Brunei, Timor-Leste
- ✅ ~~**south-asia**~~ 南アジアの 国 — India, Nepal (Everest), Bhutan (happiness), Sri Lanka (tea), Bangladesh, Maldives, Pakistan (neutral facts only: K2, food)
- ✅ ~~**west-asia**~~ 西アジアの 国 — Türkiye (Cappadocia balloons), UAE (Burj Khalifa), Saudi Arabia (desert), Oman, Jordan (Petra), Qatar, Uzbekistan (blue tiles), Kazakhstan; neutral culture/geography only
- ⏭️ ~~**east-asia-2**~~ (skipped for now — China/Korea/Mongolia are built; labelling Taiwan/Hong Kong as countries is sensitive) 東アジア もっと — China (regions, pandas, calligraphy), South Korea (hanbok, K-pop, kimchi-making), Mongolia (Naadam), Hong Kong, Macau (Portuguese links), Taiwan (labelled Taiwan; night markets, Taipei 101)
- ✅ ~~**nordic**~~ 北ヨーロッパの 国 — Norway (fjords), Sweden, Finland (Moomin's home country — text only), Denmark (LEGO's home — text only), Iceland (geysers), Sámi culture (respectful), aurora, hygge
- ✅ ~~**western-europe-2**~~ 西ヨーロッパ もっと — Belgium (waffles, chocolate), Switzerland (Alps, clocks), Austria (music), Ireland (green, harp), Portugal (tiles, castella's origin), Luxembourg, Monaco
- ✅ ~~**eastern-europe**~~ 東ヨーロッパの 国 — Poland, Czechia (castles, puppets), Hungary, Croatia, Romania (painted monasteries — architecture), Bulgaria (yogurt, roses), Greece islands; avoid current conflicts
- ✅ ~~**central-america-caribbean**~~ 中央アメリカと カリブ — Mexico (more), Guatemala (Maya, quetzal), Costa Rica (nature), Panama Canal, Cuba (classic cars, music), Jamaica (reggae), Bahamas, Dominican Republic (baseball)
- ✅ ~~**south-america-2**~~ 南アメリカ もっと — Chile (long country), Colombia (coffee, flowers), Ecuador (Galápagos, equator), Bolivia (salt flats), Venezuela (Angel Falls), Uruguay, Paraguay
- ✅ ~~**africa-2**~~ アフリカ もっと — Ethiopia (coffee's home), Nigeria (big cities, Nollywood), Senegal (pink lake), Rwanda (gorillas, clean cities), Botswana (Okavango), Namibia (dunes), Zambia & Zimbabwe (Victoria Falls), Uganda, Ghana (more)
- ✅ ~~**pacific-islands**~~ 太平洋の 島々 — Palau, Samoa, Tonga, Tuvalu, Kiribati (first new year), Vanuatu, Solomon Islands, Hawaii (USA), Tahiti, Easter Island (Chile), Guam, Saipan
- ✅ ~~**hello-world**~~ 世界の 「こんにちは」 `long` — 30+ languages with kana reading: English, Chinese, Korean, Spanish, French, German, Italian, Portuguese, Russian, Arabic, Hindi, Thai, Vietnamese, Indonesian, Tagalog, Swahili, Hawaiian, Māori, Ainu (イランカラプテ), Okinawan (はいさい), Nagasaki dialect, sign language
- **numbers-languages** 1から10を 世界の ことばで — English, Chinese, Korean, Spanish, French, Swahili, Hindi, Thai, Japanese (hitotsu/ichi), Roman numerals, Arabic numerals' journey
- ✅ ~~**traditional-clothes**~~ 世界の 民族衣装 — kimono, yukata, hanbok, qipao, sari, kilt, dirndl, poncho, kente, áo dài, hula skirt (respectful), Sámi gákti, sombrero, fez
- ✅ ~~**world-new-year**~~ 世界の お正月 — Japan (osechi, hatsumode), China (Spring Festival), Korea (Seollal, tteokguk), Spain (12 grapes), Scotland (Hogmanay), Thailand (Songkran), Iran (Nowruz), Ethiopia (Enkutatash), fireworks in Sydney
- ✅ ~~**school-lunch-world**~~ 世界の 給食 — Japan, Korea, France, Finland (free lunch), USA, Brazil, India (midday meal), Italy, UK, China; Japanese kyushoku manners (serving duty)
- **schools-world** 世界の 学校 — school year start months, uniforms or not, school buses, Finnish schools, outdoor classes, school sizes, Japanese cleaning time (soji) admired abroad, randoseru
- ✅ ~~**markets-world**~~ 世界の 市場 — Tsukiji/Toyosu (tuna), floating markets (Thailand), Grand Bazaar (Istanbul), Christmas markets (Germany), night markets (Taiwan), souks (Morocco), farmers' markets
- **world-transport** 世界の のりもの — tuk-tuk, gondola, double-decker bus, cable car (San Francisco), jeepney, rickshaw, dog sled, camel caravan, reed boats (Titicaca), Venice vaporetto, Swiss mountain trains
- **world-houses-2** 世界の 家 II — Cappadocia cave houses, Hobbit-like turf houses (Iceland), Toraja houses (Indonesia), Tulou (China), trulli (Italy), stilt houses (Malaysia), houseboats (Kerala)
- ✅ ~~**world-dance**~~ 世界の おどり — ballet (France/Russia), flamenco, hula, haka (Māori), samba, tango, Irish step dance, Bharatanatyam, K-pop dance, Bon odori, Awa odori, Yosakoi, Eisa (Okinawa)
- **world-theatre** 世界の げき — kabuki, noh, bunraku, kyogen, Peking opera, Shakespeare (Globe Theatre), puppetry (Czech), shadow puppets (Indonesia wayang), musicals, rakugo
- ✅ ~~**lucky-symbols**~~ 世界の 「えんぎもの」 — maneki-neko, daruma, four-leaf clover, horseshoe, ladybird, red envelope, number 8 (China), number 7 (West), evil-eye charm (Türkiye, as craft), dreamcatcher (respectfully), koinobori, kadomatsu
- ✅ ~~**mythical-creatures**~~ 世界の 空想の 生きもの — dragon (East vs West), phoenix, unicorn, kappa, tengu (friendly framing), kitsune, mermaid, Pegasus, griffin, Nessie, yeti, Kirin (legendary), baku (eats bad dreams) — keep friendly, no scary images
- ✅ ~~**birthdays-world**~~ 世界の たんじょう日 — Happy Birthday song history, cake & candles, birthday noodles (China, long life), seaweed soup (Korea), piñata (Mexico), ear-pulling (Hungary), 7-5-3 (Japan), coming-of-age day

## D. Japan & Nagasaki

- ✅ ~~**pref-hokkaido-tohoku**~~ 北海道・東北の 県 `long` — Hokkaido, Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima: each with famous food, place and festival
- ✅ ~~**pref-kanto**~~ 関東の 県 — Tokyo, Kanagawa, Saitama, Chiba, Ibaraki, Tochigi, Gunma
- ✅ ~~**pref-chubu**~~ 中部の 県 `long` — Niigata, Toyama, Ishikawa, Fukui, Yamanashi, Nagano, Gifu, Shizuoka, Aichi
- ✅ ~~**pref-kinki**~~ 近畿の 県 — Osaka, Kyoto, Hyogo, Nara, Mie, Shiga, Wakayama
- ✅ ~~**pref-chugoku-shikoku**~~ 中国・四国の 県 `long` — Tottori, Shimane, Okayama, Hiroshima (food, Miyajima — no war content), Yamaguchi, Tokushima, Kagawa, Ehime, Kochi
- ✅ ~~**pref-kyushu-okinawa**~~ 九州・沖縄の 県 `long` — Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima, Okinawa
- ✅ ~~**nagasaki-city**~~ 長崎市 たんけん — Glover Garden, Oura area (architecture), Dejima, Chinatown (Shinchi), Megane-bashi (spectacles bridge), Mt Inasa, Nagasaki Penguin Aquarium, Dutch Slope, Peace Park (gentle: "a place to wish for peace"), streetcars (チンチン電車), Nagasaki Port, Tomachi area
- ✅ ~~**nagasaki-food**~~ 長崎の 食べもの — champon, sara-udon, castella, Turkish rice, kakuni-manju, chirin-chirin ice, Sasebo burger, Goto udon, Shimabara somen, Shippoku cuisine, milk shake (eaten with a spoon), biwa (loquat)
- ✅ ~~**nagasaki-prefecture**~~ 長崎県 めぐり — Sasebo (Kujukushima), Huis Ten Bosch, Hasami ware, Unzen hot springs, Shimabara (castle, water town carp), Iki, Tsushima, Goto, Hirado (first Dutch trading post), Omura (flowers), Isahaya bay
- ✅ ~~**nagasaki-festivals**~~ 長崎の 行事 — Kunchi, Peiron, Lantern Festival, Shoro-nagashi (lantern boats, respectful), Hata-age (kite fighting), Nagasaki Christmas lights, Hydrangea festival (Ajisai is the city flower)
- ✅ ~~**japanese-castles**~~ 日本の お城 — Himeji, Matsumoto, Inuyama, Hikone, Matsue, Kochi, Matsuyama, Osaka, Nagoya (golden shachihoko), Kumamoto, Shimabara (Nagasaki), Hirado; parts of a castle
- **shrines-temples** 日本の 神社と お寺 (architecture & culture) — torii, Itsukushima floating torii, Fushimi Inari gates, Kinkakuji, Ginkakuji, Kiyomizu-dera stage, Horyuji (oldest wooden buildings), Todaiji Great Buddha, Ise, komainu; how to visit politely (no religious claims)
- ✅ ~~**japanese-gardens**~~ 日本の 庭園 — Kenrokuen, Korakuen, Kairakuen, Ritsurin, rock garden (Ryoanji), moss gardens, koi ponds, stone lanterns, bonsai, Japanese gardens abroad
- ✅ ~~**trains-japan**~~ 日本の 電車 `long` — first railway (1872), steam locomotives (SL), Shinkansen series (0, 100, 300, 500, 700, N700S, E5, E6, E7, 800 Kyushu, Nishi-Kyushu Kamome), Doctor Yellow, sleeper trains, streetcars (Nagasaki), monorail, maglev
- ✅ ~~**crafts-japan**~~ 日本の 伝統工芸 — Arita ware, Hasami ware, Wajima lacquer, kokeshi, daruma, Edo kiriko glass, Nambu iron kettles, washi paper, Kyoto yuzen dyeing, Hakata dolls, folding fans (sensu), furoshiki, Japanese knives
- ✅ ~~**wagashi-seasons**~~ 季節の 和がし — sakura-mochi, kashiwa-mochi, mizu-yokan, warabi-mochi, tsukimi dango, chestnut kinton, kagami-mochi, taiyaki, dorayaki, daifuku, monaka, konpeito (Portuguese origin)
- **regional-dishes** 日本の ご当地グルメ — okonomiyaki (Osaka/Hiroshima), takoyaki, Hakata ramen, Sapporo miso ramen, kiritanpo, Sendai gyutan, Utsunomiya gyoza, Nagoya miso-katsu, Okinawa soba, goya champuru, Kagawa udon, Nagasaki champon
- ✅ ~~**japanese-words-english**~~ 英語に なった 日本語 — tsunami, karaoke, emoji, sushi, origami, anime, manga, bonsai, tofu, futon, typhoon (via Chinese), kaizen, umami, kawaii, ninja, judo
- ✅ ~~**wasei-eigo**~~ 和製英語に 気をつけて! — "salaryman", "consent" (=outlet), "mansion" (=apartment), "naive", "baby car" (=stroller), "Y-shirt" (=dress shirt), "cunning" (=cheating), "free dial", "note PC", "pierce" (=earrings), "shaapen" (=mechanical pencil)
- ✅ ~~**japan-unesco**~~ 日本の 世界遺産 `wide` — Mt Fuji, Himeji Castle, Yakushima, Shirakawa-go, Itsukushima, Horyuji, Kyoto, Nara, Nikko, Shiretoko, Ogasawara, Amami/Tokunoshima/Yanbaru, Mozu tombs (Kofun), Jomon sites, Tomioka silk mill, Iwami silver mine, Hiraizumi, Okinawa gusuku sites, Nagasaki churches (as heritage architecture only, neutral wording)
- ✅ ~~**japan-history**~~ 日本の 歴史 `timeline` — Jomon, Yayoi (rice farming), Kofun, Asuka (Horyuji), Nara (Todaiji), Heian (kana, Tale of Genji), Kamakura, Muromachi (Kinkakuji, noh), Azuchi-Momoyama (castles), Edo (Dejima, ukiyo-e), Meiji (railway, schools), Taisho, Showa (Tokyo Olympics 1964, Shinkansen), Heisei, Reiwa — gentle overview only, no war detail
- ✅ ~~**japanese-mountains**~~ 日本の 山 — Fuji, Kita-dake, Hotaka, Yarigatake, Daisetsuzan, Mt Aso, Unzen (Nagasaki), Sakurajima, Mt Takao, Mt Inasa, Japanese Alps; mountain day (Aug 11)
- ✅ ~~**onsen**~~ おんせん — Kusatsu, Beppu (jigoku views), Noboribetsu, Arima, Dogo, Unzen, Ureshino (near Nagasaki), Obama (Nagasaki), snow monkeys, onsen manners, onsen symbol ♨ (new pictogram story)
- **seasonal-japan** 日本の 四季 — spring (hanami), rainy season, summer (fireworks, watermelon splitting), autumn (momiji-gari, moon viewing), winter (kotatsu, snowmen); seasonal words; 24 seasons (sekki) simplified
- ✅ ~~**japan-records**~~ 日本の 日本一 — tallest mountain, longest river, largest lake, tallest tower (Skytree), longest bridge, deepest bay (Suruga), largest prefecture (Hokkaido), smallest prefecture (Kagawa), most islands (Nagasaki!)

## E. English & Language (New Horizon-friendly)

- **alphabet-story** ABCの ひみつ `timeline` — NOT letters on a wall: the story and oddities of the alphabet. A began as an ox head (Phoenician 𐤀), letters that vanished from English (thorn þ → "ye olde", eth, wynn), & was once the 27th letter ("and per se and"), J and U are the newest letters, W is "double U" but looks like double V, why Q needs U, zed vs zee, E is the most used letter, "the quick brown fox" pangrams, the tittle (dot on i), rhythm has no a/e/i/o/u, 26 letters but ~44 sounds, silent K in knight was once spoken, "ghoti" = fish joke, romaji (Hepburn 1867) vs kunrei
- **phonics** 英語の 音の ふしぎ — not a drill list: why English spelling is weird (Great Vowel Shift), one spelling many sounds (ough: though/through/tough/cough), magic e, sounds Japanese doesn't have (th, l/r, v), minimal pairs (rice/lice), silent letters and where they came from, why "colonel" sounds like kernel, stress changes meaning (REcord/reCORD), English sounds in katakana
- ✅ ~~**onomatopoeia**~~ 動物の 鳴き声 くらべ — dog (wan-wan / woof), cat (nyaa / meow), rooster (kokekokko / cock-a-doodle-doo), pig, cow, frog (kero-kero / ribbit), duck, bird, mouse, sheep, in several languages
- ✅ ~~**uk-us-english**~~ イギリス英語と アメリカ英語 — lift/elevator, biscuit/cookie, chips/fries, crisps/chips, flat/apartment, football/soccer, rubbish/trash, holiday/vacation, colour/color, petrol/gas
- ✅ ~~**words-from-languages**~~ 英語の ことばの ふるさと — ketchup (Chinese/Malay), tea (Chinese), chocolate (Nahuatl), banana (West Africa), robot (Czech), kindergarten (German), ballet (French), piano (Italian), safari (Swahili), shampoo (Hindi), tsunami (Japanese)
- ~~**opposites**~~ → replaced by the encyclopedic **N7 "Biggest & smallest"** wing below (don't build a plain word list)
- **prepositions** どこに ある? — in, on, under, by, next to, between, behind, in front of (with illustrated scenes)
- **body-words** 体の 英単語 — head, shoulders, knees, toes, eyes, ears, mouth, nose, hand, finger, foot, elbow
- ~~**family-words**~~ → replaced by the encyclopedic **N1 Families** wing below (don't build a plain word list)
- ✅ ~~**tongue-twisters**~~ 早口ことば — "She sells seashells", "Peter Piper", "Red lorry, yellow lorry", "Unique New York"; Japanese: 生麦生米生卵, 隣の客は…, 東京特許許可局
- **sign-braille** 手話と 点字 — Braille alphabet (Louis Braille), braille in daily life (lift buttons, ticket machines), tactile paving (invented in Japan, Okayama 1967), sign language hello/thank you (JSL & ASL)
- ✅ ~~**codes**~~ ひみつの 暗号 — Morse code (SOS), semaphore flags, ship signal flags, Caesar cipher, pigpen cipher, QR codes, barcodes
- ✅ ~~**symbols-signs**~~ 世界の マーク — pictograms (Tokyo 1964 origin), emergency exit sign (designed in Japan), recycle mark, road signs around the world, map symbols of Japan (new ones for foreigners), weather symbols

## F. Science & Technology

- ✅ ~~**simple-machines**~~ かんたんな 機械 — lever, pulley, wheel and axle, inclined plane, wedge, screw, gears; seesaw, scissors, bottle opener
- ✅ ~~**electricity**~~ 電気の ひみつ — circuits, batteries (Volta), light bulbs, static, conductors vs insulators, power plants, saving electricity, Edison vs Tesla (friendly)
- ✅ ~~**light-color**~~ 光と 色 — rainbow, prism, mirrors, lenses, why the sky is blue, sunset colours, shadows, colour mixing (light vs paint), periscope
- ✅ ~~**sound-science**~~ 音の 科学 — vibration, echoes, speed of sound, string telephones, animal hearing (bats, dolphins), musical pitch, ear parts, loudest/quietest sounds
- ✅ ~~**water-cycle**~~ 水の 旅 — evaporation, clouds, rain, rivers, ocean, ice, groundwater, water treatment, how much water we use
- ✅ ~~**states-of-matter**~~ 固体・液体・気体 — ice/water/steam, melting, freezing, dry ice, slime (non-Newtonian), air has weight, balloons
- **flight** 空を とぶ しくみ — wings and lift, gliders, paper planes (records), hot-air balloons (Montgolfier), helicopters, birds vs planes, Wright Flyer
- **floating-boats** うく しくみ — buoyancy, Archimedes, ships made of steel float, submarines, life jackets, ice floats
- **inventions-timeline** 発明の タイムライン `timeline` — wheel, writing, paper, compass, printing, telescope, steam engine, telephone, light bulb, car, airplane, TV, computer, internet, smartphone
- **computers-history** コンピューターの 歴史 `timeline` — abacus, Babbage, ENIAC, transistors, home computers, Famicom/NES era (text), laptops, smartphones, AI
- **internet-safety** インターネットを 安全に — passwords, personal information, asking an adult, kind comments, screen time, recognising fake news, privacy settings (age-appropriate)
- **coding** プログラミングの 考え方 — sequence, loops, if/then, bugs (first "bug" was a moth), Scratch-style blocks, robots following instructions, binary numbers
- **energy** エネルギーの いろいろ — solar, wind, hydro, geothermal (Japan), biomass, batteries, saving energy at home (neutral; no nuclear debate)
- **materials** もの の ざいりょう — wood, metal, glass, plastic, paper, cotton, wool, silk, rubber, bamboo, recycling each
- **microscope-world** けんびきょうの せかい — snowflakes, pollen, hair, salt crystals, onion cells, plankton, butterfly wing scales, tardigrade (water bear)
- **bridges-towers** 橋と タワー — Akashi Kaikyo Bridge, Golden Gate, Tower Bridge, Megane-bashi (Nagasaki), Kintaikyo, Tokyo Skytree, Tokyo Tower, Eiffel Tower, Burj Khalifa, CN Tower, how bridges stay up
- **future-tech** 未来の 技術 — flying cars, space elevator idea, robots helpers, self-driving cars, vertical farms, 3D printing, maglev

## G. Art, Music & Performance (art must stay calm & family-friendly)

- ✅ ~~**paintings-italy-spain**~~ イタリア・スペインの 名画 — Mona Lisa, Arcimboldo's fruit-and-vegetable portraits, Raphael's School of Athens, Canaletto's Venice views, Velázquez's Las Meninas, Murillo's children (calm), Sorolla's beaches, Miró's colourful shapes
- ✅ ~~**paintings-netherlands**~~ オランダの 名画 — Vermeer (Milkmaid, Girl with a Pearl Earring, View of Delft), Rembrandt (self-portraits, Night Watch as group portrait), Van Gogh (Sunflowers, Bedroom in Arles, Almond Blossom), Mondrian, Escher
- ✅ ~~**paintings-france**~~ フランスの 名画 — Monet (Impression Sunrise, Water Lilies), Renoir (calm scenes only), Degas (dancers), Cézanne (apples), Seurat (La Grande Jatte), Rousseau (tiger in jungle), Matisse (The Snail cut-outs), Millet (The Gleaners)
- ✅ ~~**paintings-uk-usa**~~ イギリス・アメリカの 名画 — Constable (The Hay Wain), Turner (sunsets), Beatrix Potter illustrations, Whistler, Hopper (Nighthawks), Georgia O'Keeffe (flowers), Grandma Moses, Warhol, Calder mobiles
- ✅ ~~**art-asia**~~ アジアの 美術 — Chinese landscape painting, calligraphy, Along the River at Qingming (scroll), Korean folk painting (minhwa: tigers & magpies), Mughal miniatures (gardens), Thai temple murals (architecture), batik (Indonesia)
- ✅ ~~**japanese-painters**~~ 日本の 画家 — Sesshu, Hasegawa Tohaku (Pine Trees), Ogata Korin (Irises), Ito Jakuchu, Maruyama Okyo, Hokusai, Hiroshige, Yokoyama Taikan (Fuji), Higashiyama Kaii (blue landscapes), Okamoto Taro (Tower of the Sun), Kusama Yayoi
- ✅ ~~**sculpture-world**~~ 世界の ちょうぞう — Moai, Great Sphinx, Terracotta Army, Kamakura Daibutsu (landmark), Little Mermaid (Copenhagen), Merlion, Statue of Liberty, Tower of the Sun, Cloud Gate (Chicago), Spoonbridge and Cherry, Hachiko statue
- ✅ ~~**architecture-timeline**~~ 建物の 歴史 `timeline` — pyramids, Parthenon, Colosseum, Horyuji, Angkor Wat, Gothic cathedrals (architecture), Taj Mahal, Himeji Castle, Eiffel Tower, Sydney Opera House, Tokyo Skytree, Burj Khalifa
- **architects** 有名な 建築家 — Gaudí (Sagrada Família, Park Güell), Frank Lloyd Wright (Fallingwater, old Imperial Hotel), Tange Kenzo, Ando Tadao (Church of Light — as architecture), Kuma Kengo (National Stadium), Zaha Hadid, Le Corbusier
- **picture-books** 世界の 絵本の れきし — Peter Rabbit (Beatrix Potter, PD), Alice illustrations (Tenniel, PD), Japanese picture-book culture, kamishibai (paper theatre), pop-up books; describe modern books in text only (no character images)
- **manga-anime-history** まんがと アニメの れきし `timeline` — Choju-giga, Hokusai Manga, kamishibai, early animation, Tezuka Osamu (text only), anime around the world, how animation works (flip books, frames) — no copyrighted characters
- **photography** 写真の れきし — camera obscura, first photo (Niépce), Daguerre, film cameras, instant cameras, digital cameras, smartphones, famous nature photos (described)
- ✅ ~~**composers**~~ 有名な 作曲家 `timeline` — Vivaldi (Four Seasons), Bach, Mozart, Beethoven (Ode to Joy, sung in Japan every December), Chopin, Tchaikovsky (Nutcracker), Debussy, Taki Rentaro (Kojo no Tsuki), Yamada Kosaku (Akatombo)
- ✅ ~~**orchestra**~~ オーケストラの 楽器 `wide` — strings (violin, viola, cello, double bass, harp), woodwind (flute, oboe, clarinet, bassoon), brass (trumpet, horn, trombone, tuba), percussion (timpani, xylophone, cymbals, triangle), conductor
- ✅ ~~**world-instruments**~~ 世界の 楽器 — koto, shakuhachi, taiko, sanshin (Okinawa), erhu, gayageum, sitar, tabla, didgeridoo, bagpipes, steel drum, ukulele, kalimba, djembe, accordion, alphorn, panpipes, balalaika
- ✅ ~~**music-genres**~~ 音楽の ジャンル — classical, jazz, rock, pop, hip-hop (as dance/music, clean), reggae, samba, bossa nova, flamenco, K-pop, J-pop, enka, min'yo, film music, video-game music
- ✅ ~~**dance-japan**~~ 日本の おどり — Bon odori, Awa odori, Yosakoi, Eisa, Kagura (as performing art), Nihon-buyo, Soran-bushi (school dance!)
- **crafts-to-make** 作って みよう — origami crane, paper fortune teller, paper planes, kirigami snowflakes, string figures (ayatori), clay pots, tie-dye, leaf rubbings, simple weaving

## H. Sports & Games

- ✅ ~~**olympic-sports**~~ オリンピック競技 A to Z `long` — archery, athletics, badminton, basketball, BMX, canoe, climbing, cycling, diving, equestrian, fencing, football, golf, gymnastics, handball, hockey, judo, rowing, rugby sevens, sailing, skateboarding, softball, surfing, swimming, table tennis, taekwondo, tennis, triathlon, volleyball, weightlifting, wrestling
- ✅ ~~**paralympic-sports**~~ パラスポーツ — wheelchair basketball, boccia, goalball, blind football, para swimming, wheelchair tennis (Kunieda Shingo), sitting volleyball, para athletics; respect and teamwork
- ✅ ~~**martial-arts**~~ 武道 — judo, kendo, karate (Okinawa), aikido, kyudo (archery), sumo, naginata, taekwondo, fencing; dojo manners (no fighting imagery — focus on bowing, uniforms, belts)
- ✅ ~~**japanese-games**~~ 日本の 昔あそび — karuta, fukuwarai, hanetsuki, kite flying, menko, otedama, ohajiki, kendama, koma, daruma-san-ga-koronda, ayatori, kagome-kagome
- ✅ ~~**playground-world**~~ 世界の 外あそび — tag (oni-gokko and versions), hide-and-seek, hopscotch (around the world), marbles, jump rope rhymes, Red Rover, duck duck goose, Chinese jump rope, sepak takraw
- **puzzles** パズルの せかい — sudoku (named in Japan), crossword, tangram, jigsaw, Rubik's cube, nonogram (picross, Japan), maze, word search, Tower of Hanoi, 15-puzzle
- ✅ ~~**stadiums**~~ 世界の スタジアム — Koshien, Tokyo Dome, National Stadium (Tokyo), Wembley, Maracanã, Camp Nou, Yankee Stadium, Wimbledon, Melbourne Cricket Ground, Ryogoku Kokugikan
- **sports-equipment** スポーツの 道具の ひみつ — baseball stitches (108), golf ball dimples, soccer ball panels, shuttlecock feathers, tennis ball fuzz, skis, ice skate blades, running spikes
- **sports-japan-history** 日本の スポーツ史 `timeline` — kemari, sumo, judo's birth, first Japanese Olympian (1912), Tokyo 1964, Sapporo 1972, Nagano 1998, Rugby World Cup 2019, Tokyo 2020

## I. Food & Cooking

- ✅ ~~**noodles-world**~~ 世界の めん `long` — ramen, udon, soba, somen, champon, pho, pad thai, spaghetti, lasagne (pasta shapes), Chinese hand-pulled noodles, japchae, laksa, yakisoba, naengmyeon
- ✅ ~~**bread-world**~~ 世界の パン — baguette, croissant, naan, pita, tortilla, pretzel, bagel, melon pan, anpan (Japan), injera (Ethiopia), cornbread, rye bread, focaccia, steamed buns
- ✅ ~~**street-food**~~ 世界の 屋台グルメ — takoyaki, yakitori, crepes, kebab, tacos, hot dogs, satay, churros, bubble tea, dumplings, arepas, hotteok, elote
- ✅ ~~**soups-world**~~ 世界の スープ — miso soup, tom yum, minestrone, borscht, gazpacho, clam chowder, pho, corn soup, onion soup, seaweed soup
- **sweets-world-2** 世界の おかし II — baklava, macarons, churros, mochi, gelato, brigadeiro, pastel de nata, Tim Tams, Turkish delight, alfajores, mango sticky rice, pavlova, apple pie
- ✅ ~~**tropical-fruits**~~ 南国の くだもの — dragon fruit, durian (smelly!), lychee, rambutan, mangosteen, papaya, passion fruit, star fruit, guava, jackfruit (biggest fruit), coconut, kiwifruit
- ✅ ~~**spices**~~ スパイスの せかい — pepper, cinnamon, ginger, turmeric, chilli (from the Americas), wasabi, sansho, cumin, saffron (most expensive), vanilla, curry powder; Spice Routes (trade, gentle)
- ✅ ~~**food-origins**~~ 食べものの ふるさと `timeline` — potatoes, tomatoes, chillies and corn from the Americas; rice from Asia; wheat from the Middle East; coffee from Ethiopia; tea from China; how foods travelled the world
- **tea-world** 世界の お茶 — green tea, matcha, oolong, black tea (British afternoon tea), chai, mint tea (Morocco), bubble tea, barley tea, rooibos, yerba mate; tea ceremony etiquette
- **dairy-cheese** 牛乳と チーズ — milk, butter, yogurt (Bulgaria), cheese types (Gouda, Cheddar, Mozzarella, Swiss, Camembert), how cheese is made, Hokkaido dairy
- ✅ ~~**farm-to-table**~~ 食べものが とどくまで `long` — wheat → flour → bread; cacao → chocolate; milk; fish from sea to market; vegetables to supermarket; delivery trucks
- **kitchen-tools** 台所の 道具 — knife, cutting board, pot, frying pan, rice cooker (invented in Japan), chopsticks, spoon, fork, whisk, ladle, microwave (accidental invention), toaster
- ✅ ~~**table-manners**~~ 世界の テーブルマナー — itadakimasu/gochisousama, chopstick rules, slurping noodles OK in Japan, eating with hands (India, respectful), bread rules in France, tipping (light), Korean spoon & chopsticks
- **festival-food** お祭りの 食べもの — yakisoba, cotton candy, kakigori, choco banana, ringo-ame, taiyaki, osechi, chitose-ame, toshikoshi soba, mooncakes, Christmas cake (Japan), king cake

## J. People, Jobs & Society

- ✅ ~~**jobs-hospital**~~ 病院の しごと — doctor, nurse, pharmacist, dentist, radiographer, physical therapist, paramedic, receptionist, dietitian, hospital clown (gentle)
- ✅ ~~**jobs-airport**~~ 空港の しごと — pilot, cabin attendant, air traffic controller, ground staff, mechanic, security, customs, baggage handler, marshaller, airport fire crew
- ✅ ~~**jobs-creative**~~ 作る しごと — illustrator, animator, game designer, architect, fashion designer, photographer, potter, carpenter, pastry chef, YouTuber (light), writer
- ✅ ~~**jobs-nature**~~ 自然の しごと — farmer, fisher, forester, zookeeper, park ranger, marine biologist, weather forecaster, astronomer, gardener, beekeeper
- **jobs-az** しごと A to Z `long` — actor, baker, carpenter, dentist, engineer, florist, gardener, hairdresser, illustrator, journalist, keeper, lawyer, musician, nurse, office worker, pilot, quiz-show host, reporter, scientist, teacher, umpire, vet, waiter, x-ray technician, yoga teacher, zookeeper
- ✅ ~~**explorers**~~ 世界の 探検家 — Amundsen (South Pole), Hillary & Tenzing (Everest), Uemura Naomi, Shirase Nobu (Antarctica), Jacques Cousteau (ocean), Yuri Gagarin, Neil Armstrong, Mae Jemison, Jane Goodall, Ino Tadataka; no colonial conquest stories
- ✅ ~~**women-science**~~ 科学者に なった 女性たち — Marie Curie, Ada Lovelace, Katherine Johnson, Rachel Carson, Jane Goodall, Dorothy Hodgkin, Mukai Chiaki, Yasui Kono, Ogino Ginko (first licensed female doctor in Japan)
- ✅ ~~**sdgs**~~ SDGs 17の 目標 `wide` — one exhibit per goal (no poverty … partnerships), each with a kid-sized action
- **children-rights** 子どもの 権利 — UN Convention basics: right to play, learn, be safe, be heard, have a name, health; Children's Day
- ✅ ~~**bosai**~~ 防災 そなえよう — emergency kit, evacuation drills, typhoon prep, earthquake "drop, cover, hold on", 119/110, hazard maps, Disaster Prevention Day (Sept 1); calm and practical, no damage images
- **community** 町を 支える 人 — volunteers, neighbourhood clean-ups, crossing guards, librarians, post carriers, recycling centre staff, local festivals' organisers
- **world-records-human** 人の 世界一 — tallest building, longest bridge, biggest pizza, largest origami crane, longest train, deepest dive, fastest train, most people dancing Bon odori (keep safe & fun)

## K. History (gentle overviews)

- ✅ ~~**ancient-civilizations**~~ 古代文明 — Mesopotamia (writing, wheel), Egypt (pyramids, papyrus), Indus (planned cities), China (silk, paper), Maya (calendar, cacao), Inca (roads, Machu Picchu), Greece (Olympics), Rome (roads, aqueducts)
- ✅ ~~**writing-history**~~ 文字の 歴史 `timeline` — cave signs, cuneiform, hieroglyphs, Chinese characters, alphabet journey, kana, printing, typewriter, keyboard, emoji
- ✅ ~~**communication-history**~~ 伝える 方法の 歴史 `timeline` — drums & smoke signals, letters & post, telegraph, telephone, radio, TV, fax, mobile phones, email, video calls
- ✅ ~~**transport-history**~~ のりものの 歴史 `timeline` — walking, horses, sailing ships, palanquins (kago), steam trains, bicycles, cars, airplanes, Shinkansen, rockets, maglev
- ✅ ~~**toys-history**~~ おもちゃの 歴史 `timeline` — ancient dolls, spinning tops, kites, yo-yos, teddy bears (1902), jigsaws, building blocks, model trains, video games (text), robots
- ✅ ~~**money-history**~~ お金の 歴史 `timeline` — shells, barter, coins (Lydia), paper money (China), Japanese oban/koban, yen begins (1871), banknote faces, credit cards, e-money
- ✅ ~~**clothes-history**~~ 服の 歴史 — animal skins, weaving, silk road, kimono layers (Heian), Edo fashion, Meiji Western clothes, school uniforms, jeans, sneakers
- ✅ ~~**edo-life**~~ 江戸時代の くらし — nagaya houses, temple schools (terakoya), sushi stalls, ukiyo-e, kabuki, firefighters (hikeshi), recycling culture, travel on the Tokaido, Dejima trade

## L. Fun & Wonder

- ✅ ~~**optical-illusions**~~ (moved to wing P) ふしぎな 目の さっかく — Müller-Lyer lines, rotating snakes (Kitaoka, Japan), impossible triangle, duck/rabbit, colour illusions, afterimages, Ames room (drawn procedurally on canvas — no photos needed)
- **maps-compass** 地図と 方位 — compass rose, north/south/east/west, map symbols, Ino's map, world map projections (true size!), globes, GPS, treasure-map game (Hamanomachi-style directions)
- **colors-languages** 色の ことば — red/aka, blue vs green (ao), rainbow colours in different countries, colour meanings around the world, traffic lights
- **world-firsts-japan** 日本で 生まれた はじめて — instant noodles, karaoke, emoji, QR code, blue LED, tactile paving, pictograms, bullet train, electric rice cooker, conveyor-belt sushi, portable music player, (verify each claim before building)
- **space-records** 宇宙の 世界一 — biggest planet, hottest planet, tallest volcano (Olympus Mons), longest day (Venus), most moons (Saturn), fastest planet (Mercury), coldest place
- **mystery-room-ideas** ? ふしぎな へや (random rooms) — "What's this object?" guessing room, "Which country?" room, "Odd one out" room, "Old vs new" room (phones, cameras, TVs)

## P. Weird & Wonderful — fun first, still educational (wing: ふしぎ・おもしろ)

Mysteries are framed as "evidence → what do you think?"; no disappearances or harm. Folklore stays cute, not frightening. Manga/anime/game rooms cover history and how things are made — no copyrighted characters.

- ✅ ~~**yokai**~~ 妖怪図鑑 — kappa, tengu, kitsune, tanuki, zashiki-warashi, tsukumogami (kasa-obake), nurikabe, baku, Amabie, yuki-onna, Toriyama Sekien's yokai books, hyakumonogatari candle game; why legends began (kappa kept kids away from rivers)
- ✅ ~~**household-spirits**~~ 世界の 小さな 妖精 — tomte/nisse, domovoi, brownie, kobold (→ cobalt), menehune, duende, leprechaun, Roman lares, tooth traditions (Japan throws teeth on the roof; Spain's tooth mouse Ratoncito Pérez)
- ✅ ~~**mysteries**~~ 世界の ミステリー — Nazca Lines, moai, Stonehenge, Göbekli Tepe, Antikythera mechanism, Voynich manuscript, Yonaguni rocks, sailing stones (solved!), Wow! signal, crop circles (people made them) — each with "what scientists think"
- ✅ ~~**spooky-science**~~ こわい？の 科学 — will-o'-the-wisp/kitsunebi, faces in things (pareidolia, "Face on Mars"), why houses creak at night (yanari), echoes (yamabiko), Brocken spectre (goraigō), ball lightning, glowing mushrooms, St Elmo's fire, why being scared can feel fun
- **ghost-festivals** 世界の 先祖の お祭り — Day of the Dead (marigolds, sugar skulls), Halloween's roots (Samhain, turnip lanterns), Obon & tōrō nagashi, Nagasaki's shōrō nagashi, Chinese lantern festival, Qingming kites — cheerful "remembering family" angle
- **why-body** 体の ふしぎ なぜ？ — hiccups, goosebumps, brain freeze, contagious yawns, wrinkly bath fingers, sun sneezes, ticklish, burps, stomach growls, pins and needles
- **strange-foods** 世界の びっくり 食べもの — durian, surströmming, century egg, Vegemite, edible insects, natto (seen by visitors), fugu, blue cheese, kusaya — with why people love them
- **weird-festivals** 世界の ふしぎな お祭り — cheese rolling, La Tomatina, Monkey Buffet, Night of the Radishes, Up Helly Aa, Naki Sumo, bog snorkelling, Battle of the Oranges, Cheung Chau bun scramble, Japan's mud/water festivals (calm ones only)
- **christmas-world** 世界の ふしぎな クリスマス — Caga Tió, Yule Lads & Yule Cat, Befana, Japan's Christmas chicken and strawberry shortcake, Ukrainian spider-web ornaments, Australian beach Christmas, Philippine giant lanterns (parol), Sinterklaas' shoes
- **manga-anime** まんがと アニメの ひみつ — Chōjū-giga, Hokusai Manga, kamishibai, speech bubbles, manga symbols (sweat drop, anger mark, speed lines), how anime moves (frames, keyframes, in-betweens), reading right-to-left, manga cafés & libraries
- **video-games-history** ビデオゲームの れきし `timeline` — oscilloscope tennis (1958), first arcade games, home consoles, handhelds, pixel art, chiptune, 3D, online & mobile, how games are made (jobs) — no character art
- **emoji-pictograms** 絵文字と ピクトグラム — emoji born in Japan (1999), kaomoji vs :-), 1964 Tokyo pictograms, the running-man exit sign, Tokyo 2020 moving pictograms, emoji meanings that differ by country
- **toys-tricks** あそびの わざ — kendama tricks & world cup, yo-yo, speedcubing (records), spinning tops (koma), tangram, cat's cradle (ayatori), paper planes record, juggling
- **origami-science** 折り紙の 科学 — Miura fold (space solar panels), origami in medicine (stents), airbags, folding paper 103 times, the crane & 1000 cranes, origami robots, Yoshizawa Akira's diagram notation
- **vending-gachapon** 自動販売機と ガチャガチャ — why Japan has ~4 million machines, hot & cold in one machine, odd ones (dashi, umbrellas, corn soup), the first vending machine (Hero of Alexandria's holy water), capsule toys
- **fake-food** 食品サンプルの ひみつ — how plastic food is made, Kappabashi street, why visitors love it, history (1920s), wax → plastic, make-your-own experiences
- **roller-coasters** ジェットコースターの 科学 — why you don't fall out of a loop, g-force, record coasters (Japan's Fuji-Q), wooden vs steel, Ferris wheel history, free-fall towers
- **famous-animals** 歴史に のこる 動物 — Hachikō, Tama the station-master cat, Balto, Owen & Mzee, Paul the octopus, Ham the space chimp (returned safe), Hachiko-like loyal animals worldwide
- **animal-islands-japan** 動物の 島 — cat islands (Tashirojima, Aoshima), Nara's bowing deer, snow monkeys in hot springs, Okunoshima rabbits (bunnies only), Miyajima deer, Kōjima monkeys washing sweet potatoes
- **cambrian-weirdos** 恐竜より 前の ふしぎ生物 `timeline` — Ediacaran life, Anomalocaris, Hallucigenia (drawn upside down), Opabinia (5 eyes), Wiwaxia, trilobites, Dunkleosteus, Meganeura, Arthropleura, Dimetrodon (not a dinosaur!)
- **tiny-world** 小さな 世界 — tardigrades, diatoms, butterfly-wing scales, pollen, snowflakes (Nakaya Ukichirō), dust mites, red blood cells, salt crystals, how microscopes work
- **hidden-places** 地下の ひみつの 場所 — G-Cans (Tokyo), Derinkuyu, Coober Pedy, Wieliczka salt mine, Hang Sơn Đoòng, Svalbard seed vault, Seikan Tunnel, Ōya stone quarry (Tochigi)
- **weird-buildings** 世界の ふしぎな たてもの — cube houses, Dancing House, Sagrada Família, Atomium, library with giant books, upside-down houses, Hundertwasser houses, Nakagin capsule tower
- **strange-nature** 地球の ふしぎな 景色 — firefly squid (Toyama), rainbow eucalyptus, Kawah Ijen blue fire, frozen bubbles (Lake Abraham), Pamukkale, Giant's Causeway, rainbow mountains, Lake Hillier (pink lake)
- **optical-illusions** → see section L (it lives in this wing)
- **be-a-detective** 名たんていに なろう — fingerprints, footprint casts, invisible ink, code wheels, Sherlock Holmes' method, Edogawa Ranpo (pen name from Poe), deduction puzzles — no crimes
- **ninja** 忍者の ほんとう — ninja didn't usually wear black, Iga & Kōka, shinobi tools (makibishi, mizugumo myth), walking quietly, codes & disguises, ninja museums today
- **accidental-inventions** 失敗から 生まれた 発明 — potato chips, microwave, penicillin, Post-it notes, Velcro, Slinky, cornflakes, Play-Doh, X-rays, superglue
- **kid-inventors** 子どもの 発明家 — popsicle (11), earmuffs (15), trampoline (16), Braille (started at 12), swim fins (Franklin, 11), Japanese student inventions contest
- **chindogu** 珍道具 — Kawakami Kenji's "un-useless" inventions: chopstick fan, tissue-box hat, butter stick, umbrella tie; then design your own

## M. Philosophy & Thinking (kid-friendly; open questions, no religious claims)

Built: philosophy-questions, philosophers `timeline`, japanese-values, proverbs, living-together

- ✅ ~~**thought-experiments-2**~~ 考える 実験 II — Plato's cave (as a shadow-puppet story), the Ring of Gyges (would you be good if invisible?), Buridan's donkey (two equal haystacks), Theseus II (your body's cells renew), Mary's room (seeing red for the first time), brain-in-a-jar → "Is this a dream?", Twin Earth (simple version), Newcomb-style choice games kept simple
- ✅ ~~**paradoxes**~~ ふしぎな パラドックス — liar paradox ("This sentence is false"), barber paradox, grandfather paradox (time travel), Achilles II, the unexpected test, infinite hotel (Hilbert's hotel), the birthday paradox (23 people), Monty Hall (game-show door puzzle)
- ✅ ~~**logic-puzzles**~~ 論理パズル — knights and knaves, river crossing (wolf, goat, cabbage), Einstein's riddle (simple), truth tables with emoji, syllogisms ("All cats are animals…"), spot the mistake in an argument
- ✅ ~~**eastern-thinkers**~~ アジアの 思想家 — Confucius (Analects sayings for kids), Mencius (people are born good — sprout analogy), Laozi (water), Zhuangzi (useless tree story), Han Feizi (rules), Tiruvalluvar (Tamil wisdom couplets), Kaibara Ekiken (health & learning), Ninomiya Sontoku, Nitobe Inazo (Bushido written in English; 5000-yen note)
- ✅ ~~**western-thinkers**~~ ヨーロッパの 思想家 — Thales (everything is water), Pythagoras (numbers & music), Heraclitus (you can't step in the same river twice), Diogenes (simple living — gentle), Epicurus (happiness = friends & simple pleasures), Seneca (time is precious), Montaigne (essays — "What do I know?"), Locke (blank slate), Rousseau (education & nature), Mill (freedom), Hannah Arendt (thinking for yourself)
- ✅ ~~**philosophy-of-happiness**~~ 幸せの 考え方 — gratitude, flow (doing what you love), friendship, kindness research, ikigai, hygge (Denmark), lagom (Sweden), sisu (Finland), pura vida (Costa Rica), ubuntu (Southern Africa: "I am because we are")
- ✅ ~~**world-wisdom-words**~~ 世界の 心の ことば — ubuntu, hygge, lagom, sisu, aloha spirit, pura vida, mottainai, ikigai, wabi-sabi, ichi-go ichi-e, "carpe diem", "hakuna matata" (Swahili phrase, not the film)
- ✅ ~~**ethics-for-kids**~~ みんなで 考えよう — sharing, honesty (the boy who cried wolf), keeping promises, helping others, fairness vs equality (bike/stool picture), animal welfare, caring for the planet, online kindness
- ✅ ~~**critical-thinking**~~ 考える 力の 道具 — ask "why?" five times, facts vs opinions, checking sources, cause and effect, comparing viewpoints, mind maps, debate rules, changing your mind is OK
- ✅ ~~**philosophy-of-science**~~ 科学の 考え方 — observation, hypothesis, experiment, Galileo's falling balls, Occam's razor, peer review (simple), "science changes when we learn more"
- ✅ ~~**time-philosophy**~~ 時間って 何？ — Heraclitus' river, Augustine's "I know until you ask me" (quote only, neutral), time zones, relativity for kids (twins), 一生の 長さ in heartbeats, why time flies when you're having fun
- ✅ ~~**mind-and-feelings**~~ 心の ふしぎ — memory, dreams, emotions (Inside-Out style without characters), habits (Aristotle), growth mindset, mindfulness breathing, empathy

---

## N. Curriculum wings — beyond the textbook (priority)

These wings fill the gaps between the museum and the New Horizon 5–6 units. **Rule for this section:** the textbook unit is only the doorway. Each room must be encyclopedic: real things with names, places, history, records and "why" facts that the textbook doesn't have. The English line reuses the unit's pattern (e.g. "I can…", "This is my…", "I went to…") so the class phrase gets practised on new and surprising content. **Never build a room that is just the textbook word list with pictures.**

Each wing is 3–5 rooms that link to each other and to related built rooms (suggested links in brackets).

### N1. Families (NH5 "This is my…", family members) — *families come in many shapes; keep it inclusive, no real private people*
- ✅ ~~**animal-families**~~ 動物の 家族 — elephant herds led by the oldest grandmother (matriarch), emperor penguin dads keeping the egg warm for ~2 months, seahorse dads giving birth, wolf packs (mum and dad plus the year's young), meerkat babysitters, orca grandmothers leading the pod, naked mole-rat "queen" colonies, cuckoos raised by other birds, ostrich group nests, marmoset dads carrying twins, clownfish families, Japanese macaque mothers and the hot-spring troop → "This is my mother. She is kind." with animal versions [savanna, polar, japan-animals, animal-babies]
- ✅ ~~**family-names-world**~~ 世界の 名字と 名前 — Japan's most common surnames (Sato, Suzuki, Takahashi) and why they come from places (田 = rice field, 山, 川), Korea (Kim, Lee, Park — about half the country), China (Wang, Li, Zhang; family name first like Japan), English surnames from jobs (Smith, Baker, Taylor, Cooper), Iceland (-son/-dóttir, phone book by first name), Spain/Latin America (two surnames), Arabic "ibn", Mongolia, name order on passports, Japan's name-order change in English (2020 government guidance) → "My name is ___. My family name is ___."
- ✅ ~~**family-celebrations**~~ 家族の お祝い — お七夜 and naming day, お宮参り, first birthday (Japan: isshō-mochi on the back; Korea: doljabi — the baby picks an object to "predict" their future), 七五三 (chitose-ame), quinceañera (Mexico, 15th), coming-of-age day (二十歳の 集い), kanreki (60th: red clothes), beiju (88th), golden wedding anniversary (50 years) — kept to family-milestone traditions, no religion claims [birthdays-world, months1/2]
- ✅ ~~**generations**~~ 家族の 世代 — family tree vocabulary (grandparent → great-grandparent: 曾祖父), how many ancestors you have 10 generations back (1,024), longest-living people's records (general, no named private people), how life changed across generations in Japan: great-grandparents (kamado stove, well water, washing boards), grandparents (black-and-white TV, rotary phone, abacus, the 1964 Olympics), parents (Famicom-era as text, Walkman, fax), you (tablets) → "My grandfather can play shogi." [time, inventions, communication-history]
- ✅ ~~**pets-as-family**~~ 家族の 一員 — famous loyal animals: Hachikō (Shibuya statue), Greyfriars Bobby (Edinburgh), Tama the station-master cat (Wakayama, Kishi Station) and her successor Nitama, Owney the postal dog (USA), Bamse the St Bernard (Norway), plus how long pets live and how to care for them [pets, dog-breeds, cats-breeds]

### N2. What can you do? (NH5 "I can / He can") — *ability records and the science behind them*
- ✅ ~~**animal-superpowers**~~ 動物の ちょう能力 `wide` — cheetah (0–100 km/h in ~3 s), peregrine falcon (dives over 300 km/h), kangaroo (jumps about 9 m), flea (jumps ~100× its body), hummingbird (flies backwards), archerfish (spits water to knock bugs down), chameleon tongue (faster than a car's 0–100), mantis shrimp punch (boils water around it), gecko feet (walk on glass; inspired tape), octopus (opens jars, changes colour), dolphin (sleeps with half its brain), electric eel, bat echolocation, dung beetle navigating by the Milky Way, Arctic tern, axolotl (regrows legs), tardigrade (survives space) → "A cheetah can run fast. Can you run fast?" [animal-records, camouflage]
- ✅ ~~**how-animals-move**~~ 動く しくみ — how fish swim (tail and fins), how snakes move without legs (4 styles: side-winding, etc.), how birds fly (hollow bones), how insects walk (6 legs, tripod), how frogs jump, how jellyfish pulse, how penguins "fly" underwater, how horses gallop (Muybridge's photos proved all four hooves leave the ground), how cats land on their feet → "It can swim. It can't fly." [flight, birds, reptiles]
- ✅ ~~**human-skills-world**~~ 世界の すごい 特技 — unicycles in Japanese schools (Japan is a unicycle powerhouse), jump rope / double dutch (world championships, Japanese teams), kendama (now a world sport), juggling, yo-yo (World Yo-Yo Contest), Rubik's cube speed-solving (world record under 4 s), calligraphy, abacus mental math (anzan), memory sports, beatboxing, origami masters, sign language, whistled languages (Silbo Gomero, Canary Islands), playing the leaf (kusabue) → "I can play kendama." [games-world, japanese-games, puzzles]
- ✅ ~~**body-can**~~ 体の できること — balance (inner ear), reaction time (ruler-drop test), how far a human can jump (long-jump record), fastest human (Bolt ~44 km/h, compared to animals), holding breath (free-divers), how strong muscles are (jaw), why we can't tickle ourselves, being left- or right-handed (~10% left), how practice changes the brain [human-body, olympics]
- ✅ ~~**robots-can**~~ ロボットに できること — robot arms in factories (Japan has many), robot vacuum, surgical robots, Mars rovers (Curiosity, Perseverance), underwater robots, robot guide at airports, robots that can't yet fold laundry well, ASIMO's history, robot pets (aibo, text), "Robots can't…" (what humans still do better) [robots, future-tech]

### N3. Junior high school (NH6 "What club do you want to join?") — *a preview of next year*
- ✅ ~~**jhs-life-japan**~~ 中学校の くらし — uniforms (gakuran and blazer history: gakuran from Meiji, sailor uniforms from naval style), subject teachers for each class, 部活 culture, senpai/kōhai, tests and report cards, school trips (Kyoto, Nara, Tokyo), sports festival and chorus contest (合唱コンクール), student council, starting English with a textbook, 3 years → "I want to join the ___ club." [school-subjects, school-events]
- ✅ ~~**club-origins-sports**~~ 部活の スポーツの はじまり `timeline` — basketball (Naismith, 1891, peach baskets), volleyball (Morgan, 1895, "mintonette"), soft tennis (invented in Japan, 1880s, with rubber balls), table tennis (England, "ping-pong", first balls were corks), badminton (named after Badminton House, England), handball, kendo (bamboo swords, bōgu armour), judo (Kanō Jigorō, 1882, first Asian IOC member), track & field (ancient Olympics), swimming, baseball (came to Japan 1872), soccer (FA rules 1863) → "I want to join the volleyball team. It started in 1895!" [ball-sports, martial-arts, olympic-sports]
- ✅ ~~**club-origins-culture**~~ 文化部の せかい — brass band (Japan's school brass bands are world-famous; All Japan Band Competition), choir, art club, science club (school science fairs), computer/programming club, broadcasting club, newspaper club, tea ceremony club, calligraphy club, cooking club, English club, robotics (World Robot Olympiad), shogi & go clubs, photography club → "I like music. I want to join the brass band." [orchestra, japan-traditions, robots]
- ✅ ~~**secondary-schools-world**~~ 世界の 中学生 — USA (lockers, middle school, school buses, year-books), UK (houses, uniforms with ties, GCSEs at 16), Finland (no homework myth vs reality, free lunch, short days), Korea (long study days), Germany (choose school type at 10), France (collège, Wednesdays), Australia (School of the Air — lessons by radio/internet for remote kids), Kenya/Tanzania (boarding schools), India (huge school sizes), school start months worldwide (Japan April, most September) [schools-world, school-lunch-world]

### N4. Summer & "I went to…" (NH6 summer vacation, past tense)
- ✅ ~~**summer-japan**~~ 日本の 夏 — fireworks (history: Sumidagawa since 1733; Nagaoka, Ōmagari; how colours come from metals), natsu-matsuri, obon (welcoming ancestors — cultural, no religious claims; Nagasaki's shōrō-nagashi described gently), radio taiso (since 1928, stamp cards), jiyū kenkyū (summer research projects), morning glory diaries, kakigori (Heian-era Sei Shōnagon described shaved ice!), watermelon splitting, wind chimes (furin: Edo glass), cicada shells, hiyashi chūka, bug hunting → "I went to the summer festival. I enjoyed fireworks. I ate kakigori." [months2, festivals-world, insect-sounds]
- ✅ ~~**summer-world**~~ 世界の 夏休み — length of summer holidays (Italy/Portugal ~3 months, Japan ~6 weeks, UK ~6 weeks), summer camp (USA), Midsummer in Sweden (maypole, flower crowns), Australia's summer Christmas at the beach, Finland's summer cottages and midnight sun, French "les grandes vacances" (August empty Paris), Korean summer bingsu, Spanish siesta (heat), Canada's lakes [climate-zones, holidays-world]
- ✅ ~~**seaside-science**~~ 海辺の ふしぎ — tides (the Moon pulls the sea), waves, why the sea is salty, sand (how it's made; star sand in Okinawa is tiny shells!), shells (spiral maths), sea glass, tide pools (sea anemones, crabs, starfish, sea slugs), sea turtles nesting on Japanese beaches (Yakushima), beach clean-ups and plastic, safety flags and rip currents (calm and practical) → "I went to the sea. I saw a crab." [ocean, coral-reef, environment]
- ✅ ~~**camping-outdoors**~~ キャンプと 自然 — tents (from yurts and tipis — respectfully), campfire science (fire triangle, safety), stargazing (Summer Triangle — Tanabata), how to use a compass, knots (square knot, bowline), flashlight Morse, trees to recognise, leave no trace, mosquito science, what to pack → "I went camping. I saw many stars." [constellations, maps-compass, trees]
- ✅ ~~**school-trips-japan**~~ 修学旅行で 行く 場所 — Kyoto (Kiyomizu-dera, Kinkakuji), Nara (deer and Tōdaiji), Nikkō, Tokyo (Skytree), Okinawa (sea and Shuri Castle), Hokkaido (dairy farms), Kumamoto/Aso, Nagasaki (as a place other schools visit: Dejima, Chinatown, Glover Garden), Kagoshima (Sakurajima) — gentle wording only, no war-history content → "My best memory is the school trip. We went to Nara." [japan, landmarks, nagasaki-city]

### N5. Seasons (NH5/6 seasons and events)
- ✅ ~~**why-seasons**~~ 季節が ある わけ — Earth's 23.4° tilt (not distance from the Sun!), the solstices and equinoxes (Japan's national holidays 春分の日/秋分の日), long summer days in Hokkaido vs Okinawa, the midnight sun and polar night, places with no seasons near the equator, wet & dry seasons (monsoon), opposite seasons in Australia/NZ, seasons on Mars and Uranus (42-year summer) → "What season do you like? I like summer." [weather, climate-zones, solar-system]
- ✅ ~~**seasons-72**~~ 日本の 七十二候 `long` — Japan's 24 sekki and 72 kō micro-seasons (e.g. "frogs start singing", "first swallows arrive", "crickets chirp at the door"), with one exhibit per sekki: risshun, shunbun, geshi, tōji etc., what you see/eat in each → seasonal kigo words
- ✅ ~~**haiku-seasons**~~ 俳句と 季語 — what a haiku is (5-7-5), kigo season words, Bashō's frog haiku and Issa's snail (both pre-1929, safe to quote), Buson, Shiki, haiku in English (17 syllables or fewer), make-your-own patterns; world haiku contests for kids [writing, japanese-values]
- ✅ ~~**shun-food**~~ 旬の 食べもの — what "shun" means, spring (bamboo shoots, strawberries), summer (watermelon, edamame, corn), autumn (sanma, chestnuts, sweet potato, persimmon), winter (mikan, daikon, yellowtail), Nagasaki's seasonal biwa (loquat) and Goto fish; food miles → "Watermelon is a summer fruit." [fruits, vegetables, nagasaki-food]
- ✅ ~~**animals-through-seasons**~~ 季節と 生きもの — swallows arriving in spring, frogs in rainy season, fireflies in June, cicadas' 7-year-ish life underground (it varies), dragonflies (akatombo) in autumn, migrating cranes to Izumi (Kagoshima, ~10,000 cranes), swans in winter, bear hibernation, snow-monkey baths, stoat turning white [winter-animals, migration, insects]

### N6. My home (rooms, furniture, chores) — *the history and science of everyday home things*
- ✅ ~~**home-objects-history**~~ 家の 道具の れきし `timeline` — candle → oil lamp → light bulb → LED (blue LED, Nobel to Japanese scientists 2014), icebox → refrigerator, washboard → washing machine, broom → vacuum cleaner → robot vacuum, kamado → gas stove → IH, the electric rice cooker (Toshiba 1955), the microwave (found by accident, 1945), TV, air conditioner, the washlet toilet (Japan) → "This is my kitchen. We have a rice cooker." [inventions, japan-inventions]
- ✅ ~~**japanese-home**~~ 日本の 家の ひみつ — tatami (size differs by region: Kyōma vs Edoma), shoji and fusuma, genkan and taking off shoes, tokonoma, engawa veranda, kotatsu (since Muromachi times), ofuro (why Japanese bath first, then wash outside), futon, earthquake-resistant building, "LDK" in Japanese house ads → "My room is upstairs." [houses-world, japan-traditions]
- ✅ ~~**rooms-world**~~ 世界の 家の 部屋 — kitchens (Korean kimchi fridge, Italian espresso pot), bathrooms (Finnish sauna — most homes have one; Turkish hammam; Japanese ofuro), bedrooms (hammocks in Brazil and Yucatán, ondol floor heating in Korea, Mongolian ger layout), living rooms (Middle-Eastern majlis floor cushions), garden sheds (UK), basements (USA), rooftops (Mediterranean) [houses-world, world-houses-2]
- ✅ ~~**how-home-works**~~ 家の 中の 科学 — where tap water comes from (dam → treatment plant → pipes), where the water goes (sewage treatment), how a fridge stays cold, how electricity reaches the socket, how gas gets to the stove, why windows have two panes, how a lock and key work, how a toilet flushes, how a thermos works (vacuum flask) [water-cycle, electricity, energy]
- ✅ ~~**chores-world**~~ 世界の お手伝い — Japanese students cleaning their school (soji), chores children do in different countries, laundry hung outside vs dryers, folding (furoshiki and Marie Kondo-style folding, text only), recycling sorting in Japan (many categories; Kamikatsu town sorts 45 ways!), home robots → "I wash the dishes. I can cook curry." [environment, daily-life, robots-can]

### N7. Biggest & smallest (adjectives, opposites, comparisons) `tall` — *each exhibit is a pair of real extremes*
- ✅ ~~**big-small-animals**~~ いちばん 大きい・小さい 生きもの — blue whale vs bumblebee bat; ostrich egg vs hummingbird egg; giant squid vs smallest fish (Paedocypris); Goliath frog vs Paedophryne (smallest frog); African elephant vs Etruscan shrew; giant panda baby (tiny: ~1/900 of mum) — "big / small, bigger / biggest" [animal-records]
- ✅ ~~**fast-slow**~~ はやい・おそい — peregrine falcon vs three-toed sloth; sailfish vs seahorse; cheetah vs garden snail; Shinkansen vs glacier; light vs sound (thunder delay counting); the fastest and slowest things in space
- ✅ ~~**hot-cold**~~ あつい・つめたい — Sun's core vs absolute zero; Death Valley vs Antarctica (Vostok); boiling and freezing water; dry ice (−79°C) vs a hot spring; hottest planet (Venus) vs coldest (Uranus); bodies (human 36–37°C, birds ~41°C)
- ✅ ~~**heavy-light**~~ おもい・かるい — blue whale vs feather; aerogel (lightest solid, "frozen smoke"); osmium (densest metal); a cloud weighs about as much as 100 elephants; a bowling ball vs a balloon; why big ships float [floating-boats]
- ✅ ~~**old-new**~~ 古い・新しい — oldest rocks (~4 billion years), oldest tree (bristlecone ~4,800 years), Jōmon Sugi (Yakushima), oldest company (Kongō Gumi, Japan, 578), oldest wooden building (Hōryūji), newest island (Nishinoshima), newest element names (nihonium — discovered in Japan!)
- ✅ ~~**long-short-tall**~~ 長い・みじかい・高い — Nile vs shortest river (Roe River, USA); giraffe neck (same 7 bones as us); Burj Khalifa vs tiny houses; Japan's longest place names; shortest flight (Westray–Papa Westray, ~1.5 min); tallest and shortest dog breeds
- ✅ ~~**loud-quiet**~~ うるさい・しずか — blue whale call, pistol shrimp snap, howler monkey, the quietest room in the world (anechoic chamber), owl's silent flight (inspired quieter Shinkansen pantograph — Japanese engineer) [sound-science]

### N8. School places (NH5 "Where is the music room?")
- ✅ ~~**inside-japanese-school**~~ 学校の 部屋の ひみつ — getabako and indoor shoes (rare abroad), the nurse's office (hokenshitsu), science room (Bunsen burners, skeleton models), music room (why composer portraits hang there), library (NDC number system — the Japanese version of Dewey), gym (doubles as an evacuation shelter), school pools (most Japanese schools have one — very unusual worldwide), school garden and rabbit hutch, broadcasting room, staff room, randoseru (from the Dutch "ransel") → "Where is the music room? It's on the second floor." [school-subjects, town]
- ✅ ~~**libraries-world**~~ 世界の 図書館 — Library of Alexandria (ancient), Trinity College Long Room (Dublin), Library of Congress (biggest), National Diet Library (Japan's, gets a copy of every book), Kanazawa Umimirai, Stuttgart's white cube library, camel libraries (Kenya), donkey libraries (Colombia), boat libraries (Norway), bookmobiles in Japan, Little Free Libraries, how to look after books [writing-history, picture-books]
- ✅ ~~**school-buildings-world**~~ 世界の 校舎 — schools on boats (Bangladesh floating schools), mountain schools (Nepal), schools in old castles (UK), outdoor forest schools (Denmark, Germany), Japan's wooden old schools (now museums), the world's biggest school (Lucknow, India), the smallest (single-pupil island schools in Japan — e.g. remote islands), school in space (lessons from the ISS) [schools-world, japan-islands]

### N9. Flags of the world (country units, "Where do you want to go?")
- ⏭️ ~~**flags-stories**~~ (skipped — Mark said no flag room) 国旗の 物語 `wide` — Japan (Hinomaru, the Sun), Canada (maple leaf, 1965), Nepal (only non-rectangular national flag), Switzerland & Vatican (square), Bhutan (thunder dragon), Brazil (the night sky over Rio — with "Ordem e Progresso"), South Korea (taegeuk & trigrams), Lebanon (cedar tree), Cyprus (map of the island), Wales (red dragon, part of the UK), Denmark (oldest flag still used, 1219 legend), Kiribati (sunrise over the sea), USA (50 stars, 13 stripes), Mexico (eagle on cactus legend), India (wheel), Australia/NZ (Southern Cross) — **exclude any flag with weapons** (e.g. Mozambique, Guatemala, Saudi Arabia's sword, Kenya's spears, Sri Lanka's sword-holding lion) → "This is the flag of Canada. I want to go to Canada."
- ⏭️ ~~**flags-colours**~~ (skipped — Mark said no flag room) 国旗の 色と 形 — red-white flags, tricolours (France, Italy, Ireland, Germany — vertical vs horizontal), Nordic cross family, stars and moons, flags with animals (Uganda's crane, Dominica's parrot, Papua New Guinea's bird-of-paradise), flags with plants, flags that look alike (Indonesia vs Monaco, Chad vs Romania), design rules (vexillology: simple, few colours) — a "can you tell them apart?" room
- ⏭️ ~~**japan-symbols**~~ (skipped — Mark said no flag room) 日本の シンボル — prefecture flags/mon (Nagasaki's design), prefecture birds/trees/flowers (Nagasaki's — verify each against the prefecture's official list before building), the national bird (green pheasant), flower (cherry & chrysanthemum), the Japan Post mark, city crests (Nagasaki City's mark), mascots (yuru-chara — describe, no copyrighted images) [nagasaki, japan]

### N10. Maps, continents & oceans (geography behind the country units)
- ✅ ~~**continents-oceans**~~ 6つの 大陸と 5つの 大洋 — Asia, Africa, North/South America, Europe (and the 7-continent count), Oceania/Australia, Antarctica; Pacific (bigger than all land together), Atlantic, Indian, Southern, Arctic; how continents move (Pangaea, Japan used to be part of Asia), the Mariana Trench → "Japan is in Asia." [regions, earth-science]
- ✅ ~~**islands-world**~~ 世界の 島 — Greenland (biggest island), Borneo, Madagascar (lemurs, 90% unique wildlife), Iceland, Galápagos (Darwin's finches & tortoises), Hawaii (volcano chain), Bali, Sri Lanka, Tasmania, Easter Island, Nishinoshima (newest), Japan's 14,125 islands (2023 recount; Nagasaki has the most) [japan-islands, pacific-islands]
- ✅ ~~**time-zones-world**~~ 世界の 時差 — why it's night in London when it's morning here, the date line (Kiribati first, Samoa last), Japan has one time zone, China one, Russia 11, USA's 6, Greenwich (0°), Akashi (135°E — Japan's time line, Hyogo), New Year countdowns travelling round the Earth → "What time is it in London? It's 11 p.m." [time]
- ✅ ~~**japan-geography**~~ 日本の 地形 — the four main islands, Japan Alps, longest rivers (Shinano, Tone, Ishikari), Lake Biwa (could fit…), Kantō plain, peninsulas, the Kuroshio current (why Nagasaki is warm), rias coasts (Kujūkushima), Japan's east–west extremes (Minamitorishima, Yonaguni), how long Japan is (about 3,000 km) [japan, japanese-mountains]

### N11. Holidays around the world (ALT favourites) — *cultural customs only, no religious claims*
- ✅ ~~**holidays-world**~~ 世界の 行事 `long` — Halloween (origin in a Celtic harvest festival, first jack-o'-lanterns were carved turnips in Ireland, trick-or-treat), Christmas around the world (Japan's Christmas cake & fried chicken, Germany's markets, Netherlands' Sinterklaas on 5 Dec, Italy's La Befana, Australia's beach Christmas, the Philippines' long Christmas season & paról lanterns), Easter customs (painted eggs from Central Europe, egg rolling in the USA, the Easter Island name came from Easter Day 1722), Thanksgiving (pumpkin pie, parade balloons), Lunar New Year (red envelopes, lion dance — also Nagasaki Lantern Festival), Holi (festival of colours), Diwali (lamps & rangoli — described as a festival of lights), Songkran (water festival), St Patrick's Day (shamrocks, green rivers in Chicago), Mother's/Father's Day around the world, April Fools' Day (BBC's 1957 spaghetti-tree joke), Children's Day (Japan, Korea, Turkey's April 23) → "When is Halloween? It's October 31st. What do you do?" [months1/2, festivals-world, world-new-year]
- ✅ ~~**japanese-holidays**~~ 日本の 祝日 — each national holiday and why (Marine Day — Japan is a sea country, Mountain Day — newest from 2016, Respect for the Aged Day, Sports Day — from the 1964 Olympics, Culture Day, Labour Thanksgiving Day), Golden Week and Silver Week, Happy Monday system; how many holidays Japan has (16) vs other countries [months1/2]

### N12. Measuring the world (NH "How tall / How much / How far")
- ✅ ~~**units-history**~~ はかり方の れきし — the metre (from measuring Earth, Paris 1790s; now defined by light), the kilogram (the metal cylinder retired in 2019), feet/inches and hands (horse heights) from the body, the mile (1,000 Roman paces), pounds and ounces, Celsius vs Fahrenheit (and why the USA uses °F), Japanese old units still used today: 尺・寸 (carpenters, "一寸法師" = 3 cm hero), 畳 (room size), 坪 (land), 合 (rice cooker cups!), 里 (distance in old stories, ~4 km) → "How tall are you? I'm 140 centimetres. That's 4 feet 7 inches!" [numbers, time, toys-tales]
- ✅ ~~**measuring-tools**~~ はかる 道具 — rulers and the Ino Tadataka survey (walked Japan to map it — steps!), scales (balance → digital), thermometers (Galileo's), clocks (sundial → atomic clock), speedometer, measuring the height of Mt Everest, measuring the speed of light, light-years [maps-compass, ino via explorers]

### N13. Computers & the internet today (programming education 小学校プログラミング)
- ✅ ~~**how-computers-work**~~ コンピューターの しくみ — binary (0 and 1), bits & bytes, pixels (zoom in on a picture), CPU as the "brain", memory, keyboards (QWERTY history — from typewriters), the mouse (1960s), touchscreens, how a game controller works, fastest supercomputers (Japan's Fugaku held #1 in 2020–21) [computers-history, coding]
- ✅ ~~**how-internet-works**~~ インターネットの しくみ — undersea cables (most internet travels under the sea, some landing in Japan), Wi-Fi, how a search engine finds pages, emails as packets, data centres (cooled by cold air/water), QR codes (invented in Japan, 1994, by Denso Wave), emoji (Kurita Shigetaka, 1999, now in MoMA), what AI is (pattern-learning, can make mistakes — always check) [internet-safety, words-from-japanese]

### N14. Science basics still missing
- ✅ ~~**magnets**~~ じしゃくの ふしぎ — N and S poles, Earth is a giant magnet (compass), maglev trains (Chūō Shinkansen), migrating birds sensing magnetism, fridge magnets, MRI (gently), magnetite, the strongest magnets (neodymium — invented in Japan by Sagawa Masato, 1982) [maps-compass, trains-japan]
- ✅ ~~**senses**~~ 五感の ふしぎ — sight (eagles see 4–8× sharper), hearing (dogs, bats, elephants' rumbles), smell (bears, dogs' noses ~10,000× better), taste (umami — discovered in Japan by Ikeda Kikunae, 1908; tongue map is a myth), touch (fingertips), animal senses we don't have (snakes see heat, sharks feel electricity, bees see ultraviolet) [human-body, animal-superpowers]

---

## O. Expansions for thin built rooms (add sister rooms; keep the originals)

The animal wings promise far more than the textbook, so the 5–7-animal rooms need sisters. Each sister room links to its original. Avoid repeating animals that are already built: ocean (loggerhead, blue whale, bottlenose dolphin, whale shark, sea otter, manta, dugong), polar (polar bear, emperor penguin, walrus, arctic fox, narwhal, snowy owl, reindeer), rainforest, savanna, desert, forest and japan-animals (macaque, Tsushima cat, red-crowned crane, serow, Okinawa rail, Amami rabbit, giant salamander).

- ✅ ~~**ocean-2**~~ 海の 動物 II — sea lion, harbour seal, elephant seal, octopus (giant Pacific), cuttlefish, Japanese spider crab (largest crab, lives off Japan), sunfish (mola), flying fish (Nagasaki's ago-dashi!), seahorse, jellyfish (moon jelly; "immortal" jellyfish), sea urchin, starfish, humpback whale song, sardines' baitball, bluefin tuna (fastest big fish; Nagasaki farms them) [ocean, whales-dolphins, sharks-rays, coral-reef]
- ✅ ~~**arctic**~~ 北極の 生きもの — musk ox, Arctic hare, lemming (no cliff myth), Arctic wolf, beluga, harp seal (white pups), puffin, Arctic tern, ptarmigan, caribou herds, Arctic char, polar day and night [polar, antarctic-life, winter-animals]
- ✅ ~~**japan-animals-2**~~ 日本の 動物 II — Japanese sika deer (Nara, Miyajima), tanuki, red fox (Kitakitsune, Hokkaido), Asian black bear (tsukinowaguma), Ezo brown bear, Japanese dormouse (yamane), Japanese flying squirrel (momonga), Japanese weasel, Iriomote cat, Yanbaru long-armed beetle, Blakiston's fish owl, Steller's sea eagle, Japanese crested ibis (toki) recovery story, Japanese fire-bellied newt, Ogasawara flying fox [japan-animals, endangered-japan, satoyama, birds-japan]
- ✅ ~~**rainforest-2**~~ 熱帯雨林 II — poison dart frog, red-eyed tree frog, harpy eagle, howler monkey, leafcutter ants (farm fungus), Goliath birdeater spider (kept gentle), morpho butterfly, capybara, tapir, Rafflesia, pitcher plant, flying dragon lizard (Draco), Sumatran rhino, Asian rainforests vs Amazon vs Congo [rainforest, birds-world]
- ✅ ~~**savanna-2**~~ サバンナ II — wildebeest migration, Thomson's gazelle, warthog, ostrich (largest bird), secretary bird, termite mounds (air-conditioning inspired a building in Zimbabwe), African wild dog, baobab tree, aardvark, oxpecker birds riding animals, spotted hyena (good parents — neutral), vultures as nature's cleaners (no carcass images) [savanna, african-mammals]
- ✅ ~~**desert-2**~~ さばく II — dromedary & Bactrian camels (why the hump is fat, not water), Gila monster, roadrunner, kangaroo rat (never drinks), dung beetle, scorpion (glows under UV), saguaro cactus, Namib fog-basking beetle (inspired water collectors), jerboa, desert tortoise, Gobi bear (rare) [desert, deserts-world]
- ✅ ~~**mountain-animals**~~ 山の 動物 — snow leopard, yak, mountain goat, ibex (climbs dams!), alpaca/llama/vicuña, Andean condor, golden eagle, pika, marmot, giant panda's mountain bamboo forests, Japanese serow (link), ptarmigan in the Japanese Alps (raichō — Japan's special bird), Himalayan jumping spider (lives highest) [japan-animals, mountains-world, asian-mammals]
- ✅ ~~**wetlands-mangroves**~~ 湿地と マングローブ — Kushiro Marsh (red-crowned cranes), Ramsar sites in Japan (e.g. Arao and Higashiyoka tidal flats on the Ariake Sea), mudskipper (Ariake Sea!), horseshoe crab (living fossil, Japan), mangroves on Iriomote, flamingos, hippos (link), water lilies, frogs, herons, otters [rivers-ponds, birds-japan]
- ✅ ~~**city-animals**~~ 町の 動物 — crows (clever: use traffic to crack nuts in Sendai), pigeons (homing skills), sparrows, swallows nesting at shops (lucky in Japan), Nara's deer bowing, tanuki in Tokyo, foxes in London, raccoons in Toronto, macaques in Lopburi (Thailand), cats of Nagasaki (bobtail "o-tenkiri" kinked tails — Nagasaki is known for them), bats under bridges, peregrine falcons on skyscrapers [town, pets]
- ✅ ~~**islands-animals**~~ 島の 生きもの — Galápagos tortoise, marine iguana, Darwin's finches, Komodo dragon, lemurs (Madagascar), kiwi & kakapo (NZ), dodo (extinct — gentle, why protecting matters), Amami rabbit (link), Ogasawara "Galápagos of the Orient", Yakushima deer & macaques, Tsushima leopard cat (link) [islands-world, endangered-japan]
- ✅ ~~**cave-deep-earth**~~ どうくつの 生きもの — olm (human fish, lives 100 years), blind cave fish, glowworms (Waitomo), cave bats, cave crickets, Akiyoshido life [waterfalls-caves, night-animals]

Countries: the built country rooms (Oceania 4, Americas 6, Africa 7, Asia 8, Europe 8) should be expanded through section C (`southeast-asia`, `south-asia`, `west-asia`, `east-asia-2`, `nordic`, `western-europe-2`, `eastern-europe`, `central-america-caribbean`, `south-america-2`, `africa-2`, `pacific-islands`), with **flags-stories** (N9) and **continents-oceans** (N10) linked from every country room.

**Suggested build order:** N1–N4 (current-unit wings) → O animal sisters → N5–N8 → C country expansions with N9/N10 → N11–N14.
