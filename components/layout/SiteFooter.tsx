import type { LocaleContent } from '@/content/locales/types';

type SiteFooterProps = {
  dictionary: LocaleContent;
};

export function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-pmcs-line bg-pmcs-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xl font-black">{dictionary.nav.brandName}</p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">{dictionary.footer.body}</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-pmcs-gold">{dictionary.footer.staticExport}</p>
        </div>
        <p className="text-sm text-white/70">© 2026 {dictionary.nav.brandName}. {dictionary.footer.rights}</p>
      </div>
    </footer>
  );
}
