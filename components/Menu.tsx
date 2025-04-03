import Image from 'next/image';
import MenuTabs from './MenuTabs';

const Menu = () => {
  return (
    <section className="relative" id="menu">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mt-[350px] sm:mt-[500px] md:mt-[600px] lg:mt-[400px]">
          <div className="flex justify-center items-center mb-8 py-1 bg-gradient-to-r from-black/100 to-black/70 backdrop-blur-3xl w-[400px] relative">
            <Image
              src="/light.gif"
              alt="light"
              width={70}
              height={50}
              unoptimized
              className="absolute top-0 bottom-0 h-full object-cover left-[5%] filter brightness-[1.4]"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl py-2 tracking-[0.1em] text-white relative px-4 font-playfairDisplay font-[700] drop-shadow-lg">
              Menu
            </h2>
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
          className="absolute object-cover w-[47vw] lg:w-[28vw] aspect-[4/3] right-0 -top-[30vh] sm:-top-[300px] max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default Menu;
