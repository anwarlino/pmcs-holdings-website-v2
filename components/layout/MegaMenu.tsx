import Link from 'next/link';
import type { LocaleContent } from '@/content/locales/types';
import type { Locale } from '@/lib/i18n';
import { getSectionHref } from '@/lib/routes';

type MegaMenuProps = {
  locale: Locale;
  dictionary: LocaleContent;
  isOpen: boolean;
  onClose: () => void;
};

export function MegaMenu({ locale, dictionary, isOpen, onClose }: MegaMenuProps) {
  return (
    <div
      id="site-mega-menu"
      className="absolute left-0 top-full hidden w-full overflow-hidden lg:block"
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div
        className={`border-b border-pmcs-line bg-white/95 shadow-pmcs backdrop-blur-xl transition-all duration-300 ease-out ${
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {dictionary.nav.mega.groups.map((group) => (
              <section key={group.heading} className="rounded-[1.75rem] border border-pmcs-line bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-pmcs-maroon">{group.eyebrow}</p>
                <h2 className="mt-2 text-lg font-black tracking-[-0.02em] text-pmcs-charcoal">{group.heading}</h2>
                <p className="mt-2 text-sm leading-6 text-pmcs-muted">{group.description}</p>
                <div className="mt-5 grid gap-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={getSectionHref(locale, link.href)}
                      onClick={onClose}
                      className="group rounded-2xl border border-transparent bg-pmcs-light px-4 py-3 transition hover:border-pmcs-line hover:bg-white focus-visible:pmcs-focus-ring"
                    >
                      <span className="flex items-center justify-between gap-3 text-sm font-black text-pmcs-charcoal">
                        {link.label}
                        <span className="text-pmcs-maroon transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1" aria-hidden="true">
                          →
                        </span>
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-pmcs-muted">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="grid gap-4">
            {dictionary.nav.mega.cards.map((card) => (
              <section key={card.title} className="relative overflow-hidden rounded-[1.75rem] border border-pmcs-line bg-gradient-to-br from-pmcs-maroonDark to-pmcs-maroon p-5 text-white shadow-pmcs">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl rtl:left-[-2.5rem] rtl:right-auto" aria-hidden="true" />
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">{card.eyebrow}</p>
                <h2 className="mt-2 text-xl font-black tracking-[-0.03em]">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/80">{card.description}</p>
                <div className="mt-5 grid grid-cols-3 gap-2" aria-label={card.placeholderAria}>
                  {card.placeholderLabels.map((label) => (
                    <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-3 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/75">
                      {label}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}
