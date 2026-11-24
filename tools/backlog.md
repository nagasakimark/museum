# Museum content backlog

A planning list for せかい はくぶつかん. Ask Claude things like:

- "Build the next 5 topics from section D"
- "Do all of 'World Music & Dance'"
- "Add photos for the art rooms"
- "Pick 10 unbuilt topics at random and build them"

Each built topic becomes one room. Doors between rooms come from each topic's `links`.

## Content rules (apply to everything)

- **Japanese first, simple English** for key words: names, countries, foods, colours, numbers, etc.
- **Kanji:** keep to roughly 5th-grade level; otherwise use kana.
- **Nothing controversial or upsetting.** No war scenes, violence, injury, death imagery, nudity, romance, alcohol, tobacco or gambling. No religious debate, politics or current conflicts. Nothing about Japan's controversial history (e.g. wartime forced labour; avoid Gunkanjima). A plain mention of a historical war is OK, but nothing graphic.
- **Art:** only calm, family-friendly works such as landscapes, still lifes, portraits, patterns, crafts and abstract art. Avoid nude sculpture and paintings (e.g. Botticelli's *Venus*, Michelangelo's *David*), war art (*Guernica*, Goya), and frightening works.
- **No external links in the app.** Credits go in `site/README.md`.
- **Facts:** well established and checkable. Conservation statuses use the IUCN Red List (the Japan Red List for Japanese subspecies).
- **Photos:** Wikimedia Commons, downloaded on Mark's laptop (`tools/fetch.py`). Every photo is checked by eye before use.
- **Size:** 6–11 exhibits per normal room, and up to ~16 for `long` / `timeline` rooms.

Layout tags: `square` (default), `small`, `wide` (two partition walls), `tall`, `long` (gallery), `timeline` (long gallery, walk-through order with years).

---

## ✅ Built (85 topics)

animals, ocean, polar, rainforest, savanna, desert, forest, japan-animals, insects, birds, dinosaurs, pets, farm, deepsea, animal-records, plants, weather, solar-system, moon-stars, space-explore, regions, asia, europe, africa, americas, oceania, landmarks, geo-records, writing, japan, nagasaki, japanese-food, japan-traditions, japan-inventions, months1, months2, festivals-world, world-dishes, sweets, fruits, vegetables, ball-sports, olympics, winter-sports, jobs-town, jobs-dream, vehicles, instruments, school-subjects, school-events, inventions, town, stationery, clothes, feelings, colors-shapes, human-body, earth-science, rocks-gems, science-fun, heroes, money, games-world, toys-tales (Japanese folk tales), world-tales, robots, environment, endangered-japan, japan-islands, reptiles, aquarium, dog-breeds, art, numbers, time, daily-life, breakfast-world, houses-world, foods-health, sports-world, art-timeline `timeline`, art-movements `wide`, art-japan-history `timeline`, art-world-crafts `wide`, art-mediums

---

## A. Animals & Nature

- **african-mammals** アフリカの 動物 — gorilla (mountain), chimpanzee, bonobo, African wild dog, meerkat, warthog, aardvark, okapi, African buffalo, wildebeest (migration), Thomson's gazelle, impala, spotted hyena (neutral facts), African penguin, ring-tailed lemur, fossa
- **asian-mammals** アジアの 動物 — Asian elephant, Bengal tiger, snow leopard, red panda, sun bear, orangutan (Sumatran), proboscis monkey, slow loris, Malayan tapir, Indian rhinoceros, yak, Bactrian camel, Przewalski's horse, takin, binturong
- **americas-animals** アメリカ大陸の 動物 — bald eagle, American bison, grizzly bear, raccoon, skunk, armadillo, capybara, giant anteater, llama, alpaca, Andean condor, poison dart frog, toucan, jaguar, manatee
- **australia-animals** オーストラリアの 動物 — kangaroo, wallaby, koala, wombat, platypus, echidna, Tasmanian devil, quokka, emu, cassowary, kookaburra, cockatoo, sugar glider, dingo, frilled lizard
- **antarctic-life** 南極の 生きもの — emperor penguin, Adélie penguin, chinstrap penguin, king penguin, leopard seal, Weddell seal, krill, Antarctic toothfish, snow petrel, wandering albatross, orca, humpback whale
- **whales-dolphins** クジラと イルカ — blue whale, humpback whale, sperm whale, orca, beluga, narwhal, minke whale, bottlenose dolphin, Pacific white-sided dolphin, finless porpoise (Japan), Amazon river dolphin, Hector's dolphin
- **sharks-rays** サメと エイ — whale shark, great white shark, hammerhead, tiger shark, megamouth shark (found in Japan), goblin shark (Japan), basking shark, nurse shark, manta ray, stingray, sawfish, Greenland shark
- **coral-reef** サンゴしょう — coral polyps, clownfish, sea anemone, parrotfish, butterflyfish, moray eel, sea turtle, giant clam, sea slug, cleaner wrasse, Okinawa reefs, Great Barrier Reef
- **rivers-ponds** 川と 池の 生きもの — killifish (medaka), carp (koi), catfish, freshwater crab, crayfish, frog tadpole, newt, water strider, dragonfly larva, kingfisher, otter, platypus, salmon run, ayu (sweetfish)
- **satoyama** 里山の 生きもの — Japanese tanuki, fox, hare, badger, weasel, firefly, rhinoceros beetle, stag beetle, rice-field frog, heron, swallow, Japanese white-eye, bush warbler (uguisu), cicada
- **birds-japan** 日本の 鳥 — green pheasant (national bird), Japanese white-eye, bush warbler, sparrow, swallow, crow, Japanese tit, kingfisher, grey heron, red-crowned crane, Japanese crested ibis, Steller's sea eagle, Blakiston's fish owl, Okinawa rail, ptarmigan
- **birds-world** 世界の めずらしい 鳥 — kiwi, puffin, toucan, quetzal, bird-of-paradise, secretary bird, albatross, hornbill, shoebill, hoatzin, kakapo, Arctic tern (longest migration), roadrunner, hummingbird, lyrebird (mimic)
- **butterflies-moths** チョウと ガ — monarch, swallowtail, Japanese emperor (oomurasaki, national butterfly), cabbage white, morpho, birdwing, glasswing, atlas moth, luna moth, silkworm (silk), life cycle (egg → caterpillar → pupa → butterfly)
- **beetles-japan** 日本の 甲虫 — rhinoceros beetle, Miyama stag beetle, giant stag beetle, ladybird, jewel beetle (tamamushi), firefly, longhorn beetle, dung beetle, diving beetle, weevil, Hercules beetle (world)
- **insect-sounds** 秋の 鳴く虫 — bell cricket (suzumushi), pine cricket (matsumushi), field cricket, katydid, Japanese cicadas (minmin, higurashi, tsukutsuku-boshi), grasshopper; how insects make sound
- **night-animals** 夜の 動物 — owl, bat, aye-aye, slow loris, kiwi, firefly, moth, hedgehog, tarsier, kinkajou, raccoon, flying squirrel (momonga), why eyes shine at night
- **animal-babies** 動物の 赤ちゃん — joey (kangaroo), calf, cub, kitten, puppy, foal, chick, tadpole, caterpillar, eaglet, piglet, lamb, kid (goat), panda cub (tiny at birth)
- **animal-homes** 動物の すみか — beaver dam, bird's nest, beehive, ant nest, termite mound, rabbit burrow, spider web, bear den, weaver bird nest, hermit crab shell, prairie dog town, swallow nest under eaves
- **camouflage** かくれる 名人 — chameleon, stick insect, leaf insect, octopus, flounder, snowshoe hare, arctic fox, owl, orchid mantis, leafy sea dragon, ptarmigan, zebra stripes
- **migration** 旅を する 動物 — Arctic tern, monarch butterfly, wildebeest, salmon, eel, humpback whale, swallow, white-fronted goose, caribou, sea turtle, Japanese swallow to Southeast Asia
- **winter-animals** 冬の すごし方 — bear (hibernation), dormouse (yamane), chipmunk, frog, snake, ladybirds clustering, snow monkeys, ptarmigan colour change, stoat, swans arriving in Japan
- **food-chain** 食べる・食べられる — sun → plants → herbivores → carnivores, plankton chain, decomposers (mushrooms, earthworms), ocean food web, balance of nature (gentle, no hunting images)
- **prehistoric-mammals** 大むかしの ほにゅうるい — woolly mammoth, Naumann's elephant (Japan), sabre-toothed cat (no hunting scene), giant sloth, woolly rhino, Irish elk, Megalodon (shark), Desmostylus (Japan), glyptodont
- **dinosaurs-2** きょうりゅう 時代別 `timeline` — Triassic (Eoraptor, Plateosaurus), Jurassic (Allosaurus, Diplodocus, Archaeopteryx), Cretaceous (Spinosaurus, Velociraptor, Ankylosaurus, Parasaurolophus, Pachycephalosaurus), Japanese finds (Fukuisaurus, Tambatitanis, Kamuysaurus)
- **cats-breeds** ネコの しゅるい — Japanese bobtail, Maine Coon, Persian, Siamese, Scottish Fold, Russian Blue, Bengal, Sphynx, Norwegian Forest Cat, American Shorthair, Munchkin, Ragdoll
- **horses** ウマの せかい — Dosanko (Hokkaido), Taishu horse (Tsushima, Nagasaki!), Misaki horse, Arabian, Thoroughbred, Shetland pony, Clydesdale, Przewalski's horse, zebra relatives, horseshoes
- **small-pets** 小さな ペット — guinea pig, hamster (types), rabbit breeds, chinchilla, ferret, budgie, Java sparrow, goldfish types, medaka, stag beetle keeping, hermit crab
- **mushrooms** きのこの せかい — shiitake, enoki, maitake, matsutake, shimeji, eringi, button mushroom, glowing mushrooms, giant puffball, mould and penicillin, yeast in bread ("don't pick wild mushrooms" safety note)
- **trees** 世界の 木 — cherry, maple (momiji), ginkgo, Japanese cedar, pine, bamboo, baobab, coast redwood, giant sequoia, banyan, olive, coconut palm, rubber tree, cork oak, maple syrup tree
- **flowers-world** 世界の 花・国花 — cherry blossom & chrysanthemum (Japan), rose (UK), tulip (Netherlands), lotus (India), plum blossom (China), hibiscus (Korea: mugunghwa), edelweiss, sunflower, protea (South Africa), orchids, lavender, lily of the valley
- **flowers-japan-seasons** 日本の 四季の 花 — plum, cherry, wisteria, azalea, hydrangea, morning glory, sunflower, lotus, cosmos, chrysanthemum, camellia, narcissus
- **rice** お米が できるまで `long` — seeds, seedlings, rice planting, rice paddy life, growing, harvest, drying, milling, kinds of rice, rice dishes of the world, mochi, rice in Japanese words (ご飯 = meal)
- **seeds-growing** たねと 成長 — sunflower seed, dandelion fluff, maple helicopter seeds, coconut floating, burrs (inspired Velcro), germination, roots, photosynthesis basics, giant pumpkins
- **world-records-nature** 自然の 世界一 II — largest flower (Rafflesia), tallest tree, oldest tree (bristlecone pine), largest seed (coco de mer), fastest-growing plant (bamboo), largest leaf, biggest lily pad (Victoria amazonica)

## B. Earth, Weather & Space

- **volcanoes-world** 世界の 火山 — Mt Fuji, Sakurajima, Unzen (Nagasaki, factual), Aso, Kilauea, Mauna Kea, Vesuvius (no casualty details), Etna, Krakatoa, Kilimanjaro (dormant), Olympus Mons (Mars), volcanic islands (Nishinoshima growing)
- **mountains-world** 世界の 山 — Everest, K2, Kilimanjaro, Mont Blanc, Matterhorn, Denali, Aconcagua, Table Mountain, Mt Fuji, Uluru, Mt Kosciuszko, Andes, Himalayas, highest in each continent
- **rivers-lakes** 川と みずうみ — Nile, Amazon, Yangtze, Mississippi, Danube (10 countries), Ganges, Shinano (Japan's longest), Lake Biwa, Lake Baikal, Lake Titicaca, Great Lakes, Dead Sea (float), Caspian Sea
- **waterfalls-caves** たきと どうくつ — Angel Falls, Niagara, Victoria Falls, Iguazu, Kegon Falls, Nachi Falls, Akiyoshido Cave, Son Doong (largest cave), Waitomo glowworm caves, Mammoth Cave, stalactites vs stalagmites
- **deserts-world** 世界の さばく — Sahara, Gobi, Atacama (driest; flowers bloom), Arabian, Kalahari, Namib (red dunes), Antarctica (cold desert), Tottori sand dunes, oasis, sandstorms, desert plants
- **clouds** 雲の しゅるい — cumulus, cumulonimbus, stratus, cirrus, altocumulus (sheep clouds), lenticular, mammatus, fog, contrails, rainbow clouds; Japanese cloud names (うろこ雲, いわし雲, 入道雲)
- **extreme-weather** 地球の 天気 世界一 — hottest place (Death Valley), coldest (Antarctica), wettest (Mawsynram), snowiest in Japan, biggest hailstone, auroras, typhoon vs hurricane vs cyclone names, tornadoes (no damage pictures)
- **climate-zones** 世界の 気候 — tropical, dry, temperate, cold, polar; Christmas in summer (Australia); midnight sun; monsoon; Japan's long north–south climate
- **earth-timeline** 地球 46億年の 旅 `timeline` — Earth forms, first ocean, first life, Snowball Earth, Cambrian explosion, first fish, plants on land, first amphibians, dinosaurs, flowering plants, dinosaurs end, mammals rise, ice ages, humans
- **moons** 太陽系の 月 — Moon, Phobos, Europa (ice ocean), Io (volcanoes), Ganymede (largest), Titan (thick air), Enceladus (geysers), Triton, Charon; Japanese moon-rabbit story
- **constellations** 星座の 物語 — Orion, Big Dipper, Cassiopeia, Southern Cross, Pleiades (Subaru), Summer Triangle (Vega, Altair, Deneb — Tanabata), Scorpius, Leo, zodiac signs, how to find the North Star
- **telescopes-observatories** 天文台と 望遠鏡 — Galileo's telescope, Subaru Telescope (Hawaii, Japan), Hubble, James Webb, ALMA (Chile), Nobeyama, planetarium, radio telescopes
- **comets-asteroids** すい星と 小わくせい — Halley's Comet, Hale-Bopp, Itokawa, Ryugu, Ceres, meteor showers (Perseids, Geminids), meteorites, Hayabusa missions
- **space-japan** 日本の 宇宙開発 `timeline` — Pencil rocket (1955), Osumi satellite (1970), Kibo module, Japanese astronauts (Mohri, Mukai, Wakata, Noguchi, Hoshide, Yui, Furukawa, Onishi, Kanai), H-II/H3 rockets, Hayabusa 1/2, SLIM moon landing (2024)
- **astronaut-life** 宇宙での くらし — sleeping, eating, toilets (lightly), exercise, washing hair, floating water, view of Earth, spacesuits, training, mission patches

## C. World Cultures & Countries

- **southeast-asia** 東南アジアの 国 — Thailand, Vietnam, Cambodia (Angkor Wat), Laos, Myanmar (neutral), Malaysia, Singapore (Merlion), Indonesia, Philippines, Brunei, Timor-Leste
- **south-asia** 南アジアの 国 — India, Nepal (Everest), Bhutan (happiness), Sri Lanka (tea), Bangladesh, Maldives, Pakistan (neutral facts only: K2, food)
- **west-asia** 西アジアの 国 — Türkiye (Cappadocia balloons), UAE (Burj Khalifa), Saudi Arabia (desert), Oman, Jordan (Petra), Qatar, Uzbekistan (blue tiles), Kazakhstan; neutral culture/geography only
- **east-asia-2** 東アジア もっと — China (regions, pandas, calligraphy), South Korea (hanbok, K-pop, kimchi-making), Mongolia (Naadam), Hong Kong, Macau (Portuguese links), Taiwan (labelled Taiwan; night markets, Taipei 101)
- **nordic** 北ヨーロッパの 国 — Norway (fjords), Sweden, Finland (Moomin's home country — text only), Denmark (LEGO's home — text only), Iceland (geysers), Sámi culture (respectful), aurora, hygge
- **western-europe-2** 西ヨーロッパ もっと — Belgium (waffles, chocolate), Switzerland (Alps, clocks), Austria (music), Ireland (green, harp), Portugal (tiles, castella's origin), Luxembourg, Monaco
- **eastern-europe** 東ヨーロッパの 国 — Poland, Czechia (castles, puppets), Hungary, Croatia, Romania (painted monasteries — architecture), Bulgaria (yogurt, roses), Greece islands; avoid current conflicts
- **central-america-caribbean** 中央アメリカと カリブ — Mexico (more), Guatemala (Maya, quetzal), Costa Rica (nature), Panama Canal, Cuba (classic cars, music), Jamaica (reggae), Bahamas, Dominican Republic (baseball)
- **south-america-2** 南アメリカ もっと — Chile (long country), Colombia (coffee, flowers), Ecuador (Galápagos, equator), Bolivia (salt flats), Venezuela (Angel Falls), Uruguay, Paraguay
- **africa-2** アフリカ もっと — Ethiopia (coffee's home), Nigeria (big cities, Nollywood), Senegal (pink lake), Rwanda (gorillas, clean cities), Botswana (Okavango), Namibia (dunes), Zambia & Zimbabwe (Victoria Falls), Uganda, Ghana (more)
- **pacific-islands** 太平洋の 島々 — Palau, Samoa, Tonga, Tuvalu, Kiribati (first new year), Vanuatu, Solomon Islands, Hawaii (USA), Tahiti, Easter Island (Chile), Guam, Saipan
- **hello-world** 世界の 「こんにちは」 `long` — 30+ languages with kana reading: English, Chinese, Korean, Spanish, French, German, Italian, Portuguese, Russian, Arabic, Hindi, Thai, Vietnamese, Indonesian, Tagalog, Swahili, Hawaiian, Māori, Ainu (イランカラプテ), Okinawan (はいさい), Nagasaki dialect, sign language
- **numbers-languages** 1から10を 世界の ことばで — English, Chinese, Korean, Spanish, French, Swahili, Hindi, Thai, Japanese (hitotsu/ichi), Roman numerals, Arabic numerals' journey
- **traditional-clothes** 世界の 民族衣装 — kimono, yukata, hanbok, qipao, sari, kilt, dirndl, poncho, kente, áo dài, hula skirt (respectful), Sámi gákti, sombrero, fez
- **world-new-year** 世界の お正月 — Japan (osechi, hatsumode), China (Spring Festival), Korea (Seollal, tteokguk), Spain (12 grapes), Scotland (Hogmanay), Thailand (Songkran), Iran (Nowruz), Ethiopia (Enkutatash), fireworks in Sydney
- **school-lunch-world** 世界の 給食 — Japan, Korea, France, Finland (free lunch), USA, Brazil, India (midday meal), Italy, UK, China; Japanese kyushoku manners (serving duty)
- **schools-world** 世界の 学校 — school year start months, uniforms or not, school buses, Finnish schools, outdoor classes, school sizes, Japanese cleaning time (soji) admired abroad, randoseru
- **markets-world** 世界の 市場 — Tsukiji/Toyosu (tuna), floating markets (Thailand), Grand Bazaar (Istanbul), Christmas markets (Germany), night markets (Taiwan), souks (Morocco), farmers' markets
- **world-transport** 世界の のりもの — tuk-tuk, gondola, double-decker bus, cable car (San Francisco), jeepney, rickshaw, dog sled, camel caravan, reed boats (Titicaca), Venice vaporetto, Swiss mountain trains
- **world-houses-2** 世界の 家 II — Cappadocia cave houses, Hobbit-like turf houses (Iceland), Toraja houses (Indonesia), Tulou (China), trulli (Italy), stilt houses (Malaysia), houseboats (Kerala)
- **world-dance** 世界の おどり — ballet (France/Russia), flamenco, hula, haka (Māori), samba, tango, Irish step dance, Bharatanatyam, K-pop dance, Bon odori, Awa odori, Yosakoi, Eisa (Okinawa)
- **world-theatre** 世界の げき — kabuki, noh, bunraku, kyogen, Peking opera, Shakespeare (Globe Theatre), puppetry (Czech), shadow puppets (Indonesia wayang), musicals, rakugo
- **lucky-symbols** 世界の 「えんぎもの」 — maneki-neko, daruma, four-leaf clover, horseshoe, ladybird, red envelope, number 8 (China), number 7 (West), evil-eye charm (Türkiye, as craft), dreamcatcher (respectfully), koinobori, kadomatsu
- **mythical-creatures** 世界の 空想の 生きもの — dragon (East vs West), phoenix, unicorn, kappa, tengu (friendly framing), kitsune, mermaid, Pegasus, griffin, Nessie, yeti, Kirin (legendary), baku (eats bad dreams) — keep friendly, no scary images
- **birthdays-world** 世界の たんじょう日 — Happy Birthday song history, cake & candles, birthday noodles (China, long life), seaweed soup (Korea), piñata (Mexico), ear-pulling (Hungary), 7-5-3 (Japan), coming-of-age day

## D. Japan & Nagasaki

- **pref-hokkaido-tohoku** 北海道・東北の 県 `long` — Hokkaido, Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima: each with famous food, place and festival
- **pref-kanto** 関東の 県 — Tokyo, Kanagawa, Saitama, Chiba, Ibaraki, Tochigi, Gunma
- **pref-chubu** 中部の 県 `long` — Niigata, Toyama, Ishikawa, Fukui, Yamanashi, Nagano, Gifu, Shizuoka, Aichi
- **pref-kinki** 近畿の 県 — Osaka, Kyoto, Hyogo, Nara, Mie, Shiga, Wakayama
- **pref-chugoku-shikoku** 中国・四国の 県 `long` — Tottori, Shimane, Okayama, Hiroshima (food, Miyajima — no war content), Yamaguchi, Tokushima, Kagawa, Ehime, Kochi
- **pref-kyushu-okinawa** 九州・沖縄の 県 `long` — Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima, Okinawa
- **nagasaki-city** 長崎市 たんけん — Glover Garden, Oura area (architecture), Dejima, Chinatown (Shinchi), Megane-bashi (spectacles bridge), Mt Inasa, Nagasaki Penguin Aquarium, Dutch Slope, Peace Park (gentle: "a place to wish for peace"), streetcars (チンチン電車), Nagasaki Port, Tomachi area
- **nagasaki-food** 長崎の 食べもの — champon, sara-udon, castella, Turkish rice, kakuni-manju, chirin-chirin ice, Sasebo burger, Goto udon, Shimabara somen, Shippoku cuisine, milk shake (eaten with a spoon), biwa (loquat)
- **nagasaki-prefecture** 長崎県 めぐり — Sasebo (Kujukushima), Huis Ten Bosch, Hasami ware, Unzen hot springs, Shimabara (castle, water town carp), Iki, Tsushima, Goto, Hirado (first Dutch trading post), Omura (flowers), Isahaya bay
- **nagasaki-festivals** 長崎の 行事 — Kunchi, Peiron, Lantern Festival, Shoro-nagashi (lantern boats, respectful), Hata-age (kite fighting), Nagasaki Christmas lights, Hydrangea festival (Ajisai is the city flower)
- **japanese-castles** 日本の お城 — Himeji, Matsumoto, Inuyama, Hikone, Matsue, Kochi, Matsuyama, Osaka, Nagoya (golden shachihoko), Kumamoto, Shimabara (Nagasaki), Hirado; parts of a castle
- **shrines-temples** 日本の 神社と お寺 (architecture & culture) — torii, Itsukushima floating torii, Fushimi Inari gates, Kinkakuji, Ginkakuji, Kiyomizu-dera stage, Horyuji (oldest wooden buildings), Todaiji Great Buddha, Ise, komainu; how to visit politely (no religious claims)
- **japanese-gardens** 日本の 庭園 — Kenrokuen, Korakuen, Kairakuen, Ritsurin, rock garden (Ryoanji), moss gardens, koi ponds, stone lanterns, bonsai, Japanese gardens abroad
- **trains-japan** 日本の 電車 `long` — first railway (1872), steam locomotives (SL), Shinkansen series (0, 100, 300, 500, 700, N700S, E5, E6, E7, 800 Kyushu, Nishi-Kyushu Kamome), Doctor Yellow, sleeper trains, streetcars (Nagasaki), monorail, maglev
- **crafts-japan** 日本の 伝統工芸 — Arita ware, Hasami ware, Wajima lacquer, kokeshi, daruma, Edo kiriko glass, Nambu iron kettles, washi paper, Kyoto yuzen dyeing, Hakata dolls, folding fans (sensu), furoshiki, Japanese knives
- **wagashi-seasons** 季節の 和がし — sakura-mochi, kashiwa-mochi, mizu-yokan, warabi-mochi, tsukimi dango, chestnut kinton, kagami-mochi, taiyaki, dorayaki, daifuku, monaka, konpeito (Portuguese origin)
- **regional-dishes** 日本の ご当地グルメ — okonomiyaki (Osaka/Hiroshima), takoyaki, Hakata ramen, Sapporo miso ramen, kiritanpo, Sendai gyutan, Utsunomiya gyoza, Nagoya miso-katsu, Okinawa soba, goya champuru, Kagawa udon, Nagasaki champon
- **japanese-words-english** 英語に なった 日本語 — tsunami, karaoke, emoji, sushi, origami, anime, manga, bonsai, tofu, futon, typhoon (via Chinese), kaizen, umami, kawaii, ninja, judo
- **wasei-eigo** 和製英語に 気をつけて! — "salaryman", "consent" (=outlet), "mansion" (=apartment), "naive", "baby car" (=stroller), "Y-shirt" (=dress shirt), "cunning" (=cheating), "free dial", "note PC", "pierce" (=earrings), "shaapen" (=mechanical pencil)
- **japan-unesco** 日本の 世界遺産 `wide` — Mt Fuji, Himeji Castle, Yakushima, Shirakawa-go, Itsukushima, Horyuji, Kyoto, Nara, Nikko, Shiretoko, Ogasawara, Amami/Tokunoshima/Yanbaru, Mozu tombs (Kofun), Jomon sites, Tomioka silk mill, Iwami silver mine, Hiraizumi, Okinawa gusuku sites, Nagasaki churches (as heritage architecture only, neutral wording)
- **japan-history** 日本の 歴史 `timeline` — Jomon, Yayoi (rice farming), Kofun, Asuka (Horyuji), Nara (Todaiji), Heian (kana, Tale of Genji), Kamakura, Muromachi (Kinkakuji, noh), Azuchi-Momoyama (castles), Edo (Dejima, ukiyo-e), Meiji (railway, schools), Taisho, Showa (Tokyo Olympics 1964, Shinkansen), Heisei, Reiwa — gentle overview only, no war detail
- **japanese-mountains** 日本の 山 — Fuji, Kita-dake, Hotaka, Yarigatake, Daisetsuzan, Mt Aso, Unzen (Nagasaki), Sakurajima, Mt Takao, Mt Inasa, Japanese Alps; mountain day (Aug 11)
- **onsen** おんせん — Kusatsu, Beppu (jigoku views), Noboribetsu, Arima, Dogo, Unzen, Ureshino (near Nagasaki), Obama (Nagasaki), snow monkeys, onsen manners, onsen symbol ♨ (new pictogram story)
- **seasonal-japan** 日本の 四季 — spring (hanami), rainy season, summer (fireworks, watermelon splitting), autumn (momiji-gari, moon viewing), winter (kotatsu, snowmen); seasonal words; 24 seasons (sekki) simplified
- **japan-records** 日本の 日本一 — tallest mountain, longest river, largest lake, tallest tower (Skytree), longest bridge, deepest bay (Suruga), largest prefecture (Hokkaido), smallest prefecture (Kagawa), most islands (Nagasaki!)

## E. English & Language (New Horizon-friendly)

- **alphabet-room** A to Z の へや `long` — one exhibit per letter: capital/small letter, a word, a fun fact (e.g. "A is for apple"; "Q is almost always followed by U")
- **phonics** 英語の 音 — short vowels a/e/i/o/u, magic e, sh/ch/th, silent letters (knee, write), same spelling different sounds, rhymes
- **onomatopoeia** 動物の 鳴き声 くらべ — dog (wan-wan / woof), cat (nyaa / meow), rooster (kokekokko / cock-a-doodle-doo), pig, cow, frog (kero-kero / ribbit), duck, bird, mouse, sheep, in several languages
- **uk-us-english** イギリス英語と アメリカ英語 — lift/elevator, biscuit/cookie, chips/fries, crisps/chips, flat/apartment, football/soccer, rubbish/trash, holiday/vacation, colour/color, petrol/gas
- **words-from-languages** 英語の ことばの ふるさと — ketchup (Chinese/Malay), tea (Chinese), chocolate (Nahuatl), banana (West Africa), robot (Czech), kindergarten (German), ballet (French), piano (Italian), safari (Swahili), shampoo (Hindi), tsunami (Japanese)
- **opposites** 反対の ことば — big/small, hot/cold, long/short, fast/slow, happy/sad, up/down, open/close, old/new, heavy/light, high/low
- **prepositions** どこに ある? — in, on, under, by, next to, between, behind, in front of (with illustrated scenes)
- **body-words** 体の 英単語 — head, shoulders, knees, toes, eyes, ears, mouth, nose, hand, finger, foot, elbow
- **family-words** 家族の ことば — mother, father, sister, brother, grandmother, grandfather, aunt, uncle, cousin, baby, family trees (generic, no real people)
- **tongue-twisters** 早口ことば — "She sells seashells", "Peter Piper", "Red lorry, yellow lorry", "Unique New York"; Japanese: 生麦生米生卵, 隣の客は…, 東京特許許可局
- **sign-braille** 手話と 点字 — Braille alphabet (Louis Braille), braille in daily life (lift buttons, ticket machines), tactile paving (invented in Japan, Okayama 1967), sign language hello/thank you (JSL & ASL)
- **codes** ひみつの 暗号 — Morse code (SOS), semaphore flags, ship signal flags, Caesar cipher, pigpen cipher, QR codes, barcodes
- **symbols-signs** 世界の マーク — pictograms (Tokyo 1964 origin), emergency exit sign (designed in Japan), recycle mark, road signs around the world, map symbols of Japan (new ones for foreigners), weather symbols

## F. Science & Technology

- **simple-machines** かんたんな 機械 — lever, pulley, wheel and axle, inclined plane, wedge, screw, gears; seesaw, scissors, bottle opener
- **electricity** 電気の ひみつ — circuits, batteries (Volta), light bulbs, static, conductors vs insulators, power plants, saving electricity, Edison vs Tesla (friendly)
- **light-color** 光と 色 — rainbow, prism, mirrors, lenses, why the sky is blue, sunset colours, shadows, colour mixing (light vs paint), periscope
- **sound-science** 音の 科学 — vibration, echoes, speed of sound, string telephones, animal hearing (bats, dolphins), musical pitch, ear parts, loudest/quietest sounds
- **water-cycle** 水の 旅 — evaporation, clouds, rain, rivers, ocean, ice, groundwater, water treatment, how much water we use
- **states-of-matter** 固体・液体・気体 — ice/water/steam, melting, freezing, dry ice, slime (non-Newtonian), air has weight, balloons
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

- **paintings-italy-spain** イタリア・スペインの 名画 — Mona Lisa, Arcimboldo's fruit-and-vegetable portraits, Raphael's School of Athens, Canaletto's Venice views, Velázquez's Las Meninas, Murillo's children (calm), Sorolla's beaches, Miró's colourful shapes
- **paintings-netherlands** オランダの 名画 — Vermeer (Milkmaid, Girl with a Pearl Earring, View of Delft), Rembrandt (self-portraits, Night Watch as group portrait), Van Gogh (Sunflowers, Bedroom in Arles, Almond Blossom), Mondrian, Escher
- **paintings-france** フランスの 名画 — Monet (Impression Sunrise, Water Lilies), Renoir (calm scenes only), Degas (dancers), Cézanne (apples), Seurat (La Grande Jatte), Rousseau (tiger in jungle), Matisse (The Snail cut-outs), Millet (The Gleaners)
- **paintings-uk-usa** イギリス・アメリカの 名画 — Constable (The Hay Wain), Turner (sunsets), Beatrix Potter illustrations, Whistler, Hopper (Nighthawks), Georgia O'Keeffe (flowers), Grandma Moses, Warhol, Calder mobiles
- **art-asia** アジアの 美術 — Chinese landscape painting, calligraphy, Along the River at Qingming (scroll), Korean folk painting (minhwa: tigers & magpies), Mughal miniatures (gardens), Thai temple murals (architecture), batik (Indonesia)
- **japanese-painters** 日本の 画家 — Sesshu, Hasegawa Tohaku (Pine Trees), Ogata Korin (Irises), Ito Jakuchu, Maruyama Okyo, Hokusai, Hiroshige, Yokoyama Taikan (Fuji), Higashiyama Kaii (blue landscapes), Okamoto Taro (Tower of the Sun), Kusama Yayoi
- **sculpture-world** 世界の ちょうぞう — Moai, Great Sphinx, Terracotta Army, Kamakura Daibutsu (landmark), Little Mermaid (Copenhagen), Merlion, Statue of Liberty, Tower of the Sun, Cloud Gate (Chicago), Spoonbridge and Cherry, Hachiko statue
- **architecture-timeline** 建物の 歴史 `timeline` — pyramids, Parthenon, Colosseum, Horyuji, Angkor Wat, Gothic cathedrals (architecture), Taj Mahal, Himeji Castle, Eiffel Tower, Sydney Opera House, Tokyo Skytree, Burj Khalifa
- **architects** 有名な 建築家 — Gaudí (Sagrada Família, Park Güell), Frank Lloyd Wright (Fallingwater, old Imperial Hotel), Tange Kenzo, Ando Tadao (Church of Light — as architecture), Kuma Kengo (National Stadium), Zaha Hadid, Le Corbusier
- **picture-books** 世界の 絵本の れきし — Peter Rabbit (Beatrix Potter, PD), Alice illustrations (Tenniel, PD), Japanese picture-book culture, kamishibai (paper theatre), pop-up books; describe modern books in text only (no character images)
- **manga-anime-history** まんがと アニメの れきし `timeline` — Choju-giga, Hokusai Manga, kamishibai, early animation, Tezuka Osamu (text only), anime around the world, how animation works (flip books, frames) — no copyrighted characters
- **photography** 写真の れきし — camera obscura, first photo (Niépce), Daguerre, film cameras, instant cameras, digital cameras, smartphones, famous nature photos (described)
- **composers** 有名な 作曲家 `timeline` — Vivaldi (Four Seasons), Bach, Mozart, Beethoven (Ode to Joy, sung in Japan every December), Chopin, Tchaikovsky (Nutcracker), Debussy, Taki Rentaro (Kojo no Tsuki), Yamada Kosaku (Akatombo)
- **orchestra** オーケストラの 楽器 `wide` — strings (violin, viola, cello, double bass, harp), woodwind (flute, oboe, clarinet, bassoon), brass (trumpet, horn, trombone, tuba), percussion (timpani, xylophone, cymbals, triangle), conductor
- **world-instruments** 世界の 楽器 — koto, shakuhachi, taiko, sanshin (Okinawa), erhu, gayageum, sitar, tabla, didgeridoo, bagpipes, steel drum, ukulele, kalimba, djembe, accordion, alphorn, panpipes, balalaika
- **music-genres** 音楽の ジャンル — classical, jazz, rock, pop, hip-hop (as dance/music, clean), reggae, samba, bossa nova, flamenco, K-pop, J-pop, enka, min'yo, film music, video-game music
- **dance-japan** 日本の おどり — Bon odori, Awa odori, Yosakoi, Eisa, Kagura (as performing art), Nihon-buyo, Soran-bushi (school dance!)
- **crafts-to-make** 作って みよう — origami crane, paper fortune teller, paper planes, kirigami snowflakes, string figures (ayatori), clay pots, tie-dye, leaf rubbings, simple weaving

## H. Sports & Games

- **olympic-sports** オリンピック競技 A to Z `long` — archery, athletics, badminton, basketball, BMX, canoe, climbing, cycling, diving, equestrian, fencing, football, golf, gymnastics, handball, hockey, judo, rowing, rugby sevens, sailing, skateboarding, softball, surfing, swimming, table tennis, taekwondo, tennis, triathlon, volleyball, weightlifting, wrestling
- **paralympic-sports** パラスポーツ — wheelchair basketball, boccia, goalball, blind football, para swimming, wheelchair tennis (Kunieda Shingo), sitting volleyball, para athletics; respect and teamwork
- **martial-arts** 武道 — judo, kendo, karate (Okinawa), aikido, kyudo (archery), sumo, naginata, taekwondo, fencing; dojo manners (no fighting imagery — focus on bowing, uniforms, belts)
- **japanese-games** 日本の 昔あそび — karuta, fukuwarai, hanetsuki, kite flying, menko, otedama, ohajiki, kendama, koma, daruma-san-ga-koronda, ayatori, kagome-kagome
- **playground-world** 世界の 外あそび — tag (oni-gokko and versions), hide-and-seek, hopscotch (around the world), marbles, jump rope rhymes, Red Rover, duck duck goose, Chinese jump rope, sepak takraw
- **puzzles** パズルの せかい — sudoku (named in Japan), crossword, tangram, jigsaw, Rubik's cube, nonogram (picross, Japan), maze, word search, Tower of Hanoi, 15-puzzle
- **stadiums** 世界の スタジアム — Koshien, Tokyo Dome, National Stadium (Tokyo), Wembley, Maracanã, Camp Nou, Yankee Stadium, Wimbledon, Melbourne Cricket Ground, Ryogoku Kokugikan
- **sports-equipment** スポーツの 道具の ひみつ — baseball stitches (108), golf ball dimples, soccer ball panels, shuttlecock feathers, tennis ball fuzz, skis, ice skate blades, running spikes
- **sports-japan-history** 日本の スポーツ史 `timeline` — kemari, sumo, judo's birth, first Japanese Olympian (1912), Tokyo 1964, Sapporo 1972, Nagano 1998, Rugby World Cup 2019, Tokyo 2020

## I. Food & Cooking

- **noodles-world** 世界の めん `long` — ramen, udon, soba, somen, champon, pho, pad thai, spaghetti, lasagne (pasta shapes), Chinese hand-pulled noodles, japchae, laksa, yakisoba, naengmyeon
- **bread-world** 世界の パン — baguette, croissant, naan, pita, tortilla, pretzel, bagel, melon pan, anpan (Japan), injera (Ethiopia), cornbread, rye bread, focaccia, steamed buns
- **street-food** 世界の 屋台グルメ — takoyaki, yakitori, crepes, kebab, tacos, hot dogs, satay, churros, bubble tea, dumplings, arepas, hotteok, elote
- **soups-world** 世界の スープ — miso soup, tom yum, minestrone, borscht, gazpacho, clam chowder, pho, corn soup, onion soup, seaweed soup
- **sweets-world-2** 世界の おかし II — baklava, macarons, churros, mochi, gelato, brigadeiro, pastel de nata, Tim Tams, Turkish delight, alfajores, mango sticky rice, pavlova, apple pie
- **tropical-fruits** 南国の くだもの — dragon fruit, durian (smelly!), lychee, rambutan, mangosteen, papaya, passion fruit, star fruit, guava, jackfruit (biggest fruit), coconut, kiwifruit
- **spices** スパイスの せかい — pepper, cinnamon, ginger, turmeric, chilli (from the Americas), wasabi, sansho, cumin, saffron (most expensive), vanilla, curry powder; Spice Routes (trade, gentle)
- **food-origins** 食べものの ふるさと `timeline` — potatoes, tomatoes, chillies and corn from the Americas; rice from Asia; wheat from the Middle East; coffee from Ethiopia; tea from China; how foods travelled the world
- **tea-world** 世界の お茶 — green tea, matcha, oolong, black tea (British afternoon tea), chai, mint tea (Morocco), bubble tea, barley tea, rooibos, yerba mate; tea ceremony etiquette
- **dairy-cheese** 牛乳と チーズ — milk, butter, yogurt (Bulgaria), cheese types (Gouda, Cheddar, Mozzarella, Swiss, Camembert), how cheese is made, Hokkaido dairy
- **farm-to-table** 食べものが とどくまで `long` — wheat → flour → bread; cacao → chocolate; milk; fish from sea to market; vegetables to supermarket; delivery trucks
- **kitchen-tools** 台所の 道具 — knife, cutting board, pot, frying pan, rice cooker (invented in Japan), chopsticks, spoon, fork, whisk, ladle, microwave (accidental invention), toaster
- **table-manners** 世界の テーブルマナー — itadakimasu/gochisousama, chopstick rules, slurping noodles OK in Japan, eating with hands (India, respectful), bread rules in France, tipping (light), Korean spoon & chopsticks
- **festival-food** お祭りの 食べもの — yakisoba, cotton candy, kakigori, choco banana, ringo-ame, taiyaki, osechi, chitose-ame, toshikoshi soba, mooncakes, Christmas cake (Japan), king cake

## J. People, Jobs & Society

- **jobs-hospital** 病院の しごと — doctor, nurse, pharmacist, dentist, radiographer, physical therapist, paramedic, receptionist, dietitian, hospital clown (gentle)
- **jobs-airport** 空港の しごと — pilot, cabin attendant, air traffic controller, ground staff, mechanic, security, customs, baggage handler, marshaller, airport fire crew
- **jobs-creative** 作る しごと — illustrator, animator, game designer, architect, fashion designer, photographer, potter, carpenter, pastry chef, YouTuber (light), writer
- **jobs-nature** 自然の しごと — farmer, fisher, forester, zookeeper, park ranger, marine biologist, weather forecaster, astronomer, gardener, beekeeper
- **jobs-az** しごと A to Z `long` — actor, baker, carpenter, dentist, engineer, florist, gardener, hairdresser, illustrator, journalist, keeper, lawyer, musician, nurse, office worker, pilot, quiz-show host, reporter, scientist, teacher, umpire, vet, waiter, x-ray technician, yoga teacher, zookeeper
- **explorers** 世界の 探検家 — Amundsen (South Pole), Hillary & Tenzing (Everest), Uemura Naomi, Shirase Nobu (Antarctica), Jacques Cousteau (ocean), Yuri Gagarin, Neil Armstrong, Mae Jemison, Jane Goodall, Ino Tadataka; no colonial conquest stories
- **women-science** 科学者に なった 女性たち — Marie Curie, Ada Lovelace, Katherine Johnson, Rachel Carson, Jane Goodall, Dorothy Hodgkin, Mukai Chiaki, Yasui Kono, Ogino Ginko (first licensed female doctor in Japan)
- **sdgs** SDGs 17の 目標 `wide` — one exhibit per goal (no poverty … partnerships), each with a kid-sized action
- **children-rights** 子どもの 権利 — UN Convention basics: right to play, learn, be safe, be heard, have a name, health; Children's Day
- **bosai** 防災 そなえよう — emergency kit, evacuation drills, typhoon prep, earthquake "drop, cover, hold on", 119/110, hazard maps, Disaster Prevention Day (Sept 1); calm and practical, no damage images
- **community** 町を 支える 人 — volunteers, neighbourhood clean-ups, crossing guards, librarians, post carriers, recycling centre staff, local festivals' organisers
- **world-records-human** 人の 世界一 — tallest building, longest bridge, biggest pizza, largest origami crane, longest train, deepest dive, fastest train, most people dancing Bon odori (keep safe & fun)

## K. History (gentle overviews)

- **ancient-civilizations** 古代文明 — Mesopotamia (writing, wheel), Egypt (pyramids, papyrus), Indus (planned cities), China (silk, paper), Maya (calendar, cacao), Inca (roads, Machu Picchu), Greece (Olympics), Rome (roads, aqueducts)
- **writing-history** 文字の 歴史 `timeline` — cave signs, cuneiform, hieroglyphs, Chinese characters, alphabet journey, kana, printing, typewriter, keyboard, emoji
- **communication-history** 伝える 方法の 歴史 `timeline` — drums & smoke signals, letters & post, telegraph, telephone, radio, TV, fax, mobile phones, email, video calls
- **transport-history** のりものの 歴史 `timeline` — walking, horses, sailing ships, palanquins (kago), steam trains, bicycles, cars, airplanes, Shinkansen, rockets, maglev
- **toys-history** おもちゃの 歴史 `timeline` — ancient dolls, spinning tops, kites, yo-yos, teddy bears (1902), jigsaws, building blocks, model trains, video games (text), robots
- **money-history** お金の 歴史 `timeline` — shells, barter, coins (Lydia), paper money (China), Japanese oban/koban, yen begins (1871), banknote faces, credit cards, e-money
- **clothes-history** 服の 歴史 — animal skins, weaving, silk road, kimono layers (Heian), Edo fashion, Meiji Western clothes, school uniforms, jeans, sneakers
- **edo-life** 江戸時代の くらし — nagaya houses, temple schools (terakoya), sushi stalls, ukiyo-e, kabuki, firefighters (hikeshi), recycling culture, travel on the Tokaido, Dejima trade

## L. Fun & Wonder

- **optical-illusions** ふしぎな 目の さっかく — Müller-Lyer lines, rotating snakes (Kitaoka, Japan), impossible triangle, duck/rabbit, colour illusions, afterimages, Ames room (drawn procedurally on canvas — no photos needed)
- **maps-compass** 地図と 方位 — compass rose, north/south/east/west, map symbols, Ino's map, world map projections (true size!), globes, GPS, treasure-map game (Hamanomachi-style directions)
- **colors-languages** 色の ことば — red/aka, blue vs green (ao), rainbow colours in different countries, colour meanings around the world, traffic lights
- **world-firsts-japan** 日本で 生まれた はじめて — instant noodles, karaoke, emoji, QR code, blue LED, tactile paving, pictograms, bullet train, electric rice cooker, conveyor-belt sushi, portable music player, (verify each claim before building)
- **space-records** 宇宙の 世界一 — biggest planet, hottest planet, tallest volcano (Olympus Mons), longest day (Venus), most moons (Saturn), fastest planet (Mercury), coldest place
- **mystery-room-ideas** ? ふしぎな へや (random rooms) — "What's this object?" guessing room, "Which country?" room, "Odd one out" room, "Old vs new" room (phones, cameras, TVs)
