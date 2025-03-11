import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Home } from 'lucide-react';

const Header = () => {
  const t = useTranslations('Navigation');

  return (
    <header className="inset-0 z-10 max-w-7xl mx-auto px-4 py-2">
      <nav className="flex items-center gap-4 justify-end relative">
        <ul className="flex items-center gap-6 text-white">
          <li>
            <Link href="/">
              <Home size={20} />
            </Link>
          </li>
          <li>
            <Link href="/menu">{t('menu')}</Link>
          </li>
          <li>
            <Link href="/contact">{t('contact')}</Link>
          </li>
          <li>
            <Link href="/profile">{t('profile')}</Link>
          </li>
          <li>
            <Link href="/recruit">{t('recruit')}</Link>
          </li>
          <li>
            <Link href="/license">{t('license')}</Link>
          </li>
          <li>
            <Link href="/news">{t('news')}</Link>
          </li>
        </ul>
        <div className="w-px h-3 mx-4 bg-white/80" />
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
