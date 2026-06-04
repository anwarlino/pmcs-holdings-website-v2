import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getSectionHref } from '@/lib/routes';
import { LanguageSwitcher } from './LanguageSwitcher';

type MobileNavProps = {
  locale: Locale;
  dictionary: LocaleContent;
};

export function MobileNav({ locale, dictionary }: MobileNavProps) {
  return (
    <details className="lg:hidden">
      <summary className="cursor-pointer rounded-full border border-pmcs-line bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-pmcs-maroon">
        {dictionary.nav.menuOpen}
      </summary>
      <div className="absolute left-4 right-4 top-full z-50 mt-3 rounded-3xl border border-pmcs-line bg-white p-5 shadow-pmcs">
        <nav className="grid gap-3" aria-label={dictionary.nav.aria}>
          {dictionary.nav.items.map((item) => (
            <Link key={item.href} href={getSectionHref(locale, item.href)} className="rounded-2xl bg-pmcs-light px-4 py-3 text-sm font-semibold text-pmcs-charcoal">
              {item.label}
            </Link>
          ))}
          <Link href={getSectionHref(locale, 'contact')} className="rounded-2xl bg-pmcs-maroon px-4 py-3 text-sm font-bold text-white">
            {dictionary.nav.contact}
          </Link>
          <LanguageSwitcher activeLocale={locale} label={dictionary.language.label} dictionary={dictionary} />
        </nav>
      </div>
    </details>
  );
}
