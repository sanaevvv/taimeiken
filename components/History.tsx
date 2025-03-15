import Image from 'next/image';
import { Button } from './ui/button';

const History = () => {
  return (
    <section className="bg-black pt-[100px]">
      <div className="flex max-w-[1100px] justify-between mx-auto">
        <div className="w-[550px]">
          <div>
            <Image
              src="/exterior.JPG"
              width={420}
              height={550}
              alt="たいめいけんの外観"
              className="w-[420px] h-[550px] object-cover -mt-8"
            />
          </div>
        </div>
        <div className="px-4 text-white w-[550px]">
          <div className="flex gap-2">
            <div className="-mt-3">
              <Image src="/light.gif" alt="light" width={80} height={60} />
            </div>
            <h2 className="text-xl sm:text-6xl font-bold pb-4 tracking-widest text-white font-serif">
              History
            </h2>
          </div>
          <p>
            たいめいけんは、1931年（昭和6年）に茂出木心護によって創業された老舗洋食店です。創業当時の店名は「泰明軒」で、東京都中央区新川でスタートします。茂出木は「西支御料理処泰明軒」での修業を経て独立し、その屋号を引き継ぎます。
            1948年（昭和23年）には日本橋に移転し、「たいめいけん」と改称。以降、洋食文化を代表する存在として多くの人々に愛され続けています。特に「タンポポオムライス」の発祥店として知られ、半熟オムレツをナイフで開くと卵が広がるその独特なスタイルが人気を集めています。1951年には株式会社化し、1973年には6階建てのビルが完成。その後、1977年には「凧の博物館」を館内に開設するなど、文化的な活動も展開しています。
          </p>
          <div>
            <Button className="mt-6 rounded-sm font-bold" variant="secondary">
              会社概要はこちら
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
