'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getSectionHref } from '@/lib/routes';
import { LanguageSwitcher } from './LanguageSwitcher';

const MENU_PANEL_GAP_PX = 8;

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
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [visibleGroupIndex, setVisibleGroupIndex] = useState(0);
  const [panelOffset, setPanelOffset] = useState(112);
  const navRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const groupTransitionRef = useRef<number | null>(null);

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
      const headerRect = navRef.current?.closest('header')?.getBoundingClientRect();
      const panelAnchorBottom = headerRect?.bottom ?? triggerRect?.bottom ?? 100;
      setPanelOffset(Math.max(84, Math.round(panelAnchorBottom + MENU_PANEL_GAP_PX)));
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

    setVisibleGroupIndex(activeGroupIndex);
    setIsContentVisible(false);
    const frame = window.requestAnimationFrame(() => {
      groupTransitionRef.current = window.setTimeout(() => setIsContentVisible(true), 100);
    });

    return () => {
      window.cancelAnimationFrame(frame);

      if (groupTransitionRef.current) {
        window.clearTimeout(groupTransitionRef.current);
      }
    };
  }, [isOpen]);

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

  const menuButtonLabel = isOpen ? dictionary.nav.menuClose : dictionary.nav.menuOpen;
  const panelStyle = {
    '--pmcs-mobile-menu-top': `${panelOffset}px`,
    top: `var(--pmcs-mobile-menu-top)`,
  } as CSSProperties & { '--pmcs-mobile-menu-top': string };

  const visibleGroup = dictionary.nav.mega.groups[visibleGroupIndex] ?? dictionary.nav.mega.groups[0];

  function handleGroupSelect(index: number) {
    if (index === activeGroupIndex) {
      return;
    }

    if (groupTransitionRef.current) {
      window.clearTimeout(groupTransitionRef.current);
    }

    setActiveGroupIndex(index);
    setIsContentVisible(false);
    groupTransitionRef.current = window.setTimeout(() => {
      setVisibleGroupIndex(index);
      window.requestAnimationFrame(() => setIsContentVisible(true));
    }, 170);
  }

  const mobileMenuLayer = (
    <>
      <div
        aria-hidden="true"
        className={`pmcs-motion fixed inset-0 z-30 bg-[rgba(12,12,14,0.62)] backdrop-blur-2xl transition-opacity duration-[220ms] ease-out motion-reduce:transition-none ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        id="mobile-navigation"
        ref={panelRef}
        inert={!isOpen}
        style={panelStyle}
        className={`pmcs-mobile-menu-panel pmcs-motion fixed left-4 right-4 z-50 flex flex-col overflow-hidden rounded-[2rem] border bg-white/[0.97] shadow-[0_32px_90px_rgba(20,20,20,0.32)] ring-1 ring-white/70 backdrop-blur-2xl transition-[opacity,transform] duration-[280ms] ease-out motion-reduce:transition-none sm:left-auto sm:right-5 sm:w-[26rem] sm:max-w-[calc(100vw-2rem)] rtl:sm:left-5 rtl:sm:right-auto ${
          isOpen ? 'pointer-events-auto translate-y-0 scale-100 border-pmcs-line opacity-100' : 'pointer-events-none translate-y-2 scale-[0.985] border-transparent opacity-0'
        }`}
      >
        <div className="relative shrink-0 border-b border-pmcs-line bg-pmcs-light/80 px-5 py-4 pr-16 sm:px-6 sm:py-5 sm:pr-16">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-pmcs-maroon">{dictionary.nav.mega.trigger}</p>
          <button
            type="button"
            aria-label={dictionary.nav.menuClose}
            onClick={() => setIsOpen(false)}
            className="pmcs-motion absolute right-4 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-pmcs-line bg-white/90 text-lg font-black leading-none text-pmcs-maroon shadow-sm transition duration-200 ease-out hover:border-pmcs-gold/60 hover:bg-white hover:text-pmcs-maroonDark focus-visible:pmcs-focus-ring motion-reduce:transition-none"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
              <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <nav
          className="pmcs-mobile-menu-scroll min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6"
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

          <div className="pmcs-mobile-menu-groups mt-4 grid gap-2" aria-label={dictionary.nav.mega.trigger}>
            {dictionary.nav.mega.groups.map((group, index) => (
              <button
                key={group.heading}
                type="button"
                aria-pressed={activeGroupIndex === index}
                onClick={() => handleGroupSelect(index)}
                className={`pmcs-motion w-full rounded-2xl border px-3 py-2.5 text-start text-xs font-black transition duration-200 ease-out focus-visible:pmcs-focus-ring motion-reduce:transition-none ${
                  activeGroupIndex === index ? 'border-pmcs-gold/60 bg-pmcs-gold/15 text-pmcs-maroon' : 'border-pmcs-line bg-white text-pmcs-muted hover:border-pmcs-gold/50 hover:text-pmcs-maroon'
                }`}
              >
                {group.heading}
              </button>
            ))}
          </div>

          {visibleGroup ? (
            <div
              className={`pmcs-mobile-menu-sections pmcs-motion mt-4 grid gap-4 transition-[opacity,transform] duration-[220ms] ease-out motion-reduce:transition-none ${
                isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-1.5 opacity-0'
              }`}
            >
              <section className="rounded-3xl border border-pmcs-line bg-white p-4 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-pmcs-maroon">{visibleGroup.eyebrow}</p>
                <h2 className="mt-2 text-base font-black text-pmcs-charcoal">{visibleGroup.heading}</h2>
                <p className="mt-2 text-xs leading-5 text-pmcs-muted">{visibleGroup.description}</p>
                <div className="mt-3 grid gap-2">
                  {visibleGroup.links.map((link) => (
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
            </div>
          ) : null}
        </nav>
      </div>
    </>
  );

  return (
    <div ref={navRef} className="xl:hidden">
      <button
        type="button"
        aria-label={menuButtonLabel}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className={`pmcs-header-control relative ${isOpen ? 'z-[70]' : 'z-40'} min-w-[7.25rem] px-4 text-xs uppercase tracking-[0.14em] sm:text-sm ${
          isOpen ? 'pmcs-header-control-active' : 'pmcs-header-control-subtle'
        }`}
      >
        <span className="relative h-4 w-5" aria-hidden="true">
          <span className={`pmcs-motion absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-out motion-reduce:transition-none ${isOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'}`} />
          <span className={`pmcs-motion absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-opacity duration-150 ease-out motion-reduce:transition-none ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`pmcs-motion absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-out motion-reduce:transition-none ${isOpen ? 'top-2 -rotate-45' : 'top-4 rotate-0'}`} />
        </span>
        <span className="whitespace-nowrap">{menuButtonLabel}</span>
      </button>
      {isMounted ? createPortal(mobileMenuLayer, document.body) : null}
    </div>
  );
}
