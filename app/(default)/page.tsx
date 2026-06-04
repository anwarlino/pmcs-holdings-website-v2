import { getDictionary } from '@/content/locales';
import { getStructuredData } from '@/content/seo/structured-data';
import { locales } from '@/lib/i18n';
import { getHomePath } from '@/lib/routes';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { CapitalPartnershipsSection } from '@/components/sections/CapitalPartnershipsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { GovernanceSection } from '@/components/sections/GovernanceSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { IccrFrameworkSection } from '@/components/sections/IccrFrameworkSection';
import { PlatformEcosystemSection } from '@/components/sections/PlatformEcosystemSection';
import { StrategicAlignmentSection } from '@/components/sections/StrategicAlignmentSection';
import { SupplyBaseSection } from '@/components/sections/SupplyBaseSection';

export default function RootHomePage() {
  const locale = 'en';
  const dictionary = getDictionary(locale);
  const structuredData = getStructuredData(locale);

  return (
    <>
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <section className="border-b border-pmcs-line bg-white py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-pmcs-muted">{dictionary.language.linksHeading}</p>
            <div className="flex flex-wrap gap-2" aria-label={dictionary.language.label}>
              {locales.map((item) => (
                <a key={item} href={getHomePath(item)} hrefLang={item} className="rounded-full border border-pmcs-line px-4 py-2 text-sm font-bold text-pmcs-maroon hover:border-pmcs-maroon">
                  {dictionary.language.options[item]}
                </a>
              ))}
            </div>
          </div>
        </section>
        <HeroSection dictionary={dictionary} locale={locale} />
        <StrategicAlignmentSection dictionary={dictionary} />
        <PlatformEcosystemSection dictionary={dictionary} />
        <IccrFrameworkSection dictionary={dictionary} />
        <SupplyBaseSection dictionary={dictionary} />
        <CapitalPartnershipsSection dictionary={dictionary} />
        <GovernanceSection dictionary={dictionary} />
        <ContactSection dictionary={dictionary} locale={locale} />
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
