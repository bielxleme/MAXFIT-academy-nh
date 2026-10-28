import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Brand from '@/components/Brand';
import { NAV_ITEMS } from '@/data/site';
import { WHATSAPP_MAIN } from '@/lib/gym';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-ink/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent'
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="MAXFIT Academy — voltar ao início">
          <Brand />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-mist transition-colors duration-300 hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_MAIN}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-[42px] items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13.5px] font-semibold text-ink transition-all duration-300 hover:bg-gold-soft hover:shadow-glow lg:inline-flex"
        >
          <MessageCircle size={16} strokeWidth={2.2} aria-hidden="true" />
          Agendar aula experimental
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-gold/50 hover:text-gold md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 md:hidden ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Navegação mobile" className="container-page flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-[15px] font-medium text-white/85 transition-colors duration-300 hover:bg-white/5 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_MAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gold text-[14.5px] font-semibold text-ink"
          >
            <MessageCircle size={17} strokeWidth={2.2} aria-hidden="true" />
            Agendar aula experimental
          </a>
        </nav>
      </div>
    </header>
  );
}
