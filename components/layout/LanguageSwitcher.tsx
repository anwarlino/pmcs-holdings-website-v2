import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import { locales, type Locale } from '@/lib/i18n';
import { getHomePath } from '@/lib/routes';
import { cn } from '@/lib/utils';

type LanguageSwitcherProps = {
  activeLocale: Locale;
  label: string;
  dictionary: LocaleContent;
};

export function LanguageSwitcher({ activeLocale, label, dictionary }: LanguageSwitcherProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label={label}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getHomePath(locale)}
          hrefLang={locale}
          className={cn(
            'rounded-full border px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition',
            activeLocale === locale
              ? 'border-pmcs-maroon bg-pmcs-maroon text-white'
              : 'border-pmcs-line bg-white text-pmcs-charcoal hover:border-pmcs-maroon',
          )}
        >
          {dictionary.language.options[locale]}
        </Link>
      ))}
    </div>
  );
}
