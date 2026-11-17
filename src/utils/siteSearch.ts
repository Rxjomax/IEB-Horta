import type { AboutTabId } from '../components/AboutSection';
import type { CommunityTabId } from '../components/InstagramGallery';
import type { BulletinTabId } from '../components/NovemberBulletinSection';
import {
  BELIEF_ARTICLES,
  CHURCH_INFO,
  CHURCH_LOCATIONS,
  COMMUNITY_ARCHIVES,
  COOPERATION_PARTNERS,
  ESSENCE_PILLARS,
  INSTAGRAM_POSTS,
  MINISTRIES,
  NOVEMBER_AGENDA,
  NOVEMBER_PRAYER_IDS,
  WEEKLY_SCHEDULE,
} from '../data/churchConfig';
import type { SiteTranslations } from '../i18n/translations';

export type SearchCategory =
  | 'all'
  | 'bulletin'
  | 'schedule'
  | 'essence'
  | 'ministries'
  | 'community'
  | 'visit';

export interface SearchableItem {
  id: string;
  category: Exclude<SearchCategory, 'all'>;
  sectionLabel: string;
  subLabel?: string;
  title: string;
  snippet: string;
  keywords: string;
  targetHref: string;
  bulletinTab?: BulletinTabId;
  aboutTab?: AboutTabId;
  communityTab?: CommunityTabId;
  ministryId?: string;
}

export interface SearchResult extends SearchableItem {
  score: number;
}

export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function buildSiteSearchIndex(t: SiteTranslations): SearchableItem[] {
  const items: SearchableItem[] = [];

  // 1. Horários & Programação Semanal
  WEEKLY_SCHEDULE.forEach((item) => {
    const localized = t.schedule.items[item.id];
    items.push({
      id: `schedule-${item.id}`,
      category: 'schedule',
      sectionLabel: t.search.categories.schedule,
      subLabel: `${localized.day} · ${localized.times.join(' / ')}`,
      title: localized.title,
      snippet: `${localized.location} — ${localized.description}`,
      keywords: `${localized.day} ${localized.times.join(' ')} ${localized.location} ${CHURCH_INFO.worshipVenueName} 16:00 17:15 19:00`,
      targetHref: '#horarios',
    });
  });

  // 2. Agenda de Novembro (Datas)
  NOVEMBER_AGENDA.forEach((item) => {
    const localized = t.bulletin.agendaItems[item.id];
    items.push({
      id: `bulletin-agenda-${item.id}`,
      category: 'bulletin',
      sectionLabel: t.search.categories.bulletin,
      subLabel: `${item.dayMonth} · ${localized.weekday}`,
      title: localized.title,
      snippet: localized.detail,
      keywords: `${item.dayMonth} ${item.isoDate} ${localized.weekday} ${t.bulletin.tabs.agenda} ${CHURCH_INFO.worshipVenueName}`,
      targetHref: '#agenda-novembro',
      bulletinTab: 'agenda',
    });
  });

  // 3. Boletim — Anúncios, Jantar de Ação de Graças, Campanha Juntos, Celeiro
  items.push({
    id: 'bulletin-venue-change',
    category: 'bulletin',
    sectionLabel: t.search.categories.bulletin,
    subLabel: t.bulletin.tabs.announcements,
    title: t.bulletin.venueAnnouncement.title,
    snippet: `${t.bulletin.venueAnnouncement.body1} ${t.bulletin.venueAnnouncement.times.join(' · ')}`,
    keywords: `${t.bulletin.venueAnnouncement.kicker} ${t.bulletin.venueAnnouncement.body2} ${CHURCH_INFO.worshipVenueName} 08/11 16h00 17h15`,
    targetHref: '#agenda-novembro',
    bulletinTab: 'anuncios',
  });

  items.push({
    id: 'bulletin-thanksgiving',
    category: 'bulletin',
    sectionLabel: t.search.categories.bulletin,
    subLabel: t.bulletin.thanksgivingDinner.dateShort,
    title: t.bulletin.thanksgivingDinner.title,
    snippet: `${t.bulletin.thanksgivingDinner.summary} ${t.bulletin.thanksgivingDinner.details
      .map((d) => `${d.label}: ${d.value}`)
      .join(' · ')}`,
    keywords: `${t.bulletin.thanksgivingDinner.description} 27/11 19h30 1,00€ 1€ ${CHURCH_INFO.worshipVenueName}`,
    targetHref: '#agenda-novembro',
    bulletinTab: 'anuncios',
  });

  items.push({
    id: 'bulletin-juntos',
    category: 'bulletin',
    sectionLabel: t.search.categories.bulletin,
    subLabel: t.bulletin.juntosCampaign.kicker,
    title: t.bulletin.juntosCampaign.title,
    snippet: `${t.bulletin.juntosCampaign.description} ${t.bulletin.juntosCampaign.tier1Items}`,
    keywords: `${t.bulletin.juntosCampaign.tier1Title} ${t.bulletin.juntosCampaign.tier2Title} ${t.bulletin.juntosCampaign.tier2Items}`,
    targetHref: '#agenda-novembro',
    bulletinTab: 'anuncios',
  });

  items.push({
    id: 'bulletin-celeiro',
    category: 'bulletin',
    sectionLabel: t.search.categories.bulletin,
    subLabel: t.bulletin.celeiro.kicker,
    title: t.bulletin.celeiro.title,
    snippet: t.bulletin.celeiro.description,
    keywords: `${t.bulletin.tabs.announcements} Cabaz Natal donativo alimentos`,
    targetHref: '#agenda-novembro',
    bulletinTab: 'anuncios',
  });

  // 4. Boletim — Motivos de Oração
  NOVEMBER_PRAYER_IDS.forEach((prayerId, index) => {
    const text = t.bulletin.prayerRequests[prayerId];
    items.push({
      id: `bulletin-prayer-${prayerId}`,
      category: 'bulletin',
      sectionLabel: t.search.categories.bulletin,
      subLabel: t.bulletin.tabs.prayer,
      title: `${t.bulletin.tabs.prayer} #${String(index + 1).padStart(2, '0')}`,
      snippet: text,
      keywords: `${t.bulletin.prayerIntro} ${text}`,
      targetHref: '#agenda-novembro',
      bulletinTab: 'oracao',
    });
  });

  // 5. Boletim — Gratidão & Aniversariantes
  items.push({
    id: 'bulletin-gratitude',
    category: 'bulletin',
    sectionLabel: t.search.categories.bulletin,
    subLabel: t.bulletin.gratitude.kicker,
    title: t.bulletin.gratitude.title,
    snippet: `${t.bulletin.gratitude.paragraphs[0]} ${t.bulletin.gratitude.verse}`,
    keywords: `${t.bulletin.gratitude.paragraphs.join(' ')} ${t.bulletin.gratitude.signature}`,
    targetHref: '#agenda-novembro',
    bulletinTab: 'gratidao',
  });

  items.push({
    id: 'bulletin-birthdays',
    category: 'bulletin',
    sectionLabel: t.search.categories.bulletin,
    subLabel: t.bulletin.birthdays.kicker,
    title: t.bulletin.birthdays.title,
    snippet: t.bulletin.birthdays.updateNote,
    keywords: `${t.bulletin.tabs.gratitude} aniversarios novembro`,
    targetHref: '#agenda-novembro',
    bulletinTab: 'gratidao',
  });

  // 6. Sobre a Igreja — História, Pilares, Em Que Cremos, Cooperação
  items.push({
    id: 'about-history',
    category: 'essence',
    sectionLabel: t.search.categories.essence,
    subLabel: t.about.tabs.history,
    title: t.about.heading,
    snippet: `${t.about.paragraph1} ${t.about.quoteFooter}`,
    keywords: `${t.about.paragraph2} ${t.about.quote} 51 anos Faial Horta ${CHURCH_INFO.pastor}`,
    targetHref: '#essencia',
    aboutTab: 'historia',
  });

  ESSENCE_PILLARS.forEach((pillar) => {
    const localized = t.about.pillars[pillar.number];
    items.push({
      id: `about-pillar-${pillar.number}`,
      category: 'essence',
      sectionLabel: t.search.categories.essence,
      subLabel: t.about.pillarsLabel,
      title: `${pillar.number} · ${localized.title}`,
      snippet: localized.description,
      keywords: `${t.about.tabs.history} ${localized.title}`,
      targetHref: '#essencia',
      aboutTab: 'historia',
    });
  });

  BELIEF_ARTICLES.forEach((article) => {
    const localized = t.about.beliefsItems[article.id];
    items.push({
      id: `about-belief-${article.id}`,
      category: 'essence',
      sectionLabel: t.search.categories.essence,
      subLabel: `${t.about.tabs.beliefs} · ${article.references}`,
      title: `${article.number} · ${localized.title}`,
      snippet: localized.summary,
      keywords: `${article.references} ${t.about.beliefsIntro}`,
      targetHref: '#essencia',
      aboutTab: 'cremos',
    });
  });

  COOPERATION_PARTNERS.forEach((partner) => {
    const localized = t.about.cooperationItems[partner.id];
    items.push({
      id: `about-cooperation-${partner.id}`,
      category: 'essence',
      sectionLabel: t.search.categories.essence,
      subLabel: `${t.about.tabs.cooperation} · ${localized.scope}`,
      title: localized.name,
      snippet: localized.description,
      keywords: `${partner.url} ${localized.scope} ${t.about.cooperationIntro}`,
      targetHref: '#essencia',
      aboutTab: 'cooperacao',
    });
  });

  // 7. Ministérios
  MINISTRIES.forEach((ministry) => {
    const localized = t.ministries.items[ministry.id];
    items.push({
      id: `ministry-${ministry.id}`,
      category: 'ministries',
      sectionLabel: t.search.categories.ministries,
      subLabel: `${localized.schedule} · ${localized.audience}`,
      title: localized.title,
      snippet: `${localized.summary} — ${localized.description}`,
      keywords: `${localized.audience} ${localized.schedule} ${ministry.id}`,
      targetHref: '#ministerios',
      ministryId: ministry.id,
    });
  });

  // 8. Comunidade — Momentos Instagram, Arquivos & Eventos, Ofertas & Missão
  INSTAGRAM_POSTS.forEach((post) => {
    const localized = t.gallery.posts[post.id];
    items.push({
      id: `community-post-${post.id}`,
      category: 'community',
      sectionLabel: t.search.categories.community,
      subLabel: `${localized.category} · ${localized.dateLabel}`,
      title: localized.alt,
      snippet: localized.caption,
      keywords: `${localized.scripture ?? ''} @iebhorta instagram`,
      targetHref: '#comunidade',
      communityTab: 'fotos',
    });
  });

  COMMUNITY_ARCHIVES.forEach((archive) => {
    const localized = t.gallery.archivesItems[archive.id];
    items.push({
      id: `community-archive-${archive.id}`,
      category: 'community',
      sectionLabel: t.search.categories.community,
      subLabel: `${localized.category} · ${localized.dateLabel}`,
      title: localized.title,
      snippet: localized.summary,
      keywords: `${t.gallery.tabs.archives} youtube sermoes`,
      targetHref: '#comunidade',
      communityTab: 'arquivos',
    });
  });

  items.push({
    id: 'community-giving',
    category: 'community',
    sectionLabel: t.search.categories.community,
    subLabel: t.gallery.giving.kicker,
    title: t.gallery.giving.heading,
    snippet: `${t.gallery.giving.paragraph1} ${t.gallery.giving.pillars
      .map((p) => p.title)
      .join(' · ')}`,
    keywords: `${t.gallery.giving.paragraph2} ${t.gallery.giving.pillars
      .map((p) => `${p.title} ${p.text}`)
      .join(' ')} dizimos ofertas`,
    targetHref: '#comunidade',
    communityTab: 'ofertas',
  });

  // 9. Localização, Moradas e Contactos Pastorais
  CHURCH_LOCATIONS.forEach((loc) => {
    const localized = t.visit.locations[loc.id];
    items.push({
      id: `visit-location-${loc.id}`,
      category: 'visit',
      sectionLabel: t.search.categories.visit,
      subLabel: localized.label,
      title: localized.title,
      snippet: `${loc.address} (${localized.region}) — ${localized.note}`,
      keywords: `${loc.address} ${localized.region} maps waze ${CHURCH_INFO.worshipVenueName}`,
      targetHref: '#visita',
    });
  });

  items.push({
    id: 'visit-contact-form',
    category: 'visit',
    sectionLabel: t.search.categories.visit,
    subLabel: `${CHURCH_INFO.pastor} · ${CHURCH_INFO.pastorPhoneDisplay}`,
    title: t.visit.formTitle,
    snippet: `${t.visit.formSubtitle} · ${CHURCH_INFO.email} · ${CHURCH_INFO.pastorEmail}`,
    keywords: `${CHURCH_INFO.pastor} ${CHURCH_INFO.pastorPhoneDisplay} ${CHURCH_INFO.email} ${CHURCH_INFO.pastorEmail} whatsapp ${t.visit.visitorNotes.join(' ')}`,
    targetHref: '#visita',
  });

  return items;
}

export function searchSiteIndex(
  index: SearchableItem[],
  query: string,
  category: SearchCategory
): SearchResult[] {
  const filteredByCategory =
    category === 'all'
      ? index
      : index.filter((item) => item.category === category);

  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) {
    return filteredByCategory.slice(0, 12).map((item) => ({
      ...item,
      score: 1,
    }));
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored: SearchResult[] = [];

  for (const item of filteredByCategory) {
    const titleNorm = normalizeSearchText(item.title);
    const subNorm = normalizeSearchText(item.subLabel ?? '');
    const snippetNorm = normalizeSearchText(item.snippet);
    const keywordsNorm = normalizeSearchText(item.keywords);
    const combined = `${titleNorm} ${subNorm} ${snippetNorm} ${keywordsNorm}`;

    const matchesAllTokens = tokens.every((token) => combined.includes(token));
    if (!matchesAllTokens) continue;

    let score = 0;
    if (titleNorm === normalizedQuery) score += 100;
    if (titleNorm.includes(normalizedQuery)) score += 50;
    if (subNorm.includes(normalizedQuery)) score += 30;
    if (snippetNorm.includes(normalizedQuery)) score += 20;

    for (const token of tokens) {
      if (titleNorm.includes(token)) score += 14;
      if (subNorm.includes(token)) score += 8;
      if (snippetNorm.includes(token)) score += 5;
      if (keywordsNorm.includes(token)) score += 3;
    }

    scored.push({ ...item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored;
}
