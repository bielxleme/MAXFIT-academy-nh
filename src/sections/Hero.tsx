import { MapPin, Clock, MessageCircle, ChevronDown } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CtaButton from '@/components/CtaButton';
import { WHATSAPP_MAIN } from '@/lib/gym';
import fachada from '@/assets/images/hero-fachada.jpg';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-24">
      {/* Fotografia real da fachada */}
      <img
        src={fachada}
        alt="Fachada da MAXFIT Academy na Av. João Valéo, 1578, em Novo Horizonte - SP"
        className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        loading="eager"
        decoding="async"
        aria-hidden="true"
      />

      {/* Camadas de contraste dramático */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60"
      />
      <div aria-hidden="true" className="glow-gold absolute -left-40 top-1/4 h-[480px] w-[480px]" />
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-70" />

      <div className="container-page relative z-10">
        <Reveal delay={60}>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
            <MapPin size={13} className="text-gold" aria-hidden="true" />
            Novo Horizonte — SP
          </p>
        </Reveal>

        <Reveal delay={160}>
          <h1 className="mt-7 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
            Faça parte do time que <span className="text-gradient-gold">evolui.</span>
          </h1>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/75 sm:text-[17px]">
            Estrutura completa, as melhores máquinas e um atendimento de verdade que faz você se
            sentir em casa em Novo Horizonte.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <CtaButton
              href={WHATSAPP_MAIN}
              icon={<MessageCircle size={19} strokeWidth={2.2} aria-hidden="true" />}
              ariaLabel="Agendar aula experimental gratuita pelo WhatsApp"
              className="sm:px-8"
            >
              Agendar aula experimental gratuita
            </CtaButton>
            <CtaButton
              href="https://wa.me/5517992040508"
              variant="outline"
              icon={<MessageCircle size={18} strokeWidth={2} aria-hidden="true" />}
              ariaLabel="Falar no WhatsApp da MAXFIT Academy"
            >
              Falar no WhatsApp
            </CtaButton>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-white/60">
            <li className="flex items-center gap-2">
              <Clock size={15} className="text-gold" aria-hidden="true" />
              Seg–Sáb · das 05h00 às 21h30
            </li>
            <li className="hidden items-center gap-2 sm:flex">
              <MapPin size={15} className="text-gold" aria-hidden="true" />
              Av. João Valéo, 1578
            </li>
          </ul>
        </Reveal>
      </div>

      {/* Indicador de rolagem */}
      <a
        href="#diferenciais"
        aria-label="Explore: rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-white/70 transition-colors duration-300 hover:text-gold sm:flex"
      >
        <span className="text-[10.5px] font-medium uppercase tracking-[0.3em]">Explore</span>
        <ChevronDown size={17} className="animate-float" aria-hidden="true" />
      </a>
    </section>
  );
}
