import Header from '@/components/Header';
import SubPageHeader from '@/components/SubPageHeader';

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <SubPageHeader src="/day-exterior.jpg" title="News" />
      <p className="text-white text-2xl font-bold bg-red-500 z-100 absolute top-0 left-0 w-full text-center py-2">
        このページは画面プレビューです
      </p>
      <div className="max-w-7xl w-full mx-auto px-4 flex-1">{children}</div>
    </div>
  );
}
