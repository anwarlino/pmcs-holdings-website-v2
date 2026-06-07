import type { LocaleContent } from '@/content/locales/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function IccrFrameworkSection({ dictionary }: { dictionary: LocaleContent }) {
  const pillars = dictionary.iccr.pillars;
  const diagramPositions = [
    'md:col-start-2 md:row-start-1',
    'md:col-start-3 md:row-start-2',
    'md:col-start-2 md:row-start-3',
    'md:col-start-1 md:row-start-2',
  ];

  return (
    <section id="iccr" className="overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <SectionHeading eyebrow={dictionary.iccr.eyebrow} title={dictionary.iccr.title} body={dictionary.iccr.body} align="left" />
          <div className="rounded-[2rem] border border-pmcs-line bg-pmcs-light/70 p-5 shadow-sm md:p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-maroon">{dictionary.iccr.noteLabel}</p>
            <p className="mt-3 text-sm leading-7 text-pmcs-muted md:text-base">{dictionary.iccr.note}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
          <div
            className="relative rounded-[2.5rem] border border-pmcs-maroon/10 bg-[radial-gradient(circle_at_center,rgba(122,31,43,0.10),transparent_34%),linear-gradient(135deg,#ffffff,rgba(247,244,238,0.92))] p-5 shadow-[0_24px_70px_rgba(31,31,31,0.08)] md:p-8"
            aria-label={dictionary.iccr.frameworkAria}
          >
            <div className="absolute inset-6 rounded-full border border-pmcs-gold/25 opacity-70" aria-hidden="true" />
            <div className="absolute inset-12 rounded-full border border-pmcs-green/15 opacity-70" aria-hidden="true" />
            <div className="relative grid gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto] md:items-center">
              <div className="md:col-start-2 md:row-start-2">
                <div className="rounded-[2rem] border border-pmcs-maroon/15 bg-white/95 p-6 text-center shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-pmcs-green">{dictionary.iccr.frameworkLabel}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-pmcs-maroon md:text-3xl">{dictionary.iccr.frameworkTitle}</h3>
                  <p className="mt-4 text-sm leading-7 text-pmcs-muted">{dictionary.iccr.frameworkBody}</p>
                </div>
              </div>

              {pillars.map((pillar, index) => (
                <article key={pillar.title} className={`${diagramPositions[index]} rounded-[1.5rem] border border-pmcs-line bg-white/90 p-5 shadow-sm backdrop-blur-sm`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pmcs-gold/35 bg-pmcs-gold/10 text-xs font-black text-pmcs-maroon">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-sm font-black tracking-[-0.01em] text-pmcs-charcoal md:text-base">{pillar.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map((pillar, index) => (
              <article key={`${pillar.title}-detail`} className="group rounded-[1.75rem] border border-pmcs-line bg-white p-5 shadow-sm transition duration-200 hover:border-pmcs-gold/50 hover:shadow-md motion-reduce:transition-none">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-pmcs-gold">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-2 text-lg font-black tracking-[-0.02em] text-pmcs-charcoal">{pillar.title}</h3>
                  </div>
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-pmcs-green/70 ring-4 ring-pmcs-green/10" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-7 text-pmcs-muted md:text-base">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
