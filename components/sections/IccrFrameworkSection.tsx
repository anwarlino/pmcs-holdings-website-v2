import type { LocaleContent } from '@/content/locales/types';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function IccrFrameworkSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="iccr" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <ImageFrame alt={dictionary.iccr.imageAlt} caption={dictionary.iccr.imageCaption} />
        <div>
          <SectionHeading eyebrow={dictionary.iccr.eyebrow} title={dictionary.iccr.title} align="left" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {dictionary.iccr.pillars.map((pillar, index) => (
              <div key={pillar} className="rounded-3xl border border-pmcs-line bg-white p-5">
                <span className="text-xs font-black text-pmcs-gold">0{index + 1}</span>
                <p className="mt-3 font-bold text-pmcs-charcoal">{pillar}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-3xl border border-pmcs-maroon/15 bg-pmcs-maroon/5 p-5 leading-7 text-pmcs-muted">{dictionary.iccr.note}</p>
        </div>
      </div>
    </section>
  );
}
