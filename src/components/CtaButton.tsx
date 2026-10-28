import type { ReactNode } from 'react';

type Variant = 'gold' | 'outline' | 'whatsapp';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 select-none px-6 py-3.5 text-[15px] min-h-[52px]';

const variants: Record<Variant, string> = {
  gold:
    'bg-gold text-ink shadow-glow hover:bg-gold-soft hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_14px_44px_-8px_rgba(245,179,1,0.6)]',
  outline:
    'border border-white/20 text-white hover:border-gold/70 hover:text-gold hover:-translate-y-0.5 backdrop-blur-sm bg-white/[0.03]',
  whatsapp:
    'bg-[#25d366] text-[#07331a] hover:bg-[#3ce07a] hover:-translate-y-0.5 shadow-[0_10px_34px_-10px_rgba(37,211,102,0.6)]',
};

export default function CtaButton({
  href,
  children,
  variant = 'gold',
  icon,
  className = '',
  ariaLabel,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
