import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Home, Menu } from 'lucide-react';
import { Button } from './ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const SpHeader = () => {
  const t = useTranslations('Navigation');

  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="#ffffff" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] sm:w-[540px] bg-black/80">
        <ul className="max-w-fit mt-4">
          <li className="flex items-center justify-center mb-2">
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
                href="/news"
                className="text-white group-hover:opacity-30 hover:!opacity-100 transition-all duration-500 ease-in-out"
              >
                {t('news')}
              </Link>
            </Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default SpHeader;
