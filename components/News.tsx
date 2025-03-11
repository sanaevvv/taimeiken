import Image from 'next/image';
import { Button } from './ui/button';
import { Link } from '@/i18n/routing';

const News = () => {
  return (
    <section className="bg-black mt-[90vh] relative">
      <div>
        <Image
          src="/beef.png"
          alt="beef"
          width={600}
          height={300}
          className="absolute w-[35vw] top-[100px] left-0 object-cover aspect-[5/3.3] z-10"
        />
      </div>
      <div className="pl-[40vw] text-white pt-20">
        <h2 className="text-xl sm:text-2xl font-bold pb-4">News</h2>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-[650px]">
          <time className="text-gray-400 text-sm sm:w-24 lg:w-48">
            2025-03-10
          </time>
          <p className="truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam,
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-[650px]">
          <time className="text-gray-400 text-sm sm:w-24 lg:w-48">
            2025-03-10
          </time>
          <p className="truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam,
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-[650px]">
          <time className="text-gray-400 text-sm sm:w-24 lg:w-48">
            2025-03-10
          </time>
          <p className="truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam,
          </p>
        </div>

        <Button
          variant="secondary"
          className="mt-6 rounded-sm font-bold"
          asChild
        >
          <Link href="/news">もっと読む</Link>
        </Button>
      </div>
    </section>
  );
};

export default News;
