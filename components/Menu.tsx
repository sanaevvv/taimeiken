import Image from 'next/image';
import MenuTabs from './MenuTabs';
import { LinkButton } from './LinkButton';

const Menu = () => {
  return (
    <section className="relative pb-36" id="menu">
      <div className="absolute inset-0 bg-[#6A8A82] bottom-[-200px]"></div>
      <div className="absolute inset-0 bottom-[-200px] bg-[url('/20250403-043835.png')] bg-repeat opacity-10"></div>
      <div className="max-w-[1300px] mx-auto relative">
        <Image
          alt="menu-bg"
          width={240}
          height={200}
          className="absolute top-[-50px] left-0 object-cover"
          src="/flower.png"
        />
      </div>

      <div className="max-w-[1200px] w-full mx-auto relative">
        <div className="relative h-[300px] w-full py-[100px] pb-[700px]"></div>
        <h2 className="absolute top-[50px] text-4xl sm:text-5xl lg:text-6xl py-2 tracking-wide text-[#ece8d9] text-center w-full font-playfairDisplay font-[800] drop-shadow-2xl">
          Chef&apos;s Recommendations
        </h2>
        <p className="text-center text-2xl text-[#ece8d9] absolute top-[140px] inset-0">
          時代を超えて愛される味わい
          <br />
          極上の一皿をあなたにお届けします
        </p>
        <div className="absolute top-[180px] left-0 right-0">
          <div className="relative h-[900px] w-[90%] mx-auto">
            <div className="grid grid-cols-4 grid-rows-3 gap-4 justify-center pt-16 pb-28">
              <div className="col-span-1 row-span-1 relative h-[180px]">
                <Image
                  src="/beef.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ece8d9] p-1"
                />
              </div>
              <div className="col-span-1 row-span-1 relative h-[180px]">
                <Image
                  src="/beef.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ece8d9] p-1"
                />
              </div>
              <div className="col-span-2 row-span-2 relative h-[380px]">
                <Image
                  src="/beef.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ece8d9] p-1"
                />
              </div>
              <div className="col-span-2 row-span-2 relative h-[380px]">
                <Image
                  src="/beef.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ece8d9] p-1"
                />
              </div>
              <div className="col-span-1 row-span-1 relative h-[180px]">
                <Image
                  src="/beef.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ece8d9] p-1"
                />
              </div>
              <div className="col-span-1 row-span-1 relative h-[180px]">
                <Image
                  src="/beef.png"
                  alt=""
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ece8d9] p-1"
                />
              </div>
            </div>

            <div className="absolute bottom-[160px] left-0 right-0 flex justify-center z-50">
              <LinkButton
                href="/menu"
                className="font-bold w-[300px] py-6 text-lg bg-[#ece8d9] text-[#344156] rounded-2xl hover:text-[#ece8d9] hover:bg-[#344156]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
