import type { LocaleContent } from "@/content/locales/types";
import type { Locale } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection({
  dictionary,
}: {
  dictionary: LocaleContent;
  locale: Locale;
}) {
  const contact = dictionary.contact;
  const fieldClass =
    "mt-2 w-full rounded-2xl border border-pmcs-line/80 bg-white px-4 py-3 text-sm text-pmcs-charcoal shadow-sm outline-none transition placeholder:text-pmcs-muted/55 focus:border-pmcs-gold focus:ring-4 focus:ring-pmcs-gold/15";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-pmcs-charcoal px-4 py-16 text-white sm:px-5 sm:py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(138,21,56,0.42),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(214,173,96,0.12),transparent_24%),radial-gradient(circle_at_78%_82%,rgba(46,163,122,0.12),transparent_28%),linear-gradient(135deg,#252525_0%,#2b2b2b_48%,#351a22_100%)]" />
      <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-pmcs-gold/40 to-transparent" />
      <div className="absolute -bottom-24 start-10 h-72 w-72 rounded-full bg-pmcs-maroon/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-14">
        <div className="max-w-xl">
          <div className="[&_h2]:text-white [&_p]:text-white/72 [&_p:first-child]:text-pmcs-gold">
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              body={contact.body}
              align="left"
            />
          </div>

          <div className="mt-9 space-y-4 border-s border-pmcs-gold/35 ps-5">
            {contact.readiness.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/58">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-4 rounded-[2rem] bg-pmcs-maroon/20 blur-3xl" />
          <form
            className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white p-5 text-pmcs-charcoal shadow-[0_32px_90px_rgba(0,0,0,0.28)] md:p-7 lg:p-8"
            aria-label={contact.form.aria}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pmcs-maroon via-pmcs-gold to-pmcs-green" />
            <div className="absolute end-6 top-6 h-20 w-20 rounded-full bg-pmcs-gold/10 blur-2xl" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-pmcs-maroon">
                {contact.form.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-pmcs-charcoal md:text-3xl">
                {contact.form.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-pmcs-muted">
                {contact.form.intro}
              </p>
            </div>

            <div className="relative mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-pmcs-charcoal">
                {contact.form.fields.name.label}
                <input
                  className={fieldClass}
                  type="text"
                  placeholder={contact.form.fields.name.placeholder}
                />
              </label>

              <label className="text-sm font-bold text-pmcs-charcoal">
                {contact.form.fields.organisation.label}
                <input
                  className={fieldClass}
                  type="text"
                  placeholder={contact.form.fields.organisation.placeholder}
                />
              </label>

              <label className="text-sm font-bold text-pmcs-charcoal">
                {contact.form.fields.email.label}
                <input
                  className={fieldClass}
                  type="email"
                  placeholder={contact.form.fields.email.placeholder}
                />
              </label>

              <label className="text-sm font-bold text-pmcs-charcoal">
                {contact.form.fields.inquiryType.label}
                <select className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    {contact.form.fields.inquiryType.placeholder}
                  </option>
                  {contact.form.inquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-bold text-pmcs-charcoal sm:col-span-2">
                {contact.form.fields.message.label}
                <textarea
                  className={`${fieldClass} min-h-32 resize-y`}
                  placeholder={contact.form.fields.message.placeholder}
                />
              </label>
            </div>

            <div className="relative mt-7 flex flex-col gap-4 border-t border-pmcs-line pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-pmcs-muted">
                {contact.form.submitNote}
              </p>
              <button
                type="button"
                className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full border border-pmcs-maroon/15 bg-pmcs-maroon px-6 py-3 text-center text-sm font-bold uppercase leading-5 tracking-[0.1em] sm:tracking-[0.14em] text-white shadow-pmcs transition hover:bg-pmcs-maroonDark focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-offset-2"
                aria-disabled="true"
              >
                {contact.form.submitLabel}
              </button>
            </div>

            <p className="relative mt-5 rounded-2xl bg-pmcs-light px-4 py-3 text-xs leading-5 text-pmcs-muted">
              {contact.disclosure}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
