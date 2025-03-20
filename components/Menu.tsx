import Image from 'next/image';
import MenuTabs from './MenuTabs';

const Menu = () => {
  return (
    <section className="relative" id="menu">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mt-[350px] sm:mt-[500px] md:mt-[600px] lg:mt-[400px]">
          <div className="flex gap-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold pb-4 tracking-widest text-white font-montserrat relative">
              Menu
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
          <div>
            <MenuTabs />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/interior.jpg"
          alt="interior"
          width={600}
          height={300}
          className="absolute object-cover w-[47vw] lg:w-[28vw] aspect-[4/3] right-0 -top-[30vh] sm:-top-[300px] max-w-[500px] "
        />
      </div>
    </section>
  );
};

export default Menu;
