import History from '@/components/History';
import Menu from '@/components/Menu';
import News from '@/components/News';
import Recruit from '@/components/Recruit';

export default function HomePage() {
  return (
    <>
      <News />

      <Menu />
      <History />
      <Recruit />
    </>
  );
}
