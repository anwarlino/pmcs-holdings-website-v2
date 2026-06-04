import { ar } from './ar';
import { en } from './en';
import { th } from './th';
import type { LocaleContent } from './types';
import type { Locale } from '@/lib/i18n';

export const dictionaries: Record<Locale, LocaleContent> = {
  en,
  th,
  ar,
};

export function getDictionary(locale: Locale): LocaleContent {
  return dictionaries[locale];
}
