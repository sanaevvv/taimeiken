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
      </div>
      <div className="max-w-[1200px] mx-auto py-6 relative h-[600px]">
        <div className="px-12 lg:w-[550px] max-w-[550px] md:w-[60%] relative z-20 mt-20">
          <h2 className="absolute top-0 text-4xl sm:text-5xl lg:text-6xl py-2 tracking-wide text-[#344156] font-playfairDisplay font-[800] drop-shadow-lg">
            Recruit
          </h2>

          <div className="absolute top-[60px] left-12 right-10">
            <p className="text-justify mt-[30px]">
              たいめいけんでは、創業90年以上の伝統を守りながらも、新しい挑戦を続ける仲間を募集しています。私たちは「洋食」という文化を通じて、多くのお客様に笑顔と感動を届けることを目指しています。老舗ならではの技術や知識を学びながら、自分自身の成長を実感できる環境です。
              料理が好きな方、人と接することが好きな方、そして洋食文化に情熱を持つ方を心よりお待ちしています。一緒に歴史ある「たいめいけん」の未来を築いていきましょう！
            </p>

            <Button className="mt-6 font-bold relative z-20">
              採用情報はこちら
            </Button>
          </div>
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
