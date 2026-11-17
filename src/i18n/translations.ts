import type {
  ArchiveFeatureItem,
  BeliefArticle,
  ChurchLocation,
  CooperationPartner,
  EssencePillar,
  GalleryPost,
  HeroSlide,
  MinistryItem,
  ScheduleItem,
} from '../data/churchConfig';

export type LanguageCode = 'pt-PT' | 'pt-BR' | 'en' | 'fr' | 'es';

export interface LanguageOption {
  code: LanguageCode;
  shortCode: string;
  compactCode: string;
  label: string;
  htmlLang: string;
  intlLocale: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: 'pt-PT',
    shortCode: 'PT-PT',
    compactCode: 'PT',
    label: 'Português (Portugal)',
    htmlLang: 'pt-PT',
    intlLocale: 'pt-PT',
  },
  {
    code: 'pt-BR',
    shortCode: 'PT-BR',
    compactCode: 'BR',
    label: 'Português (Brasil)',
    htmlLang: 'pt-BR',
    intlLocale: 'pt-BR',
  },
  {
    code: 'en',
    shortCode: 'EN',
    compactCode: 'EN',
    label: 'English',
    htmlLang: 'en',
    intlLocale: 'en-US',
  },
  {
    code: 'fr',
    shortCode: 'FR',
    compactCode: 'FR',
    label: 'Français',
    htmlLang: 'fr',
    intlLocale: 'fr-FR',
  },
  {
    code: 'es',
    shortCode: 'ES',
    compactCode: 'ES',
    label: 'Español',
    htmlLang: 'es',
    intlLocale: 'es-ES',
  },
];

export interface LocalizedHeroSlideText {
  kicker: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  imageAlt: string;
}

export interface LocalizedScheduleText {
  title: string;
  day: string;
  times: string[];
  location: string;
  description: string;
}

export interface LocalizedPillarText {
  title: string;
  description: string;
}

export interface LocalizedBeliefText {
  title: string;
  summary: string;
}

export interface LocalizedCooperationText {
  name: string;
  scope: string;
  description: string;
}

export interface LocalizedMinistryText {
  title: string;
  summary: string;
  schedule: string;
  audience: string;
  description: string;
  imageAlt: string;
}

export interface LocalizedGalleryText {
  alt: string;
  category: string;
  dateLabel: string;
  caption: string;
  scripture?: string;
}

export interface LocalizedArchiveItemText {
  category: string;
  dateLabel: string;
  title: string;
  summary: string;
  actionLabel: string;
  imageAlt: string;
}

export interface LocalizedLocationText {
  label: string;
  title: string;
  region: string;
  note: string;
}

export interface SiteTranslations {
  meta: {
    title: string;
    description: string;
    skipToContent: string;
  };
  nav: {
    ariaMain: string;
    ariaMobile: string;
    ariaLanguage: string;
    languageMenuTitle: string;
    links: {
      schedule: string;
      essence: string;
      ministries: string;
      community: string;
      visit: string;
    };
    subLinks: {
      churchHistory: string;
      whatWeBelieve: string;
      cooperation: string;
      instagramFeed: string;
      archivesEvents: string;
      offeringsMission: string;
    };
    ctaVisit: string;
    ctaVisitDrawer: string;
    openMenu: string;
    closeMenu: string;
    closeNavDrawer: string;
    drawerSummary: string;
    whatsapp: string;
  };
  hero: {
    imageAlt: string;
    kickerYears: string;
    headline: string;
    subheadline: string;
    ctaVisit: string;
    ctaInstagram: string;
    watchYouTube: string;
    prevSlide: string;
    nextSlide: string;
    slideLabelPrefix: string;
    slides: Record<HeroSlide['id'], LocalizedHeroSlideText>;
    nextSundayAria: string;
    thisSundayToday: string;
    nextSundayLabel: string;
    ebdTitle: string;
    celebrationTitle: string;
    doorsOpenNote: string;
    calendarSaved: string;
    calendarSave: string;
    ebdStripTextBefore: string;
    ebdStripTextAfter: string;
    pastorLabel: string;
    whatsappMessage: string;
  };
  calendarIcs: {
    prodId: string;
    summary: string;
    description: string;
    fileName: string;
  };
  schedule: {
    kicker: string;
    heading: string;
    intro: string;
    filterAria: string;
    filters: {
      all: string;
      sunday: string;
      week: string;
    };
    calendarSaved: string;
    calendarSave: string;
    watchYouTube: string;
    confirmVisit: string;
    items: Record<ScheduleItem['id'], LocalizedScheduleText>;
  };
  about: {
    familyAlt: string;
    familyFallback: string;
    familyCaption: string;
    sanctuaryAlt: string;
    sanctuaryFallback: string;
    sanctuaryCaption: string;
    kicker: string;
    heading: string;
    sealAlt: string;
    tabsAria: string;
    tabs: {
      history: string;
      beliefs: string;
      cooperation: string;
    };
    paragraph1: string;
    paragraph2: string;
    quote: string;
    quoteFooter: string;
    pillarsLabel: string;
    swipeHint: string;
    pillars: Record<EssencePillar['number'], LocalizedPillarText>;
    beliefsIntro: string;
    beliefsItems: Record<BeliefArticle['id'], LocalizedBeliefText>;
    cooperationIntro: string;
    cooperationVisitLink: string;
    cooperationItems: Record<CooperationPartner['id'], LocalizedCooperationText>;
  };
  ministries: {
    kicker: string;
    heading: string;
    intro: string;
    ctaJoin: string;
    scheduleLabel: string;
    audienceLabel: string;
    items: Record<MinistryItem['id'], LocalizedMinistryText>;
  };
  gallery: {
    kickerPrefix: string;
    heading: string;
    followCta: string;
    tabsAria: string;
    tabs: {
      photos: string;
      archives: string;
      giving: string;
    };
    filterAria: string;
    filters: {
      allPrefix: string;
      worship: string;
      community: string;
      socialAction: string;
    };
    openDetailsPrefix: string;
    tapHint: string;
    closeLightbox: string;
    referenceLabel: string;
    prevPost: string;
    nextPost: string;
    viewOnInstagram: string;
    posts: Record<GalleryPost['id'], LocalizedGalleryText>;
    archivesIntro: string;
    archivesYouTubeCta: string;
    archivesItems: Record<ArchiveFeatureItem['id'], LocalizedArchiveItemText>;
    giving: {
      kicker: string;
      heading: string;
      paragraph1: string;
      paragraph2: string;
      pillars: Array<{ title: string; text: string }>;
      ctaWhatsApp: string;
      ctaEmail: string;
      whatsappMessage: string;
      mailSubject: string;
    };
  };
  visit: {
    kicker: string;
    heading: string;
    intro: string;
    spaceTabsAria: string;
    copyAddress: string;
    copiedAddress: string;
    visitorNotes: string[];
    googleMaps: string;
    openWaze: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    dayQuestion: string;
    dayAria: string;
    dayOptions: string[];
    groupQuestion: string;
    groupAria: string;
    groupSizeOptions: string[];
    noteLabel: string;
    notePlaceholder: string;
    interestSelected: string;
    removeInterest: string;
    submitCta: string;
    errorName: string;
    errorPhone: string;
    successTitlePrefix: string;
    successTitleSuffix: string;
    successBodyPrefix: string;
    successBodyFor: string;
    successBodyWithInterest: string;
    successBodySuffix: string;
    sendEmail: string;
    sendWhatsApp: string;
    newRegistration: string;
    mailSubjectPrefix: string;
    summaryGreeting: string;
    summaryInterestPrefix: string;
    summaryNotePrefix: string;
    contactLabel: string;
    locations: Record<ChurchLocation['id'], LocalizedLocationText>;
  };
  footer: {
    summary: string;
    navigationTitle: string;
    cooperationTitle: string;
    channelsTitle: string;
    instagramLabel: string;
    facebookLabel: string;
    youtubeLabel: string;
    whatsappLabel: string;
    rightsReserved: string;
    sundayLine: string;
  };
  mobileBar: {
    ariaLabel: string;
    map: string;
    schedule: string;
    whatsapp: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, SiteTranslations> = {
  'pt-PT': {
    meta: {
      title: 'IEB Horta — Igreja Evangélica Baptista da Horta',
      description:
        'Um lugar de fé, família e novos começos na Ilha do Faial. Horários de cultos, confissão de fé, ministérios, comunidade @iebhorta e planeie a sua visita à Igreja Evangélica Baptista da Horta.',
      skipToContent: 'Saltar para o conteúdo principal',
    },
    nav: {
      ariaMain: 'Navegação principal',
      ariaMobile: 'Menu móvel',
      ariaLanguage: 'Alterar idioma do site',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Programação',
        essence: 'Sobre',
        ministries: 'Ministérios',
        community: 'Conteúdos',
        visit: 'Contactos',
      },
      subLinks: {
        churchHistory: 'A Igreja (51 Anos)',
        whatWeBelieve: 'Em Que Cremos',
        cooperation: 'Cooperação Baptista',
        instagramFeed: 'Momentos @iebhorta',
        archivesEvents: 'Arquivos & Eventos',
        offeringsMission: 'Ofertas & Missão',
      },
      ctaVisit: 'Quero Visitar',
      ctaVisitDrawer: 'Planeie a sua Primeira Visita',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      closeNavDrawer: 'Fechar menu de navegação',
      drawerSummary: 'Domingos às 10h00 (EBD) e 11h15 (Celebração).',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Interior iluminado da igreja com luz natural da manhã e comunidade reunida',
      kickerYears: '51 Anos na Horta, Açores',
      headline: 'Um lugar de fé, família e novos começos.',
      subheadline:
        'Sustentados pelo amor de Deus na Ilha do Faial. Uma igreja cristã de portas abertas para caminhar consigo e com a sua família na Palavra e na comunhão.',
      ctaVisit: 'Planeie a sua Visita',
      ctaInstagram: 'Siga @iebhorta',
      watchYouTube: 'Cultos no YouTube',
      prevSlide: 'Destaque anterior',
      nextSlide: 'Próximo destaque',
      slideLabelPrefix: 'Destaque',
      slides: {
        welcome: {
          kicker: '51 Anos na Horta, Açores',
          headline: 'Um lugar de fé, família e novos começos.',
          subheadline:
            'Sustentados pelo amor de Deus na Ilha do Faial. Uma igreja cristã de portas abertas para caminhar consigo e com a sua família na Palavra e na comunhão.',
          ctaLabel: 'Planeie a sua Visita',
          imageAlt:
            'Interior iluminado da igreja com luz natural da manhã e comunidade reunida',
        },
        'sunday-worship': {
          kicker: 'Av. Marginal, n.º 17 · Todos os Domingos',
          headline: 'Adoração, ensino bíblico e comunhão no coração da Horta.',
          subheadline:
            'Reunimo-nos aos domingos às 10h00 na Escola Bíblica Dominical (ou às 16h00 nas Angústias) e às 11h15 no Culto de Celebração.',
          ctaLabel: 'Ver Programação',
          imageAlt:
            'Interior do templo da Igreja Evangélica Baptista da Horta na Avenida Marginal',
        },
        'church-family': {
          kicker: 'Filiada à Convenção Baptista Portuguesa',
          headline: 'Uma família espiritual para todas as gerações no Faial.',
          subheadline:
            'Crianças, jovens, casais e seniores unidos pelo Evangelho de Jesus Cristo, a servir a nossa cidade com esperança e simplicidade.',
          ctaLabel: 'Conhecer a Igreja',
          imageAlt:
            'Membros e crianças da Igreja Evangélica Baptista da Horta reunidos em família',
        },
      },
      nextSundayAria: 'Próximo encontro dominical',
      thisSundayToday: 'Neste Domingo (Hoje)',
      nextSundayLabel: 'Próximo Domingo',
      ebdTitle: 'Escola Bíblica Dominical',
      celebrationTitle: 'Culto de Celebração',
      doorsOpenNote: 'Portas abertas a toda a família.',
      calendarSaved: 'Convite (.ics) guardado',
      calendarSave: 'Adicionar domingo à agenda',
      ebdStripTextBefore: 'EBD às',
      ebdStripTextAfter: 'na Rua do Pasteleiro, n.º 12-D (Angústias)',
      pastorLabel: 'Pastorado:',
      whatsappMessage:
        'Olá! Gostava de saber mais sobre os cultos da Igreja Evangélica Baptista da Horta e planear a minha visita.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Agenda Dominical//PT',
      summary: 'Culto de Celebração — IEB Horta',
      description:
        'Escola Bíblica Dominical às 10h00 e Culto de Celebração na Igreja Evangélica Baptista da Horta. Portas abertas!',
      fileName: 'culto-ieb-horta.ics',
    },
    schedule: {
      kicker: 'Programação Semanal',
      heading: 'Horários para nos reunirmos em família',
      intro:
        'Aos domingos, reunimo-nos para estudar as Escrituras na Escola Bíblica Dominical e celebrar juntos no culto da manhã. Caso seja a sua primeira visita, será muito bem-vindo.',
      filterAria: 'Filtrar programação',
      filters: {
        all: 'Toda a agenda',
        sunday: 'Domingos',
        week: 'Semana & Famílias',
      },
      calendarSaved: 'Evento guardado (.ics)',
      calendarSave: 'Guardar culto no calendário',
      watchYouTube: 'Ver no YouTube',
      confirmVisit: 'Confirmar visita',
      items: {
        celebracao: {
          title: 'Culto de Celebração',
          day: 'Domingos',
          times: ['11h15'],
          location: 'Av. Marginal, n.º 17 — Horta',
          description:
            'Culto dominical de louvor, comunhão e exposição bíblica. Nos meses de verão (julho e agosto), tem início às 11h00.',
        },
        ebd: {
          title: 'Escola Bíblica Dominical (EBD)',
          day: 'Domingos',
          times: ['10h00', '16h00'],
          location: 'Adultos, Adolescentes e Crianças',
          description:
            'Estudo bíblico por idades às 10h00 na Av. Marginal, n.º 17, ou às 16h00 na Rua do Pasteleiro, n.º 12-D (Angústias).',
        },
        'oracao-lares': {
          title: 'Oração, Ensino e Pequenos Grupos',
          day: 'Durante a semana',
          times: ['Agenda @iebhorta'],
          location: 'Templo e lares no Faial',
          description:
            'Encontros semanais de oração, leitura das Escrituras e comunhão nos lares. Confirme os horários atualizados connosco.',
        },
        'kids-familia': {
          title: 'Crianças, Pais & Famílias',
          day: 'Domingos e eventos',
          times: ['Programação familiar'],
          location: 'EBD Infantil e Parque da Salgueirinha',
          description:
            'Ensino bíblico criativo para crianças na EBD, oficinas em família na cidade e o tradicional Dia da Família ao ar livre.',
        },
      },
    },
    about: {
      familyAlt:
        'Membros e crianças da Igreja Evangélica Baptista da Horta reunidos em família',
      familyFallback: 'Família IEB Horta',
      familyCaption: 'A nossa família reunida na Horta.',
      sanctuaryAlt:
        'Interior do templo da IEB Horta na Avenida Marginal com bancos de madeira e cruz',
      sanctuaryFallback: 'Templo Av. Marginal, 17',
      sanctuaryCaption: 'Culto no templo · Av. Marginal, 17.',
      kicker: 'Sobre a Igreja',
      heading: 'Amar a Deus, servir pessoas e viver o Evangelho na ilha.',
      sealAlt: 'Selo oficial Igreja Evangélica Baptista da Horta',
      tabsAria: 'Explorar história, fé e cooperação',
      tabs: {
        history: 'A Igreja',
        beliefs: 'Em Que Cremos',
        cooperation: 'Cooperação',
      },
      paragraph1:
        'Há 51 anos na Ilha do Faial, a Igreja Evangélica Baptista da Horta, filiada à Convenção Baptista Portuguesa, caminha como uma família espiritual onde cada pessoa é acolhida pelo nome e encorajada a crescer na fé em Jesus Cristo.',
      paragraph2:
        'Cremos que a fé cristã se expressa tanto na reverência da adoração dominical como no cuidado prático durante a semana — a apoiar famílias, a formar discípulos e a servir a nossa comunidade com generosidade.',
      quote:
        '“Mas Deus prova o seu amor para connosco, em que Cristo morreu por nós, sendo nós ainda pecadores.”',
      quoteFooter: 'Romanos 5:8 · Lema dos 51 Anos · Pr. Luiz Eduardo Júnior',
      pillarsLabel: 'Os Nossos Pilares',
      swipeHint: 'Deslize para o lado →',
      pillars: {
        '01': {
          title: 'Adoração',
          description:
            'Celebramos a Deus com reverência e alegria há 51 anos na Horta, mantendo Cristo e as Escrituras no centro de cada encontro.',
        },
        '02': {
          title: 'Comunhão',
          description:
            'Somos uma família intergeracional na Ilha do Faial — crianças, jovens, adultos e seniores a caminhar juntos e a cuidar uns dos outros.',
        },
        '03': {
          title: 'Serviço',
          description:
            'Vivemos o Evangelho além das paredes do templo através de campanhas solidárias, apoio alimentar e acolhimento próximo.',
        },
      },
      beliefsIntro:
        'Guiamo-nos pela Bíblia Sagrada e pelos princípios históricos da fé baptista: a autoridade das Escrituras, a salvação pela graça mediante a fé em Cristo, a autonomia da igreja local e a vivência comunitária do Evangelho.',
      beliefsItems: {
        scriptures: {
          title: 'As Escrituras Sagradas',
          summary:
            'Cremos que a Bíblia é a Palavra inspirada por Deus, fidedigna e regra suprema de fé, doutrina e conduta para toda a vida cristã.',
        },
        'triune-god': {
          title: 'Deus Pai, Filho e Espírito Santo',
          summary:
            'Cremos num só Deus vivo e verdadeiro, eternamente subsistente em três pessoas: o Pai criador, o Filho Jesus Cristo, nosso Salvador e Senhor, e o Espírito Santo consolador.',
        },
        salvation: {
          title: 'A Salvação pela Graça',
          summary:
            'A salvação é dom gratuito de Deus oferecido a todos por meio do arrependimento e da fé pessoal em Jesus Cristo, que morreu na cruz e ressuscitou.',
        },
        'local-church': {
          title: 'A Igreja Local',
          summary:
            'A igreja é uma comunidade de crentes batizados unidos na comunhão do Evangelho, governada sob a soberania de Cristo para adorar, edificar e testemunhar.',
        },
        ordinances: {
          title: 'Batismo e Ceia do Senhor',
          summary:
            'Observamos o batismo por imersão como testemunho público de nova vida em Cristo e a Ceia do Senhor como memorial da Sua entrega e esperança da Sua volta.',
        },
        'kingdom-mission': {
          title: 'Missão, Serviço e Esperança',
          summary:
            'Cada cristão é chamado a amar o próximo, anunciar as boas-novas nos Açores e no mundo e aguardar com esperança a consumação do Reino de Deus.',
        },
      },
      cooperationIntro:
        'A Igreja Evangélica Baptista da Horta caminha em comunhão e cooperação missionária, teológica e social com igrejas irmãs nos Açores, em Portugal continental e na família baptista mundial.',
      cooperationVisitLink: 'Visitar página',
      cooperationItems: {
        cbp: {
          name: 'Convenção Baptista Portuguesa',
          scope: 'Âmbito Nacional',
          description:
            'Filiação e cooperação fraterna com as igrejas baptistas em todo o território português para evangelização e serviço.',
        },
        aba: {
          name: 'Associação Baptista Açoreana',
          scope: 'Arquipélago dos Açores',
          description:
            'Comunhão regional entre as igrejas baptistas das ilhas dos Açores em assembleias, acampamentos e missão local.',
        },
        aep: {
          name: 'Aliança Evangélica Portuguesa',
          scope: 'Representação Evangélica',
          description:
            'Cooperação interdenominacional em torno do Evangelho, liberdade religiosa e testemunho cristão em Portugal.',
        },
        stb: {
          name: 'Seminário Teológico Baptista',
          scope: 'Formação & Ensino',
          description:
            'Apoio à formação bíblica, pastoral e ministerial de obreiros e líderes ao serviço das igrejas em Portugal.',
        },
        ebf: {
          name: 'Federação Baptista Europeia',
          scope: 'Rede Europeia',
          description:
            'Ligação solidária e missionária com as convenções e igrejas baptistas em toda a Europa e Médio Oriente.',
        },
        bwa: {
          name: 'Aliança Baptista Mundial',
          scope: 'Família Global',
          description:
            'Partilha de oração, missão e ajuda humanitária com milhões de irmãos baptistas em todo o mundo.',
        },
      },
    },
    ministries: {
      kicker: 'Envolva-se',
      heading: 'Ministérios para caminhar juntos',
      intro:
        'Tal como uma família de famílias, cada fase de vida encontra espaço para servir e crescer. Escolha uma área para conhecer os horários e falar connosco.',
      ctaJoin: 'Quero participar',
      scheduleLabel: 'Horário',
      audienceLabel: 'Público',
      items: {
        jovens: {
          title: 'Jovens & Adolescentes',
          summary: 'Salas dedicadas na EBD, comunhão e diálogo bíblico.',
          schedule: 'Domingos na EBD · Encontros semanais',
          audience: 'Adolescentes e jovens adultos',
          description:
            'Espaço para construir amizades verdadeiras, conversar abertamente sobre fé e o dia a dia e servir em conjunto na comunidade.',
          imageAlt: 'Mãos em oração em encontro de fé e reflexão da IEB Horta',
        },
        casais: {
          title: 'Famílias & Mulheres',
          summary: 'Dia da Família, oficinas e encontros Plenas em Cristo.',
          schedule: 'Encontros periódicos e retiros',
          audience: 'Famílias, casais e mulheres',
          description:
            'Iniciativas como o Dia da Família no Parque da Salgueirinha, oficinas com crianças e o encontro de mulheres Plenas em Cristo.',
          imageAlt:
            'Mulheres reunidas a cantar com viola durante o encontro Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'Escola Bíblica & Infantil',
          summary: 'Salas separadas para crianças, adolescentes e adultos.',
          schedule: 'Domingos às 10h00 e às 16h00',
          audience: 'Todas as idades',
          description:
            'Ensino bíblico adequado a cada faixa etária — com salas dedicadas para crianças, adolescentes e adultos, além de oficinas criativas em família.',
          imageAlt:
            'Bíblia aberta sobre mesa com horários da Escola Bíblica Dominical da IEB Horta',
        },
        'acao-social': {
          title: 'Ação Social',
          summary: 'Recolha e partilha solidária de alimentos no Faial.',
          schedule: 'Campanhas contínuas de apoio local',
          audience: 'Aberto a todos os voluntários',
          description:
            'Mobilização de membros e amigos para recolher alimentos e apoiar famílias em necessidade na cidade da Horta.',
          imageAlt:
            'Compras solidárias e alimentos recolhidos pela Ação Social da IEB Horta',
        },
        'batismo-discipulado': {
          title: 'Batismo & Discipulado',
          summary: 'Primeiros passos na fé cristã e acompanhamento pastoral.',
          schedule: 'Acompanhamento com o Pr. Luiz Eduardo Júnior',
          audience: 'Visitantes e novos membros',
          description:
            'Estudo bíblico próximo para conhecer os fundamentos do Evangelho, esclarecer dúvidas, preparar para o batismo e integrar a igreja.',
          imageAlt: 'Pr. Luiz Eduardo Júnior a ministrar as Escrituras no templo',
        },
      },
    },
    gallery: {
      kickerPrefix: 'Conteúdos & Comunidade',
      heading: 'Vida comunitária, arquivos e missão',
      followCta: 'Seguir @iebhorta no Instagram',
      tabsAria: 'Selecionar secção de conteúdos',
      tabs: {
        photos: 'Momentos @iebhorta',
        archives: 'Arquivos & Eventos',
        giving: 'Ofertas & Missão',
      },
      filterAria: 'Filtrar publicações da comunidade',
      filters: {
        allPrefix: 'Todas',
        worship: 'Cultos & Palavra',
        community: 'Comunidade',
        socialAction: 'Ação Social',
      },
      openDetailsPrefix: 'Ver detalhes',
      tapHint: 'Toque numa publicação para ler a legenda completa.',
      closeLightbox: 'Fechar visualização',
      referenceLabel: 'Referência',
      prevPost: 'Publicação anterior',
      nextPost: 'Próxima publicação',
      viewOnInstagram: 'Ver no @iebhorta',
      posts: {
        'post-preaching': {
          alt: 'Pr. Luiz Eduardo Júnior a ministrar a Palavra no templo da IEB Horta',
          category: 'Momento da Palavra',
          dateLabel: '1 Cor 10:31',
          caption:
            'Pr. Luiz Eduardo a partilhar as Escrituras no templo: “Quer comais, quer bebais ou façais outra qualquer coisa, fazei tudo para a glória de Deus.”',
          scripture: '1 Coríntios 10:31',
        },
        'post-schedule': {
          alt: 'Publicação oficial de horários do @iebhorta: 10h00 Escola Bíblica Dominical e 11h15 Celebração na Av. Marginal, 17',
          category: 'Domingos',
          dateLabel: '10h00 & 11h15',
          caption:
            'Todos os domingos na Av. Marginal, n.º 17 — Horta: às 10h00 Escola Bíblica Dominical e às 11h15 Culto de Celebração.',
        },
        'post-social': {
          alt: 'Bagageira de viatura repleta de sacos de compras e leite recolhidos pela ação social da IEB Horta',
          category: 'Ação Social',
          dateLabel: 'Serviço',
          caption:
            'Gratidão por cada família que contribuiu para a partilha solidária de alimentos e bens essenciais na Ilha do Faial.',
        },
        'post-51-anos': {
          alt: 'Cartaz comemorativo dos 51 anos da Igreja Evangélica Baptista da Horta — Sustentados pelo Amor de Deus',
          category: '51 Anos',
          dateLabel: 'Aniversário',
          caption:
            'A celebrar 51 anos de fidelidade na cidade da Horta — Sustentados pelo Amor de Deus, a servir gerações na ilha.',
          scripture: 'Romanos 5:8',
        },
        'post-familia': {
          alt: 'Convite para o Dia da Família da IEB Horta no Parque da Salgueirinha, Feteira',
          category: 'Dia da Família',
          dateLabel: 'Feteira',
          caption:
            'Tempo de culto ao ar livre, convívio e almoço comunitário no Parque da Salgueirinha (Feteira) a reunir toda a igreja.',
        },
        'post-dai-gracas': {
          alt: 'Publicação de Ação de Graças do @iebhorta com versículo de 1 Tessalonicenses 5:18',
          category: 'Ação de Graças',
          dateLabel: '1 Ts 5:18',
          caption:
            'Fim de Semana de Ação de Graças: “Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.”',
          scripture: '1 Tessalonicenses 5:18',
        },
      },
      archivesIntro:
        'Conteúdos que edificam a sua vida espiritual: pregações da Palavra, marcos dos 51 anos no Faial e encontros especiais abertos à cidade.',
      archivesYouTubeCta: 'Abrir canal no YouTube',
      archivesItems: {
        'archive-palavra': {
          category: 'Pregação & Palavra',
          dateLabel: '1 Coríntios 10:31',
          title: 'Momento da Palavra · Pr. Luiz Eduardo Júnior',
          summary:
            'Exposição fiel das Escrituras para aplicar o Evangelho na família, no trabalho e no dia a dia. Acompanhe as mensagens no templo e no nosso YouTube.',
          actionLabel: 'Assistir no YouTube',
          imageAlt: 'Pr. Luiz Eduardo Júnior a pregar no púlpito da IEB Horta',
        },
        'archive-51anos': {
          category: 'Marco Histórico',
          dateLabel: '51 Anos · Romanos 5:8',
          title: 'Aniversário IEB Horta — Sustentados pelo Amor de Deus',
          summary:
            'Mais de meio século de testemunho evangélico baptista na cidade da Horta, reunindo gerações em gratidão pela fidelidade de Deus.',
          actionLabel: 'Ver registos no @iebhorta',
          imageAlt: 'Cartaz dos 51 anos da Igreja Evangélica Baptista da Horta',
        },
        'archive-familia': {
          category: 'Evento Comunitário',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Dia da Família ao ar livre na Feteira',
          summary:
            'Encontro anual com tempo de culto, almoço comunitário e convívio fraterno para membros, crianças e amigos visitantes na ilha.',
          actionLabel: 'Confirmar presença no próximo',
          imageAlt: 'Cartaz oficial do Dia da Família no Parque da Salgueirinha',
        },
        'archive-gracas': {
          category: 'Celebração Especial',
          dateLabel: '1 Tessalonicenses 5:18',
          title: 'Fim de Semana de Ação de Graças nos Açores',
          summary:
            'Momentos dedicados a louvar a Deus em unidade, partilhar testemunhos e agradecer pelas bênçãos recebidas ao longo do ano.',
          actionLabel: 'Explorar no Instagram',
          imageAlt: 'Publicação de Fim de Semana de Ação de Graças da IEB Horta',
        },
      },
      giving: {
        kicker: 'Sustento & Generosidade',
        heading: 'Contribua para a missão e a ação local no Faial',
        paragraph1:
          'A Igreja Evangélica Baptista da Horta mantém a sua obra espiritual e social exclusivamente através das ofertas e dízimos voluntários dos seus membros, congregados e simpatizantes.',
        paragraph2:
          'Cada contributo apoia a manutenção dos espaços de culto e EBD, o ensino bíblico para crianças e jovens, a cooperação missionária e as campanhas de apoio alimentar a famílias no Faial.',
        pillars: [
          {
            title: 'Ensino & Culto Público',
            text: 'Sustento das salas da Escola Bíblica Dominical, receção a visitantes e transmissão da Palavra.',
          },
          {
            title: 'Ação Social Local',
            text: 'Recolha contínua de alimentos e apoio direto a lares carenciados na Ilha do Faial.',
          },
          {
            title: 'Missão nos Açores',
            text: 'Cooperação com a Associação Baptista Açoreana e projetos de evangelização e discipulado.',
          },
        ],
        ctaWhatsApp: 'Pedir dados via WhatsApp',
        ctaEmail: 'Contactar por e-mail',
        whatsappMessage:
          'Olá! Gostava de receber informações sobre como contribuir com ofertas para a Igreja Evangélica Baptista da Horta.',
        mailSubject: 'Informações sobre Ofertas e Contribuições — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contactos & Primeira Visita',
      heading: 'Planeie a sua primeira visita',
      intro:
        'Será uma alegria recebê-lo pessoalmente na Horta. Confira os nossos espaços e avise-nos em que dia pretende vir para aguardarmos por si.',
      spaceTabsAria: 'Selecionar espaço da igreja',
      copyAddress: 'Copiar morada',
      copiedAddress: 'Morada copiada',
      visitorNotes: [
        'Localização central junto à baía da Horta na Av. Marginal, n.º 17.',
        'Venha tal como está — o nosso ambiente é acolhedor e familiar.',
        'Salas da Escola Bíblica Dominical para adultos, adolescentes e crianças.',
      ],
      googleMaps: 'Google Maps',
      openWaze: 'Abrir no Waze',
      formTitle: 'Avise-nos quando vem',
      formSubtitle:
        'Demora menos de um minuto. Assim, a nossa equipa de receção pode dar as boas-vindas a si e à sua família.',
      nameLabel: 'O seu nome',
      namePlaceholder: 'Ex.: Maria Clara',
      phoneLabel: 'WhatsApp / Telemóvel',
      phonePlaceholder: '+351 9XX XXX XXX',
      dayQuestion: 'Em que dia pretende visitar-nos?',
      dayAria: 'Dia pretendido para a visita',
      dayOptions: [
        'Domingo · 10h00 (Escola Bíblica)',
        'Domingo · 11h15 (Culto de Celebração)',
        'Domingo · 16h00 (EBD R. do Pasteleiro)',
        'Confirmar os horários da semana',
      ],
      groupQuestion: 'Quantas pessoas vêm?',
      groupAria: 'Quantidade de visitantes',
      groupSizeOptions: ['Apenas eu', '2 pessoas', 'Família'],
      noteLabel: 'Observação ou pedido de oração (opcional)',
      notePlaceholder: 'Ex.: Vamos com 2 crianças',
      interestSelected: 'Interesse selecionado:',
      removeInterest: 'Remover',
      submitCta: 'Confirmar Planeamento de Visita',
      errorName: 'Por favor, indique o seu nome para prepararmos a sua receção.',
      errorPhone: 'Indique um número de contacto ou WhatsApp válido.',
      successTitlePrefix: 'Estaremos à sua espera, ',
      successTitleSuffix: '!',
      successBodyPrefix: 'Registámos a sua intenção de visita',
      successBodyFor: 'para',
      successBodyWithInterest: 'com interesse em',
      successBodySuffix:
        '. Caso pretenda enviar o aviso diretamente à igreja, escolha um dos canais abaixo:',
      sendEmail: 'Enviar por e-mail',
      sendWhatsApp: 'Enviar no WhatsApp',
      newRegistration: 'Novo registo',
      mailSubjectPrefix: 'Planeamento de Visita',
      summaryGreeting: 'Olá! Sou',
      summaryInterestPrefix: 'interesse em',
      summaryNotePrefix: 'Observação:',
      contactLabel: 'Contacto:',
      locations: {
        templo: {
          label: 'Templo Principal',
          title: 'Culto de Celebração & EBD (10h00)',
          region: 'Matriz · Ilha do Faial, Açores, Portugal',
          note: 'Em frente à baía da Horta, com acesso fácil e receção acolhedora.',
        },
        ebd: {
          label: 'Salas EBD (16h00)',
          title: 'Escola Bíblica Dominical (Domingo 16h00)',
          region: '9900 Horta · Ilha do Faial, Açores',
          note: 'Espaço temporário com salas separadas para Adultos, Adolescentes e Crianças.',
        },
      },
    },
    footer: {
      summary:
        'Há 51 anos na Ilha do Faial, uma comunidade cristã dedicada a amar a Deus, servir as pessoas e anunciar o Evangelho com simplicidade.',
      navigationTitle: 'Navegação & Abas',
      cooperationTitle: 'Cooperação Baptista',
      channelsTitle: 'Siga e Fale Connosco',
      instagramLabel: 'Instagram @iebhorta',
      facebookLabel: 'Facebook IEB Horta',
      youtubeLabel: 'YouTube IEB Horta',
      whatsappLabel: 'WhatsApp da Igreja',
      rightsReserved: 'Todos os direitos reservados.',
      sundayLine: 'Domingos · 10h00 Escola Bíblica · 11h15 Celebração',
    },
    mobileBar: {
      ariaLabel: 'Ações rápidas de navegação e contacto',
      map: 'Mapa',
      schedule: 'Horários',
      whatsapp: 'WhatsApp',
    },
  },

  'pt-BR': {
    meta: {
      title: 'IEB Horta — Igreja Evangélica Baptista da Horta',
      description:
        'Um lugar de fé, família e novos começos na Ilha do Faial, Açores. Horários de cultos, confissão de fé, ministérios, comunidade @iebhorta e planeje sua visita à Igreja Evangélica Baptista da Horta.',
      skipToContent: 'Pular para o conteúdo principal',
    },
    nav: {
      ariaMain: 'Navegação principal',
      ariaMobile: 'Menu mobile',
      ariaLanguage: 'Alterar idioma do site',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Programação',
        essence: 'Sobre',
        ministries: 'Ministérios',
        community: 'Conteúdos',
        visit: 'Contatos',
      },
      subLinks: {
        churchHistory: 'A Igreja (51 Anos)',
        whatWeBelieve: 'Em Que Cremos',
        cooperation: 'Cooperação Batista',
        instagramFeed: 'Momentos @iebhorta',
        archivesEvents: 'Arquivos & Eventos',
        offeringsMission: 'Ofertas & Missão',
      },
      ctaVisit: 'Quero Visitar',
      ctaVisitDrawer: 'Planeje sua Primeira Visita',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      closeNavDrawer: 'Fechar menu de navegação',
      drawerSummary: 'Domingos às 10h00 (EBD) e 11h15 (Celebração).',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Interior iluminado da igreja com luz natural da manhã e comunidade reunida',
      kickerYears: '51 Anos na Horta, Açores',
      headline: 'Um lugar de fé, família e novos começos.',
      subheadline:
        'Sustentados pelo amor de Deus na Ilha do Faial. Uma igreja cristã de portas abertas para caminhar com você e sua família na Palavra e na comunhão.',
      ctaVisit: 'Planeje sua Visita',
      ctaInstagram: 'Acompanhe @iebhorta',
      watchYouTube: 'Cultos no YouTube',
      prevSlide: 'Destaque anterior',
      nextSlide: 'Próximo destaque',
      slideLabelPrefix: 'Destaque',
      slides: {
        welcome: {
          kicker: '51 Anos na Horta, Açores',
          headline: 'Um lugar de fé, família e novos começos.',
          subheadline:
            'Sustentados pelo amor de Deus na Ilha do Faial. Uma igreja cristã de portas abertas para caminhar com você e sua família na Palavra e na comunhão.',
          ctaLabel: 'Planeje sua Visita',
          imageAlt:
            'Interior iluminado da igreja com luz natural da manhã e comunidade reunida',
        },
        'sunday-worship': {
          kicker: 'Av. Marginal, n.º 17 · Todos os Domingos',
          headline: 'Adoração, ensino bíblico e comunhão no coração da Horta.',
          subheadline:
            'Nos reunimos aos domingos às 10h00 na Escola Bíblica Dominical (ou às 16h00 nas Angústias) e às 11h15 no Culto de Celebração.',
          ctaLabel: 'Ver Programação',
          imageAlt:
            'Interior do templo da Igreja Evangélica Baptista da Horta na Avenida Marginal',
        },
        'church-family': {
          kicker: 'Filiada à Convenção Baptista Portuguesa',
          headline: 'Uma família espiritual para todas as gerações no Faial.',
          subheadline:
            'Crianças, jovens, casais e idosos unidos pelo Evangelho de Jesus Cristo, servindo nossa cidade com esperança e simplicidade.',
          ctaLabel: 'Conhecer a Igreja',
          imageAlt:
            'Membros e crianças da Igreja Evangélica Baptista da Horta reunidos em família',
        },
      },
      nextSundayAria: 'Próximo encontro dominical',
      thisSundayToday: 'Neste Domingo (Hoje)',
      nextSundayLabel: 'Próximo Domingo',
      ebdTitle: 'Escola Bíblica Dominical',
      celebrationTitle: 'Culto de Celebração',
      doorsOpenNote: 'Portas abertas para toda a família.',
      calendarSaved: 'Convite (.ics) salvo',
      calendarSave: 'Adicionar domingo à agenda',
      ebdStripTextBefore: 'EBD às',
      ebdStripTextAfter: 'na Rua do Pasteleiro, n.º 12-D (Angústias)',
      pastorLabel: 'Pastorado:',
      whatsappMessage:
        'Olá! Gostaria de saber mais sobre os cultos da Igreja Evangélica Baptista da Horta e planejar uma visita.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Agenda Dominical//PT-BR',
      summary: 'Culto de Celebração — IEB Horta',
      description:
        'Escola Bíblica Dominical às 10h00 e Culto de Celebração na Igreja Evangélica Baptista da Horta. Portas abertas!',
      fileName: 'culto-ieb-horta.ics',
    },
    schedule: {
      kicker: 'Programação Semanal',
      heading: 'Horários para nos reunirmos em família',
      intro:
        'Aos domingos, nos reunimos para estudar as Escrituras na Escola Bíblica Dominical e celebrar juntos no culto da manhã. Se for a sua primeira visita, você será muito bem-vindo.',
      filterAria: 'Filtrar programação',
      filters: {
        all: 'Toda a agenda',
        sunday: 'Domingos',
        week: 'Semana & Famílias',
      },
      calendarSaved: 'Evento salvo (.ics)',
      calendarSave: 'Salvar culto no calendário',
      watchYouTube: 'Assistir no YouTube',
      confirmVisit: 'Confirmar visita',
      items: {
        celebracao: {
          title: 'Culto de Celebração',
          day: 'Domingos',
          times: ['11h15'],
          location: 'Av. Marginal, n.º 17 — Horta',
          description:
            'Culto dominical de louvor, comunhão e exposição bíblica. Nos meses de verão (julho e agosto), começa às 11h00.',
        },
        ebd: {
          title: 'Escola Bíblica Dominical (EBD)',
          day: 'Domingos',
          times: ['10h00', '16h00'],
          location: 'Adultos, Adolescentes e Crianças',
          description:
            'Estudo bíblico por idades às 10h00 na Av. Marginal, n.º 17, ou às 16h00 na Rua do Pasteleiro, n.º 12-D (Angústias).',
        },
        'oracao-lares': {
          title: 'Oração, Ensino e Pequenos Grupos',
          day: 'Durante a semana',
          times: ['Agenda @iebhorta'],
          location: 'Templo e lares no Faial',
          description:
            'Encontros semanais de oração, leitura das Escrituras e comunhão nos lares. Confirme os horários atualizados conosco.',
        },
        'kids-familia': {
          title: 'Crianças, Pais & Famílias',
          day: 'Domingos e eventos',
          times: ['Programação familiar'],
          location: 'EBD Infantil e Parque da Salgueirinha',
          description:
            'Ensino bíblico criativo para crianças na EBD, oficinas em família na cidade e o tradicional Dia da Família ao ar livre.',
        },
      },
    },
    about: {
      familyAlt:
        'Membros e crianças da Igreja Evangélica Baptista da Horta reunidos em família',
      familyFallback: 'Família IEB Horta',
      familyCaption: 'Nossa família reunida na Horta.',
      sanctuaryAlt:
        'Interior do templo da IEB Horta na Avenida Marginal com bancos de madeira e cruz',
      sanctuaryFallback: 'Templo Av. Marginal, 17',
      sanctuaryCaption: 'Culto no templo · Av. Marginal, 17.',
      kicker: 'Sobre a Igreja',
      heading: 'Amar a Deus, servir pessoas e viver o Evangelho na ilha.',
      sealAlt: 'Selo oficial Igreja Evangélica Baptista da Horta',
      tabsAria: 'Explorar história, fé e cooperação',
      tabs: {
        history: 'A Igreja',
        beliefs: 'Em Que Cremos',
        cooperation: 'Cooperação',
      },
      paragraph1:
        'Há 51 anos na Ilha do Faial, a Igreja Evangélica Baptista da Horta, filiada à Convenção Baptista Portuguesa, caminha como uma família espiritual onde cada pessoa é acolhida pelo nome e encorajada a crescer na fé em Jesus Cristo.',
      paragraph2:
        'Cremos que a fé cristã se expressa tanto na reverência da adoração dominical quanto no cuidado prático durante a semana — apoiando famílias, formando discípulos e servindo nossa comunidade com generosidade.',
      quote:
        '“Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.”',
      quoteFooter: 'Romanos 5:8 · Lema dos 51 Anos · Pr. Luiz Eduardo Júnior',
      pillarsLabel: 'Nossos Pilares',
      swipeHint: 'Deslize para o lado →',
      pillars: {
        '01': {
          title: 'Adoração',
          description:
            'Celebramos a Deus com reverência e alegria há 51 anos na Horta, mantendo Cristo e as Escrituras no centro de cada encontro.',
        },
        '02': {
          title: 'Comunhão',
          description:
            'Somos uma família intergeracional na Ilha do Faial — crianças, jovens, adultos e idosos caminhando juntos e cuidando uns dos outros.',
        },
        '03': {
          title: 'Serviço',
          description:
            'Vivemos o Evangelho além das paredes do templo por meio de campanhas solidárias, apoio alimentar e acolhimento próximo.',
        },
      },
      beliefsIntro:
        'Somos guiados pela Bíblia Sagrada e pelos princípios históricos da fé batista: a autoridade das Escrituras, a salvação pela graça mediante a fé em Cristo, a autonomia da igreja local e a vivência comunitária do Evangelho.',
      beliefsItems: {
        scriptures: {
          title: 'As Escrituras Sagradas',
          summary:
            'Cremos que a Bíblia é a Palavra inspirada por Deus, fidedigna e regra suprema de fé, doutrina e conduta para toda a vida cristã.',
        },
        'triune-god': {
          title: 'Deus Pai, Filho e Espírito Santo',
          summary:
            'Cremos em um só Deus vivo e verdadeiro, eternamente subsistente em três pessoas: o Pai criador, o Filho Jesus Cristo, nosso Salvador e Senhor, e o Espírito Santo consolador.',
        },
        salvation: {
          title: 'A Salvação pela Graça',
          summary:
            'A salvação é dom gratuito de Deus oferecido a todos por meio do arrependimento e da fé pessoal em Jesus Cristo, que morreu na cruz e ressuscitou.',
        },
        'local-church': {
          title: 'A Igreja Local',
          summary:
            'A igreja é uma comunidade de crentes batizados unidos na comunhão do Evangelho, governada sob a soberania de Cristo para adorar, edificar e testemunhar.',
        },
        ordinances: {
          title: 'Batismo e Ceia do Senhor',
          summary:
            'Observamos o batismo por imersão como testemunho público de nova vida em Cristo e a Ceia do Senhor como memorial da Sua entrega e esperança da Sua volta.',
        },
        'kingdom-mission': {
          title: 'Missão, Serviço e Esperança',
          summary:
            'Cada cristão é chamado a amar o próximo, anunciar as boas-novas nos Açores e no mundo e aguardar com esperança a consumação do Reino de Deus.',
        },
      },
      cooperationIntro:
        'A Igreja Evangélica Baptista da Horta caminha em comunhão e cooperação missionária, teológica e social com igrejas irmãs nos Açores, em Portugal continental e na família batista mundial.',
      cooperationVisitLink: 'Visitar página',
      cooperationItems: {
        cbp: {
          name: 'Convenção Baptista Portuguesa',
          scope: 'Âmbito Nacional',
          description:
            'Filiação e cooperação fraterna com as igrejas batistas em todo o território português para evangelização e serviço.',
        },
        aba: {
          name: 'Associação Baptista Açoreana',
          scope: 'Arquipélago dos Açores',
          description:
            'Comunhão regional entre as igrejas batistas das ilhas dos Açores em assembleias, acampamentos e missão local.',
        },
        aep: {
          name: 'Aliança Evangélica Portuguesa',
          scope: 'Representação Evangélica',
          description:
            'Cooperação interdenominacional em torno do Evangelho, liberdade religiosa e testemunho cristão em Portugal.',
        },
        stb: {
          name: 'Seminário Teológico Baptista',
          scope: 'Formação & Ensino',
          description:
            'Apoio à formação bíblica, pastoral e ministerial de obreiros e líderes a serviço das igrejas em Portugal.',
        },
        ebf: {
          name: 'Federação Baptista Europeia',
          scope: 'Rede Europeia',
          description:
            'Ligação solidária e missionária com as convenções e igrejas batistas em toda a Europa e Oriente Médio.',
        },
        bwa: {
          name: 'Aliança Batista Mundial',
          scope: 'Família Global',
          description:
            'Partilha de oração, missão e ajuda humanitária com milhões de irmãos batistas em todo o mundo.',
        },
      },
    },
    ministries: {
      kicker: 'Conecte-se',
      heading: 'Ministérios para caminhar juntos',
      intro:
        'Há sempre um lugar preparado para a sua fase de vida. Escolha uma área para conferir horários, fotos reais e falar com nossa equipe.',
      ctaJoin: 'Quero participar',
      scheduleLabel: 'Horário',
      audienceLabel: 'Público',
      items: {
        jovens: {
          title: 'Jovens & Adolescentes',
          summary: 'Salas dedicadas na EBD, comunhão e diálogo bíblico.',
          schedule: 'Domingos na EBD · Encontros semanais',
          audience: 'Adolescentes e jovens adultos',
          description:
            'Espaço para construir amizades verdadeiras, conversar abertamente sobre fé e o dia a dia e servir juntos na comunidade.',
          imageAlt: 'Mãos em oração em encontro de fé e reflexão da IEB Horta',
        },
        casais: {
          title: 'Famílias & Mulheres',
          summary: 'Dia da Família, oficinas e encontros Plenas em Cristo.',
          schedule: 'Programações periódicas e retiros',
          audience: 'Famílias, casais e mulheres',
          description:
            'Iniciativas como o Dia da Família no Parque da Salgueirinha, oficinas com crianças e o encontro de mulheres Plenas em Cristo.',
          imageAlt:
            'Mulheres reunidas cantando com violão durante o encontro Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'Escola Bíblica & Infantil',
          summary: 'Salas separadas para crianças, adolescentes e adultos.',
          schedule: 'Domingos às 10h00 e às 16h00',
          audience: 'Todas as idades',
          description:
            'Ensino bíblico adequado a cada faixa etária — com salas dedicadas para crianças, adolescentes e adultos, além de oficinas criativas em família.',
          imageAlt:
            'Bíblia aberta sobre mesa com horários da Escola Bíblica Dominical da IEB Horta',
        },
        'acao-social': {
          title: 'Ação Social',
          summary: 'Arrecadação e partilha solidária de alimentos no Faial.',
          schedule: 'Campanhas contínuas de apoio local',
          audience: 'Aberto a todos os voluntários',
          description:
            'Mobilização de membros e amigos para arrecadar alimentos e apoiar famílias em necessidade na cidade da Horta.',
          imageAlt:
            'Compras solidárias e alimentos arrecadados pela Ação Social da IEB Horta',
        },
        'batismo-discipulado': {
          title: 'Batismo & Discipulado',
          summary: 'Primeiros passos na fé cristã e acompanhamento pastoral.',
          schedule: 'Acompanhamento com o Pr. Luiz Eduardo Júnior',
          audience: 'Visitantes e novos membros',
          description:
            'Estudo bíblico próximo para conhecer os fundamentos do Evangelho, tirar dúvidas, preparar para o batismo e integrar a igreja.',
          imageAlt: 'Pr. Luiz Eduardo Júnior ministrando as Escrituras no templo',
        },
      },
    },
    gallery: {
      kickerPrefix: 'Conteúdos & Comunidade',
      heading: 'Vida comunitária, arquivos e missão',
      followCta: 'Seguir @iebhorta no Instagram',
      tabsAria: 'Selecionar seção de conteúdos',
      tabs: {
        photos: 'Momentos @iebhorta',
        archives: 'Arquivos & Eventos',
        giving: 'Ofertas & Missão',
      },
      filterAria: 'Filtrar publicações da comunidade',
      filters: {
        allPrefix: 'Todas',
        worship: 'Cultos & Palavra',
        community: 'Comunidade',
        socialAction: 'Ação Social',
      },
      openDetailsPrefix: 'Abrir detalhes',
      tapHint: 'Toque em uma publicação para ler a legenda completa.',
      closeLightbox: 'Fechar visualização',
      referenceLabel: 'Referência',
      prevPost: 'Publicação anterior',
      nextPost: 'Próxima publicação',
      viewOnInstagram: 'Ver no @iebhorta',
      posts: {
        'post-preaching': {
          alt: 'Pr. Luiz Eduardo Júnior ministrando a Palavra no templo da IEB Horta',
          category: 'Momento da Palavra',
          dateLabel: '1 Cor 10:31',
          caption:
            'Pr. Luiz Eduardo compartilhando as Escrituras no templo: “Quer comais, quer bebais ou façais outra qualquer coisa, fazei tudo para a glória de Deus.”',
          scripture: '1 Coríntios 10:31',
        },
        'post-schedule': {
          alt: 'Publicação oficial de horários do @iebhorta: 10h00 Escola Bíblica Dominical e 11h15 Celebração na Av. Marginal, 17',
          category: 'Domingos',
          dateLabel: '10h00 & 11h15',
          caption:
            'Todos os domingos na Av. Marginal, n.º 17 — Horta: às 10h00 Escola Bíblica Dominical e às 11h15 Culto de Celebração.',
        },
        'post-social': {
          alt: 'Porta-malas de carro cheio de sacolas de compras e leite arrecadados pela ação social da IEB Horta',
          category: 'Ação Social',
          dateLabel: 'Serviço',
          caption:
            'Gratidão por cada família que contribuiu com a partilha solidária de alimentos e itens essenciais na Ilha do Faial.',
        },
        'post-51-anos': {
          alt: 'Cartaz comemorativo dos 51 anos da Igreja Evangélica Baptista da Horta — Sustentados pelo Amor de Deus',
          category: '51 Anos',
          dateLabel: 'Aniversário',
          caption:
            'Celebrando 51 anos de fidelidade na cidade da Horta — Sustentados pelo Amor de Deus, servindo gerações na ilha.',
          scripture: 'Romanos 5:8',
        },
        'post-familia': {
          alt: 'Convite para o Dia da Família da IEB Horta no Parque da Salgueirinha, Feteira',
          category: 'Dia da Família',
          dateLabel: 'Feteira',
          caption:
            'Tempo de culto ao ar livre, comunhão e almoço comunitário no Parque da Salgueirinha (Feteira) reunindo toda a igreja.',
        },
        'post-dai-gracas': {
          alt: 'Publicação de Ação de Graças do @iebhorta com versículo de 1 Tessalonicenses 5:18',
          category: 'Ação de Graças',
          dateLabel: '1 Ts 5:18',
          caption:
            'Fim de Semana de Ação de Graças: “Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.”',
          scripture: '1 Tessalonicenses 5:18',
        },
      },
      archivesIntro:
        'Conteúdos que edificam sua vida espiritual: pregações da Palavra, marcos dos 51 anos no Faial e encontros especiais abertos à cidade.',
      archivesYouTubeCta: 'Abrir canal no YouTube',
      archivesItems: {
        'archive-palavra': {
          category: 'Pregação & Palavra',
          dateLabel: '1 Coríntios 10:31',
          title: 'Momento da Palavra · Pr. Luiz Eduardo Júnior',
          summary:
            'Exposição fiel das Escrituras para aplicar o Evangelho na família, no trabalho e no dia a dia. Acompanhe as mensagens no templo e no nosso YouTube.',
          actionLabel: 'Assistir no YouTube',
          imageAlt: 'Pr. Luiz Eduardo Júnior pregando no púlpito da IEB Horta',
        },
        'archive-51anos': {
          category: 'Marco Histórico',
          dateLabel: '51 Anos · Romanos 5:8',
          title: 'Aniversário IEB Horta — Sustentados pelo Amor de Deus',
          summary:
            'Mais de meio século de testemunho evangélico batista na cidade da Horta, reunindo gerações em gratidão pela fidelidade de Deus.',
          actionLabel: 'Ver registros no @iebhorta',
          imageAlt: 'Cartaz dos 51 anos da Igreja Evangélica Baptista da Horta',
        },
        'archive-familia': {
          category: 'Evento Comunitário',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Dia da Família ao ar livre na Feteira',
          summary:
            'Encontro anual com tempo de culto, almoço comunitário e comunhão fraterna para membros, crianças e amigos visitantes na ilha.',
          actionLabel: 'Confirmar presença no próximo',
          imageAlt: 'Cartaz oficial do Dia da Família no Parque da Salgueirinha',
        },
        'archive-gracas': {
          category: 'Celebração Especial',
          dateLabel: '1 Tessalonicenses 5:18',
          title: 'Fim de Semana de Ação de Graças nos Açores',
          summary:
            'Momentos dedicados a louvar a Deus em unidade, compartilhar testemunhos e agradecer pelas bênçãos recebidas ao longo do ano.',
          actionLabel: 'Explorar no Instagram',
          imageAlt: 'Publicação de Fim de Semana de Ação de Graças da IEB Horta',
        },
      },
      giving: {
        kicker: 'Sustento & Generosidade',
        heading: 'Contribua para a missão e a ação local no Faial',
        paragraph1:
          'A Igreja Evangélica Baptista da Horta mantém sua obra espiritual e social exclusivamente por meio das ofertas e dízimos voluntários de seus membros, congregados e simpatizantes.',
        paragraph2:
          'Cada contribuição apoia a manutenção dos espaços de culto e EBD, o ensino bíblico para crianças e jovens, a cooperação missionária e as campanhas de apoio alimentar a famílias no Faial.',
        pillars: [
          {
            title: 'Ensino & Culto Público',
            text: 'Sustento das salas da Escola Bíblica Dominical, recepção de visitantes e transmissão da Palavra.',
          },
          {
            title: 'Ação Social Local',
            text: 'Arrecadação contínua de alimentos e apoio direto a lares necessitados na Ilha do Faial.',
          },
          {
            title: 'Missão nos Açores',
            text: 'Cooperação com a Associação Baptista Açoreana e projetos de evangelização e discipulado.',
          },
        ],
        ctaWhatsApp: 'Pedir dados via WhatsApp',
        ctaEmail: 'Contatar por e-mail',
        whatsappMessage:
          'Olá! Gostaria de receber informações sobre como contribuir com ofertas para a Igreja Evangélica Baptista da Horta.',
        mailSubject: 'Informações sobre Ofertas e Contribuições — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contatos & Primeira Visita',
      heading: 'Planeje sua primeira visita',
      intro:
        'Será uma alegria receber você pessoalmente na Horta. Confira nossos espaços e avise em que dia pretende vir para aguardarmos por você.',
      spaceTabsAria: 'Selecionar espaço da igreja',
      copyAddress: 'Copiar endereço',
      copiedAddress: 'Endereço copiado',
      visitorNotes: [
        'Localização central junto à baía da Horta na Av. Marginal, n.º 17.',
        'Venha como estiver — nosso ambiente é acolhedor e familiar.',
        'Salas da Escola Bíblica Dominical para adultos, adolescentes e crianças.',
      ],
      googleMaps: 'Google Maps',
      openWaze: 'Abrir no Waze',
      formTitle: 'Avise-nos quando vier',
      formSubtitle:
        'Leva menos de um minuto. Assim, nossa equipe de recepção pode dar as boas-vindas a você e à sua família.',
      nameLabel: 'Seu nome',
      namePlaceholder: 'Ex.: Maria Clara',
      phoneLabel: 'WhatsApp / Celular',
      phonePlaceholder: '+351 9XX XXX XXX',
      dayQuestion: 'Em qual dia pretende nos visitar?',
      dayAria: 'Dia desejado para a visita',
      dayOptions: [
        'Domingo · 10h00 (Escola Bíblica)',
        'Domingo · 11h15 (Culto de Celebração)',
        'Domingo · 16h00 (EBD R. do Pasteleiro)',
        'Quero confirmar horários da semana',
      ],
      groupQuestion: 'Quantas pessoas vão?',
      groupAria: 'Quantidade de visitantes',
      groupSizeOptions: ['Só eu', '2 pessoas', 'Família'],
      noteLabel: 'Observação ou pedido de oração (opcional)',
      notePlaceholder: 'Ex.: Vamos com 2 crianças',
      interestSelected: 'Interesse selecionado:',
      removeInterest: 'Remover',
      submitCta: 'Confirmar Planejamento de Visita',
      errorName: 'Por favor, informe seu nome para prepararmos sua recepção.',
      errorPhone: 'Informe um número de contato ou WhatsApp válido.',
      successTitlePrefix: 'Estaremos esperando por você, ',
      successTitleSuffix: '!',
      successBodyPrefix: 'Registramos sua intenção de visita',
      successBodyFor: 'para',
      successBodyWithInterest: 'com interesse em',
      successBodySuffix:
        '. Caso deseje enviar o aviso diretamente para a igreja, escolha um dos canais abaixo:',
      sendEmail: 'Enviar por e-mail',
      sendWhatsApp: 'Enviar no WhatsApp',
      newRegistration: 'Novo registro',
      mailSubjectPrefix: 'Planejamento de Visita',
      summaryGreeting: 'Olá! Sou',
      summaryInterestPrefix: 'interesse em',
      summaryNotePrefix: 'Observação:',
      contactLabel: 'Contato:',
      locations: {
        templo: {
          label: 'Templo Principal',
          title: 'Culto de Celebração & EBD (10h00)',
          region: 'Matriz · Ilha do Faial, Açores, Portugal',
          note: 'Em frente à baía da Horta, com acesso fácil e recepção acolhedora.',
        },
        ebd: {
          label: 'Salas EBD (16h00)',
          title: 'Escola Bíblica Dominical (Domingo 16h00)',
          region: '9900 Horta · Ilha do Faial, Açores',
          note: 'Espaço temporário com salas separadas para Adultos, Adolescentes e Crianças.',
        },
      },
    },
    footer: {
      summary:
        'Há 51 anos na Ilha do Faial, uma comunidade cristã comprometida em amar a Deus, servir pessoas e anunciar o Evangelho com simplicidade.',
      navigationTitle: 'Navegação & Abas',
      cooperationTitle: 'Cooperação Batista',
      channelsTitle: 'Acompanhe e Fale Conosco',
      instagramLabel: 'Instagram @iebhorta',
      facebookLabel: 'Facebook IEB Horta',
      youtubeLabel: 'YouTube IEB Horta',
      whatsappLabel: 'WhatsApp da Igreja',
      rightsReserved: 'Todos os direitos reservados.',
      sundayLine: 'Domingos · 10h00 Escola Bíblica · 11h15 Celebração',
    },
    mobileBar: {
      ariaLabel: 'Ações rápidas de navegação e contato',
      map: 'Mapa',
      schedule: 'Horários',
      whatsapp: 'WhatsApp',
    },
  },

  en: {
    meta: {
      title: 'IEB Horta — Evangelical Baptist Church of Horta',
      description:
        'A place of faith, family, and new beginnings on Faial Island, Azores. Service times, statement of faith, ministries, @iebhorta community, and plan your visit to Igreja Evangélica Baptista da Horta.',
      skipToContent: 'Skip to main content',
    },
    nav: {
      ariaMain: 'Main navigation',
      ariaMobile: 'Mobile navigation',
      ariaLanguage: 'Change website language',
      languageMenuTitle: 'Language',
      links: {
        schedule: 'Schedule',
        essence: 'About',
        ministries: 'Ministries',
        community: 'Resources',
        visit: 'Contact',
      },
      subLinks: {
        churchHistory: 'The Church (51 Years)',
        whatWeBelieve: 'What We Believe',
        cooperation: 'Baptist Cooperation',
        instagramFeed: 'Moments @iebhorta',
        archivesEvents: 'Archives & Events',
        offeringsMission: 'Giving & Mission',
      },
      ctaVisit: 'Plan a Visit',
      ctaVisitDrawer: 'Plan Your First Visit',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      closeNavDrawer: 'Close navigation menu',
      drawerSummary: 'Sundays at 10:00 (Sunday School) and 11:15 (Worship).',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Sunlit sanctuary interior with morning light and gathered congregation',
      kickerYears: '51 Years in Horta, Azores',
      headline: 'A place of faith, family, and new beginnings.',
      subheadline:
        'Sustained by the love of God on Faial Island. An open-door Christian church walking alongside you and your family in Scripture and fellowship.',
      ctaVisit: 'Plan Your Visit',
      ctaInstagram: 'Follow @iebhorta',
      watchYouTube: 'Watch on YouTube',
      prevSlide: 'Previous highlight',
      nextSlide: 'Next highlight',
      slideLabelPrefix: 'Highlight',
      slides: {
        welcome: {
          kicker: '51 Years in Horta, Azores',
          headline: 'A place of faith, family, and new beginnings.',
          subheadline:
            'Sustained by the love of God on Faial Island. An open-door Christian church walking alongside you and your family in Scripture and fellowship.',
          ctaLabel: 'Plan Your Visit',
          imageAlt:
            'Sunlit sanctuary interior with morning light and gathered congregation',
        },
        'sunday-worship': {
          kicker: 'Av. Marginal, 17 · Every Sunday',
          headline: 'Worship, biblical teaching, and fellowship in central Horta.',
          subheadline:
            'Join us on Sundays at 10:00 for Sunday Bible School (or 16:00 in Angústias) and at 11:15 for our Celebration Service.',
          ctaLabel: 'See Schedule',
          imageAlt:
            'Sanctuary interior of Igreja Evangélica Baptista da Horta on Avenida Marginal',
        },
        'church-family': {
          kicker: 'Affiliated with the Portuguese Baptist Convention',
          headline: 'A spiritual family across every generation on Faial.',
          subheadline:
            'Children, teens, couples, and seniors united in Jesus Christ, serving our city with warmth and simplicity.',
          ctaLabel: 'About Our Church',
          imageAlt:
            'Members and children of Igreja Evangélica Baptista da Horta gathered together',
        },
      },
      nextSundayAria: 'Next Sunday gathering',
      thisSundayToday: 'This Sunday (Today)',
      nextSundayLabel: 'Next Sunday',
      ebdTitle: 'Sunday Bible School',
      celebrationTitle: 'Celebration Service',
      doorsOpenNote: 'Open doors for the whole family.',
      calendarSaved: 'Invite (.ics) saved',
      calendarSave: 'Add Sunday to calendar',
      ebdStripTextBefore: 'Sunday School at',
      ebdStripTextAfter: 'at Rua do Pasteleiro, 12-D (Angústias)',
      pastorLabel: 'Pastor:',
      whatsappMessage:
        'Hello! I would love to learn more about the services at Igreja Evangélica Baptista da Horta and plan a visit.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Sunday Schedule//EN',
      summary: 'Sunday Celebration Service — IEB Horta',
      description:
        'Sunday Bible School at 10:00 and Worship Service at Igreja Evangélica Baptista da Horta. All are welcome!',
      fileName: 'ieb-horta-sunday-service.ics',
    },
    schedule: {
      kicker: 'Weekly Schedule',
      heading: 'Times to gather together as a family',
      intro:
        'Every Sunday we gather to study Scripture in Sunday Bible School and worship together at our morning service. If this is your first visit, you will be warmly welcomed.',
      filterAria: 'Filter schedule',
      filters: {
        all: 'Full schedule',
        sunday: 'Sundays',
        week: 'Midweek & Families',
      },
      calendarSaved: 'Event saved (.ics)',
      calendarSave: 'Save service to calendar',
      watchYouTube: 'Watch on YouTube',
      confirmVisit: 'Confirm visit',
      items: {
        celebracao: {
          title: 'Celebration Service',
          day: 'Sundays',
          times: ['11:15'],
          location: 'Av. Marginal, 17 — Horta',
          description:
            'Sunday gathering of worship, fellowship, and biblical preaching. During summer (July and August), service begins at 11:00.',
        },
        ebd: {
          title: 'Sunday Bible School (EBD)',
          day: 'Sundays',
          times: ['10:00', '16:00'],
          location: 'Adults, Youth & Children',
          description:
            'Age-grouped Bible study at 10:00 at Av. Marginal, 17, or at 16:00 at Rua do Pasteleiro, 12-D (Angústias).',
        },
        'oracao-lares': {
          title: 'Prayer, Teaching & Small Groups',
          day: 'Midweek',
          times: ['@iebhorta Agenda'],
          location: 'Sanctuary & homes across Faial',
          description:
            'Weekly gatherings for prayer, Scripture reading, and home fellowship. Reach out to confirm this week’s times.',
        },
        'kids-familia': {
          title: 'Children, Parents & Families',
          day: 'Sundays & Events',
          times: ['Family schedule'],
          location: 'Kids EBD & Parque da Salgueirinha',
          description:
            'Creative Bible teaching for children, family workshops in town, and our annual outdoor Family Day.',
        },
      },
    },
    about: {
      familyAlt:
        'Members and children of Igreja Evangélica Baptista da Horta gathered as a church family',
      familyFallback: 'IEB Horta Family',
      familyCaption: 'Our church family gathered in Horta.',
      sanctuaryAlt:
        'Sanctuary interior of IEB Horta on Avenida Marginal with wooden pews and cross',
      sanctuaryFallback: 'Sanctuary Av. Marginal, 17',
      sanctuaryCaption: 'Sanctuary worship · Av. Marginal, 17.',
      kicker: 'About Our Church',
      heading: 'Loving God, serving people, and living the Gospel on the island.',
      sealAlt: 'Official seal of Igreja Evangélica Baptista da Horta',
      tabsAria: 'Explore church history, beliefs, and cooperation',
      tabs: {
        history: 'The Church',
        beliefs: 'What We Believe',
        cooperation: 'Cooperation',
      },
      paragraph1:
        'For 51 years on Faial Island, Igreja Evangélica Baptista da Horta—affiliated with the Portuguese Baptist Convention—has walked together as a spiritual family where every person is welcomed by name and encouraged to grow in faith in Jesus Christ.',
      paragraph2:
        'We believe Christian faith is expressed both in reverent Sunday worship and in practical care throughout the week—supporting families, making disciples, and serving our community generously.',
      quote:
        '“But God demonstrates His own love for us in this: While we were still sinners, Christ died for us.”',
      quoteFooter: 'Romans 5:8 · 51st Anniversary Verse · Pr. Luiz Eduardo Júnior',
      pillarsLabel: 'Our Pillars',
      swipeHint: 'Swipe sideways →',
      pillars: {
        '01': {
          title: 'Worship',
          description:
            'For 51 years in Horta, we have worshiped God with reverence and joy, keeping Christ and the Scriptures at the center of every gathering.',
        },
        '02': {
          title: 'Fellowship',
          description:
            'We are an intergenerational family on Faial Island—children, youth, adults, and seniors walking together and caring for one another.',
        },
        '03': {
          title: 'Service',
          description:
            'We live out the Gospel beyond the sanctuary walls through food drives, practical aid, and warm hospitality.',
        },
      },
      beliefsIntro:
        'We are guided by the Holy Bible and historic Baptist principles: the authority of Scripture, salvation by grace through faith in Christ, local church autonomy, and loving witness.',
      beliefsItems: {
        scriptures: {
          title: 'The Holy Scriptures',
          summary:
            'We believe the Bible is the inspired Word of God, trustworthy and the supreme authority for Christian faith, doctrine, and daily life.',
        },
        'triune-god': {
          title: 'God: Father, Son & Holy Spirit',
          summary:
            'We believe in one living and true God, eternally existing in three persons: God the Father, Jesus Christ His eternal Son and Savior, and the Holy Spirit.',
        },
        salvation: {
          title: 'Salvation by Grace',
          summary:
            'Salvation is God’s free gift offered to everyone through repentance and personal faith in Jesus Christ, who died on the cross and rose again.',
        },
        'local-church': {
          title: 'The Local Church',
          summary:
            'A church is a local fellowship of baptized believers united under the Lordship of Christ for worship, discipleship, and Gospel mission.',
        },
        ordinances: {
          title: 'Baptism & the Lord’s Supper',
          summary:
            'We practice believer’s baptism by immersion as a public testimony of new life in Christ and celebrate the Lord’s Supper in remembrance of Him.',
        },
        'kingdom-mission': {
          title: 'Mission, Service & Hope',
          summary:
            'Every believer is called to love neighbors, share the good news across the Azores and the world, and await Christ’s return in hope.',
        },
      },
      cooperationIntro:
        'Igreja Evangélica Baptista da Horta serves in fellowship and mission alongside sister Baptist churches in the Azores, mainland Portugal, and around the world.',
      cooperationVisitLink: 'Visit website',
      cooperationItems: {
        cbp: {
          name: 'Portuguese Baptist Convention',
          scope: 'National Fellowship',
          description:
            'Affiliation and fraternal cooperation with Baptist churches across Portugal for evangelism and pastoral ministry.',
        },
        aba: {
          name: 'Azorean Baptist Association',
          scope: 'Azores Archipelago',
          description:
            'Regional fellowship uniting Baptist congregations across the Azorean islands through assemblies and camps.',
        },
        aep: {
          name: 'Portuguese Evangelical Alliance',
          scope: 'Evangelical Unity',
          description:
            'Cooperation across evangelical churches promoting Christian witness and religious freedom in Portugal.',
        },
        stb: {
          name: 'Portuguese Baptist Seminary',
          scope: 'Theological Training',
          description:
            'Supporting biblical and ministerial education for pastors, teachers, and church leaders in Portugal.',
        },
        ebf: {
          name: 'European Baptist Federation',
          scope: 'European Network',
          description:
            'Mission and solidarity linking Baptist unions and churches across Europe and the Middle East.',
        },
        bwa: {
          name: 'Baptist World Alliance',
          scope: 'Global Family',
          description:
            'Prayer, mission, and humanitarian partnership uniting millions of Baptist believers worldwide.',
        },
      },
    },
    ministries: {
      kicker: 'Get Involved',
      heading: 'Ministries to walk together',
      intro:
        'There is always a place for your stage of life. Choose a ministry to view schedules, real photos, and connect with our team.',
      ctaJoin: 'I want to join',
      scheduleLabel: 'Schedule',
      audienceLabel: 'Who it’s for',
      items: {
        jovens: {
          title: 'Youth & Teens',
          summary: 'Dedicated Sunday School rooms, fellowship, and Bible dialogue.',
          schedule: 'Sundays at EBD · Weekly gatherings',
          audience: 'Teens and young adults',
          description:
            'A welcoming space to build genuine friendships, talk openly about faith and everyday life, and serve together in the community.',
          imageAlt: 'Hands folded in prayer at an IEB Horta faith gathering',
        },
        casais: {
          title: 'Families & Women',
          summary: 'Family Day, workshops, and Plenas em Cristo gatherings.',
          schedule: 'Periodic gatherings & retreats',
          audience: 'Families, couples, and women',
          description:
            'Gatherings such as Family Day at Parque da Salgueirinha, parent-child workshops, and the Plenas em Cristo women’s fellowship.',
          imageAlt:
            'Women gathered singing with acoustic guitar during Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'Sunday School & Children',
          summary: 'Age-grouped rooms for children, teens, and adults.',
          schedule: 'Sundays at 10:00 & 16:00',
          audience: 'All ages',
          description:
            'Engaging biblical teaching tailored to every age group—with dedicated classrooms for kids, teens, and adults, plus creative family activities.',
          imageAlt:
            'Open Bible with Sunday Bible School times for IEB Horta',
        },
        'acao-social': {
          title: 'Social Outreach',
          summary: 'Community food collection and support across Faial.',
          schedule: 'Ongoing local outreach drives',
          audience: 'Open to all volunteers',
          description:
            'Mobilizing members and friends to collect groceries and essentials to support families in need in Horta.',
          imageAlt:
            'Charity groceries and food supplies collected by IEB Horta Social Outreach',
        },
        'batismo-discipulado': {
          title: 'Baptism & Discipleship',
          summary: 'First steps in Christian faith and pastoral guidance.',
          schedule: 'Guided by Pr. Luiz Eduardo Júnior',
          audience: 'Visitors and new believers',
          description:
            'Personal Bible study to explore the foundations of the Gospel, ask questions, prepare for baptism, and become part of the church.',
          imageAlt: 'Pr. Luiz Eduardo Júnior preaching Scripture in the sanctuary',
        },
      },
    },
    gallery: {
      kickerPrefix: 'Content & Community',
      heading: 'Church life, archives, and mission',
      followCta: 'Follow @iebhorta on Instagram',
      tabsAria: 'Select community section',
      tabs: {
        photos: 'Moments @iebhorta',
        archives: 'Archives & Events',
        giving: 'Giving & Mission',
      },
      filterAria: 'Filter community posts',
      filters: {
        allPrefix: 'All',
        worship: 'Services & Word',
        community: 'Community',
        socialAction: 'Outreach',
      },
      openDetailsPrefix: 'View details',
      tapHint: 'Tap any post to read the full caption.',
      closeLightbox: 'Close preview',
      referenceLabel: 'Reference',
      prevPost: 'Previous post',
      nextPost: 'Next post',
      viewOnInstagram: 'View on @iebhorta',
      posts: {
        'post-preaching': {
          alt: 'Pr. Luiz Eduardo Júnior preaching the Word in the IEB Horta sanctuary',
          category: 'Moment in the Word',
          dateLabel: '1 Cor 10:31',
          caption:
            'Pr. Luiz Eduardo sharing Scripture in the sanctuary: “So whether you eat or drink or whatever you do, do it all for the glory of God.”',
          scripture: '1 Corinthians 10:31',
        },
        'post-schedule': {
          alt: 'Official @iebhorta schedule post: 10:00 Sunday Bible School and 11:15 Celebration at Av. Marginal, 17',
          category: 'Sundays',
          dateLabel: '10:00 & 11:15',
          caption:
            'Every Sunday at Av. Marginal, 17 — Horta: 10:00 Sunday Bible School and 11:15 Celebration Service.',
        },
        'post-social': {
          alt: 'Car trunk filled with grocery bags and milk collected by IEB Horta outreach',
          category: 'Social Outreach',
          dateLabel: 'Service',
          caption:
            'Grateful for every family who contributed groceries and essential supplies to bless neighbors on Faial Island.',
        },
        'post-51-anos': {
          alt: 'Commemorative 51st anniversary poster of Igreja Evangélica Baptista da Horta — Sustained by God’s Love',
          category: '51 Years',
          dateLabel: 'Anniversary',
          caption:
            'Celebrating 51 years of faithfulness in Horta — Sustained by the Love of God, serving generations on the island.',
          scripture: 'Romans 5:8',
        },
        'post-familia': {
          alt: 'Invitation for IEB Horta Family Day at Parque da Salgueirinha, Feteira',
          category: 'Family Day',
          dateLabel: 'Feteira',
          caption:
            'Outdoor worship, fellowship, and a community lunch at Parque da Salgueirinha (Feteira), bringing the whole church together.',
        },
        'post-dai-gracas': {
          alt: 'Thanksgiving @iebhorta post featuring 1 Thessalonians 5:18',
          category: 'Thanksgiving',
          dateLabel: '1 Thess 5:18',
          caption:
            'Thanksgiving Weekend: “Give thanks in all circumstances; for this is God’s will for you in Christ Jesus.”',
          scripture: '1 Thessalonians 5:18',
        },
      },
      archivesIntro:
        'Resources to encourage your faith: Scripture preaching, 51st anniversary highlights on Faial Island, and special community gatherings.',
      archivesYouTubeCta: 'Open YouTube Channel',
      archivesItems: {
        'archive-palavra': {
          category: 'Preaching & Word',
          dateLabel: '1 Corinthians 10:31',
          title: 'Moment in the Word · Pr. Luiz Eduardo Júnior',
          summary:
            'Faithful Scripture teaching applying the Gospel to family, work, and daily life. Watch services in person or on our YouTube channel.',
          actionLabel: 'Watch on YouTube',
          imageAlt: 'Pr. Luiz Eduardo Júnior preaching in the IEB Horta sanctuary',
        },
        'archive-51anos': {
          category: 'Church Milestone',
          dateLabel: '51 Years · Romans 5:8',
          title: '51st Anniversary — Sustained by God’s Love',
          summary:
            'Over half a century of Baptist witness in Horta, gathering generations in gratitude for God’s faithfulness.',
          actionLabel: 'See highlights on @iebhorta',
          imageAlt: '51st anniversary poster for Igreja Evangélica Baptista da Horta',
        },
        'archive-familia': {
          category: 'Community Event',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Outdoor Family Day in Feteira',
          summary:
            'Annual outdoor gathering with worship, community lunch, and fellowship for members, children, and visiting friends.',
          actionLabel: 'Join us next time',
          imageAlt: 'Official poster for Family Day at Parque da Salgueirinha',
        },
        'archive-gracas': {
          category: 'Special Service',
          dateLabel: '1 Thessalonians 5:18',
          title: 'Thanksgiving Weekend in the Azores',
          summary:
            'Times dedicated to praising God together, sharing testimonies, and giving thanks for His provision throughout the year.',
          actionLabel: 'Explore on Instagram',
          imageAlt: 'Thanksgiving Weekend announcement by IEB Horta',
        },
      },
      giving: {
        kicker: 'Stewardship & Generosity',
        heading: 'Support the mission and local outreach on Faial',
        paragraph1:
          'Igreja Evangélica Baptista da Horta sustains its spiritual and community work solely through the voluntary offerings and tithes of its members and friends.',
        paragraph2:
          'Every gift supports our worship sanctuary and Sunday School classrooms, children and youth teaching, regional mission, and food relief for families in Horta.',
        pillars: [
          {
            title: 'Teaching & Public Worship',
            text: 'Maintaining our sanctuary, Sunday School classes, hospitality, and Gospel preaching.',
          },
          {
            title: 'Local Social Outreach',
            text: 'Ongoing food drives and practical care for households in need across Faial Island.',
          },
          {
            title: 'Mission in the Azores',
            text: 'Partnership with the Azorean Baptist Association and local discipleship initiatives.',
          },
        ],
        ctaWhatsApp: 'Request details on WhatsApp',
        ctaEmail: 'Contact via Email',
        whatsappMessage:
          'Hello! I would like to ask how to contribute an offering to Igreja Evangélica Baptista da Horta.',
        mailSubject: 'Offering & Contribution Information — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contact & First Visit',
      heading: 'Plan your first visit',
      intro:
        'It will be a joy to welcome you in person in Horta. Check our locations and let us know when you plan to visit so we can greet you.',
      spaceTabsAria: 'Select church location',
      copyAddress: 'Copy address',
      copiedAddress: 'Address copied',
      visitorNotes: [
        'Central waterfront location facing Horta Bay on Av. Marginal, 17.',
        'Come as you are — our atmosphere is warm and family-friendly.',
        'Sunday Bible School classrooms for adults, teens, and children.',
      ],
      googleMaps: 'Google Maps',
      openWaze: 'Open in Waze',
      formTitle: 'Let us know you’re coming',
      formSubtitle:
        'It takes less than a minute so our welcome team can greet you and your family.',
      nameLabel: 'Your name',
      namePlaceholder: 'e.g., Maria Clara',
      phoneLabel: 'WhatsApp / Phone',
      phonePlaceholder: '+351 9XX XXX XXX',
      dayQuestion: 'Which day would you like to visit?',
      dayAria: 'Preferred visit day',
      dayOptions: [
        'Sunday · 10:00 (Bible School)',
        'Sunday · 11:15 (Celebration Service)',
        'Sunday · 16:00 (EBD, R. do Pasteleiro)',
        'Confirm midweek schedule',
      ],
      groupQuestion: 'How many people?',
      groupAria: 'Group size',
      groupSizeOptions: ['Just me', '2 people', 'Family'],
      noteLabel: 'Note or prayer request (optional)',
      notePlaceholder: 'e.g., Bringing 2 children',
      interestSelected: 'Selected ministry:',
      removeInterest: 'Remove',
      submitCta: 'Confirm Visit Plan',
      errorName: 'Please enter your name so we can welcome you properly.',
      errorPhone: 'Please provide a valid phone or WhatsApp number.',
      successTitlePrefix: 'We look forward to seeing you, ',
      successTitleSuffix: '!',
      successBodyPrefix: 'We have noted your visit plan',
      successBodyFor: 'for',
      successBodyWithInterest: 'with interest in',
      successBodySuffix:
        '. To send this notice directly to the church, choose one of the channels below:',
      sendEmail: 'Send via Email',
      sendWhatsApp: 'Send on WhatsApp',
      newRegistration: 'New entry',
      mailSubjectPrefix: 'Visit Plan',
      summaryGreeting: 'Hello! I am',
      summaryInterestPrefix: 'interested in',
      summaryNotePrefix: 'Note:',
      contactLabel: 'Contact:',
      locations: {
        templo: {
          label: 'Main Sanctuary',
          title: 'Celebration Service & EBD (10:00)',
          region: 'Matriz · Faial Island, Azores, Portugal',
          note: 'Facing Horta Bay, with easy access and a warm welcome.',
        },
        ebd: {
          label: 'EBD Rooms (16:00)',
          title: 'Sunday Bible School (Sunday 16:00)',
          region: '9900 Horta · Faial Island, Azores',
          note: 'Temporary facility with separate rooms for Adults, Teens, and Children.',
        },
      },
    },
    footer: {
      summary:
        'For 51 years on Faial Island, a Christian community dedicated to loving God, serving people, and sharing the Gospel with simplicity.',
      navigationTitle: 'Navigation & Sections',
      cooperationTitle: 'Baptist Cooperation',
      channelsTitle: 'Follow & Contact Us',
      instagramLabel: 'Instagram @iebhorta',
      facebookLabel: 'Facebook IEB Horta',
      youtubeLabel: 'YouTube IEB Horta',
      whatsappLabel: 'Church WhatsApp',
      rightsReserved: 'All rights reserved.',
      sundayLine: 'Sundays · 10:00 Bible School · 11:15 Celebration Service',
    },
    mobileBar: {
      ariaLabel: 'Quick navigation and contact actions',
      map: 'Map',
      schedule: 'Services',
      whatsapp: 'WhatsApp',
    },
  },

  fr: {
    meta: {
      title: 'IEB Horta — Église Évangélique Baptiste de Horta',
      description:
        'Un lieu de foi, de famille et de nouveaux départs sur l’île de Faial, Açores. Horaires des cultes, confession de foi, ministères, communauté @iebhorta et informations pour planifier votre visite.',
      skipToContent: 'Aller au contenu principal',
    },
    nav: {
      ariaMain: 'Navigation principale',
      ariaMobile: 'Menu mobile',
      ariaLanguage: 'Changer la langue du site',
      languageMenuTitle: 'Langue',
      links: {
        schedule: 'Horaires',
        essence: 'À propos',
        ministries: 'Ministères',
        community: 'Contenus',
        visit: 'Contacts',
      },
      subLinks: {
        churchHistory: 'L’Église (51 Ans)',
        whatWeBelieve: 'Ce Que Nous Croyons',
        cooperation: 'Coopération Baptiste',
        instagramFeed: 'Moments @iebhorta',
        archivesEvents: 'Archives & Événements',
        offeringsMission: 'Offrandes & Mission',
      },
      ctaVisit: 'Je Visite',
      ctaVisitDrawer: 'Planifier votre première visite',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      closeNavDrawer: 'Fermer le menu de navigation',
      drawerSummary: 'Dimanches à 10h00 (École Biblique) et 11h15 (Culte).',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Intérieur lumineux de l’église baigné par la lumière du matin avec la communauté réunie',
      kickerYears: '51 Ans à Horta, Açores',
      headline: 'Un lieu de foi, de famille et de nouveaux départs.',
      subheadline:
        'Soutenus par l’amour de Dieu sur l’île de Faial. Une église chrétienne aux portes ouvertes pour marcher avec vous et votre famille dans la Parole et la communion.',
      ctaVisit: 'Planifier votre visite',
      ctaInstagram: 'Suivre @iebhorta',
      watchYouTube: 'Cultes sur YouTube',
      prevSlide: 'Temps fort précédent',
      nextSlide: 'Temps fort suivant',
      slideLabelPrefix: 'Temps fort',
      slides: {
        welcome: {
          kicker: '51 Ans à Horta, Açores',
          headline: 'Un lieu de foi, de famille et de nouveaux départs.',
          subheadline:
            'Soutenus par l’amour de Dieu sur l’île de Faial. Une église chrétienne aux portes ouvertes pour marcher avec vous et votre famille dans la Parole et la communion.',
          ctaLabel: 'Planifier votre visite',
          imageAlt:
            'Intérieur lumineux de l’église baigné par la lumière du matin avec la communauté réunie',
        },
        'sunday-worship': {
          kicker: 'Av. Marginal, 17 · Tous les Dimanches',
          headline: 'Adoration, enseignement biblique et communion à Horta.',
          subheadline:
            'Nous nous réunissons le dimanche à 10h00 pour l’École Biblique (ou à 16h00 à Angústias) et à 11h15 pour le Culte de Célébration.',
          ctaLabel: 'Voir les Horaires',
          imageAlt:
            'Intérieur du temple de l’Igreja Evangélica Baptista da Horta sur l’Avenida Marginal',
        },
        'church-family': {
          kicker: 'Affiliée à la Convention Baptiste Portugaise',
          headline: 'Une famille spirituelle pour toutes les générations à Faial.',
          subheadline:
            'Enfants, jeunes, couples et aînés unis par l’Évangile de Jésus-Christ, au service de notre ville avec espérance.',
          ctaLabel: 'Découvrir l’Église',
          imageAlt:
            'Membres et enfants de l’Igreja Evangélica Baptista da Horta réunis en famille',
        },
      },
      nextSundayAria: 'Prochain culte du dimanche',
      thisSundayToday: 'Ce Dimanche (Aujourd’hui)',
      nextSundayLabel: 'Dimanche prochain',
      ebdTitle: 'École Biblique du Dimanche',
      celebrationTitle: 'Culte de Célébration',
      doorsOpenNote: 'Portes ouvertes à toute la famille.',
      calendarSaved: 'Invitation (.ics) enregistrée',
      calendarSave: 'Ajouter dimanche à l’agenda',
      ebdStripTextBefore: 'École biblique à',
      ebdStripTextAfter: '— Rua do Pasteleiro, 12-D (Angústias)',
      pastorLabel: 'Pasteur :',
      whatsappMessage:
        'Bonjour ! Je souhaiterais en savoir plus sur les cultes de l’Igreja Evangélica Baptista da Horta et planifier une visite.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Agenda Dominical//FR',
      summary: 'Culte de Célébration — IEB Horta',
      description:
        'École Biblique à 10h00 et Culte de Célébration à l’Igreja Evangélica Baptista da Horta. Bienvenue à tous !',
      fileName: 'culte-ieb-horta.ics',
    },
    schedule: {
      kicker: 'Programme Hebdomadaire',
      heading: 'Nos rendez-vous en famille',
      intro:
        'Chaque dimanche, nous nous réunissons pour étudier les Écritures à l’École Biblique et célébrer ensemble lors du culte du matin. Si c’est votre première visite, vous y serez chaleureusement accueilli(e).',
      filterAria: 'Filtrer le programme',
      filters: {
        all: 'Tout le programme',
        sunday: 'Dimanches',
        week: 'Semaine & Familles',
      },
      calendarSaved: 'Événement enregistré (.ics)',
      calendarSave: 'Enregistrer au calendrier',
      watchYouTube: 'Voir sur YouTube',
      confirmVisit: 'Confirmer une visite',
      items: {
        celebracao: {
          title: 'Culte de Célébration',
          day: 'Dimanches',
          times: ['11h15'],
          location: 'Av. Marginal, 17 — Horta',
          description:
            'Culte dominical de louange, de communion fraternelle et d’enseignement biblique. En été (juillet et août), le culte débute à 11h00.',
        },
        ebd: {
          title: 'École Biblique du Dimanche (EBD)',
          day: 'Dimanches',
          times: ['10h00', '16h00'],
          location: 'Adultes, adolescents et enfants',
          description:
            'Étude biblique par tranches d’âge à 10h00, Av. Marginal, 17, ou à 16h00, Rua do Pasteleiro, 12-D (Angústias).',
        },
        'oracao-lares': {
          title: 'Prière, Enseignement & Groupes de Maison',
          day: 'En semaine',
          times: ['Agenda @iebhorta'],
          location: 'Temple et foyers à Faial',
          description:
            'Rencontres hebdomadaires de prière, lecture des Écritures et communion dans les foyers. Contactez-nous pour confirmer les horaires.',
        },
        'kids-familia': {
          title: 'Enfants, Parents & Familles',
          day: 'Dimanches et événements',
          times: ['Programme familial'],
          location: 'EBD Enfants et Parque da Salgueirinha',
          description:
            'Enseignement biblique créatif pour les enfants, ateliers familiaux en ville et notre traditionnelle Journée de la Famille en plein air.',
        },
      },
    },
    about: {
      familyAlt:
        'Membres et enfants de l’Igreja Evangélica Baptista da Horta réunis en famille',
      familyFallback: 'Famille IEB Horta',
      familyCaption: 'Notre famille réunie à Horta.',
      sanctuaryAlt:
        'Intérieur du temple de l’IEB Horta sur l’Avenida Marginal avec bancs en bois et croix',
      sanctuaryFallback: 'Temple Av. Marginal, 17',
      sanctuaryCaption: 'Culte au temple · Av. Marginal, 17.',
      kicker: 'À propos de l’Église',
      heading: 'Aimer Dieu, servir les personnes et vivre l’Évangile sur l’île.',
      sealAlt: 'Sceau officiel Igreja Evangélica Baptista da Horta',
      tabsAria: 'Explorer histoire, foi et coopération',
      tabs: {
        history: 'L’Église',
        beliefs: 'Ce Que Nous Croyons',
        cooperation: 'Coopération',
      },
      paragraph1:
        'Depuis 51 ans sur l’île de Faial, l’Igreja Evangélica Baptista da Horta, affiliée à la Convention Baptiste Portugaise, marche comme une famille spirituelle où chacun est accueilli par son nom et encouragé à grandir dans la foi en Jésus-Christ.',
      paragraph2:
        'Nous croyons que la foi chrétienne s’exprime autant dans le recueillement du culte dominical que dans l’entraide concrète durant la semaine — en soutenant les familles, en formant des disciples et en servant avec générosité.',
      quote:
        '« Mais Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore des pécheurs, Christ est mort pour nous. »',
      quoteFooter: 'Romains 5:8 · Devise des 51 Ans · Pasteur Luiz Eduardo Júnior',
      pillarsLabel: 'Nos Piliers',
      swipeHint: 'Glisser sur le côté →',
      pillars: {
        '01': {
          title: 'Adoration',
          description:
            'Nous célébrons Dieu avec révérence et joie depuis 51 ans à Horta, en gardant Christ et les Écritures au centre de chaque rencontre.',
        },
        '02': {
          title: 'Communion',
          description:
            'Nous sommes une famille intergénérationnelle sur l’île de Faial — enfants, jeunes, adultes et aînés marchant ensemble.',
        },
        '03': {
          title: 'Service',
          description:
            'Nous vivons l’Évangile au-delà des murs du temple grâce aux collectes alimentaires solidaires et à un accueil attentif.',
        },
      },
      beliefsIntro:
        'Nous nous appuyons sur la Sainte Bible et les convictions historiques de la foi baptiste : l’autorité des Écritures, le salut par la grâce en Jésus-Christ, l’autonomie de l’église locale et le service fraternel.',
      beliefsItems: {
        scriptures: {
          title: 'Les Saintes Écritures',
          summary:
            'Nous croyons que la Bible est la Parole inspirée de Dieu, digne de confiance et règle souveraine de foi et de vie chrétienne.',
        },
        'triune-god': {
          title: 'Dieu Père, Fils et Saint-Esprit',
          summary:
            'Nous croyons en un seul Dieu vivant et vrai, éternellement subsistant en trois personnes : le Père créateur, le Fils Jésus-Christ notre Sauveur, et le Saint-Esprit.',
        },
        salvation: {
          title: 'Le Salut par la Grâce',
          summary:
            'Le salut est un don gratuit de Dieu offert à tous par la repentance et la foi personnelle en Jésus-Christ, mort sur la croix et ressuscité.',
        },
        'local-church': {
          title: 'L’Église Locale',
          summary:
            'L’église est une communauté de croyants baptisés unis dans la communion de l’Évangile sous l’autorité du Christ pour adorer et témoigner.',
        },
        ordinances: {
          title: 'Baptême et Sainte-Cène',
          summary:
            'Nous pratiquons le baptême par immersion comme témoignage public d’une vie nouvelle en Christ et la Sainte-Cène en mémoire de Lui.',
        },
        'kingdom-mission': {
          title: 'Mission, Service et Espérance',
          summary:
            'Chaque chrétien est appelé à aimer son prochain, annoncer l’Évangile aux Açores et dans le monde, et attendre avec espérance le Royaume de Dieu.',
        },
      },
      cooperationIntro:
        'L’Igreja Evangélica Baptista da Horta chemine en communion et en coopération missionnaire et théologique avec les églises sœurs aux Açores, au Portugal continental et dans le monde.',
      cooperationVisitLink: 'Visiter le site',
      cooperationItems: {
        cbp: {
          name: 'Convention Baptiste Portugaise',
          scope: 'Niveau National',
          description:
            'Affiliation et coopération fraternelle avec les églises baptistes de tout le Portugal pour l’évangélisation et le service.',
        },
        aba: {
          name: 'Association Baptiste Açoréenne',
          scope: 'Archipel des Açores',
          description:
            'Communion régionale entre les églises baptistes des îles des Açores lors d’assemblées et de camps.',
        },
        aep: {
          name: 'Alliance Évangélique Portugaise',
          scope: 'Unité Évangélique',
          description:
            'Coopération interconfessionnelle autour de l’Évangile, de la liberté religieuse et du témoignage chrétien.',
        },
        stb: {
          name: 'Séminaire Théologique Baptiste',
          scope: 'Formation Biblique',
          description:
            'Soutien à la formation biblique et pastorale des responsables et serviteurs des églises au Portugal.',
        },
        ebf: {
          name: 'Fédération Baptiste Européenne',
          scope: 'Réseau Européen',
          description:
            'Partenariat missionnaire et solidaire reliant les unions baptistes à travers l’Europe et le Moyen-Orient.',
        },
        bwa: {
          name: 'Alliance Baptiste Mondiale',
          scope: 'Famille Mondiale',
          description:
            'Prière, mission et entraide humanitaire unissant des millions de chrétiens baptistes dans le monde.',
        },
      },
    },
    ministries: {
      kicker: 'S’engager',
      heading: 'Des ministères pour marcher ensemble',
      intro:
        'Il y a toujours une place pour votre étape de vie. Choisissez un ministère pour découvrir les horaires, des photos réelles et contacter l’équipe.',
      ctaJoin: 'Je veux participer',
      scheduleLabel: 'Horaire',
      audienceLabel: 'Public',
      items: {
        jovens: {
          title: 'Jeunes & Adolescents',
          summary: 'Salles dédiées à l’EBD, amitié et dialogue biblique.',
          schedule: 'Dimanches à l’EBD · Rencontres hebdomadaires',
          audience: 'Adolescents et jeunes adultes',
          description:
            'Un espace pour tisser de vraies amitiés, échanger librement sur la foi et le quotidien, et servir ensemble dans la communauté.',
          imageAlt: 'Mains en prière lors d’une rencontre de foi de l’IEB Horta',
        },
        casais: {
          title: 'Familles & Femmes',
          summary: 'Journée de la Famille, ateliers et rencontres Plenas em Cristo.',
          schedule: 'Rencontres périodiques et retraites',
          audience: 'Familles, couples et femmes',
          description:
            'Des initiatives comme la Journée de la Famille au Parque da Salgueirinha, des ateliers parents-enfants et les rencontres féminines Plenas em Cristo.',
          imageAlt:
            'Femmes réunies chantant avec guitare lors de la rencontre Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'École Biblique & Enfants',
          summary: 'Salles adaptées pour enfants, adolescents et adultes.',
          schedule: 'Dimanches à 10h00 et à 16h00',
          audience: 'Tous les âges',
          description:
            'Un enseignement biblique adapté à chaque âge — avec des salles pour enfants, adolescents et adultes, ainsi que des ateliers créatifs en famille.',
          imageAlt:
            'Bible ouverte avec les horaires de l’École Biblique du Dimanche de l’IEB Horta',
        },
        'acao-social': {
          title: 'Action Sociale',
          summary: 'Collecte et partage solidaire de denrées à Faial.',
          schedule: 'Campagnes continues d’entraide locale',
          audience: 'Ouvert à tous les bénévoles',
          description:
            'Mobilisation des membres et amis pour collecter des denrées alimentaires et soutenir les familles dans le besoin à Horta.',
          imageAlt:
            'Provisions solidaires collectées par l’Action Sociale de l’IEB Horta',
        },
        'batismo-discipulado': {
          title: 'Baptême & Discipulat',
          summary: 'Premiers pas dans la foi chrétienne et suivi pastoral.',
          schedule: 'Accompagnement avec le Pasteur Luiz Eduardo Júnior',
          audience: 'Visiteurs et nouveaux membres',
          description:
            'Étude biblique de proximité pour découvrir les fondements de l’Évangile, poser vos questions et préparer le baptême.',
          imageAlt: 'Le pasteur Luiz Eduardo Júnior prêchant les Écritures au temple',
        },
      },
    },
    gallery: {
      kickerPrefix: 'Contenus & Communauté',
      heading: 'Vie communautaire, archives et mission',
      followCta: 'Suivre @iebhorta sur Instagram',
      tabsAria: 'Choisir une section de contenus',
      tabs: {
        photos: 'Moments @iebhorta',
        archives: 'Archives & Événements',
        giving: 'Offrandes & Mission',
      },
      filterAria: 'Filtrer les publications',
      filters: {
        allPrefix: 'Toutes',
        worship: 'Cultes & Parole',
        community: 'Communauté',
        socialAction: 'Action Sociale',
      },
      openDetailsPrefix: 'Voir les détails',
      tapHint: 'Touchez une publication pour lire la légende complète.',
      closeLightbox: 'Fermer l’aperçu',
      referenceLabel: 'Référence',
      prevPost: 'Publication précédente',
      nextPost: 'Publication suivante',
      viewOnInstagram: 'Voir sur @iebhorta',
      posts: {
        'post-preaching': {
          alt: 'Le pasteur Luiz Eduardo Júnior prêchant la Parole au temple de l’IEB Horta',
          category: 'Temps de la Parole',
          dateLabel: '1 Cor 10:31',
          caption:
            'Le pasteur Luiz Eduardo partageant les Écritures : « Soit donc que vous mangiez, soit que vous buviez, soit que vous fassiez quelque autre chose, faites tout pour la gloire de Dieu. »',
          scripture: '1 Corinthiens 10:31',
        },
        'post-schedule': {
          alt: 'Publication officielle des horaires @iebhorta : 10h00 École Biblique et 11h15 Culte, Av. Marginal, 17',
          category: 'Dimanches',
          dateLabel: '10h00 & 11h15',
          caption:
            'Tous les dimanches, Av. Marginal, 17 — Horta : à 10h00 École Biblique du Dimanche et à 11h15 Culte de Célébration.',
        },
        'post-social': {
          alt: 'Coffre de voiture rempli de sacs de courses et de lait collectés par l’action sociale de l’IEB Horta',
          category: 'Action Sociale',
          dateLabel: 'Service',
          caption:
            'Reconnaissance envers chaque famille qui a contribué à la collecte solidaire sur l’île de Faial.',
        },
        'post-51-anos': {
          alt: 'Affiche des 51 ans de l’Igreja Evangélica Baptista da Horta — Soutenus par l’Amour de Dieu',
          category: '51 Ans',
          dateLabel: 'Anniversaire',
          caption:
            'Célébration des 51 ans de fidélité à Horta — Soutenus par l’Amour de Dieu, au service des générations sur l’île.',
          scripture: 'Romains 5:8',
        },
        'post-familia': {
          alt: 'Invitation à la Journée de la Famille au Parque da Salgueirinha, Feteira',
          category: 'Journée de la Famille',
          dateLabel: 'Feteira',
          caption:
            'Culte en plein air, moments conviviaux et repas communautaire au Parque da Salgueirinha (Feteira) réunissant toute l’église.',
        },
        'post-dai-gracas': {
          alt: 'Publication d’Action de grâces @iebhorta avec 1 Thessaloniciens 5:18',
          category: 'Action de grâces',
          dateLabel: '1 Th 5:18',
          caption:
            'Week-end d’Action de grâces : « Rendez grâces en toutes choses, car c’est à votre égard la volonté de Dieu en Jésus-Christ. »',
          scripture: '1 Thessaloniciens 5:18',
        },
      },
      archivesIntro:
        'Des contenus pour édifier votre foi : prédications des Écritures, rétrospective des 51 ans à Faial et temps forts de la communauté.',
      archivesYouTubeCta: 'Ouvrir la chaîne YouTube',
      archivesItems: {
        'archive-palavra': {
          category: 'Prédication & Parole',
          dateLabel: '1 Corinthiens 10:31',
          title: 'Temps de la Parole · Pasteur Luiz Eduardo Júnior',
          summary:
            'Partage biblique fidèle pour vivre l’Évangile en famille et au quotidien. Retrouvez nos cultes sur place et sur YouTube.',
          actionLabel: 'Regarder sur YouTube',
          imageAlt: 'Le pasteur Luiz Eduardo Júnior prêchant au temple de l’IEB Horta',
        },
        'archive-51anos': {
          category: 'Jubilé',
          dateLabel: '51 Ans · Romains 5:8',
          title: '51e Anniversaire — Soutenus par l’Amour de Dieu',
          summary:
            'Plus d’un demi-siècle de présence baptiste à Horta, rassemblant toutes les générations dans la reconnaissance envers Dieu.',
          actionLabel: 'Voir sur @iebhorta',
          imageAlt: 'Affiche du 51e anniversaire de l’IEB Horta',
        },
        'archive-familia': {
          category: 'Événement Communautaire',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Journée de la Famille en plein air à Feteira',
          summary:
            'Rencontre annuelle avec culte en plein air, repas partagé et moments fraternels pour les familles et visiteurs sur l’île.',
          actionLabel: 'Participer à la prochaine',
          imageAlt: 'Invitation officielle à la Journée de la Famille à Feteira',
        },
        'archive-gracas': {
          category: 'Célébration Spéciale',
          dateLabel: '1 Thessaloniciens 5:18',
          title: 'Week-end d’Action de grâces aux Açores',
          summary:
            'Des cultes dédiés à la louange, au partage de témoignages et à la gratitude pour la fidélité de Dieu tout au long de l’année.',
          actionLabel: 'Découvrir sur Instagram',
          imageAlt: 'Annonce du Week-end d’Action de grâces de l’IEB Horta',
        },
      },
      giving: {
        kicker: 'Générosité & Soutien',
        heading: 'Soutenir la mission et l’entraide locale à Faial',
        paragraph1:
          'L’Igreja Evangélica Baptista da Horta soutient son ministère spirituel et social uniquement grâce aux dons et offrandes volontaires de ses membres et amis.',
        paragraph2:
          'Chaque contribution permet d’entretenir les lieux de culte et d’École Biblique, l’enseignement pour les enfants et les jeunes, la mission et l’aide alimentaire à Horta.',
        pillars: [
          {
            title: 'Enseignement & Culte Public',
            text: 'Soutien des salles d’École Biblique, de l’accueil des visiteurs et du partage de la Parole.',
          },
          {
            title: 'Action Sociale Locale',
            text: 'Collecte régulière de denrées et soutien concret aux foyers dans le besoin sur l’île de Faial.',
          },
          {
            title: 'Mission aux Açores',
            text: 'Coopération avec l’Association Baptiste Açoréenne et projets locaux de discipulat.',
          },
        ],
        ctaWhatsApp: 'Demander les informations via WhatsApp',
        ctaEmail: 'Contacter par e-mail',
        whatsappMessage:
          'Bonjour ! Je souhaiterais obtenir les informations pour faire un don à l’Igreja Evangélica Baptista da Horta.',
        mailSubject: 'Informations sur les dons et offrandes — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contacts & Première Visite',
      heading: 'Planifiez votre première visite',
      intro:
        'Ce sera une joie de vous accueillir en personne à Horta. Consultez nos lieux de rencontre et prévenez-nous du jour de votre venue.',
      spaceTabsAria: 'Choisir le lieu de l’église',
      copyAddress: 'Copier l’adresse',
      copiedAddress: 'Adresse copiée',
      visitorNotes: [
        'Emplacement central face à la baie de Horta, Av. Marginal, 17.',
        'Venez tel que vous êtes — notre ambiance est chaleureuse et familiale.',
        'Salles d’École Biblique pour adultes, adolescents et enfants.',
      ],
      googleMaps: 'Google Maps',
      openWaze: 'Ouvrir dans Waze',
      formTitle: 'Prévenez-nous de votre venue',
      formSubtitle:
        'Moins d’une minute suffit afin que notre équipe d’accueil vous souhaite la bienvenue.',
      nameLabel: 'Votre nom',
      namePlaceholder: 'Ex. : Maria Clara',
      phoneLabel: 'WhatsApp / Téléphone',
      phonePlaceholder: '+351 9XX XXX XXX',
      dayQuestion: 'Quel jour souhaitez-vous nous rendre visite ?',
      dayAria: 'Jour souhaité pour la visite',
      dayOptions: [
        'Dimanche · 10h00 (École Biblique)',
        'Dimanche · 11h15 (Culte de Célébration)',
        'Dimanche · 16h00 (EBD, R. do Pasteleiro)',
        'Confirmer les horaires de la semaine',
      ],
      groupQuestion: 'Combien de personnes ?',
      groupAria: 'Nombre de visiteurs',
      groupSizeOptions: ['Moi seul(e)', '2 personnes', 'En famille'],
      noteLabel: 'Message ou sujet de prière (facultatif)',
      notePlaceholder: 'Ex. : Nous venons avec 2 enfants',
      interestSelected: 'Ministère sélectionné :',
      removeInterest: 'Retirer',
      submitCta: 'Confirmer la visite',
      errorName: 'Veuillez indiquer votre nom pour préparer votre accueil.',
      errorPhone: 'Veuillez saisir un numéro de téléphone ou WhatsApp valide.',
      successTitlePrefix: 'Nous vous attendons avec joie, ',
      successTitleSuffix: ' !',
      successBodyPrefix: 'Nous avons bien noté votre visite',
      successBodyFor: 'pour',
      successBodyWithInterest: 'avec intérêt pour',
      successBodySuffix:
        '. Pour transmettre cet avis directement à l’église, choisissez un canal ci-dessous :',
      sendEmail: 'Envoyer par e-mail',
      sendWhatsApp: 'Envoyer sur WhatsApp',
      newRegistration: 'Nouvelle demande',
      mailSubjectPrefix: 'Planification de visite',
      summaryGreeting: 'Bonjour ! Je m’appelle',
      summaryInterestPrefix: 'intérêt pour',
      summaryNotePrefix: 'Message :',
      contactLabel: 'Contact :',
      locations: {
        templo: {
          label: 'Temple Principal',
          title: 'Culte de Célébration & EBD (10h00)',
          region: 'Matriz · Île de Faial, Açores, Portugal',
          note: 'Face à la baie de Horta, accès facile et accueil chaleureux.',
        },
        ebd: {
          label: 'Salles EBD (16h00)',
          title: 'École Biblique du Dimanche (Dimanche 16h00)',
          region: '9900 Horta · Île de Faial, Açores',
          note: 'Espace temporaire avec salles séparées pour adultes, adolescents et enfants.',
        },
      },
    },
    footer: {
      summary:
        'Depuis 51 ans sur l’île de Faial, une communauté chrétienne dédiée à aimer Dieu, servir les personnes et annoncer l’Évangile avec simplicité.',
      navigationTitle: 'Navigation & Sections',
      cooperationTitle: 'Coopération Baptiste',
      channelsTitle: 'Suivre & Nous Contacter',
      instagramLabel: 'Instagram @iebhorta',
      facebookLabel: 'Facebook IEB Horta',
      youtubeLabel: 'YouTube IEB Horta',
      whatsappLabel: 'WhatsApp de l’Église',
      rightsReserved: 'Tous droits réservés.',
      sundayLine: 'Dimanches · 10h00 École Biblique · 11h15 Culte',
    },
    mobileBar: {
      ariaLabel: 'Actions rapides de navigation et de contact',
      map: 'Carte',
      schedule: 'Horaires',
      whatsapp: 'WhatsApp',
    },
  },

  es: {
    meta: {
      title: 'IEB Horta — Iglesia Evangélica Bautista de Horta',
      description:
        'Un lugar de fe, familia y nuevos comienzos en la Isla de Faial, Azores. Horarios de cultos, confesión de fe, ministerios, comunidad @iebhorta e información para planificar tu visita.',
      skipToContent: 'Saltar al contenido principal',
    },
    nav: {
      ariaMain: 'Navegación principal',
      ariaMobile: 'Menú móvil',
      ariaLanguage: 'Cambiar el idioma del sitio',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Horarios',
        essence: 'Sobre Nosotros',
        ministries: 'Ministerios',
        community: 'Contenidos',
        visit: 'Contactos',
      },
      subLinks: {
        churchHistory: 'La Iglesia (51 Años)',
        whatWeBelieve: 'Lo Que Creemos',
        cooperation: 'Cooperación Bautista',
        instagramFeed: 'Momentos @iebhorta',
        archivesEvents: 'Archivos & Eventos',
        offeringsMission: 'Ofrendas & Misión',
      },
      ctaVisit: 'Quiero Visitar',
      ctaVisitDrawer: 'Planifica tu Primera Visita',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      closeNavDrawer: 'Cerrar menú de navegación',
      drawerSummary: 'Domingos a las 10:00 (EBD) y a las 11:15 (Celebración).',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Interior luminoso de la iglesia con luz natural de la mañana y comunidad reunida',
      kickerYears: '51 Años en Horta, Azores',
      headline: 'Un lugar de fe, familia y nuevos comienzos.',
      subheadline:
        'Sostenidos por el amor de Dios en la Isla de Faial. Una iglesia cristiana de puertas abiertas para caminar contigo y tu familia en la Palabra y la comunión.',
      ctaVisit: 'Planifica tu Visita',
      ctaInstagram: 'Sigue a @iebhorta',
      watchYouTube: 'Cultos en YouTube',
      prevSlide: 'Destacado anterior',
      nextSlide: 'Siguiente destacado',
      slideLabelPrefix: 'Destacado',
      slides: {
        welcome: {
          kicker: '51 Años en Horta, Azores',
          headline: 'Un lugar de fe, familia y nuevos comienzos.',
          subheadline:
            'Sostenidos por el amor de Dios en la Isla de Faial. Una iglesia cristiana de puertas abiertas para caminar contigo y tu familia en la Palabra y la comunión.',
          ctaLabel: 'Planifica tu Visita',
          imageAlt:
            'Interior luminoso de la iglesia con luz natural de la mañana y comunidad reunida',
        },
        'sunday-worship': {
          kicker: 'Av. Marginal, n.º 17 · Todos los Domingos',
          headline: 'Adoración, enseñanza bíblica y comunión en Horta.',
          subheadline:
            'Nos reunimos los domingos a las 10:00 en la Escuela Bíblica Dominical (o a las 16:00 en Angústias) y a las 11:15 en el Culto de Celebración.',
          ctaLabel: 'Ver Horarios',
          imageAlt:
            'Interior del templo de la Igreja Evangélica Baptista da Horta en Avenida Marginal',
        },
        'church-family': {
          kicker: 'Afiliada a la Convención Bautista Portuguesa',
          headline: 'Una familia espiritual para todas las generaciones en Faial.',
          subheadline:
            'Niños, jóvenes, matrimonios y mayores unidos por el Evangelio de Jesucristo, sirviendo a nuestra ciudad con sencillez.',
          ctaLabel: 'Conocer la Iglesia',
          imageAlt:
            'Miembros y niños de la Igreja Evangélica Baptista da Horta reunidos en familia',
        },
      },
      nextSundayAria: 'Próximo encuentro dominical',
      thisSundayToday: 'Este Domingo (Hoy)',
      nextSundayLabel: 'Próximo Domingo',
      ebdTitle: 'Escuela Bíblica Dominical',
      celebrationTitle: 'Culto de Celebración',
      doorsOpenNote: 'Puertas abiertas para toda la familia.',
      calendarSaved: 'Invitación (.ics) guardada',
      calendarSave: 'Añadir domingo a la agenda',
      ebdStripTextBefore: 'EBD a las',
      ebdStripTextAfter: 'en Rua do Pasteleiro, n.º 12-D (Angústias)',
      pastorLabel: 'Pastorado:',
      whatsappMessage:
        '¡Hola! Me gustaría saber más sobre los cultos de la Igreja Evangélica Baptista da Horta y planificar una visita.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Agenda Dominical//ES',
      summary: 'Culto de Celebración — IEB Horta',
      description:
        'Escuela Bíblica Dominical a las 10:00 y Culto de Celebración en la Igreja Evangélica Baptista da Horta. ¡Puertas abiertas!',
      fileName: 'culto-ieb-horta.ics',
    },
    schedule: {
      kicker: 'Programación Semanal',
      heading: 'Horarios para reunirnos en familia',
      intro:
        'Cada domingo nos reunimos para estudiar las Escrituras en la Escuela Bíblica Dominical y celebrar juntos en el culto de la mañana. Si es tu primera visita, serás muy bienvenido.',
      filterAria: 'Filtrar programación',
      filters: {
        all: 'Toda la agenda',
        sunday: 'Domingos',
        week: 'Semana & Familias',
      },
      calendarSaved: 'Evento guardado (.ics)',
      calendarSave: 'Guardar culto en el calendario',
      watchYouTube: 'Ver en YouTube',
      confirmVisit: 'Confirmar visita',
      items: {
        celebracao: {
          title: 'Culto de Celebración',
          day: 'Domingos',
          times: ['11:15'],
          location: 'Av. Marginal, n.º 17 — Horta',
          description:
            'Culto dominical de alabanza, comunión y exposición bíblica. En los meses de verano (julio y agosto), comienza a las 11:00.',
        },
        ebd: {
          title: 'Escuela Bíblica Dominical (EBD)',
          day: 'Domingos',
          times: ['10:00', '16:00'],
          location: 'Adultos, Adolescentes y Niños',
          description:
            'Estudio bíblico por edades a las 10:00 en Av. Marginal, n.º 17, o a las 16:00 en Rua do Pasteleiro, n.º 12-D (Angústias).',
        },
        'oracao-lares': {
          title: 'Oración, Enseñanza y Grupos Pequeños',
          day: 'Durante la semana',
          times: ['Agenda @iebhorta'],
          location: 'Templo y hogares en Faial',
          description:
            'Encuentros semanales de oración, lectura de las Escrituras y comunión en los hogares. Confirma los horarios actualizados con nosotros.',
        },
        'kids-familia': {
          title: 'Niños, Padres & Familias',
          day: 'Domingos y eventos',
          times: ['Horario familiar'],
          location: 'EBD Infantil y Parque da Salgueirinha',
          description:
            'Enseñanza bíblica creativa para niños en la EBD, talleres en familia en la ciudad y el tradicional Día de la Familia al aire libre.',
        },
      },
    },
    about: {
      familyAlt:
        'Miembros y niños de la Igreja Evangélica Baptista da Horta reunidos en familia',
      familyFallback: 'Familia IEB Horta',
      familyCaption: 'Nuestra familia reunida en Horta.',
      sanctuaryAlt:
        'Interior del templo de la IEB Horta en Avenida Marginal con bancos de madera y cruz',
      sanctuaryFallback: 'Templo Av. Marginal, 17',
      sanctuaryCaption: 'Culto en el templo · Av. Marginal, 17.',
      kicker: 'Sobre la Iglesia',
      heading: 'Amar a Dios, servir a las personas y vivir el Evangelio en la isla.',
      sealAlt: 'Sello oficial Igreja Evangélica Baptista da Horta',
      tabsAria: 'Explorar historia, fe y cooperación',
      tabs: {
        history: 'La Iglesia',
        beliefs: 'Lo Que Creemos',
        cooperation: 'Cooperación',
      },
      paragraph1:
        'Desde hace 51 años en la Isla de Faial, la Igreja Evangélica Baptista da Horta, afiliada a la Convención Bautista Portuguesa, camina como una familia espiritual donde cada persona es recibida por su nombre y animada a crecer en la fe en Jesucristo.',
      paragraph2:
        'Creemos que la fe cristiana se expresa tanto en la reverencia de la adoración dominical como en el cuidado práctico durante la semana — apoyando familias, formando discípulos y sirviendo a nuestra comunidad con generosidad.',
      quote:
        '“Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.”',
      quoteFooter: 'Romanos 5:8 · Lema de los 51 Años · Pr. Luiz Eduardo Júnior',
      pillarsLabel: 'Nuestros Pilares',
      swipeHint: 'Desliza hacia el lado →',
      pillars: {
        '01': {
          title: 'Adoración',
          description:
            'Celebramos a Dios con reverencia y alegría desde hace 51 años en Horta, manteniendo a Cristo y las Escrituras en el centro de cada encuentro.',
        },
        '02': {
          title: 'Comunión',
          description:
            'Somos una familia intergeneracional en la Isla de Faial — niños, jóvenes, adultos y mayores caminando juntos y cuidándose mutuamente.',
        },
        '03': {
          title: 'Servicio',
          description:
            'Vivimos el Evangelio más allá de las paredes del templo mediante campañas solidarias, apoyo alimentario y acogida cercana.',
        },
      },
      beliefsIntro:
        'Nos guiamos por la Santa Biblia y los principios históricos de la fe bautista: la autoridad de las Escrituras, la salvación por gracia mediante la fe en Cristo, la autonomía de la iglesia local y el servicio fraterno.',
      beliefsItems: {
        scriptures: {
          title: 'Las Sagradas Escrituras',
          summary:
            'Creemos que la Biblia es la Palabra inspirada por Dios, digna de confianza y regla suprema de fe, doctrina y conducta cristiana.',
        },
        'triune-god': {
          title: 'Dios Padre, Hijo y Espíritu Santo',
          summary:
            'Creemos en un solo Dios vivo y verdadero que subsiste eternamente en tres personas: el Padre creador, el Hijo Jesucristo, nuestro Salvador, y el Espíritu Santo.',
        },
        salvation: {
          title: 'La Salvación por Gracia',
          summary:
            'La salvación es don gratuito de Dios ofrecido a todos mediante el arrepentimiento y la fe personal en Jesucristo, quien murió en la cruz y resucitó.',
        },
        'local-church': {
          title: 'La Iglesia Local',
          summary:
            'La iglesia es una congregación de creyentes bautizados unidos en la comunión del Evangelio bajo el señorío de Cristo para adorar y testificar.',
        },
        ordinances: {
          title: 'Bautismo y Cena del Señor',
          summary:
            'Practicamos el bautismo por inmersión como testimonio público de nueva vida en Cristo y celebramos la Cena del Señor en memoria de Él.',
        },
        'kingdom-mission': {
          title: 'Misión, Servicio y Esperanza',
          summary:
            'Cada creyente está llamado a amar al prójimo, compartir las buenas nuevas en las Azores y en el mundo y esperar con fe el Reino de Dios.',
        },
      },
      cooperationIntro:
        'La Igreja Evangélica Baptista da Horta camina en comunión y cooperación misionera, teológica y social con iglesias hermanas en las Azores, Portugal continental y en todo el mundo.',
      cooperationVisitLink: 'Visitar página',
      cooperationItems: {
        cbp: {
          name: 'Convención Bautista Portuguesa',
          scope: 'Ámbito Nacional',
          description:
            'Afiliación y cooperación fraterna con las iglesias bautistas de Portugal para la evangelización y el servicio.',
        },
        aba: {
          name: 'Asociación Bautista Azoreana',
          scope: 'Archipiélago de las Azores',
          description:
            'Comunión regional entre las iglesias bautistas de las islas de las Azores en asambleas y campamentos.',
        },
        aep: {
          name: 'Alianza Evangélica Portuguesa',
          scope: 'Unidad Evangélica',
          description:
            'Cooperación interdenominacional en torno al Evangelio, la libertad religiosa y el testimonio cristiano.',
        },
        stb: {
          name: 'Seminario Teológico Bautista',
          scope: 'Formación Bíblica',
          description:
            'Apoyo a la capacitación bíblica y ministerial de pastores, maestros y líderes en Portugal.',
        },
        ebf: {
          name: 'Federación Bautista Europea',
          scope: 'Red Europea',
          description:
            'Vínculo solidario y misionero con las uniones e iglesias bautistas en toda Europa y Oriente Medio.',
        },
        bwa: {
          name: 'Alianza Bautista Mundial',
          scope: 'Familia Global',
          description:
            'Oración, misión y ayuda humanitaria compartida con millones de creyentes bautistas en todo el mundo.',
        },
      },
    },
    ministries: {
      kicker: 'Involúcrate',
      heading: 'Ministerios para caminar juntos',
      intro:
        'Siempre hay un lugar para tu etapa de vida. Elige un ministerio para consultar los horarios, ver fotografías reales y contactar con el equipo.',
      ctaJoin: 'Quiero participar',
      scheduleLabel: 'Horario',
      audienceLabel: 'Público',
      items: {
        jovens: {
          title: 'Jóvenes & Adolescentes',
          summary: 'Aulas dedicadas en la EBD, comunión y diálogo bíblico.',
          schedule: 'Domingos en la EBD · Encuentros semanales',
          audience: 'Adolescentes y jóvenes adultos',
          description:
            'Espacio para construir amistades verdaderas, conversar abiertamente sobre la fe y el día a día, y servir juntos en la comunidad.',
          imageAlt: 'Manos en oración en un encuentro de fe de la IEB Horta',
        },
        casais: {
          title: 'Familias & Mujeres',
          summary: 'Día de la Familia, talleres y encuentros Plenas em Cristo.',
          schedule: 'Encuentros periódicos y retiros',
          audience: 'Familias, matrimonios y mujeres',
          description:
            'Iniciativas como el Día de la Familia en el Parque da Salgueirinha, talleres con niños y el encuentro femenino Plenas em Cristo.',
          imageAlt:
            'Mujeres reunidas cantando con guitarra durante el encuentro Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'Escuela Bíblica & Infantil',
          summary: 'Aulas separadas para niños, adolescentes y adultos.',
          schedule: 'Domingos a las 10:00 y a las 16:00',
          audience: 'Todas las edades',
          description:
            'Enseñanza bíblica adaptada a cada edad — con aulas dedicadas para niños, adolescentes y adultos, además de talleres creativos en familia.',
          imageAlt:
            'Biblia abierta con los horarios de la Escuela Bíblica Dominical de la IEB Horta',
        },
        'acao-social': {
          title: 'Acción Social',
          summary: 'Recogida y entrega solidaria de alimentos en Faial.',
          schedule: 'Campañas continuas de apoyo local',
          audience: 'Abierto a todos los voluntarios',
          description:
            'Movilización de miembros y amigos para recoger alimentos y apoyar a familias necesitadas en la ciudad de Horta.',
          imageAlt:
            'Compras solidarias y alimentos recogidos por Acción Social de IEB Horta',
        },
        'batismo-discipulado': {
          title: 'Bautismo & Discipulado',
          summary: 'Primeros pasos en la fe cristiana y acompañamiento pastoral.',
          schedule: 'Acompañamiento con el Pr. Luiz Eduardo Júnior',
          audience: 'Visitantes y nuevos miembros',
          description:
            'Estudio bíblico cercano para conocer los fundamentos del Evangelio, resolver dudas, prepararse para el bautismo e integrarse en la iglesia.',
          imageAlt: 'Pr. Luiz Eduardo Júnior predicando las Escrituras en el templo',
        },
      },
    },
    gallery: {
      kickerPrefix: 'Contenidos & Comunidad',
      heading: 'Vida comunitaria, archivos y misión',
      followCta: 'Seguir a @iebhorta en Instagram',
      tabsAria: 'Seleccionar sección de contenidos',
      tabs: {
        photos: 'Momentos @iebhorta',
        archives: 'Archivos & Eventos',
        giving: 'Ofrendas & Misión',
      },
      filterAria: 'Filtrar publicaciones de la comunidad',
      filters: {
        allPrefix: 'Todas',
        worship: 'Cultos & Palabra',
        community: 'Comunidad',
        socialAction: 'Acción Social',
      },
      openDetailsPrefix: 'Ver detalles',
      tapHint: 'Toca una publicación para leer la descripción completa.',
      closeLightbox: 'Cerrar vista previa',
      referenceLabel: 'Referencia',
      prevPost: 'Publicación anterior',
      nextPost: 'Siguiente publicación',
      viewOnInstagram: 'Ver en @iebhorta',
      posts: {
        'post-preaching': {
          alt: 'Pr. Luiz Eduardo Júnior predicando la Palabra en el templo de la IEB Horta',
          category: 'Momento de la Palabra',
          dateLabel: '1 Cor 10:31',
          caption:
            'Pr. Luiz Eduardo compartiendo las Escrituras en el templo: “Si, pues, coméis o bebéis, o hacéis otra cosa, hacedlo todo para la gloria de Dios.”',
          scripture: '1 Corintios 10:31',
        },
        'post-schedule': {
          alt: 'Publicación oficial de horarios de @iebhorta: 10:00 Escuela Bíblica Dominical y 11:15 Celebración en Av. Marginal, 17',
          category: 'Domingos',
          dateLabel: '10:00 & 11:15',
          caption:
            'Todos los domingos en Av. Marginal, n.º 17 — Horta: a las 10:00 Escuela Bíblica Dominical y a las 11:15 Culto de Celebración.',
        },
        'post-social': {
          alt: 'Maletero de coche lleno de bolsas de compras y leche recogidas por la acción social de IEB Horta',
          category: 'Acción Social',
          dateLabel: 'Servicio',
          caption:
            'Gratitud por cada familia que contribuyó con alimentos y productos básicos para apoyar a hogares en la Isla de Faial.',
        },
        'post-51-anos': {
          alt: 'Cartel conmemorativo de los 51 años de la Igreja Evangélica Baptista da Horta — Sostenidos por el Amor de Dios',
          category: '51 Años',
          dateLabel: 'Aniversario',
          caption:
            'Celebrando 51 años de fidelidad en Horta — Sostenidos por el Amor de Dios, sirviendo a generaciones en la isla.',
          scripture: 'Romanos 5:8',
        },
        'post-familia': {
          alt: 'Invitación al Día de la Familia de IEB Horta en el Parque da Salgueirinha, Feteira',
          category: 'Día de la Familia',
          dateLabel: 'Feteira',
          caption:
            'Tiempo de culto al aire libre, convivencia y almuerzo comunitario en el Parque da Salgueirinha (Feteira) reuniendo a toda la iglesia.',
        },
        'post-dai-gracas': {
          alt: 'Publicación de Acción de Gracias de @iebhorta con 1 Tesalonicenses 5:18',
          category: 'Acción de Gracias',
          dateLabel: '1 Ts 5:18',
          caption:
            'Fin de Semana de Acción de Gracias: “Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.”',
          scripture: '1 Tesalonicenses 5:18',
        },
      },
      archivesIntro:
        'Contenidos que edifican tu vida espiritual: predicaciones de la Palabra, hitos de los 51 años en Faial y encuentros especiales abiertos a la ciudad.',
      archivesYouTubeCta: 'Abrir canal en YouTube',
      archivesItems: {
        'archive-palavra': {
          category: 'Predicación & Palabra',
          dateLabel: '1 Corintios 10:31',
          title: 'Momento de la Palabra · Pr. Luiz Eduardo Júnior',
          summary:
            'Exposición fiel de las Escrituras para aplicar el Evangelio en la familia y la vida cotidiana. Sigue los cultos en el templo y en nuestro YouTube.',
          actionLabel: 'Ver en YouTube',
          imageAlt: 'Pr. Luiz Eduardo Júnior predicando en el templo de la IEB Horta',
        },
        'archive-51anos': {
          category: 'Hito Histórico',
          dateLabel: '51 Años · Romanos 5:8',
          title: '51.º Aniversario — Sostenidos por el Amor de Dios',
          summary:
            'Más de medio siglo de testimonio evangélico bautista en Horta, reuniendo a generaciones en gratitud por la fidelidad de Dios.',
          actionLabel: 'Ver en @iebhorta',
          imageAlt: 'Cartel del 51.º aniversario de la IEB Horta',
        },
        'archive-familia': {
          category: 'Evento Comunitario',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Día de la Familia al aire libre en Feteira',
          summary:
            'Encuentro anual con culto al aire libre, almuerzo comunitario y convivencia para miembros, niños y amigos visitantes en la isla.',
          actionLabel: 'Confirmar asistencia',
          imageAlt: 'Cartel oficial del Día de la Familia en el Parque da Salgueirinha',
        },
        'archive-gracas': {
          category: 'Celebración Especial',
          dateLabel: '1 Tesalonicenses 5:18',
          title: 'Fin de Semana de Acción de Gracias en las Azores',
          summary:
            'Momentos dedicados a alabar a Dios en unidad, compartir testimonios y agradecer por las bendiciones recibidas durante el año.',
          actionLabel: 'Explorar en Instagram',
          imageAlt: 'Publicación de Fin de Semana de Acción de Gracias de IEB Horta',
        },
      },
      giving: {
        kicker: 'Generosidad & Sostén',
        heading: 'Contribuye a la misión y la acción local en Faial',
        paragraph1:
          'La Igreja Evangélica Baptista da Horta sostiene su labor espiritual y social únicamente mediante las ofrendas y diezmos voluntarios de sus miembros y amigos.',
        paragraph2:
          'Cada aporte respalda el mantenimiento de los espacios de culto y EBD, la enseñanza bíblica para niños y jóvenes, la misión y las campañas solidarias de alimentos en Faial.',
        pillars: [
          {
            title: 'Enseñanza & Culto Público',
            text: 'Sostén de las aulas de Escuela Bíblica Dominical, acogida de visitantes y predicación bíblica.',
          },
          {
            title: 'Acción Social Local',
            text: 'Recogida continua de alimentos y apoyo directo a hogares necesitados en la Isla de Faial.',
          },
          {
            title: 'Misión en las Azores',
            text: 'Cooperación con la Asociación Bautista Azoreana y proyectos locales de discipulado.',
          },
        ],
        ctaWhatsApp: 'Solicitar datos por WhatsApp',
        ctaEmail: 'Contactar por correo',
        whatsappMessage:
          '¡Hola! Me gustaría recibir información sobre cómo contribuir con ofrendas para la Igreja Evangélica Baptista da Horta.',
        mailSubject: 'Información sobre Ofrendas y Donativos — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contactos & Primera Visita',
      heading: 'Planifica tu primera visita',
      intro:
        'Será una alegría recibirte en persona en Horta. Consulta nuestros espacios y avísanos qué día planeas venir para esperarte.',
      spaceTabsAria: 'Seleccionar espacio de la iglesia',
      copyAddress: 'Copiar dirección',
      copiedAddress: 'Dirección copiada',
      visitorNotes: [
        'Ubicación céntrica frente a la bahía de Horta en Av. Marginal, n.º 17.',
        'Ven tal como estás — nuestro ambiente es acogedor y familiar.',
        'Aulas de Escuela Bíblica Dominical para adultos, adolescentes y niños.',
      ],
      googleMaps: 'Google Maps',
      openWaze: 'Abrir en Waze',
      formTitle: 'Avísanos cuándo vienes',
      formSubtitle:
        'Tarda menos de un minuto. Así nuestro equipo de bienvenida podrá recibirte a ti y a tu familia.',
      nameLabel: 'Tu nombre',
      namePlaceholder: 'Ej.: María Clara',
      phoneLabel: 'WhatsApp / Teléfono',
      phonePlaceholder: '+351 9XX XXX XXX',
      dayQuestion: '¿Qué día planeas visitarnos?',
      dayAria: 'Día previsto para la visita',
      dayOptions: [
        'Domingo · 10:00 (Escuela Bíblica)',
        'Domingo · 11:15 (Culto de Celebración)',
        'Domingo · 16:00 (EBD, R. do Pasteleiro)',
        'Confirmar horarios de la semana',
      ],
      groupQuestion: '¿Cuántas personas vienen?',
      groupAria: 'Cantidad de visitantes',
      groupSizeOptions: ['Solo yo', '2 personas', 'Familia'],
      noteLabel: 'Observación o petición de oración (opcional)',
      notePlaceholder: 'Ej.: Vamos con 2 niños',
      interestSelected: 'Interés seleccionado:',
      removeInterest: 'Quitar',
      submitCta: 'Confirmar Visita',
      errorName: 'Por favor, indica tu nombre para preparar tu bienvenida.',
      errorPhone: 'Indica un número de teléfono o WhatsApp válido.',
      successTitlePrefix: '¡Te estaremos esperando, ',
      successTitleSuffix: '!',
      successBodyPrefix: 'Hemos registrado tu intención de visita',
      successBodyFor: 'para',
      successBodyWithInterest: 'con interés en',
      successBodySuffix:
        '. Si deseas enviar el aviso directamente a la iglesia, elige uno de los siguientes canales:',
      sendEmail: 'Enviar por Correo',
      sendWhatsApp: 'Enviar por WhatsApp',
      newRegistration: 'Nuevo registro',
      mailSubjectPrefix: 'Planificación de Visita',
      summaryGreeting: '¡Hola! Soy',
      summaryInterestPrefix: 'interés en',
      summaryNotePrefix: 'Nota:',
      contactLabel: 'Contacto:',
      locations: {
        templo: {
          label: 'Templo Principal',
          title: 'Culto de Celebración & EBD (10:00)',
          region: 'Matriz · Isla de Faial, Azores, Portugal',
          note: 'Frente a la bahía de Horta, con fácil acceso y cálida bienvenida.',
        },
        ebd: {
          label: 'Aulas EBD (16:00)',
          title: 'Escuela Bíblica Dominical (Domingo 16:00)',
          region: '9900 Horta · Isla de Faial, Azores',
          note: 'Espacio temporal con aulas separadas para Adultos, Adolescentes y Niños.',
        },
      },
    },
    footer: {
      summary:
        'Desde hace 51 años en la Isla de Faial, una comunidad cristiana dedicada a amar a Dios, servir a las personas y anunciar el Evangelio con sencillez.',
      navigationTitle: 'Navegación & Secciones',
      cooperationTitle: 'Cooperación Bautista',
      channelsTitle: 'Síguenos y Contáctanos',
      instagramLabel: 'Instagram @iebhorta',
      facebookLabel: 'Facebook IEB Horta',
      youtubeLabel: 'YouTube IEB Horta',
      whatsappLabel: 'WhatsApp de la Iglesia',
      rightsReserved: 'Todos los derechos reservados.',
      sundayLine: 'Domingos · 10:00 Escuela Bíblica · 11:15 Celebración',
    },
    mobileBar: {
      ariaLabel: 'Acciones rápidas de navegación y contacto',
      map: 'Mapa',
      schedule: 'Horarios',
      whatsapp: 'WhatsApp',
    },
  },
};
