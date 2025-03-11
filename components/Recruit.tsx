import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';

const Recruit = () => {
  return (
    <section className="bg-black">
      <div className="flex max-w-[1100px] m-auto gap-[6vw] pt-20 h-[630px] relative">
        <div className="mt-[150px] w-[500px] ">
          <h2 className="text-xl sm:text-6xl font-bold pb-4 tracking-widest text-white">
            Recruit
          </h2>

          <p className="text-white">
            たいめいけんでは、創業90年以上の伝統を守りながらも、新しい挑戦を続ける仲間を募集しています。私たちは「洋食」という文化を通じて、多くのお客様に笑顔と感動を届けることを目指しています。老舗ならではの技術や知識を学びながら、自分自身の成長を実感できる環境です。
            料理が好きな方、人と接することが好きな方、そして洋食文化に情熱を持つ方を心よりお待ちしています。一緒に歴史ある「たいめいけん」の未来を築いていきましょう！
          </p>

             <Button variant="secondary" className="mt-6 rounded-sm font-bold">採用情報はこちら</Button>
        </div>

        <Image
          src="/omuraise.jpeg"
          alt="Recruit"
          width={500}
          height={600}
          className="absolute w-[450px] h-[600px] right-0 -top-[100px] z-100 object-cover"
        />
      </div>
    </section>
  );
}

export default Recruit
