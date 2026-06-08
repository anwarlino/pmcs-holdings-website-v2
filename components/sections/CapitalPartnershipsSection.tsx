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

const readinessSegmentClasses = [
  'bg-pmcs-maroon/70',
  'bg-pmcs-gold/80',
  'bg-pmcs-green/70',
  'bg-pmcs-charcoal/30',
];

const tileGridClasses = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2 lg:col-start-2',
  'lg:col-span-2 lg:col-start-4',
];

export function CapitalPartnershipsSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="capital" className="relative overflow-hidden bg-pmcs-light py-16 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold/55 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-pmcs-maroon/10 blur-3xl rtl:left-[-7rem] rtl:right-auto" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-pmcs-green/10 blur-3xl rtl:left-auto rtl:right-[-7rem]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow={dictionary.capital.eyebrow} title={dictionary.capital.title} body={dictionary.capital.body} />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-pmcs-line bg-white shadow-pmcs sm:rounded-[2.5rem]">
          <div className="relative overflow-hidden border-b border-white/10 bg-pmcs-charcoal px-5 py-5 text-white sm:px-7 lg:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,173,96,0.24),transparent_34%),linear-gradient(135deg,rgba(138,21,56,0.74),rgba(43,43,43,0.96)_58%,rgba(100,16,39,0.92))] rtl:bg-[radial-gradient(circle_at_top_left,rgba(214,173,96,0.24),transparent_34%),linear-gradient(225deg,rgba(138,21,56,0.74),rgba(43,43,43,0.96)_58%,rgba(100,16,39,0.92))]" aria-hidden="true" />
            <div className="relative flex flex-col gap-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="min-w-0">
                  <div className="mb-4 flex gap-2" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-pmcs-gold" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                    <span className="h-2.5 w-2.5 rounded-full bg-pmcs-green" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-gold">{dictionary.capital.dashboard.kicker}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] sm:text-3xl">{dictionary.capital.dashboard.title}</h3>
                </div>
                <p className="max-w-md rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold leading-6 text-white/76 shadow-sm backdrop-blur-sm lg:text-end rtl:lg:text-start">{dictionary.capital.dashboard.subtitle}</p>
              </div>

              <div className="flex flex-wrap gap-2" aria-label={dictionary.capital.dashboard.statusClusterLabel}>
                {dictionary.capital.dashboard.statusCluster.map((status, index) => (
                  <div key={status} className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.72rem] font-bold uppercase leading-5 tracking-[0.04em] text-white/88 shadow-sm backdrop-blur-sm sm:px-4">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${readinessSegmentClasses[index % readinessSegmentClasses.length]}`} aria-hidden="true" />
                    <span className="min-w-0 break-words">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,248,250,0.94))] p-5 sm:p-7 lg:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(100,112,122,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,112,122,0.08)_1px,transparent_1px)] bg-[size:36px_36px] opacity-45" aria-hidden="true" />

            <div className="relative">
              <div className="grid min-w-0 gap-4 md:grid-cols-2 lg:grid-cols-6">
                {dictionary.capital.dashboard.tiles.map((tile, index) => (
                  <article
                    key={tile.title}
                    className={`group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-pmcs-line bg-white/95 p-5 shadow-[0_18px_45px_rgba(43,43,43,0.06)] transition duration-200 ease-out hover:-translate-y-1 hover:border-pmcs-gold/70 hover:shadow-pmcs focus-within:border-pmcs-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${tileGridClasses[index % tileGridClasses.length]}`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pmcs-maroon via-pmcs-gold to-pmcs-green opacity-75 rtl:bg-gradient-to-l" aria-hidden="true" />
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tileIconClasses[index % tileIconClasses.length]} text-white shadow-sm`} aria-hidden="true">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                          <path d="M5 18V7.5A2.5 2.5 0 0 1 7.5 5H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                          <path d="M7 15.5h4.2M7 11.5h7M15.5 17.5l3-3 2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="17.5" cy="9" r="2.25" stroke="currentColor" strokeWidth="1.6" />
                        </svg>
                      </div>
                      <span className={`inline-flex max-w-full items-center rounded-full border px-3 py-1 text-start text-[0.7rem] font-bold uppercase leading-5 tracking-[0.04em] ${tileAccents[index % tileAccents.length]}`}>
                        {tile.status}
                      </span>
                    </div>
                    <h4 className="mt-5 text-lg font-black tracking-[-0.02em] text-pmcs-charcoal">{tile.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-pmcs-muted">{tile.description}</p>
                    <div className="mt-5 grid grid-cols-4 gap-1.5" aria-hidden="true">
                      {readinessSegmentClasses.map((segmentClass) => (
                        <span key={segmentClass} className={`h-1.5 rounded-full ${segmentClass}`} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative mt-7 rounded-[1.75rem] border border-pmcs-line bg-white/86 p-5 shadow-sm sm:p-6 lg:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-green">{dictionary.capital.pathway.eyebrow}</p>
                  <h4 className="mt-2 text-xl font-black tracking-[-0.03em] text-pmcs-charcoal sm:text-2xl">{dictionary.capital.pathway.title}</h4>
                </div>
                <p className="max-w-xl text-sm leading-6 text-pmcs-muted">{dictionary.capital.pathway.note}</p>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_1.5rem_minmax(0,1fr)_1.5rem_minmax(0,1fr)_1.5rem_minmax(0,1fr)_1.5rem_minmax(0,1fr)] lg:items-center lg:gap-0" role="list" aria-label={dictionary.capital.pathway.ariaLabel}>
                {dictionary.capital.pathway.steps.map((step, index) => (
                  <div key={step} className="contents">
                    <div className="min-w-0" role="listitem">
                      <div className="flex h-full items-center gap-4 rounded-2xl border border-pmcs-line bg-pmcs-light/70 p-4 transition duration-200 hover:border-pmcs-gold/60 hover:bg-white motion-reduce:transition-none lg:flex-col lg:items-start lg:gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pmcs-gold/45 bg-white text-sm font-black text-pmcs-maroon shadow-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-black leading-6 text-pmcs-charcoal">{step}</span>
                      </div>
                    </div>
                    {index < dictionary.capital.pathway.steps.length - 1 ? (
                      <span className="hidden h-px w-4 justify-self-center rounded-full bg-pmcs-gold/40 lg:block" aria-hidden="true" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-7 rounded-[1.5rem] border border-pmcs-gold/35 bg-pmcs-gold/10 px-5 py-4 shadow-sm">
              <p className="text-sm font-semibold leading-7 text-pmcs-charcoal">{dictionary.capital.claimControl}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
