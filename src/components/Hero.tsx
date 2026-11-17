import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarPlus,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Youtube,
} from 'lucide-react';
import { CHURCH_INFO, HERO_SLIDES } from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import {
  downloadSundayWorshipIcs,
  getNextSundayInfo,
} from '../utils/calendar';
import type { AboutTabId } from './AboutSection';

interface HeroProps {
  onSelectAboutTab: (tab: AboutTabId) => void;
}

export function Hero({ onSelectAboutTab }: HeroProps) {
  const { languageOption, t } = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgFailedMap, setImgFailedMap] = useState<Record<string, boolean>>({});
  const [calendarSaved, setCalendarSaved] = useState(false);
  const nextSunday = getNextSundayInfo(languageOption.intlLocale);

  const activeSlide = HERO_SLIDES[slideIndex] ?? HERO_SLIDES[0];
  const slideText = t.hero.slides[activeSlide.id];
  const imgFailed = imgFailedMap[activeSlide.id];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  const handleCalendarDownload = () => {
    downloadSundayWorshipIcs(t.calendarIcs);
    setCalendarSaved(true);
    window.setTimeout(() => setCalendarSaved(false), 3000);
  };

  const handlePrevSlide = () => {
    setSlideIndex(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#12434B] text-white"
    >
      {/* Imagem de fundo com alternância entre destaques reais da igreja */}
      <div className="absolute inset-0">
        {!imgFailed ? (
          <img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={slideText.imageAlt}
            referrerPolicy="no-referrer"
            onError={() =>
              setImgFailedMap((prev) => ({
                ...prev,
                [activeSlide.id]: true,
              }))
            }
            className="h-full w-full object-cover object-center transition-opacity duration-500"
          />
        ) : (
          <div
            aria-hidden="true"
            className="h-full w-full bg-gradient-to-br from-[#0E353C] via-[#195963] to-[#285984]"
          />
        )}
        {/* Overlay Petrol Teal (@iebhorta) garantindo contraste >4.5:1 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B2A30]/95 via-[#12424B]/82 to-[#195963]/62 sm:bg-gradient-to-r sm:from-[#0B2A30]/95 sm:via-[#12424B]/84 sm:to-[#195963]/52"
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-between px-4 pb-8 pt-10 sm:min-h-[620px] sm:px-6 sm:pb-10 sm:pt-14 lg:min-h-[680px] lg:px-8 lg:pt-16">
        <div className="my-auto grid grid-cols-1 items-end gap-8 py-4 lg:grid-cols-12 lg:gap-10">
          {/* Bloco Editorial Principal com Navegação de Destaques (inspiração slider IEBC) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <p className="text-sm font-medium tracking-wide text-[#FAF8F4]/90">
              {CHURCH_INFO.fullName}
              <span aria-hidden="true" className="mx-2 text-[#E07A5F]">
                ·
              </span>
              <span>{slideText.kicker}</span>
            </p>

            <h1
              className="mt-4 max-w-[18ch] font-display font-semibold tracking-tight text-white [text-wrap:balance]"
              style={{
                fontSize: 'clamp(2.2rem, 4.6vw, 3.65rem)',
                lineHeight: 1.08,
              }}
            >
              {slideText.headline}
            </h1>

            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-[#FAF8F4]/95 sm:text-lg">
              {slideText.subheadline}
            </p>

            {/* CTAs empilhados no mobile, lado a lado no desktop */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={activeSlide.targetHref}
                onClick={() => {
                  if (activeSlide.aboutTab) {
                    onSelectAboutTab(activeSlide.aboutTab);
                  }
                }}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#9C412A] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#803320] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#195963] sm:w-auto"
              >
                <span>{slideText.ctaLabel}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={CHURCH_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/55 bg-[#0B2A30]/45 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0B2A30]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#195963] sm:w-auto"
              >
                <Youtube className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{t.hero.watchYouTube}</span>
              </a>
            </div>

            {/* Controlos Discretos do Slider Editorial */}
            <div className="mt-7 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  aria-label={t.hero.prevSlide}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 bg-[#0B2A30]/45 text-white transition-colors hover:bg-[#0B2A30]/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  aria-label={t.hero.nextSlide}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 bg-[#0B2A30]/45 text-white transition-colors hover:bg-[#0B2A30]/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="flex items-center gap-1">
                {HERO_SLIDES.map((s, idx) => {
                  const active = idx === slideIndex;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSlideIndex(idx)}
                      aria-label={`${t.hero.slideLabelPrefix} 0${idx + 1}`}
                      aria-pressed={active}
                      className="inline-flex min-h-[44px] min-w-[28px] items-center justify-center px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span
                        className={`block h-2 rounded-full transition-all ${
                          active
                            ? 'w-7 bg-[#E7A693]'
                            : 'w-2.5 bg-white/45 hover:bg-white/75'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cartão Editorial do Próximo Culto Dominical */}
          <aside
            aria-label={t.hero.nextSundayAria}
            className="rounded-2xl border border-white/20 bg-[#0D3238]/90 p-5 sm:p-6 lg:col-span-5 xl:col-span-4"
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
