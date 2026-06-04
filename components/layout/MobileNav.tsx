'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getSectionHref } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';

type MobileNavProps = {
  locale: Locale;
  dictionary: LocaleContent;
};

export function MobileNav({ locale, dictionary }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(0);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-full border border-pmcs-line bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-pmcs-maroon transition focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-offset-2"
      >
        {isOpen ? dictionary.nav.menuClose : dictionary.nav.menuOpen}
      </button>

      <div
        className={cn(
          'absolute left-4 right-4 top-full z-50 mt-3 max-h-[calc(100vh-9rem)] overflow-y-auto rounded-3xl border border-pmcs-line bg-white p-5 shadow-pmcs transition duration-200',
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        )}
      >
        <nav className="grid gap-4" aria-label={dictionary.nav.aria}>
          {dictionary.megaMenu.groups.map((group, index) => (
            <section key={group.title} className="rounded-[1.35rem] border border-pmcs-line bg-pmcs-light">
              <button
                type="button"
                aria-expanded={activeGroup === index}
                onClick={() => setActiveGroup(activeGroup === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-start text-sm font-black text-pmcs-charcoal focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-inset"
              >
                <span>{group.title}</span>
                <span aria-hidden="true" className="text-pmcs-maroon">{activeGroup === index ? '−' : '+'}</span>
              </button>

              <div className={cn('grid gap-2 px-3 pb-3', activeGroup === index ? 'block' : 'hidden')}>
                <p className="px-2 pb-2 text-xs leading-6 text-pmcs-muted">{group.description}</p>
                {group.links.map((item) => (
                  <Link
                    key={`${group.title}-${item.label}`}
                    href={getSectionHref(locale, item.href)}
                    onClick={closeMenu}
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-pmcs-charcoal transition hover:text-pmcs-maroon focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-offset-2"
                  >
                    <span className="block">{item.label}</span>
                    <span className="mt-1 block text-xs font-normal leading-5 text-pmcs-muted">{item.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <Link href={getSectionHref(locale, 'contact')} onClick={closeMenu} className="rounded-2xl bg-pmcs-maroon px-4 py-3 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-offset-2">
            {dictionary.nav.contact}
          </Link>
          <LanguageSwitcher activeLocale={locale} label={dictionary.language.label} dictionary={dictionary} />
        </nav>
      </div>
    </div>
  );
}
