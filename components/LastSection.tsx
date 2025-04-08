import Image from 'next/image'

const LastSection = () => {
  return (
    <section className="relative h-[500px]">
      {/* <div className="absolute inset-0 top-[100px] bottom-[-200px] bg-[url('/20250403-043835.png')] bg-repeat-x"> */}
        <div className="max-w-[1200px] mx-auto">
          <h2 className="absolute text-4xl sm:text-5xl lg:text-6xl py-2 tracking-wide font-bold pl-6 pt-[200px] text-[#344156]">
            YouTube
          </h2>
        </div>
      {/* </div> */}
      {/* <Image
        src="/20250403-043835.png"
        alt="bg-white"
        fill
        className="object-contain scale-50 "
      /> */}
    </section>
  );
}

export default LastSection;
