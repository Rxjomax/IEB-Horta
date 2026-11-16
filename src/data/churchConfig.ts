/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRAL DA IEB HORTA
 * ----------------------------------------------------------------------------
 * Informações e imagens reais do Instagram @iebhorta e dos registos oficiais
 * da Igreja Evangélica Baptista da Horta (Av. Marginal, nº 17, Ilha do Faial).
 * ============================================================================
 */

export interface ScheduleItem {
  id: string;
  category: 'domingo' | 'semana';
  title: string;
  day: string;
  times: string[];
  location: string;
  description: string;
  icon: 'sun' | 'book' | 'home' | 'smile';
}

export interface EssencePillar {
  number: string;
  title: string;
  description: string;
}

export interface MinistryItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  schedule: string;
  audience: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface GalleryPost {
  id: string;
  filterGroup: 'cultos' | 'comunidade' | 'acao-social';
  image: string;
  alt: string;
  category: string;
  dateLabel: string;
  caption: string;
  scripture?: string;
}

export interface ChurchLocation {
  id: 'templo' | 'ebd';
  label: string;
  title: string;
  address: string;
  region: string;
  note: string;
  googleMapsUrl: string;
  wazeUrl: string;
}

export const CHURCH_INFO = {
  shortName: 'IEB Horta',
  fullName: 'Igreja Evangélica Baptista da Horta',
  affiliation: 'Convenção Baptista Portuguesa · 51 Anos no Faial',
  pastor: 'Pr. Luíz Eduardo Júnior',
  email: 'iebhorta@gmail.com',
  handle: '@iebhorta',
  instagramUrl: 'https://www.instagram.com/iebhorta/',
  facebookUrl: 'https://www.facebook.com/IEBHorta/',
  youtubeUrl: 'https://www.youtube.com/@iebhorta',
  whatsappNumber: '351925670000', // Substituir pelo número completo de WhatsApp da igreja
  whatsappMessage:
    'Olá! Gostava de saber mais sobre os cultos da Igreja Evangélica Baptista da Horta e planear a minha visita.',

  // Morada principal e coordenadas oficiais (Av. Marginal, nº 17, Horta)
  address: 'Av. Marginal, nº 17, 9900-114 Horta',
  addressRegion: 'Matriz · Ilha do Faial, Açores, Portugal',
  ebdTempAddress: 'Rua do Pasteleiro, nº 12-D — Angústias (Salas da EBD 16h)',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=38.540579,-28.6253875',
  wazeUrl: 'https://waze.com/ul?ll=38.540579,-28.6253875&navigate=yes',

  // Logos oficiais enviadas pela igreja
  logos: {
    horizontal: '/assets/aistudio/image_af8255b7.png',
    circularSeal: '/assets/aistudio/image_818a1ea6.png',
  },

  // Imagens reais do @iebhorta + imagem widescreen de capa
  images: {
    hero: '/src/assets/images/hero_sanctuary_light_1794848338268.jpg',
    aboutFamily: '/assets/instagram/familia_iebhorta.jpg',
    aboutSanctuary: '/assets/instagram/templo_culto_real.jpg',
  },
};

export const CHURCH_LOCATIONS: ChurchLocation[] = [
  {
    id: 'templo',
    label: 'Templo Principal',
    title: 'Culto de Celebração & EBD (10h00)',
    address: 'Av. Marginal, nº 17, 9900-114 Horta',
    region: 'Matriz · Ilha do Faial, Açores, Portugal',
    note: 'Em frente à baía da Horta, com acesso fácil e receção acolhedora.',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=38.540579,-28.6253875',
    wazeUrl: 'https://waze.com/ul?ll=38.540579,-28.6253875&navigate=yes',
  },
  {
    id: 'ebd',
    label: 'Salas EBD (16h00)',
    title: 'Escola Bíblica Dominical (Domingo 16h00)',
    address: 'Rua do Pasteleiro, nº 12-D, Angústias',
    region: '9900 Horta · Ilha do Faial, Açores',
    note: 'Espaço temporário com salas separadas para Adultos, Adolescentes e Crianças.',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+do+Pasteleiro+12+Horta+Acores',
    wazeUrl:
      'https://waze.com/ul?q=Rua%20do%20Pasteleiro%2012%20Horta%20Acores&navigate=yes',
  },
];

/**
 * HORÁRIOS DE CULTOS E PROGRAMAÇÃO SEMANAL
 */
export const WEEKLY_SCHEDULE: ScheduleItem[] = [
  {
    id: 'celebracao',
    category: 'domingo',
    title: 'Culto de Celebração',
    day: 'Domingos',
    times: ['11h15'],
    location: 'Av. Marginal, nº 17 — Horta',
    description:
      'Culto dominical de louvor, comunhão e exposição bíblica. Nos meses de verão (julho e agosto), tem início às 11h00.',
    icon: 'sun',
  },
  {
    id: 'ebd',
    category: 'domingo',
    title: 'Escola Bíblica Dominical (EBD)',
    day: 'Domingos',
    times: ['10h00', '16h00'],
    location: 'Adultos, Adolescentes e Crianças',
    description:
      'Estudo bíblico por idades às 10h00 na Av. Marginal, nº 17, ou às 16h00 na Rua do Pasteleiro, nº 12-D (Angústias).',
    icon: 'book',
  },
  {
    id: 'oracao-lares',
    category: 'semana',
    title: 'Oração, Ensino e Pequenos Grupos',
    day: 'Durante a semana',
    times: ['Agenda @iebhorta'],
    location: 'Templo e lares no Faial',
    description:
      'Encontros semanais de oração, leitura das Escrituras e comunhão nos lares. Confirme os horários atualizados connosco.',
    icon: 'home',
  },
  {
    id: 'kids-familia',
    category: 'semana',
    title: 'Crianças, Pais & Famílias',
    day: 'Domingos e eventos',
    times: ['Programação familiar'],
    location: 'EBD Infantil e Parque da Salgueirinha',
    description:
      'Ensino bíblico criativo para crianças na EBD, oficinas em família na cidade e o tradicional Dia da Família ao ar livre.',
    icon: 'smile',
  },
];

/**
 * PILARES DA ESSÊNCIA DA IGREJA
 */
export const ESSENCE_PILLARS: EssencePillar[] = [
  {
    number: '01',
    title: 'Adoração',
    description:
      'Celebramos a Deus com reverência e alegria há 51 anos na Horta, mantendo Cristo e as Escrituras no centro de cada encontro.',
  },
  {
    number: '02',
    title: 'Comunhão',
    description:
      'Somos uma família intergeracional na Ilha do Faial — crianças, jovens, adultos e seniores a caminhar juntos e a cuidar uns dos outros.',
  },
  {
    number: '03',
    title: 'Serviço',
    description:
      'Vivemos o Evangelho além das paredes do templo através de campanhas solidárias, apoio alimentar e acolhimento próximo.',
  },
];

/**
 * MINISTÉRIOS (EXIBIDOS EM ACORDEÃO INTERATIVO COM FOTOS REAIS)
 */
export const MINISTRIES: MinistryItem[] = [
  {
    id: 'jovens',
    number: '01',
    title: 'Jovens & Adolescentes',
    summary: 'Salas dedicadas na EBD, comunhão e diálogo bíblico.',
    schedule: 'Domingos na EBD · Encontros semanais',
    audience: 'Adolescentes e jovens adultos',
    description:
      'Espaço para construir amizades verdadeiras, conversar abertamente sobre fé e o dia a dia e servir em conjunto na comunidade.',
    image: '/assets/instagram/oracao_primeiro_lugar.jpg',
    imageAlt: 'Mãos em oração em encontro de fé e reflexão da IEB Horta',
  },
  {
    id: 'casais',
    number: '02',
    title: 'Famílias & Mulheres',
    summary: 'Dia da Família, oficinas e encontros Plenas em Cristo.',
    schedule: 'Encontros periódicos e retiros',
    audience: 'Famílias, casais e mulheres',
    description:
      'Iniciativas como o Dia da Família no Parque da Salgueirinha, oficinas com crianças e o encontro de mulheres Plenas em Cristo.',
    image: '/assets/instagram/plenas_em_cristo_clean.jpg',
    imageAlt: 'Mulheres reunidas a cantar com viola durante o encontro Plenas em Cristo',
  },
  {
    id: 'acao-social',
    number: '03',
    title: 'Ação Social',
    summary: 'Recolha e partilha solidária de alimentos no Faial.',
    schedule: 'Campanhas contínuas de apoio local',
    audience: 'Aberto a todos os voluntários',
    description:
      'Mobilização de membros e amigos para recolher alimentos e apoiar famílias em necessidade na cidade da Horta.',
    image: '/assets/instagram/acao_social_alimentos.jpg',
    imageAlt: 'Compras solidárias e alimentos recolhidos pela Ação Social da IEB Horta',
  },
  {
    id: 'batismo-discipulado',
    number: '04',
    title: 'Batismo & Discipulado',
    summary: 'Primeiros passos na fé cristã e acompanhamento pastoral.',
    schedule: 'Acompanhamento com o Pr. Luíz Eduardo Júnior',
    audience: 'Visitantes e novos membros',
    description:
      'Estudo bíblico próximo para conhecer os fundamentos do Evangelho, esclarecer dúvidas, preparar para o batismo e integrar a igreja.',
    image: '/assets/instagram/pr_luiz_pregacao.jpg',
    imageAlt: 'Pr. Luíz Eduardo Júnior a ministrar as Escrituras no templo',
  },
];

/**
 * GALERIA REAL DO INSTAGRAM (@iebhorta)
 */
export const INSTAGRAM_POSTS: GalleryPost[] = [
  {
    id: 'post-preaching',
    filterGroup: 'cultos',
    image: '/assets/instagram/pr_luiz_pregacao.jpg',
    alt: 'Pr. Luíz Eduardo Júnior a ministrar a Palavra no templo da IEB Horta',
    category: 'Momento da Palavra',
    dateLabel: '1 Cor 10:31',
    caption:
      'Pr. Luíz Eduardo a partilhar as Escrituras no templo: “Quer comais, quer bebais ou façais outra qualquer coisa, fazei tudo para a glória de Deus.”',
    scripture: '1 Coríntios 10:31',
  },
  {
    id: 'post-schedule',
    filterGroup: 'cultos',
    image: '/assets/instagram/horarios_ebd_celebracao.jpg',
    alt: 'Publicação oficial de horários do @iebhorta: 10h00 Escola Bíblica Dominical e 11h15 Celebração na Av. Marginal, 17',
    category: 'Domingos',
    dateLabel: '10h00 & 11h15',
    caption:
      'Todos os domingos na Av. Marginal, nº 17 — Horta: às 10h00 Escola Bíblica Dominical e às 11h15 Culto de Celebração.',
  },
  {
    id: 'post-social',
    filterGroup: 'acao-social',
    image: '/assets/instagram/acao_social_alimentos.jpg',
    alt: 'Bagageira de viatura repleta de sacos de compras e leite recolhidos pela ação social da IEB Horta',
    category: 'Ação Social',
    dateLabel: 'Serviço',
    caption:
      'Gratidão por cada família que contribuiu para a partilha solidária de alimentos e bens essenciais na Ilha do Faial.',
  },
  {
    id: 'post-51-anos',
    filterGroup: 'comunidade',
    image: '/assets/instagram/aniversario_51_anos.jpg',
    alt: 'Cartaz comemorativo dos 51 anos da Igreja Evangélica Baptista da Horta — Sustentados pelo Amor de Deus',
    category: '51 Anos',
    dateLabel: 'Aniversário',
    caption:
      'A celebrar 51 anos de fidelidade na cidade da Horta — Sustentados pelo Amor de Deus, a servir gerações na ilha.',
    scripture: 'Romanos 5:8',
  },
  {
    id: 'post-familia',
    filterGroup: 'comunidade',
    image: '/assets/instagram/dia_da_familia.jpg',
    alt: 'Convite para o Dia da Família da IEB Horta no Parque da Salgueirinha, Feteira',
    category: 'Dia da Família',
    dateLabel: 'Feteira',
    caption:
      'Tempo de culto ao ar livre, convívio e almoço comunitário no Parque da Salgueirinha (Feteira) a reunir toda a igreja.',
  },
  {
    id: 'post-dai-gracas',
    filterGroup: 'cultos',
    image: '/assets/instagram/dai_gracas_acores.jpg',
    alt: 'Publicação de Ação de Graças do @iebhorta com versículo de 1 Tessalonicenses 5:18',
    category: 'Ação de Graças',
    dateLabel: '1 Ts 5:18',
    caption:
      'Fim de Semana de Ação de Graças: “Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.”',
    scripture: '1 Tessalonicenses 5:18',
  },
];

export const VISIT_DAY_OPTIONS = [
  'Domingo · 10h00 (Escola Bíblica)',
  'Domingo · 11h15 (Culto de Celebração)',
  'Domingo · 16h00 (EBD R. do Pasteleiro)',
  'Confirmar os horários da semana',
];

export const GROUP_SIZE_OPTIONS = ['Apenas eu', '2 pessoas', 'Família'];
