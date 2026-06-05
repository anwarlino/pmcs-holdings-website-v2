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
  activeSection: string;
  onSectionSelect: (sectionId: string) => void;
};

export function MobileNav({ locale, dictionary, activeSection, onSectionSelect }: MobileNavProps) {
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
    <div ref={navRef} className="xl:hidden">
      {isOpen ? <button type="button" aria-label={dictionary.nav.menuClose} className="fixed inset-0 z-30 cursor-default bg-pmcs-charcoal/35 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0" onClick={() => setIsOpen(false)} /> : null}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className={`relative z-40 inline-flex items-center gap-2 rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.14em] shadow-sm transition focus-visible:pmcs-focus-ring sm:text-sm ${
          isOpen ? 'border-pmcs-gold bg-pmcs-gold/15 text-pmcs-maroon' : 'border-pmcs-line bg-white text-pmcs-maroon hover:border-pmcs-gold hover:bg-pmcs-light'
        }`}
      >
        <span className="relative h-4 w-5" aria-hidden="true">
          <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'top-2 rotate-45' : ''}`} />
          <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'top-2 -rotate-45' : ''}`} />
        </span>
        <span className="whitespace-nowrap">{dictionary.nav.menuOpen}</span>
      </button>
      <div
        id="mobile-navigation"
        inert={!isOpen}
        className={`absolute left-4 right-4 top-full z-50 mt-3 overflow-hidden rounded-[2rem] border bg-white shadow-pmcs transition-all duration-300 ease-out sm:left-auto sm:w-[26rem] sm:max-w-[calc(100vw-2rem)] rtl:sm:left-5 rtl:sm:right-auto ${
          isOpen ? 'pointer-events-auto max-h-[calc(100dvh-7rem)] translate-y-0 border-pmcs-line opacity-100' : 'pointer-events-none max-h-0 -translate-y-3 border-transparent opacity-0'
        }`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-pmcs-line bg-pmcs-light/70 px-5 py-4">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-pmcs-maroon">{dictionary.nav.mega.trigger}</p>
            <p className="mt-1 truncate text-sm font-bold text-pmcs-charcoal">{dictionary.nav.brandName}</p>
          </div>
          <button
            type="button"
            aria-label={dictionary.nav.menuClose}
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pmcs-line bg-white text-xl leading-none text-pmcs-maroon transition hover:border-pmcs-gold hover:bg-white focus-visible:pmcs-focus-ring"
          >
            ×
          </button>
        </div>

        <nav className="grid max-h-[calc(100dvh-13rem)] gap-4 overflow-y-auto px-5 py-5" aria-label={dictionary.nav.aria}>
          <div className="grid gap-3">
            <Link
              href={getSectionHref(locale, 'contact')}
              aria-current={activeSection === 'contact' ? 'location' : undefined}
              onClick={() => {
                onSectionSelect('contact');
                setIsOpen(false);
              }}
              className="rounded-2xl bg-pmcs-maroon px-4 py-3 text-center text-sm font-black text-white shadow-sm transition hover:bg-pmcs-maroonDark focus-visible:pmcs-focus-ring"
            >
              {dictionary.nav.contact}
            </Link>
            <LanguageSwitcher activeLocale={locale} label={dictionary.language.label} dictionary={dictionary} align="start" className="md:hidden" onNavigate={() => setIsOpen(false)} />
          </div>

          {dictionary.nav.mega.groups.map((group) => (
            <section key={group.heading} className="rounded-3xl border border-pmcs-line bg-white p-4 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-pmcs-maroon">{group.eyebrow}</p>
              <h2 className="mt-2 text-base font-black text-pmcs-charcoal">{group.heading}</h2>
              <div className="mt-3 grid gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={getSectionHref(locale, link.href)}
                    aria-current={activeSection === link.href ? 'location' : undefined}
                    onClick={() => {
                      onSectionSelect(link.href);
                      setIsOpen(false);
                    }}
                    className={`rounded-2xl px-4 py-3 text-sm font-bold transition focus-visible:pmcs-focus-ring ${
                      activeSection === link.href ? 'border border-pmcs-gold/50 bg-pmcs-gold/15 text-pmcs-maroon' : 'bg-pmcs-light text-pmcs-charcoal hover:bg-white hover:text-pmcs-maroon'
                    }`}
                  >
                    <span className="break-words">{link.label}</span>
                    <span className="mt-1 block text-xs font-medium leading-5 text-pmcs-muted">{link.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </nav>
      </div>
    </div>
  );
}
