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
        <ul className="flex items-center group">
          <li>
            <Button variant="link" asChild>
              <Link
                href="/"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-300 ease-in-out"
              >
                <Home size={20} />
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/menu"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-300 ease-in-out"
              >
                {t('menu')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/contact"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-300 ease-in-out"
              >
                {t('contact')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/profile"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-300 ease-in-out"
              >
                {t('profile')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/recruit"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-300 ease-in-out"
              >
                {t('recruit')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/license"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-300 ease-in-out"
              >
                {t('license')}
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link
                href="/news"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-300 ease-in-out"
              >
                {t('news')}
              </Link>
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
