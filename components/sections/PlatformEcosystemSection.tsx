import type { LocaleContent } from '@/content/locales/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

const moduleAccentClasses = [
  'border-pmcs-maroon/25 bg-pmcs-maroon/[0.035]',
  'border-pmcs-green/25 bg-pmcs-green/[0.045]',
  'border-pmcs-gold/35 bg-pmcs-gold/[0.08]',
  'border-pmcs-charcoal/15 bg-white/80',
  'border-pmcs-green/20 bg-white/80',
];

export function PlatformEcosystemSection({ dictionary }: { dictionary: LocaleContent }) {
  const { ecosystem } = dictionary;

  return (
    <section id="ecosystem" className="relative overflow-hidden bg-pmcs-light py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold/55 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-pmcs-gold/10 blur-3xl rtl:left-[-6rem] rtl:right-auto" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-pmcs-green/10 blur-3xl rtl:left-auto rtl:right-[-6rem]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={ecosystem.eyebrow} title={ecosystem.title} body={ecosystem.body} align="left" />

            <div className="mt-8 rounded-[1.75rem] border border-pmcs-maroon/15 bg-white/75 p-5 shadow-sm backdrop-blur sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-pmcs-maroon">{ecosystem.notesLabel}</p>
              <ul className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-pmcs-muted sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {ecosystem.notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pmcs-gold" aria-hidden="true" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="relative overflow-hidden rounded-[2rem] border border-pmcs-line bg-[radial-gradient(circle_at_12%_10%,rgba(214,173,96,0.24),transparent_13rem),radial-gradient(circle_at_88%_18%,rgba(46,163,122,0.14),transparent_14rem),linear-gradient(145deg,#ffffff_0%,#fbf8f3_48%,#f7fbf8_100%)] p-4 shadow-pmcs sm:p-6"
              aria-label={ecosystem.architectureLabel}
            >
              <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-pmcs-gold/60 to-transparent md:block" aria-hidden="true" />
              <div className="pointer-events-none absolute bottom-8 top-8 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-pmcs-gold/60 to-transparent md:block" aria-hidden="true" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pmcs-green/15 md:block" aria-hidden="true" />

              <div className="relative grid gap-4 md:grid-cols-2">
                {ecosystem.modules.slice(0, 2).map((module, index) => (
                  <EcosystemVisualModule key={module.title} module={module} className={moduleAccentClasses[index]} />
                ))}

                <div className="md:col-span-2 md:px-10">
                  <div className="relative mx-auto max-w-md rounded-[1.65rem] border border-pmcs-maroon/25 bg-pmcs-charcoal p-6 text-white shadow-[0_24px_70px_rgba(43,43,43,0.22)]">
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold to-transparent" aria-hidden="true" />
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-pmcs-gold">{ecosystem.central.eyebrow}</p>
                    <h3 className="mt-3 text-2xl font-black tracking-[-0.035em] sm:text-3xl">{ecosystem.central.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/76">{ecosystem.central.body}</p>
                  </div>
                </div>

                {ecosystem.modules.slice(2).map((module, index) => (
                  <EcosystemVisualModule key={module.title} module={module} className={moduleAccentClasses[index + 2]} />
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {ecosystem.modules.map((module, index) => (
                <article key={module.title} className="rounded-[1.35rem] border border-pmcs-line bg-white p-5 shadow-sm">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-pmcs-green">{module.label}</p>
                  <h3 className="mt-3 text-base font-black leading-snug text-pmcs-charcoal">{module.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-pmcs-muted">{module.body}</p>
                  <div className={`mt-5 h-1 rounded-full ${index % 2 === 0 ? 'bg-pmcs-gold/70' : 'bg-pmcs-green/55'}`} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type EcosystemModule = LocaleContent['ecosystem']['modules'][number];

function EcosystemVisualModule({ module, className }: { module: EcosystemModule; className: string }) {
  return (
    <article className={`relative rounded-[1.35rem] border p-4 shadow-sm backdrop-blur ${className}`}>
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/80 bg-white text-xs font-black text-pmcs-maroon shadow-sm">
          {module.label}
        </span>
        <div>
          <h3 className="text-sm font-black leading-snug text-pmcs-charcoal">{module.title}</h3>
          <p className="mt-2 text-xs leading-6 text-pmcs-muted">{module.body}</p>
        </div>
      </div>
    </article>
  );
}
