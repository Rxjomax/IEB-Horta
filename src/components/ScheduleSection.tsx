import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CalendarPlus,
  Check,
  Home,
  Smile,
  Sun,
  Youtube,
} from 'lucide-react';
import {
  CHURCH_INFO,
  WEEKLY_SCHEDULE,
  type ScheduleItem,
} from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { downloadSundayWorshipIcs } from '../utils/calendar';
import { Reveal } from './Reveal';

type ScheduleFilter = 'todos' | 'domingo' | 'semana';

function renderScheduleIcon(icon: ScheduleItem['icon']) {
  const iconClass = 'h-5 w-5 text-[#143A61]';
  switch (icon) {
    case 'sun':
      return <Sun className={iconClass} aria-hidden="true" />;
    case 'book':
      return <BookOpen className={iconClass} aria-hidden="true" />;
    case 'home':
      return <Home className={iconClass} aria-hidden="true" />;
    case 'smile':
      return <Smile className={iconClass} aria-hidden="true" />;
  }
}

export function ScheduleSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ScheduleFilter>('todos');
  const [calendarSaved, setCalendarSaved] = useState(false);

  const visibleItems = WEEKLY_SCHEDULE.filter((item) =>
    filter === 'todos' ? true : item.category === filter
  );

  const handleSaveCalendar = () => {
    downloadSundayWorshipIcs(t.calendarIcs);
    setCalendarSaved(true);
    window.setTimeout(() => setCalendarSaved(false), 3000);
  };

  return (
    <section
      id="horarios"
      aria-labelledby="horarios-heading"
      className="border-b border-[#D6DEE6] bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda: Contexto, Filtros e Ações */}
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-semibold tracking-wide text-[#8F5B18]">
                {t.schedule.kicker}
              </p>
              <h2
                id="horarios-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0F1E2E] [text-wrap:balance] sm:text-4xl"
              >
                {t.schedule.heading}
              </h2>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-[#47596B]">
                {t.schedule.intro}
              </p>

              {/* Filtro interativo por momento */}
              <div
                role="group"
                aria-label={t.schedule.filterAria}
                className="mt-6 inline-flex flex-wrap gap-1.5 rounded-xl border border-[#D6DEE6] bg-[#EEF2F6] p-1"
              >
                {[
                  { id: 'todos' as const, label: t.schedule.filters.all },
                  { id: 'domingo' as const, label: t.schedule.filters.sunday },
                  { id: 'semana' as const, label: t.schedule.filters.week },
                ].map((tab) => {
                  const active = filter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setFilter(tab.id)}
                      aria-pressed={active}
                      className={`min-h-[44px] whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                        active
                          ? 'bg-white text-[#143A61] shadow-xs'
                          : 'text-[#47596B] hover:text-[#0F1E2E]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#D6DEE6] pt-6">
                <button
                  type="button"
                  onClick={handleSaveCalendar}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#143A61] bg-white px-4 py-2.5 text-sm font-semibold text-[#143A61] transition-colors hover:bg-[#143A61] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A61]"
                >
                  {calendarSaved ? (
                    <>
                      <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{t.schedule.calendarSaved}</span>
                    </>
                  ) : (
                    <>
                      <CalendarPlus
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{t.schedule.calendarSave}</span>
                    </>
                  )}
                </button>

                <a
                  href={CHURCH_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#D6DEE6] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F1E2E] transition-colors hover:border-[#143A61] hover:text-[#143A61] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A61]"
                >
                  <Youtube
                    className="h-4 w-4 shrink-0 text-[#8F5B18]"
                    aria-hidden="true"
                  />
                  <span>{t.schedule.watchYouTube}</span>
                </a>
              </div>

              <div className="mt-4">
                <a
                  href="#visita"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#8F5B18] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F5B18]"
                >
                  <span>{t.schedule.confirmVisit}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Coluna Direita: Lista Editorial Estruturada */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#D6DEE6] overflow-hidden rounded-2xl border border-[#D6DEE6] bg-white">
              {visibleItems.map((item) => {
                const localized = t.schedule.items[item.id];
                return (
                  <article
                    key={item.id}
                    className="flex flex-col gap-4 p-5 transition-colors hover:bg-[#F8FAFC]/60 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D6DEE6] bg-[#F8FAFC]">
                        {renderScheduleIcon(item.icon)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#47596B]">
                          <span>{localized.day}</span>
                          <span aria-hidden="true">·</span>
                          <span>{localized.location}</span>
                        </div>
                        <h3 className="mt-1 font-display text-lg font-semibold text-[#0F1E2E] sm:text-xl">
                          {localized.title}
                        </h3>
                        <p className="mt-1.5 max-w-[54ch] text-base leading-relaxed text-[#47596B]">
                          {localized.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 pl-15 sm:flex-col sm:items-end sm:gap-1 sm:pl-0">
                      {localized.times.map((time) => (
                        <span
                          key={time}
                          className="font-display text-lg font-semibold tabular-nums text-[#143A61] sm:text-xl"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
