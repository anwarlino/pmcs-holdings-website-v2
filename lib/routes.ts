import { defaultLocale, type Locale } from './i18n';

export function getLocalePath(locale: Locale): string {
  return `/${locale}`;
}

export function getHomePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : getLocalePath(locale);
}

export function getSectionHref(locale: Locale, sectionId: string): string {
  return `${getHomePath(locale)}#${sectionId}`;
}
