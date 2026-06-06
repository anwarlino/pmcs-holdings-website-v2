import type { LocaleContent } from '@/content/locales/types';

type SiteFooterProps = {
  dictionary: LocaleContent;
};

export function SiteFooter({ dictionary }: SiteFooterProps) {
  const footerLinks = [...dictionary.nav.items, { label: dictionary.nav.contact, href: 'contact' }];

  return (
    <footer className="border-t border-pmcs-maroon/20 bg-pmcs-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:py-12 lg:py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.9fr_1fr_0.95fr] lg:gap-10">
          <section aria-labelledby="footer-brand-heading" className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                className="h-11 w-9 shrink-0 bg-pmcs-gold [mask-image:url('/assets/logo/pmcs-logo.png')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/assets/logo/pmcs-logo.png')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
                aria-hidden="true"
              />
              <h2 id="footer-brand-heading" className="text-xl font-black tracking-[-0.03em] text-white">
                {dictionary.nav.brandName}
              </h2>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72">{dictionary.footer.brandDescription}</p>
          </section>

          <nav aria-label={dictionary.footer.navigationLabel} className="min-w-0">
            <h2 className="text-xs font-black uppercase tracking-[0.18em] text-pmcs-gold">{dictionary.footer.platformHeading}</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-1">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={`#${item.href}`}
                    className="inline-flex min-h-9 items-center rounded-xl py-1 text-sm font-semibold leading-6 text-white/78 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:pmcs-focus-ring"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-governance-heading" className="min-w-0">
            <h2 id="footer-governance-heading" className="text-xs font-black uppercase tracking-[0.18em] text-pmcs-gold">
              {dictionary.footer.governanceHeading}
            </h2>
            <ul className="mt-4 space-y-3">
              {dictionary.footer.governanceItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/76">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pmcs-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-static-heading" className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
            <h2 id="footer-static-heading" className="text-xs font-black uppercase tracking-[0.18em] text-pmcs-gold">
              {dictionary.footer.staticExportHeading}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/74">{dictionary.footer.staticExport}</p>
          </section>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs leading-6 text-white/64 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-semibold text-white/72">
              © 2026 {dictionary.nav.brandName}. {dictionary.footer.rights}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {dictionary.footer.legalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
