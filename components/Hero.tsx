import Image from 'next/image';

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

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-[1500px] w-full mx-auto relative pb-[30px]">
              <Image
                src="/logo-white.png"
                alt="たいめいけんのlogo"
                width={500}
                height={100}
                className="filter brightness-[1.4] mb-8 pl-8 shadow-lg"
              />
              <div className="max-w-[560px] w-full h-[400px] bg-[#ece8d9]/10 backdrop-blur-[8px] px-8 py-6 border border-white/30 rounded-md drop-shadow-lg">
                <p className="leading-7 lg:leading-8 text-sm sm:text-base lg:text-md p-8 text-white">
                  日本橋たいめいけんは昭和6年創業の洋食屋です。
                  <br className="hidden sm:block" />
                  長年培ってきた伝統と、常に新しい美味しさを追求する精神で、これからも皆様に愛される洋食を提供してまいります。ぜひ一度、日本橋たいめいけんへお越しください。日本橋の地で、皆様のお越しを心よりお待ちしております。
                </p>
                <Image
                  src="/signature.png"
                  alt="signature"
                  width={400}
                  height={100}
                  className="w-[200px] sm:w-[280px] lg:w-[400px] filter brightness-1 px-8 ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
