'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
  const [isMounted, setIsMounted] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [panelOffset, setPanelOffset] = useState(112);
  const navRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (!isOpen) {
      root.classList.remove('pmcs-nav-locked');
      body.classList.remove('pmcs-nav-locked');
      return;
    }

    root.classList.add('pmcs-nav-locked');
    body.classList.add('pmcs-nav-locked');

    return () => {
      root.classList.remove('pmcs-nav-locked');
      body.classList.remove('pmcs-nav-locked');
    };
  }, [isOpen]);

  useEffect(() => {
    function updatePanelOffset() {
      const triggerRect = navRef.current?.getBoundingClientRect();
      setPanelOffset(Math.max(84, Math.round((triggerRect?.bottom ?? 100) + 12)));
    }

    updatePanelOffset();

    if (!isOpen) {
      return;
    }

    window.addEventListener('resize', updatePanelOffset);
    window.addEventListener('orientationchange', updatePanelOffset);

    return () => {
      window.removeEventListener('resize', updatePanelOffset);
      window.removeEventListener('orientationchange', updatePanelOffset);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsContentVisible(false);
      return;
    }

    setIsContentVisible(false);
    const frame = window.requestAnimationFrame(() => {
      window.setTimeout(() => setIsContentVisible(true), 80);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeSection, isOpen]);

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
      const target = event.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        panelRef.current &&
        !panelRef.current.contains(target)
      ) {
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

  const mobileMenuLayer = (
    <>
      <button
        type="button"
        aria-label={dictionary.nav.menuClose}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        className={`pmcs-motion fixed inset-0 z-30 cursor-default bg-[rgba(12,12,14,0.58)] backdrop-blur-xl transition-opacity duration-200 ease-out motion-reduce:transition-none ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        id="mobile-navigation"
        ref={panelRef}
        inert={!isOpen}
        style={{ top: `${panelOffset}px` }}
        className={`pmcs-motion fixed left-4 right-4 z-50 overflow-hidden rounded-[2rem] border bg-white/[0.97] shadow-[0_32px_90px_rgba(20,20,20,0.28)] ring-1 ring-white/70 backdrop-blur-2xl transition-[opacity,transform] duration-[260ms] ease-out motion-reduce:transition-none sm:left-auto sm:right-5 sm:w-[26rem] sm:max-w-[calc(100vw-2rem)] rtl:sm:left-5 rtl:sm:right-auto ${
          isOpen ? 'pointer-events-auto translate-y-0 scale-100 border-pmcs-line opacity-100' : 'pointer-events-none translate-y-2 scale-[0.985] border-transparent opacity-0'
        }`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-pmcs-line bg-pmcs-light/80 px-5 py-4">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-pmcs-maroon">{dictionary.nav.mega.trigger}</p>
            <p className="mt-1 truncate text-sm font-bold text-pmcs-charcoal">{dictionary.nav.brandName}</p>
          </div>
          <button
            type="button"
            aria-label={dictionary.nav.menuClose}
            onClick={() => setIsOpen(false)}
            className="pmcs-motion flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pmcs-line bg-white text-xl leading-none text-pmcs-maroon transition duration-200 ease-out hover:border-pmcs-gold hover:bg-white focus-visible:pmcs-focus-ring motion-reduce:transition-none"
          >
            ×
          </button>
        </div>

        <nav
          className={`pmcs-motion grid gap-4 overflow-y-auto px-5 py-5 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${
            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-1.5 opacity-0'
          }`}
          style={{ maxHeight: `calc(100dvh - ${panelOffset}px - 1rem)` } as CSSProperties}
          aria-label={dictionary.nav.aria}
        >
          <div className="grid gap-3">
            <Link
              href={getSectionHref(locale, 'contact')}
              aria-current={activeSection === 'contact' ? 'location' : undefined}
              onClick={() => {
                onSectionSelect('contact');
                setIsOpen(false);
              }}
              className="pmcs-motion rounded-2xl bg-pmcs-maroon px-4 py-3 text-center text-sm font-black text-white shadow-sm transition duration-200 ease-out hover:bg-pmcs-maroonDark focus-visible:pmcs-focus-ring motion-reduce:transition-none"
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
                    className={`pmcs-motion rounded-2xl px-4 py-3 text-sm font-bold transition duration-200 ease-out focus-visible:pmcs-focus-ring motion-reduce:transition-none ${
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
    </>
  );

  return (
    <div ref={navRef} className="xl:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className={`pmcs-motion relative z-40 inline-flex items-center gap-2 rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.14em] shadow-sm transition duration-200 ease-out focus-visible:pmcs-focus-ring motion-reduce:transition-none sm:text-sm ${
          isOpen ? 'border-pmcs-gold bg-pmcs-gold/15 text-pmcs-maroon' : 'border-pmcs-line bg-white text-pmcs-maroon hover:border-pmcs-gold hover:bg-pmcs-light'
        }`}
      >
        <span className="relative h-4 w-5" aria-hidden="true">
          <span className={`pmcs-motion absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-out motion-reduce:transition-none ${isOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'}`} />
          <span className={`pmcs-motion absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-opacity duration-150 ease-out motion-reduce:transition-none ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`pmcs-motion absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-out motion-reduce:transition-none ${isOpen ? 'top-2 -rotate-45' : 'top-4 rotate-0'}`} />
        </span>
        <span className="whitespace-nowrap">{dictionary.nav.menuOpen}</span>
      </button>
      {isMounted ? createPortal(mobileMenuLayer, document.body) : null}
    </div>
  );
}
