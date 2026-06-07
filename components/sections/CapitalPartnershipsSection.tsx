import type { LocaleContent } from '@/content/locales/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

const tileAccents = [
  'border-pmcs-maroon/20 bg-pmcs-maroon/[0.035] text-pmcs-maroon',
  'border-pmcs-green/25 bg-pmcs-green/[0.04] text-pmcs-green',
  'border-pmcs-gold/35 bg-pmcs-gold/[0.08] text-pmcs-maroon',
  'border-pmcs-charcoal/15 bg-white/85 text-pmcs-charcoal',
  'border-pmcs-green/20 bg-white/90 text-pmcs-green',
];

const tileIconClasses = [
  'from-pmcs-maroon/90 to-pmcs-gold/80',
  'from-pmcs-green/90 to-pmcs-gold/75',
  'from-pmcs-gold/90 to-pmcs-maroon/75',
  'from-pmcs-charcoal/90 to-pmcs-maroon/75',
  'from-pmcs-green/90 to-pmcs-charcoal/75',
];

export function CapitalPartnershipsSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="capital" className="relative overflow-hidden bg-pmcs-light py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold/55 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-pmcs-maroon/10 blur-3xl rtl:left-[-7rem] rtl:right-auto" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-pmcs-green/10 blur-3xl rtl:left-auto rtl:right-[-7rem]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow={dictionary.capital.eyebrow} title={dictionary.capital.title} body={dictionary.capital.body} />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-pmcs-line bg-white/88 shadow-pmcs backdrop-blur-sm sm:rounded-[2.5rem]">
          <div className="border-b border-pmcs-line bg-gradient-to-r from-pmcs-charcoal via-pmcs-maroon to-pmcs-maroonDark px-5 py-5 text-white sm:px-7 lg:px-8 rtl:bg-gradient-to-l">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-gold">{dictionary.capital.dashboard.kicker}</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl">{dictionary.capital.dashboard.title}</h3>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/90 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-pmcs-green shadow-[0_0_0_5px_rgba(46,163,122,0.18)]" aria-hidden="true" />
                {dictionary.capital.dashboard.subtitle}
              </div>
            </div>
          </div>

          <div className="relative bg-[radial-gradient(circle_at_top_right,rgba(214,173,96,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,248,250,0.96))] p-5 sm:p-7 lg:p-8 rtl:bg-[radial-gradient(circle_at_top_left,rgba(214,173,96,0.14),transparent_34%),linear-gradient(225deg,rgba(255,255,255,0.96),rgba(247,248,250,0.96))]">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {dictionary.capital.dashboard.tiles.map((tile, index) => (
                <article
                  key={tile.title}
                  className="group min-w-0 rounded-[1.5rem] border border-pmcs-line bg-white/92 p-5 shadow-[0_18px_45px_rgba(43,43,43,0.06)] transition duration-200 ease-out hover:-translate-y-1 hover:border-pmcs-gold/70 hover:shadow-pmcs focus-within:border-pmcs-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tileIconClasses[index % tileIconClasses.length]} text-white shadow-sm`} aria-hidden="true">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" role="img">
                        <path d="M6 12.5 10 16l8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.75 5.5h10.5a2 2 0 0 1 2 2v.5M4.75 5.5A2.25 2.25 0 0 0 3 7.7v8.6a2.25 2.25 0 0 0 2.25 2.2h13.5A2.25 2.25 0 0 0 21 16.3v-5.05" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className={`min-w-0 max-w-full whitespace-normal break-words rounded-full border px-3 py-1 text-start text-[0.68rem] font-black uppercase leading-5 tracking-[0.12em] ${tileAccents[index % tileAccents.length]}`}>
                      {tile.status}
                    </span>
                  </div>
                  <h4 className="mt-5 text-lg font-black tracking-[-0.02em] text-pmcs-charcoal">{tile.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-pmcs-muted">{tile.description}</p>
                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-pmcs-line" aria-hidden="true">
                    <div className={`h-full rounded-full bg-gradient-to-r ${tileIconClasses[index % tileIconClasses.length]} opacity-80`} style={{ width: `${58 + index * 7}%` }} />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 rounded-[1.75rem] border border-pmcs-line bg-white/82 p-5 shadow-sm sm:p-6 lg:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-green">{dictionary.capital.pathway.eyebrow}</p>
                  <h4 className="mt-2 text-xl font-black tracking-[-0.03em] text-pmcs-charcoal sm:text-2xl">{dictionary.capital.pathway.title}</h4>
                </div>
                <p className="max-w-xl text-sm leading-6 text-pmcs-muted">{dictionary.capital.pathway.note}</p>
              </div>

              <ol className="mt-6 grid gap-4 lg:grid-cols-5" aria-label={dictionary.capital.pathway.ariaLabel}>
                {dictionary.capital.pathway.steps.map((step, index) => (
                  <li key={step} className="relative min-w-0">
                    <div className="group flex h-full items-center gap-4 rounded-2xl border border-pmcs-line bg-pmcs-light/70 p-4 transition duration-200 hover:border-pmcs-gold/60 hover:bg-white motion-reduce:transition-none lg:flex-col lg:items-start lg:gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pmcs-gold/45 bg-white text-sm font-black text-pmcs-maroon shadow-sm">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-black leading-6 text-pmcs-charcoal">{step}</span>
                    </div>
                    {index < dictionary.capital.pathway.steps.length - 1 ? (
                      <span className="absolute left-9 top-full h-4 w-px bg-pmcs-gold/40 lg:left-auto lg:right-[-0.5rem] lg:top-1/2 lg:h-px lg:w-4 rtl:lg:left-[-0.5rem] rtl:lg:right-auto" aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7 rounded-[1.5rem] border border-pmcs-gold/35 bg-pmcs-gold/10 px-5 py-4 shadow-sm">
              <p className="text-sm font-semibold leading-7 text-pmcs-charcoal">{dictionary.capital.claimControl}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
