import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <Image
        src="/food-variety.jpg"
        alt="food variety"
        className=" object-cover aspect-[16/9]"
        fill
        priority
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 m-auto w-[300px] sm:w-[360px] lg:w-[450px] z-50">
        <Image
          src="/logo3.png"
          alt="logo"
          width={360}
          height={100}
          className="w-[300px] sm:w-[360px] lg:w-[450px] z-50"
        />
        <p className="text-[#eeeeee] w-[300px] sm:w-[360px] lg:w-[470px] z-30 text-center">
          日本橋たいめいけんは昭和6年創業の洋食屋です。
          <br className="hidden sm:block" />
          老若男女を問わず誰でも大好きなカレーやオムライスをはじめ、2Fレストランでは、お客様の「少しずつ沢山の料理を楽しみたい」との一言で実現した洋風小皿料理が大人気です。
        </p>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.3)_40%,_black_100%)] z-10"></div>
    </div>
  );
};

export default Hero;
