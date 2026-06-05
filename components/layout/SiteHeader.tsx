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
  const headerRef = useRef<HTMLElement>(null);

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
      {isMegaOpen ? <button type="button" aria-label={dictionary.nav.mega.overlayLabel} className="fixed inset-0 z-30 hidden cursor-default bg-pmcs-charcoal/25 backdrop-blur-[3px] transition-opacity xl:block" onClick={() => setIsMegaOpen(false)} /> : null}
      <header ref={headerRef} className="sticky top-0 z-40 border-b border-pmcs-line bg-white/95 shadow-sm backdrop-blur">
        <div className="bg-gradient-to-r from-pmcs-maroonDark to-pmcs-maroon text-white">
          <div className="mx-auto flex min-h-9 max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] sm:px-5 sm:text-xs">
            <span>{dictionary.hero.eyebrow}</span>
            <span className="hidden max-w-3xl text-right opacity-90 md:block rtl:text-left">{dictionary.governance.items[2]}</span>
          </div>
        </div>
        <div className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-5 lg:gap-5">
          <Link href={getHomePath(locale)} aria-label={dictionary.nav.homeAria} className="flex min-w-0 items-center gap-3 rounded-2xl focus-visible:pmcs-focus-ring" onClick={() => setIsMegaOpen(false)}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-pmcs-maroon text-sm font-black text-white sm:h-12 sm:w-12" aria-hidden="true">{dictionary.nav.logoMark}</span>
            <span className="truncate text-base font-black tracking-[-0.03em] text-pmcs-charcoal sm:text-lg">{dictionary.nav.brandName}</span>
          </Link>

          <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
            <nav className="hidden items-center gap-1 xl:flex" aria-label={dictionary.nav.aria}>
              {dictionary.nav.items.slice(0, 3).map((item) => (
                <Link key={item.href} href={getSectionHref(locale, item.href)} onClick={() => setIsMegaOpen(false)} className="rounded-full px-3 py-2 text-sm font-semibold text-pmcs-charcoal transition hover:bg-pmcs-light hover:text-pmcs-maroon focus-visible:pmcs-focus-ring">
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                aria-expanded={isMegaOpen}
                aria-controls="site-mega-menu"
                onClick={() => setIsMegaOpen((current) => !current)}
                className="rounded-full border border-pmcs-line bg-white px-4 py-2 text-sm font-black text-pmcs-maroon shadow-sm transition hover:border-pmcs-gold hover:bg-pmcs-light focus-visible:pmcs-focus-ring"
              >
                {dictionary.nav.mega.trigger}
              </button>
              <Link href={getSectionHref(locale, 'contact')} onClick={() => setIsMegaOpen(false)} className="rounded-full bg-pmcs-maroon px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-pmcs-maroonDark focus-visible:pmcs-focus-ring">
                {dictionary.nav.contact}
              </Link>
            </nav>
            <LanguageSwitcher activeLocale={locale} label={dictionary.language.label} dictionary={dictionary} className="hidden md:block" />
            <MobileNav locale={locale} dictionary={dictionary} />
          </div>
        </div>
        <MegaMenu locale={locale} dictionary={dictionary} isOpen={isMegaOpen} onClose={() => setIsMegaOpen(false)} />
      </header>
    </>
  );
}
