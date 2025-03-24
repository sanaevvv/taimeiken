import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MenuAccordion from './MenuAccordion';
import { useTranslations } from 'next-intl';

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
  const tList1 = useTranslations('Menu.accordionList1');
  const tList2 = useTranslations('Menu.accordionList2');
  const accordionList1 = {
    desc: tList1('desc'),
    list: tList1.raw('list') || [],
  };
  const accordionList2 = {
    desc: tList2('desc'),
    list: tList2.raw('list') || [],
  };

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
        <MenuAccordion desc={accordionList1.desc} list={accordionList1.list} />
      </TabsContent>
      <TabsContent value="menu2">
        <MenuAccordion desc={accordionList2.desc} list={accordionList2.list} />
      </TabsContent>
    </Tabs>
  );
};

export default MenuTabs;
