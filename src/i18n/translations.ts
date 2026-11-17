import type {
  ArchiveFeatureItem,
  BeliefArticle,
  BulletinAgendaItem,
  ChurchLocation,
  CooperationPartner,
  EssencePillar,
  GalleryPost,
  HeroSlide,
  MinistryItem,
  NOVEMBER_PRAYER_IDS,
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

export interface LocalizedBulletinAgendaText {
  weekday: string;
  title: string;
  detail: string;
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

type PrayerId = (typeof NOVEMBER_PRAYER_IDS)[number];

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
      novemberAgenda: string;
      essence: string;
      ministries: string;
      community: string;
      visit: string;
    };
    subLinks: {
      novemberAgenda: string;
      novemberAnnouncements: string;
      novemberPrayer: string;
      novemberGratitude: string;
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
  bulletin: {
    kicker: string;
    heading: string;
    intro: string;
    downloadPdf: string;
    printModal: {
      previewTitle: string;
      printNow: string;
      downloadHtml: string;
      close: string;
      venueHeader: string;
      hqHeader: string;
      savedNotice: string;
    };
    tabsAria: string;
    tabs: {
      agenda: string;
      announcements: string;
      prayer: string;
      gratitude: string;
    };
    agendaItems: Record<BulletinAgendaItem['id'], LocalizedBulletinAgendaText>;
    activitiesCard: {
      kicker: string;
      heading: string;
      rows: Array<{ day: string; time: string; label: string }>;
      venueNote: string;
      cta: string;
    };
    venueAnnouncement: {
      kicker: string;
      title: string;
      body1: string;
      times: string[];
      body2: string;
      cta: string;
    };
    thanksgivingDinner: {
      dateShort: string;
      title: string;
      summary: string;
      seeDetails: string;
      description: string;
      details: Array<{ label: string; value: string }>;
      cta: string;
      whatsappMessage: string;
    };
    juntosCampaign: {
      kicker: string;
      title: string;
      description: string;
      tier1Title: string;
      tier1Items: string;
      tier2Title: string;
      tier2Items: string;
    };
    celeiro: {
      kicker: string;
      title: string;
      description: string;
      cta: string;
    };
    prayerIntro: string;
    prayerCta: string;
    prayerWhatsappMessage: string;
    prayerRequests: Record<PrayerId, string>;
    gratitude: {
      kicker: string;
      title: string;
      paragraphs: string[];
      signature: string;
      verse: string;
    };
    birthdays: {
      kicker: string;
      title: string;
      updateNote: string;
      cta: string;
      whatsappMessage: string;
    };
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
  search: {
    buttonAria: string;
    buttonLabel: string;
    drawerButtonLabel: string;
    footerLinkLabel: string;
    modalTitle: string;
    inputPlaceholder: string;
    clearInput: string;
    closeModal: string;
    filterAria: string;
    categories: {
      all: string;
      bulletin: string;
      schedule: string;
      essence: string;
      ministries: string;
      community: string;
      visit: string;
    };
    suggestionsTitle: string;
    suggestions: string[];
    resultsCountSingular: string;
    resultsCountPlural: string;
    emptyTitle: string;
    emptyHint: string;
    keyboardHint: string;
    openResult: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, SiteTranslations> = {
  'pt-PT': {
    meta: {
      title: 'IEB Horta — Igreja Evangélica Baptista da Horta',
      description:
        'Um lugar de fé, família e novos começos na Ilha do Faial. Agenda de novembro, novos horários de domingo (16h00 EBD e 17h15 Culto), ministérios e visita à IEB Horta.',
      skipToContent: 'Saltar para o conteúdo principal',
    },
    nav: {
      ariaMain: 'Navegação principal',
      ariaMobile: 'Menu móvel',
      ariaLanguage: 'Alterar idioma do site',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Horários',
        novemberAgenda: 'Agenda Novembro',
        essence: 'Sobre',
        ministries: 'Ministérios',
        community: 'Conteúdos',
        visit: 'Contactos',
      },
      subLinks: {
        novemberAgenda: 'Agenda do Mês',
        novemberAnnouncements: 'Anúncios & Jantar (27/11)',
        novemberPrayer: 'Motivos de Oração',
        novemberGratitude: 'Gratidão & Aniversários',
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
      drawerSummary: 'Domingos às 16h00 (EBD) e 17h15 (Culto) · AD Faial.',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Interior iluminado da igreja com luz natural da manhã e comunidade reunida',
      kickerYears: 'Boletim Novembro 2026 · 51 Anos no Faial',
      headline: 'Um lugar de fé, família e novos começos.',
      subheadline:
        'Sustentados pelo amor de Deus na Ilha do Faial. A partir de 8 de novembro, os nossos cultos realizam-se nas instalações da Assembleia de Deus do Faial: domingos às 16h00 (EBD) e 17h15 (Culto).',
      ctaVisit: 'Planeie a sua Visita',
      ctaInstagram: 'Siga @iebhorta',
      watchYouTube: 'Cultos no YouTube',
      prevSlide: 'Destaque anterior',
      nextSlide: 'Próximo destaque',
      slideLabelPrefix: 'Destaque',
      slides: {
        welcome: {
          kicker: 'Boletim de Novembro 2026 · 51 Anos no Faial',
          headline: 'Um lugar de fé, família e novos começos.',
          subheadline:
            'Sustentados pelo amor de Deus na Ilha do Faial. Consulte a Agenda de Novembro e os nossos horários dominicais (16h00 EBD · 17h15 Celebração).',
          ctaLabel: 'Ver Agenda Novembro',
          imageAlt:
            'Interior iluminado da igreja com luz natural da manhã e comunidade reunida',
        },
        'sunday-worship': {
          kicker: 'Assembleia de Deus do Faial · Desde 8 de Novembro',
          headline: 'Novos horários de domingo: 16h00 EBD e 17h15 Celebração.',
          subheadline:
            'Reunimo-nos também às quartas-feiras às 19h00 para o Culto de Oração e Estudo da Palavra. Portas abertas para toda a família.',
          ctaLabel: 'Ver Programação',
          imageAlt:
            'Interior do templo da Igreja Evangélica Baptista da Horta',
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
      ebdStripTextBefore: 'Quartas às',
      ebdStripTextAfter: '— Culto de Oração e Estudo da Palavra',
      pastorLabel: 'Pastorado:',
      whatsappMessage:
        'Olá! Gostava de saber mais sobre os cultos da Igreja Evangélica Baptista da Horta e planear a minha visita.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Agenda Dominical//PT',
      summary: 'Culto de Celebração — IEB Horta',
      description:
        'Escola Bíblica Dominical às 16h00 e Culto de Celebração às 17h15 nas instalações da Assembleia de Deus do Faial (Horta). Portas abertas!',
      fileName: 'culto-ieb-horta.ics',
    },
    schedule: {
      kicker: 'Atividades e Horários · Novembro 2026',
      heading: 'Horários para nos reunirmos em família',
      intro:
        'A partir de 8 de novembro, os nossos cultos de domingo passam a realizar-se nas instalações da Igreja Assembleia de Deus do Faial com novos horários de tarde, além da reunião semanal de quarta-feira.',
      filterAria: 'Filtrar programação',
      filters: {
        all: 'Toda a agenda',
        sunday: 'Domingos',
        week: 'Semana & Louvor',
      },
      calendarSaved: 'Evento guardado (.ics)',
      calendarSave: 'Guardar culto no calendário',
      watchYouTube: 'Ver no YouTube',
      confirmVisit: 'Confirmar visita',
      items: {
        ebd: {
          title: 'Escola Bíblica Dominical (EBD)',
          day: 'Domingos',
          times: ['16h00'],
          location: 'Instalações da Assembleia de Deus do Faial',
          description:
            'Estudo bíblico comunitário aos domingos às 16h00 com salas e ensino para adultos, adolescentes e crianças.',
        },
        celebracao: {
          title: 'Culto de Louvor e Pregação da Palavra',
          day: 'Domingos',
          times: ['17h15'],
          location: 'Instalações da Assembleia de Deus do Faial',
          description:
            'Culto dominical de celebração, louvor, comunhão e exposição das Escrituras com início às 17h15.',
        },
        'oracao-lares': {
          title: 'Culto de Oração e Estudo da Palavra',
          day: 'Quartas-feiras',
          times: ['19h00'],
          location: 'Encontro semanal de oração',
          description:
            'Tempo de oração intercessora pela igreja, pelas famílias, pelo país e pela igreja perseguida, com estudo bíblico.',
        },
        'kids-familia': {
          title: 'Ensaio do Grupo de Louvor & Famílias',
          day: 'Sextas ou Sábados',
          times: ['A confirmar'],
          location: 'Equipa de Louvor · Eventos do Mês',
          description:
            'Ensaio semanal do grupo de louvor (sexta/sábado) e encontros especiais de família, como o Jantar de Ação de Graças em novembro.',
        },
      },
    },
    bulletin: {
      kicker: 'Boletim Mensal · Novembro 2026',
      heading: 'Agenda de Novembro, anúncios e vida da igreja',
      intro:
        'Acompanhe a agenda oficial do mês de novembro, a transição para as instalações da Assembleia de Deus do Faial, os motivos de oração da nossa comunidade e o momento de gratidão.',
      downloadPdf: 'Imprimir Boletim',
      printModal: {
        previewTitle: 'Folha de Impressão · Boletim de Novembro 2026',
        printNow: 'Imprimir / Guardar PDF',
        downloadHtml: 'Descarregar Ficha',
        close: 'Fechar',
        venueHeader:
          'Cultos (desde 08/11): Instalações da Assembleia de Deus do Faial',
        hqHeader: 'Sede Oficial: Av. Marginal, n.º 17 · 9900-121 Horta',
        savedNotice: 'Ficha de impressão descarregada',
      },
      tabsAria: 'Selecionar secção do Boletim de Novembro',
      tabs: {
        agenda: 'Agenda do Mês',
        announcements: 'Anúncios & Ações',
        prayer: 'Motivos de Oração',
        gratitude: 'Gratidão & Aniversariantes',
      },
      agendaItems: {
        'nov-01': {
          weekday: 'Domingo',
          title: 'Culto com celebração da Ceia e Baptismo',
          detail:
            'Culto especial do primeiro domingo do mês com celebração da Ceia do Senhor e batismo.',
        },
        'nov-07': {
          weekday: 'Sábado',
          title: 'Tempo de oração pela igreja perseguida',
          detail:
            'Momento congregacional dedicado a orar pelos cristãos e missionários perseguidos em todo o mundo.',
        },
        'nov-08': {
          weekday: 'Domingo · Nova Etapa',
          title: 'Culto com celebração de Missões Nacionais',
          detail:
            'Início dos cultos nas instalações da Assembleia de Deus do Faial, com novos horários: 16h00 EBD e 17h15 Culto de Celebração.',
        },
        'nov-15': {
          weekday: 'Domingo',
          title: 'Culto de celebração da Reforma Protestante',
          detail:
            'Celebração dominical recordando os princípios bíblicos da Reforma Protestante (prazo inicial das encomendas Juntos).',
        },
        'nov-22': {
          weekday: 'Domingo',
          title: 'Culto de celebração ao Senhor',
          detail:
            'Escola Bíblica Dominical às 16h00 e Culto às 17h15. Último dia de inscrições e pagamento para o Jantar de Ação de Graças.',
        },
        'nov-27': {
          weekday: 'Sexta-feira · 19h30',
          title: 'Jantar de Ação de Graças',
          detail:
            'Convívio comunitário nas instalações da Assembleia de Deus do Faial (1,00€ por pessoa + 1 prato por família).',
        },
        'nov-29': {
          weekday: 'Domingo',
          title: 'Culto de celebração ao Senhor',
          detail:
            'Encerramento do mês de novembro às 16h00 (EBD) e às 17h15 (Culto de Louvor e Pregação da Palavra).',
        },
      },
      activitiesCard: {
        kicker: 'Atividades e Horários',
        heading: 'Ritmo semanal em novembro',
        rows: [
          { day: 'Domingo', time: '16h00', label: 'Escola Bíblica Dominical' },
          {
            day: 'Domingo',
            time: '17h15',
            label: 'Culto de Louvor e Pregação',
          },
          {
            day: 'Quarta-feira',
            time: '19h00',
            label: 'Culto de Oração e Estudo',
          },
          {
            day: 'Sexta / Sábado',
            time: 'Semanal',
            label: 'Ensaio do grupo de Louvor',
          },
        ],
        venueNote:
          'Local dos cultos desde 8 de novembro: Instalações da Igreja Assembleia de Deus do Faial.',
        cta: 'Como chegar e confirmar presença',
      },
      venueAnnouncement: {
        kicker: 'Anúncio Principal',
        title: 'Novo local e horários desde 8 de novembro',
        body1:
          'É com alegria que partilhamos convosco que, a partir do dia 8 de novembro, os nossos cultos passaram a realizar-se nas instalações da Igreja Assembleia de Deus do Faial.',
        times: [
          '16h00 — Escola Bíblica Dominical',
          '17h15 — Culto de Celebração',
        ],
        body2:
          'Queremos continuar a caminhar juntos, unidos na fé, no amor e na oração, confiando que Deus está a conduzir todas as coisas segundo a Sua vontade.',
        cta: 'Ver morada e contactos',
      },
      thanksgivingDinner: {
        dateShort: '27 de Novembro · 19h30',
        title: 'Jantar de Ação de Graças',
        summary:
          'Sexta-feira às 19h30 nas instalações da Assembleia de Deus do Faial. 1,00€ por pessoa + 1 prato por família.',
        seeDetails: 'Ver condições e inscrição',
        description:
          'Venha agradecer e celebrar em família no nosso Jantar de Ação de Graças comunitário nas instalações da Assembleia de Deus do Faial.',
        details: [
          { label: 'Data e hora', value: '27 nov. · 19h30' },
          { label: 'Participação', value: '1,00€ por pessoa + 1 prato por família' },
          { label: 'Inscrições e pagamento', value: 'Até 22 de novembro' },
          { label: 'Local', value: 'Assembleia de Deus do Faial' },
        ],
        cta: 'Inscrever-se via WhatsApp',
        whatsappMessage:
          'Olá! Gostava de fazer a inscrição para o Jantar de Ação de Graças da IEB Horta no dia 27 de novembro.',
      },
      juntosCampaign: {
        kicker: 'Campanha de Oração',
        title: 'Kit de Oração & Devocional Juntos Kids',
        description:
          'Materiais devocionais da campanha Juntos para fortalecer a vida de oração em casa com adultos e crianças.',
        tier1Title: 'Encomendas até 15 nov.',
        tier1Items: 'Kit de Oração: 4€ · Devocional Juntos Kids: 2€',
        tier2Title: 'Encomendas após 15 nov.',
        tier2Items: 'Kit de Oração: 5€ · Devocional Juntos Kids: 2,50€',
      },
      celeiro: {
        kicker: 'Celeiro de Novembro',
        title: 'Apoio ao Cabaz de Natal',
        description:
          'Este mês, o ministério Celeiro conta com o vosso apoio solidário para preparar os Cabazes de Natal destinados a famílias apoiadas, através de um donativo monetário.',
        cta: 'Saber como contribuir em Ofertas & Missão',
      },
      prayerIntro:
        'Junte-se a nós em intercessão ao longo de todo o mês de novembro pelos pedidos reais da nossa igreja, das ilhas dos Açores, de Portugal e das missões:',
      prayerCta: 'Enviar pedido de oração',
      prayerWhatsappMessage:
        'Olá! Gostava de partilhar um pedido de oração com a IEB Horta.',
      prayerRequests: {
        families:
          'Pelas nossas famílias, crianças, jovens, adultos e pelas nossas irmãs grávidas.',
        'new-decisions':
          'Pelos nossos irmãos que recentemente tomaram a decisão por Jesus e pelas suas famílias.',
        'jean-lima':
          'Pelo nosso irmão Jean Lima, que tomou a decisão de ser batizado.',
        'church-future':
          'Pelo futuro da nossa igreja e pelos desafios desta nova etapa.',
        'sao-jorge':
          'Pela Irmã Bernadete e família, pelo David, Bruna e família e pela missão na ilha de São Jorge.',
        health:
          'Pelos nossos irmãos doentes e pelos que estão em recuperação de saúde.',
        relatives:
          'Pelos nossos familiares, amigos e vizinhos que ainda não entregaram as suas vidas a Jesus.',
        country:
          'Pelo nosso País, pelas nossas autoridades e governantes.',
        persecuted:
          'Pelas igrejas e pelos nossos irmãos missionários que estão a ser perseguidos por amor a Jesus.',
        disasters:
          'Pelos países que estão a sofrer com catástrofes e pelos irmãos que foram vítimas desses acontecimentos.',
        'convention-aba':
          'Pela Direção da Convenção Baptista Portuguesa, pela ABA e por mais obreiros para a igreja em Portugal.',
      },
      gratitude: {
        kicker: 'Momento de Gratidão',
        title: 'Testemunho da família Miqueias, Lorena e Eva',
        paragraphs: [
          'Há momentos na vida em que as palavras parecem pequenas para expressar a grandeza daquilo que Deus faz por nós. Hoje, como família, queremos elevar a nossa gratidão ao Senhor, reconhecendo que, em cada etapa da nossa caminhada, a Sua mão nos sustentou, a Sua graça nos alcançou e a Sua fidelidade nunca nos faltou.',
          'Somos gratos não apenas pelas bênçãos que recebemos, mas também por tudo aquilo que Deus tem feito em nós ao longo do caminho — nos dias de alegria e nos dias de dificuldade, nas orações respondidas e nos tempos de espera.',
          'Neste tempo tão especial, os nossos corações transbordam de gratidão pela vida da nossa pequena Eva, que ainda está no ventre, mas já ocupa um lugar imenso nas nossas vidas. Antes mesmo de a segurarmos nos braços, reconhecemos a mão do Criador sobre a sua vida e pedimos que ela cresça a conhecer, amar e servir Aquele que a formou.',
          'Ao Senhor entregamos o nosso presente, o nosso futuro e a vida da nossa filha, confiando que Jesus é o nosso maior tesouro.',
        ],
        signature: 'Com o coração profundamente grato — Miqueias, Lorena e Eva',
        verse:
          '“Grandes coisas fez o Senhor por nós, e por isso estamos alegres.” — Salmos 126:3',
      },
      birthdays: {
        kicker: 'Aniversariantes do Mês',
        title: 'Celebramos a vida em novembro',
        updateNote:
          '*Ajude-nos a atualizar a nossa lista de aniversariantes da igreja partilhando a sua data.',
        cta: 'Enviar data de aniversário',
        whatsappMessage:
          'Olá! Gostava de atualizar a minha data de aniversário na lista da IEB Horta.',
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
      sanctuaryCaption: 'Sede oficial · Av. Marginal, n.º 17.',
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
            'Vivemos o Evangelho além das paredes do templo através de campanhas solidárias, apoio alimentar do Celeiro e acolhimento próximo.',
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
            'Comunhão regional entre as igrejas baptistas das ilhas dos Açores em assembleias, acampamentos e missão em ilhas como São Jorge.',
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
          schedule: 'Domingos às 16h00 na EBD · Encontros semanais',
          audience: 'Adolescentes e jovens adultos',
          description:
            'Espaço para construir amizades verdadeiras, conversar abertamente sobre fé e o dia a dia e servir em conjunto na comunidade.',
          imageAlt: 'Mãos em oração em encontro de fé e reflexão da IEB Horta',
        },
        casais: {
          title: 'Famílias & Mulheres',
          summary: 'Dia da Família, oficinas e encontros Plenas em Cristo.',
          schedule: 'Encontros periódicos e celebrações',
          audience: 'Famílias, casais e mulheres',
          description:
            'Iniciativas como o Dia da Família no Parque da Salgueirinha, o Jantar de Ação de Graças e o encontro de mulheres Plenas em Cristo.',
          imageAlt:
            'Mulheres reunidas a cantar com viola durante o encontro Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'Escola Bíblica & Infantil',
          summary: 'Salas separadas para crianças, adolescentes e adultos.',
          schedule: 'Domingos às 16h00',
          audience: 'Todas as idades',
          description:
            'Ensino bíblico adequado a cada faixa etária — com salas dedicadas para crianças, adolescentes e adultos, além do Devocional Juntos Kids.',
          imageAlt:
            'Bíblia aberta sobre mesa com horários da Escola Bíblica Dominical da IEB Horta',
        },
        'acao-social': {
          title: 'Ação Social · Celeiro',
          summary: 'Campanha do Cabaz de Natal e partilha solidária no Faial.',
          schedule: 'Campanhas mensais de apoio local',
          audience: 'Aberto a todos os voluntários',
          description:
            'Através do projeto Celeiro, mobilizamos membros e amigos para apoiar famílias na cidade da Horta, incluindo o Cabaz de Natal em novembro.',
          imageAlt:
            'Compras solidárias e alimentos recolhidos pela Ação Social da IEB Horta',
        },
        'batismo-discipulado': {
          title: 'Batismo & Discipulado',
          summary: 'Primeiros passos na fé cristã e acompanhamento pastoral.',
          schedule: 'Acompanhamento com o Pr. Luiz Eduardo Júnior (933 855 290)',
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
          alt: 'Registo histórico de divulgação da Escola Bíblica e Culto de Celebração no @iebhorta',
          category: 'Arquivo @iebhorta',
          dateLabel: 'EBD & Culto',
          caption:
            'Arquivo dos nossos domingos de Escola Bíblica e Celebração. A partir de 8 de novembro de 2026: 16h00 EBD e 17h15 Culto na Assembleia de Deus do Faial.',
        },
        'post-social': {
          alt: 'Bagageira de viatura repleta de sacos de compras e leite recolhidos pela ação social da IEB Horta',
          category: 'Ação Social · Celeiro',
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
            'Ação de Graças: “Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.”',
          scripture: '1 Tessalonicenses 5:18',
        },
      },
      archivesIntro:
        'Conteúdos que edificam a sua vida espiritual: pregações da Palavra, Boletim Mensal de Novembro 2026, celebrações e encontros abertos à cidade.',
      archivesYouTubeCta: 'Abrir canal no YouTube',
      archivesItems: {
        'archive-palavra': {
          category: 'Pregação & Palavra',
          dateLabel: '1 Coríntios 10:31',
          title: 'Momento da Palavra · Pr. Luiz Eduardo Júnior',
          summary:
            'Exposição fiel das Escrituras para aplicar o Evangelho na família, no trabalho e no dia a dia. Acompanhe as mensagens nos cultos e no nosso YouTube.',
          actionLabel: 'Assistir no YouTube',
          imageAlt: 'Pr. Luiz Eduardo Júnior a pregar no púlpito da IEB Horta',
        },
        'archive-51anos': {
          category: 'Boletim Mensal',
          dateLabel: 'Novembro 2026 · 51 Anos',
          title: 'Boletim de Novembro — 51 Anos & Nova Etapa',
          summary:
            'Agenda completa de novembro, motivos de oração, testemunho de gratidão e transição dos cultos de domingo para as instalações da Assembleia de Deus do Faial.',
          actionLabel: 'Ver Agenda de Novembro',
          imageAlt: 'Cartaz dos 51 anos da Igreja Evangélica Baptista da Horta',
        },
        'archive-gracas': {
          category: 'Evento de Novembro',
          dateLabel: '27 nov. · 19h30',
          title: 'Jantar Comunitário de Ação de Graças',
          summary:
            'Encontro na Assembleia de Deus do Faial (1,00€ por pessoa + 1 prato por família). Inscrições e pagamento até 22 de novembro.',
          actionLabel: 'Confirmar participação',
          imageAlt: 'Publicação de Ação de Graças da IEB Horta',
        },
        'archive-familia': {
          category: 'Comunidade no Faial',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Dia da Família ao ar livre na Feteira',
          summary:
            'Registo do nosso encontro anual com tempo de culto, almoço comunitário e convívio fraterno para membros, crianças e amigos visitantes na ilha.',
          actionLabel: 'Explorar no @iebhorta',
          imageAlt: 'Cartaz oficial do Dia da Família no Parque da Salgueirinha',
        },
      },
      giving: {
        kicker: 'Sustento & Generosidade · Celeiro',
        heading: 'Contribua para a missão e para o Cabaz de Natal no Faial',
        paragraph1:
          'A Igreja Evangélica Baptista da Horta mantém a sua obra espiritual e social exclusivamente através das ofertas e dízimos voluntários dos seus membros, congregados e simpatizantes.',
        paragraph2:
          'Em novembro, o nosso ministério Celeiro conta também com o seu donativo monetário para preparar o Cabaz de Natal destinado às famílias acompanhadas na ilha.',
        pillars: [
          {
            title: 'Celeiro · Cabaz de Natal',
            text: 'Donativos monetários ao longo de novembro para compor os Cabazes de Natal solidários no Faial.',
          },
          {
            title: 'Ensino & Culto Público',
            text: 'Sustento das atividades dominicais (16h00 EBD e 17h15 Culto), materiais bíblicos e acolhimento.',
          },
          {
            title: 'Missão nos Açores',
            text: 'Cooperação com a Associação Baptista Açoreana e apoio à missão na ilha de São Jorge.',
          },
        ],
        ctaWhatsApp: 'Pedir dados via WhatsApp',
        ctaEmail: 'Contactar por e-mail',
        whatsappMessage:
          'Olá! Gostava de receber informações sobre como contribuir com ofertas ou com o Cabaz de Natal do Celeiro na IEB Horta.',
        mailSubject: 'Informações sobre Ofertas e Celeiro — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contactos & Primeira Visita',
      heading: 'Planeie a sua primeira visita',
      intro:
        'Será uma alegria recebê-lo pessoalmente na Horta. Desde 8 de novembro reunimo-nos nas instalações da Igreja Assembleia de Deus do Faial (mantendo a Av. Marginal, n.º 17 como sede oficial).',
      spaceTabsAria: 'Selecionar espaço da igreja',
      copyAddress: 'Copiar morada',
      copiedAddress: 'Morada copiada',
      visitorNotes: [
        'Cultos desde 08/11 nas instalações da Igreja Assembleia de Deus do Faial.',
        'Domingos às 16h00 (Escola Bíblica) e 17h15 (Culto de Celebração).',
        'Quartas-feiras às 19h00 — Culto de Oração e Estudo da Palavra.',
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
      dayQuestion: 'Em que encontro pretende visitar-nos?',
      dayAria: 'Encontro pretendido para a visita',
      dayOptions: [
        'Domingo · 16h00 (Escola Bíblica Dominical)',
        'Domingo · 17h15 (Culto de Celebração)',
        'Quarta-feira · 19h00 (Oração e Estudo)',
        '27 nov. · 19h30 (Jantar Ação de Graças)',
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
        ebd: {
          label: 'Local dos Cultos',
          title: 'Cultos Dominicais & Oração (desde 08/11)',
          region: 'Horta · Ilha do Faial, Açores',
          note: 'Onde decorrem os nossos cultos: domingos 16h00 (EBD) e 17h15 (Celebração), e quartas às 19h00.',
        },
        templo: {
          label: 'Sede Oficial',
          title: 'Igreja Evangélica Baptista da Horta (Sede)',
          region: '9900-121 Horta · Ilha do Faial, Açores, Portugal',
          note: 'Morada oficial e postal da igreja na Avenida Marginal, n.º 17.',
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
      whatsappLabel: 'WhatsApp Pastorado (933 855 290)',
      rightsReserved: 'Todos os direitos reservados.',
      sundayLine: 'Domingos · 16h00 EBD · 17h15 Culto de Celebração',
    },
    mobileBar: {
      ariaLabel: 'Ações rápidas de navegação e contacto',
      map: 'Mapa',
      schedule: 'Horários',
      whatsapp: 'WhatsApp',
    },
    search: {
      buttonAria: 'Pesquisar conteúdo no site',
      buttonLabel: 'Pesquisar',
      drawerButtonLabel: 'Pesquisar no site...',
      footerLinkLabel: 'Pesquisar no site',
      modalTitle: 'Pesquisar no site da IEB Horta',
      inputPlaceholder: 'Pesquisar horários, agenda de novembro, local, oração, ministérios...',
      clearInput: 'Limpar texto da pesquisa',
      closeModal: 'Fechar pesquisa',
      filterAria: 'Filtrar resultados por secção',
      categories: {
        all: 'Tudo',
        bulletin: 'Agenda Novembro',
        schedule: 'Horários',
        essence: 'Sobre & Fé',
        ministries: 'Ministérios',
        community: 'Conteúdos',
        visit: 'Local & Visita',
      },
      suggestionsTitle: 'Pesquisas frequentes',
      suggestions: [
        '16h00',
        'Assembleia de Deus',
        'Jantar de Ação de Graças',
        'Oração',
        'Celeiro',
        'Batismo',
        'Av. Marginal',
        'Jovens',
      ],
      resultsCountSingular: 'resultado encontrado',
      resultsCountPlural: 'resultados encontrados',
      emptyTitle: 'Nenhum resultado encontrado',
      emptyHint:
        'Experimente procurar por «16h00», «Assembleia de Deus», «Oração», «Jantar», «Celeiro» ou «Batismo».',
      keyboardHint: 'ESC para fechar · Setas para navegar · Enter para abrir',
      openResult: 'Abrir secção',
    },
  },

  'pt-BR': {
    meta: {
      title: 'IEB Horta — Igreja Evangélica Baptista da Horta',
      description:
        'Um lugar de fé, família e novos começos na Ilha do Faial, Açores. Agenda de novembro, novos horários de domingo (16h00 EBD e 17h15 Culto), ministérios e visita à IEB Horta.',
      skipToContent: 'Pular para o conteúdo principal',
    },
    nav: {
      ariaMain: 'Navegação principal',
      ariaMobile: 'Menu mobile',
      ariaLanguage: 'Alterar idioma do site',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Horários',
        novemberAgenda: 'Agenda Novembro',
        essence: 'Sobre',
        ministries: 'Ministérios',
        community: 'Conteúdos',
        visit: 'Contatos',
      },
      subLinks: {
        novemberAgenda: 'Agenda do Mês',
        novemberAnnouncements: 'Anúncios & Jantar (27/11)',
        novemberPrayer: 'Motivos de Oração',
        novemberGratitude: 'Gratidão & Aniversários',
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
      drawerSummary: 'Domingos às 16h00 (EBD) e 17h15 (Culto) · AD Faial.',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Interior iluminado da igreja com luz natural da manhã e comunidade reunida',
      kickerYears: 'Boletim Novembro 2026 · 51 Anos no Faial',
      headline: 'Um lugar de fé, família e novos começos.',
      subheadline:
        'Sustentados pelo amor de Deus na Ilha do Faial. A partir de 8 de novembro, nossos cultos acontecem nas instalações da Assembleia de Deus do Faial: domingos às 16h00 (EBD) e 17h15 (Culto).',
      ctaVisit: 'Planeje sua Visita',
      ctaInstagram: 'Acompanhe @iebhorta',
      watchYouTube: 'Cultos no YouTube',
      prevSlide: 'Destaque anterior',
      nextSlide: 'Próximo destaque',
      slideLabelPrefix: 'Destaque',
      slides: {
        welcome: {
          kicker: 'Boletim de Novembro 2026 · 51 Anos no Faial',
          headline: 'Um lugar de fé, família e novos começos.',
          subheadline:
            'Sustentados pelo amor de Deus na Ilha do Faial. Confira a Agenda de Novembro e nossos horários dominicais (16h00 EBD · 17h15 Celebração).',
          ctaLabel: 'Ver Agenda Novembro',
          imageAlt:
            'Interior iluminado da igreja com luz natural da manhã e comunidade reunida',
        },
        'sunday-worship': {
          kicker: 'Assembleia de Deus do Faial · Desde 8 de Novembro',
          headline: 'Novos horários de domingo: 16h00 EBD e 17h15 Celebração.',
          subheadline:
            'Também nos reunimos às quartas-feiras às 19h00 para o Culto de Oração e Estudo da Palavra. Portas abertas para toda a família.',
          ctaLabel: 'Ver Programação',
          imageAlt:
            'Interior do templo da Igreja Evangélica Baptista da Horta',
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
      ebdStripTextBefore: 'Quartas às',
      ebdStripTextAfter: '— Culto de Oração e Estudo da Palavra',
      pastorLabel: 'Pastorado:',
      whatsappMessage:
        'Olá! Gostaria de saber mais sobre os cultos da Igreja Evangélica Baptista da Horta e planejar uma visita.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Agenda Dominical//PT-BR',
      summary: 'Culto de Celebração — IEB Horta',
      description:
        'Escola Bíblica Dominical às 16h00 e Culto de Celebração às 17h15 nas instalações da Assembleia de Deus do Faial (Horta). Portas abertas!',
      fileName: 'culto-ieb-horta.ics',
    },
    schedule: {
      kicker: 'Atividades e Horários · Novembro 2026',
      heading: 'Horários para nos reunirmos em família',
      intro:
        'A partir de 8 de novembro, nossos cultos de domingo passam a ser realizados nas instalações da Igreja Assembleia de Deus do Faial em novo horário vespertino, além do encontro semanal de quarta-feira.',
      filterAria: 'Filtrar programação',
      filters: {
        all: 'Toda a agenda',
        sunday: 'Domingos',
        week: 'Semana & Louvor',
      },
      calendarSaved: 'Evento salvo (.ics)',
      calendarSave: 'Salvar culto no calendário',
      watchYouTube: 'Assistir no YouTube',
      confirmVisit: 'Confirmar visita',
      items: {
        ebd: {
          title: 'Escola Bíblica Dominical (EBD)',
          day: 'Domingos',
          times: ['16h00'],
          location: 'Instalações da Assembleia de Deus do Faial',
          description:
            'Estudo bíblico comunitário aos domingos às 16h00 com salas e ensino para adultos, adolescentes e crianças.',
        },
        celebracao: {
          title: 'Culto de Louvor e Pregação da Palavra',
          day: 'Domingos',
          times: ['17h15'],
          location: 'Instalações da Assembleia de Deus do Faial',
          description:
            'Culto dominical de celebração, louvor, comunhão e exposição das Escrituras com início às 17h15.',
        },
        'oracao-lares': {
          title: 'Culto de Oração e Estudo da Palavra',
          day: 'Quartas-feiras',
          times: ['19h00'],
          location: 'Encontro semanal de oração',
          description:
            'Momento semanal de intercessão pela igreja, pelas famílias, pelo país e pela igreja perseguida, com estudo bíblico.',
        },
        'kids-familia': {
          title: 'Ensaio do Grupo de Louvor & Famílias',
          day: 'Sextas ou Sábados',
          times: ['A confirmar'],
          location: 'Equipe de Louvor · Eventos do Mês',
          description:
            'Ensaio semanal do grupo de louvor (sexta/sábado) e encontros especiais em família, como o Jantar de Ação de Graças em novembro.',
        },
      },
    },
    bulletin: {
      kicker: 'Boletim Mensal · Novembro 2026',
      heading: 'Agenda de Novembro, anúncios e vida da igreja',
      intro:
        'Acompanhe a agenda oficial do mês de novembro, a transição para as instalações da Assembleia de Deus do Faial, os motivos de oração da comunidade e o momento de gratidão.',
      downloadPdf: 'Imprimir Boletim',
      printModal: {
        previewTitle: 'Folha de Impressão · Boletim de Novembro 2026',
        printNow: 'Imprimir / Salvar PDF',
        downloadHtml: 'Baixar Ficha',
        close: 'Fechar',
        venueHeader:
          'Cultos (desde 08/11): Instalações da Assembleia de Deus do Faial',
        hqHeader: 'Sede Oficial: Av. Marginal, n.º 17 · 9900-121 Horta',
        savedNotice: 'Ficha de impressão baixada',
      },
      tabsAria: 'Selecionar seção do Boletim de Novembro',
      tabs: {
        agenda: 'Agenda do Mês',
        announcements: 'Anúncios & Ações',
        prayer: 'Motivos de Oração',
        gratitude: 'Gratidão & Aniversariantes',
      },
      agendaItems: {
        'nov-01': {
          weekday: 'Domingo',
          title: 'Culto com celebração da Ceia e Batismo',
          detail:
            'Culto especial do primeiro domingo do mês com celebração da Ceia do Senhor e batismo.',
        },
        'nov-07': {
          weekday: 'Sábado',
          title: 'Tempo de oração pela igreja perseguida',
          detail:
            'Encontro congregacional dedicado a orar pelos cristãos e missionários perseguidos ao redor do mundo.',
        },
        'nov-08': {
          weekday: 'Domingo · Nova Etapa',
          title: 'Culto com celebração de Missões Nacionais',
          detail:
            'Início dos cultos nas instalações da Assembleia de Deus do Faial, com novos horários: 16h00 EBD e 17h15 Culto de Celebração.',
        },
        'nov-15': {
          weekday: 'Domingo',
          title: 'Culto de celebração da Reforma Protestante',
          detail:
            'Celebração dominical relembrando os princípios bíblicos da Reforma Protestante (prazo inicial das encomendas Juntos).',
        },
        'nov-22': {
          weekday: 'Domingo',
          title: 'Culto de celebração ao Senhor',
          detail:
            'Escola Bíblica Dominical às 16h00 e Culto às 17h15. Último dia de inscrições e pagamento para o Jantar de Ação de Graças.',
        },
        'nov-27': {
          weekday: 'Sexta-feira · 19h30',
          title: 'Jantar de Ação de Graças',
          detail:
            'Confraternização comunitária nas instalações da Assembleia de Deus do Faial (1,00€ por pessoa + 1 prato por família).',
        },
        'nov-29': {
          weekday: 'Domingo',
          title: 'Culto de celebração ao Senhor',
          detail:
            'Encerramento do mês de novembro às 16h00 (EBD) e às 17h15 (Culto de Louvor e Pregação da Palavra).',
        },
      },
      activitiesCard: {
        kicker: 'Atividades e Horários',
        heading: 'Ritmo semanal em novembro',
        rows: [
          { day: 'Domingo', time: '16h00', label: 'Escola Bíblica Dominical' },
          {
            day: 'Domingo',
            time: '17h15',
            label: 'Culto de Louvor e Pregação',
          },
          {
            day: 'Quarta-feira',
            time: '19h00',
            label: 'Culto de Oração e Estudo',
          },
          {
            day: 'Sexta / Sábado',
            time: 'Semanal',
            label: 'Ensaio do grupo de Louvor',
          },
        ],
        venueNote:
          'Local dos cultos desde 8 de novembro: Instalações da Igreja Assembleia de Deus do Faial.',
        cta: 'Como chegar e confirmar presença',
      },
      venueAnnouncement: {
        kicker: 'Anúncio Principal',
        title: 'Novo local e horários desde 8 de novembro',
        body1:
          'É com alegria que compartilhamos com vocês que, a partir do dia 8 de novembro, nossos cultos passaram a ser realizados nas instalações da Igreja Assembleia de Deus do Faial.',
        times: [
          '16h00 — Escola Bíblica Dominical',
          '17h15 — Culto de Celebração',
        ],
        body2:
          'Queremos continuar caminhando juntos, unidos na fé, no amor e na oração, confiando que Deus está conduzindo todas as coisas segundo a Sua vontade.',
        cta: 'Ver endereço e contatos',
      },
      thanksgivingDinner: {
        dateShort: '27 de Novembro · 19h30',
        title: 'Jantar de Ação de Graças',
        summary:
          'Sexta-feira às 19h30 nas instalações da Assembleia de Deus do Faial. 1,00€ por pessoa + 1 prato por família.',
        seeDetails: 'Ver detalhes e inscrição',
        description:
          'Venha agradecer e celebrar em família no nosso Jantar de Ação de Graças comunitário nas instalações da Assembleia de Deus do Faial.',
        details: [
          { label: 'Data e hora', value: '27 nov. · 19h30' },
          { label: 'Participação', value: '1,00€ por pessoa + 1 prato por família' },
          { label: 'Inscrições e pagamento', value: 'Até 22 de novembro' },
          { label: 'Local', value: 'Assembleia de Deus do Faial' },
        ],
        cta: 'Inscrever-se via WhatsApp',
        whatsappMessage:
          'Olá! Gostaria de fazer a inscrição para o Jantar de Ação de Graças da IEB Horta no dia 27 de novembro.',
      },
      juntosCampaign: {
        kicker: 'Campanha de Oração',
        title: 'Kit de Oração & Devocional Juntos Kids',
        description:
          'Materiais devocionais da campanha Juntos para fortalecer a vida de oração em casa com adultos e crianças.',
        tier1Title: 'Encomendas até 15 nov.',
        tier1Items: 'Kit de Oração: 4€ · Devocional Juntos Kids: 2€',
        tier2Title: 'Encomendas após 15 nov.',
        tier2Items: 'Kit de Oração: 5€ · Devocional Juntos Kids: 2,50€',
      },
      celeiro: {
        kicker: 'Celeiro de Novembro',
        title: 'Apoio à Cesta de Natal (Cabaz)',
        description:
          'Neste mês, o ministério Celeiro conta com o seu apoio solidário para montar os Cabazes de Natal destinados às famílias atendidas, por meio de contribuição financeira.',
        cta: 'Saber como contribuir em Ofertas & Missão',
      },
      prayerIntro:
        'Una-se a nós em intercessão durante todo o mês de novembro pelos pedidos reais da nossa igreja, das ilhas dos Açores, de Portugal e das missões:',
      prayerCta: 'Enviar pedido de oração',
      prayerWhatsappMessage:
        'Olá! Gostaria de compartilhar um pedido de oração com a IEB Horta.',
      prayerRequests: {
        families:
          'Pelas nossas famílias, crianças, jovens, adultos e pelas nossas irmãs grávidas.',
        'new-decisions':
          'Pelos nossos irmãos que recentemente tomaram a decisão por Jesus e pelas suas famílias.',
        'jean-lima':
          'Pelo nosso irmão Jean Lima, que tomou a decisão de ser batizado.',
        'church-future':
          'Pelo futuro da nossa igreja e pelos desafios desta nova etapa.',
        'sao-jorge':
          'Pela Irmã Bernadete e família, pelo David, Bruna e família e pela missão na ilha de São Jorge.',
        health:
          'Pelos nossos irmãos doentes e pelos que estão em recuperação de saúde.',
        relatives:
          'Pelos nossos familiares, amigos e vizinhos que ainda não entregaram suas vidas a Jesus.',
        country:
          'Pelo nosso País, pelas nossas autoridades e governantes.',
        persecuted:
          'Pelas igrejas e pelos nossos irmãos missionários que estão sendo perseguidos por amor a Jesus.',
        disasters:
          'Pelos países que estão sofrendo com catástrofes e pelos irmãos que foram vítimas desses acontecimentos.',
        'convention-aba':
          'Pela Direção da Convenção Baptista Portuguesa, pela ABA e por mais obreiros para a igreja em Portugal.',
      },
      gratitude: {
        kicker: 'Momento de Gratidão',
        title: 'Testemunho da família Miqueias, Lorena e Eva',
        paragraphs: [
          'Há momentos na vida em que as palavras parecem pequenas para expressar a grandeza daquilo que Deus faz por nós. Hoje, como família, queremos elevar nossa gratidão ao Senhor, reconhecendo que, em cada etapa da nossa caminhada, a Sua mão nos sustentou, a Sua graça nos alcançou e a Sua fidelidade nunca nos faltou.',
          'Somos gratos não apenas pelas bênçãos que recebemos, mas também por tudo o que Deus tem feito em nós ao longo do caminho — nos dias de alegria e nos dias de dificuldade, nas orações respondidas e nos tempos de espera.',
          'Neste tempo tão especial, nossos corações transbordam de gratidão pela vida da nossa pequena Eva, que ainda está no ventre, mas já ocupa um lugar imenso em nossas vidas. Antes mesmo de segurá-la nos braços, reconhecemos a mão do Criador sobre a sua vida e pedimos que ela cresça conhecendo, amando e servindo Aquele que a formou.',
          'Ao Senhor entregamos o nosso presente, o nosso futuro e a vida da nossa filha, confiando que Jesus é o nosso maior tesouro.',
        ],
        signature: 'Com o coração profundamente grato — Miqueias, Lorena e Eva',
        verse:
          '“Grandes coisas fez o Senhor por nós, e por isso estamos alegres.” — Salmos 126:3',
      },
      birthdays: {
        kicker: 'Aniversariantes do Mês',
        title: 'Celebramos a vida em novembro',
        updateNote:
          '*Ajude-nos a atualizar a nossa lista de aniversariantes da igreja compartilhando a sua data.',
        cta: 'Enviar data de aniversário',
        whatsappMessage:
          'Olá! Gostaria de atualizar minha data de aniversário na lista da IEB Horta.',
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
      sanctuaryCaption: 'Sede oficial · Av. Marginal, n.º 17.',
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
            'Vivemos o Evangelho além das paredes do templo por meio de campanhas solidárias, apoio alimentar do Celeiro e acolhimento próximo.',
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
            'Comunhão regional entre as igrejas batistas das ilhas dos Açores em assembleias, acampamentos e missão em ilhas como São Jorge.',
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
          schedule: 'Domingos às 16h00 na EBD · Encontros semanais',
          audience: 'Adolescentes e jovens adultos',
          description:
            'Espaço para construir amizades verdadeiras, conversar abertamente sobre fé e o dia a dia e servir juntos na comunidade.',
          imageAlt: 'Mãos em oração em encontro de fé e reflexão da IEB Horta',
        },
        casais: {
          title: 'Famílias & Mulheres',
          summary: 'Dia da Família, oficinas e encontros Plenas em Cristo.',
          schedule: 'Programações periódicas e celebrações',
          audience: 'Famílias, casais e mulheres',
          description:
            'Iniciativas como o Dia da Família no Parque da Salgueirinha, o Jantar de Ação de Graças e o encontro de mulheres Plenas em Cristo.',
          imageAlt:
            'Mulheres reunidas cantando com violão durante o encontro Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'Escola Bíblica & Infantil',
          summary: 'Salas separadas para crianças, adolescentes e adultos.',
          schedule: 'Domingos às 16h00',
          audience: 'Todas as idades',
          description:
            'Ensino bíblico adequado a cada faixa etária — com salas dedicadas para crianças, adolescentes e adultos, além do Devocional Juntos Kids.',
          imageAlt:
            'Bíblia aberta sobre mesa com horários da Escola Bíblica Dominical da IEB Horta',
        },
        'acao-social': {
          title: 'Ação Social · Celeiro',
          summary: 'Campanha do Cabaz de Natal e partilha solidária no Faial.',
          schedule: 'Campanhas mensais de apoio local',
          audience: 'Aberto a todos os voluntários',
          description:
            'Por meio do projeto Celeiro, mobilizamos membros e amigos para apoiar famílias na cidade da Horta, incluindo o Cabaz de Natal em novembro.',
          imageAlt:
            'Compras solidárias e alimentos arrecadados pela Ação Social da IEB Horta',
        },
        'batismo-discipulado': {
          title: 'Batismo & Discipulado',
          summary: 'Primeiros passos na fé cristã e acompanhamento pastoral.',
          schedule: 'Acompanhamento com o Pr. Luiz Eduardo Júnior (933 855 290)',
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
          alt: 'Registro histórico de divulgação da Escola Bíblica e Culto de Celebração no @iebhorta',
          category: 'Arquivo @iebhorta',
          dateLabel: 'EBD & Culto',
          caption:
            'Arquivo dos nossos domingos de Escola Bíblica e Celebração. A partir de 8 de novembro de 2026: 16h00 EBD e 17h15 Culto na Assembleia de Deus do Faial.',
        },
        'post-social': {
          alt: 'Porta-malas de carro cheio de sacolas de compras e leite arrecadados pela ação social da IEB Horta',
          category: 'Ação Social · Celeiro',
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
            'Ação de Graças: “Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.”',
          scripture: '1 Tessalonicenses 5:18',
        },
      },
      archivesIntro:
        'Conteúdos que edificam sua vida espiritual: pregações da Palavra, Boletim Mensal de Novembro 2026, celebrações e encontros abertos à cidade.',
      archivesYouTubeCta: 'Abrir canal no YouTube',
      archivesItems: {
        'archive-palavra': {
          category: 'Pregação & Palavra',
          dateLabel: '1 Coríntios 10:31',
          title: 'Momento da Palavra · Pr. Luiz Eduardo Júnior',
          summary:
            'Exposição fiel das Escrituras para aplicar o Evangelho na família, no trabalho e no dia a dia. Acompanhe as mensagens nos cultos e no nosso YouTube.',
          actionLabel: 'Assistir no YouTube',
          imageAlt: 'Pr. Luiz Eduardo Júnior pregando no púlpito da IEB Horta',
        },
        'archive-51anos': {
          category: 'Boletim Mensal',
          dateLabel: 'Novembro 2026 · 51 Anos',
          title: 'Boletim de Novembro — 51 Anos & Nova Etapa',
          summary:
            'Agenda completa de novembro, motivos de oração, testemunho de gratidão e transição dos cultos de domingo para as instalações da Assembleia de Deus do Faial.',
          actionLabel: 'Ver Agenda de Novembro',
          imageAlt: 'Cartaz dos 51 anos da Igreja Evangélica Baptista da Horta',
        },
        'archive-gracas': {
          category: 'Evento de Novembro',
          dateLabel: '27 nov. · 19h30',
          title: 'Jantar Comunitário de Ação de Graças',
          summary:
            'Encontro na Assembleia de Deus do Faial (1,00€ por pessoa + 1 prato por família). Inscrições e pagamento até 22 de novembro.',
          actionLabel: 'Confirmar presença',
          imageAlt: 'Publicação de Ação de Graças da IEB Horta',
        },
        'archive-familia': {
          category: 'Comunidade no Faial',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Dia da Família ao ar livre na Feteira',
          summary:
            'Registro do nosso encontro anual com tempo de culto, almoço comunitário e comunhão fraterna para membros, crianças e amigos visitantes na ilha.',
          actionLabel: 'Explorar no @iebhorta',
          imageAlt: 'Cartaz oficial do Dia da Família no Parque da Salgueirinha',
        },
      },
      giving: {
        kicker: 'Sustento & Generosidade · Celeiro',
        heading: 'Contribua para a missão e para o Cabaz de Natal no Faial',
        paragraph1:
          'A Igreja Evangélica Baptista da Horta mantém sua obra espiritual e social exclusivamente por meio das ofertas e dízimos voluntários de seus membros, congregados e simpatizantes.',
        paragraph2:
          'Em novembro, o nosso ministério Celeiro conta também com a sua oferta financeira para montar os Cabazes de Natal destinados às famílias atendidas na ilha.',
        pillars: [
          {
            title: 'Celeiro · Cabaz de Natal',
            text: 'Doações financeiras ao longo de novembro para preparar os Cabazes de Natal solidários no Faial.',
          },
          {
            title: 'Ensino & Culto Público',
            text: 'Sustento das atividades dominicais (16h00 EBD e 17h15 Culto), materiais bíblicos e acolhimento.',
          },
          {
            title: 'Missão nos Açores',
            text: 'Cooperação com a Associação Baptista Açoreana e apoio à missão na ilha de São Jorge.',
          },
        ],
        ctaWhatsApp: 'Pedir dados via WhatsApp',
        ctaEmail: 'Contatar por e-mail',
        whatsappMessage:
          'Olá! Gostaria de receber informações sobre como contribuir com ofertas ou com o Cabaz de Natal do Celeiro na IEB Horta.',
        mailSubject: 'Informações sobre Ofertas e Celeiro — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contatos & Primeira Visita',
      heading: 'Planeje sua primeira visita',
      intro:
        'Será uma alegria receber você pessoalmente na Horta. Desde 8 de novembro nos reunimos nas instalações da Igreja Assembleia de Deus do Faial (mantendo a Av. Marginal, n.º 17 como sede oficial).',
      spaceTabsAria: 'Selecionar espaço da igreja',
      copyAddress: 'Copiar endereço',
      copiedAddress: 'Endereço copiado',
      visitorNotes: [
        'Cultos desde 08/11 nas instalações da Igreja Assembleia de Deus do Faial.',
        'Domingos às 16h00 (Escola Bíblica) e 17h15 (Culto de Celebração).',
        'Quartas-feiras às 19h00 — Culto de Oração e Estudo da Palavra.',
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
      dayQuestion: 'Em qual encontro pretende nos visitar?',
      dayAria: 'Encontro desejado para a visita',
      dayOptions: [
        'Domingo · 16h00 (Escola Bíblica Dominical)',
        'Domingo · 17h15 (Culto de Celebração)',
        'Quarta-feira · 19h00 (Oração e Estudo)',
        '27 nov. · 19h30 (Jantar Ação de Graças)',
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
        ebd: {
          label: 'Local dos Cultos',
          title: 'Cultos Dominicais & Oração (desde 08/11)',
          region: 'Horta · Ilha do Faial, Açores',
          note: 'Onde ocorrem os nossos cultos: domingos 16h00 (EBD) e 17h15 (Celebração), e quartas às 19h00.',
        },
        templo: {
          label: 'Sede Oficial',
          title: 'Igreja Evangélica Baptista da Horta (Sede)',
          region: '9900-121 Horta · Ilha do Faial, Açores, Portugal',
          note: 'Endereço oficial e postal da igreja na Avenida Marginal, n.º 17.',
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
      whatsappLabel: 'WhatsApp Pastorado (933 855 290)',
      rightsReserved: 'Todos os direitos reservados.',
      sundayLine: 'Domingos · 16h00 EBD · 17h15 Culto de Celebração',
    },
    mobileBar: {
      ariaLabel: 'Ações rápidas de navegação e contato',
      map: 'Mapa',
      schedule: 'Horários',
      whatsapp: 'WhatsApp',
    },
    search: {
      buttonAria: 'Pesquisar conteúdo no site',
      buttonLabel: 'Pesquisar',
      drawerButtonLabel: 'Pesquisar no site...',
      footerLinkLabel: 'Pesquisar no site',
      modalTitle: 'Pesquisar no site da IEB Horta',
      inputPlaceholder: 'Pesquisar horários, agenda de novembro, local, oração, ministérios...',
      clearInput: 'Limpar texto da pesquisa',
      closeModal: 'Fechar pesquisa',
      filterAria: 'Filtrar resultados por seção',
      categories: {
        all: 'Tudo',
        bulletin: 'Agenda Novembro',
        schedule: 'Horários',
        essence: 'Sobre & Fé',
        ministries: 'Ministérios',
        community: 'Conteúdos',
        visit: 'Local & Visita',
      },
      suggestionsTitle: 'Pesquisas frequentes',
      suggestions: [
        '16h00',
        'Assembleia de Deus',
        'Jantar de Ação de Graças',
        'Oração',
        'Celeiro',
        'Batismo',
        'Av. Marginal',
        'Jovens',
      ],
      resultsCountSingular: 'resultado encontrado',
      resultsCountPlural: 'resultados encontrados',
      emptyTitle: 'Nenhum resultado encontrado',
      emptyHint:
        'Tente buscar por «16h00», «Assembleia de Deus», «Oração», «Jantar», «Celeiro» ou «Batismo».',
      keyboardHint: 'ESC para fechar · Setas para navegar · Enter para abrir',
      openResult: 'Abrir seção',
    },
  },

  en: {
    meta: {
      title: 'IEB Horta — Evangelical Baptist Church of Horta',
      description:
        'A place of faith, family, and new beginnings on Faial Island, Azores. November 2026 agenda, new Sunday times (16:00 Sunday School, 17:15 Worship), ministries, and visit planning.',
      skipToContent: 'Skip to main content',
    },
    nav: {
      ariaMain: 'Main navigation',
      ariaMobile: 'Mobile navigation',
      ariaLanguage: 'Change website language',
      languageMenuTitle: 'Language',
      links: {
        schedule: 'Schedule',
        novemberAgenda: 'November Agenda',
        essence: 'About',
        ministries: 'Ministries',
        community: 'Resources',
        visit: 'Contact',
      },
      subLinks: {
        novemberAgenda: 'Monthly Agenda',
        novemberAnnouncements: 'Announcements & Dinner (27/11)',
        novemberPrayer: 'Prayer Requests',
        novemberGratitude: 'Gratitude & Birthdays',
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
      drawerSummary: 'Sundays at 16:00 (EBD) and 17:15 (Worship) · AD Faial.',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Sunlit sanctuary interior with morning light and gathered congregation',
      kickerYears: 'November 2026 Bulletin · 51 Years on Faial',
      headline: 'A place of faith, family, and new beginnings.',
      subheadline:
        'Sustained by the love of God on Faial Island. Beginning November 8, our services gather at Assembleia de Deus do Faial: Sundays at 16:00 (Sunday School) and 17:15 (Worship Service).',
      ctaVisit: 'Plan Your Visit',
      ctaInstagram: 'Follow @iebhorta',
      watchYouTube: 'Watch on YouTube',
      prevSlide: 'Previous highlight',
      nextSlide: 'Next highlight',
      slideLabelPrefix: 'Highlight',
      slides: {
        welcome: {
          kicker: 'November 2026 Bulletin · 51 Years on Faial',
          headline: 'A place of faith, family, and new beginnings.',
          subheadline:
            'Sustained by the love of God on Faial Island. Explore our November Agenda, new Sunday times (16:00 EBD · 17:15 Worship), and monthly church life.',
          ctaLabel: 'See November Agenda',
          imageAlt:
            'Sunlit sanctuary interior with morning light and gathered congregation',
        },
        'sunday-worship': {
          kicker: 'Assembleia de Deus do Faial · From November 8',
          headline: 'New Sunday hours: 16:00 Sunday School & 17:15 Worship.',
          subheadline:
            'We also meet Wednesdays at 19:00 for Prayer & Bible Study. Open doors for the entire family.',
          ctaLabel: 'See Schedule',
          imageAlt: 'Interior of Igreja Evangélica Baptista da Horta',
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
      ebdStripTextBefore: 'Wednesdays at',
      ebdStripTextAfter: '— Prayer & Bible Study Service',
      pastorLabel: 'Pastor:',
      whatsappMessage:
        'Hello! I would love to learn more about the services at Igreja Evangélica Baptista da Horta and plan a visit.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Sunday Schedule//EN',
      summary: 'Sunday Celebration Service — IEB Horta',
      description:
        'Sunday Bible School at 16:00 and Celebration Service at 17:15 at Assembleia de Deus do Faial facilities (Horta). All are welcome!',
      fileName: 'ieb-horta-sunday-service.ics',
    },
    schedule: {
      kicker: 'Activities & Times · November 2026',
      heading: 'Times to gather together as a family',
      intro:
        'Starting November 8, our Sunday gatherings meet at the Assembleia de Deus do Faial facilities with new afternoon times, alongside our Wednesday evening prayer and Bible study.',
      filterAria: 'Filter schedule',
      filters: {
        all: 'Full schedule',
        sunday: 'Sundays',
        week: 'Midweek & Worship Team',
      },
      calendarSaved: 'Event saved (.ics)',
      calendarSave: 'Save service to calendar',
      watchYouTube: 'Watch on YouTube',
      confirmVisit: 'Confirm visit',
      items: {
        ebd: {
          title: 'Sunday Bible School (EBD)',
          day: 'Sundays',
          times: ['16:00'],
          location: 'Assembleia de Deus do Faial Facilities',
          description:
            'Age-grouped Bible study on Sundays at 16:00 with classes and teaching for adults, teens, and children.',
        },
        celebracao: {
          title: 'Worship & Preaching Service',
          day: 'Sundays',
          times: ['17:15'],
          location: 'Assembleia de Deus do Faial Facilities',
          description:
            'Sunday celebration gathering of worship, fellowship, and biblical preaching starting at 17:15.',
        },
        'oracao-lares': {
          title: 'Prayer & Word Study Service',
          day: 'Wednesdays',
          times: ['19:00'],
          location: 'Weekly prayer meeting',
          description:
            'Weekly intercession for our church family, our nation, and the persecuted church, paired with Scripture study.',
        },
        'kids-familia': {
          title: 'Worship Team Rehearsal & Families',
          day: 'Fridays or Saturdays',
          times: ['To be confirmed'],
          location: 'Worship Team · Monthly Events',
          description:
            'Weekly worship team rehearsal (Friday/Saturday) and special family gatherings, including our November Thanksgiving Dinner.',
        },
      },
    },
    bulletin: {
      kicker: 'Monthly Bulletin · November 2026',
      heading: 'November Agenda, announcements & church life',
      intro:
        'Follow our official November 2026 church calendar, transition to the Assembleia de Deus do Faial facilities, community prayer requests, and family gratitude.',
      downloadPdf: 'Print Bulletin',
      printModal: {
        previewTitle: 'Print Sheet · November 2026 Bulletin',
        printNow: 'Print / Save PDF',
        downloadHtml: 'Download Sheet',
        close: 'Close',
        venueHeader:
          'Services (since 08/11): Assembleia de Deus do Faial facilities',
        hqHeader: 'Official HQ: Av. Marginal, n.º 17 · 9900-121 Horta',
        savedNotice: 'Printable bulletin downloaded',
      },
      tabsAria: 'Select November Bulletin section',
      tabs: {
        agenda: 'Monthly Agenda',
        announcements: 'Announcements & Initiatives',
        prayer: 'Prayer Requests',
        gratitude: 'Gratitude & Birthdays',
      },
      agendaItems: {
        'nov-01': {
          weekday: 'Sunday',
          title: 'Worship Service with Lord’s Supper & Baptism',
          detail:
            'First-Sunday service celebrating Communion and believer’s baptism.',
        },
        'nov-07': {
          weekday: 'Saturday',
          title: 'Prayer Time for the Persecuted Church',
          detail:
            'Dedicated congregation prayer time lifting up persecuted Christians and missionaries worldwide.',
        },
        'nov-08': {
          weekday: 'Sunday · New Season',
          title: 'National Missions Celebration Service',
          detail:
            'First Sunday gathering at Assembleia de Deus do Faial with new times: 16:00 Sunday School and 17:15 Celebration Service.',
        },
        'nov-15': {
          weekday: 'Sunday',
          title: 'Protestant Reformation Celebration Service',
          detail:
            'Sunday celebration reflecting on the biblical heritage of the Reformation (early order deadline for Juntos resources).',
        },
        'nov-22': {
          weekday: 'Sunday',
          title: 'Worship Service unto the Lord',
          detail:
            'Sunday School at 16:00 and Worship at 17:15. Final day for Thanksgiving Dinner sign-ups and payment.',
        },
        'nov-27': {
          weekday: 'Friday · 19:30',
          title: 'Thanksgiving Dinner',
          detail:
            'Community fellowship dinner at Assembleia de Deus do Faial (€1.00 per person + 1 dish per family).',
        },
        'nov-29': {
          weekday: 'Sunday',
          title: 'Worship Service unto the Lord',
          detail:
            'Closing November together at 16:00 (Sunday School) and 17:15 (Worship & Preaching of the Word).',
        },
      },
      activitiesCard: {
        kicker: 'Activities & Hours',
        heading: 'Weekly rhythm in November',
        rows: [
          { day: 'Sunday', time: '16:00', label: 'Sunday Bible School' },
          { day: 'Sunday', time: '17:15', label: 'Worship & Preaching' },
          { day: 'Wednesday', time: '19:00', label: 'Prayer & Bible Study' },
          {
            day: 'Fri / Sat',
            time: 'Weekly',
            label: 'Worship Team Rehearsal',
          },
        ],
        venueNote:
          'Service venue from November 8: Igreja Assembleia de Deus do Faial facilities.',
        cta: 'Directions & visit confirmation',
      },
      venueAnnouncement: {
        kicker: 'Key Announcement',
        title: 'New venue & service hours from November 8',
        body1:
          'We joyfully share that starting November 8, our worship services are held at the Igreja Assembleia de Deus do Faial facilities.',
        times: [
          '16:00 — Sunday Bible School',
          '17:15 — Celebration Service',
        ],
        body2:
          'We want to keep walking together—united in faith, love, and prayer—trusting that God is guiding every step according to His will.',
        cta: 'View address & contacts',
      },
      thanksgivingDinner: {
        dateShort: 'November 27 · 19:30',
        title: 'Thanksgiving Dinner',
        summary:
          'Friday at 19:30 at Assembleia de Deus do Faial. €1.00 per person + 1 dish per family.',
        seeDetails: 'See details & sign up',
        description:
          'Join us for our community Thanksgiving Dinner at the Assembleia de Deus do Faial facilities as we give thanks together.',
        details: [
          { label: 'Date & time', value: 'Nov 27 · 19:30' },
          { label: 'Contribution', value: '€1.00 per person + 1 dish per family' },
          { label: 'Sign-ups & payment', value: 'By November 22' },
          { label: 'Venue', value: 'Assembleia de Deus do Faial' },
        ],
        cta: 'RSVP via WhatsApp',
        whatsappMessage:
          'Hello! I would like to register for the IEB Horta Thanksgiving Dinner on November 27.',
      },
      juntosCampaign: {
        kicker: 'Prayer Campaign',
        title: 'Prayer Kit & Juntos Kids Devotional',
        description:
          'Devotional booklets and prayer guides from the Juntos campaign to encourage family prayer for adults and children.',
        tier1Title: 'Orders by Nov 15',
        tier1Items: 'Prayer Kit: €4 · Juntos Kids Devotional: €2',
        tier2Title: 'Orders after Nov 15',
        tier2Items: 'Prayer Kit: €5 · Juntos Kids Devotional: €2.50',
      },
      celeiro: {
        kicker: 'November Celeiro',
        title: 'Christmas Hamper Support',
        description:
          'This month, our Celeiro outreach counts on your generous monetary gift to prepare Christmas hampers for families supported in Horta.',
        cta: 'See how to give under Giving & Mission',
      },
      prayerIntro:
        'Join us in prayer throughout November for these real requests across our church family, the Azores, Portugal, and global missions:',
      prayerCta: 'Share a prayer request',
      prayerWhatsappMessage:
        'Hello! I would like to share a prayer request with IEB Horta.',
      prayerRequests: {
        families:
          'For our families, children, youth, adults, and our expectant mothers.',
        'new-decisions':
          'For our brothers and sisters who recently gave their lives to Jesus and for their families.',
        'jean-lima':
          'For our brother Jean Lima, who has decided to be baptized.',
        'church-future':
          'For the future of our church and the opportunities of this new season.',
        'sao-jorge':
          'For Sister Bernadete and family, David, Bruna and family, and the mission work on São Jorge Island.',
        health:
          'For brothers and sisters who are ill or recovering in health.',
        relatives:
          'For our relatives, friends, and neighbors who have not yet surrendered their lives to Jesus.',
        country:
          'For our nation, public authorities, and government leaders.',
        persecuted:
          'For churches and missionary brothers and sisters facing persecution for Christ’s sake.',
        disasters:
          'For countries suffering from disasters and for all those affected by these events.',
        'convention-aba':
          'For the leadership of the Portuguese Baptist Convention, ABA, and more laborers for the church in Portugal.',
      },
      gratitude: {
        kicker: 'Moment of Gratitude',
        title: 'Testimony from Miqueias, Lorena & Eva',
        paragraphs: [
          'There are moments in life when words seem too small to express the greatness of what God does for us. Today, as a family, we lift up our gratitude to the Lord, recognizing that in every season His hand sustained us, His grace reached us, and His faithfulness never failed.',
          'We are thankful not only for the blessings received, but for all God has worked inside us along the road—through days of joy and difficulty, answered prayers, and seasons of waiting.',
          'In this special time, our hearts overflow with gratitude for the life of our little Eva, still in the womb yet already filling such an immense place in our lives. Even before holding her in our arms, we acknowledge the Creator’s hand over her and pray she grows to know, love, and serve Him.',
          'To the Lord we entrust our present, our future, and our daughter’s life, trusting that Jesus is our greatest treasure.',
        ],
        signature: 'With deeply grateful hearts — Miqueias, Lorena & Eva',
        verse:
          '“The Lord has done great things for us, and we are filled with joy.” — Psalm 126:3',
      },
      birthdays: {
        kicker: 'Monthly Birthdays',
        title: 'Celebrating life in November',
        updateNote:
          '*Help us keep our church birthday list up to date by sharing your birthday with us.',
        cta: 'Submit your birthday',
        whatsappMessage:
          'Hello! I would like to add or update my birthday on the IEB Horta list.',
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
      sanctuaryCaption: 'Official address · Av. Marginal, 17.',
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
            'We live out the Gospel beyond church walls through Celeiro hampers, practical food aid, and warm hospitality.',
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
            'Regional fellowship uniting Baptist congregations across the Azorean islands through assemblies, camps, and missions like São Jorge.',
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
          schedule: 'Sundays at 16:00 (EBD) · Weekly gatherings',
          audience: 'Teens and young adults',
          description:
            'A welcoming space to build genuine friendships, talk openly about faith and everyday life, and serve together in the community.',
          imageAlt: 'Hands folded in prayer at an IEB Horta faith gathering',
        },
        casais: {
          title: 'Families & Women',
          summary: 'Family Day, Thanksgiving Dinner & Plenas em Cristo.',
          schedule: 'Periodic gatherings & celebrations',
          audience: 'Families, couples, and women',
          description:
            'Gatherings such as Family Day at Parque da Salgueirinha, Thanksgiving community dinner, and the Plenas em Cristo women’s fellowship.',
          imageAlt:
            'Women gathered singing with acoustic guitar during Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'Sunday School & Children',
          summary: 'Age-grouped rooms for children, teens, and adults.',
          schedule: 'Sundays at 16:00',
          audience: 'All ages',
          description:
            'Engaging biblical teaching tailored to every age group—with classrooms for kids, teens, and adults, plus the Juntos Kids devotional.',
          imageAlt: 'Open Bible with Sunday Bible School times for IEB Horta',
        },
        'acao-social': {
          title: 'Social Outreach · Celeiro',
          summary: 'Christmas hampers and community aid across Faial.',
          schedule: 'Monthly outreach drives',
          audience: 'Open to all volunteers',
          description:
            'Through Celeiro, mobilizing members and friends to bless households in Horta, including our November Christmas Hamper campaign.',
          imageAlt:
            'Charity groceries and food supplies collected by IEB Horta Social Outreach',
        },
        'batismo-discipulado': {
          title: 'Baptism & Discipleship',
          summary: 'First steps in Christian faith and pastoral guidance.',
          schedule: 'Guided by Pr. Luiz Eduardo Júnior (933 855 290)',
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
          alt: 'Archival @iebhorta schedule post for Sunday Bible School and Celebration Service',
          category: 'Archive @iebhorta',
          dateLabel: 'EBD & Worship',
          caption:
            'From our community archives. Starting November 8, 2026: Sundays at 16:00 EBD and 17:15 Celebration at Assembleia de Deus do Faial.',
        },
        'post-social': {
          alt: 'Car trunk filled with grocery bags and milk collected by IEB Horta outreach',
          category: 'Outreach · Celeiro',
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
            'Thanksgiving: “Give thanks in all circumstances; for this is God’s will for you in Christ Jesus.”',
          scripture: '1 Thessalonians 5:18',
        },
      },
      archivesIntro:
        'Resources to encourage your faith: Scripture preaching, November 2026 Monthly Bulletin, special gatherings, and church milestones on Faial Island.',
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
          category: 'Monthly Bulletin',
          dateLabel: 'November 2026 · 51 Years',
          title: 'November Bulletin — 51 Years & New Season',
          summary:
            'Full November agenda, community prayer list, gratitude testimony, and transition of Sunday services to Assembleia de Deus do Faial.',
          actionLabel: 'Open November Agenda',
          imageAlt: '51st anniversary poster for Igreja Evangélica Baptista da Horta',
        },
        'archive-gracas': {
          category: 'November Event',
          dateLabel: 'Nov 27 · 19:30',
          title: 'Community Thanksgiving Dinner',
          summary:
            'Fellowship dinner at Assembleia de Deus do Faial (€1.00 per person + 1 dish per family). Sign-ups & payment by November 22.',
          actionLabel: 'Confirm attendance',
          imageAlt: 'Thanksgiving announcement by IEB Horta',
        },
        'archive-familia': {
          category: 'Community Life',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Outdoor Family Day in Feteira',
          summary:
            'Highlights from our annual outdoor gathering with worship, community lunch, and fellowship for members, children, and visitors.',
          actionLabel: 'Explore on @iebhorta',
          imageAlt: 'Official poster for Family Day at Parque da Salgueirinha',
        },
      },
      giving: {
        kicker: 'Stewardship & Celeiro',
        heading: 'Support the mission and the Christmas Hamper on Faial',
        paragraph1:
          'Igreja Evangélica Baptista da Horta sustains its spiritual and community work solely through the voluntary offerings and tithes of its members and friends.',
        paragraph2:
          'In November, our Celeiro ministry also invites monetary donations to prepare Christmas hampers for families supported on the island.',
        pillars: [
          {
            title: 'Celeiro · Christmas Hamper',
            text: 'Monetary gifts throughout November to prepare Christmas hampers for local households.',
          },
          {
            title: 'Teaching & Public Worship',
            text: 'Maintaining Sunday gatherings (16:00 EBD & 17:15 Worship), hospitality, and Gospel preaching.',
          },
          {
            title: 'Mission in the Azores',
            text: 'Partnership with the Azorean Baptist Association and support for mission work on São Jorge.',
          },
        ],
        ctaWhatsApp: 'Request details on WhatsApp',
        ctaEmail: 'Contact via Email',
        whatsappMessage:
          'Hello! I would like information on contributing to IEB Horta or supporting the Celeiro Christmas Hamper.',
        mailSubject: 'Offering & Celeiro Information — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contact & First Visit',
      heading: 'Plan your first visit',
      intro:
        'It will be a joy to welcome you in person in Horta. Since November 8, services take place at the Assembleia de Deus do Faial facilities (with Av. Marginal, 17 kept as our official address).',
      spaceTabsAria: 'Select church location',
      copyAddress: 'Copy address',
      copiedAddress: 'Address copied',
      visitorNotes: [
        'Services from Nov 8 at Igreja Assembleia de Deus do Faial facilities.',
        'Sundays at 16:00 (Sunday Bible School) and 17:15 (Celebration Service).',
        'Wednesdays at 19:00 — Prayer & Word Study Service.',
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
      dayQuestion: 'Which gathering would you like to visit?',
      dayAria: 'Preferred visit gathering',
      dayOptions: [
        'Sunday · 16:00 (Sunday Bible School)',
        'Sunday · 17:15 (Celebration Service)',
        'Wednesday · 19:00 (Prayer & Study)',
        'Nov 27 · 19:30 (Thanksgiving Dinner)',
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
        ebd: {
          label: 'Worship Venue',
          title: 'Sunday Services & Prayer (from Nov 8)',
          region: 'Horta · Faial Island, Azores',
          note: 'Where our church meets: Sundays 16:00 (EBD) & 17:15 (Worship), Wednesdays 19:00.',
        },
        templo: {
          label: 'Official Address',
          title: 'Igreja Evangélica Baptista da Horta (HQ)',
          region: '9900-121 Horta · Faial Island, Azores, Portugal',
          note: 'Official church mailing address at Avenida Marginal, 17.',
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
      whatsappLabel: 'Pastor WhatsApp (933 855 290)',
      rightsReserved: 'All rights reserved.',
      sundayLine: 'Sundays · 16:00 Sunday School · 17:15 Celebration Service',
    },
    mobileBar: {
      ariaLabel: 'Quick navigation and contact actions',
      map: 'Map',
      schedule: 'Services',
      whatsapp: 'WhatsApp',
    },
    search: {
      buttonAria: 'Search website content',
      buttonLabel: 'Search',
      drawerButtonLabel: 'Search website...',
      footerLinkLabel: 'Search website',
      modalTitle: 'Search IEB Horta',
      inputPlaceholder: 'Search schedules, November agenda, location, prayer, ministries...',
      clearInput: 'Clear search text',
      closeModal: 'Close search',
      filterAria: 'Filter results by section',
      categories: {
        all: 'All',
        bulletin: 'November Agenda',
        schedule: 'Schedule',
        essence: 'About & Beliefs',
        ministries: 'Ministries',
        community: 'Media & Giving',
        visit: 'Location & Visit',
      },
      suggestionsTitle: 'Quick searches',
      suggestions: [
        '16:00',
        'Assembleia de Deus',
        'Thanksgiving',
        'Prayer',
        'Celeiro',
        'Baptism',
        'Av. Marginal',
        'Youth',
      ],
      resultsCountSingular: 'result found',
      resultsCountPlural: 'results found',
      emptyTitle: 'No matching content found',
      emptyHint:
        'Try searching for “16:00”, “Assembleia de Deus”, “Prayer”, “Thanksgiving”, “Celeiro”, or “Baptism”.',
      keyboardHint: 'ESC to close · Arrow keys to navigate · Enter to open',
      openResult: 'Go to section',
    },
  },

  fr: {
    meta: {
      title: 'IEB Horta — Église Évangélique Baptiste de Horta',
      description:
        'Un lieu de foi, de famille et de nouveaux départs sur l’île de Faial, Açores. Agenda de novembre 2026, nouveaux horaires du dimanche (16h00 EBD, 17h15 Culte), ministères et accueil.',
      skipToContent: 'Aller au contenu principal',
    },
    nav: {
      ariaMain: 'Navigation principale',
      ariaMobile: 'Menu mobile',
      ariaLanguage: 'Changer la langue du site',
      languageMenuTitle: 'Langue',
      links: {
        schedule: 'Horaires',
        novemberAgenda: 'Agenda Novembre',
        essence: 'À propos',
        ministries: 'Ministères',
        community: 'Contenus',
        visit: 'Contacts',
      },
      subLinks: {
        novemberAgenda: 'Agenda du Mois',
        novemberAnnouncements: 'Annonces & Repas (27/11)',
        novemberPrayer: 'Sujets de Prière',
        novemberGratitude: 'Reconnaissance & Anniversaires',
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
      drawerSummary: 'Dimanches à 16h00 (EBD) et 17h15 (Culte) · AD Faial.',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Intérieur lumineux de l’église baigné par la lumière du matin avec la communauté réunie',
      kickerYears: 'Bulletin Novembre 2026 · 51 Ans à Faial',
      headline: 'Un lieu de foi, de famille et de nouveaux départs.',
      subheadline:
        'Soutenus par l’amour de Dieu sur l’île de Faial. À partir du 8 novembre, nos cultes ont lieu dans les locaux de l’Assembleia de Deus do Faial : dimanches à 16h00 (EBD) et 17h15 (Culte).',
      ctaVisit: 'Planifier votre visite',
      ctaInstagram: 'Suivre @iebhorta',
      watchYouTube: 'Cultes sur YouTube',
      prevSlide: 'Temps fort précédent',
      nextSlide: 'Temps fort suivant',
      slideLabelPrefix: 'Temps fort',
      slides: {
        welcome: {
          kicker: 'Bulletin de Novembre 2026 · 51 Ans à Faial',
          headline: 'Un lieu de foi, de famille et de nouveaux départs.',
          subheadline:
            'Soutenus par l’amour de Dieu sur l’île de Faial. Consultez l’Agenda de Novembre et nos horaires du dimanche (16h00 EBD · 17h15 Célébration).',
          ctaLabel: 'Voir Agenda Novembre',
          imageAlt:
            'Intérieur lumineux de l’église baigné par la lumière du matin avec la communauté réunie',
        },
        'sunday-worship': {
          kicker: 'Assembleia de Deus do Faial · Depuis le 8 Novembre',
          headline: 'Nouveaux horaires du dimanche : 16h00 EBD et 17h15 Culte.',
          subheadline:
            'Nous nous réunissons aussi le mercredi à 19h00 pour le Culte de Prière et l’Étude de la Parole. Portes ouvertes à toute la famille.',
          ctaLabel: 'Voir les Horaires',
          imageAlt: 'Intérieur de l’Igreja Evangélica Baptista da Horta',
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
      ebdStripTextBefore: 'Mercredi à',
      ebdStripTextAfter: '— Culte de Prière et Étude de la Parole',
      pastorLabel: 'Pasteur :',
      whatsappMessage:
        'Bonjour ! Je souhaiterais en savoir plus sur les cultes de l’Igreja Evangélica Baptista da Horta et planifier une visite.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Agenda Dominical//FR',
      summary: 'Culte de Célébration — IEB Horta',
      description:
        'École Biblique à 16h00 et Culte de Célébration à 17h15 dans les locaux de l’Assembleia de Deus do Faial (Horta). Bienvenue à tous !',
      fileName: 'culte-ieb-horta.ics',
    },
    schedule: {
      kicker: 'Activités et Horaires · Novembre 2026',
      heading: 'Nos rendez-vous en famille',
      intro:
        'À compter du 8 novembre, nos cultes du dimanche se tiennent dans les locaux de l’Igreja Assembleia de Deus do Faial aux nouveaux horaires de l’après-midi, en plus de notre rencontre du mercredi soir.',
      filterAria: 'Filtrer le programme',
      filters: {
        all: 'Tout le programme',
        sunday: 'Dimanches',
        week: 'Semaine & Louange',
      },
      calendarSaved: 'Événement enregistré (.ics)',
      calendarSave: 'Enregistrer au calendrier',
      watchYouTube: 'Voir sur YouTube',
      confirmVisit: 'Confirmer une visite',
      items: {
        ebd: {
          title: 'École Biblique du Dimanche (EBD)',
          day: 'Dimanches',
          times: ['16h00'],
          location: 'Locaux de l’Assembleia de Deus do Faial',
          description:
            'Étude biblique communautaire le dimanche à 16h00 avec des classes pour adultes, adolescents et enfants.',
        },
        celebracao: {
          title: 'Culte de Louange et Prédication de la Parole',
          day: 'Dimanches',
          times: ['17h15'],
          location: 'Locaux de l’Assembleia de Deus do Faial',
          description:
            'Culte dominical de célébration, de louange, de communion et d’enseignement biblique à 17h15.',
        },
        'oracao-lares': {
          title: 'Culte de Prière et Étude de la Parole',
          day: 'Mercredis',
          times: ['19h00'],
          location: 'Rencontre hebdomadaire de prière',
          description:
            'Temps d’intercession pour les familles, le pays et l’église persécutée, accompagné d’une étude biblique.',
        },
        'kids-familia': {
          title: 'Répétition de Louange & Familles',
          day: 'Vendredis ou Samedis',
          times: ['À confirmer'],
          location: 'Équipe de Louange · Temps Forts',
          description:
            'Répétition hebdomadaire du groupe de louange (vendredi/samedi) et rencontres familiales comme le Dîner d’Action de grâces en novembre.',
        },
      },
    },
    bulletin: {
      kicker: 'Bulletin Mensuel · Novembre 2026',
      heading: 'Agenda de Novembre, annonces & vie d’église',
      intro:
        'Retrouvez le calendrier officiel de novembre 2026, le passage aux locaux de l’Assembleia de Deus do Faial, les sujets de prière et le témoignage de reconnaissance.',
      downloadPdf: 'Imprimer le Bulletin',
      printModal: {
        previewTitle: 'Feuille d’Impression · Bulletin de Novembre 2026',
        printNow: 'Imprimer / Enregistrer PDF',
        downloadHtml: 'Télécharger la Fiche',
        close: 'Fermer',
        venueHeader:
          'Cultes (dès le 08/11) : Locaux de l’Assembleia de Deus do Faial',
        hqHeader: 'Siège officiel : Av. Marginal, n.º 17 · 9900-121 Horta',
        savedNotice: 'Fiche imprimable téléchargée',
      },
      tabsAria: 'Choisir une section du Bulletin de Novembre',
      tabs: {
        agenda: 'Agenda du Mois',
        announcements: 'Annonces & Actions',
        prayer: 'Sujets de Prière',
        gratitude: 'Reconnaissance & Anniversaires',
      },
      agendaItems: {
        'nov-01': {
          weekday: 'Dimanche',
          title: 'Culte avec célébration de la Cène et Baptême',
          detail:
            'Culte du premier dimanche du mois avec Sainte-Cène et baptême.',
        },
        'nov-07': {
          weekday: 'Samedi',
          title: 'Temps de prière pour l’église persécutée',
          detail:
            'Rencontre consacrée à la prière pour les chrétiens et missionnaires persécutés dans le monde.',
        },
        'nov-08': {
          weekday: 'Dimanche · Nouvelle Étape',
          title: 'Culte avec célébration des Missions Nationales',
          detail:
            'Début des cultes à l’Assembleia de Deus do Faial avec nouveaux horaires : 16h00 EBD et 17h15 Culte de Célébration.',
        },
        'nov-15': {
          weekday: 'Dimanche',
          title: 'Culte de célébration de la Réforme Protestante',
          detail:
            'Célébration dominicale rappelant les principes bibliques de la Réforme (échéance initiale des commandes Juntos).',
        },
        'nov-22': {
          weekday: 'Dimanche',
          title: 'Culte de célébration au Seigneur',
          detail:
            'École Biblique à 16h00 et Culte à 17h15. Dernier jour d’inscription et de paiement pour le Dîner d’Action de grâces.',
        },
        'nov-27': {
          weekday: 'Vendredi · 19h30',
          title: 'Dîner d’Action de grâces',
          detail:
            'Repas fraternel dans les locaux de l’Assembleia de Deus do Faial (1,00€ par personne + 1 plat par famille).',
        },
        'nov-29': {
          weekday: 'Dimanche',
          title: 'Culte de célébration au Seigneur',
          detail:
            'Clôture du mois de novembre à 16h00 (EBD) et à 17h15 (Culte de Louange et Prédication).',
        },
      },
      activitiesCard: {
        kicker: 'Activités et Horaires',
        heading: 'Rythme hebdomadaire en novembre',
        rows: [
          {
            day: 'Dimanche',
            time: '16h00',
            label: 'École Biblique du Dimanche',
          },
          {
            day: 'Dimanche',
            time: '17h15',
            label: 'Culte de Louange & Prédication',
          },
          {
            day: 'Mercredi',
            time: '19h00',
            label: 'Culte de Prière et Étude',
          },
          {
            day: 'Ven / Sam',
            time: 'Hebdo',
            label: 'Répétition du groupe de Louange',
          },
        ],
        venueNote:
          'Lieu des cultes depuis le 8 novembre : Locaux de l’Igreja Assembleia de Deus do Faial.',
        cta: 'Itinéraire et confirmation de venue',
      },
      venueAnnouncement: {
        kicker: 'Annonce Principale',
        title: 'Nouveau lieu et horaires depuis le 8 novembre',
        body1:
          'C’est avec joie que nous partageons avec vous qu’à partir du 8 novembre, nos cultes se déroulent dans les locaux de l’Igreja Assembleia de Deus do Faial.',
        times: [
          '16h00 — École Biblique du Dimanche',
          '17h15 — Culte de Célébration',
        ],
        body2:
          'Nous souhaitons continuer à marcher ensemble, unis dans la foi, l’amour et la prière, confiants que Dieu conduit toutes choses selon Sa volonté.',
        cta: 'Voir adresse et contacts',
      },
      thanksgivingDinner: {
        dateShort: '27 Novembre · 19h30',
        title: 'Dîner d’Action de grâces',
        summary:
          'Vendredi à 19h30 dans les locaux de l’Assembleia de Deus do Faial. 1,00€ par personne + 1 plat par famille.',
        seeDetails: 'Voir modalités et inscription',
        description:
          'Venez rendre grâce et célébrer en famille lors de notre Dîner communautaire d’Action de grâces à l’Assembleia de Deus do Faial.',
        details: [
          { label: 'Date et heure', value: '27 nov. · 19h30' },
          {
            label: 'Participation',
            value: '1,00€ par personne + 1 plat par famille',
          },
          { label: 'Inscriptions', value: 'Jusqu’au 22 novembre' },
          { label: 'Lieu', value: 'Assembleia de Deus do Faial' },
        ],
        cta: 'S’inscrire via WhatsApp',
        whatsappMessage:
          'Bonjour ! Je souhaiterais m’inscrire au Dîner d’Action de grâces de l’IEB Horta le 27 novembre.',
      },
      juntosCampaign: {
        kicker: 'Campagne de Prière',
        title: 'Kit de Prière & Dévotionnel Juntos Kids',
        description:
          'Supports de prière de la campagne Juntos pour nourrir la vie spirituelle en famille, pour adultes et enfants.',
        tier1Title: 'Commandes jusqu’au 15 nov.',
        tier1Items: 'Kit de Prière : 4€ · Dévotionnel Juntos Kids : 2€',
        tier2Title: 'Commandes après le 15 nov.',
        tier2Items: 'Kit de Prière : 5€ · Dévotionnel Juntos Kids : 2,50€',
      },
      celeiro: {
        kicker: 'Celeiro de Novembre',
        title: 'Soutien au Panier de Noël',
        description:
          'Ce mois-ci, le ministère Celeiro compte sur votre soutien pour préparer les Paniers de Noël des familles accompagnées, par un don financier.',
        cta: 'Voir comment contribuer dans Offrandes & Mission',
      },
      prayerIntro:
        'Unissez-vous à nous dans la prière tout au long du mois de novembre pour les sujets réels de notre église, des Açores, du Portugal et des missions :',
      prayerCta: 'Envoyer un sujet de prière',
      prayerWhatsappMessage:
        'Bonjour ! Je souhaiterais partager un sujet de prière avec l’IEB Horta.',
      prayerRequests: {
        families:
          'Pour nos familles, enfants, jeunes, adultes et nos sœurs enceintes.',
        'new-decisions':
          'Pour nos frères et sœurs qui ont récemment pris une décision pour Jésus et pour leurs familles.',
        'jean-lima':
          'Pour notre frère Jean Lima, qui a pris la décision d’être baptisé.',
        'church-future':
          'Pour l’avenir de notre église et les défis de cette nouvelle étape.',
        'sao-jorge':
          'Pour Sœur Bernadete et sa famille, pour David, Bruna et leur famille, ainsi que la mission sur l’île de São Jorge.',
        health:
          'Pour nos frères et sœurs malades et ceux qui sont en convalescence.',
        relatives:
          'Pour nos proches, amis et voisins qui n’ont pas encore confié leur vie à Jésus.',
        country:
          'Pour notre pays, nos autorités et nos dirigeants.',
        persecuted:
          'Pour les églises et nos frères missionnaires persécutés par amour pour Jésus.',
        disasters:
          'Pour les pays touchés par des catastrophes et les frères qui en ont été victimes.',
        'convention-aba':
          'Pour la direction de la Convention Baptiste Portugaise, l’ABA et davantage d’ouvriers au Portugal.',
      },
      gratitude: {
        kicker: 'Moment de Reconnaissance',
        title: 'Témoignage de la famille Miqueias, Lorena et Eva',
        paragraphs: [
          'Il y a des moments dans la vie où les mots semblent trop petits pour exprimer la grandeur de ce que Dieu fait pour nous. Aujourd’hui, en famille, nous voulons élever notre reconnaissance au Seigneur, sachant qu’à chaque étape Sa main nous a soutenus, Sa grâce nous a atteints et Sa fidélité ne nous a jamais manqué.',
          'Nous sommes reconnaissants non seulement pour les bénédictions reçues, mais aussi pour tout ce que Dieu a accompli en nous en chemin — dans la joie comme dans l’épreuve.',
          'En cette saison si particulière, nos cœurs débordent de gratitude pour la vie de notre petite Eva, encore dans le sein maternel mais occupant déjà une place immense dans nos vies. Avant même de la serrer dans nos bras, nous reconnaissons la main du Créateur sur elle.',
          'Nous confions au Seigneur notre présent, notre avenir et la vie de notre fille, convaincus que Jésus est notre plus grand trésor.',
        ],
        signature:
          'Avec un cœur profondément reconnaissant — Miqueias, Lorena et Eva',
        verse:
          '« L’Éternel a fait pour nous de grandes choses ; nous sommes dans la joie. » — Psaumes 126:3',
      },
      birthdays: {
        kicker: 'Anniversaires du Mois',
        title: 'Nous célébrons la vie en novembre',
        updateNote:
          '*Aidez-nous à mettre à jour la liste des anniversaires de l’église en partageant votre date.',
        cta: 'Transmettre votre date',
        whatsappMessage:
          'Bonjour ! Je souhaiterais communiquer ma date d’anniversaire pour la liste de l’IEB Horta.',
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
      sanctuaryCaption: 'Siège officiel · Av. Marginal, 17.',
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
            'Nous vivons l’Évangile au-delà des murs du temple grâce au projet Celeiro, aux collectes solidaires et à un accueil attentif.',
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
            'Communion régionale entre les églises baptistes des îles des Açores, y compris la mission à São Jorge.',
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
          schedule: 'Dimanches à 16h00 (EBD) · Rencontres hebdomadaires',
          audience: 'Adolescents et jeunes adultes',
          description:
            'Un espace pour tisser de vraies amitiés, échanger librement sur la foi et le quotidien, et servir ensemble dans la communauté.',
          imageAlt: 'Mains en prière lors d’une rencontre de foi de l’IEB Horta',
        },
        casais: {
          title: 'Familles & Femmes',
          summary: 'Journée de la Famille, Action de grâces et Plenas em Cristo.',
          schedule: 'Rencontres périodiques et célébrations',
          audience: 'Familles, couples et femmes',
          description:
            'Des initiatives comme la Journée de la Famille au Parque da Salgueirinha, le Dîner d’Action de grâces et les rencontres féminines Plenas em Cristo.',
          imageAlt:
            'Femmes réunies chantant avec guitare lors de la rencontre Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'École Biblique & Enfants',
          summary: 'Salles adaptées pour enfants, adolescents et adultes.',
          schedule: 'Dimanches à 16h00',
          audience: 'Tous les âges',
          description:
            'Un enseignement biblique adapté à chaque âge — avec des classes pour enfants, adolescents et adultes, ainsi que le livret Juntos Kids.',
          imageAlt:
            'Bible ouverte avec les horaires de l’École Biblique du Dimanche de l’IEB Horta',
        },
        'acao-social': {
          title: 'Action Sociale · Celeiro',
          summary: 'Campagne du Panier de Noël et entraide solidaire à Faial.',
          schedule: 'Campagnes mensuelles d’entraide',
          audience: 'Ouvert à tous les bénévoles',
          description:
            'Avec le ministère Celeiro, mobilisation des membres et amis pour soutenir les foyers de Horta, y compris le Panier de Noël en novembre.',
          imageAlt:
            'Provisions solidaires collectées par l’Action Sociale de l’IEB Horta',
        },
        'batismo-discipulado': {
          title: 'Baptême & Discipulat',
          summary: 'Premiers pas dans la foi chrétienne et suivi pastoral.',
          schedule: 'Suivi avec le Pasteur Luiz Eduardo Júnior (933 855 290)',
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
          alt: 'Archive officielle @iebhorta sur l’École Biblique et le Culte',
          category: 'Archive @iebhorta',
          dateLabel: 'EBD & Culte',
          caption:
            'Archive de nos dimanches. À partir du 8 novembre 2026 : 16h00 EBD et 17h15 Culte de Célébration à l’Assembleia de Deus do Faial.',
        },
        'post-social': {
          alt: 'Coffre de voiture rempli de sacs de courses et de lait collectés par l’action sociale de l’IEB Horta',
          category: 'Action Sociale · Celeiro',
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
            'Action de grâces : « Rendez grâces en toutes choses, car c’est à votre égard la volonté de Dieu en Jésus-Christ. »',
          scripture: '1 Thessaloniciens 5:18',
        },
      },
      archivesIntro:
        'Des contenus pour édifier votre foi : prédications des Écritures, Bulletin Mensuel de Novembre 2026, célébrations et temps forts à Faial.',
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
          category: 'Bulletin Mensuel',
          dateLabel: 'Novembre 2026 · 51 Ans',
          title: 'Bulletin de Novembre — 51 Ans & Nouvelle Étape',
          summary:
            'Calendrier complet de novembre, sujets de prière, témoignage de reconnaissance et passage des cultes du dimanche à l’Assembleia de Deus do Faial.',
          actionLabel: 'Voir Agenda Novembre',
          imageAlt: 'Affiche du 51e anniversaire de l’IEB Horta',
        },
        'archive-gracas': {
          category: 'Événement de Novembre',
          dateLabel: '27 nov. · 19h30',
          title: 'Dîner communautaire d’Action de grâces',
          summary:
            'Repas fraternel à l’Assembleia de Deus do Faial (1,00€ par personne + 1 plat par famille). Inscriptions jusqu’au 22 novembre.',
          actionLabel: 'Confirmer votre présence',
          imageAlt: 'Annonce d’Action de grâces de l’IEB Horta',
        },
        'archive-familia': {
          category: 'Vie d’Église',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Journée de la Famille en plein air à Feteira',
          summary:
            'Souvenir de notre rencontre annuelle avec culte en plein air, repas partagé et moments fraternels pour les familles et visiteurs.',
          actionLabel: 'Découvrir sur @iebhorta',
          imageAlt: 'Invitation officielle à la Journée de la Famille à Feteira',
        },
      },
      giving: {
        kicker: 'Générosité & Celeiro',
        heading: 'Soutenir la mission et le Panier de Noël à Faial',
        paragraph1:
          'L’Igreja Evangélica Baptista da Horta soutient son ministère spirituel et social uniquement grâce aux dons et offrandes volontaires de ses membres et amis.',
        paragraph2:
          'En novembre, le ministère Celeiro compte aussi sur vos dons financiers pour composer les Paniers de Noël des familles accompagnées sur l’île.',
        pillars: [
          {
            title: 'Celeiro · Panier de Noël',
            text: 'Dons financiers en novembre pour préparer les Paniers de Noël solidaires à Faial.',
          },
          {
            title: 'Enseignement & Culte Public',
            text: 'Soutien des cultes dominicaux (16h00 EBD et 17h15 Culte), de l’accueil et de l’enseignement.',
          },
          {
            title: 'Mission aux Açores',
            text: 'Coopération avec l’Association Baptiste Açoréenne et la mission sur l’île de São Jorge.',
          },
        ],
        ctaWhatsApp: 'Demander les informations via WhatsApp',
        ctaEmail: 'Contacter par e-mail',
        whatsappMessage:
          'Bonjour ! Je souhaiterais obtenir les informations pour faire un don à l’IEB Horta ou soutenir le Panier de Noël du Celeiro.',
        mailSubject: 'Informations sur les dons et Celeiro — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contacts & Première Visite',
      heading: 'Planifiez votre première visite',
      intro:
        'Ce sera une joie de vous accueillir en personne à Horta. Depuis le 8 novembre, les cultes ont lieu dans les locaux de l’Igreja Assembleia de Deus do Faial (l’Av. Marginal, 17 reste le siège officiel).',
      spaceTabsAria: 'Choisir le lieu de l’église',
      copyAddress: 'Copier l’adresse',
      copiedAddress: 'Adresse copiée',
      visitorNotes: [
        'Cultes depuis le 08/11 dans les locaux de l’Igreja Assembleia de Deus do Faial.',
        'Dimanches à 16h00 (École Biblique) et 17h15 (Culte de Célébration).',
        'Mercredis à 19h00 — Culte de Prière et Étude de la Parole.',
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
      dayQuestion: 'À quel rendez-vous souhaitez-vous venir ?',
      dayAria: 'Rendez-vous souhaité pour la visite',
      dayOptions: [
        'Dimanche · 16h00 (École Biblique)',
        'Dimanche · 17h15 (Culte de Célébration)',
        'Mercredi · 19h00 (Prière et Étude)',
        '27 nov. · 19h30 (Dîner Action de grâces)',
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
        ebd: {
          label: 'Lieu des Cultes',
          title: 'Cultes du Dimanche & Prière (depuis 08/11)',
          region: 'Horta · Île de Faial, Açores',
          note: 'Lieu de rencontre actuel : dimanches 16h00 (EBD) et 17h15 (Culte), mercredis 19h00.',
        },
        templo: {
          label: 'Siège Officiel',
          title: 'Igreja Evangélica Baptista da Horta (Siège)',
          region: '9900-121 Horta · Île de Faial, Açores, Portugal',
          note: 'Adresse officielle et postale de l’église, Avenida Marginal, 17.',
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
      whatsappLabel: 'WhatsApp Pasteur (933 855 290)',
      rightsReserved: 'Tous droits réservés.',
      sundayLine: 'Dimanches · 16h00 École Biblique · 17h15 Culte',
    },
    mobileBar: {
      ariaLabel: 'Actions rapides de navigation et de contact',
      map: 'Carte',
      schedule: 'Horaires',
      whatsapp: 'WhatsApp',
    },
    search: {
      buttonAria: 'Rechercher sur le site',
      buttonLabel: 'Rechercher',
      drawerButtonLabel: 'Rechercher sur le site...',
      footerLinkLabel: 'Rechercher sur le site',
      modalTitle: 'Rechercher sur le site de l’IEB Horta',
      inputPlaceholder: 'Rechercher horaires, agenda de novembre, lieu, prière, ministères...',
      clearInput: 'Effacer la recherche',
      closeModal: 'Fermer la recherche',
      filterAria: 'Filtrer les résultats par section',
      categories: {
        all: 'Tout',
        bulletin: 'Agenda Novembre',
        schedule: 'Horaires',
        essence: 'À propos & Foi',
        ministries: 'Ministères',
        community: 'Contenus',
        visit: 'Lieu & Visite',
      },
      suggestionsTitle: 'Recherches fréquentes',
      suggestions: [
        '16h00',
        'Assembleia de Deus',
        'Action de Grâce',
        'Prière',
        'Celeiro',
        'Baptême',
        'Av. Marginal',
        'Jeunes',
      ],
      resultsCountSingular: 'résultat trouvé',
      resultsCountPlural: 'résultats trouvés',
      emptyTitle: 'Aucun contenu trouvé',
      emptyHint:
        'Essayez « 16h00 », « Assembleia de Deus », « Prière », « Action de Grâce », « Celeiro » ou « Baptême ».',
      keyboardHint: 'ESC pour fermer · Flèches pour naviguer · Entrée pour ouvrir',
      openResult: 'Ouvrir la section',
    },
  },

  es: {
    meta: {
      title: 'IEB Horta — Iglesia Evangélica Bautista de Horta',
      description:
        'Un lugar de fe, familia y nuevos comienzos en la Isla de Faial, Azores. Agenda de noviembre 2026, nuevos horarios de domingo (16:00 EBD y 17:15 Culto), ministerios y visita.',
      skipToContent: 'Saltar al contenido principal',
    },
    nav: {
      ariaMain: 'Navegación principal',
      ariaMobile: 'Menú móvil',
      ariaLanguage: 'Cambiar el idioma del sitio',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Horarios',
        novemberAgenda: 'Agenda Noviembre',
        essence: 'Sobre Nosotros',
        ministries: 'Ministerios',
        community: 'Contenidos',
        visit: 'Contactos',
      },
      subLinks: {
        novemberAgenda: 'Agenda del Mes',
        novemberAnnouncements: 'Anuncios & Cena (27/11)',
        novemberPrayer: 'Motivos de Oración',
        novemberGratitude: 'Gratitud & Cumpleaños',
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
      drawerSummary: 'Domingos a las 16:00 (EBD) y 17:15 (Culto) · AD Faial.',
      whatsapp: 'WhatsApp',
    },
    hero: {
      imageAlt:
        'Interior luminoso de la iglesia con luz natural de la mañana y comunidad reunida',
      kickerYears: 'Boletín Noviembre 2026 · 51 Años en Faial',
      headline: 'Un lugar de fe, familia y nuevos comienzos.',
      subheadline:
        'Sostenidos por el amor de Dios en la Isla de Faial. Desde el 8 de noviembre nos reunimos en las instalaciones de la Assembleia de Deus do Faial: domingos a las 16:00 (EBD) y 17:15 (Culto).',
      ctaVisit: 'Planifica tu Visita',
      ctaInstagram: 'Sigue a @iebhorta',
      watchYouTube: 'Cultos en YouTube',
      prevSlide: 'Destacado anterior',
      nextSlide: 'Siguiente destacado',
      slideLabelPrefix: 'Destacado',
      slides: {
        welcome: {
          kicker: 'Boletín de Noviembre 2026 · 51 Años en Faial',
          headline: 'Un lugar de fe, familia y nuevos comienzos.',
          subheadline:
            'Sostenidos por el amor de Dios en la Isla de Faial. Consulta nuestra Agenda de Noviembre y los horarios dominicales (16:00 EBD · 17:15 Celebración).',
          ctaLabel: 'Ver Agenda Noviembre',
          imageAlt:
            'Interior luminoso de la iglesia con luz natural de la mañana y comunidad reunida',
        },
        'sunday-worship': {
          kicker: 'Assembleia de Deus do Faial · Desde el 8 de Noviembre',
          headline: 'Nuevos horarios de domingo: 16:00 EBD y 17:15 Culto.',
          subheadline:
            'También nos reunimos los miércoles a las 19:00 para el Culto de Oración y Estudio de la Palabra. Puertas abiertas para toda la familia.',
          ctaLabel: 'Ver Horarios',
          imageAlt: 'Interior de la Igreja Evangélica Baptista da Horta',
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
      ebdStripTextBefore: 'Miércoles a las',
      ebdStripTextAfter: '— Culto de Oración y Estudio de la Palabra',
      pastorLabel: 'Pastorado:',
      whatsappMessage:
        '¡Hola! Me gustaría saber más sobre los cultos de la Igreja Evangélica Baptista da Horta y planificar una visita.',
    },
    calendarIcs: {
      prodId: '-//IEB Horta//Agenda Dominical//ES',
      summary: 'Culto de Celebración — IEB Horta',
      description:
        'Escuela Bíblica Dominical a las 16:00 y Culto de Celebración a las 17:15 en las instalaciones de la Assembleia de Deus do Faial (Horta). ¡Puertas abiertas!',
      fileName: 'culto-ieb-horta.ics',
    },
    schedule: {
      kicker: 'Actividades y Horarios · Noviembre 2026',
      heading: 'Horarios para reunirnos en familia',
      intro:
        'Desde el 8 de noviembre, nuestros cultos dominicales se celebran en las instalaciones de la Igreja Assembleia de Deus do Faial en horario vespertino, junto con nuestra reunión semanal de los miércoles.',
      filterAria: 'Filtrar programación',
      filters: {
        all: 'Toda la agenda',
        sunday: 'Domingos',
        week: 'Semana & Alabanza',
      },
      calendarSaved: 'Evento guardado (.ics)',
      calendarSave: 'Guardar culto en el calendario',
      watchYouTube: 'Ver en YouTube',
      confirmVisit: 'Confirmar visita',
      items: {
        ebd: {
          title: 'Escuela Bíblica Dominical (EBD)',
          day: 'Domingos',
          times: ['16:00'],
          location: 'Instalaciones de la Assembleia de Deus do Faial',
          description:
            'Estudio bíblico comunitario los domingos a las 16:00 con clases para adultos, adolescentes y niños.',
        },
        celebracao: {
          title: 'Culto de Alabanza y Predicación de la Palabra',
          day: 'Domingos',
          times: ['17:15'],
          location: 'Instalaciones de la Assembleia de Deus do Faial',
          description:
            'Culto dominical de celebración, alabanza, comunión y exposición de las Escrituras a las 17:15.',
        },
        'oracao-lares': {
          title: 'Culto de Oración y Estudio de la Palabra',
          day: 'Miércoles',
          times: ['19:00'],
          location: 'Reunión semanal de oración',
          description:
            'Tiempo de intercesión por las familias, nuestro país y la iglesia perseguida, junto con estudio bíblico.',
        },
        'kids-familia': {
          title: 'Ensayo del Grupo de Alabanza & Familias',
          day: 'Viernes o Sábados',
          times: ['A confirmar'],
          location: 'Equipo de Alabanza · Eventos del Mes',
          description:
            'Ensayo semanal del grupo de alabanza (viernes/sábado) y encuentros familiares como nuestra Cena de Acción de Gracias en noviembre.',
        },
      },
    },
    bulletin: {
      kicker: 'Boletín Mensual · Noviembre 2026',
      heading: 'Agenda de Noviembre, anuncios y vida de iglesia',
      intro:
        'Consulta la agenda oficial de noviembre, el traslado de cultos a las instalaciones de la Assembleia de Deus do Faial, los motivos de oración y el testimonio de gratitud.',
      downloadPdf: 'Imprimir Boletín',
      printModal: {
        previewTitle: 'Hoja de Impresión · Boletín de Noviembre 2026',
        printNow: 'Imprimir / Guardar PDF',
        downloadHtml: 'Descargar Hoja',
        close: 'Cerrar',
        venueHeader:
          'Cultos (desde 08/11): Instalaciones de Assembleia de Deus do Faial',
        hqHeader: 'Sede oficial: Av. Marginal, n.º 17 · 9900-121 Horta',
        savedNotice: 'Hoja imprimible descargada',
      },
      tabsAria: 'Seleccionar sección del Boletín de Noviembre',
      tabs: {
        agenda: 'Agenda del Mes',
        announcements: 'Anuncios & Acciones',
        prayer: 'Motivos de Oración',
        gratitude: 'Gratitud & Cumpleaños',
      },
      agendaItems: {
        'nov-01': {
          weekday: 'Domingo',
          title: 'Culto con celebración de la Cena y Bautismo',
          detail:
            'Culto del primer domingo del mes con celebración de la Cena del Señor y bautismo.',
        },
        'nov-07': {
          weekday: 'Sábado',
          title: 'Tiempo de oración por la iglesia perseguida',
          detail:
            'Encuentro de oración dedicado a interceder por los cristianos y misioneros perseguidos en todo el mundo.',
        },
        'nov-08': {
          weekday: 'Domingo · Nueva Etapa',
          title: 'Culto con celebración de Misiones Nacionales',
          detail:
            'Inicio de los cultos en la Assembleia de Deus do Faial con nuevos horarios: 16:00 EBD y 17:15 Culto de Celebración.',
        },
        'nov-15': {
          weekday: 'Domingo',
          title: 'Culto de celebración de la Reforma Protestante',
          detail:
            'Celebración dominical recordando los principios bíblicos de la Reforma (fecha inicial para pedidos Juntos).',
        },
        'nov-22': {
          weekday: 'Domingo',
          title: 'Culto de celebración al Señor',
          detail:
            'Escuela Bíblica a las 16:00 y Culto a las 17:15. Último día de inscripciones y pago para la Cena de Acción de Gracias.',
        },
        'nov-27': {
          weekday: 'Viernes · 19:30',
          title: 'Cena de Acción de Gracias',
          detail:
            'Convivencia comunitaria en la Assembleia de Deus do Faial (1,00€ por persona + 1 plato por familia).',
        },
        'nov-29': {
          weekday: 'Domingo',
          title: 'Culto de celebración al Señor',
          detail:
            'Cierre del mes de noviembre a las 16:00 (EBD) y 17:15 (Culto de Alabanza y Predicación).',
        },
      },
      activitiesCard: {
        kicker: 'Actividades y Horarios',
        heading: 'Ritmo semanal en noviembre',
        rows: [
          {
            day: 'Domingo',
            time: '16:00',
            label: 'Escuela Bíblica Dominical',
          },
          {
            day: 'Domingo',
            time: '17:15',
            label: 'Culto de Alabanza y Predicación',
          },
          {
            day: 'Miércoles',
            time: '19:00',
            label: 'Culto de Oración y Estudio',
          },
          {
            day: 'Vie / Sáb',
            time: 'Semanal',
            label: 'Ensayo del grupo de Alabanza',
          },
        ],
        venueNote:
          'Lugar de los cultos desde el 8 de noviembre: Instalaciones de la Igreja Assembleia de Deus do Faial.',
        cta: 'Cómo llegar y confirmar visita',
      },
      venueAnnouncement: {
        kicker: 'Anuncio Principal',
        title: 'Nuevo lugar y horarios desde el 8 de noviembre',
        body1:
          'Con alegría compartimos con vosotros que, a partir del 8 de noviembre, nuestros cultos pasan a celebrarse en las instalaciones de la Igreja Assembleia de Deus do Faial.',
        times: [
          '16:00 — Escuela Bíblica Dominical',
          '17:15 — Culto de Celebración',
        ],
        body2:
          'Queremos seguir caminando juntos, unidos en la fe, el amor y la oración, confiando en que Dios guía cada paso según Su voluntad.',
        cta: 'Ver dirección y contactos',
      },
      thanksgivingDinner: {
        dateShort: '27 de Noviembre · 19:30',
        title: 'Cena de Acción de Gracias',
        summary:
          'Viernes a las 19:30 en la Assembleia de Deus do Faial. 1,00€ por persona + 1 plato por familia.',
        seeDetails: 'Ver detalles e inscripción',
        description:
          'Ven a dar gracias y celebrar en familia nuestra Cena comunitaria de Acción de Gracias en las instalaciones de la Assembleia de Deus do Faial.',
        details: [
          { label: 'Fecha y hora', value: '27 nov. · 19:30' },
          {
            label: 'Participación',
            value: '1,00€ por persona + 1 plato por familia',
          },
          { label: 'Inscripciones y pago', value: 'Hasta el 22 de noviembre' },
          { label: 'Lugar', value: 'Assembleia de Deus do Faial' },
        ],
        cta: 'Inscribirse por WhatsApp',
        whatsappMessage:
          '¡Hola! Me gustaría inscribirme en la Cena de Acción de Gracias de IEB Horta el 27 de noviembre.',
      },
      juntosCampaign: {
        kicker: 'Campaña de Oración',
        title: 'Kit de Oración & Devocional Juntos Kids',
        description:
          'Materiales devocionales de la campaña Juntos para fortalecer la vida de oración en casa con adultos y niños.',
        tier1Title: 'Pedidos hasta el 15 nov.',
        tier1Items: 'Kit de Oración: 4€ · Devocional Juntos Kids: 2€',
        tier2Title: 'Pedidos después del 15 nov.',
        tier2Items: 'Kit de Oración: 5€ · Devocional Juntos Kids: 2,50€',
      },
      celeiro: {
        kicker: 'Celeiro de Noviembre',
        title: 'Apoyo a la Cesta de Navidad',
        description:
          'Este mes, el ministerio Celeiro cuenta con vuestro apoyo solidario para preparar las Cestas de Navidad mediante donativo monetario.',
        cta: 'Ver cómo colaborar en Ofrendas & Misión',
      },
      prayerIntro:
        'Acompáñanos en oración durante todo el mes de noviembre por estos motivos reales de nuestra iglesia, las Azores, Portugal y las misiones:',
      prayerCta: 'Enviar petición de oración',
      prayerWhatsappMessage:
        '¡Hola! Me gustaría compartir un motivo de oración con IEB Horta.',
      prayerRequests: {
        families:
          'Por nuestras familias, niños, jóvenes, adultos y nuestras hermanas embarazadas.',
        'new-decisions':
          'Por nuestros hermanos que recientemente tomaron su decisión por Jesús y por sus familias.',
        'jean-lima':
          'Por nuestro hermano Jean Lima, que tomó la decisión de bautizarse.',
        'church-future':
          'Por el futuro de nuestra iglesia y los desafíos de esta nueva etapa.',
        'sao-jorge':
          'Por la Hermana Bernadete y familia, por David, Bruna y familia y la misión en la isla de São Jorge.',
        health:
          'Por nuestros hermanos enfermos y quienes están en recuperación de salud.',
        relatives:
          'Por nuestros familiares, amigos y vecinos que aún no han entregado su vida a Jesús.',
        country:
          'Por nuestro país, nuestras autoridades y gobernantes.',
        persecuted:
          'Por las iglesias y hermanos misioneros perseguidos por amor a Jesús.',
        disasters:
          'Por los países que sufren catástrofes y por las víctimas de estos acontecimientos.',
        'convention-aba':
          'Por la dirección de la Convención Bautista Portuguesa, la ABA y más obreros para la iglesia en Portugal.',
      },
      gratitude: {
        kicker: 'Momento de Gratitud',
        title: 'Testimonio de la familia Miqueias, Lorena y Eva',
        paragraphs: [
          'Hay momentos en la vida en que las palabras parecen pequeñas para expresar la grandeza de lo que Dios hace por nosotros. Hoy, como familia, elevamos nuestra gratitud al Señor, reconociendo que en cada etapa Su mano nos sostuvo, Su gracia nos alcanzó y Su fidelidad nunca nos faltó.',
          'Estamos agradecidos no solo por las bendiciones recibidas, sino por todo lo que Dios ha obrado en nosotros a lo largo del camino — en los días de alegría y en los días de dificultad.',
          'En este tiempo tan especial, nuestros corazones rebosan de gratitud por la vida de nuestra pequeña Eva, que aún está en el vientre pero ya ocupa un lugar inmenso en nuestras vidas. Antes siquiera de sostenerla en brazos, reconocemos la mano del Creador sobre ella.',
          'Al Señor entregamos nuestro presente, nuestro futuro y la vida de nuestra hija, confiando en que Jesús es nuestro mayor tesoro.',
        ],
        signature: 'Con un corazón profundamente agradecido — Miqueias, Lorena y Eva',
        verse:
          '“Grandes cosas ha hecho Jehová con nosotros; estaremos alegres.” — Salmos 126:3',
      },
      birthdays: {
        kicker: 'Cumpleaños del Mes',
        title: 'Celebramos la vida en noviembre',
        updateNote:
          '*Ayúdanos a actualizar nuestra lista de cumpleaños de la iglesia compartiendo tu fecha.',
        cta: 'Enviar fecha de cumpleaños',
        whatsappMessage:
          '¡Hola! Me gustaría añadir o actualizar mi fecha de cumpleaños en la lista de IEB Horta.',
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
      sanctuaryCaption: 'Sede oficial · Av. Marginal, n.º 17.',
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
            'Vivimos el Evangelio más allá de las paredes del templo mediante el proyecto Celeiro, apoyo alimentario y acogida cercana.',
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
            'La salvación es don gratuito de Dios ofrecido a todos mediante el arrepentimiento y la fe personal en Jesucristo, muerto en la cruz y resucitado.',
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
            'Comunión regional entre las iglesias bautistas de las Azores, incluyendo la misión en la isla de São Jorge.',
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
          schedule: 'Domingos a las 16:00 (EBD) · Encuentros semanales',
          audience: 'Adolescentes y jóvenes adultos',
          description:
            'Espacio para construir amistades verdaderas, conversar abiertamente sobre la fe y el día a día, y servir juntos en la comunidad.',
          imageAlt: 'Manos en oración en un encuentro de fe de la IEB Horta',
        },
        casais: {
          title: 'Familias & Mujeres',
          summary: 'Día de la Familia, Acción de Gracias y Plenas em Cristo.',
          schedule: 'Encuentros periódicos y celebraciones',
          audience: 'Familias, matrimonios y mujeres',
          description:
            'Iniciativas como el Día de la Familia en el Parque da Salgueirinha, la Cena de Acción de Gracias y el encuentro femenino Plenas em Cristo.',
          imageAlt:
            'Mujeres reunidas cantando con guitarra durante el encuentro Plenas em Cristo',
        },
        'infantil-ebd': {
          title: 'Escuela Bíblica & Infantil',
          summary: 'Aulas separadas para niños, adolescentes y adultos.',
          schedule: 'Domingos a las 16:00',
          audience: 'Todas las edades',
          description:
            'Enseñanza bíblica adaptada a cada edad — con aulas para niños, adolescentes y adultos, además del Devocional Juntos Kids.',
          imageAlt:
            'Biblia abierta con los horarios de la Escuela Bíblica Dominical de la IEB Horta',
        },
        'acao-social': {
          title: 'Acción Social · Celeiro',
          summary: 'Campaña de Cesta de Navidad y ayuda solidaria en Faial.',
          schedule: 'Campañas mensuales de apoyo local',
          audience: 'Abierto a todos los voluntarios',
          description:
            'A través de Celeiro, movilizamos a miembros y amigos para apoyar a familias en Horta, incluida la Cesta de Navidad en noviembre.',
          imageAlt:
            'Compras solidarias y alimentos recogidos por Acción Social de IEB Horta',
        },
        'batismo-discipulado': {
          title: 'Bautismo & Discipulado',
          summary: 'Primeros pasos en la fe cristiana y acompañamiento pastoral.',
          schedule: 'Acompañamiento con Pr. Luiz Eduardo Júnior (933 855 290)',
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
          alt: 'Archivo de horarios de @iebhorta sobre la Escuela Bíblica y Culto',
          category: 'Archivo @iebhorta',
          dateLabel: 'EBD & Culto',
          caption:
            'Registro de archivo. Desde el 8 de noviembre de 2026: domingos a las 16:00 EBD y 17:15 Celebración en la Assembleia de Deus do Faial.',
        },
        'post-social': {
          alt: 'Maletero de coche lleno de bolsas de compras y leche recogidas por la acción social de IEB Horta',
          category: 'Acción Social · Celeiro',
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
            'Acción de Gracias: “Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.”',
          scripture: '1 Tesalonicenses 5:18',
        },
      },
      archivesIntro:
        'Contenidos que edifican tu vida espiritual: predicaciones de la Palabra, Boletín Mensual de Noviembre 2026, celebraciones e hitos en Faial.',
      archivesYouTubeCta: 'Abrir canal en YouTube',
      archivesItems: {
        'archive-palavra': {
          category: 'Predicación & Palabra',
          dateLabel: '1 Corintios 10:31',
          title: 'Momento de la Palabra · Pr. Luiz Eduardo Júnior',
          summary:
            'Exposición fiel de las Escrituras para aplicar el Evangelio en la familia y la vida cotidiana. Sigue los cultos en persona y en YouTube.',
          actionLabel: 'Ver en YouTube',
          imageAlt: 'Pr. Luiz Eduardo Júnior predicando en el templo de la IEB Horta',
        },
        'archive-51anos': {
          category: 'Boletín Mensual',
          dateLabel: 'Noviembre 2026 · 51 Años',
          title: 'Boletín de Noviembre — 51 Años & Nueva Etapa',
          summary:
            'Agenda completa de noviembre, lista de oración, testimonio de gratitud y traslado de los cultos dominicales a la Assembleia de Deus do Faial.',
          actionLabel: 'Ver Agenda de Noviembre',
          imageAlt: 'Cartel del 51.º aniversario de la IEB Horta',
        },
        'archive-gracas': {
          category: 'Evento de Noviembre',
          dateLabel: '27 nov. · 19:30',
          title: 'Cena Comunitaria de Acción de Gracias',
          summary:
            'Encuentro fraterno en la Assembleia de Deus do Faial (1,00€ por persona + 1 plato por familia). Inscripciones hasta el 22 de noviembre.',
          actionLabel: 'Confirmar asistencia',
          imageAlt: 'Publicación de Acción de Gracias de IEB Horta',
        },
        'archive-familia': {
          category: 'Vida Comunitaria',
          dateLabel: 'Parque da Salgueirinha',
          title: 'Día de la Familia al aire libre en Feteira',
          summary:
            'Recuerdo de nuestro encuentro anual con culto al aire libre, almuerzo comunitario y convivencia para miembros, niños y visitantes.',
          actionLabel: 'Explorar en @iebhorta',
          imageAlt: 'Cartel oficial del Día de la Familia en el Parque da Salgueirinha',
        },
      },
      giving: {
        kicker: 'Generosidad & Celeiro',
        heading: 'Contribuye a la misión y a la Cesta de Navidad en Faial',
        paragraph1:
          'La Igreja Evangélica Baptista da Horta sostiene su labor espiritual y social únicamente mediante las ofrendas y diezmos voluntarios de sus miembros y amigos.',
        paragraph2:
          'En noviembre, el ministerio Celeiro agradece también tu donativo monetario para preparar la Cesta de Navidad destinada a las familias atendidas.',
        pillars: [
          {
            title: 'Celeiro · Cesta de Navidad',
            text: 'Donativos monetarios durante noviembre para preparar las Cestas de Navidad solidarias en Faial.',
          },
          {
            title: 'Enseñanza & Culto Público',
            text: 'Sostén de los cultos dominicales (16:00 EBD y 17:15 Celebración), acogida y enseñanza bíblica.',
          },
          {
            title: 'Misión en las Azores',
            text: 'Cooperación con la Asociación Bautista Azoreana y la misión en la isla de São Jorge.',
          },
        ],
        ctaWhatsApp: 'Solicitar datos por WhatsApp',
        ctaEmail: 'Contactar por correo',
        whatsappMessage:
          '¡Hola! Me gustaría recibir información sobre cómo ofrendar en IEB Horta o apoyar la Cesta de Navidad de Celeiro.',
        mailSubject: 'Información sobre Ofrendas y Celeiro — IEB Horta',
      },
    },
    visit: {
      kicker: 'Contactos & Primera Visita',
      heading: 'Planifica tu primera visita',
      intro:
        'Será una alegría recibirte en persona en Horta. Desde el 8 de noviembre nos reunimos en las instalaciones de la Igreja Assembleia de Deus do Faial (manteniendo Av. Marginal, n.º 17 como sede oficial).',
      spaceTabsAria: 'Seleccionar espacio de la iglesia',
      copyAddress: 'Copiar dirección',
      copiedAddress: 'Dirección copiada',
      visitorNotes: [
        'Cultos desde el 08/11 en las instalaciones de la Igreja Assembleia de Deus do Faial.',
        'Domingos a las 16:00 (Escuela Bíblica) y 17:15 (Culto de Celebración).',
        'Miércoles a las 19:00 — Culto de Oración y Estudio de la Palabra.',
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
      dayQuestion: '¿A qué encuentro planeas visitarnos?',
      dayAria: 'Encuentro previsto para la visita',
      dayOptions: [
        'Domingo · 16:00 (Escuela Bíblica)',
        'Domingo · 17:15 (Culto de Celebración)',
        'Miércoles · 19:00 (Oración y Estudio)',
        '27 nov. · 19:30 (Cena Acción de Gracias)',
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
        ebd: {
          label: 'Lugar de Cultos',
          title: 'Cultos Dominicales & Oración (desde 08/11)',
          region: 'Horta · Isla de Faial, Azores',
          note: 'Dónde nos reunimos ahora: domingos 16:00 (EBD) y 17:15 (Culto), miércoles 19:00.',
        },
        templo: {
          label: 'Sede Oficial',
          title: 'Igreja Evangélica Baptista da Horta (Sede)',
          region: '9900-121 Horta · Isla de Faial, Azores, Portugal',
          note: 'Dirección oficial y postal de la iglesia en Avenida Marginal, n.º 17.',
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
      whatsappLabel: 'WhatsApp Pastorado (933 855 290)',
      rightsReserved: 'Todos los derechos reservados.',
      sundayLine: 'Domingos · 16:00 Escuela Bíblica · 17:15 Celebración',
    },
    mobileBar: {
      ariaLabel: 'Acciones rápidas de navegación y contacto',
      map: 'Mapa',
      schedule: 'Horarios',
      whatsapp: 'WhatsApp',
    },
    search: {
      buttonAria: 'Buscar contenido en el sitio',
      buttonLabel: 'Buscar',
      drawerButtonLabel: 'Buscar en el sitio...',
      footerLinkLabel: 'Buscar en el sitio',
      modalTitle: 'Buscar en el sitio de IEB Horta',
      inputPlaceholder: 'Buscar horarios, agenda de noviembre, ubicación, oración, ministerios...',
      clearInput: 'Limpiar búsqueda',
      closeModal: 'Cerrar búsqueda',
      filterAria: 'Filtrar resultados por sección',
      categories: {
        all: 'Todo',
        bulletin: 'Agenda Noviembre',
        schedule: 'Horarios',
        essence: 'Sobre & Fe',
        ministries: 'Ministerios',
        community: 'Contenidos',
        visit: 'Ubicación & Visita',
      },
      suggestionsTitle: 'Búsquedas frecuentes',
      suggestions: [
        '16:00',
        'Assembleia de Deus',
        'Acción de Gracias',
        'Oración',
        'Celeiro',
        'Bautismo',
        'Av. Marginal',
        'Jóvenes',
      ],
      resultsCountSingular: 'resultado encontrado',
      resultsCountPlural: 'resultados encontrados',
      emptyTitle: 'No se encontró contenido',
      emptyHint:
        'Prueba con «16:00», «Assembleia de Deus», «Oración», «Acción de Gracias», «Celeiro» o «Bautismo».',
      keyboardHint: 'ESC para cerrar · Flechas para navegar · Enter para abrir',
      openResult: 'Ir a la sección',
    },
  },
};
