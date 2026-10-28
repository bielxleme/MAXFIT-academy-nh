import { MessageCircle, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CtaButton from '@/components/CtaButton';
import { WHATSAPP_MAIN } from '@/lib/gym';

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-graphite py-24 sm:py-28" aria-label="Chamada final">
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="glow-gold absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2" />
      {/* Faixa diagonal dourada discreta */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-8 h-[2px] w-72 rotate-45 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-28 bottom-10 h-[2px] w-64 -rotate-45 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />

      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
            Seu próximo passo <span className="text-gradient-gold">começa aqui.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-mist">
            Venha conhecer a MAXFIT Academy e descubra como encaixar o treino na sua rotina.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <CtaButton
              href={WHATSAPP_MAIN}
              icon={<ArrowRight size={19} strokeWidth={2.2} aria-hidden="true" />}
              ariaLabel="Quero agendar uma aula experimental pelo WhatsApp"
              className="w-full sm:w-auto"
            >
              Quero agendar uma aula experimental
            </CtaButton>
            <CtaButton
              href="https://wa.me/5517992040508"
              variant="outline"
              icon={<MessageCircle size={18} strokeWidth={2} aria-hidden="true" />}
              ariaLabel="Conversar pelo WhatsApp da MAXFIT Academy"
              className="w-full sm:w-auto"
            >
              Conversar pelo WhatsApp
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
