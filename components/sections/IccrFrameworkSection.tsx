import type { LocaleContent } from '@/content/locales/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

const diagramPillars = [
  {
    title: 'Carbon Input',
    position: 'md:col-start-2 md:row-start-1',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M5 7h14M5 12h14M5 17h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Carbon Transformation',
    position: 'md:col-start-3 md:row-start-2',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M17.8 7.6A7.3 7.3 0 0 0 6.7 6.4L5.3 8.1M5.1 4.8v3.7h3.7M6.2 16.4a7.3 7.3 0 0 0 11.1 1.2l1.4-1.7M18.9 20.2v-3.7h-3.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M12 8.6 14.9 12 12 15.4 9.1 12 12 8.6Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Carbon Output',
    position: 'md:col-start-2 md:row-start-3',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M8.3 17.5H17a4 4 0 0 0 .6-8 5.8 5.8 0 0 0-11.2 1.4A3.8 3.8 0 0 0 8.3 17.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="m10 13.4 1.8 1.8 4-4.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Carbon Finance',
    position: 'md:col-start-1 md:row-start-2',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M7.5 18.5h9M9 18.5V14m3 4.5V10m3 8.5V12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M8.4 8.1a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2ZM16.6 9.7a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="m10.7 6.2 3.8 1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export function IccrFrameworkSection({ dictionary }: { dictionary: LocaleContent }) {
  const pillars = dictionary.iccr.pillars;

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

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
          <div
            className="relative rounded-[2.5rem] border border-pmcs-maroon/10 bg-[radial-gradient(circle_at_center,rgba(122,31,43,0.10),transparent_34%),linear-gradient(135deg,#ffffff,rgba(247,244,238,0.92))] p-5 shadow-[0_24px_70px_rgba(31,31,31,0.08)] md:p-8"
            aria-label={dictionary.iccr.frameworkAria}
          >
            <div className="absolute inset-6 rounded-full border border-pmcs-gold/25 opacity-70" aria-hidden="true" />
            <div className="absolute inset-12 rounded-full border border-pmcs-green/15 opacity-70" aria-hidden="true" />
            <div className="relative grid gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto] md:items-center lg:gap-5">
              <div className="min-w-0 md:col-start-2 md:row-start-2">
                <div className="rounded-[2rem] border border-pmcs-maroon/15 bg-white/95 p-6 text-center shadow-sm lg:px-7">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-pmcs-green">{dictionary.iccr.frameworkLabel}</p>
                  <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-pmcs-maroon md:text-2xl">{dictionary.iccr.frameworkTitle}</h3>
                </div>
              </div>

              {diagramPillars.map((pillar, index) => (
                <article key={pillar.title} className={`${pillar.position} min-w-0 rounded-[1.5rem] border border-pmcs-line bg-white/90 p-5 text-center shadow-sm backdrop-blur-sm lg:px-6`}>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-pmcs-green/15 bg-pmcs-green/10 text-pmcs-green shadow-sm">
                    {pillar.icon}
                  </div>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-pmcs-gold">{String(index + 1).padStart(2, '0')}</p>
                  <h4 className="mt-2 min-w-0 whitespace-normal break-words text-[0.78rem] font-black leading-[1.15] tracking-[-0.01em] text-pmcs-charcoal md:text-[0.8rem] lg:text-[0.82rem]">{pillar.title}</h4>
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
