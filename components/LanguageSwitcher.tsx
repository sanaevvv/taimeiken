'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useState } from 'react';

const languageNames = {
  ja: {
    native: '日本語',
    flag: '🇯🇵',
  },
  en: {
    native: 'English',
    flag: '🇬🇧',
  },
  ko: {
    native: '한국어',
    flag: '🇰🇷',
  },
  zh: {
    native: '中文',
    english: 'Chinese',
    flag: '🇨🇳',
  },
} as const;

type Locale = (typeof routing.locales)[number];

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState<
    (typeof languageNames)[Locale]
  >(languageNames[locale as Locale]);

  const switchLanguage = (loc: Locale) => {
    setCurrentLanguage(languageNames[loc as Locale]);

    const newPath = pathname === '/' ? `/${loc}` : `/${loc}${pathname}`;
    router.replace(newPath);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-2 px-2">
          <span className="text-xl">
            {currentLanguage.flag ?? <Globe className="h-4 w-4" />}
          </span>
          <span className="hidden sm:inline-block text-sm">
            {currentLanguage.native}
          </span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => switchLanguage(loc)}
            className="flex items-center justify-between cursor-pointer"
          >
            <Button
              className="flex items-center gap-2"
              onClick={() => router.push(`/${loc}`)}
              variant="ghost"
            >
              <span className="text-xl">
                {languageNames[loc as Locale].flag}
              </span>
              <span>{languageNames[loc as Locale].native}</span>
            </Button>

            {currentLanguage === languageNames[loc as Locale] && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
