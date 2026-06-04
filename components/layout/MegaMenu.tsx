'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getSectionHref } from '@/lib/routes';
import { cn } from '@/lib/utils';

type MegaMenuProps = {
  locale: Locale;
  dictionary: LocaleContent;
};

export function MegaMenu({ locale, dictionary }: MegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isOpen = activeIndex !== null;
  const activeGroup = activeIndex === null ? null : dictionary.megaMenu.groups[activeIndex];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    }

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveIndex(null);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative hidden xl:block" onMouseLeave={() => setActiveIndex(null)}>
      <nav className="flex items-center gap-2" aria-label={dictionary.megaMenu.ariaLabel}>
        {dictionary.megaMenu.groups.map((group, index) => {
          const buttonId = `mega-menu-trigger-${index}`;
          const panelId = `mega-menu-panel-${index}`;

          return (
            <button
              key={group.title}
              id={buttonId}
              type="button"
              aria-expanded={activeIndex === index}
              aria-controls={panelId}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={cn(
                'rounded-full px-4 py-3 text-sm font-bold text-pmcs-charcoal transition focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-offset-2',
                activeIndex === index ? 'bg-pmcs-maroon text-white shadow-lg' : 'hover:bg-pmcs-light hover:text-pmcs-maroon',
              )}
            >
              {group.title}
            </button>
          );
        })}
      </nav>

      <div
        aria-hidden={!isOpen}
        className={cn(
          'pointer-events-none fixed inset-0 top-[8.5rem] z-30 bg-pmcs-charcoal/20 backdrop-blur-[2px] transition-opacity duration-200',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
      />

      <div
        id={activeIndex === null ? undefined : `mega-menu-panel-${activeIndex}`}
        role="region"
        aria-label={activeGroup?.title}
        className={cn(
          'absolute end-0 top-full z-40 mt-5 w-[min(76rem,calc(100vw-2.5rem))] overflow-hidden rounded-[2rem] border border-white/60 bg-white/95 shadow-[0_34px_90px_rgba(43,43,43,0.18)] backdrop-blur-xl transition duration-200',
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0',
        )}
      >
        {activeGroup ? (
          <div className="grid gap-0 lg:grid-cols-[1fr_23rem]">
            <div className="grid gap-6 p-7 lg:grid-cols-[16rem_1fr]">
              <aside className="rounded-[1.5rem] bg-gradient-to-br from-pmcs-maroon to-pmcs-maroonDark p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-pmcs-gold">{dictionary.megaMenu.previewEyebrow}</p>
                <h2 className="mt-4 text-2xl font-black tracking-[-0.04em]">{activeGroup.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/78">{activeGroup.description}</p>
              </aside>

              <div className="grid gap-3 sm:grid-cols-2">
                {activeGroup.links.map((item) => (
                  <Link
                    key={`${activeGroup.title}-${item.label}`}
                    href={getSectionHref(locale, item.href)}
                    onClick={() => setActiveIndex(null)}
                    className="group rounded-[1.35rem] border border-pmcs-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-pmcs-gold hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-offset-2"
                  >
                    <span className="block text-sm font-black text-pmcs-charcoal group-hover:text-pmcs-maroon">{item.label}</span>
                    <span className="mt-2 block text-xs leading-6 text-pmcs-muted">{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="border-t border-pmcs-line bg-pmcs-light p-7 lg:border-s lg:border-t-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-pmcs-green">{dictionary.megaMenu.previewTitle}</p>
              <p className="mt-4 text-sm leading-7 text-pmcs-muted">{dictionary.megaMenu.previewBody}</p>
              <div className="mt-6 grid gap-4">
                {dictionary.megaMenu.previewCards.map((card) => (
                  <div key={card.title} className="rounded-[1.5rem] border border-white bg-white p-5 shadow-sm">
                    <div className="mb-4 h-16 rounded-[1rem] bg-gradient-to-br from-pmcs-gold/70 via-white to-pmcs-green/35" />
                    <h3 className="text-sm font-black text-pmcs-charcoal">{card.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-pmcs-muted">{card.body}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        ) : null}
      </div>
    </div>
  );
}
