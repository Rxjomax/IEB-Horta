/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRAL DA IEB HORTA
 * ----------------------------------------------------------------------------
 * Informações e imagens reais do Instagram @iebhorta e dos registos oficiais
 * da Igreja Evangélica Baptista da Horta (Av. Marginal, n.º 17, Ilha do Faial).
 * ============================================================================
 */

export interface HeroSlide {
  id: string;
  image: string;
  targetHref: string;
  aboutTab?: 'historia' | 'cremos' | 'cooperacao';
}

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

export interface BeliefArticle {
  id: string;
  number: string;
  references: string;
}

export interface CooperationPartner {
  id: string;
  url: string;
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

export interface ArchiveFeatureItem {
  id: string;
  image: string;
  actionType: 'youtube' | 'instagram' | 'visit';
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
  pastor: 'Pr. Luiz Eduardo Júnior',
  email: 'iebhorta@gmail.com',
  handle: '@iebhorta',
  instagramUrl: 'https://www.instagram.com/iebhorta/',
  facebookUrl: 'https://www.facebook.com/IEBHorta/',
  youtubeUrl: 'https://www.youtube.com/@iebhorta',
  whatsappNumber: '351925670000', // Substituir pelo número completo de WhatsApp da igreja
  whatsappMessage:
    'Olá! Gostava de saber mais sobre os cultos da Igreja Evangélica Baptista da Horta e planear a minha visita.',

  // Morada principal e coordenadas oficiais (Av. Marginal, n.º 17, Horta)
  address: 'Av. Marginal, n.º 17, 9900-114 Horta',
  addressRegion: 'Matriz · Ilha do Faial, Açores, Portugal',
  ebdTempAddress: 'Rua do Pasteleiro, n.º 12-D — Angústias (Salas da EBD 16h)',
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

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'welcome',
    image: '/src/assets/images/hero_sanctuary_light_1794848338268.jpg',
    targetHref: '#visita',
  },
  {
    id: 'sunday-worship',
    image: '/assets/instagram/templo_culto_real.jpg',
    targetHref: '#horarios',
  },
  {
    id: 'church-family',
    image: '/assets/instagram/familia_iebhorta.jpg',
    targetHref: '#essencia',
    aboutTab: 'historia',
  },
];

export const BELIEF_ARTICLES: BeliefArticle[] = [
  {
    id: 'scriptures',
    number: '01',
    references: '2 Timóteo 3:16-17 · Salmos 119:105',
  },
  {
    id: 'triune-god',
    number: '02',
    references: 'Mateus 28:19 · João 1:1-14 · Romanos 5:8',
  },
  {
    id: 'salvation',
    number: '03',
    references: 'Efésios 2:8-9 · João 3:16 · Romanos 10:9',
  },
  {
    id: 'local-church',
    number: '04',
    references: 'Atos 2:41-47 · 1 Coríntios 12:12-27',
  },
  {
    id: 'ordinances',
    number: '05',
    references: 'Romanos 6:3-4 · 1 Coríntios 11:23-26',
  },
  {
    id: 'kingdom-mission',
    number: '06',
    references: 'Mateus 28:18-20 · 1 Tessalonicenses 5:18',
  },
];

export const COOPERATION_PARTNERS: CooperationPartner[] = [
  {
    id: 'cbp',
    url: 'https://www.convencaobaptista.pt/',
  },
  {
    id: 'aba',
    url: 'https://www.instagram.com/iebhorta/',
  },
  {
    id: 'aep',
    url: 'https://www.aliancaevangelica.pt/',
  },
  {
    id: 'stb',
    url: 'https://www.seminariobaptista.pt/',
  },
  {
    id: 'ebf',
    url: 'https://www.ebf.org/',
  },
  {
    id: 'bwa',
    url: 'https://www.baptistworld.org/',
  },
];

export const CHURCH_LOCATIONS: ChurchLocation[] = [
  {
    id: 'templo',
    label: 'Templo Principal',
    title: 'Culto de Celebração & EBD (10h00)',
    address: 'Av. Marginal, n.º 17, 9900-114 Horta',
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
    address: 'Rua do Pasteleiro, n.º 12-D, Angústias',
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
    location: 'Av. Marginal, n.º 17 — Horta',
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
      'Estudo bíblico por idades às 10h00 na Av. Marginal, n.º 17, ou às 16h00 na Rua do Pasteleiro, n.º 12-D (Angústias).',
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
 * MINISTÉRIOS (EXIBIDOS COM NAVEGAÇÃO POR ABAS NO DESKTOP E ACORDEÃO NO MOBILE)
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
    id: 'infantil-ebd',
    number: '03',
    title: 'Escola Bíblica & Infantil',
    summary: 'Salas separadas para crianças, adolescentes e adultos.',
    schedule: 'Domingos às 10h00 e às 16h00',
    audience: 'Todas as idades',
    description:
      'Ensino bíblico adequado a cada faixa etária — com salas para crianças, adolescentes e adultos, além de atividades criativas para pais e filhos.',
    image: '/assets/instagram/horarios_ebd_celebracao.jpg',
    imageAlt: 'Bíblia aberta sobre mesa com horários da Escola Bíblica Dominical da IEB Horta',
  },
  {
    id: 'acao-social',
    number: '04',
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
    number: '05',
    title: 'Batismo & Discipulado',
    summary: 'Primeiros passos na fé cristã e acompanhamento pastoral.',
    schedule: 'Acompanhamento com o Pr. Luiz Eduardo Júnior',
    audience: 'Visitantes e novos membros',
    description:
      'Estudo bíblico próximo para conhecer os fundamentos do Evangelho, esclarecer dúvidas, preparar para o batismo e integrar a igreja.',
    image: '/assets/instagram/pr_luiz_pregacao.jpg',
    imageAlt: 'Pr. Luiz Eduardo Júnior a ministrar as Escrituras no templo',
  },
];

/**
 * DESTAQUES DE ARQUIVOS & EVENTOS (INSPIRADO NA SECÇÃO ARQUIVOS/EVENTOS)
 */
export const COMMUNITY_ARCHIVES: ArchiveFeatureItem[] = [
  {
    id: 'archive-palavra',
    image: '/assets/instagram/pr_luiz_pregacao.jpg',
    actionType: 'youtube',
  },
  {
    id: 'archive-51anos',
    image: '/assets/instagram/aniversario_51_anos.jpg',
    actionType: 'instagram',
  },
  {
    id: 'archive-familia',
    image: '/assets/instagram/dia_da_familia.jpg',
    actionType: 'visit',
  },
  {
    id: 'archive-gracas',
    image: '/assets/instagram/dai_gracas_acores.jpg',
    actionType: 'instagram',
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
    alt: 'Pr. Luiz Eduardo Júnior a ministrar a Palavra no templo da IEB Horta',
    category: 'Momento da Palavra',
    dateLabel: '1 Cor 10:31',
    caption:
      'Pr. Luiz Eduardo a partilhar as Escrituras no templo: “Quer comais, quer bebais ou façais outra qualquer coisa, fazei tudo para a glória de Deus.”',
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
      'Todos os domingos na Av. Marginal, n.º 17 — Horta: às 10h00 Escola Bíblica Dominical e às 11h15 Culto de Celebração.',
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
