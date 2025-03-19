import SubPageHeader from '@/components/SubPageHeader';
import React from 'react'

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <SubPageHeader src="/day-exterior.jpg" title="Recruit" />
      <div className="max-w-7xl mx-auto px-4 flex-1">{children}</div>
    </div>
  );
};

export default NewsLayout
