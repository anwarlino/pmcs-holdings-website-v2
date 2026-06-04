import type { LocaleContent } from '@/content/locales/types';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function GovernanceSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="governance" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow={dictionary.governance.eyebrow} title={dictionary.governance.title} align="left" />
          <ul className="mt-8 grid gap-4">
            {dictionary.governance.items.map((item) => (
              <li key={item} className="rounded-3xl border border-pmcs-line bg-white p-5 leading-7 text-pmcs-muted shadow-sm">{item}</li>
            ))}
          </ul>
        </div>
        <ImageFrame alt={dictionary.governance.imageAlt} caption={dictionary.governance.imageCaption} />
      </div>
    </section>
  );
}
