import { LinkButton } from '@/components/LinkButton';
import { Badge } from '@/components/ui/badge';
import { getNewsDraftById } from '@/lib/client';
import { formatDate } from '@/lib/utils';
import parse from 'html-react-parser';

type Props = {
  searchParams: {
    id?: string; // {CONTENT_ID} の値
    draftKey?: string; // {DRAFT_KEY} の値
  };
};

const ContentIdPreviewPage = async ({ searchParams }: Props) => {
  console.log('Preview params:', searchParams);

  const { id, draftKey } = searchParams;
   if (!id || !draftKey) {
     return <div className="text-white text-xl text-center mt-[6em]">お探しのページは見つかりません。</div>;
   }

  const getNews = await getNewsDraftById(id, { draftKey });

  return (
    <>
      <section className="container md:p-[6rem] text-white">
        <article className="md:pl-[2rem]">
          <div className="flex items-center gap-2">
            <time className="text-gray-400 text-sm">
              {formatDate(
                new Date(
                  getNews.updatedAt ? getNews.updatedAt : getNews.createdAt
                )
              )}
            </time>
            <Badge className="rounded-full text-gray-400" variant="outline">
              {getNews.tag}
            </Badge>
          </div>

          <h2 className="pt-2 text-sm py-8">{getNews.title}</h2>
          <div>{parse(getNews.content)}</div>
        </article>
        <div className="flex justify-center mt-12">
          <LinkButton text="一覧に戻る" href="/news" disabled={true} />
        </div>
      </section>
    </>
  );
};

export default ContentIdPreviewPage;
