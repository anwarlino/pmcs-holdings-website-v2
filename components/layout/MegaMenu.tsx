'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getSectionHref } from '@/lib/routes';

const MENU_CLOSE_MS = 260;
const CONTENT_FADE_OUT_MS = 140;
const CONTENT_OPEN_DELAY_MS = 80;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

type MegaMenuProps = {
  locale: Locale;
  dictionary: LocaleContent;
  isOpen: boolean;
  activeSection: string;
  onSectionSelect: (sectionId: string) => void;
  onClose: () => void;
};

export function MegaMenu({ locale, dictionary, isOpen, activeSection, onSectionSelect, onClose }: MegaMenuProps) {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [renderedActiveSection, setRenderedActiveSection] = useState(activeSection);
  const closeTimerRef = useRef<number | null>(null);
  const contentFadeRef = useRef<number | null>(null);

  useEffect(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    if (isOpen) {
      setIsPanelVisible(true);
      return;
    }

    closeTimerRef.current = window.setTimeout(
      () => setIsPanelVisible(false),
      prefersReducedMotion() ? 0 : MENU_CLOSE_MS,
    );

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (contentFadeRef.current) {
      window.clearTimeout(contentFadeRef.current);
    }

    if (!isOpen) {
      contentFadeRef.current = window.setTimeout(
        () => setIsContentVisible(false),
        prefersReducedMotion() ? 0 : MENU_CLOSE_MS,
      );

      return () => {
        if (contentFadeRef.current) {
          window.clearTimeout(contentFadeRef.current);
        }
      };
    }

    const reducedMotion = prefersReducedMotion();
    const fadeDelay = renderedActiveSection === activeSection ? CONTENT_OPEN_DELAY_MS : CONTENT_FADE_OUT_MS;
    setIsContentVisible(false);
    contentFadeRef.current = window.setTimeout(
      () => {
        setRenderedActiveSection(activeSection);
        window.requestAnimationFrame(() => setIsContentVisible(true));
      },
      reducedMotion ? 0 : fadeDelay,
    );

    return () => {
      if (contentFadeRef.current) {
        window.clearTimeout(contentFadeRef.current);
      }
    };
  }, [activeSection, isOpen]);

  return (
    <div
      id="site-mega-menu"
      className="absolute left-0 top-full hidden w-full overflow-hidden xl:block"
      aria-hidden={!isPanelVisible}
      inert={!isPanelVisible}
    >
      <div
        className={`pmcs-motion border-b border-pmcs-line bg-white/96 ring-1 ring-white/60 backdrop-blur-2xl transition-[opacity,transform,box-shadow] duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-opacity motion-reduce:duration-[1ms] ${
          isOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100 shadow-[0_34px_100px_rgba(43,43,43,0.18)]'
            : `${isPanelVisible ? 'pointer-events-auto' : 'pointer-events-none'} translate-y-2 scale-[0.985] opacity-0 shadow-[0_20px_60px_rgba(43,43,43,0.10)]`
        }`}
      >
        <div
          className={`pmcs-motion mx-auto grid max-w-7xl gap-5 px-5 py-6 transition-[opacity] ease-out motion-reduce:transition-opacity motion-reduce:duration-[1ms] xl:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.55fr)] ${
            isContentVisible ? 'opacity-100 duration-[200ms]' : 'opacity-0 duration-[140ms]'
          }`}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {dictionary.nav.mega.groups.map((group) => (
              <section key={group.heading} className="pmcs-motion rounded-[1.75rem] border border-pmcs-line bg-gradient-to-b from-white to-pmcs-light/55 p-5 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-pmcs motion-reduce:transition-none">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-pmcs-maroon">{group.eyebrow}</p>
                <h2 className="mt-2 text-lg font-black tracking-[-0.02em] text-pmcs-charcoal">{group.heading}</h2>
                <p className="mt-2 text-sm leading-6 text-pmcs-muted">{group.description}</p>
                <div className="mt-5 grid gap-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={getSectionHref(locale, link.href)}
                      aria-current={renderedActiveSection === link.href ? 'location' : undefined}
                      onClick={() => {
                        onSectionSelect(link.href);
                        onClose();
                      }}
                      className={`pmcs-motion group rounded-2xl border px-4 py-3 transition duration-200 ease-out focus-visible:pmcs-focus-ring motion-reduce:transition-none ${
                        renderedActiveSection === link.href ? 'border-pmcs-gold/60 bg-pmcs-gold/15 shadow-sm' : 'border-transparent bg-white/80 hover:border-pmcs-gold/60 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <span className={`flex items-center justify-between gap-3 text-sm font-black transition group-hover:text-pmcs-maroon ${renderedActiveSection === link.href ? 'text-pmcs-maroon' : 'text-pmcs-charcoal'}`}>
                        <span className="break-words">{link.label}</span>
                        <span className="shrink-0 text-pmcs-gold transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true">
                          →
                        </span>
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-pmcs-muted">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="grid gap-4">
            {dictionary.nav.mega.cards.map((card, index) => (
              <section key={card.title} className={index === 0 ? 'relative overflow-hidden rounded-[1.75rem] border border-pmcs-maroon/20 bg-gradient-to-br from-pmcs-maroonDark to-pmcs-maroon p-5 text-white shadow-pmcs' : 'relative overflow-hidden rounded-[1.75rem] border border-pmcs-gold/30 bg-white p-5 text-pmcs-charcoal shadow-sm'}>
                <div className={index === 0 ? 'absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl rtl:left-[-2.5rem] rtl:right-auto' : 'absolute -right-12 -top-12 h-28 w-28 rounded-full bg-pmcs-gold/15 blur-2xl rtl:left-[-3rem] rtl:right-auto'} aria-hidden="true" />
                <p className={index === 0 ? 'text-xs font-black uppercase tracking-[0.18em] text-white/70' : 'text-xs font-black uppercase tracking-[0.18em] text-pmcs-maroon'}>{card.eyebrow}</p>
                <h2 className="mt-2 text-xl font-black tracking-[-0.03em]">{card.title}</h2>
                <p className={index === 0 ? 'mt-3 text-sm leading-6 text-white/80' : 'mt-3 text-sm leading-6 text-pmcs-muted'}>{card.description}</p>
                <div className="mt-5 flex flex-wrap gap-2" aria-label={card.placeholderAria}>
                  {card.placeholderLabels.map((label) => (
                    <div key={label} className={index === 0 ? 'rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-center text-[0.66rem] font-bold leading-snug tracking-[0.04em] text-white/80' : 'rounded-full border border-pmcs-gold/25 bg-pmcs-gold/10 px-3 py-1.5 text-center text-[0.66rem] font-bold leading-snug tracking-[0.04em] text-pmcs-charcoal'}>
                      {label}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}
