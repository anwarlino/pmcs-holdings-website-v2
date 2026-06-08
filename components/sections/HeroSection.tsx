import type { LocaleContent } from "@/content/locales/types";
import type { Locale } from "@/lib/i18n";
import { getSectionHref } from "@/lib/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { HeroParallaxBackground } from "@/components/sections/HeroParallaxBackground";

const moduleAccents = [
  "border-pmcs-maroon/20 bg-pmcs-maroon/[0.04] text-pmcs-maroon",
  "border-pmcs-green/25 bg-pmcs-green/[0.06] text-pmcs-green",
  "border-pmcs-gold/35 bg-pmcs-gold/[0.10] text-pmcs-maroon",
  "border-pmcs-charcoal/10 bg-white/80 text-pmcs-charcoal",
];

type HeroSectionProps = { dictionary: LocaleContent; locale: Locale };

export function HeroSection({ dictionary, locale }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff_0%,#fbf8f2_46%,#f4faf7_100%)] py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <HeroParallaxBackground />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.70)_42%,rgba(255,255,255,0.52)_100%),linear-gradient(135deg,rgba(255,255,255,0.54)_0%,rgba(251,248,242,0.42)_48%,rgba(244,250,247,0.50)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_16%_18%,rgba(138,21,56,0.10),transparent_24rem),radial-gradient(circle_at_86%_12%,rgba(46,163,122,0.16),transparent_28rem),linear-gradient(90deg,rgba(43,43,43,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(43,43,43,0.035)_1px,transparent_1px)] bg-[size:auto,auto,4.5rem_4.5rem,4.5rem_4.5rem]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(21rem,0.98fr)] lg:gap-14 xl:gap-16">
        <div className="max-w-3xl lg:max-w-none">
          <p className="mb-5 inline-flex rounded-full border border-pmcs-green/20 bg-white/70 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-pmcs-green shadow-sm backdrop-blur">
            {dictionary.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance text-[2.55rem] font-black leading-[0.96] tracking-[-0.055em] text-pmcs-charcoal sm:text-5xl md:text-[3.65rem] lg:text-[4.25rem] xl:text-[4.75rem]">
            {dictionary.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-pmcs-muted sm:text-lg sm:leading-9">
            {dictionary.hero.lead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 [&>a]:w-full sm:[&>a]:w-auto">
            <ButtonLink href={getSectionHref(locale, "ecosystem")}>
              {dictionary.hero.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={getSectionHref(locale, "contact")}
              variant="secondary"
            >
              {dictionary.hero.secondaryCta}
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-2xl border-s-2 border-pmcs-gold/70 bg-white/55 px-4 py-3 text-sm leading-7 text-pmcs-muted shadow-sm backdrop-blur-sm">
            {dictionary.hero.note}
          </p>
        </div>

        <ImageFrame
          alt={dictionary.hero.imageAlt}
          caption={dictionary.hero.imageCaption}
          statusLabel={dictionary.hero.visual.statusLabel}
          variant="platform"
          className="mx-auto w-full max-w-xl lg:max-w-none"
          contentClassName="p-5 sm:p-6"
        >
          <div
            className="absolute -left-12 top-10 h-32 w-32 rounded-full border border-pmcs-maroon/10"
            aria-hidden="true"
          />
          <div
            className="absolute -right-14 bottom-12 h-44 w-44 rounded-full border border-pmcs-green/15"
            aria-hidden="true"
          />
          <div className="relative flex min-h-[22rem] flex-col justify-between gap-5 sm:min-h-[26rem] lg:min-h-[30rem]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-maroon">
                  {dictionary.hero.visual.subheading}
                </p>
                <h2 className="mt-3 max-w-sm text-2xl font-black leading-tight tracking-[-0.035em] text-pmcs-charcoal sm:text-3xl">
                  {dictionary.hero.visual.heading}
                </h2>
              </div>
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-pmcs-gold/35 bg-pmcs-gold/15 text-sm font-black text-pmcs-maroon shadow-sm">
                {dictionary.nav.logoMark}
              </div>
            </div>

            <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4">
              <div
                className="absolute left-1/2 top-1/2 h-[calc(100%-2rem)] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-pmcs-gold/45 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 top-1/2 h-px w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-pmcs-gold/45 to-transparent"
                aria-hidden="true"
              />
              {dictionary.hero.visual.modules.map((module, index) => (
                <div
                  key={module.label}
                  className={`relative min-h-28 rounded-3xl border p-4 shadow-[0_18px_50px_rgba(43,43,43,0.08)] backdrop-blur sm:min-h-32 ${moduleAccents[index % moduleAccents.length]}`}
                >
                  <div
                    className="mb-5 h-2 w-10 rounded-full bg-current opacity-70"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-black leading-snug tracking-[-0.01em]">
                    {module.label}
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-pmcs-muted">
                    {module.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-pmcs-line bg-white/75 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-pmcs-green"
                  aria-hidden="true"
                />
                <p className="text-xs font-bold uppercase leading-5 tracking-[0.16em] text-pmcs-muted">
                  {dictionary.hero.visual.disclosure}
                </p>
              </div>
            </div>
          </div>
        </ImageFrame>
      </div>
    </section>
  );
}
