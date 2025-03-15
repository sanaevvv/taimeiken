import Image from 'next/image';
import { Button } from './ui/button';

const Recruit = () => {
  return (
    <section className="bg-black">
      <div className="flex max-w-[1100px] m-auto gap-[6vw] pt-6 h-[630px] relative">
        <div className="mt-[100px] w-[500px]">
          <div className="flex gap-2">
            <h2 className="text-xl sm:text-6xl font-bold pb-4 tracking-widest text-white font-serif">
              Recruit
            </h2>
            <div className="-mt-3">
              <Image src="/light.gif" alt="light" width={80} height={60} />
            </div>
          </div>

          <p className="text-white">
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
          className="absolute w-[420px] h-[550px] right-0 z-100 object-cover -top-4 filter grayscale-[20%]"
        />
      </div>
    </section>
  );
}

export default Recruit
