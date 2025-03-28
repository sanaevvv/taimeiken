import Image from 'next/image';
import { Button } from './ui/button';

const Recruit = () => {
  return (
    <section className="py-20 pt-[400px] pb-[500px]">
      <div className="max-w-[1100px] mx-auto py-6 pb-36 relative">
        <div className="mt-[120px] px-4 lg:w-[550px] text-white max-w-[550px] md:w-[60%] absolute bottom-0 left-0 z-30 top-[30px] lg:top-20">
          <div className="flex gap-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold pb-4 tracking-widest font-montserrat">
              Recruit
            </h2>
            <div className="-mt-3">
              <Image
                src="/light.gif"
                alt="light"
                width={80}
                height={60}
                unoptimized
              />
            </div>
          </div>

          <p className="text-justify mt-[30px]">
            たいめいけんでは、創業90年以上の伝統を守りながらも、新しい挑戦を続ける仲間を募集しています。私たちは「洋食」という文化を通じて、多くのお客様に笑顔と感動を届けることを目指しています。老舗ならではの技術や知識を学びながら、自分自身の成長を実感できる環境です。
            料理が好きな方、人と接することが好きな方、そして洋食文化に情熱を持つ方を心よりお待ちしています。一緒に歴史ある「たいめいけん」の未来を築いていきましょう！
          </p>

          <Button variant="secondary" className="mt-6 rounded-sm font-bold">
            採用情報はこちら
          </Button>
        </div>

        <Image
          src="/exterior.png"
          alt="Recruit"
          width={420}
          height={550}
          className="absolute right-0 aspect-[3/4] md:w-[36%] z-10 top-[220px] md:top-[120px] filter md:brightness-[0.7] object-cover h-[350px] md:h-auto"
        />
        <Image
          src="/exterior.png"
          alt="Recruit"
          width={420}
          height={550}
          className="absolute hidden md:block md:w-[36%] aspect-[3/4] -right-[50px] mt-20 rotate-12 blur-[7px] filter brightness-50 object-cover"
        />
      </div>
    </section>
  );
};

export default Recruit;
