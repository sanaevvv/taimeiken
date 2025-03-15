import Image from 'next/image';
import MenuTabs from './MenuTabs';

const Menu = () => {
  return (
    <section className="bg-black relative" id="menu">
      <div className="max-w-[1100px] m-auto pt-24 pb-10">
        <div className="flex justify-between">
          <div className="mt-[150px]">
            <div className="flex gap-2 pt-10">
              <h2 className="text-xl sm:text-6xl font-bold pb-4 tracking-widest text-white font-serif">
                Menu
              </h2>
              <div className="-mt-3">
                <Image src="/light.gif" alt="light" width={80} height={60} />
              </div>
            </div>
            <MenuTabs />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[50px] w-[38vw] h-[300px]">
        <Image
          src="/interior.jpg"
          alt="interior"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Menu;
