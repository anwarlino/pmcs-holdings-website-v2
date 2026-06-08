import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({ href, children, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex min-h-12 max-w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold uppercase leading-5 tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-pmcs-gold focus:ring-offset-2 sm:tracking-[0.16em]',
        variant === 'primary'
          ? 'bg-pmcs-maroon text-white shadow-pmcs hover:bg-pmcs-maroonDark'
          : 'border border-pmcs-maroon/20 bg-white text-pmcs-maroon hover:border-pmcs-maroon',
      )}
    >
      {children}
    </Link>
  );
}
