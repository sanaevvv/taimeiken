import { LinkButton } from '@/components/LinkButton';
import React from 'react';

type ProfileItem = {
  title: string;
  content: string | string[];
  isList?: boolean;
};

const profileData: ProfileItem[] = [
  {
    title: '会社名',
    content: '株式会社三代目たいめいけん',
  },
  {
    title: '所在地',
    content: '東京都中央区日本橋室町1丁目9番10号 三忠堂ビル4階',
  },
  {
    title: '従業員数',
    content: '社員　22名、パート　14名（令和3年6月末現在）',
  },
  {
    title: '主要仕入先',
    content: ['(株) ＴＡＴＳＵＭＩ', '(株) 喜良久', '(株) 扇安', '(株) アマダ東京'],
    isList: true,
  },
  {
    title: '事業内容',
    content: [
      '(1) 料理店の経営並びに食料品の販売',
      '(2) 不動産の賃貸',
      '(3) 凧の仕入販売及び「凧の博物館」の運営',
      '(4) 上記各号に付帯する一切の業務',
    ],
    isList: true,
  },
];

const ProfilePage = () => {
  return (
    <div className="py-[150px]">
      <dl>
        {profileData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr] gap-2 border-gray-300 border-b py-2"
          >
            <dt>{item.title}</dt>
            <dd>
              {item.isList ? (
                <ul>
                  {(item.content as string[]).map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </ul>
              ) : (
                item.content
              )}
            </dd>
          </div>
        ))}
      </dl>
      <div className="pt-12">
        <LinkButton text="Topへ戻る" href="/" />
      </div>
    </div>
  );
};

export default ProfilePage;
