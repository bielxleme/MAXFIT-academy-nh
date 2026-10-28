import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import Brand from '@/components/Brand';
import { NAV_ITEMS } from '@/data/site';
import { GYM, MAPS_URL, WHATSAPP_MAIN } from '@/lib/gym';
import logo from '@/assets/images/logo-maxfit.jpg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-graphite pb-28 pt-16 md:pb-16">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-2">
            <Brand />
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-mist">{GYM.tagline}</p>
            <img
              src={logo}
              alt="Logo MAXFIT Academy"
              loading="eager" decoding="async"
              className="mt-7 h-16 w-auto rounded-lg border border-white/10 bg-ink/60 p-2"
            />
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14px] text-mist transition-colors duration-300 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] text-mist">
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 transition-colors duration-300 hover:text-gold"
                >
                  <MapPin size={15} className="mt-[3px] shrink-0 text-gold" aria-hidden="true" />
                  Av. João Valéo, 1578 — Novo Horizonte - SP
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="mt-[3px] shrink-0 text-gold" aria-hidden="true" />
                Seg–Sáb · das 05h00 às 21h30
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={WHATSAPP_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp da MAXFIT Academy"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                <MessageCircle size={17} aria-hidden="true" />
              </a>
              <a
                href={GYM.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram oficial da MAXFIT Academy"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                <Instagram size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-[12.5px] text-white/60">
            © {year} MAXFIT Academy. Todos os direitos reservados.
          </p>
          <p className="text-[12.5px] text-white/60">Desenvolvido com excelência digital</p>
        </div>
      </div>
    </footer>
  );
}
