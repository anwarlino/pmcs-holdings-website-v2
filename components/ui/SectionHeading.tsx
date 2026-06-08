type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, body, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 text-xs font-bold uppercase leading-5 tracking-[0.18em] text-pmcs-green sm:tracking-[0.24em]">{eyebrow}</p>
      <h2 className="text-balance text-2xl font-bold tracking-[-0.03em] text-pmcs-charcoal sm:text-3xl md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-pmcs-muted md:text-lg">{body}</p> : null}
    </div>
  );
}
