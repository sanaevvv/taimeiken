import Image from 'next/image';

const Hero = () => {
  return (
    <div className="">
      <Image
        src="/food-variety.jpg"
        alt="food variety"
        className="filter brightness-[50%] contrast-[120%] saturate-[110%] object-cover aspect-[16/9]"
        fill
        priority
      />
      <div className="">
        <Image
          src="/logo3.png"
          alt="logo"
          width={360}
          height={100}
          className="absolute inset-0 m-auto w-[300px] sm:w-[360px] lg:w-[450px] z-50"
        />
        <p className="text-[#eeeeee] absolute bottom-[27%] left-[50%] translate-x-[-50%] w-[300px] sm:w-[360px] lg:w-[470px] z-30 text-center">
          日本橋たいめいけんは昭和6年創業の洋食屋です。
          <br className="hidden sm:block" />
          老若男女を問わず誰でも大好きなカレーやオムライスをはじめ、2Fレストランでは、お客様の「少しずつ沢山の料理を楽しみたい」との一言で実現した洋風小皿料理が大人気です。
        </p>
      </div>
    </div>
  );
};

export default Hero;
