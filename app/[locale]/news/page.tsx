import { getAllNews } from '@/lib/client';
import Link from 'next/link';

// import { SectionTitle } from '../../_components/section-title';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';
import { LinkButton } from '@/components/LinkButton';

export const metadata: Metadata = {
  title: '最新情報一覧',
  description: 'たいめいけんの最新情報をご覧頂けます。',
};

const NewsListPage = async () => {
  const newsList = await getAllNews();

  if (newsList && newsList.length > 0) {
    return (
      <section className="pt-24 pb-24 container md:px-[6rem]">
        <div className="py-6 md:px-[2rem]">
          {newsList.map((news) => (
            <div key={news.id}>
              <article className="flex gap-4 py-2">
                <Link
                  href={`/news/${news.id}`}
                  className="flex gap-2 md:gap-4 flex-col md:flex-row"
                >
                  <time className="text-gray-400 text-sm">
                    {formatDate(new Date(news.publishedAt))}
                  </time>
                  <div>
                    <p className="text-gray-400 text-[13px] rounded-full border border-gray-400 max-w-[100px] px-2 text-center">
                      {news.tag}
                    </p>
                    <p className="pt-2 text-sm">{news.title}</p>
                  </div>
                </Link>
              </article>
              <hr className="border-gray-400" />
            </div>
          ))}
          <div className="flex justify-center mt-6">
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
