import { MessageCircle, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CtaButton from '@/components/CtaButton';
import { WHATSAPP_MAIN } from '@/lib/gym';
import halteres from '@/assets/images/halteres.jpg';
import abstractGold from '@/assets/images/abstract-gold.jpg';

const RITMOS = ['Seu ritmo.', 'Seus objetivos.', 'Seu próximo passo.'];

export default function Comunidade() {
  return (
    <section id="comunidade" className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <img
        src={abstractGold}
        alt=""
        aria-hidden="true"
        loading="eager" decoding="async"
        className="pointer-events-none absolute -left-40 top-0 h-[560px] w-[420px] rotate-6 object-cover opacity-25"
      />
      <div aria-hidden="true" className="glow-gold absolute bottom-[-140px] right-[-140px] h-[460px] w-[460px]" />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
                Experiência MAXFIT
              </p>
              <h2 className="mt-5 font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[2.7rem]">
                Você não precisa <span className="text-gradient-gold">treinar sozinho.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-xl text-[15.5px] leading-[1.8] text-white/72">
                Uma academia é feita de muito mais do que equipamentos. É feita das pessoas que
                chegam, dos objetivos que nascem, das pequenas conquistas e da constância construída
                treino após treino.
              </p>
              <p className="mt-5 max-w-xl text-[15.5px] leading-[1.8] text-white/72">
                Na MAXFIT Academy, queremos que você encontre um ambiente em que treinar faça
                sentido, seja acolhido e tenha espaço para evoluir.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-8 space-y-3">
                {RITMOS.map((item) => (
                  <li key={item} className="flex items-center gap-3.5">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rotate-45 bg-gold shadow-[0_0_12px_rgba(245,179,1,0.8)]"
                    />
                    <span className="font-display text-lg font-extrabold tracking-tight text-white sm:text-xl">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-display text-lg font-extrabold tracking-tight text-mist">
                Faça parte do time que{' '}
                <span className="text-gradient-gold">evolui.</span>
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/[0.06] p-7 backdrop-blur-sm">
                <p className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  <Sparkles size={19} className="text-gold" aria-hidden="true" />
                  Vamos começar sua evolução?
                </p>
                <CtaButton
                  href={WHATSAPP_MAIN}
                  icon={<MessageCircle size={19} strokeWidth={2.2} aria-hidden="true" />}
                  ariaLabel="Agendar minha aula experimental pelo WhatsApp"
                  className="mt-5 w-full sm:w-auto"
                >
                  Agendar minha aula experimental
                </CtaButton>
              </div>
            </Reveal>
          </div>

          {/* Fotografia real da área de musculação */}
          <Reveal delay={160} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-20 w-20 border-l-2 border-t-2 border-gold/60" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-2 border-r-2 border-gold/60" aria-hidden="true" />
            <figure className="relative overflow-hidden rounded-[22px] border border-white/10 shadow-card">
              <img
                src={halteres}
                alt="Halteres e equipamentos na área de musculação da MAXFIT Academy"
                loading="eager" decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-6 pb-5 pt-14 text-[12px] font-medium uppercase tracking-[0.2em] text-white/70">
                Musculação · Força · Condicionamento
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
