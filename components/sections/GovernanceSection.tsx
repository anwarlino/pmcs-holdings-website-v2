import type { LocaleContent } from "@/content/locales/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";

const controlIcons = [
  <svg key="claim" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path
      d="M6.5 5.5h11v13h-11z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
    <path
      d="M9 9h6M9 12h4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.7"
    />
    <path
      d="m9 15.5 1.5 1.5 4-4.2"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>,
  <svg
    key="documentation"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M7 4.8h7.4L18 8.4v10.8H7z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
    <path
      d="M14.3 4.9v3.7H18M9.7 12h4.6M9.7 15h4.6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
    <path
      d="M5 8.2v12h10.8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.7"
      opacity=".55"
    />
  </svg>,
  <svg key="partner" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path
      d="M8.2 12.2 6.8 11a2.7 2.7 0 0 1 0-3.8 2.7 2.7 0 0 1 3.8 0l.8.8M15.8 11.8l1.4 1.2a2.7 2.7 0 0 1 0 3.8 2.7 2.7 0 0 1-3.8 0l-.8-.8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
    <path
      d="m9.8 14.2 4.4-4.4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.7"
    />
    <path
      d="m9 17.2 1.6 1.6 4.4-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      opacity=".65"
    />
  </svg>,
  <svg
    key="approval"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      d="M12 3.8 18 6v5.2c0 3.9-2.4 7.2-6 9-3.6-1.8-6-5.1-6-9V6z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
    <path
      d="M9 12.1 11 14l4-4.4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>,
];

export function GovernanceSection({
  dictionary,
}: {
  dictionary: LocaleContent;
}) {
  const governance = dictionary.governance;
  const overlayControls = governance.nodes.slice(0, 4);

  return (
    <section
      id="governance"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,rgba(247,244,238,0.72)_48%,#ffffff_100%)] py-16 sm:py-20 md:py-24"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(122,31,43,0.12),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(179,139,74,0.14),transparent_30%),linear-gradient(rgba(122,31,43,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(122,31,43,0.035)_1px,transparent_1px)] bg-[length:auto,auto,44px_44px,44px_44px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-pmcs-gold/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="lg:pb-10">
            <SectionHeading
              eyebrow={governance.eyebrow}
              title={governance.title}
              body={governance.body}
              align="left"
            />

            <aside className="mt-8 rounded-[2rem] border border-pmcs-gold/25 bg-white/75 p-5 shadow-[0_18px_55px_rgba(31,31,31,0.06)] backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-pmcs-gold">
                {governance.disclosureLabel}
              </p>
              <p className="mt-3 text-sm leading-7 text-pmcs-muted md:text-base">
                {governance.disclosure}
              </p>
            </aside>
          </div>

          <ImageFrame
            alt={governance.frameworkAria}
            caption={governance.visualCaption}
            statusLabel={governance.visualStatus}
            variant="governance"
            contentClassName="p-5 md:p-8"
          >
            <div
              className="absolute left-7 top-7 h-44 w-36 rotate-[-6deg] rounded-[1.4rem] border border-pmcs-line/80 bg-white/82 shadow-[0_24px_60px_rgba(31,31,31,0.10)] sm:h-52 sm:w-40"
              aria-hidden="true"
            >
              <div className="m-5 h-3 w-20 rounded-full bg-pmcs-maroon/18" />
              <div className="mx-5 mt-5 grid gap-2">
                <span className="h-2 rounded-full bg-pmcs-line" />
                <span className="h-2 rounded-full bg-pmcs-line" />
                <span className="h-2 w-3/4 rounded-full bg-pmcs-line" />
              </div>
            </div>
            <div
              className="absolute bottom-12 right-10 h-48 w-36 rotate-[7deg] rounded-[1.5rem] border border-pmcs-gold/25 bg-white/70 shadow-[0_28px_70px_rgba(31,31,31,0.12)] sm:h-56 sm:w-44"
              aria-hidden="true"
            >
              <div className="m-5 h-12 rounded-2xl border border-pmcs-green/20 bg-pmcs-green/10" />
              <div className="mx-5 grid gap-2">
                <span className="h-2 rounded-full bg-pmcs-line" />
                <span className="h-2 w-5/6 rounded-full bg-pmcs-line" />
              </div>
            </div>

            <div className="relative flex min-h-[420px] flex-col justify-between sm:min-h-[470px] md:min-h-[500px]">
              <div className="grid gap-3 md:max-w-[56%]">
                {overlayControls.slice(0, 3).map((node, index) => (
                  <div
                    key={`${node.title}-workflow`}
                    className="flex items-center gap-3 rounded-full border border-white/80 bg-white/78 px-4 py-3 text-sm font-bold text-pmcs-charcoal shadow-sm backdrop-blur-sm"
                  >
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full bg-pmcs-green ring-4 ring-pmcs-green/12"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 truncate">{node.title}</span>
                    <span className="ms-auto text-[0.66rem] font-black uppercase tracking-[0.18em] text-pmcs-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="absolute left-[32%] top-[38%] hidden h-px w-[34%] -rotate-12 bg-gradient-to-r from-pmcs-maroon/5 via-pmcs-maroon/30 to-pmcs-green/10 md:block"
                aria-hidden="true"
              />
              <div
                className="absolute left-[34%] top-[48%] hidden h-px w-[42%] rotate-6 bg-gradient-to-r from-pmcs-gold/10 via-pmcs-gold/38 to-pmcs-maroon/10 md:block"
                aria-hidden="true"
              />

              <div className="relative mt-auto rounded-[2rem] border border-pmcs-maroon/15 bg-pmcs-maroon/95 p-6 text-white shadow-[0_28px_80px_rgba(122,31,43,0.24)] backdrop-blur-sm md:ms-auto md:w-[62%] md:p-7">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.24em] text-pmcs-gold">
                  {governance.central.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] md:text-3xl">
                  {governance.central.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  {governance.central.body}
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {overlayControls.map((node, index) => (
                    <div
                      key={`${node.title}-overlay`}
                      className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-xs font-bold text-white/90"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-pmcs-gold"
                        aria-hidden="true"
                      >
                        {controlIcons[index % controlIcons.length]}
                      </span>
                      <span>{node.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ImageFrame>
        </div>

        <div className="mt-12 rounded-[2.5rem] border border-white/80 bg-white/82 p-5 shadow-[0_24px_70px_rgba(31,31,31,0.08)] backdrop-blur-sm md:p-7">
          <div className="flex flex-col gap-3 border-b border-pmcs-line pb-5 md:flex-row md:items-end md:justify-between">
            <h3 className="text-sm font-black uppercase tracking-[0.22em] text-pmcs-maroon">
              {governance.checklistTitle}
            </h3>
            <span
              className="h-px flex-1 bg-gradient-to-r from-pmcs-gold/40 via-pmcs-green/15 to-transparent md:ms-6"
              aria-hidden="true"
            />
          </div>
          <div className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">
            {governance.controls.map((control) => (
              <div
                key={control}
                className="group flex gap-4 rounded-[1.35rem] border border-transparent p-3 transition duration-200 hover:border-pmcs-gold/25 hover:bg-pmcs-light/60 motion-reduce:transition-none"
              >
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-pmcs-green/20 bg-pmcs-green/10 text-pmcs-green"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="m6.5 12.4 3.2 3.1 7.8-8"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <p className="text-sm font-semibold leading-6 text-pmcs-charcoal md:text-[0.95rem]">
                  {control}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
