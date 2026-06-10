'use client';

import { useState } from 'react';

import type { LocaleContent } from '@/content/locales/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PlatformEcosystemSection({ dictionary }: { dictionary: LocaleContent }) {
  const { ecosystem } = dictionary;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = ecosystem.items[activeIndex] ?? ecosystem.items[0];

  return (
    <section id="ecosystem" className="relative overflow-hidden bg-pmcs-light py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold/55 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-pmcs-gold/10 blur-3xl rtl:left-[-6rem] rtl:right-auto" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-pmcs-green/10 blur-3xl rtl:left-auto rtl:right-[-6rem]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[2rem] border border-pmcs-gold/25 bg-[radial-gradient(circle_at_10%_15%,rgba(214,173,96,0.22),transparent_15rem),radial-gradient(circle_at_88%_8%,rgba(122,31,43,0.16),transparent_17rem),radial-gradient(circle_at_80%_88%,rgba(46,163,122,0.14),transparent_16rem),linear-gradient(135deg,#fffaf1_0%,#fbf8f3_45%,#f5fbf6_100%)] p-6 shadow-pmcs sm:p-8 md:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold/80 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full border border-pmcs-gold/30 rtl:-left-16 rtl:right-auto" aria-hidden="true" />
          <div className="relative max-w-4xl">
            <SectionHeading eyebrow={ecosystem.eyebrow} title={ecosystem.title} body={ecosystem.body} align="left" />
          </div>
        </div>

        <div className="mt-8 grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(20rem,0.94fr)] lg:items-stretch lg:gap-8">
          <div className="relative min-w-0 overflow-hidden rounded-[2rem] border border-pmcs-line bg-pmcs-charcoal shadow-pmcs">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(214,173,96,0.24),transparent_17rem),linear-gradient(180deg,rgba(43,43,43,0.02)_0%,rgba(43,43,43,0.28)_100%)]" aria-hidden="true" />
            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.imageAlt}
              className="pmcs-motion aspect-[4/3] h-full min-h-[20rem] w-full object-cover transition duration-500 ease-out motion-reduce:transition-none sm:min-h-[26rem] lg:min-h-[34rem]"
            />
            <div className="absolute inset-x-4 bottom-4 z-20 rounded-[1.35rem] border border-white/15 bg-pmcs-charcoal/82 p-4 text-white shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur md:inset-x-6 md:bottom-6 md:p-5">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-pmcs-gold">{activeItem.eyebrow}</p>
              <h3 className="mt-2 text-xl font-black tracking-[-0.03em] sm:text-2xl">{activeItem.title}</h3>
            </div>
          </div>

          <div className="min-w-0 rounded-[2rem] border border-pmcs-maroon/15 bg-white/82 p-5 shadow-sm backdrop-blur sm:p-6 lg:p-7">
            <div className="rounded-[1.5rem] border border-pmcs-gold/25 bg-[linear-gradient(145deg,rgba(122,31,43,0.06),rgba(214,173,96,0.08),rgba(46,163,122,0.05))] p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-pmcs-green">{activeItem.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] text-pmcs-charcoal sm:text-3xl">{activeItem.title}</h3>
              <p className="mt-4 text-sm leading-7 text-pmcs-muted sm:text-base">{activeItem.body}</p>
            </div>

            <div className="mt-5" aria-label={ecosystem.selectorAria}>
              <div className="grid gap-3">
                {ecosystem.items.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`pmcs-motion group flex w-full min-w-0 items-center gap-3 rounded-[1.15rem] border p-3 text-left transition duration-300 ease-out focus-visible:pmcs-focus-ring motion-reduce:transition-none rtl:text-right sm:p-4 ${
                        isActive
                          ? 'pmcs-ecosystem-pulse border-pmcs-gold/75 bg-pmcs-maroon text-white shadow-[0_18px_44px_rgba(122,31,43,0.20)]'
                          : 'border-pmcs-line bg-white text-pmcs-charcoal hover:border-pmcs-gold/60 hover:bg-pmcs-light'
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border text-xs font-black ${
                          isActive ? 'border-pmcs-gold/55 bg-pmcs-gold/18 text-pmcs-gold' : 'border-pmcs-gold/35 bg-pmcs-gold/10 text-pmcs-maroon'
                        }`}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                      <span className="min-w-0">
                        <span className={`block text-sm font-black leading-snug ${isActive ? 'text-white' : 'text-pmcs-charcoal'}`}>{item.title}</span>
                        <span className={`mt-1 block text-xs font-semibold leading-5 ${isActive ? 'text-white/72' : 'text-pmcs-muted'}`}>{item.short}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
