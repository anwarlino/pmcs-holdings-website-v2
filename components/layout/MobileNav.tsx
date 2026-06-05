'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={navRef} className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-full border border-pmcs-line bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-pmcs-maroon transition hover:border-pmcs-maroon focus-visible:pmcs-focus-ring"
      >
        {isOpen ? dictionary.nav.menuClose : dictionary.nav.menuOpen}
      </button>
      <div
        id="mobile-navigation"
        inert={!isOpen}
        className={`absolute left-4 right-4 top-full z-50 mt-3 overflow-hidden rounded-3xl border border-pmcs-line bg-white shadow-pmcs transition-all duration-300 ease-out ${
          isOpen ? 'max-h-[calc(100vh-8rem)] opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="grid max-h-[calc(100vh-8rem)] gap-4 overflow-y-auto p-5" aria-label={dictionary.nav.aria}>
          {dictionary.nav.mega.groups.map((group) => (
            <section key={group.heading} className="rounded-3xl bg-pmcs-light p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-pmcs-maroon">{group.eyebrow}</p>
              <h2 className="mt-2 text-base font-black text-pmcs-charcoal">{group.heading}</h2>
              <div className="mt-3 grid gap-2">
                {group.links.map((link) => (
                  <Link key={link.href} href={getSectionHref(locale, link.href)} onClick={() => setIsOpen(false)} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-pmcs-charcoal shadow-sm focus-visible:pmcs-focus-ring">
                    {link.label}
                    <span className="mt-1 block text-xs font-medium leading-5 text-pmcs-muted">{link.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
          <Link href={getSectionHref(locale, 'contact')} onClick={() => setIsOpen(false)} className="rounded-2xl bg-pmcs-maroon px-4 py-3 text-sm font-bold text-white focus-visible:pmcs-focus-ring">
            {dictionary.nav.contact}
          </Link>
          <LanguageSwitcher activeLocale={locale} label={dictionary.language.label} dictionary={dictionary} />
        </nav>
      </div>
    </div>
  );
}
