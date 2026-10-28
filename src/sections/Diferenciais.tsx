import { MapPin, Car, Repeat, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { DIFERENCIAIS } from '@/data/site';
import dumbbells from '@/assets/images/dumbbells.jpg';
import abstractGold from '@/assets/images/abstract-gold.jpg';

const ICONS: Record<string, LucideIcon> = {
  'map-pin': MapPin,
  car: Car,
  repeat: Repeat,
};

export default function Diferenciais() {
  const [local, facilidade, constancia] = DIFERENCIAIS;

  return (
    <section id="diferenciais" className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div aria-hidden="true" className="glow-gold absolute right-[-200px] top-0 h-[420px] w-[420px]" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Diferenciais"
          title={
            <>
              Mais perto da sua rotina.
              <br />
              Mais perto da sua <span className="text-gradient-gold">evolução</span>.
            </>
          }
        />

        {/* Composição assimétrica: card grande + coluna de dois cards menores */}
        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {/* Card principal — Localização estratégica */}
          <Reveal className="lg:col-span-3" delay={60}>
            <article className="card-surface group relative h-full min-h-[300px] overflow-hidden p-8 transition-all duration-400 hover:-translate-y-1 sm:p-10">
              <img
                src={dumbbells}
                alt=""
                aria-hidden="true"
                loading="eager" decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/85 to-ink/40"
              />

              <div className="relative flex h-full flex-col">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-white sm:text-[1.7rem]">
                  {local.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-mist">{local.text}</p>
                <p className="mt-auto flex items-center gap-2 pt-7 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Novo Horizonte — SP
                  <ArrowUpRight size={15} aria-hidden="true" />
                </p>
              </div>
            </article>
          </Reveal>

          {/* Coluna com dois cards menores */}
          <div className="grid gap-5 lg:col-span-2">
            <Reveal delay={160}>
              <article className="card-surface group flex h-full items-start gap-5 p-7 transition-all duration-400 hover:-translate-y-1">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold transition-colors duration-300 group-hover:border-gold/40">
                  <Car size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-white">
                    {facilidade.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mist">{facilidade.text}</p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={260}>
              <article className="card-surface group relative h-full overflow-hidden p-7 transition-all duration-400 hover:-translate-y-1">
                <img
                  src={abstractGold}
                  alt=""
                  aria-hidden="true"
                  loading="eager" decoding="async"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rotate-12 object-cover opacity-20"
                />
                <div className="relative flex items-start gap-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold transition-colors duration-300 group-hover:border-gold/40">
                    <Repeat size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold tracking-tight text-white">
                      {constancia.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-mist">{constancia.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
