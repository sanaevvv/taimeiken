import { LinkButton } from '@/components/LinkButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { getNewsDetail } from '@/lib/client';
import { formatDate } from '@/lib/utils';
import parse from 'html-react-parser';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const getNews = await getNewsDetail(params.id);
  return {
    title: `${getNews.title}`,
  };
}

const NewsDetailsPage = async ({ params }: Props) => {
  const getNews = await getNewsDetail(params.id);

  if (getNews) {
    return (
      <section className="container md:p-[6rem]">
        <article className="md:pl-[2rem]">
          <div className="flex items-center gap-2">
            <time className="text-gray-400 text-sm">
              {formatDate(new Date(getNews.publishedAt))}
            </time>
            <Badge variant="outline" className="rounded-full text-gray-400">
              {getNews.tag}
            </Badge>
          </div>

          <h2 className="pt-2 text-sm py-8">{getNews.title}</h2>
          <div className="external-link">{parse(getNews.content)}</div>
        </article>
        <div className="flex justify-center mt-12">
          <LinkButton text="一覧に戻る" href="/news" />
        </div>
      </section>
    );
  } else {
    <p className="md:pl-[2rem]">コンテンツがありません。</p>;
  }
};

export default NewsDetailsPage;
