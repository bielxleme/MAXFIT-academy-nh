import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Reveal className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      <p
        className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold ${
          centered ? 'justify-center' : ''
        }`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
        {eyebrow}
        <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
      </p>
      <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white-soft sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-[15px] leading-relaxed text-mist sm:text-base ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
