import { createClient } from 'microcms-js-sdk';
import { revalidatePath } from 'next/cache';
import type { MicroCMSQueries } from 'microcms-js-sdk';

// クライアントの作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_ID!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

// お知らせ用の型を定義
export interface News {
  id: string;
  title: string;
  content: string;
  tag: string;
  publishedAt: Date;
}

export interface NewsDraft {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date | string | number;
}

export type PreviewContact = {
  productName: String;
  createdAt: Date;
  categories: string;
  email: string;
  message: string;
  name: string;
  organization: string;
  subject: string;
  tel: string;
};

export type PreviewEntry = {
  createdAt: Date;
  name: string;
  ruby: string;
  gender: string;
  birthday: string;
  prefecture: string;
  postalCode: string;
  city: string;
  town: string;
  tel: string;
  mainEmail: string;
  subEmail: string;
  policyAccepted: boolean;
  finalEducation: string;
  graduationSchool: string;
  qualification: string;
  jobCarrier: string;
  focus: string;
  selfPromotion: string;
  motivation: string;
  aspirations: string;
};

// お知らせ新着3件取得
export async function getNewNews(): Promise<News[]> {
  const data = await client.get({
    endpoint: 'news',
    queries: {
      limit: 3,
    },
  });
  revalidatePath('/');

  return data.contents;
}

// お知らせ一覧取得
export async function getAllNews(): Promise<News[]> {
  const data = await client.getAllContents({
    endpoint: 'news',
  });

  revalidatePath('/news');

  return data;
}

// お知らせ詳細を取得
export async function getNewsDetail(id: string): Promise<News> {
  const data = await client.get({
    endpoint: 'news',
    contentId: id,
  });
  revalidatePath(`/news/${id}`);
  return data;
}

// お知らせドラフトを取得
export async function getNewsDraftById(
  id: string,
  queries: MicroCMSQueries = {}
): Promise<NewsDraft> {
  const data = await client.get({
    endpoint: 'news',
    contentId: id,
    queries,
  });
  return data;
}

// コンタクトフォームドラフト取得
export async function getContactById(
  id: string,
  queries: MicroCMSQueries = {}
): Promise<PreviewContact> {
  const data = await client.get({
    endpoint: 'contact',
    contentId: id,
    queries,
  });

  return data;
}

// エントリーフォームドラフト取得
export async function getEntryById(
  id: string,
  queries: MicroCMSQueries = {}
): Promise<PreviewEntry> {
  const data = await client.get({
    endpoint: 'entry-form',
    contentId: id,
    queries,
  });
  console.log(data);

  return data;
}
