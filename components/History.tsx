import Image from 'next/image';
import { Button } from './ui/button';

const History = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto mt-20">
      <Image
        src="/bg-white.jpg"
        alt="背景"
        fill
        className="absolute inset-0 object-cover"
      />
      <section className="pt-[100px] max-w-[1050px] mx-auto relative w-full pl-10 pb-32">
        <div className="flex relative min-h-[600px]">
          <div className="absolute top-1/2 -translate-y-1/2 w-[360px] z-30">
            <div className="relative overflow-hidden h-[400px]">
              <Image
                src="/exterior.png"
                width={420}
                height={550}
                alt="たいめいけんの外観"
                className="object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="max-w-[700px] relative ml-auto">
            <div className="absolute inset-0 z-10">
              <Image
                src="/vintage-wallpaper-background.jpg"
                fill
                alt=""
                className="object-cover"
                priority
              />
            </div>
            <div className="relative z-20 h-full flex flex-col justify-center px-24">
              <h2 className="absolute top-[50px] left-[24] text-4xl sm:text-5xl lg:text-6xl py-2 tracking-wide text-[#344156] font-playfairDisplay font-[800]">
                History
              </h2>

              <div className="relative z-20">
                <p className="text-black text-justify">
                  たいめいけんは、1931年（昭和6年）に茂出木心護によって創業された老舗洋食店です。創業当時の店名は「泰明軒」で、東京都中央区新川でスタートします。茂出木は「西支御料理処泰明軒」での修業を経て独立し、その屋号を引き継ぎます。
                  1948年（昭和23年）には日本橋に移転し、「たいめいけん」と改称。以降、洋食文化を代表する存在として多くの人々に愛され続けています。特に「タンポポオムライス」の発祥店として知られ、半熟オムレツをナイフで開くと卵が広がるその独特なスタイルが人気を集めています。1951年には株式会社化し、1973年には6階建てのビルが完成。その後、1977年には「凧の博物館」を館内に開設するなど、文化的な活動も展開しています。
                </p>
                <div className="mt-6">
                  <Button className="font-bold">
                    会社概要はこちら
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
