import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import '../globals.css';
import { getDictionary } from '@/content/locales';
import { getLocalizedMetadata } from '@/content/seo/metadata';
import { getDirection, isLocale, locales, type Locale } from '@/lib/i18n';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return getLocalizedMetadata(locale, `/${locale}/`);
}

export default async function LocaleRootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body dir={getDirection(locale)}>
        <SiteHeader locale={locale} dictionary={dictionary} />
        {children}
        <SiteFooter dictionary={dictionary} />
      </body>
    </html>
  );
}
