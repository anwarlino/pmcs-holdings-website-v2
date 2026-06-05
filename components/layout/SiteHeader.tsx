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
      {isMegaOpen ? <button type="button" aria-label={dictionary.nav.mega.overlayLabel} className="fixed inset-0 z-30 hidden cursor-default bg-pmcs-charcoal/20 backdrop-blur-[2px] transition-opacity lg:block" onClick={() => setIsMegaOpen(false)} /> : null}
      <header ref={headerRef} className="sticky top-0 z-40 border-b border-pmcs-line bg-white/95 shadow-sm backdrop-blur">
        <div className="bg-gradient-to-r from-pmcs-maroonDark to-pmcs-maroon text-white">
          <div className="mx-auto flex min-h-9 max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em]">
            <span>{dictionary.hero.eyebrow}</span>
            <span>{dictionary.governance.items[2]}</span>
          </div>
        </div>
        <div className="relative mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 py-4">
          <Link href={getHomePath(locale)} aria-label={dictionary.nav.homeAria} className="flex items-center gap-3 rounded-2xl focus-visible:pmcs-focus-ring" onClick={() => setIsMegaOpen(false)}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pmcs-maroon text-sm font-black text-white" aria-hidden="true">{dictionary.nav.logoMark}</span>
            <span className="text-lg font-black tracking-[-0.03em] text-pmcs-charcoal">{dictionary.nav.brandName}</span>
          </Link>
          <nav className="hidden items-center gap-3 lg:flex" aria-label={dictionary.nav.aria}>
            {dictionary.nav.items.slice(0, 3).map((item) => (
              <Link key={item.href} href={getSectionHref(locale, item.href)} onClick={() => setIsMegaOpen(false)} className="rounded-full px-3 py-2 text-sm font-semibold text-pmcs-charcoal transition hover:text-pmcs-maroon focus-visible:pmcs-focus-ring">
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              aria-expanded={isMegaOpen}
              aria-controls="site-mega-menu"
              onClick={() => setIsMegaOpen((current) => !current)}
              className="rounded-full border border-pmcs-line bg-white px-4 py-2 text-sm font-black text-pmcs-maroon transition hover:border-pmcs-maroon hover:bg-pmcs-light focus-visible:pmcs-focus-ring"
            >
              {dictionary.nav.mega.trigger}
            </button>
            <Link href={getSectionHref(locale, 'contact')} onClick={() => setIsMegaOpen(false)} className="rounded-full bg-pmcs-maroon px-5 py-3 text-sm font-bold text-white transition hover:bg-pmcs-maroonDark focus-visible:pmcs-focus-ring">
              {dictionary.nav.contact}
            </Link>
            <LanguageSwitcher activeLocale={locale} label={dictionary.language.label} dictionary={dictionary} />
          </nav>
          <MobileNav locale={locale} dictionary={dictionary} />
        </div>
        <MegaMenu locale={locale} dictionary={dictionary} isOpen={isMegaOpen} onClose={() => setIsMegaOpen(false)} />
      </header>
    </>
  );
}
