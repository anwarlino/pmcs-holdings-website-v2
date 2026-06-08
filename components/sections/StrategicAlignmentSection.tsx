'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { LocaleContent } from '@/content/locales/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

type AlignmentCard = LocaleContent['alignment']['cards'][number];

export function StrategicAlignmentSection({ dictionary }: { dictionary: LocaleContent }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalPanelRef = useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const activeCard = useMemo(() => (activeIndex === null ? null : dictionary.alignment.cards[activeIndex]), [activeIndex, dictionary.alignment.cards]);

  function openModal(index: number) {
    lastFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActiveIndex(index);
  }

  function closeModal() {
    setActiveIndex(null);
  }

  useEffect(() => {
    if (!activeCard) {
      document.documentElement.classList.remove('pmcs-nav-locked');
      document.body.classList.remove('pmcs-nav-locked');
      lastFocusedElementRef.current?.focus();
      return;
    }

    document.documentElement.classList.add('pmcs-nav-locked');
    document.body.classList.add('pmcs-nav-locked');
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeModal();
        return;
      }

      if (event.key !== 'Tab' || !modalPanelRef.current) {
        return;
      }

      const focusableElements = modalPanelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (!firstFocusableElement || !lastFocusableElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.documentElement.classList.remove('pmcs-nav-locked');
      document.body.classList.remove('pmcs-nav-locked');
    };
  }, [activeCard]);

  return (
    <section id="alignment" className="overflow-hidden bg-gradient-to-b from-white via-pmcs-light/45 to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow={dictionary.alignment.eyebrow} title={dictionary.alignment.title} body={dictionary.alignment.body} />

        <div className="relative mt-10 rounded-[2rem] border border-pmcs-line bg-white/88 p-3 shadow-[0_30px_95px_rgba(43,43,43,0.11)] sm:mt-12 sm:rounded-[2.25rem] sm:p-4 md:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold/70 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 top-20 h-52 w-52 rounded-full bg-pmcs-maroon/8 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-pmcs-green/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid auto-rows-fr gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-5">
            {dictionary.alignment.cards.map((card, index) => (
              <div
                key={card.number}
                className={`min-w-0 ${
                  index === 4 ? 'md:col-span-2 md:mx-auto md:w-full md:max-w-[calc((100%_-_1.5rem)/2)] xl:col-span-1 xl:max-w-none' : ''
                }`}
              >
                <AlignmentImageCard card={card} onOpen={() => openModal(index)} />
              </div>
            ))}
          </div>

          <div className="relative mt-6 rounded-[1.5rem] border border-pmcs-gold/25 bg-pmcs-gold/10 px-5 py-4">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label={dictionary.alignment.controlsLabel}>
              {dictionary.alignment.controls.map((control) => (
                <li key={control} className="flex items-start gap-2 text-sm font-bold leading-6 text-pmcs-charcoal">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pmcs-maroon rtl:ml-0" aria-hidden="true" />
                  <span>{control}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {activeCard ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pmcs-charcoal/58 px-4 py-5 backdrop-blur-sm sm:px-6" onMouseDown={closeModal}>
          <div
            ref={modalPanelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="alignment-modal-title"
            aria-describedby="alignment-modal-description"
            className="relative max-h-[calc(100dvh-2.5rem)] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] border border-white/70 bg-[#fffaf1] shadow-[0_36px_120px_rgba(31,31,31,0.38)] outline-none sm:rounded-[2.25rem]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-16 top-16 h-52 w-52 rounded-full bg-pmcs-gold/18 blur-3xl rtl:left-[-4rem] rtl:right-auto" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-20 bottom-16 h-56 w-56 rounded-full bg-pmcs-green/14 blur-3xl rtl:left-auto rtl:right-[-5rem]" aria-hidden="true" />

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="pmcs-motion absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-pmcs-line bg-white/90 text-xl font-black leading-none text-pmcs-maroon shadow-sm transition duration-200 hover:border-pmcs-gold hover:bg-white focus-visible:pmcs-focus-ring motion-reduce:transition-none rtl:left-4 rtl:right-auto"
              aria-label={dictionary.alignment.modalCloseLabel}
            >
              ×
            </button>

            <div className="relative grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="relative min-h-[17rem] overflow-hidden bg-pmcs-charcoal sm:min-h-[24rem] lg:min-h-full">
                <Image src={activeCard.modalImage} alt={activeCard.imageAlt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-pmcs-charcoal/55 via-transparent to-pmcs-maroon/18" aria-hidden="true" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/14 p-4 text-white shadow-sm backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 rtl:text-right">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-gold">{activeCard.eyebrow}</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-white/86">{activeCard.subtitle}</p>
                </div>
              </div>

              <div className="relative p-5 sm:p-7 md:p-8 lg:p-10">
                <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-2xl border border-pmcs-gold/35 bg-pmcs-gold/12 px-3 text-sm font-black text-pmcs-maroon">
                  {activeCard.number}
                </span>
                <h3 id="alignment-modal-title" className="mt-5 text-2xl font-black tracking-[-0.03em] text-pmcs-charcoal sm:text-3xl">
                  {activeCard.title}
                </h3>
                <p id="alignment-modal-description" className="mt-4 text-base font-semibold leading-8 text-pmcs-muted">
                  {activeCard.expandedBody}
                </p>

                <div className="mt-6 rounded-[1.35rem] border border-pmcs-line bg-white/72 p-4 shadow-sm sm:p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-pmcs-maroon">{dictionary.alignment.modalKeyPointsLabel}</p>
                  <ul className="mt-4 grid gap-3">
                    {activeCard.keyPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-semibold leading-7 text-pmcs-charcoal">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-pmcs-green shadow-[0_0_0_4px_rgba(46,163,122,0.10)]" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-[1.25rem] border border-pmcs-gold/30 bg-pmcs-gold/12 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-pmcs-maroon">{dictionary.alignment.modalClaimLabel}</p>
                  <p className="mt-2 text-sm font-bold leading-7 text-pmcs-charcoal">{activeCard.claimNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function AlignmentImageCard({ card, onOpen }: { card: AlignmentCard; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="pmcs-motion group relative flex h-[31rem] min-w-0 flex-col overflow-hidden rounded-[1.65rem] border border-pmcs-line bg-[#fffaf1] text-left shadow-[0_18px_55px_rgba(43,43,43,0.09)] transition duration-300 ease-out hover:-translate-y-1 hover:border-pmcs-gold/65 hover:shadow-[0_28px_80px_rgba(122,31,43,0.15)] focus-visible:pmcs-focus-ring sm:h-[32rem] md:h-[34rem] xl:h-[35rem] motion-reduce:transition-none rtl:text-right"
      aria-label={`${card.cta}: ${card.title}`}
    >
      <span className="pointer-events-none absolute inset-0 rounded-[1.65rem] ring-1 ring-inset ring-pmcs-gold/10 transition duration-300 group-hover:ring-pmcs-gold/35" aria-hidden="true" />
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold/80 to-transparent opacity-70" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-10 top-8 h-24 w-24 animate-pulse rounded-full bg-pmcs-gold/16 blur-2xl rtl:left-[-2.5rem] rtl:right-auto" aria-hidden="true" />
      <span className="pointer-events-none absolute -left-12 bottom-10 h-28 w-28 rounded-full bg-pmcs-green/10 blur-2xl rtl:left-auto rtl:right-[-3rem]" aria-hidden="true" />

      <span className="relative block w-full shrink-0 overflow-hidden rounded-b-[1.2rem] bg-pmcs-charcoal">
        <span className="relative block aspect-[4/3] w-full">
          <Image src={card.cardImage} alt={card.imageAlt} fill sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-t from-pmcs-charcoal/62 via-pmcs-charcoal/6 to-transparent" aria-hidden="true" />
        <span className="absolute left-4 top-4 inline-flex h-11 min-w-11 items-center justify-center rounded-2xl border border-white/35 bg-white/84 px-3 text-sm font-black text-pmcs-maroon shadow-sm backdrop-blur-sm rtl:left-auto rtl:right-4">
          {card.number}
        </span>
      </span>

      <span className="relative flex min-h-0 flex-1 flex-col p-5 sm:p-6">
        <span className="line-clamp-1 text-[0.68rem] font-black uppercase leading-5 tracking-[0.18em] text-pmcs-maroon">{card.eyebrow}</span>
        <span className="mt-3 line-clamp-2 min-h-[3.5rem] text-xl font-black leading-tight tracking-[-0.03em] text-pmcs-charcoal">{card.title}</span>
        <span className="mt-3 line-clamp-4 text-sm font-semibold leading-7 text-pmcs-muted">{card.body}</span>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-black text-pmcs-maroon">
          <span>{card.cta}</span>
          <span className="transition duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 motion-reduce:transition-none" aria-hidden="true">
            →
          </span>
        </span>
      </span>
    </button>
  );
}
