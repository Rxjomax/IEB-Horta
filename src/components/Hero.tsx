import { useState } from 'react';
import {
  ArrowRight,
  CalendarPlus,
  Check,
  Instagram,
  MapPin,
} from 'lucide-react';
import { CHURCH_INFO } from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import {
  downloadSundayWorshipIcs,
  getNextSundayInfo,
} from '../utils/calendar';

export function Hero() {
  const { languageOption, t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);
  const [calendarSaved, setCalendarSaved] = useState(false);
  const nextSunday = getNextSundayInfo(languageOption.intlLocale);

  const handleCalendarDownload = () => {
    downloadSundayWorshipIcs(t.calendarIcs);
    setCalendarSaved(true);
    window.setTimeout(() => setCalendarSaved(false), 3000);
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#12434B] text-white"
    >
      {/* Imagem de fundo com fallback elegante na paleta Petrol Teal da igreja */}
      <div className="absolute inset-0">
        {!imgFailed ? (
          <img
            src={CHURCH_INFO.images.hero}
            alt={t.hero.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full bg-gradient-to-br from-[#0E353C] via-[#195963] to-[#285984]"
          />
        )}
        {/* Overlay Petrol Teal (@iebhorta) garantindo leitura confortável >4.5:1 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B2A30]/94 via-[#12424B]/80 to-[#195963]/58 sm:bg-gradient-to-r sm:from-[#0B2A30]/94 sm:via-[#12424B]/82 sm:to-[#195963]/48"
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-between px-4 pb-8 pt-10 sm:min-h-[620px] sm:px-6 sm:pb-10 sm:pt-14 lg:min-h-[680px] lg:px-8 lg:pt-18">
        <div className="my-auto grid grid-cols-1 items-end gap-8 py-4 lg:grid-cols-12 lg:gap-10">
          {/* Bloco Editorial Principal */}
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-sm font-medium tracking-wide text-[#FAF8F4]/90">
              {CHURCH_INFO.fullName}
              <span aria-hidden="true" className="mx-2 text-[#E07A5F]">
                ·
              </span>
              <span>{t.hero.kickerYears}</span>
            </p>

            <h1
              className="mt-4 font-display font-semibold tracking-tight text-white [text-wrap:balance]"
              style={{
                fontSize: 'clamp(2.25rem, 4.8vw, 3.75rem)',
                lineHeight: 1.07,
              }}
            >
              {t.hero.headline}
            </h1>

            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-[#FAF8F4]/95 sm:text-lg">
              {t.hero.subheadline}
            </p>

            {/* CTAs empilhados no telemóvel, lado a lado no computador (mínimo 48px altura) */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#visita"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#9C412A] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#803320] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#195963] sm:w-auto"
              >
                <span>{t.hero.ctaVisit}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={CHURCH_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/55 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#195963] sm:w-auto"
              >
                <Instagram className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{t.hero.ctaInstagram}</span>
              </a>
            </div>
          </div>

          {/* Cartão Editorial do Próximo Culto Dominical */}
          <aside
            aria-label={t.hero.nextSundayAria}
            className="rounded-2xl border border-white/20 bg-[#0D3238]/88 p-5 sm:p-6 lg:col-span-5 xl:col-span-4"
          >
            <p className="text-xs font-semibold tracking-wide text-[#E7A693]">
              {nextSunday.isToday
                ? t.hero.thisSundayToday
                : t.hero.nextSundayLabel}
              <span aria-hidden="true" className="mx-1.5 text-white/40">
                ·
              </span>
              <span>{nextSunday.formattedDate}</span>
            </p>

            <div className="mt-4 divide-y divide-white/15 border-y border-white/15">
              <div className="flex items-baseline justify-between gap-4 py-3">
                <span className="text-sm text-[#FAF8F4]/90">
                  {t.hero.ebdTitle}
                </span>
                <span className="font-display text-lg font-semibold tabular-nums text-white">
                  {nextSunday.ebdTime}
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <span className="text-sm text-[#FAF8F4]/90">
                  {t.hero.celebrationTitle}
                </span>
                <span className="font-display text-lg font-semibold tabular-nums text-white">
                  {nextSunday.celebrationTime}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-[#FAF8F4]/85">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-[#E7A693]"
                aria-hidden="true"
              />
              <span>
                {CHURCH_INFO.address} · {t.hero.doorsOpenNote}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCalendarDownload}
              className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {calendarSaved ? (
                <>
                  <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.hero.calendarSaved}</span>
                </>
              ) : (
                <>
                  <CalendarPlus
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{t.hero.calendarSave}</span>
                </>
              )}
            </button>
          </aside>
        </div>

        {/* Faixa Operacional Discreta */}
        <div className="mt-6 border-t border-white/20 pt-5">
          <div className="flex flex-col gap-2 text-sm text-[#FAF8F4]/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            <p className="font-medium text-white">{CHURCH_INFO.address}</p>
            <span aria-hidden="true" className="hidden text-white/40 sm:inline">
              /
            </span>
            <p>
              {t.hero.ebdStripTextBefore}{' '}
              <span className="font-semibold tabular-nums text-white">
                {languageOption.intlLocale.startsWith('pt') ||
                languageOption.intlLocale.startsWith('fr')
                  ? '16h00'
                  : '16:00'}
              </span>{' '}
              {t.hero.ebdStripTextAfter}
            </p>
            <span aria-hidden="true" className="hidden text-white/40 sm:inline">
              /
            </span>
            <p>
              {t.hero.pastorLabel} {CHURCH_INFO.pastor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
