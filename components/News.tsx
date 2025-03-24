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
    <section className="relative h-[20vh]">
      <div className="relative">
        <Image
          src="/beef.png"
          alt="beef"
          width={600}
          height={300}
          className="absolute w-[47vw] lg:w-[28vw] top-[250px] lg:top-[10vh] max-w-[500px] left-0 object-cover aspect-[4/3] z-10"
        />
        <div className="absolute w-[47vw] lg:w-[28vw] top-[250px] lg:top-[10vh] left-0 object-cover aspect-[4/3] bg-[radial-gradient(ellipse,_rgba(0,0,0,0)_40%,_black_90%)] z-30 max-w-[500px] "></div>
      </div>
      <div className="px-4 md:px-6 lg:pl-[35vw] text-white py-10 lg:pb-20">
        <h2 className="text-xl sm:text-2xl font-bold lg:pb-4 font-montserrat">
          News
        </h2>

        {news}

        <Button
          variant="secondary"
          className="mt-6 rounded-sm font-bold"
          asChild
        >
          <Link href="/news">もっと読む</Link>
        </Button>
      </div>
      <div className="relative hidden lg:block">
        <SpinningText
          className="mt-[10vh]"
          duration={8}
          radius={7}
        >
          TAIMEIKEN • TAIMEIKEN • TAIMEIKEN •
        </SpinningText>
        <div className="absolute inset-0 flex items-center justify-center z-100">
          <Image
            src="/logo-icon.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
