import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full h-[300px] sm:h-auto relative max-w-[1200px] mx-auto">
      <Image
        src="/bg-black-sp.jpg"
        alt="黒色のライト背景 - ヒーロー背景"
        className="object-cover aspect-[16/9] block sm:hidden"
        fill
        priority
      />
      <Image
        src="/bg-black.jpg"
        alt="黒色のライト背景 - ヒーロー背景"
        className="object-cover hidden sm:block filter brightness-[0.3]"
        fill
        priority
      />

      <div className="max-w-[1200px] mx-auto relative w-full h-[300px] sm:h-auto sm:aspect-[16/9]">
        <div className="absolute top-[50px] left-0 lg:left-[5%] h-full sm:top-[80px] md:top-0 lg:grid md:place-content-center w-[60vw] sm:w-[63vw] md:w-[450px] lg:w-[500px] z-50 px-4">
          <Image
            src="/logo3.png"
            alt="たいめいけんのlogo"
            width={360}
            height={100}
            className="w-[200px] md:mx-auto sm:w-[280px] lg:w-[450px] z-50"
          />
          <p className="text-[#eeeeee] font-bold leading-6 lg:leading-7 text-sm sm:text-base lg:text-md p-4 md:text-center">
            日本橋たいめいけんは昭和6年創業の洋食屋です。
            <br className="hidden sm:block" />
            老若男女を問わず誰でも大好きなカレーやオムライスをはじめ、2Fレストランでは、お客様の「少しずつ沢山の料理を楽しみたい」との一言で実現した洋風小皿料理が大人気です。
          </p>
        </div>

        <div className="absolute right-0 top-0 bottom-0 md:right-[5%] z-10 w-[40vw] lg:w-[360px] h-full">
          <Image
            src="/taimeiken_master_photo.png"
            fill
            alt="たいめいけんの店主 茂出木 浩司シェフのプロフィール写真"
            className="object-cover object-right-top filter brightness-[0.9] pt-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
