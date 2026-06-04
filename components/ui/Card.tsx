import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return <article className="rounded-[2rem] border border-pmcs-line bg-white p-7 shadow-pmcs">{children}</article>;
}
