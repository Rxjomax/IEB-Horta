/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRAL DA IEB HORTA
 * ----------------------------------------------------------------------------
 * Informações e imagens reais do Boletim Mensal (Novembro 2026), do Instagram
 * @iebhorta e dos registos oficiais da Igreja Evangélica Baptista da Horta.
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
  icon: 'sun' | 'book' | 'home' | 'smile';
}

export interface BulletinAgendaItem {
  id: string;
  dayMonth: string;
  isoDate: string;
  isHighlight?: boolean;
}

export interface EssencePillar {
  number: string;
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
  image: string;
}

export interface GalleryPost {
  id: string;
  filterGroup: 'cultos' | 'comunidade' | 'acao-social';
  image: string;
}

export interface ArchiveFeatureItem {
  id: string;
  image: string;
  actionType: 'youtube' | 'instagram' | 'visit' | 'bulletin';
}

export interface ChurchLocation {
  id: 'templo' | 'ebd';
  address: string;
  googleMapsUrl: string;
  wazeUrl: string;
}

export const CHURCH_INFO = {
  shortName: 'IEB Horta',
  fullName: 'Igreja Evangélica Baptista da Horta',
  affiliation: 'Convenção Baptista Portuguesa · 51 Anos no Faial',
  pastor: 'Pr. Luiz Eduardo Júnior',
  pastorPhoneDisplay: '933 855 290',
  pastorEmail: 'eduyas29@gmail.com',
  email: 'iebhorta@gmail.com',
  handle: '@iebhorta',
  instagramUrl: 'https://www.instagram.com/iebhorta/',
  facebookUrl: 'https://www.facebook.com/IEBHorta/',
  youtubeUrl: 'https://www.youtube.com/@iebhorta',
  whatsappNumber: '351933855290',

  // Morada da sede oficial (Boletim Novembro 2026) e local atual de cultos desde 08/11
  address: 'Av. Marginal, n.º 17, 9900-121 Horta',
  worshipVenueName: 'Instalações da Igreja Assembleia de Deus do Faial',
  addressRegion: 'Ilha do Faial, Açores, Portugal',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Igreja+Assembleia+de+Deus+do+Faial+Horta+Acores',
  wazeUrl:
    'https://waze.com/ul?q=Assembleia%20de%20Deus%20do%20Faial%20Horta%20Acores&navigate=yes',

  // Logos oficiais da igreja (versões coloridas Atlântico & Bronze)
  logos: {
    horizontal: '/assets/logos/logo_horizontal_colored.png',
    circularSeal: '/assets/logos/logo_seal_colored.png',
    darkGoldSeal: '/assets/logos/logo_seal_dark_gold.png',
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
    targetHref: '#agenda-novembro',
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

/**
 * AGENDA DO MÊS — BOLETIM DE NOVEMBRO 2026
 */
export const NOVEMBER_AGENDA: BulletinAgendaItem[] = [
  { id: 'nov-01', dayMonth: '01/11', isoDate: '2026-11-01' },
  { id: 'nov-07', dayMonth: '07/11', isoDate: '2026-11-07' },
  { id: 'nov-08', dayMonth: '08/11', isoDate: '2026-11-08', isHighlight: true },
  { id: 'nov-15', dayMonth: '15/11', isoDate: '2026-11-15' },
  { id: 'nov-22', dayMonth: '22/11', isoDate: '2026-11-22' },
  { id: 'nov-27', dayMonth: '27/11', isoDate: '2026-11-27', isHighlight: true },
  { id: 'nov-29', dayMonth: '29/11', isoDate: '2026-11-29' },
];

export const NOVEMBER_PRAYER_IDS = [
  'families',
  'new-decisions',
  'jean-lima',
  'church-future',
  'sao-jorge',
  'health',
  'relatives',
  'country',
  'persecuted',
  'disasters',
  'convention-aba',
] as const;

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
    id: 'ebd',
    address: 'Instalações da Igreja Assembleia de Deus do Faial, Horta',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Igreja+Assembleia+de+Deus+do+Faial+Horta+Acores',
    wazeUrl:
      'https://waze.com/ul?q=Assembleia%20de%20Deus%20do%20Faial%20Horta%20Acores&navigate=yes',
  },
  {
    id: 'templo',
    address: 'Av. Marginal, n.º 17, 9900-121 Horta',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=38.540579,-28.6253875',
    wazeUrl: 'https://waze.com/ul?ll=38.540579,-28.6253875&navigate=yes',
  },
];

/**
 * HORÁRIOS DE CULTOS E PROGRAMAÇÃO SEMANAL (BOLETIM NOVEMBRO 2026)
 */
export const WEEKLY_SCHEDULE: ScheduleItem[] = [
  {
    id: 'ebd',
    category: 'domingo',
    icon: 'book',
  },
  {
    id: 'celebracao',
    category: 'domingo',
    icon: 'sun',
  },
  {
    id: 'oracao-lares',
    category: 'semana',
    icon: 'home',
  },
  {
    id: 'kids-familia',
    category: 'semana',
    icon: 'smile',
  },
];

/**
 * PILARES DA ESSÊNCIA DA IGREJA
 */
export const ESSENCE_PILLARS: EssencePillar[] = [
  { number: '01' },
  { number: '02' },
  { number: '03' },
];

/**
 * MINISTÉRIOS (EXIBIDOS COM NAVEGAÇÃO POR ABAS NO DESKTOP E ACORDEÃO NO MOBILE)
 */
export const MINISTRIES: MinistryItem[] = [
  {
    id: 'jovens',
    number: '01',
    image: '/assets/instagram/oracao_primeiro_lugar.jpg',
  },
  {
    id: 'casais',
    number: '02',
    image: '/assets/instagram/plenas_em_cristo_clean.jpg',
  },
  {
    id: 'infantil-ebd',
    number: '03',
    image: '/assets/instagram/horarios_ebd_celebracao.jpg',
  },
  {
    id: 'acao-social',
    number: '04',
    image: '/assets/instagram/acao_social_alimentos.jpg',
  },
  {
    id: 'batismo-discipulado',
    number: '05',
    image: '/assets/instagram/pr_luiz_pregacao.jpg',
  },
];

/**
 * DESTAQUES DE ARQUIVOS & EVENTOS
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
    actionType: 'bulletin',
  },
  {
    id: 'archive-gracas',
    image: '/assets/instagram/dai_gracas_acores.jpg',
    actionType: 'visit',
  },
  {
    id: 'archive-familia',
    image: '/assets/instagram/dia_da_familia.jpg',
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
  },
  {
    id: 'post-schedule',
    filterGroup: 'cultos',
    image: '/assets/instagram/horarios_ebd_celebracao.jpg',
  },
  {
    id: 'post-social',
    filterGroup: 'acao-social',
    image: '/assets/instagram/acao_social_alimentos.jpg',
  },
  {
    id: 'post-51-anos',
    filterGroup: 'comunidade',
    image: '/assets/instagram/aniversario_51_anos.jpg',
  },
  {
    id: 'post-familia',
    filterGroup: 'comunidade',
    image: '/assets/instagram/dia_da_familia.jpg',
  },
  {
    id: 'post-dai-gracas',
    filterGroup: 'cultos',
    image: '/assets/instagram/dai_gracas_acores.jpg',
  },
];
