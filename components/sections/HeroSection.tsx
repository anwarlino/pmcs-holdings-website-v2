import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getSectionHref } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ImageFrame } from '@/components/ui/ImageFrame';

type HeroSectionProps = { dictionary: LocaleContent; locale: Locale };

export function HeroSection({ dictionary, locale }: HeroSectionProps) {
  return (
    <section id="overview" className="overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(46,163,122,0.14),transparent_30rem)] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-pmcs-green">{dictionary.hero.eyebrow}</p>
          <h1 className="text-4xl font-black tracking-[-0.05em] text-pmcs-charcoal md:text-6xl">{dictionary.hero.title}</h1>
          <p className="mt-6 text-lg leading-9 text-pmcs-muted">{dictionary.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={getSectionHref(locale, 'ecosystem')}>{dictionary.hero.primaryCta}</ButtonLink>
            <ButtonLink href={getSectionHref(locale, 'contact')} variant="secondary">{dictionary.hero.secondaryCta}</ButtonLink>
          </div>
          <p className="mt-6 rounded-3xl border border-pmcs-gold/40 bg-pmcs-gold/10 p-4 text-sm leading-7 text-pmcs-charcoal">{dictionary.hero.note}</p>
        </div>
        <ImageFrame alt={dictionary.hero.imageAlt} caption={dictionary.hero.imageCaption} />
      </div>
    </section>
  );
}
