import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MenuAccordion from './MenuAccordion';

const accordionList1 = [
  {
    desc: '１階はカジュアルな洋食レストランとして、たいめいけん創業以来の味をお手頃な料金でお楽しみ頂けます。老若男女を問わず、皆様に喜んで頂ける洋食の品々を取り揃えてございます。',
    list: [
      {
        trigger: '生野菜',
        triggerContent: [
          {
            name: 'アスパラサラダ',
            price: '1,300円',
          },
          {
            name: '玉子サラダ',
            price: '1,300円',
          },
          {
            name: 'トマトサラダ',
            price: '1,300円',
          },
          {
            name: '胡瓜サラダ',
            price: '1,300円',
          },
          {
            name: 'レタスサラダ',
            price: '1,300円',
          },
          {
            name: '野菜サラダ',
            price: '1,400円',
          },
          {
            name: '蟹ポテトサラダ',
            price: '2,000円',
          },
        ],
      },
      {
        trigger: '名物料理',
        triggerContent: [
          {
            name: 'ボルシチ（ボリウム満点)',
            price: '100円',
          },
          {
            name: 'コールスロー（天下一品）',
            price: '100円',
          },
          { note: '＊ 上記単品でのご注文はご容赦下さい。' },
        ],
      },
      {
        trigger: '肉料理',
        triggerContent: [
          {
            name: 'ロースカツ（ライス付き）',
            price: '1,700円',
          },
          {
            name: 'チキンカツ（ライス付き）',
            price: '1,600円',
          },
          {
            name: '	牛レバーフライ（ライス付き）',
            price: '1,600円',
          },
          {
            name: '	ポークソテー（ライス付き）',
            price: '2,400円',
          },
          {
            name: 'メンチカツ （ライス付き）',
            price: '2,400円',
          },
          {
            name: '	ビーフコロッケ （ライス付き）',
            price: '2,800円',
          },
          {
            name: '牛レバーソテー（ライス付き）',
            price: '2,500円',
          },
        ],
      },
      {
        trigger: '特選肉料理',
        triggerContent: [
          {
            name: '舌シチュー（ライス付き）',
            price: '3,500円',
          },
          {
            name: 'ビーフシチュー（ライス付き）',
            price: '3,500円',
          },
          {
            name: 'ビーフカツレツ（ライス付き）',
            price: '3,800円',
          },
          {
            name: 'ハンバーグステーキ',
            price: '3,300円',
          },
          {
            name: '上ハンバーグステーキ（2F）',
            price: '4,200円',
          },
          {
            name: 'ヒレステーキ（ニンニク醤油ソース）（2F）',
            price: '8,800円',
          },
          {
            name: 'ヒレステーキ（デミグラスソース）（2F）',
            price: '8,800円',
          },
        ],
      },
      {
        trigger: '米飯料理',
        triggerContent: [
          {
            name: 'ハヤシライス',
            price: '2,600円',
          },
          {
            name: 'カレーライス',
            price: '1,300円',
          },
          {
            name: '大盛カレーライス',
            price: '1,600円',
          },
          {
            name: 'チキンライス',
            price: '2,200円',
          },
          {
            name: 'ドライカレー',
            price: '2,200円',
          },
          {
            name: '海老チャーハン',
            price: '2,200円',
          },
          {
            name: 'かつ弁当',
            price: '1,700円',
          },
          {
            name: '昭和の紙カツカレー',
            price: '2,000円',
          },
          {
            name: '昭和の紙カツカレー(大盛り)',
            price: '2,500円',
          },
        ],
      },
      {
        trigger: 'パスタ＆魚介料理',
        triggerContent: [
          {
            name: 'スパゲッティナポリタン海老',
            price: '2,500円',
          },
          {
            name: 'スパゲッティナポリタン蟹',
            price: '2,900円',
          },
          {
            name: '海老マカロニグラタン',
            price: '2,700円',
          },
          {
            name: '蟹マカロニグラタン',
            price: '2,900円',
          },
          {
            name: 'チキンマカロニグラタン',
            price: '2,600円',
          },
          {
            name: '蟹クリームコロッケ',
            price: '2,900円',
          },
          {
            name: '白身魚のムニエル（ライス付）（2F）',
            price: '4,400円',
          },
          {
            name: 'カキフライ（ライス付)　（10月～3月）',
            price: '2,200円',
          },
          {
            name: '特撰有頭海老フライ（ライス付）',
            price: '2,900円',
          },
          {
            name: '海老フライ(ホワイト海老)（ライス付）',
            price: '2,000円',
          },
          {
            name: '帆立フライ（ライス付）',
            price: '2,000円',
          },
          {
            name: '魚介ミックスフライ（ライス付)\n(季節により内容が変わります）',
            price: '2,500円',
          },
        ],
      },
      {
        trigger: '卵料理',
        triggerContent: [
          {
            name: 'オムライス\n（ハムライスを卵で包んだスタンダードなオムライスです。）',
            price: '2,100円',
          },
          {
            name: 'オムハヤシ\n（トロトロ半熟卵のオムライスにハヤシソースをかけております。）',
            price: '2,600円',
          },
          {
            name: '海老のオムライス\n（まろやかなトマトソースで仕上げました。）',
            price: '2,600円',
          },
          {
            name: '牛肉のオムライス（ガーリック風味）\n（デミグラスソースにてお召し上がり下さい。）',
            price: '2,800円',
          },
          {
            name: 'タンポポオムライス（伊丹十三風）\n（チキンライスにのせたオムレツを開いてお召し上がりください。）',
            price: '2,400円',
          },
          {
            name: '野菜オムレツ\n（トマトとグリーンアスパラが入っております。）',
            price: '2,100円',
          },
          {
            name: 'ハムオムレツ',
            price: '2,100円',
          },
          {
            name: 'プレーンオムレツ',
            price: '1,900円',
          },
          {
            name: 'タンポポビーフオムライス\n（ご飯とオムレツに牛肉が入っております。）',
            price: '3,600円',
          },
          {
            note: '＊ たいめいけんの卵料理は選びぬかれた特級卵を使用しています。',
          },
          {
            name: 'ライス',
            price: '400円',
          },
          {
            name: 'パン',
            price: '400円',
          },
        ],
      },
      {
        trigger: 'たいめいけん特製ラーメン',
        triggerContent: [
          {
            name: 'ラーメン',
            price: '1,200円',
          },
          {
            name: 'バターラーメン',
            price: '1,300円',
          },
          {
            name: 'チャーシューメン',
            price: '1,500円',
          },
          {
            name: '味噌ラーメン',
            price: '1,500円',
          },
          {
            name: 'ネギチャーシューメン（ピリ辛風味）',
            price: '1,600円',
          },
          {
            name: '大盛ラーメン',
            price: '1,500円',
          },
          {
            name: '大盛バターラーメン',
            price: '1,600円',
          },
          {
            name: '大盛チャーシューメン',
            price: '1,800円',
          },
          {
            name: '味付玉子（ラーメン用）',
            price: '200円',
          },
          {
            note: '＊ご希望の方に背脂をお付けしております。',
          },
        ],
      },
      {
        trigger: 'お飲みもの（アルコール）',
        triggerContent: [
          {
            name: 'ビール　中瓶',
            price: '1,000円',
          },
          {
            name: 'ビール　小瓶',
            price: '900円',
          },
          {
            name: 'エビスビール　中瓶',
            price: '1,100円',
          },
          {
            name: '生ビール(大)	（800ml）',
            price: '1,300円',
          },
          {
            name: '生ビール(小)	（400ml）',
            price: '900円',
          },
          {
            name: '黒生ビール(大)	（800ml）',
            price: '1,400円',
          },
          {
            name: '	黒生ビール(小)	（400ml）',
            price: '1,000円',
          },
          {
            name: 'ロンドン・パブ・ギネス	（330ml）	',
            price: '1,000円',
          },
          {
            name: 'ノンアルコールビール	（334ml・瓶）	',
            price: '900円',
          },
          {
            name: '日本酒（正一合）',
            price: '1,000円',
          },
          {
            name: '辛口賀茂鶴	（300ml）	',
            price: '1,500円',
          },
          {
            name: '	冷酒賀茂鶴	（300ml）',
            price: '1,400円',
          },
          {
            name: 'ハイボール（S）',
            price: '900円',
          },
          {
            name: 'ハイボール（W）',
            price: '1,700円',
          },
          {
            name: '	チューハイ（ライム）',
            price: '900円',
          },
          {
            name: '	チューハイ（レモン）',
            price: '900円',
          },
        ],
      },
      {
        trigger: 'お飲みもの（ソフトドリンク）',
        triggerContent: [
          {
            name: '	コーラ',
            price: '600円',
          },
          {
            name: '	オレンジジュース',
            price: '600円',
          },
          {
            name: '	ウーロン茶',
            price: '600円',
          },
          {
            name: '	黒ウーロン茶',
            price: '800円',
          },
          {
            name: 'リンゴジュース（青森産）',
            price: '800円',
          },
          {
            name: 'ホットコーヒー',
            price: '600円',
          },
          {
            name: 'アイスコーヒー',
            price: '700円',
          },
        ],
      },
      {
        trigger: 'ワイン',
        triggerContent: [
          {
            name: 'グラス白ワイン',
            price: '900円',
          },
          {
            name: 'グラス赤ワイン',
            price: '900円',
          },
          {
            name: 'スパークリングワイン',
            price: '1,600円',
          },
          {
            note: '※ ワインリストご希望の方はスタッフにお申し付けください。',
          },
        ],
      },
      {
        trigger: 'デザート',
        triggerContent: [
          {
            name: '	アイスクリーム　バニラ',
            price: '800円',
          },
          {
            name: 'アイスクリーム　抹茶',
            price: '800円',
          },
        ],
      },
    ],
  },
] satisfies Array<{
  desc: string;
  list: Array<{
    trigger: string;
    triggerContent: Array<{
      name?: string;
      price?: string;
      note?: string;
    }>;
  }>;
}>;

const accordionList2 = [
  {
    desc: '2階は本格的なフランス料理をお楽しみいただけるレストランです。特別な日のお食事にぜひご利用ください。',
    list: [
      {
        mode: 'single',
        trigger: '的矢産牡蠣（10月～3月）',
        triggerContent: [
          {
            name: '牡蠣の塩辛',
            price: '2,000円',
          },
          {
            name: '生牡蠣（10月～3月）',
            price: '3,300円',
          },
          {
            name: '牡蠣フライ（10月～3月）',
            price: '4,200円',
          },
          {
            name: '牡蠣のフローレンス（10月～3月）',
            price: '4,200円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '海老',
        triggerContent: [
          {
            name: 'コキール',
            price: '3,300円',
          },
          {
            name: 'ドリア',
            price: '4,200円',
          },
          {
            name: '小海老フライ',
            price: '4,400円',
          },
          {
            name: '有頭海老フライ',
            price: '4,400円',
          },
          {
            name: '車海老フライ＜要予約＞',
            price: '時価',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '蟹',
        triggerContent: [
          {
            name: '蟹クリームコロッケ',
            price: '3,900円',
          },
          {
            name: 'コキール',
            price: '3,700円',
          },
          {
            name: 'ドリア',
            price: '4,400円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '帆立貝',
        triggerContent: [
          {
            name: 'フライ',
            price: '4,400円',
          },
          {
            name: 'ムニエル',
            price: '4,400円',
          },
          {
            name: 'コキールサンジャック',
            price: '4,400円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '鮮魚',
        triggerContent: [
          {
            name: 'フライ',
            price: '4,400円',
          },
          {
            name: 'ムニエル',
            price: '4,400円',
          },
          {
            name: 'グラタン',
            price: '4,400円',
          },
          {
            name: '懐かしの洋食やアジフライ',
            price: '2,700円',
          },
          {
            name: '魚介のフライ盛り合わせ',
            price: '2,700円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '前菜',
        triggerContent: [
          {
            name: '前菜盛合せ',
            price: '3,300円',
          },
          {
            name: '小海老カクテル',
            price: '4,800円',
          },
          {
            name: '蟹カクテル',
            price: '4,900円',
          },
          {
            name: 'エスカルゴ',
            price: '3,100円',
          },
          {
            name: 'スモークサーモン',
            price: '3,100円',
          },
          {
            name: 'キャビア',
            price: '17,600円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '生野菜',
        triggerContent: [
          {
            name: '生野菜盛合せ',
            price: '1,400円',
          },
          {
            name: 'セロリサラダ',
            price: '1,300円',
          },
          {
            name: 'トマトサラダ',
            price: '1,300円',
          },
          {
            name: 'レタスサラダ',
            price: '1,300円',
          },
          {
            name: '胡瓜サラダ',
            price: '1,300円',
          },
          {
            name: 'コールスロー',
            price: '1,000円',
          },
          {
            name: '海老サラダ（ポテトまたはレタス）',
            price: '3,300円',
          },
          {
            name: '蟹サラダ（ポテトまたはレタス）',
            price: '3,300円',
          },
          {
            name: 'ミックスサラダ',
            price: '3,900円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: 'スープ各種',
        triggerContent: [
          {
            name: 'コンソメスープ',
            price: '1,800円',
          },
          {
            name: 'コールコンソメ',
            price: '1,800円',
          },
          {
            name: 'ポーチドコンソメ',
            price: '1,900円',
          },
          {
            name: 'ガーリックスープ',
            price: '2,000円',
          },
          {
            name: 'オニオングラタンスープ',
            price: '1,600円',
          },
          {
            name: 'クリームスープのオーブン焼き',
            price: '1,600円',
          },
          {
            name: 'クリームスープ',
            price: '1,300円',
          },
          {
            name: 'トマトスープ',
            price: '1,300円',
          },
          {
            name: 'コーンスープ',
            price: '1,300円',
          },
          {
            name: 'ボルシチスープ ウクライナ風',
            price: '1,300円',
          },
          {
            name: 'ビシソワーズ（6月～8月）',
            price: '1,300円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '鮑（あわび）',
        triggerContent: [
          {
            name: 'コキール',
            price: '4,900円',
          },
          {
            name: 'ステーキ',
            price: '14,300円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '牛肉',
        triggerContent: [
          {
            name: '特選フィレ肉ステーキ（100g）',
            price: '7,700円',
          },
          {
            name: '特選フィレ肉ステーキ（200g)',
            price: '11,000円',
          },
          {
            name: '特選フィレ肉ステーキ（250g)',
            price: '16,500円',
          },
          {
            name: 'ビーフカツレツ',
            price: '7,700円',
          },
          {
            name: 'ビーフシチュー',
            price: '5,000円',
          },
          {
            name: '日本橋ボルシチ',
            price: '5,300円',
          },
          {
            name: '舌シチュー',
            price: '5,000円',
          },
          {
            name: 'オックステール',
            price: '5,000円',
          },
          {
            name: 'メンチカツレツ',
            price: '3,700円',
          },
          {
            name: 'ビーフコロッケ',
            price: '3,100円',
          },
          {
            name: '仔牛肉のカツレツ',
            price: '4,200円',
          },
          {
            name: 'ハンバーグステーキ（目玉焼きのせ・チーズのせ）\n（特選国産牛ヒレ肉100%使用）',
            price: '4,200円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '豚肉',
        triggerContent: [
          {
            name: 'とんかつ　(ヒレ・ロース)',
            price: '3,300円',
          },
          {
            name: 'ポークソテー（デミグラスソース・ジンジャーソース）',
            price: '3,300円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '若鶏',
        triggerContent: [
          {
            name: 'チキンカツ',
            price: '2,800円',
          },
          {
            name: 'チキンソテー（デミグラスソース・ジンジャーソース）',
            price: '2,800円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: 'オムレツ',
        triggerContent: [
          {
            name: 'ハム、野菜、プレーン',
            price: '2,600円',
          },
          {
            name: '海老',
            price: '3,200円',
          },
          {
            name: 'ベーコン',
            price: '3,200円',
          },
          {
            name: '蟹',
            price: '3,600円',
          },
          {
            name: '牛肉',
            price: '3,600円',
          },
          {
            name: 'フォアグラ',
            price: '4,400円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: 'オムライス',
        triggerContent: [
          {
            name: 'オムライス',
            price: '2,500円',
          },
          {
            name: 'タンポポオムライス 伊丹十三風',
            price: '3,100円',
          },
          {
            name: '海老の幸タンポポオムライス',
            price: '3,600円',
          },
          {
            name: 'オムハヤシ',
            price: '3,900円',
          },
          {
            name: 'ビーフシチューオムライス',
            price: '4,100円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: 'パスタ',
        triggerContent: [
          {
            name: 'スパゲッティ 伊太利風（海老）',
            price: '3,200円',
          },
          {
            name: 'スパゲッティ 伊太利風（蟹）',
            price: '3,600円',
          },
          {
            name: 'スパゲッティ ナポリ風（海老）',
            price: '3,200円',
          },
          {
            name: 'スパゲッティ ナポリ風（蟹）',
            price: '3,600円',
          },
          {
            name: 'スパゲッティ ミートソース',
            price: '3,300円',
          },
          {
            name: 'マカロニグラタン（海老）',
            price: '3,300円',
          },
          {
            name: 'マカロニグラタン（蟹）',
            price: '3,700円',
          },
          {
            name: 'マカロニグラタン（鶏）',
            price: '3,000円',
          },
        ],
      },
      {
        mode: 'single',
        trigger: '米飯',
        triggerContent: [
          {
            name: 'チキンカレー',
            price: '3,000円',
          },
          {
            name: 'ポークカレー',
            price: '3,000円',
          },
          {
            name: 'ビーフカレー',
            price: '3,600円',
          },
          {
            name: 'ハヤシライス',
            price: '3,200円',
          },
          {
            name: '海老ハヤシ',
            price: '3,300円',
          },
          {
            name: 'ピラフ（海老）',
            price: '2,900円',
          },
          {
            name: 'ピラフ（鶏）',
            price: '2,900円',
          },
          {
            name: 'ピラフ（蟹）',
            price: '3,100円',
          },
          {
            name: 'チキンライス',
            price: '2,900円',
          },
          {
            name: '海鮮チャーハン',
            price: '3,300円',
          },
          {
            name: 'ステーキ丼（スープ、サラダ、デザート付）\n（とろろ、生卵をのせています）',
            price: '3,800円',
          },
          {
            name: 'カツ重定食（スープ、サラダ、デザート付）',
            price: '3,600円',
          },
          {
            name: 'ライス（京都府産 こしひかり）',
            price: '500円',
          },
          {
            name: 'ブイヨンライス(Maggi)',
            price: '600円',
          },
          {
            name: '玄米(宮城県産 金のいぶき)',
            price: '600円',
          },
          {
            name: 'パン',
            price: '600円',
          },
          {
            name: 'バター',
            price: '400円',
          },
        ],
      },
      {
        mode: 'assort',
        trigger: '小皿料理',
        triggerContent: [
          {
            name: '小皿料理',
            price: '9,900円',
            subItems: [
              {
                title: '一の膳',
                name: [
                  '季節物のおつまみ',
                  'サーモンパパイヤ',
                  '小海老フライ',
                  '鮮魚の刺身',
                  '鮑の酒蒸し 肝ソース',
                  'さいまき海老のカクテルソース',
                  '魚介のマリネ',
                  '的矢産牡蛎の塩辛',
                  'エスカルゴ　たいめいけん風',
                ],
              },
              {
                title: '二の膳',
                name: [
                  '国産牛ローストビーフ',
                  '牛タンシチュー',
                  '蟹クリームコロッケ',
                  'チキンコキール',
                  'シーフードのエスカベッシュ',
                  '牛タンのコロッケ',
                  '生ハム',
                  'ポタージュ',
                  '魚介のフリット',
                ],
              },
              { title: 'たいめいけん特製ラーメン' },
              { title: 'デザート' },
            ],
          },
        ],
      },
      {
        mode: 'assort',
        trigger: 'コース料理',
        triggerContent: [
          {
            name: 'たいめいけん スペシャルコース',
            price: '14,300円',
            subItems: [
              {
                title: '小皿前菜９品',
                name: [
                  '季節物のおつまみ',
                  'サーモンパパイヤ',
                  '魚介のフリット',
                  'エスカルゴ　たいめいけん風',
                  '魚介のマリネ',
                  'サイマキ海老のカクテル',
                  '若鳥のコンフィー',
                  '鮑の酒蒸し 肝ソース',
                ],
              },
              { title: '季節のスープ' },
              { title: '国産牛ヒレステーキ' },
              { title: '特選パン' },
              { title: 'フカヒレラーメン' },
              { title: 'デザート' },
              { title: 'コーヒー' },
            ],
          },
          {
            name: '三代目オムライスコース',
            price: '5,500円',
            subItems: [
              { title: '前菜 6点盛り(コールスロー含む)' },
              { title: 'タンポポオムライス' },
              { title: 'デザート' },
              { title: 'コーヒー' },
            ],
          },
        ],
        note: '季節や食材により、メニューを若干変更する場合もございますので、予めご了承下さい。',
      },
    ],
  },
] satisfies Array<{
  desc: string;
  list: Array<{
    mode: 'assort' | 'single';
    trigger: string;
    triggerContent: Array<{
      name: string;
      price: string;
      subItems?: Array<{
        title: string;
        name?: string[];
      }>;
    }>;
    note?: string;
  }>;
}>;
const MenuTabs = () => {
  return (
    <Tabs defaultValue="menu1" className=" text-white">
      <TabsList className="rounded-sm">
        <TabsTrigger value="menu1" className="rounded-sm px-8">
          メニュー1F
        </TabsTrigger>
        <TabsTrigger value="menu2" className="rounded-sm px-8">
          メニュー2F
        </TabsTrigger>
      </TabsList>
      <TabsContent value="menu1">
        <MenuAccordion accordionList={accordionList1} />
      </TabsContent>
      <TabsContent value="menu2">
        <MenuAccordion accordionList={accordionList2} />
      </TabsContent>
    </Tabs>
  );
};

export default MenuTabs;
