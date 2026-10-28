import { Clock, HeartHandshake, Dumbbell, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import cardio from '@/assets/images/cardio.jpg';
import atendimento from '@/assets/images/atendimento.jpg';
import sala from '@/assets/images/sala-treino.jpg';
import abstractGold from '@/assets/images/abstract-gold.jpg';

export default function Estrutura() {
  return (
    <section id="estrutura" className="relative overflow-hidden bg-graphite py-24 sm:py-28">
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-60" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Estrutura & pilares"
          title={
            <>
              Tudo para você evoluir.{' '}
              <span className="text-gradient-gold">Um ambiente para você pertencer.</span>
            </>
          }
        />

        {/* Bento Grid */}
        <div className="mt-14 grid auto-rows-auto gap-5 md:grid-cols-3">
          {/* Card 1 — Horário (grande, com fotografia real) */}
          <Reveal className="md:col-span-2" delay={60}>
            <article className="group relative h-full min-h-[320px] overflow-hidden rounded-[20px] border border-white/10 transition-all duration-400 hover:-translate-y-1 hover:border-gold/40">
              <img
                src={cardio}
                alt="Área de cardio da MAXFIT Academy com esteiras e iluminação em tons quentes"
                loading="eager" decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"
              />
              <div className="relative flex h-full min-h-[320px] flex-col justify-end p-8 sm:p-9">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-ink/70 text-gold backdrop-blur-sm">
                  <Clock size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white">
                  Horário que acompanha você
                </h3>
                <p className="mt-2.5 max-w-lg text-[14.5px] leading-relaxed text-white/75">
                  Treine de segunda a sábado, das <strong className="font-semibold text-gold">05h00 às 21h30</strong>, sem fechar ao meio-dia.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Card 2 — Atendimento */}
          <Reveal delay={160}>
            <article className="card-surface group flex h-full min-h-[320px] flex-col overflow-hidden transition-all duration-400 hover:-translate-y-1">
              <div className="relative h-40 shrink-0 overflow-hidden">
                <img
                  src={atendimento}
                  alt="Aluno treinando na MAXFIT Academy com acompanhamento de perto"
                  loading="eager" decoding="async"
                  className="h-full w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold">
                  <HeartHandshake size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight text-white">
                  Atendimento de verdade
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-mist">
                  Mais do que frequentar uma academia: ser recebido com atenção, criar conexões e se
                  sentir parte do time.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Card 3 — Estrutura */}
          <Reveal delay={100}>
            <article className="card-surface group flex h-full min-h-[320px] flex-col overflow-hidden transition-all duration-400 hover:-translate-y-1">
              <div className="relative h-40 shrink-0 overflow-hidden">
                <img
                  src={sala}
                  alt="Sala de treino da MAXFIT Academy com equipamentos de musculação"
                  loading="eager" decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold">
                  <Dumbbell size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight text-white">
                  Estrutura para treinar
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-mist">
                  Um ambiente preparado para acompanhar sua rotina de musculação, força e
                  condicionamento físico.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Card 4 — Comunidade (grande, tipográfico) */}
          <Reveal className="md:col-span-2" delay={200}>
            <article className="card-surface group relative h-full min-h-[280px] overflow-hidden p-8 transition-all duration-400 hover:-translate-y-1 sm:p-10">
              <img
                src={abstractGold}
                alt=""
                aria-hidden="true"
                loading="eager" decoding="async"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50"
              />
              <div className="relative flex h-full flex-col justify-center">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-ink/60 text-gold backdrop-blur-sm">
                  <Users size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-white sm:text-[1.7rem]">
                  Comunidade que incentiva
                </h3>
                <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-white/75">
                  Cada pessoa tem sua jornada. Aqui, a proposta é{' '}
                  <span className="text-gradient-gold font-semibold">evoluir no seu ritmo</span> e
                  valorizar a constância.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
