import { getDictionary } from '@/content/locales';
import type { Locale } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';

export function getStructuredData(locale: Locale) {
  const dictionary = getDictionary(locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: dictionary.meta.description,
    inLanguage: locale,
  };
}
