import Image from 'next/image';
import { LinkButton } from './LinkButton';

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="w-full px-4 mx-auto relative h-screen">
        <div className="relative h-full w-full">
          <Image
            src="/2.png"
            fill
            alt="たいめいけん茂出木シェフの調理パフォーマンス背景画像"
            className="object-cover"
          />
          {/* <div className="absolute inset-0 flex flex-col justify-end"></div> */}

          <div
            className="absolute bottom-[30px] left-0 min-w-[600px] w-[30vw]
            h-[400px] bg-[#ece8d9]/10 backdrop-blur-[8px] px-8 py-6 border border-white/30 rounded-md"
          >
            <div className="max-w-[1200px] w-full mx-auto h-[40dvh] max-h-[300px]">
              <Image
                src="/logo-white.png"
                alt="たいめいけんのlogo"
                width={360}
                height={100}
                className="absolute -top-[180px] left-8 w-[200px] sm:w-[280px] lg:w-[500px] z-50 filter brightness-[1.2] mb-8"
              />
              <p className="leading-7 lg:leading-8 text-sm sm:text-base lg:text-md z-50 p-8 text-white">
                日本橋たいめいけんは昭和6年創業の洋食屋です。
                <br className="hidden sm:block" />
                長年培ってきた伝統と、常に新しい美味しさを追求する精神で、これからも皆様に愛される洋食を提供してまいります。ぜひ一度、日本橋たいめいけんへお越しください。日本橋の地で、皆様のお越しを心よりお待ちしております。
              </p>
              <Image
                src="/signature.png"
                alt="signature"
                width={400}
                height={100}
                className="w-[200px] sm:w-[280px] lg:w-[400px]  filter brightness-1 px-8 ml-auto"
              />
              {/* <LinkButton
                href="/reserve"
                text="ご予約はこちらから"
                className="font-medium z-50 hover:bg-black/5 transition-colors duration-300"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
