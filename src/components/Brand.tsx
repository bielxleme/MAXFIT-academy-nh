import { Star } from 'lucide-react';

type BrandProps = {
  className?: string;
  compact?: boolean;
};

/** Logotipo textual estilizado “MAXFIT Academy”. */
export default function Brand({ className = '', compact = false }: BrandProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="MAXFIT Academy">
      <span className="flex flex-col items-center leading-none" aria-hidden="true">
        <span className="flex gap-[3px]">
          <Star size={compact ? 7 : 8} className="fill-gold text-gold" />
          <Star size={compact ? 8 : 9} className="-mt-[2px] fill-gold-soft text-gold-soft" />
          <Star size={compact ? 7 : 8} className="fill-gold text-gold" />
        </span>
        <span className="mt-[3px] font-display text-[19px] font-extrabold tracking-[0.06em] text-white">
          MAXFIT
        </span>
      </span>
      <span className="hidden font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-mist sm:block">
        Academy
      </span>
    </span>
  );
}
