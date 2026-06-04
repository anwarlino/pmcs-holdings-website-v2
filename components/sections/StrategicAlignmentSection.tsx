import type { LocaleContent } from '@/content/locales/types';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function StrategicAlignmentSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="alignment" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow={dictionary.alignment.eyebrow} title={dictionary.alignment.title} body={dictionary.alignment.body} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dictionary.alignment.cards.map((card) => (
            <Card key={card.number}>
              <span className="text-sm font-black text-pmcs-gold">{card.number}</span>
              <h3 className="mt-4 text-2xl font-bold text-pmcs-charcoal">{card.title}</h3>
              <p className="mt-4 leading-7 text-pmcs-muted">{card.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
