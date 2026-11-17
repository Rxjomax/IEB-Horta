import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { MINISTRIES } from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';

interface MinistriesSectionProps {
  onSelectMinistry: (ministryId: string) => void;
  focusedMinistryId?: string;
}

export function MinistriesSection({
  onSelectMinistry,
  focusedMinistryId,
}: MinistriesSectionProps) {
  const { t } = useLanguage();
  const [activeDesktopId, setActiveDesktopId] = useState<string>(
    MINISTRIES[0].id
  );
  const [openMobileId, setOpenMobileId] = useState<string>(MINISTRIES[0].id);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!focusedMinistryId) return;
    if (MINISTRIES.some((m) => m.id === focusedMinistryId)) {
      setActiveDesktopId(focusedMinistryId);
      setOpenMobileId(focusedMinistryId);
    }
  }, [focusedMinistryId]);

  const activeMinistry =
    MINISTRIES.find((m) => m.id === activeDesktopId) ?? MINISTRIES[0];
  const activeLocalized = t.ministries.items[activeMinistry.id];
  const activeHasFailed = failedImages[activeMinistry.id];

  const toggleMobileItem = (id: string) => {
    setOpenMobileId((current) => (current === id ? '' : id));
  };

  return (
    <section
      id="ministerios"
      aria-labelledby="ministerios-heading"
      className="border-b border-[#DDD7CE] bg-[#FAF8F4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#9C412A]">
              {t.ministries.kicker}
            </p>
            <h2
              id="ministerios-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#172226] [text-wrap:balance] sm:text-4xl"
            >
              {t.ministries.heading}
            </h2>
            <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[#46585E]">
              {t.ministries.intro}
            </p>
          </div>
        </Reveal>

        {/* DESKTOP: Navegação Lateral por Abas + Cartão em Destaque (inspirado no catálogo da IEBC) */}
        <div className="mt-10 hidden grid-cols-12 items-stretch gap-8 lg:grid">
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={t.ministries.heading}
            className="col-span-5 flex flex-col divide-y divide-[#DDD7CE] overflow-hidden rounded-2xl border border-[#DDD7CE] bg-white"
          >
            {MINISTRIES.map((ministry) => {
              const selected = activeDesktopId === ministry.id;
              const localized = t.ministries.items[ministry.id];

              return (
                <button
                  key={ministry.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveDesktopId(ministry.id)}
                  className={`flex items-baseline gap-4 px-6 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#195963] ${
                    selected
                      ? 'bg-[#195963] text-white'
                      : 'bg-white text-[#172226] hover:bg-[#FAF8F4]'
                  }`}
                >
                  <span
                    className={`font-display text-sm font-semibold tabular-nums ${
                      selected ? 'text-[#E7A693]' : 'text-[#9C412A]'
                    }`}
                  >
                    {ministry.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold">
                      {localized.title}
                    </span>
                    <span
                      className={`mt-1 block text-sm ${
                        selected ? 'text-[#FAF8F4]/85' : 'text-[#46585E]'
                      }`}
                    >
                      {localized.summary}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            className="col-span-7 flex flex-col overflow-hidden rounded-2xl border border-[#DDD7CE] bg-white"
          >
            {!activeHasFailed && (
              <div className="aspect-[16/9] w-full overflow-hidden border-b border-[#DDD7CE] bg-[#EFECE5]">
                <img
                  src={activeMinistry.image}
                  alt={activeLocalized.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFailedImages((prev) => ({
                      ...prev,
                      [activeMinistry.id]: true,
                    }))
                  }
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col justify-between p-8">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#46585E]">
                  <span className="font-semibold text-[#195963]">
                    {t.ministries.scheduleLabel}: {activeLocalized.schedule}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {t.ministries.audienceLabel}: {activeLocalized.audience}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-[#172226]">
                  {activeLocalized.title}
                </h3>

                <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-[#46585E]">
                  {activeLocalized.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#DDD7CE] pt-5">
                <a
                  href="#visita"
                  onClick={() => onSelectMinistry(activeMinistry.id)}
                  className="inline-flex min-h-[48px] items-center gap-2 whitespace-nowrap rounded-xl bg-[#195963] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12434B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <span>{t.ministries.ctaJoin}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET: Acordeão Interativo com Foto Real */}
        <div className="mt-8 divide-y divide-[#DDD7CE] border-y border-[#DDD7CE] lg:hidden">
          {MINISTRIES.map((ministry) => {
            const isOpen = openMobileId === ministry.id;
            const panelId = `ministry-panel-${ministry.id}`;
            const triggerId = `ministry-trigger-${ministry.id}`;
            const hasFailed = failedImages[ministry.id];
            const localized = t.ministries.items[ministry.id];

            return (
              <div key={ministry.id} className="bg-transparent">
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleMobileItem(ministry.id)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#195963]"
                  >
                    <div className="flex items-baseline gap-4 pr-2">
                      <span className="font-display text-sm font-semibold tabular-nums text-[#9C412A]">
                        {ministry.number}
                      </span>
                      <div>
                        <span className="block font-display text-xl font-semibold text-[#172226]">
                          {localized.title}
                        </span>
                        <span className="mt-1 block text-sm font-normal text-[#46585E]">
                          {localized.summary}
                        </span>
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 border-[#195963] bg-[#195963] text-white'
                          : 'border-[#DDD7CE] bg-white text-[#195963]'
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="pb-6 pl-2 sm:pl-8"
                >
                  <div className="flex flex-col gap-5 rounded-xl border border-[#DDD7CE] bg-white p-5 sm:flex-row sm:items-center sm:p-6">
                    {!hasFailed && (
                      <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg border border-[#DDD7CE] bg-[#EFECE5] sm:aspect-[4/5] sm:w-36">
                        <img
                          src={ministry.image}
                          alt={localized.imageAlt}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedImages((prev) => ({
                              ...prev,
                              [ministry.id]: true,
                            }))
                          }
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#46585E]">
                        <span className="font-semibold text-[#195963]">
                          {localized.schedule}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{localized.audience}</span>
                      </div>

                      <p className="mt-2.5 max-w-[54ch] text-base leading-relaxed text-[#172226]/85">
                        {localized.description}
                      </p>

                      <div className="mt-5">
                        <a
                          href="#visita"
                          onClick={() => onSelectMinistry(ministry.id)}
                          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#195963] px-4 py-2 text-sm font-semibold text-[#195963] transition-colors hover:bg-[#195963] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                        >
                          <span>{t.ministries.ctaJoin}</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
