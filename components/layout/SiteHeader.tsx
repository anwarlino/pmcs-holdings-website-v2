'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getHomePath, getSectionHref } from '@/lib/routes';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';

type SiteHeaderProps = {
  locale: Locale;
  dictionary: LocaleContent;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function syncActiveSection() {
      const hash = window.location.hash.replace('#', '');

      if (hash) {
        setActiveSection(hash);
        setIsMegaOpen(false);
      }
    }

    syncActiveSection();
    window.addEventListener('hashchange', syncActiveSection);

    return () => window.removeEventListener('hashchange', syncActiveSection);
  }, []);

  useEffect(() => {
    if (!isMegaOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMegaOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMegaOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMegaOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={dictionary.nav.mega.overlayLabel}
        aria-hidden={!isMegaOpen}
        tabIndex={isMegaOpen ? 0 : -1}
        className={`pmcs-motion fixed inset-0 z-30 hidden cursor-default bg-[rgba(12,12,14,0.48)] backdrop-blur-xl transition-opacity duration-200 ease-out motion-reduce:transition-none xl:block ${
          isMegaOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMegaOpen(false)}
      />
      <header ref={headerRef} className="sticky top-0 z-[60] border-b border-pmcs-line bg-white/95 shadow-sm backdrop-blur">
        <div className="bg-gradient-to-r from-pmcs-maroonDark to-pmcs-maroon text-white">
          <div className="mx-auto max-w-7xl px-4 py-1.5 sm:px-5">
            <p className="text-[0.72rem] font-medium leading-5 tracking-normal text-white/90 sm:text-xs">
              {dictionary.nav.claimRibbon}
            </p>
          </div>
        </div>
        <div className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-5 lg:gap-5">
          <Link href={getHomePath(locale)} aria-label={dictionary.nav.homeAria} className="flex min-w-0 items-center gap-3 rounded-2xl focus-visible:pmcs-focus-ring" onClick={() => setIsMegaOpen(false)}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pmcs-maroon text-sm font-black text-white sm:h-12 sm:w-12" aria-hidden="true">{dictionary.nav.logoMark}</span>
            <span className="truncate text-base font-black tracking-[-0.03em] text-pmcs-charcoal sm:text-lg">{dictionary.nav.brandName}</span>
          </Link>

          <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
            <nav className="hidden items-center gap-2 xl:flex" aria-label={dictionary.nav.aria}>
              {dictionary.nav.items.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={getSectionHref(locale, item.href)}
                  aria-current={activeSection === item.href ? 'location' : undefined}
                  onClick={() => {
                    setActiveSection(item.href);
                    setIsMegaOpen(false);
                  }}
                  className={`pmcs-header-nav-link ${
                    activeSection === item.href
                      ? 'pmcs-header-nav-pill border border-pmcs-maroon/10 bg-pmcs-maroon/10 text-pmcs-maroon shadow-sm'
                      : 'text-pmcs-charcoal hover:bg-pmcs-light hover:text-pmcs-maroon'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              ))}
              <button
                type="button"
                aria-expanded={isMegaOpen}
                aria-controls="site-mega-menu"
                onClick={() => setIsMegaOpen((current) => !current)}
                className={`pmcs-header-control min-w-[7.25rem] ${
                  isMegaOpen ? 'pmcs-header-control-active' : 'pmcs-header-control-subtle'
                }`}
              >
                <span className="whitespace-nowrap">{dictionary.nav.mega.trigger}</span>
              </button>
              <Link
                href={getSectionHref(locale, 'contact')}
                aria-current={activeSection === 'contact' ? 'location' : undefined}
                onClick={() => {
                  setActiveSection('contact');
                  setIsMegaOpen(false);
                }}
                className="pmcs-header-control min-w-[7.25rem] border-pmcs-maroon bg-pmcs-maroon px-5 font-bold text-white hover:border-pmcs-maroonDark hover:bg-pmcs-maroonDark"
              >
                <span className="whitespace-nowrap">{dictionary.nav.contact}</span>
              </Link>
            </nav>
            <LanguageSwitcher activeLocale={locale} label={dictionary.language.label} dictionary={dictionary} className="hidden max-w-[10rem] md:block" />
            <MobileNav locale={locale} dictionary={dictionary} activeSection={activeSection} onSectionSelect={setActiveSection} />
          </div>
        </div>
        <MegaMenu locale={locale} dictionary={dictionary} isOpen={isMegaOpen} activeSection={activeSection} onSectionSelect={setActiveSection} onClose={() => setIsMegaOpen(false)} />
      </header>
    </>
  );
}
