import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getSectionHref } from '@/lib/routes';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactSection({ dictionary, locale }: { dictionary: LocaleContent; locale: Locale }) {
  return (
    <section id="contact" className="bg-pmcs-charcoal py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <div>
          <div className="[&_h2]:text-white [&_p]:text-white/75">
            <SectionHeading eyebrow={dictionary.contact.eyebrow} title={dictionary.contact.title} body={dictionary.contact.body} align="left" />
          </div>
          <div className="mt-8">
            <ButtonLink href={getSectionHref(locale, 'governance')} variant="secondary">{dictionary.contact.cta}</ButtonLink>
          </div>
        </div>
        <ImageFrame alt={dictionary.contact.imageAlt} caption={dictionary.contact.imageCaption} />
      </div>
    </section>
  );
}
