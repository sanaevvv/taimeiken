import { getAllNews } from '@/lib/client';
import Link from 'next/link';

// import { SectionTitle } from '../../_components/section-title';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';
import { LinkButton } from '@/components/LinkButton';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: '最新情報一覧',
  description: 'たいめいけんの最新情報をご覧頂けます。',
};

const NewsListPage = async () => {
  const newsList = await getAllNews();

  if (newsList && newsList.length > 0) {
    return (
      <section className="pt-16 md:pt-32 pb-24 container mx-auto md:max-w-[800px]">
        <div>
          {newsList.map((news) => (
            <div key={news.id}>
              <article className="py-2">
                <Link
                  href={`/news/${news.id}`}
                  className="grid grid-cols-[max-content_1fr] md:grid-cols-[max-content_100px_1fr] gap-4 items-center pt-2"
                >
                  <time className="text-gray-400 text-sm">
                    {formatDate(new Date(news.publishedAt))}
                  </time>
                  <div>
                    <Badge
                      variant="outline"
                      className="rounded-full text-gray-400"
                    >
                      {news.tag}
                    </Badge>
                  </div>
                  <p className="text-sm col-span-2 md:col-span-1">
                    {news.title}
                  </p>
                </Link>
              </article>
              <hr className="border-gray-400" />
            </div>
          ))}
          <div className="flex justify-center mt-12">
            <LinkButton href="/" text="トップページへ見る" />
          </div>
        </div>
      </section>
    );
  } else {
    return <p>投稿はありません。</p>;
  }
};

export default NewsListPage;
