import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getHomePath, getSectionHref } from '@/lib/routes';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';

type SiteHeaderProps = {
  locale: Locale;
  dictionary: LocaleContent;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-pmcs-line bg-white/95 shadow-sm backdrop-blur">
      <div className="bg-gradient-to-r from-pmcs-maroonDark to-pmcs-maroon text-white">
        <div className="mx-auto flex min-h-9 max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em]">
          <span>{dictionary.hero.eyebrow}</span>
          <span>{dictionary.governance.items[2]}</span>
        </div>
      </div>
      <div className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <Link href={getHomePath(locale)} aria-label={dictionary.nav.homeAria} className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pmcs-maroon text-sm font-black text-white" aria-hidden="true">{dictionary.nav.logoMark}</span>
          <span className="text-lg font-black tracking-[-0.03em] text-pmcs-charcoal">{dictionary.nav.brandName}</span>
        </Link>
        <nav className="hidden items-center gap-4 lg:flex" aria-label={dictionary.nav.aria}>
          {dictionary.nav.items.map((item) => (
            <Link key={item.href} href={getSectionHref(locale, item.href)} className="text-sm font-semibold text-pmcs-charcoal hover:text-pmcs-maroon">
              {item.label}
            </Link>
          ))}
          <Link href={getSectionHref(locale, 'contact')} className="rounded-full bg-pmcs-maroon px-5 py-3 text-sm font-bold text-white hover:bg-pmcs-maroonDark">
            {dictionary.nav.contact}
          </Link>
          <LanguageSwitcher activeLocale={locale} label={dictionary.language.label} dictionary={dictionary} />
        </nav>
        <MobileNav locale={locale} dictionary={dictionary} />
      </div>
    </header>
  );
}
