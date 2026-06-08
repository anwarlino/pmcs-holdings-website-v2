import type { LocaleContent } from "@/content/locales/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageFrame } from "@/components/ui/ImageFrame";

const readinessMarks = [
  {
    path: "M8 18V9.5L16 5l8 4.5V18M10.5 18v-5.75h11V18M7 21h18",
    accent: "from-pmcs-maroon to-pmcs-gold",
  },
  {
    path: "M7 18c5.5 0 9-3.25 9-9v-.5h-1C9.5 8.5 6 11.75 6 17.5V18h1ZM16 18c0-4.75 2.75-7.5 7.5-7.5h.5v.5c0 4.75-2.75 7.5-7.5 7.5H16ZM9 21c2.75-3.25 5.75-5.25 9-6",
    accent: "from-pmcs-green to-pmcs-gold",
  },
  {
    path: "M9 6.5h12M9 12h12M9 17.5h7M6 5.5l1.25 1.25L10 4M6 11l1.25 1.25L10 9.5M6 16.5l1.25 1.25L10 15",
    accent: "from-pmcs-charcoal to-pmcs-green",
  },
  {
    path: "M15 5.5 22 9v5.25c0 4.25-2.75 7-7 8.25-4.25-1.25-7-4-7-8.25V9l7-3.5ZM11.75 14.25l2.1 2.1 4.45-5.1",
    accent: "from-pmcs-maroonDark to-pmcs-green",
  },
];

export function SupplyBaseSection({
  dictionary,
}: {
  dictionary: LocaleContent;
}) {
  return (
    <section
      id="supply"
      className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 max-w-5xl rounded-full bg-[radial-gradient(circle_at_center,rgba(214,173,96,0.16),rgba(46,163,122,0.08)_38%,transparent_70%)] blur-2xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1.05fr)] lg:gap-14">
          <div className="min-w-0">
            <SectionHeading
              eyebrow={dictionary.supply.eyebrow}
              title={dictionary.supply.title}
              body={dictionary.supply.body}
              align="left"
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {dictionary.supply.readinessCards.map((card, index) => {
                const mark = readinessMarks[index % readinessMarks.length];

                return (
                  <article
                    key={card.title}
                    className="group rounded-[1.5rem] border border-pmcs-line bg-white/90 p-5 shadow-[0_18px_50px_rgba(43,43,43,0.06)] transition duration-200 ease-out hover:-translate-y-1 hover:border-pmcs-gold/70 hover:shadow-pmcs focus-within:border-pmcs-gold motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${mark.accent} shadow-[0_12px_28px_rgba(43,43,43,0.14)]`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 30 28"
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={mark.path} />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold tracking-[-0.01em] text-pmcs-charcoal">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-pmcs-muted">
                      {card.body}
                    </p>
                  </article>
                );
              })}
            </div>

            <p className="mt-5 rounded-2xl border border-pmcs-gold/30 bg-pmcs-gold/10 px-4 py-3 text-xs font-semibold leading-6 text-pmcs-charcoal">
              {dictionary.supply.note}
            </p>
          </div>

          <ImageFrame
            alt={dictionary.supply.imageAlt}
            caption={dictionary.supply.imageCaption}
            statusLabel={dictionary.supply.plannedVisual.status}
            variant="supply"
            contentClassName="p-6 sm:p-8"
          >
            <div className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden sm:min-h-[28rem]">
              <div
                className="absolute inset-2 rounded-[1.25rem] border border-dashed border-pmcs-maroon/20"
                aria-hidden="true"
              />
              <div
                className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-pmcs-gold/50 to-transparent"
                aria-hidden="true"
              />

              <div className="relative flex items-center justify-between gap-4">
                <span className="rounded-full border border-pmcs-gold/40 bg-white/80 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.22em] text-pmcs-maroon">
                  {dictionary.supply.plannedVisual.eyebrow}
                </span>
                <span
                  className="h-12 w-12 rounded-full border border-pmcs-line bg-white/75 p-2 shadow-sm"
                  aria-hidden="true"
                >
                  <span className="block h-full w-full rounded-full bg-[conic-gradient(from_110deg,#8A1538,#D6AD60,#2EA37A,#8A1538)] opacity-80" />
                </span>
              </div>

              <div
                className="relative mx-auto my-8 flex aspect-square w-40 items-center justify-center rounded-full border border-pmcs-gold/30 bg-white/60 shadow-[inset_0_0_40px_rgba(214,173,96,0.12)] sm:my-10 sm:w-52"
                aria-hidden="true"
              >
                <div className="absolute h-[86%] w-[86%] rounded-full border border-dashed border-pmcs-green/20" />
                <div className="absolute h-[72%] w-[72%] rounded-full border border-pmcs-maroon/20" />
                <div className="absolute h-[46%] w-[46%] rounded-full border border-pmcs-green/25" />
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-pmcs-gold/40 to-transparent" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-pmcs-green/35 to-transparent" />
                <div className="h-4 w-4 rounded-full bg-pmcs-gold shadow-[0_0_0_10px_rgba(214,173,96,0.16)]" />
              </div>

              <div className="relative max-w-xl rounded-[1.35rem] border border-white/80 bg-white/80 p-5 shadow-[0_18px_45px_rgba(43,43,43,0.08)] backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-pmcs-green">
                  {dictionary.supply.imageCaption}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-pmcs-charcoal sm:text-3xl">
                  {dictionary.supply.plannedVisual.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-pmcs-muted sm:text-base">
                  {dictionary.supply.plannedVisual.body}
                </p>
              </div>
            </div>
          </ImageFrame>
        </div>
      </div>
    </section>
  );
}
