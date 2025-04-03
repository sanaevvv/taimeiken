import Image from 'next/image';
import { Button } from './ui/button';

const Recruit = () => {
  return (
    <div className="relative">
      {/* <Image
        src="/bg-white.jpg"
        alt="背景"
        fill
        className="absolute inset-0 object-cover"
      /> */}
      <div className="absolute left-0 -z-10 w-[65%] h-[800px] -top-[100px]">
        <Image
          src="/vintage-wallpaper-background.jpg"
          fill
          alt=""
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute right-0 -z-10 w-[35%] h-[800px] -top-[100px]">
        <div className="absolute inset-0 bg-[#6A8A82]"></div>
        {/* <Image
          src="/bg-gray.png"
          fill
          alt=""
          className="object-cover filter brightness-[1.2]"
          priority
        /> */}
      </div>
      <div className="max-w-[1200px] mx-auto py-6 relative h-[600px]">
        <div className="px-12 lg:w-[550px] max-w-[550px] md:w-[60%] relative z-20 mt-20">
          <div className="mb-8 py-1 bg-gradient-to-r from-black/100 to-black/70 backdrop-blur-3xl relative">
            <Image
              src="/light.gif"
              alt="light"
              width={70}
              height={50}
              unoptimized
              className="filter brightness-[1.4] absolute top-0 bottom-0 h-full object-cover left-[5%]"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl py-2 tracking-[0.1em] text-white relative px-4 font-playfairDisplay font-[700] drop-shadow-lg text-center pl-8">
              Recruit
            </h2>
          </div>

          <p className="text-justify mt-[30px] relative z-20">
            たいめいけんでは、創業90年以上の伝統を守りながらも、新しい挑戦を続ける仲間を募集しています。私たちは「洋食」という文化を通じて、多くのお客様に笑顔と感動を届けることを目指しています。老舗ならではの技術や知識を学びながら、自分自身の成長を実感できる環境です。
            料理が好きな方、人と接することが好きな方、そして洋食文化に情熱を持つ方を心よりお待ちしています。一緒に歴史ある「たいめいけん」の未来を築いていきましょう！
          </p>

          <Button className="mt-6 rounded-sm font-bold relative z-20">
            採用情報はこちら
          </Button>
        </div>

        <Image
          src="/recruit.jpg"
          width={600}
          height={300}
          alt=""
          className="absolute right-[40px] top-[17%] z-40"
        />
      </div>
    </div>
  );
};

export default Recruit;
