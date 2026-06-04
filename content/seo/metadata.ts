import type { Metadata } from 'next';
import { getDictionary } from '@/content/locales';
import { defaultLocale, locales, type Locale } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

export function getLocalizedMetadata(locale: Locale, path = ''): Metadata {
  const dictionary = getDictionary(locale);
  const pathname = path || (locale === defaultLocale ? '/' : `/${locale}/`);
  const canonical = new URL(pathname, siteConfig.url).toString();

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    keywords: dictionary.meta.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: Object.fromEntries(
        locales.map((item) => [item, item === defaultLocale ? '/' : `/${item}/`]),
      ),
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: canonical,
      siteName: siteConfig.name,
      locale,
      type: 'website',
    },
  };
}
