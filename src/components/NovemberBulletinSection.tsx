import {
  ArrowRight,
  Cake,
  Calendar,
  Clock,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Printer,
  Sparkles,
} from 'lucide-react';
import {
  CHURCH_INFO,
  NOVEMBER_AGENDA,
  NOVEMBER_PRAYER_IDS,
} from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';
import type { CommunityTabId } from './InstagramGallery';

export type BulletinTabId = 'agenda' | 'anuncios' | 'oracao' | 'gratidao';

interface NovemberBulletinSectionProps {
  activeTab: BulletinTabId;
  onTabChange: (tab: BulletinTabId) => void;
  onSelectCommunityTab?: (tab: CommunityTabId) => void;
}

export function NovemberBulletinSection({
  activeTab,
  onTabChange,
  onSelectCommunityTab,
}: NovemberBulletinSectionProps) {
  const { t } = useLanguage();

  const tabs: Array<{ id: BulletinTabId; label: string }> = [
    { id: 'agenda', label: t.bulletin.tabs.agenda },
    { id: 'anuncios', label: t.bulletin.tabs.announcements },
    { id: 'oracao', label: t.bulletin.tabs.prayer },
    { id: 'gratidao', label: t.bulletin.tabs.gratitude },
  ];

  const dinnerWhatsappUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.bulletin.thanksgivingDinner.whatsappMessage
  )}`;
  const prayerWhatsappUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.bulletin.prayerWhatsappMessage
  )}`;
  const birthdayWhatsappUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.bulletin.birthdays.whatsappMessage
  )}`;

  return (
    <section
      id="agenda-novembro"
      aria-labelledby="agenda-novembro-heading"
      className="border-b border-[#DDD7CE] bg-[#EFECE5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-[#9C412A]">
                {t.bulletin.kicker}
              </p>
              <h2
                id="agenda-novembro-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#172226] [text-wrap:balance] sm:text-4xl"
              >
                {t.bulletin.heading}
              </h2>
              <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-[#46585E]">
                {t.bulletin.intro}
              </p>
            </div>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 self-start whitespace-nowrap rounded-xl border border-[#DDD7CE] bg-white px-5 py-2.5 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] lg:self-auto print:hidden"
            >
              <Printer className="h-4 w-4 text-[#195963]" aria-hidden="true" />
              <span>{t.bulletin.downloadPdf}</span>
            </button>
          </div>

          {/* Barra de Abas do Boletim de Novembro */}
          <div className="pt-6">
            <div
              role="tablist"
              aria-label={t.bulletin.tabsAria}
              className="inline-flex max-w-full flex-wrap gap-1.5 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] p-1"
            >
              {tabs.map((tab) => {
                const selected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`bulletin-tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`bulletin-panel-${tab.id}`}
                    onClick={() => onTabChange(tab.id)}
                    className={`min-h-[44px] whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] sm:text-sm ${
                      selected
                        ? 'bg-[#195963] text-white'
                        : 'text-[#46585E] hover:text-[#172226]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ABA 1: AGENDA DO MÊS + ATIVIDADES SEMANAIS */}
        {activeTab === 'agenda' && (
          <div
            id="bulletin-panel-agenda"
            role="tabpanel"
            aria-labelledby="bulletin-tab-agenda"
            className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12"
          >
            {/* Lista Cronológica de Novembro */}
            <div className="overflow-hidden rounded-2xl border border-[#DDD7CE] bg-white lg:col-span-7">
              <div className="divide-y divide-[#DDD7CE]">
                {NOVEMBER_AGENDA.map((item) => {
                  const localized = t.bulletin.agendaItems[item.id];
                  return (
                    <article
                      key={item.id}
                      className={`flex flex-col gap-3 p-5 transition-colors sm:flex-row sm:items-start sm:gap-6 sm:p-6 ${
                        item.isHighlight
                          ? 'bg-[#FAF8F4]'
                          : 'bg-white hover:bg-[#FAF8F4]/60'
                      }`}
                    >
                      <div className="shrink-0 sm:w-20">
                        <time
                          dateTime={item.isoDate}
                          className={`font-display text-2xl font-semibold tabular-nums ${
                            item.isHighlight
                              ? 'text-[#9C412A]'
                              : 'text-[#195963]'
                          }`}
                        >
                          {item.dayMonth}
                        </time>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold tracking-wide text-[#46585E]">
                          {localized.weekday}
                        </p>
                        <h3 className="mt-1 font-display text-lg font-semibold text-[#172226] sm:text-xl">
                          {localized.title}
                        </h3>
                        <p className="mt-1.5 max-w-[54ch] text-base leading-relaxed text-[#46585E]">
                          {localized.detail}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Coluna Direita: Ritmo Semanal + Destaque Jantar 27/11 */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-2xl border border-[#DDD7CE] bg-white p-6 sm:p-7">
                <p className="text-xs font-semibold tracking-wide text-[#9C412A]">
                  {t.bulletin.activitiesCard.kicker}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-[#172226]">
                  {t.bulletin.activitiesCard.heading}
                </h3>

                <ul className="mt-5 divide-y divide-[#DDD7CE] border-y border-[#DDD7CE]">
                  {t.bulletin.activitiesCard.rows.map((row) => (
                    <li
                      key={`${row.day}-${row.label}`}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <div>
                        <p className="text-xs font-semibold text-[#46585E]">
                          {row.day}
                        </p>
                        <p className="text-sm font-medium text-[#172226]">
                          {row.label}
                        </p>
                      </div>
                      <span className="shrink-0 font-display text-base font-semibold tabular-nums text-[#195963]">
                        {row.time}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-[#46585E]">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#9C412A]"
                    aria-hidden="true"
                  />
                  <span>{t.bulletin.activitiesCard.venueNote}</span>
                </div>

                <a
                  href="#visita"
                  className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-[#195963] bg-white px-4 py-2.5 text-sm font-semibold text-[#195963] transition-colors hover:bg-[#195963] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <span>{t.bulletin.activitiesCard.cta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>

              <div className="rounded-2xl border border-[#195963] bg-[#12434B] p-6 text-white sm:p-7">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#E7A693]">
                  <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.bulletin.thanksgivingDinner.dateShort}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  {t.bulletin.thanksgivingDinner.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAF8F4]/90">
                  {t.bulletin.thanksgivingDinner.summary}
                </p>
                <button
                  type="button"
                  onClick={() => onTabChange('anuncios')}
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#9C412A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#803320] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{t.bulletin.thanksgivingDinner.seeDetails}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ABA 2: ANÚNCIOS, JANTAR DE AÇÃO DE GRAÇAS, CAMPANHA JUNTOS & CELEIRO */}
        {activeTab === 'anuncios' && (
          <div
            id="bulletin-panel-anuncios"
            role="tabpanel"
            aria-labelledby="bulletin-tab-anuncios"
            className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12"
          >
            {/* Coluna Esquerda: Mudança de Local + Campanha Juntos */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <article className="rounded-2xl border border-[#DDD7CE] bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wide text-[#9C412A]">
                  {t.bulletin.venueAnnouncement.kicker}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#172226] sm:text-3xl">
                  {t.bulletin.venueAnnouncement.title}
                </h3>
                <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[#46585E]">
                  {t.bulletin.venueAnnouncement.body1}
                </p>

                <ul className="mt-5 divide-y divide-[#DDD7CE] rounded-xl border border-[#DDD7CE] bg-[#FAF8F4]">
                  {t.bulletin.venueAnnouncement.times.map((timeItem) => (
                    <li
                      key={timeItem}
                      className="flex items-center gap-3 px-4 py-3.5 font-display text-base font-semibold text-[#195963] sm:text-lg"
                    >
                      <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="tabular-nums">{timeItem}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[#46585E]">
                  {t.bulletin.venueAnnouncement.body2}
                </p>

                <div className="mt-6">
                  <a
                    href="#visita"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#195963] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#12434B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                  >
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t.bulletin.venueAnnouncement.cta}</span>
                  </a>
                </div>
              </article>

              <article className="rounded-2xl border border-[#DDD7CE] bg-[#FAF8F4] p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wide text-[#9C412A]">
                  {t.bulletin.juntosCampaign.kicker}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-[#172226] sm:text-2xl">
                  {t.bulletin.juntosCampaign.title}
                </h3>
                <p className="mt-2.5 max-w-[60ch] text-base leading-relaxed text-[#46585E]">
                  {t.bulletin.juntosCampaign.description}
                </p>

                <div className="mt-5 grid grid-cols-1 divide-y divide-[#DDD7CE] overflow-hidden rounded-xl border border-[#DDD7CE] bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="p-4 sm:p-5">
                    <p className="text-xs font-semibold text-[#195963]">
                      {t.bulletin.juntosCampaign.tier1Title}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-[#172226]">
                      {t.bulletin.juntosCampaign.tier1Items}
                    </p>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-xs font-semibold text-[#46585E]">
                      {t.bulletin.juntosCampaign.tier2Title}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-[#172226]">
                      {t.bulletin.juntosCampaign.tier2Items}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Coluna Direita: Jantar de Ação de Graças + Celeiro Cabaz de Natal */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <article className="rounded-2xl border border-[#DDD7CE] bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wide text-[#9C412A]">
                  {t.bulletin.thanksgivingDinner.dateShort}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-semibold text-[#172226]">
                  {t.bulletin.thanksgivingDinner.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#46585E]">
                  {t.bulletin.thanksgivingDinner.description}
                </p>

                <dl className="mt-5 divide-y divide-[#DDD7CE] border-y border-[#DDD7CE]">
                  {t.bulletin.thanksgivingDinner.details.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <dt className="text-xs font-semibold text-[#46585E]">
                        {row.label}
                      </dt>
                      <dd className="text-sm font-semibold text-[#172226] sm:text-right">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={dinnerWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#9C412A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#803320] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C412A] focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.bulletin.thanksgivingDinner.cta}</span>
                </a>
              </article>

              <article className="rounded-2xl border border-[#DDD7CE] bg-[#FAF8F4] p-6 sm:p-7">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#9C412A]">
                  <HeartHandshake
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t.bulletin.celeiro.kicker}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#172226]">
                  {t.bulletin.celeiro.title}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-[#46585E]">
                  {t.bulletin.celeiro.description}
                </p>

                <a
                  href="#comunidade"
                  onClick={() => onSelectCommunityTab?.('ofertas')}
                  className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#195963] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <span>{t.bulletin.celeiro.cta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </article>
            </div>
          </div>
        )}

        {/* ABA 3: MOTIVOS DE ORAÇÃO (11 PEDIDOS REAIS DO BOLETIM) */}
        {activeTab === 'oracao' && (
          <div
            id="bulletin-panel-oracao"
            role="tabpanel"
            aria-labelledby="bulletin-tab-oracao"
            className="mt-8"
          >
            <div className="rounded-2xl border border-[#DDD7CE] bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 border-b border-[#DDD7CE] pb-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[64ch] text-base leading-relaxed text-[#46585E]">
                  {t.bulletin.prayerIntro}
                </p>
                <a
                  href={prayerWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#195963] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12434B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.bulletin.prayerCta}</span>
                </a>
              </div>

              <ol className="mt-6 grid grid-cols-1 divide-y divide-[#DDD7CE] md:grid-cols-2 md:gap-x-10">
                {NOVEMBER_PRAYER_IDS.map((id, idx) => (
                  <li key={id} className="flex items-start gap-4 py-4">
                    <span className="mt-0.5 shrink-0 font-display text-sm font-semibold tabular-nums text-[#9C412A]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-base leading-relaxed text-[#172226]">
                      {t.bulletin.prayerRequests[id]}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* ABA 4: MOMENTO DE GRATIDÃO & ANIVERSARIANTES DE NOVEMBRO */}
        {activeTab === 'gratidao' && (
          <div
            id="bulletin-panel-gratidao"
            role="tabpanel"
            aria-labelledby="bulletin-tab-gratidao"
            className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12"
          >
            {/* Testemunho Miqueias, Lorena e Eva */}
            <article className="rounded-2xl border border-[#DDD7CE] bg-white p-6 sm:p-8 lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#9C412A]">
                <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.bulletin.gratitude.kicker}</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#172226] sm:text-3xl">
                {t.bulletin.gratitude.title}
              </h3>

              <div className="mt-5 space-y-4">
                {t.bulletin.gratitude.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-[64ch] text-base leading-relaxed text-[#46585E]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-7 border-t border-[#DDD7CE] pt-6">
                <p className="font-display text-base font-semibold text-[#195963]">
                  {t.bulletin.gratitude.signature}
                </p>
                <blockquote className="mt-3 max-w-[62ch] font-display text-lg font-medium leading-snug text-[#172226]">
                  {t.bulletin.gratitude.verse}
                </blockquote>
              </div>
            </article>

            {/* Aniversariantes do Mês */}
            <aside className="flex flex-col justify-between rounded-2xl border border-[#DDD7CE] bg-white p-6 sm:p-7 lg:col-span-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#9C412A]">
                  <Cake className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.bulletin.birthdays.kicker}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-[#172226]">
                  {t.bulletin.birthdays.title}
                </h3>

                <div className="mt-5 divide-y divide-[#DDD7CE] border-y border-[#DDD7CE]">
                  <div className="flex items-baseline justify-between gap-4 py-4">
                    <span className="font-display text-lg font-semibold text-[#172226]">
                      Cristiane Lima
                    </span>
                    <span className="shrink-0 font-display text-lg font-semibold tabular-nums text-[#195963]">
                      09/11
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#46585E]">
                  {t.bulletin.birthdays.updateNote}
                </p>
              </div>

              <a
                href={birthdayWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#195963] bg-[#FAF8F4] px-5 py-3 text-sm font-semibold text-[#195963] transition-colors hover:bg-[#195963] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.bulletin.birthdays.cta}</span>
              </a>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
