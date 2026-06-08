import type { ReactNode } from "react";

type ImageFrameVariant =
  | "platform"
  | "supply"
  | "governance"
  | "documentation"
  | "neutral";

type ImageFrameProps = {
  alt: string;
  caption: string;
  variant?: ImageFrameVariant;
  statusLabel?: string;
  className?: string;
  contentClassName?: string;
  children?: ReactNode;
};

const variantShell: Record<ImageFrameVariant, string> = {
  platform:
    "border-white/80 bg-white/82 shadow-[0_32px_90px_rgba(43,43,43,0.13)]",
  supply:
    "border-pmcs-green/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(247,251,248,0.86))] shadow-[0_30px_85px_rgba(43,43,43,0.12)]",
  governance:
    "border-white/80 bg-white/84 shadow-[0_34px_95px_rgba(31,31,31,0.14)]",
  documentation: "border-pmcs-line bg-white/88 shadow-pmcs",
  neutral: "border-pmcs-line bg-white/84 shadow-pmcs",
};

const variantCanvas: Record<ImageFrameVariant, string> = {
  platform:
    "border-pmcs-line bg-[radial-gradient(circle_at_15%_12%,rgba(214,173,96,0.26),transparent_14rem),radial-gradient(circle_at_88%_4%,rgba(46,163,122,0.18),transparent_15rem),linear-gradient(145deg,#ffffff_0%,#fbf8f3_52%,#f6fbf8_100%)]",
  supply:
    "border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(247,248,250,0.78)),radial-gradient(circle_at_28%_28%,rgba(138,21,56,0.14),transparent_34%),radial-gradient(circle_at_78%_64%,rgba(46,163,122,0.18),transparent_32%)]",
  governance:
    "border-white/80 bg-[linear-gradient(142deg,rgba(255,255,255,0.94),rgba(248,245,239,0.82)),radial-gradient(circle_at_28%_28%,rgba(255,255,255,0.72),transparent_24%),radial-gradient(circle_at_72%_62%,rgba(122,31,43,0.13),transparent_28%)]",
  documentation:
    "border-pmcs-line bg-[linear-gradient(140deg,rgba(255,255,255,0.94),rgba(251,248,242,0.84)),radial-gradient(circle_at_20%_15%,rgba(214,173,96,0.18),transparent_18rem)]",
  neutral:
    "border-pmcs-line bg-[linear-gradient(145deg,#ffffff_0%,#fbf8f3_55%,#f7faf8_100%)]",
};

const accentOne: Record<ImageFrameVariant, string> = {
  platform: "bg-pmcs-gold/20",
  supply: "bg-pmcs-green/15",
  governance: "bg-pmcs-maroon/12",
  documentation: "bg-pmcs-gold/16",
  neutral: "bg-pmcs-maroon/10",
};

const accentTwo: Record<ImageFrameVariant, string> = {
  platform: "bg-pmcs-green/15",
  supply: "bg-pmcs-gold/20",
  governance: "bg-pmcs-gold/16",
  documentation: "bg-pmcs-maroon/10",
  neutral: "bg-pmcs-green/10",
};

export function ImageFrame({
  alt,
  caption,
  variant = "neutral",
  statusLabel,
  className = "",
  contentClassName = "",
  children,
}: ImageFrameProps) {
  return (
    <figure
      className={`relative min-w-0 overflow-hidden rounded-[2rem] border p-3 backdrop-blur sm:p-4 ${variantShell[variant]} ${className}`}
      aria-label={alt}
    >
      <div
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-pmcs-gold/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-2xl ${accentOne[variant]}`}
        aria-hidden="true"
      />
      <div
        className={`pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full blur-2xl ${accentTwo[variant]}`}
        aria-hidden="true"
      />

      <div
        className={`relative overflow-hidden rounded-[1.55rem] border p-5 sm:p-6 ${variantCanvas[variant]} ${contentClassName}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(31,31,31,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(31,31,31,0.035)_1px,transparent_1px)] bg-[length:30px_30px] opacity-45"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-pmcs-gold/50 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-8 left-6 right-6 grid grid-cols-3 gap-2 opacity-60"
          aria-hidden="true"
        >
          <span className="h-1 rounded-full bg-pmcs-maroon/35" />
          <span className="h-1 rounded-full bg-pmcs-gold/60" />
          <span className="h-1 rounded-full bg-pmcs-green/45" />
        </div>
        {children ?? (
          <div className="relative flex aspect-[4/3] items-center justify-center rounded-[1.35rem] border border-dashed border-pmcs-maroon/20 bg-white/60 text-center">
            <div
              className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-pmcs-maroon via-pmcs-gold to-pmcs-green opacity-80"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      <div className="relative mt-4 flex flex-col gap-2 rounded-[1.35rem] border border-white/80 bg-white/78 px-4 py-3 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <figcaption className="min-w-0 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-pmcs-muted sm:tracking-[0.16em]">
          {caption}
        </figcaption>
        {statusLabel ? (
          <span className="inline-flex max-w-full rounded-full border border-pmcs-gold/35 bg-pmcs-gold/10 px-3 py-1 text-center text-[0.66rem] font-black uppercase leading-4 tracking-[0.12em] text-pmcs-maroon sm:tracking-[0.18em]">
            {statusLabel}
          </span>
        ) : null}
      </div>
    </figure>
  );
}
