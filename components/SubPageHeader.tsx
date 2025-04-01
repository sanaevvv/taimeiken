import Image from 'next/image';
const SubPageHeader = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="flex flex-row gap-4 max-w-7xl mx-auto w-full h-[350px] relative">
      <h1 className="text-gray-300 md:text-gray-400 text-5xl sm:text-7xl font-bold py-40 md:py-44 md:pl-36 font-open-sans tracking-wide absolute top-0 left-0 z-10 text-center w-full md:text-left">
        {title}
      </h1>
      <div>
        <Image
          src={src}
          alt={title}
          width={600}
          height={300}
          className="absolute object-cover right-0 top-0 md:top-[50px] h-[350px] object-top filter brightness-[0.8]"
        />
      </div>
    </div>
  );
};

export default SubPageHeader;
