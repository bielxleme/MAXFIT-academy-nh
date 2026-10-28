import { MapPin, Clock, Navigation, MessageCircle, Instagram } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import CtaButton from '@/components/CtaButton';
import { GYM, MAPS_URL, WHATSAPP_MAIN } from '@/lib/gym';
import fachada from '@/assets/images/hero-fachada.jpg';

export default function Localizacao() {
  return (
    <section id="localizacao" className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div aria-hidden="true" className="grid-pattern absolute inset-0 opacity-50" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Localização & contato"
          title={
            <>
              Estamos em <span className="text-gradient-gold">Novo Horizonte.</span> Vem conhecer!
            </>
          }
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Cartão de informações */}
          <Reveal delay={60}>
            <div className="card-surface flex h-full flex-col p-8 transition-colors duration-400 sm:p-10">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-white">
                    Endereço
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-mist">
                    {GYM.address.street} - {GYM.address.neighborhood}
                    <br />
                    {GYM.address.city} - {GYM.address.state}, CEP {GYM.address.cep}
                  </p>
                </div>
              </div>

              <hr className="my-7 border-white/8" />

              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Clock size={19} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-white">
                    Funcionamento
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-mist">
                    {GYM.hours.days}, das <strong className="font-semibold text-white">{GYM.hours.time}</strong>,{' '}
                    {GYM.hours.note}.
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-9">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <CtaButton
                    href={MAPS_URL}
                    icon={<Navigation size={18} strokeWidth={2.2} aria-hidden="true" />}
                    ariaLabel="Como chegar à MAXFIT Academy pelo Google Maps"
                  >
                    Como chegar
                  </CtaButton>
                  <CtaButton
                    href={WHATSAPP_MAIN}
                    variant="outline"
                    icon={<MessageCircle size={18} strokeWidth={2} aria-hidden="true" />}
                    ariaLabel="Falar no WhatsApp da MAXFIT Academy"
                  >
                    Falar no WhatsApp
                  </CtaButton>
                </div>

                <a
                  href={GYM.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2.5 text-[14px] font-medium text-mist transition-colors duration-300 hover:text-gold"
                >
                  <Instagram size={17} aria-hidden="true" />
                  @maxfitacademy
                </a>
              </div>
            </div>
          </Reveal>

          {/* Fotografia real da fachada */}
          <Reveal delay={180}>
            <figure className="group relative h-full overflow-hidden rounded-[20px] border border-white/10 shadow-card">
              <img
                src={fachada}
                alt="Fachada da MAXFIT Academy, academia na Av. João Valéo, 1578, em Novo Horizonte - SP"
                loading="eager" decoding="async"
                className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-ink/75 px-4 py-2.5 text-[12.5px] font-medium text-white backdrop-blur-md">
                <MapPin size={14} className="text-gold" aria-hidden="true" />
                Av. João Valéo, 1578 — Novo Horizonte, SP
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
