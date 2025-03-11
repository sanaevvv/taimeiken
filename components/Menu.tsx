import Image from 'next/image';
import { Button } from './ui/button';

const Menu = () => {
  return (
    <section className="bg-black">
      <div className="flex max-w-[1100px] m-auto gap-[6vw] pt-20 h-[800px]">
        <div className="mt-[150px]">
          <h2 className="text-xl sm:text-6xl font-bold pb-4 tracking-widest text-white">
            Menu
          </h2>
          <div className="space-y-4 text-white">
            <p>
              １階はカジュアルな洋食レストランとして、たいめいけん創業以来の味をお手頃な料金でお楽しみ頂けます。老若男女を問わず、皆様に喜んで頂ける洋食の品々を取り揃えてございます。
            </p>
            <p>
              ２階は本格的な洋食レストランとして、手間を惜しまないたいめいけん自慢の御料理の品々をご提供しております。２階の御料理は、デミグラスソースひとつとりましても特別に作り上げておりますので、きっと皆様にご満足頂けるものと存じます。また、いろいろなお料理を少しずつ沢山召し上がって頂ける名物小皿料理も取り揃えてございます。
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" className="mt-6 font-bold rounded-sm">
              メニュー一覧はこちら
            </Button>
            <Button
              variant="outline"
              className="mt-6 font-bold rounded-sm text-white bg-transparent border-white"
            >
              監修商品はこちら
            </Button>
          </div>
        </div>
        <div className="lg:min-w-[600px] mx-auto">
          <Image src="/interior.jpg" alt="interior" width={600} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
