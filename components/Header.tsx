import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Home, Menu } from 'lucide-react';
import { Button } from './ui/button';
import SpHeader from './SpHeader';

const Header = () => {
  const t = useTranslations('Navigation');

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4 justify-end relative">
        <div className="md:hidden mr-auto">
         <SpHeader />
        </div>
        <ul className="hidden md:flex items-center group">
          <li>
            <Button variant="link" asChild>
              <Link
                href="/"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                <Home size={20} />
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="#menu"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('menu')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/contact"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('contact')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/profile"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('profile')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/recruit"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('recruit')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/license"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('license')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/news"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('news')}
              </Link>
            </Button>
          </li>
        </ul>
        <div className="hidden md:block w-px h-3 mx-4 bg-white/80" />
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
