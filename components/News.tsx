import Image from 'next/image';
import { Button } from './ui/button';
import { Link } from '@/i18n/routing';
import { SpinningText } from '@/components/magicui/spinning-text';
import { getNewNews } from '@/lib/client';
import { formatDate } from '@/lib/utils';
import { Badge } from './ui/badge';

const News = async () => {
  const data = await getNewNews();

  if (data.length === 0) {
    return (
      <p className="text-white text-center text-xl">現在、Newsがありません</p>
    );
  }

  const news = data.map((item: any) => (
    <Link
      href={`/news/${item.id}`}
      key={item.id}
      className="flex items-center gap-2 sm:gap-4 mb-2 w-full lg:w-[50vw] max-w-[800px]"
    >
      <time className="text-gray-400 text-sm">
        {formatDate(new Date(item.publishedAt))}
      </time>
      <Badge variant="outline" className="rounded-full text-gray-400">
        {item.tag}
      </Badge>
      <p className="truncate flex-1">{item.title}</p>
    </Link>
  ));
  return (
    <section className="relative h-[20vh] mt-20">
      <div className="relative w-full h-[300px]">
        <Image
          src="/bg-white.jpg"
          fill
          alt="Newsセクションの白色背景"
          className="inset-0 object-cover"
        />
      </div>
      <div>
        <Image
          src="/beef.png"
          alt="beef"
          width={600}
          height={300}
          className="absolute w-[47vw] lg:w-[28vw] top-[250px] max-w-[500px] left-0 lg:-top-[50px] object-cover aspect-[4/3] z-10"
        />
      </div>
      <div className="absolute inset-0 px-4 md:px-6 lg:pl-[35vw] py-10 lg:pb-20">
        <h2 className="text-xl sm:text-2xl font-bold lg:pb-4 font-montserrat text-[#344156]">
          News
        </h2>

        {news}

        <Button className="mt-6 font-bold" asChild>
          <Link href="/news">もっと読む</Link>
        </Button>
      </div>
      <div className="relative hidden lg:block">
        <SpinningText
          className="mt-32 font-montserrat font-semibold"
          duration={8}
          radius={6}
        >
          TAIMEIKEN • TAIMEIKEN • TAIMEIKEN •
        </SpinningText>
        <div className="absolute inset-0 flex items-center justify-center z-100">
          <Image
            src="/logo-icon.png"
            alt="logo"
            width={110}
            height={110}
            className="filter brightness-[0.1] opacity-90"
          />
        </div>
      </div>
      <div>
        <Image
          src="/interior.jpg"
          alt="interior"
          width={600}
          height={300}
          className="absolute object-cover w-[47vw] lg:w-[28vw] aspect-[4/3] right-0 -top-[30vh] sm:top-[240px] max-w-[500px]"
        />
      </div>
    </section>
  );
};

export default News;
