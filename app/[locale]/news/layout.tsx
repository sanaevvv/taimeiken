import SubPageHeader from '@/components/SubPageHeader';
import Image from 'next/image';

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative w-[800px] h-[300px]">
        <Image
          src="/bg-white.jpg"
          fill
          alt="Newsセクションの白色背景"
          className="inset-0 object-cover"
        />
      </div>
      <SubPageHeader src="/day-exterior.jpg" title="News" />
      <div className="max-w-7xl w-full mx-auto px-4 flex-1">{children}</div>
    </div>
  );
};

export default NewsLayout
