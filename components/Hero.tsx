import Image from 'next/image';
import { LinkButton } from './LinkButton';

const Hero = () => {
  return (
    <>
      <div className="w-full max-w-[1250px] px-4 mx-auto h-[300px] sm:h-auto">
        <Image
          src="/vintage-wallpaper-background.jpg"
          width={300}
          height={300}
          alt="ビンテージ色の壁紙"
          className="absolute top-0 left-0 w-[30vw] h-[80dvh]"
        />
        <div className="absolute top-[80dvh] left-0 w-[10vw] h-[150px] bg-[#6A8A82]"></div>
        <div className="relative sm:aspect-video">
          <div className="absolute left-0 sm:top-[80px] md:top-[150px] lg:grid md:place-content-center w-[60vw] sm:w-[63vw] md:w-[450px] lg:w-[550px] z-50 px-4">
            <div className="relative">
              <Image
                src="/bg-gray.png"
                alt="たいめいけんのロゴと説明文のグレーの背景画像"
                width={550}
                height={350}
                className="w-[550px] h-[350px] filter brightness-[130%]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="たいめいけんのlogo"
                  width={360}
                  height={100}
                  className="w-[200px] md:mx-auto sm:w-[280px] lg:w-[430px] z-50 pt-1 filter brightness-[0.6] opacity-90"
                />

                <p className="text-[#33322f] font-bold leading-6 lg:leading-7 text-sm sm:text-base lg:text-md px-8 py-4 md:text-center z-50">
                  日本橋たいめいけんは昭和6年創業の洋食屋です。
                  <br className="hidden sm:block" />
                  老若男女を問わず誰でも大好きなカレーやオムライスをはじめ、2Fレストランでは、お客様の「少しずつ沢山の料理を楽しみたい」との一言で実現した洋風小皿料理が大人気です。
                </p>
                <LinkButton
                  href="/reserve"
                  text="ご予約はこちらから"
                  className="font-semibold"
                />

                <Image
                  src="/flower.png"
                  width={220}
                  height={220}
                  alt=""
                  className="absolute -right-[130px] -bottom-[50px] z-40 rotate-45"
                />
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 md:right-[5%] z-10 w-[40vw] lg:w-[460px] h-full">
            <Image
              src="/bg-white.jpg"
              fill
              alt="たいめいけんの店主 茂出木 浩司シェフのプロフィール写真の白色背景"
              className="object-cover pt-[50px]"
            />
            <Image
              src="/taimeiken_master_photo.png"
              fill
              alt="たいめいけんの店主 茂出木 浩司シェフのプロフィール写真"
              className="object-cover object-right-top filter pt-[100px] drop-shadow-[20px_0_10px_rgba(0,0,0,0.30)] px-8"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[50px] right-0 w-[20vw] h-[300px] bg-[#6A8A82]"></div>
    </>
  );
};

export default Hero;
