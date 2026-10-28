import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MAIN } from '@/lib/gym';

/** Barra fixa inferior com o CTA principal (apenas mobile). */
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/85 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 backdrop-blur-lg md:hidden">
      <a
        href={WHATSAPP_MAIN}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-gold text-[15px] font-semibold text-ink shadow-glow transition-colors duration-300 active:bg-gold-soft"
      >
        <MessageCircle size={19} strokeWidth={2.2} aria-hidden="true" />
        Agendar aula experimental
      </a>
    </div>
  );
}
