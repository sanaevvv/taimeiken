import Header from "@/components/Header";
import SubPageHeader from "@/components/SubPageHeader";

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <SubPageHeader src="/day-exterior.jpg" title="News" />
      <div className="max-w-7xl w-full mx-auto px-4 flex-1">{children}</div>
    </div>
  );
}
