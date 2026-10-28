import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MAIN } from '@/lib/gym';

/** Botão flutuante de WhatsApp — posicionado acima da barra fixa mobile. */
export default function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_MAIN}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp da MAXFIT Academy"
      className="whatsapp-pulse fixed bottom-[92px] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-[#07331a] shadow-[0_12px_36px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110 md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
