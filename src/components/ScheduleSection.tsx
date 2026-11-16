import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CalendarPlus,
  Check,
  Home,
  Smile,
  Sun,
} from 'lucide-react';
import { WEEKLY_SCHEDULE, type ScheduleItem } from '../data/churchConfig';
import { downloadSundayWorshipIcs } from '../utils/calendar';
import { Reveal } from './Reveal';

type ScheduleFilter = 'todos' | 'domingo' | 'semana';

function renderScheduleIcon(icon: ScheduleItem['icon']) {
  const iconClass = 'h-5 w-5 text-[#195963]';
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
  const [filter, setFilter] = useState<ScheduleFilter>('todos');
  const [calendarSaved, setCalendarSaved] = useState(false);

  const visibleItems = WEEKLY_SCHEDULE.filter((item) =>
    filter === 'todos' ? true : item.category === filter
  );

  const handleSaveCalendar = () => {
    downloadSundayWorshipIcs();
    setCalendarSaved(true);
    window.setTimeout(() => setCalendarSaved(false), 3000);
  };

  return (
    <section
      id="horarios"
      aria-labelledby="horarios-heading"
      className="border-b border-[#DDD7CE] bg-[#FAF8F4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda: Contexto, Filtros e Calendário */}
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-semibold tracking-wide text-[#9C412A]">
                Programação Semanal
              </p>
              <h2
                id="horarios-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#172226] [text-wrap:balance] sm:text-4xl"
              >
                Horários para nos reunirmos em família
              </h2>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-[#46585E]">
                Aos domingos reunimo-nos para estudar as Escrituras na Escola
                Bíblica Dominical e celebrar juntos no culto da manhã. Caso seja
                a sua primeira visita, será muito bem-vindo.
              </p>

              {/* Filtro interativo por momento */}
              <div
                role="group"
                aria-label="Filtrar programação"
                className="mt-6 inline-flex flex-wrap gap-1.5 rounded-xl border border-[#DDD7CE] bg-[#EFECE5] p-1"
              >
                {[
                  { id: 'todos' as const, label: 'Toda a agenda' },
                  { id: 'domingo' as const, label: 'Domingos' },
                  { id: 'semana' as const, label: 'Semana & Famílias' },
                ].map((tab) => {
                  const active = filter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setFilter(tab.id)}
                      aria-pressed={active}
                      className={`min-h-[40px] whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                        active
                          ? 'bg-white text-[#195963] shadow-xs'
                          : 'text-[#46585E] hover:text-[#172226]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-col gap-3 border-t border-[#DDD7CE] pt-6 sm:flex-row sm:items-center sm:gap-5">
                <button
                  type="button"
                  onClick={handleSaveCalendar}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#195963] bg-white px-4 py-2.5 text-sm font-semibold text-[#195963] transition-colors hover:bg-[#195963] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  {calendarSaved ? (
                    <>
                      <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Evento guardado (.ics)</span>
                    </>
                  ) : (
                    <>
                      <CalendarPlus
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span>Guardar culto no calendário</span>
                    </>
                  )}
                </button>

                <a
                  href="#visita"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#9C412A] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C412A]"
                >
                  <span>Confirmar visita</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Coluna Direita: Lista Editorial Estruturada */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#DDD7CE] overflow-hidden rounded-2xl border border-[#DDD7CE] bg-white">
              {visibleItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 p-5 transition-colors hover:bg-[#FAF8F4]/60 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DDD7CE] bg-[#FAF8F4]">
                      {renderScheduleIcon(item.icon)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#46585E]">
                        <span>{item.day}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.location}</span>
                      </div>
                      <h3 className="mt-1 font-display text-lg font-semibold text-[#172226] sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 max-w-[54ch] text-base leading-relaxed text-[#46585E]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 pl-15 sm:flex-col sm:items-end sm:gap-1 sm:pl-0">
                    {item.times.map((time) => (
                      <span
                        key={time}
                        className="font-display text-lg font-semibold tabular-nums text-[#195963] sm:text-xl"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
