import type { Metadata } from 'next';
import '../globals.css';
import { getLocalizedMetadata } from '@/content/seo/metadata';
import { getDirection } from '@/lib/i18n';

export const metadata: Metadata = getLocalizedMetadata('en', '/');

export default function DefaultRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir={getDirection('en')}>
      <body dir={getDirection('en')}>{children}</body>
    </html>
  );
}
