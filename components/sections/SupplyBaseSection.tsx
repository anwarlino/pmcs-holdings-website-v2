import type { LocaleContent } from '@/content/locales/types';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SupplyBaseSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="supply" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <SectionHeading eyebrow={dictionary.supply.eyebrow} title={dictionary.supply.title} body={dictionary.supply.body} align="left" />
        <ImageFrame alt={dictionary.supply.imageAlt} caption={dictionary.supply.imageCaption} />
      </div>
    </section>
  );
}
