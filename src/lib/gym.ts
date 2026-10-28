/**
 * Fontes oficiais da MAXFIT Academy.
 * Estes dados não podem ser alterados sem confirmação do cliente.
 */

export const GYM = {
  name: 'MAXFIT Academy',
  tagline: 'Faça parte do time que evolui — Estrutura completa + atendimento de verdade.',
  phoneDisplay: '(17) 99204-0508',
  whatsappNumber: '5517992040508',
  instagram: 'https://www.instagram.com/maxfitacademy/',
  address: {
    street: 'Av. João Valéo, 1578',
    neighborhood: 'Residencial Vale do Sol II',
    city: 'Novo Horizonte',
    state: 'SP',
    cep: '14960-590',
    full: 'Av. João Valéo, 1578 - Residencial Vale do Sol II, Novo Horizonte - SP, CEP 14960-590',
  },
  hours: {
    days: 'Segunda a sábado',
    time: '05h00 às 21h30',
    note: 'sem fechar ao meio-dia',
    full: 'Segunda a sábado, das 05h00 às 21h30, sem fechar ao meio-dia.',
  },
} as const;

const SCHEDULING_MESSAGE =
  'Olá! Vim pelo site da MAXFIT Academy e gostaria de saber como agendar minha aula experimental.';

/** Link direto para o WhatsApp com a mensagem inicial contextualizada. */
export const whatsappUrl = (message: string = SCHEDULING_MESSAGE): string =>
  `https://wa.me/${GYM.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MAIN = whatsappUrl();

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'MAXFIT Academy, Av. João Valéo, 1578 - Residencial Vale do Sol II, Novo Horizonte - SP, 14960-590'
)}`;
