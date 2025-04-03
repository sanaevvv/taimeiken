import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Home } from 'lucide-react';
import { Button } from './ui/button';
import SpHeader from './SpHeader';

const Header = () => {
  const t = useTranslations('Navigation');

  return (
    <header className="fixed top-0 left-0 right-0 z-120">
      <nav className="max-w-7xl w-full py-2 flex items-center justify-end relative">
        <div className="md:hidden mr-auto">
          <SpHeader />
        </div>
        <ul className="hidden md:flex items-center group">
          <li>
            <Button variant="link" asChild>
              <Link
                href="/"
                className="group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                <Home size={20} />
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="#menu"
                className="group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('menu')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/contact"
                className="group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('contact')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/profile"
                className="group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('profile')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/recruit"
                className="group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('recruit')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/news"
                className=" group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('news')}
              </Link>
            </Button>
          </li>
        </ul>
        <hr className="w-[1px] h-4 bg-gray-400/50" />
        <div className="hidden md:block h-3 mx-2" />
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
