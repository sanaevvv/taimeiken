import Hero from '@/components/Hero';
import History from '@/components/History';
import LastSection from '@/components/LastSection';
import Menu from '@/components/Menu';
import News from '@/components/News';
import Recruit from '@/components/Recruit';

export default function HomePage() {
  return (
    <>
      <Hero />
      <News />
      <Menu />
      <History />
      <Recruit />
      {/* <LastSection /> */}
    </>
  );
}
