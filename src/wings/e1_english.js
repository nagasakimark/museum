// Section E (part 1) — onomatopoeia, UK and US English, tongue twisters, borrowed words, codes, symbols.
// [ja, en, pic, fact, about, sayEn, sayJa, year?]
const ROOMS = {
  "onomatopoeia": { ja: "音の ことば (英語と 日本語)", en: "Sound Words in English and Japanese", c: "#c27a3a",
    intro: "日本の イヌは 「ワンワン」、英語の イヌは 「Woof!」。同じ 音でも 聞こえ方が ちがう！",
    links: ["hello-world", "words-from-japanese", "pets", "farm-animals", "tongue-twisters", "uk-us-english"],
    list: [
      ["イヌ", "dog: woof", "🐶", "日本語 「ワンワン」、英語 「Woof! Woof!」", "英語では イヌの 鳴き声を 「woof」や 「bow-wow」と 書きます。小さい イヌは 「yap yap」とも。\n国が かわると、同じ 鳴き声も ちがう 音に 聞こえます。ことばは 耳の くせを 作るのです。", "The dog says, 'Woof!'", "イヌは 「ワン！」と 鳴く。"],
      ["ネコ", "cat: meow", "🐱", "日本語 「ニャー」、英語 「Meow」", "英語では ネコの 鳴き声は 「meow」。のどを ゴロゴロ 鳴らす 音は 「purr」です。\nフランス語では 「miaou」、{韓国|かんこく}語では 「야옹 (ヤオン)」。どれも 少し にて いますね。", "The cat says, 'Meow.'", "ネコは 「ニャー」と 鳴く。"],
      ["ニワトリ", "rooster: cock-a-doodle-doo", "🐓", "日本語 「コケコッコー」、英語 「Cock-a-doodle-doo!」", "英語の ニワトリは 「cock-a-doodle-doo」と 鳴きます。とても 長いですね。\nドイツ語では 「kikeriki (キケリキ)」、スペイン語では 「quiquiriquí (キキリキ)」です。", "Cock-a-doodle-doo! Good morning!", "コケコッコー！ おはよう！"],
      ["ブタ", "pig: oink", "🐷", "日本語 「ブーブー」、英語 「Oink oink」", "英語では ブタは 「oink oink」と 鳴きます。\n鼻を 鳴らす 音を 表す ことばで、日本の 「ブーブー」とは ずいぶん ちがいます。", "The pig says, 'Oink oink.'", "ブタは 「ブーブー」と 鳴く。"],
      ["カエル", "frog: ribbit", "🐸", "日本語 「ケロケロ」、英語 「Ribbit」", "英語の カエルは 「ribbit (リビット)」。日本語の 「ケロケロ」「ゲコゲコ」とは 大ちがいです。\n{韓国|かんこく}語では 「개굴개굴 (ケグルケグル)」と 鳴きます。", "The frog says, 'Ribbit.'", "カエルは 「ケロケロ」と 鳴く。"],
      ["アヒル", "duck: quack", "🦆", "日本語 「ガーガー」、英語 「Quack quack」", "英語の アヒルは 「quack quack (クワッ クワッ)」。\nにせ医者を 英語で 「quack」と いうのも、アヒルの ように ぺちゃくちゃ しゃべる ことから と いわれます。", "The duck says, 'Quack!'", "アヒルは 「ガーガー」と 鳴く。"],
      ["ヒツジ", "sheep: baa", "🐑", "日本語 「メェー」、英語 「Baa」", "英語では ヒツジは 「baa (バー)」と 鳴きます。\n{童謡|どうよう} 「Baa, Baa, Black Sheep」は 300年 いじょう 前から 歌われて いる イギリスの 歌です。", "The sheep says, 'Baa.'", "ヒツジは 「メェー」と 鳴く。"],
      ["ウシ", "cow: moo", "🐮", "日本語 「モー」、英語 「Moo」。ほぼ 同じ！", "ウシの 鳴き声は、日本語でも 英語でも 「モー (moo)」と ほとんど 同じです。\nこのように、国が ちがっても にて いる 音も あります。", "The cow says, 'Moo.'", "ウシは 「モー」と 鳴く。"],
      ["どきどき", "heartbeat: thump-thump", "💓", "日本語は 気持ちを 表す 音の ことばが とても 多い！", "日本語には 「どきどき」「わくわく」「にこにこ」など、気持ちや 様子を 表す ことば (オノマトペ) が とても 多く、4000〜5000 あると いわれます。\n英語では 「My heart is pounding.」(どきどき)、「I'm excited!」(わくわく) のように 言います。", "My heart is pounding.", "心ぞうが どきどきする。"],
      ["雨の 音", "rain: pitter-patter", "🌧️", "日本語 「ザーザー」「しとしと」、英語 「pitter-patter」", "日本語では 雨の ふり方に よって 「しとしと」「ぱらぱら」「ザーザー」と 音を 使い分けます。\n英語では 小雨の 音を 「pitter-patter」、大雨は 「It's pouring.」や 「It's raining cats and dogs.」と 言います。", "It's raining cats and dogs!", "どしゃぶりだ！"],
    ] },

  "uk-us-english": { ja: "イギリス英語と アメリカ英語", en: "British and American English", c: "#3a5aa0",
    intro: "同じ 英語でも、イギリスと アメリカでは ちがう ことばを 使う ことが あります！",
    links: ["europe", "americas", "words-from-languages", "onomatopoeia", "hello-world", "school-subjects"],
    list: [
      ["エレベーター", "elevator / lift", "🛗", "アメリカ: elevator、イギリス: lift", "アメリカでは 「elevator」、イギリスでは 「lift」と いいます。「lift」は 「持ち上げる」と いう 意味の ことばです。\n日本語の 「エレベーター」は アメリカ英語から 来て います。", "Let's take the elevator. / Let's take the lift.", "エレベーターに 乗ろう。"],
      ["アパート", "apartment / flat", "🏢", "アメリカ: apartment、イギリス: flat", "集合{住宅|じゅうたく}の 1つの 部屋は、アメリカでは 「apartment」、イギリスでは 「flat」です。\n日本の 「マンション (mansion)」は、英語では 「大きな お屋しき」の 意味に なるので 注意しましょう。", "I live in a flat.", "わたしは アパートに 住んで います。"],
      ["クッキー", "cookie / biscuit", "🍪", "アメリカ: cookie、イギリス: biscuit", "アメリカの 「cookie」は、イギリスでは 「biscuit」と よびます。\nでも アメリカの 「biscuit」は、スコーンの ような やわらかい パンの ことです。同じ ことばで ちがう ものを さす ことも あります。", "Would you like a biscuit?", "ビスケットは いかが？"],
      ["フライドポテト", "fries / chips", "🍟", "アメリカ: French fries、イギリス: chips", "フライドポテトは、アメリカでは 「French fries」、イギリスでは 「chips」です。「fish and chips」の chipsは これ です。\nでは、ポテトチップスは？ アメリカでは 「chips」、イギリスでは 「crisps」と よびます。ややこしい！", "Fish and chips, please.", "フィッシュ・アンド・チップスを ください。"],
      ["サッカー", "soccer / football", "⚽", "アメリカ: soccer、イギリス: football", "イギリスでは サッカーを 「football」と よびます。アメリカで 「football」と いうと、アメリカンフットボールの ことに なります。\n「soccer」は もともと イギリスで 生まれた 略語です。", "Let's play football!", "サッカーを しよう！"],
      ["トラック", "truck / lorry", "🚚", "アメリカ: truck、イギリス: lorry", "荷物を 運ぶ 大きな 車は、アメリカでは 「truck」、イギリスでは 「lorry」です。\n早口ことば 「Red lorry, yellow lorry」は イギリス英語の ことばです。", "Look at that big lorry!", "あの 大きな トラックを 見て！"],
      ["色の つづり", "color / colour", "🎨", "アメリカ: color、イギリス: colour", "アメリカでは 「color」「favorite」、イギリスでは 「colour」「favourite」と つづります。\n1800年代に アメリカの ウェブスターが、発音どおりに かんたんに しようと 辞書の つづりを かえたのが 始まりです。", "What's your favourite colour?", "好きな 色は 何？"],
      ["ガソリン", "gas / petrol", "⛽", "アメリカ: gas、イギリス: petrol", "車の 燃料は、アメリカでは 「gas (gasoline)」、イギリスでは 「petrol」と いいます。\nガソリンスタンドは アメリカでは 「gas station」、イギリスでは 「petrol station」です。", "We need petrol.", "ガソリンが いる。"],
      ["ズボン", "pants / trousers", "👖", "アメリカ: pants、イギリス: trousers", "アメリカの 「pants」は ズボンの ことですが、イギリスで 「pants」と いうと 下着の パンツの ことに なります。\nイギリスで ズボンは 「trousers」。まちがえると ちょっと はずかしい かも！", "I like your trousers.", "その ズボン いいね。"],
      ["1階と 2階", "first floor / ground floor", "🏬", "イギリスの 「first floor」は 日本の 2階！", "アメリカでは 地面の 階が 「first floor」ですが、イギリスでは 地面の 階を 「ground floor」と いい、その 上の 階が 「first floor」に なります。\nイギリスの デパートで 「first floor」に 行く ときは、1つ 上の 階へ！", "The toilets are on the ground floor.", "トイレは 1階に あります。"],
    ] },

  "tongue-twisters": { ja: "早口ことば", en: "Tongue Twisters", c: "#a03a6a",
    intro: "英語と 日本語の 早口ことばに ちょうせん！ 3回 速く 言えるかな？",
    links: ["onomatopoeia", "uk-us-english", "games-world", "words-from-languages", "alphabet-room", "phonics"],
    list: [
      ["She sells seashells", "She sells seashells", "🐚", "「She sells seashells by the seashore.」", "「She sells seashells by the seashore. ({彼女|かのじょ}は 海辺で 貝がらを 売る)」は、「sh」と 「s」の 音の ちがいを 練習できる 有名な 早口ことばです。\n200年 ちかく 前に 貝の 化石を 集めて 売った イギリスの メアリー・アニングが モデルとも いわれます。", "She sells seashells by the seashore.", "{彼女|かのじょ}は 海辺で 貝がらを 売る。"],
      ["Peter Piper", "Peter Piper", "🌶️", "「Peter Piper picked a peck of pickled peppers.」", "「Peter Piper picked a peck of pickled peppers. (ピーター・パイパーは ピクルスの とうがらしを 1ペック つんだ)」は、200年 いじょう 前の イギリスの 本に のって いる 早口ことばです。\n「p」の 音を はっきり 言う 練習に なります。", "Peter Piper picked a peck of pickled peppers.", "ピーター・パイパーは とうがらしを つんだ。"],
      ["Red lorry, yellow lorry", "Red lorry, yellow lorry", "🚚", "「r」と 「l」の 音を 交代で！", "「Red lorry, yellow lorry」は、日本人が 苦手な 「r」と 「l」の 音を 交代で 言う 早口ことばです。\n「r」は {舌|した}を どこにも つけずに 丸め、「l」は {舌|した}の 先を 上の 歯の うらに つけます。", "Red lorry, yellow lorry.", "赤い トラック、黄色い トラック。"],
      ["Unique New York", "Unique New York", "🗽", "短いのに とても 言いにくい！", "「Unique New York (ユニークな ニューヨーク)」を 何回も 速く くり返すと、だんだん 口が 回らなく なります。\n{俳優|はいゆう}さんや アナウンサーも 発声練習に 使う ことばです。", "Unique New York, unique New York.", "ユニークな ニューヨーク。"],
      ["Woodchuck", "How much wood", "🦫", "「How much wood would a woodchuck chuck?」", "「How much wood would a woodchuck chuck if a woodchuck could chuck wood? (もし ウッドチャックが 木を 投げられたら、どれだけ 投げる？)」は 100年 いじょう 前から ある アメリカの 早口ことばです。\nウッドチャックは リスの なかまの 動物です。", "How much wood would a woodchuck chuck?", "ウッドチャックは どれだけ 木を 投げる？"],
      ["Toy boat", "Toy boat", "⛵", "「Toy boat」を 5回 速く 言って みよう！", "「Toy boat (おもちゃの 船)」は たった 2つの ことばですが、速く くり返すと 「トイ ボート」が 「ボイ トート」に なって しまいます。\n短い 早口ことばほど 意外に むずかしい！", "Toy boat, toy boat, toy boat!", "おもちゃの 船！"],
      ["生麦生米{生卵|なまたまご}", "namamugi namagome namatamago", "🥚", "日本の 定番の 早口ことば。", "「生麦 生米 {生卵|なまたまご} (なまむぎ なまごめ なまたまご)」は、「ま」「ご」「む」などの 音が 続く、日本で いちばん 有名な 早口ことばの 1つです。\n英語に すると 「raw wheat, raw rice, raw egg」。英語の 友だちにも 教えて あげよう。", "Can you say it three times?", "3回 言える？"],
      ["{隣|となり}の 客は よく {柿|かき} 食う 客だ", "tonari no kyaku", "🍑", "「き」「く」「か」が 何度も 出て くる！", "「{隣|となり}の 客は よく {柿|かき} 食う 客だ」は、「k」の 音が 続く 日本の 早口ことばです。\n英語に すると 「The guest next door is a guest who eats a lot of persimmons.」。意味を 考えると ちょっと おもしろいですね。", "The guest next door eats a lot of persimmons.", "{隣|となり}の 客は {柿|かき}を たくさん 食べる。"],
      ["東京特許許可局", "Tokyo tokkyo kyoka kyoku", "🏢", "実は 本当には ない 役所の 名前！", "「東京特許許可局 (とうきょう とっきょ きょか きょく)」は、言いにくい 音が 続く 早口ことばです。でも 実は、こんな 名前の 役所は 実在しません。\nアナウンサーの 練習でも よく 使われます。", "Tokyo tokkyo kyoka kyoku!", "東京特許許可局！"],
    ] },

  "words-from-languages": { ja: "英語に なった 世界の ことば", en: "English Words From Around the World", c: "#4a8a6a",
    intro: "英語の ことばには、世界中から やって きた ものが たくさん！ 日本語から 来た ことばも あります。",
    links: ["words-from-japanese", "uk-us-english", "hello-world", "regions", "writing", "spices"],
    list: [
      ["ketchup", "ketchup", "🍅", "中国の 南の ことばの 「魚の ソース」から。", "ケチャップの もとは、中国南部の 福建の ことばで 魚の つけじるを 意味する ことばだと いわれます。イギリスに 伝わって、トマトの ソースに かわりました。\n世界を 旅する うちに、ことばの 意味も かわるのです。", "Can I have some ketchup?", "ケチャップを もらえますか？"],
      ["kindergarten", "kindergarten", "🧸", "ドイツ語で 「子どもの 庭」。", "「kindergarten (ようち園)」は ドイツ語で 「子どもたちの 庭」と いう 意味です。ドイツの フレーベルが 1840年に 作った ようち園の 名前が、英語でも そのまま 使われました。\n子どもを 庭の 植物の ように 育てる、と いう 考えです。", "My sister goes to kindergarten.", "妹は ようち園に 通って います。"],
      ["piano", "piano", "🎹", "イタリア語で 「やわらかい・小さい 音」。", "ピアノの 正式な 名前は 「pianoforte (ピアノフォルテ)」。イタリア語で 「小さい 音も 大きい 音も 出せる」と いう 意味です。\n音楽の ことばには、tempo、soprano など イタリア語が たくさん あります。", "I can play the piano.", "ピアノが ひけます。"],
      ["safari", "safari", "🦁", "スワヒリ語で 「旅」。", "「safari (サファリ)」は 東アフリカの スワヒリ語で 「旅」と いう 意味です。もとは アラビア語の ことばです。\n今では 野生動物を 見に 行く 旅の ことを さします。", "I want to go on a safari.", "サファリに 行きたい。"],
      ["shampoo", "shampoo", "🧴", "インドの ことばで 「マッサージする」。", "「shampoo (シャンプー)」は、インドの ヒンディー語の 「マッサージする」と いう ことばから 来て います。18世紀に イギリスへ 伝わりました。\n「pajamas (パジャマ)」も インドから 英語に なった ことばです。", "I wash my hair with shampoo.", "シャンプーで かみを {洗|あら}います。"],
      ["tsunami", "tsunami", "🌊", "日本語から 世界の ことばに。", "「tsunami ({津波|つなみ})」は 日本語から 世界中で 使われる ように なった ことばです。英語でも 科学の ことばとして 使われます。\nほかにも 「karaoke」「emoji」「sushi」「anime」「kawaii」など、日本語から 英語に なった ことばは たくさん あります。", "Tsunami is a Japanese word.", "「{津波|つなみ}」は 日本語です。"],
      ["chocolate", "chocolate", "🍫", "メキシコの 古い ことば ナワトル語から。", "「chocolate」は、メキシコの アステカの {人々|ひとびと}の ことば ナワトル語の 「ショコラトル (にがい 水)」が もとと いわれます。\n「tomato」「avocado」「chili」も 同じ ナワトル語から 来た ことばです。", "I love chocolate.", "チョコレートが 大好き。"],
      ["alphabet", "alphabet", "🔤", "ギリシャ文字の 最初の 2文字 「アルファ」「ベータ」から。", "「alphabet」は、ギリシャ文字の 最初の 2文字 「α (アルファ)」と 「β (ベータ)」を つなげた ことばです。\n日本語の 「いろは」も、ひらがなの 最初の 3文字で 「文字の ならび」を 表しますね。", "Let's sing the alphabet song.", "アルファベットの 歌を 歌おう。"],
      ["algebra", "algebra", "➗", "アラビア語の 数学の 本の 名前から。", "「algebra (代数学)」は、約1200年 前の アラビアの 数学者 アル・フワーリズミーの 本の 題名の ことば 「アル・ジャブル」から 来て います。\nコンピューターの 「algorithm (アルゴリズム)」は、この 数学者の 名前から 生まれた ことばです。", "I like math.", "算数が 好きです。"],
      ["robot", "robot", "🤖", "チェコ語の 「はたらく」から。", "「robot」は、1920年に チェコの 作家 チャペックが {劇|げき}の 中で 使った ことばで、チェコ語の 「強制された 労働」と いう ことばから 作られました。\n今では 世界中で 使われる ことばです。", "I want to build a robot.", "ロボットを 作りたい。"],
    ] },

  "codes": { ja: "暗号と 合図", en: "Codes and Signals", c: "#2a4a5a",
    intro: "ことばを 使わずに 伝える 方法、ひみつの メッセージを 送る 方法。暗号の せかいへ ようこそ！",
    links: ["how-computers-work", "logic-puzzles", "communication-history", "writing", "symbols-signs", "alphabet-room"],
    list: [
      ["モールス信号", "Morse code", "📡", "トン (・) と ツー (ー) で 文字を 表します。", "モールス信号は 1830年代に アメリカの モールスたちが 考えた、短い 音 (・) と 長い 音 (ー) の 組み合わせで 文字を 送る 方法です。\nたすけを 求める 「SOS」は 「・・・ ーーー ・・・」。光や 音、たたく 音でも 伝えられます。", "Dot dot dot, dash dash dash, dot dot dot.", "トントントン、ツーツーツー、トントントン。"],
      ["手旗信号", "semaphore", "🚩", "2本の 旗の 位置で 文字を 伝えます。", "手旗信号は、両手に 持った 旗の 角度の 組み合わせで 1文字ずつ 伝える 方法です。船と 船の 間など、声が とどかない きょりで 使われて きました。\n日本の 手旗信号は カタカナの 形を もとに して います。", "Can you read the flags?", "旗が 読める？"],
      ["シーザー暗号", "Caesar cipher", "🔐", "文字を 決まった 数だけ ずらす 暗号。", "古代ローマの ユリウス・カエサルが 使ったと いわれる 暗号で、文字を アルファベット順に 3つずつ ずらします。A は D に、B は E に なります。\n「KHOOR」を 3つ もどすと…？ 答えは 「HELLO」。", "Let's write a secret message.", "ひみつの メッセージを 書こう。"],
      ["ピッグペン暗号", "pigpen cipher", "#️⃣", "井げたの 線と 点で 文字を 表す 暗号。", "ピッグペン暗号は、「#」や 「×」の 形の マスに アルファベットを 入れて、その マスの 形で 文字を 表す 暗号です。\n形だけを 見ると ふしぎな 記号に 見えます。友だちと ひみつの 手紙を 書いて みよう。", "This looks like a secret symbol.", "ひみつの 記号 みたい。"],
      ["あぶり出し", "invisible ink", "🍋", "レモンの しるで 書いた 文字が、温めると 出て くる！", "レモンや みかんの しるで 紙に 文字を 書き、かわかすと 見えなく なります。大人と いっしょに ドライヤーなどで 温めると、茶色い 文字が うかび上がります。\nしるに ふくまれる 物しつが 熱で こげる ためです。", "The words appeared!", "文字が 出て きた！"],
      ["バーコード", "barcodes", "📊", "しまもようで 商品の 番号を 表します。", "バーコードは 太さの ちがう 線で 数字を 表す しくみで、レジで 読みとると 商品の 名前や {値段|ねだん}が 分かります。\n1974年、アメリカの スーパーで はじめて バーコードで 売られた 商品は、チューインガム でした。", "Scan the barcode.", "バーコードを 読みとって。", "1974"],
      ["ロゼッタストーン", "the Rosetta Stone", "🪨", "古代エジプトの 文字を 読む カギに なった 石。", "ロゼッタストーンには 同じ 内容が 3しゅるいの 文字 (ヒエログリフ・{民衆|みんしゅう}文字・ギリシャ文字) で 書かれて いました。\n1822年、フランスの シャンポリオンは ギリシャ文字と くらべて、ヒエログリフを 読む ことに 成功しました。今は ロンドンの 大英博物館に あります。", "This stone helped us read old writing.", "この 石で 古い 文字が 読めるように なった。", "1822"],
      ["フォネティックコード", "the phonetic alphabet", "✈️", "A は Alfa、B は Bravo。聞きまちがいを ふせぐ 読み方。", "電話や 無線では、「B」と 「D」など にた 音を 聞きまちがえやすいので、A = Alfa、B = Bravo、C = Charlie のように 決まった ことばで 1文字ずつ 伝えます。\n飛行機の パイロットや 船の 人が 世界中で 使って います。", "Alfa, Bravo, Charlie!", "アルファ、ブラボー、チャーリー！"],
    ] },

  "symbols-signs": { ja: "世界の マークと サイン", en: "Symbols and Signs", c: "#3a7a3a",
    intro: "ことばが 分からなくても 意味が 伝わる マーク。日本生まれの ものも たくさん あります！",
    links: ["codes", "town", "olympics", "environment", "how-internet-works", "japan-inventions"],
    list: [
      ["非常口の マーク", "the emergency exit sign", "🏃", "日本で 生まれ、世界の 標準に なりました。", "緑の 地に 白い 人が 走る 非常口の マークは、日本で デザインされ、1987年に 国際標準 (ISO) に えらばれました。今では 世界中で 使われて います。\nけむりの 中でも 見えやすい 色と 形が 工夫されて います。", "Where is the exit?", "出口は どこですか？", "1987"],
      ["オリンピックの ピクトグラム", "Olympic pictograms", "🏅", "1964年の 東京大会で、本格的に 使われ始めました。", "1964年の 東京オリンピックでは、ことばが 分からない 外国の 人にも 分かるように、競技や トイレなどを 絵で 表す 「ピクトグラム」が 本格的に 作られました。\n2021年の 東京大会では、動く ピクトグラムが 話題に なりました。", "This picture means swimming.", "この 絵は 水泳の 意味です。", "1964"],
      ["リサイクルマーク", "the recycling symbol", "♻️", "3つの 矢印が ぐるぐる 回る マーク。", "3つの 矢印の リサイクルマークは、1970年に アメリカの 大学生 ゲイリー・アンダーソンが コンテストで デザインした ものです。\n日本には ペットボトル、プラ、紙など、素材ごとの リサイクルマークも あります。", "Please recycle this bottle.", "この ボトルを リサイクルして ください。", "1970"],
      ["{温泉|おんせん}マーク", "the hot spring symbol", "♨️", "湯気が 3本 立つ、日本の {温泉|おんせん}の しるし。", "♨は 日本の 地図で {温泉|おんせん}を 表す 記号です。2016年、外国人向けの 地図記号を 作る ときに 「お{風呂|ふろ}の 中に 人が いる マーク」への {変更|へんこう}も 考えられましたが、♨も 残す ことに なりました。\n今では 外国でも 「Japanese hot spring」の マークとして 知られて います。", "This means hot spring.", "これは {温泉|おんせん}の 意味です。"],
      ["車いすマーク", "the wheelchair symbol", "♿", "だれでも 使える ことを 表す 世界共通の マーク。", "車いすの マークは 1968年に デンマークの 学生が デザインし、国際的な シンボルと なりました。車いすの 人だけで なく、「だれでも 使いやすい」場所を 表します。\n日本には 体の 中の 病気など、見えにくい {障|しょう}がいを 伝える 「ヘルプマーク」も あります。", "This toilet is for everyone.", "この トイレは みんなの ための ものです。", "1968"],
      ["点字ブロック", "tactile paving", "🟨", "日本で 発明された、目の 不自由な 人の ための ブロック。", "道路や 駅の ホームの 黄色い でこぼこの ブロックは、1965年に 岡山県の {三宅|みやけ}精一さんが 考えた もので、1967年に 世界で はじめて 岡山の 道に しかれました。\n線の 形は 「進め」、点の 形は 「止まれ・注意」の 意味です。今では 世界中で 使われて います。", "Please don't stand on the yellow blocks.", "黄色い ブロックの 上に 立たないで ください。", "1967"],
      ["@ (アットマーク)", "the at sign", "📧", "メールアドレスに 使われる ようになった 記号。", "@は もともと 商人が 「〜の 単価で」と いう 意味で 使って いた 記号です。1971年、アメリカの トムリンソンが はじめての メールを 送る ときに、名前と 場所を 分ける 記号として えらびました。\n英語では 「at」、イタリアでは 「カタツムリ」、オランダでは 「サルの しっぽ」と よぶ 人も います。", "My email is ken at example dot com.", "わたしの メールは ken@example.com です。", "1971"],
      ["& (アンパサンド)", "the ampersand", "&", "ラテン語の 「et (そして)」を 1文字に した 記号。", "& は ラテン語で 「そして」を 意味する 「et」の 2文字を 1つに 続けて 書いた ことから 生まれた 記号です。\n昔の 英語の アルファベットの 歌では、Z の あとに & が 歌われて いました。", "Salt & pepper means salt and pepper.", "& は 「そして」の 意味です。"],
      ["{緊急|きんきゅう}電話番号", "emergency numbers", "☎️", "日本は 110番と 119番。国に よって ちがいます！", "日本では {警察|けいさつ}は 110番、火事と 救急車は 119番です。アメリカと カナダは 911、イギリスは 999、ヨーロッパの 多くの 国では 112です。\n海外旅行の 前に、その 国の 番号を 調べて おくと 安心です。", "Call 119!", "119番に 電話して！"],
    ] },
};

export const WINGS_E1 = {}, DETAILS_E1 = {};
for (const [id, r] of Object.entries(ROOMS)) {
  const { list, ...topic } = r;
  topic.items = list.map(([ja, en, pic, fact, , , , year]) => [ja, en, pic, fact, null, year]);
  WINGS_E1[id] = topic;
  DETAILS_E1[id] = Object.fromEntries(list.map(([, en, , , about, sEn, sJa]) => [en, [about, `${sEn} / ${sJa}`]]));
}
