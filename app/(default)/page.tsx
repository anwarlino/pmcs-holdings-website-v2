import { getDictionary } from '@/content/locales';
import { getStructuredData } from '@/content/seo/structured-data';
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
