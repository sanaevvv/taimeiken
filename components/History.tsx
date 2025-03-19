import Image from 'next/image';
import { Button } from './ui/button';

const History = () => {
  return (
    <section className="bg-black pt-[100px]">
      <div className="max-w-[1100px] mx-auto relative">
        <Image
          src="/exterior.JPG"
          width={420}
          height={550}
          alt="たいめいけんの外観"
          className="absolute md:w-[36%] aspect-[3/4] z-10 filter brightness-50 md:brightness-100 h-[63vh] object-cover"
        />
        <Image
          src="/exterior.JPG"
          width={420}
          height={550}
          alt="たいめいけんの外観"
          className="hidden md:block absolute md:w-[36%] aspect-[3/4] -left-[50px] -mt-5 -rotate-12 blur-[7px] filter brightness-90 object-cover"
        />
        <div className="px-4 pt-20 text-white max-w-[550px] md:w-[60%] absolute bottom-0 right-0 z-30 -top-[150px] md:-top-[100px] lg:-top-[50px]">
          <div className="flex gap-2">
            <div className="-mt-3">
              <Image
                src="/light.gif"
                alt="light"
                width={80}
                height={60}
                unoptimized
              />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-widest text-white font-montserrat">
              History
            </h2>
          </div>
          <p className="text-justify mt-[30px]">
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
