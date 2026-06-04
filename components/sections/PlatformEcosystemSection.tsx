import type { LocaleContent } from '@/content/locales/types';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PlatformEcosystemSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="ecosystem" className="bg-pmcs-light py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <SectionHeading eyebrow={dictionary.ecosystem.eyebrow} title={dictionary.ecosystem.title} body={dictionary.ecosystem.body} align="left" />
        <ImageFrame alt={dictionary.ecosystem.imageAlt} caption={dictionary.ecosystem.imageCaption} />
      </div>
    </section>
  );
}
