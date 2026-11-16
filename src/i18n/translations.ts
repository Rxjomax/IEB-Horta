import type {
  ChurchLocation,
  EssencePillar,
  GalleryPost,
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
    paragraph1: string;
    paragraph2: string;
    quote: string;
    quoteFooter: string;
    pillarsLabel: string;
    swipeHint: string;
    pillars: Record<EssencePillar['number'], LocalizedPillarText>;
  };
  ministries: {
    kicker: string;
    heading: string;
    intro: string;
    ctaJoin: string;
    items: Record<MinistryItem['id'], LocalizedMinistryText>;
  };
  gallery: {
    kickerPrefix: string;
    heading: string;
    followCta: string;
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
        'Um lugar de fé, família e novos começos na Ilha do Faial. Horários de cultos, ministérios, comunidade @iebhorta e planeie a sua visita à Igreja Evangélica Baptista da Horta.',
      skipToContent: 'Saltar para o conteúdo principal',
    },
    nav: {
      ariaMain: 'Navegação principal',
      ariaMobile: 'Menu móvel',
      ariaLanguage: 'Alterar idioma do site',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Horários',
        essence: 'Essência',
        ministries: 'Ministérios',
        community: 'Comunidade',
        visit: 'Visite-nos',
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
      kicker: 'A Nossa Essência',
      heading: 'Amar a Deus, servir pessoas e viver o Evangelho na ilha.',
      sealAlt: 'Selo oficial Igreja Evangélica Baptista da Horta',
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
    },
    ministries: {
      kicker: 'Envolva-se',
      heading: 'Ministérios para caminhar juntos',
      intro:
        'Há sempre um lugar para a sua fase de vida. Toque num ministério para ver os horários, fotografias reais e contactar a equipa.',
      ctaJoin: 'Quero participar',
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
      kickerPrefix: 'Diretamente do Instagram',
      heading: 'Siga o dia a dia da nossa família',
      followCta: 'Seguir @iebhorta no Instagram',
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
    },
    visit: {
      kicker: 'Localização & Primeira Visita',
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
      navigationTitle: 'Navegação',
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
        'Um lugar de fé, família e novos começos na Ilha do Faial, Açores. Horários de cultos, ministérios, comunidade @iebhorta e planeje sua visita à Igreja Evangélica Baptista da Horta.',
      skipToContent: 'Pular para o conteúdo principal',
    },
    nav: {
      ariaMain: 'Navegação principal',
      ariaMobile: 'Menu mobile',
      ariaLanguage: 'Alterar idioma do site',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Horários',
        essence: 'Essência',
        ministries: 'Ministérios',
        community: 'Comunidade',
        visit: 'Visite-nos',
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
      kicker: 'Nossa Essência',
      heading: 'Amar a Deus, servir pessoas e viver o Evangelho na ilha.',
      sealAlt: 'Selo oficial Igreja Evangélica Baptista da Horta',
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
    },
    ministries: {
      kicker: 'Conecte-se',
      heading: 'Ministérios para caminhar juntos',
      intro:
        'Há sempre um lugar preparado para a sua fase de vida. Toque em um ministério para ver os encontros, fotos reais e falar com a equipe.',
      ctaJoin: 'Quero participar',
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
      kickerPrefix: 'Direto do Instagram',
      heading: 'Acompanhe o dia a dia da nossa família',
      followCta: 'Seguir @iebhorta no Instagram',
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
    },
    visit: {
      kicker: 'Localização & Primeira Visita',
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
      navigationTitle: 'Navegação',
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
        'A place of faith, family, and new beginnings on Faial Island, Azores. Service times, ministries, @iebhorta community, and plan your visit to Igreja Evangélica Baptista da Horta.',
      skipToContent: 'Skip to main content',
    },
    nav: {
      ariaMain: 'Main navigation',
      ariaMobile: 'Mobile navigation',
      ariaLanguage: 'Change website language',
      languageMenuTitle: 'Language',
      links: {
        schedule: 'Services',
        essence: 'About Us',
        ministries: 'Ministries',
        community: 'Community',
        visit: 'Visit Us',
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
        'Members and children of Igreja Evangélica Baptista da Horta gathered together',
      familyFallback: 'IEB Horta Family',
      familyCaption: 'Our church family gathered in Horta.',
      sanctuaryAlt:
        'Sanctuary interior of IEB Horta on Avenida Marginal with wooden pews and cross',
      sanctuaryFallback: 'Sanctuary Av. Marginal, 17',
      sanctuaryCaption: 'Sanctuary worship · Av. Marginal, 17.',
      kicker: 'Our Essence',
      heading: 'Loving God, serving people, and living the Gospel on the island.',
      sealAlt: 'Official seal of Igreja Evangélica Baptista da Horta',
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
    },
    ministries: {
      kicker: 'Get Involved',
      heading: 'Ministries to walk together',
      intro:
        'There is always a place for your stage of life. Tap any ministry to view meeting details, real photos, and connect with our team.',
      ctaJoin: 'I want to join',
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
      kickerPrefix: 'Straight from Instagram',
      heading: 'Follow the daily life of our church family',
      followCta: 'Follow @iebhorta on Instagram',
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
    },
    visit: {
      kicker: 'Location & First Visit',
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
      navigationTitle: 'Navigation',
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
        'Un lieu de foi, de famille et de nouveaux départs sur l’île de Faial, Açores. Horaires des cultes, ministères, communauté @iebhorta et informations pour planifier votre visite.',
      skipToContent: 'Aller au contenu principal',
    },
    nav: {
      ariaMain: 'Navigation principale',
      ariaMobile: 'Menu mobile',
      ariaLanguage: 'Changer la langue du site',
      languageMenuTitle: 'Langue',
      links: {
        schedule: 'Horaires',
        essence: 'Notre Foi',
        ministries: 'Ministères',
        community: 'Communauté',
        visit: 'Visiter',
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
      kicker: 'Notre Essence',
      heading: 'Aimer Dieu, servir les personnes et vivre l’Évangile sur l’île.',
      sealAlt: 'Sceau officiel Igreja Evangélica Baptista da Horta',
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
    },
    ministries: {
      kicker: 'S’engager',
      heading: 'Des ministères pour marcher ensemble',
      intro:
        'Il y a toujours une place pour votre étape de vie. Touchez un ministère pour découvrir les horaires, des photos réelles et contacter l’équipe.',
      ctaJoin: 'Je veux participer',
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
      kickerPrefix: 'En direct d’Instagram',
      heading: 'Suivez le quotidien de notre famille',
      followCta: 'Suivre @iebhorta sur Instagram',
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
    },
    visit: {
      kicker: 'Localisation & Première Visite',
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
      navigationTitle: 'Navigation',
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
        'Un lugar de fe, familia y nuevos comienzos en la Isla de Faial, Azores. Horarios de cultos, ministerios, comunidad @iebhorta e información para planificar tu visita.',
      skipToContent: 'Saltar al contenido principal',
    },
    nav: {
      ariaMain: 'Navegación principal',
      ariaMobile: 'Menú móvil',
      ariaLanguage: 'Cambiar el idioma del sitio',
      languageMenuTitle: 'Idioma',
      links: {
        schedule: 'Horarios',
        essence: 'Esencia',
        ministries: 'Ministerios',
        community: 'Comunidad',
        visit: 'Visítanos',
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
      kicker: 'Nuestra Esencia',
      heading: 'Amar a Dios, servir a las personas y vivir el Evangelio en la isla.',
      sealAlt: 'Sello oficial Igreja Evangélica Baptista da Horta',
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
    },
    ministries: {
      kicker: 'Involúcrate',
      heading: 'Ministerios para caminar juntos',
      intro:
        'Siempre hay un lugar para tu etapa de vida. Toca un ministerio para ver los horarios, fotografías reales y contactar con el equipo.',
      ctaJoin: 'Quiero participar',
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
      kickerPrefix: 'Directamente desde Instagram',
      heading: 'Sigue el día a día de nuestra familia',
      followCta: 'Seguir a @iebhorta en Instagram',
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
    },
    visit: {
      kicker: 'Ubicación & Primera Visita',
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
      navigationTitle: 'Navegación',
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
