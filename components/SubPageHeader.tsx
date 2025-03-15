import Image from 'next/image';
const SubPageHeader = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="flex flex-row gap-4 max-w-7xl">
      <h1 className="text-white text-7xl font-bold w-[40vw] py-36 pl-36 font-open-sans tracking-wide">
        {title}
      </h1>
      <div>
        <Image
          src={src}
          alt={title}
          width={600}
          height={300}
          className="absolute object-cover right-0 top-0 aspect-[16/6] w-[60vw] object-top"
        />
      </div>
    </div>
  );
};

export default SubPageHeader;
