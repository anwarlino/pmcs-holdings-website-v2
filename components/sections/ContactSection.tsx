import type { LocaleContent } from "@/content/locales/types";
import type { Locale } from "@/lib/i18n";
import { getSectionHref } from "@/lib/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection({
  dictionary,
  locale,
}: {
  dictionary: LocaleContent;
  locale: Locale;
}) {
  const contact = dictionary.contact;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-20 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(138,21,56,0.12),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(46,163,122,0.10),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7f8fa_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-pmcs-charcoal shadow-[0_34px_100px_rgba(43,43,43,0.24)] md:rounded-[2.75rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(138,21,56,0.34),transparent_28%),radial-gradient(circle_at_78%_32%,rgba(214,173,96,0.14),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-transparent via-pmcs-gold/70 to-transparent md:block" />
          <div className="absolute bottom-10 left-10 hidden h-24 w-px bg-gradient-to-b from-transparent via-pmcs-maroon to-transparent lg:block" />

          <div className="relative grid gap-12 p-6 md:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:p-14 xl:p-16">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <div className="[&_h2]:text-white [&_p]:text-white/76 [&_p:first-child]:text-pmcs-gold">
                  <SectionHeading
                    eyebrow={contact.eyebrow}
                    title={contact.title}
                    body={contact.body}
                    align="left"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <ButtonLink
                    href={getSectionHref(locale, "governance")}
                    variant="secondary"
                  >
                    {contact.cta}
                  </ButtonLink>
                  <p className="max-w-sm text-sm leading-6 text-white/58">
                    {contact.ctaNote}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {contact.readiness.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
                  >
                    <div className="mb-3 h-1 w-9 rounded-full bg-gradient-to-r from-pmcs-gold via-pmcs-maroon to-pmcs-green" />
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative" aria-label={contact.gatewayAria}>
              <div className="absolute inset-5 rounded-[2rem] bg-pmcs-maroon/18 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-[#232323]/88 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(214,173,96,0.20),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />
                <div className="absolute inset-x-7 top-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-x-12 bottom-20 h-px bg-gradient-to-r from-transparent via-pmcs-green/40 to-transparent" />

                <div className="relative rounded-[1.5rem] border border-pmcs-gold/35 bg-white/[0.08] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-pmcs-gold">
                        {contact.gatewayLabel}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl">
                        {contact.gatewayTitle}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white/64">
                        {contact.gatewayBody}
                      </p>
                    </div>
                    <div
                      className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/15 bg-pmcs-maroon/35 text-pmcs-gold shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M4 7.5h16v10H4z" />
                        <path d="m4 8 8 5.5L20 8" />
                        <path d="M8 17.5v2M16 17.5v2M10 19.5h4" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                  {contact.pathway.map((item, index) => (
                    <article
                      key={item.title}
                      className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.055] p-4"
                    >
                      <div className="absolute inset-y-4 start-0 w-1 rounded-full bg-gradient-to-b from-pmcs-gold via-pmcs-maroon to-pmcs-green opacity-70" />
                      <div className="flex items-start gap-3">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.07] text-xs font-black text-pmcs-gold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm leading-6 text-white/60">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="relative mt-5 rounded-2xl border border-pmcs-green/25 bg-pmcs-green/[0.08] p-4 text-sm leading-6 text-white/68">
                  <span className="font-bold text-pmcs-green">
                    {contact.disclosureLabel}
                  </span>{" "}
                  {contact.disclosure}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
