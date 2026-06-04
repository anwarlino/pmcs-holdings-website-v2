type ImageFrameProps = {
  alt: string;
  caption: string;
};

export function ImageFrame({ alt, caption }: ImageFrameProps) {
  return (
    <figure className="relative overflow-hidden rounded-[2rem] border border-pmcs-line bg-gradient-to-br from-pmcs-maroon/10 via-white to-pmcs-green/10 p-8 shadow-pmcs" aria-label={alt}>
      <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-dashed border-pmcs-maroon/25 bg-white/80 text-center">
        <div>
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-pmcs-maroon to-pmcs-green" />
          <figcaption className="max-w-sm text-sm font-semibold uppercase tracking-[0.16em] text-pmcs-muted">{caption}</figcaption>
        </div>
      </div>
    </figure>
  );
}
