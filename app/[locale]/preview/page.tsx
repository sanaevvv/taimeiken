// app/[locale]/preview/news/page.tsx
// import { getPreviewData } from '@/lib/microcms';

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: { draftKey: string; id: string };
}) {
  const { draftKey, id } = searchParams;
  // const data = await getPreviewData(id, draftKey);

  // return (
  //   // プレビュー用のUI
  // );
}
