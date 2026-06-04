import { notFound } from 'next/navigation';
import { getDictionary } from '@/content/locales';
import { getStructuredData } from '@/content/seo/structured-data';
import { isLocale, locales, type Locale } from '@/lib/i18n';
import { CapitalPartnershipsSection } from '@/components/sections/CapitalPartnershipsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { GovernanceSection } from '@/components/sections/GovernanceSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { IccrFrameworkSection } from '@/components/sections/IccrFrameworkSection';
import { PlatformEcosystemSection } from '@/components/sections/PlatformEcosystemSection';
import { StrategicAlignmentSection } from '@/components/sections/StrategicAlignmentSection';
import { SupplyBaseSection } from '@/components/sections/SupplyBaseSection';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const structuredData = getStructuredData(locale);

  return (
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
  );
}
