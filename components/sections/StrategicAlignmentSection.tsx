import type { LocaleContent } from '@/content/locales/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function StrategicAlignmentSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="alignment" className="overflow-hidden bg-gradient-to-b from-white via-pmcs-light/45 to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow={dictionary.alignment.eyebrow} title={dictionary.alignment.title} body={dictionary.alignment.body} />

        <div className="relative mt-10 rounded-[2rem] sm:mt-12 sm:rounded-[2.25rem] border border-pmcs-line bg-white/90 p-4 shadow-[0_28px_90px_rgba(43,43,43,0.10)] md:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-pmcs-gold/45 to-transparent lg:block" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-8 top-8 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-pmcs-green/20 to-transparent lg:block" aria-hidden="true" />

          <div className="relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.78fr)_minmax(0,1fr)] lg:items-stretch">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
              {dictionary.alignment.cards.slice(0, 2).map((card) => (
                <article key={card.number} className="group relative overflow-hidden rounded-[1.75rem] border border-pmcs-line bg-white p-5 shadow-sm sm:p-6 transition duration-200 ease-out hover:border-pmcs-gold/55 hover:shadow-pmcs motion-reduce:transition-none">
                  <div className="absolute -right-12 -top-14 h-32 w-32 rounded-full bg-pmcs-gold/10 blur-2xl rtl:left-[-3rem] rtl:right-auto" aria-hidden="true" />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-pmcs-gold/30 bg-pmcs-gold/10 text-sm font-black text-pmcs-maroon">{card.number}</span>
                    <div>
                      <h3 className="text-xl font-black tracking-[-0.02em] text-pmcs-charcoal">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-pmcs-muted">{card.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative flex min-h-full items-center">
              <div className="relative w-full overflow-hidden rounded-[2rem] border border-pmcs-maroon/25 bg-gradient-to-br from-pmcs-maroonDark via-pmcs-maroon to-pmcs-charcoal p-6 text-white shadow-[0_24px_70px_rgba(122,31,43,0.28)] md:p-8">
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-pmcs-gold/20 blur-2xl rtl:left-[-3.5rem] rtl:right-auto" aria-hidden="true" />
                <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-pmcs-green/20 blur-3xl rtl:left-auto rtl:right-[-3rem]" aria-hidden="true" />
                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-gold">{dictionary.alignment.coordination.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] md:text-3xl">{dictionary.alignment.coordination.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/78 md:text-base md:leading-8">{dictionary.alignment.coordination.body}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
              {dictionary.alignment.cards.slice(2).map((card) => (
                <article key={card.number} className="group relative overflow-hidden rounded-[1.75rem] border border-pmcs-line bg-white p-5 shadow-sm sm:p-6 transition duration-200 ease-out hover:border-pmcs-green/45 hover:shadow-pmcs motion-reduce:transition-none">
                  <div className="absolute -right-12 -top-14 h-32 w-32 rounded-full bg-pmcs-green/10 blur-2xl rtl:left-[-3rem] rtl:right-auto" aria-hidden="true" />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-pmcs-green/25 bg-pmcs-green/10 text-sm font-black text-pmcs-maroon">{card.number}</span>
                    <div>
                      <h3 className="text-xl font-black tracking-[-0.02em] text-pmcs-charcoal">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-pmcs-muted">{card.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mt-6 rounded-[1.5rem] border border-pmcs-gold/25 bg-pmcs-gold/10 px-5 py-4">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label={dictionary.alignment.controlsLabel}>
              {dictionary.alignment.controls.map((control) => (
                <li key={control} className="flex items-start gap-2 text-sm font-bold leading-6 text-pmcs-charcoal">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pmcs-maroon" aria-hidden="true" />
                  <span>{control}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
