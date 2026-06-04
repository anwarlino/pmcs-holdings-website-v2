import type { LocaleContent } from '@/content/locales/types';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function CapitalPartnershipsSection({ dictionary }: { dictionary: LocaleContent }) {
  return (
    <section id="capital" className="bg-pmcs-light py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow={dictionary.capital.eyebrow} title={dictionary.capital.title} body={dictionary.capital.body} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {dictionary.capital.cards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-2xl font-bold text-pmcs-charcoal">{card.title}</h3>
              <p className="mt-4 leading-7 text-pmcs-muted">{card.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
