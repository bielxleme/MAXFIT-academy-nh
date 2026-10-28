export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Comunidade', href: '#comunidade' },
  { label: 'Localização', href: '#localizacao' },
];

export type Diferencial = {
  icon: 'map-pin' | 'car' | 'repeat';
  title: string;
  text: string;
};

export const DIFERENCIAIS: Diferencial[] = [
  {
    icon: 'map-pin',
    title: 'Localização estratégica',
    text: 'Uma academia em Novo Horizonte para encaixar o treino na sua rotina.',
  },
  {
    icon: 'car',
    title: 'Facilidade no dia a dia',
    text: 'Uma região tranquila, com facilidade de acesso e estacionamento, conforme a disponibilidade local.',
  },
  {
    icon: 'repeat',
    title: 'Mais constância, menos complicação',
    text: 'Quanto mais simples for chegar e treinar, mais fácil fica manter o compromisso com você.',
  },
];

export type Pilar = {
  title: string;
  text: string;
};

export const PILARES: Pilar[] = [
  {
    title: 'Horário que acompanha você',
    text: 'Treine de segunda a sábado, das 05h00 às 21h30, sem fechar ao meio-dia.',
  },
  {
    title: 'Atendimento de verdade',
    text: 'Mais do que frequentar uma academia: ser recebido com atenção, criar conexões e se sentir parte do time.',
  },
  {
    title: 'Estrutura para treinar',
    text: 'Um ambiente preparado para acompanhar sua rotina de musculação, força e condicionamento físico.',
  },
  {
    title: 'Comunidade que incentiva',
    text: 'Cada pessoa tem sua jornada. Aqui, a proposta é evoluir no seu ritmo e valorizar a constância.',
  },
];
