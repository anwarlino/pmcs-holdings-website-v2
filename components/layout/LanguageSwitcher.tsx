'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import { locales, type Locale } from '@/lib/i18n';
import { getHomePath } from '@/lib/routes';
import { cn } from '@/lib/utils';

type LanguageSwitcherProps = {
  activeLocale: Locale;
  label: string;
  dictionary: LocaleContent;
  className?: string;
  align?: 'start' | 'end';
  onNavigate?: () => void;
};

export function LanguageSwitcher({ activeLocale, label, dictionary, className, align = 'end', onNavigate }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const activeLabel = dictionary.language.options[activeLocale];

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
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
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
    <div ref={switcherRef} className={cn('relative min-w-0', className)} aria-label={label}>
      <button
        type="button"
        aria-label={`${dictionary.language.switchTo}: ${activeLabel}`}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
        className="pmcs-motion inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full border border-pmcs-line bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-pmcs-charcoal shadow-sm transition duration-200 ease-out hover:border-pmcs-gold hover:text-pmcs-maroon focus-visible:pmcs-focus-ring motion-reduce:transition-none sm:px-4"
      >
        <span aria-hidden="true" className="text-pmcs-gold">◎</span>
        <span className="truncate">{activeLabel}</span>
        <span aria-hidden="true" className={`text-pmcs-maroon transition ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      <div
        id={menuId}
        inert={!isOpen}
        className={cn(
          'pmcs-motion absolute top-full z-[70] mt-3 w-48 max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-pmcs-line bg-white p-2 shadow-pmcs transition-all duration-200 ease-out motion-reduce:transition-none',
          align === 'end' ? 'right-0 rtl:left-0 rtl:right-auto' : 'left-0 rtl:left-auto rtl:right-0',
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
        )}
        aria-label={dictionary.language.linksHeading}
      >
        {locales.map((locale) => {
          const isActive = activeLocale === locale;

          return (
            <Link
              key={locale}
              href={getHomePath(locale)}
              hrefLang={locale}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => {
                setIsOpen(false);
                onNavigate?.();
              }}
              className={cn(
                'pmcs-motion flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-sm font-bold transition duration-200 ease-out focus-visible:pmcs-focus-ring motion-reduce:transition-none',
                isActive
                  ? 'border border-pmcs-gold/50 bg-pmcs-gold/15 text-pmcs-maroon'
                  : 'text-pmcs-charcoal hover:bg-pmcs-light hover:text-pmcs-maroon',
              )}
            >
              <span>{dictionary.language.options[locale]}</span>
              {isActive ? <span className="h-2 w-2 rounded-full bg-pmcs-gold" aria-hidden="true" /> : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
