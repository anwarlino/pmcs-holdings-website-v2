'use client';

import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import { locales, type Locale } from '@/lib/i18n';
import { getHomePath } from '@/lib/routes';
import { cn } from '@/lib/utils';

type LanguageSwitcherProps = {
  activeLocale: Locale;
  label: string;
  dictionary: LocaleContent;
  compact?: boolean;
};

export function LanguageSwitcher({ activeLocale, label, dictionary, compact = false }: LanguageSwitcherProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label={label}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getHomePath(locale)}
          hrefLang={locale}
          aria-label={`${dictionary.language.switchTo}: ${dictionary.language.options[locale]}`}
          className={cn(
            'rounded-full border font-bold uppercase tracking-[0.14em] transition focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-offset-2',
            compact ? 'px-3 py-2 text-[0.68rem]' : 'px-3 py-2 text-xs',
            activeLocale === locale
              ? 'border-pmcs-maroon bg-pmcs-maroon text-white'
              : 'border-pmcs-line bg-white text-pmcs-charcoal hover:border-pmcs-maroon',
          )}
        >
          {compact ? dictionary.language.shortOptions[locale] : dictionary.language.options[locale]}
        </Link>
      ))}
    </div>
  );
}
