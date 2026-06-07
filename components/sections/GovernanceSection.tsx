import type { LocaleContent } from '@/content/locales/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

const controlIcons = [
  (
    <svg key="claim" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M6.5 5.5h11v13h-11z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M9 9h6M9 12h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      <path d="m9 15.5 1.5 1.5 4-4.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  ),
  (
    <svg key="documentation" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M7 4.8h7.4L18 8.4v10.8H7z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M14.3 4.9v3.7H18M9.7 12h4.6M9.7 15h4.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M5 8.2v12h10.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" opacity=".55" />
    </svg>
  ),
  (
    <svg key="partner" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M8.2 12.2 6.8 11a2.7 2.7 0 0 1 0-3.8 2.7 2.7 0 0 1 3.8 0l.8.8M15.8 11.8l1.4 1.2a2.7 2.7 0 0 1 0 3.8 2.7 2.7 0 0 1-3.8 0l-.8-.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="m9.8 14.2 4.4-4.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      <path d="m9 17.2 1.6 1.6 4.4-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" opacity=".65" />
    </svg>
  ),
  (
    <svg key="approval" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M12 3.8 18 6v5.2c0 3.9-2.4 7.2-6 9-3.6-1.8-6-5.1-6-9V6z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M9 12.1 11 14l4-4.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  ),
  (
    <svg key="representation" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M5.5 9.5h3.2l6.4-3.2v11.4l-6.4-3.2H5.5z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M8.7 14.5 10 19H7.6l-1.2-4.5M18 9.2a4.2 4.2 0 0 1 0 5.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  ),
];

export function GovernanceSection({ dictionary }: { dictionary: LocaleContent }) {
  const governance = dictionary.governance;

  return (
    <section id="governance" className="overflow-hidden bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionHeading eyebrow={governance.eyebrow} title={governance.title} body={governance.body} align="left" />

          <div
            className="relative rounded-[2.5rem] border border-pmcs-maroon/10 bg-[radial-gradient(circle_at_50%_45%,rgba(122,31,43,0.12),transparent_32%),linear-gradient(135deg,#ffffff,rgba(247,244,238,0.9))] p-5 shadow-[0_24px_70px_rgba(31,31,31,0.08)] md:p-7"
            aria-label={governance.frameworkAria}
          >
            <div className="absolute inset-x-8 top-1/2 hidden border-t border-dashed border-pmcs-gold/35 md:block" aria-hidden="true" />
            <div className="absolute inset-y-8 left-1/2 hidden border-l border-dashed border-pmcs-green/25 md:block" aria-hidden="true" />
            <div className="relative grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] border border-pmcs-maroon/15 bg-pmcs-maroon p-6 text-white shadow-lg shadow-pmcs-maroon/15 md:col-span-2 md:mx-auto md:w-[68%] md:text-center">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-pmcs-gold">{governance.central.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] md:text-3xl">{governance.central.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/78">{governance.central.body}</p>
              </div>

              {governance.nodes.map((node, index) => (
                <article key={node.title} className="relative rounded-[1.5rem] border border-pmcs-line bg-white/95 p-5 shadow-sm backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-pmcs-green/15 bg-pmcs-green/10 text-pmcs-green shadow-sm">
                      {controlIcons[index % controlIcons.length]}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-pmcs-gold">{String(index + 1).padStart(2, '0')}</p>
                      <h4 className="mt-1 text-base font-black tracking-[-0.02em] text-pmcs-charcoal">{node.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-pmcs-muted">{node.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-pmcs-line bg-pmcs-light/70 p-5 shadow-sm md:p-6">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-pmcs-maroon">{governance.checklistTitle}</h3>
            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {governance.controls.map((control) => (
                <div key={control} className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-pmcs-green/10 text-pmcs-green" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <path d="m6.5 12.4 3.2 3.1 7.8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </span>
                  <p className="text-sm font-semibold leading-6 text-pmcs-charcoal">{control}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="flex rounded-[2rem] border border-pmcs-gold/30 bg-[linear-gradient(135deg,rgba(179,139,74,0.14),rgba(122,31,43,0.06))] p-6 shadow-sm">
            <div className="my-auto">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-gold">{governance.disclosureLabel}</p>
              <p className="mt-4 text-sm leading-7 text-pmcs-muted md:text-base">{governance.disclosure}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
