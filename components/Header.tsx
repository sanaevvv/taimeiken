import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Home } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const t = useTranslations('Navigation');

  return (
    <header className="inset-0 z-10 max-w-7xl mx-auto px-4 py-2">
      <nav className="flex items-center gap-4 justify-end relative">
        <ul className="flex items-center">
          <li>
            <Button variant="link" asChild>
              <Link href="/" className="text-white">
                <Home size={20} />
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/menu" className="text-white">
                {t('menu')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/contact" className='text-white'>{t('contact')}</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/profile" className="text-white">{t('profile')}</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/recruit" className='text-white'>{t('recruit')}</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/license" className='text-white'>{t('license')}</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href="/news" className='text-white'>{t('news')}</Link>
            </Button>
          </li>
        </ul>
        <div className="w-px h-3 mx-4 bg-white/80" />
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
