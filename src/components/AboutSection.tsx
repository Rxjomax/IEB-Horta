import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  BELIEF_ARTICLES,
  CHURCH_INFO,
  COOPERATION_PARTNERS,
  ESSENCE_PILLARS,
} from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';

export type AboutTabId = 'historia' | 'cremos' | 'cooperacao';

interface AboutSectionProps {
  activeTab: AboutTabId;
  onTabChange: (tab: AboutTabId) => void;
}

export function AboutSection({ activeTab, onTabChange }: AboutSectionProps) {
  const { t } = useLanguage();
  const [familyImgFailed, setFamilyImgFailed] = useState(false);
  const [sanctuaryImgFailed, setSanctuaryImgFailed] = useState(false);

  const tabs: Array<{ id: AboutTabId; label: string }> = [
    { id: 'historia', label: t.about.tabs.history },
    { id: 'cremos', label: t.about.tabs.beliefs },
    { id: 'cooperacao', label: t.about.tabs.cooperation },
  ];

  return (
    <section
      id="essencia"
      aria-labelledby="essencia-heading"
      className="border-b border-[#D6DEE6] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Secção + Abas Inspiradas em Sobre (A Igreja / Cremos / Cooperação) */}
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-[#D6DEE6] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-start gap-4">
              <img
                src={CHURCH_INFO.logos.circularSeal}
                alt={t.about.sealAlt}
                className="hidden h-16 w-16 shrink-0 object-contain mix-blend-multiply sm:block"
              />
              <div>
                <p className="text-sm font-semibold tracking-wide text-[#8F5B18]">
                  {t.about.kicker}
                </p>
                <h2
                  id="essencia-heading"
                  className="mt-1.5 max-w-[24ch] font-display text-3xl font-semibold tracking-tight text-[#0F1E2E] [text-wrap:balance] sm:text-4xl"
                >
                  {t.about.heading}
                </h2>
              </div>
            </div>

            {/* Seletor por Abas Segmentadas */}
            <div
              role="tablist"
              aria-label={t.about.tabsAria}
              className="inline-flex flex-wrap gap-1.5 self-start rounded-xl border border-[#D6DEE6] bg-[#EEF2F6] p-1 lg:self-auto"
            >
              {tabs.map((tab) => {
                const selected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => onTabChange(tab.id)}
                    className={`min-h-[44px] whitespace-nowrap rounded-lg px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                      selected
                        ? 'bg-white text-[#143A61] shadow-xs'
                        : 'text-[#47596B] hover:text-[#0F1E2E]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ABA 1: A IGREJA (HISTÓRIA + FOTOS REAIS + 3 PILARES) */}
        {activeTab === 'historia' && (
          <div role="tabpanel" className="pt-10">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  <figure>
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#D6DEE6] bg-[#EEF2F6]">
                      {!familyImgFailed ? (
                        <img
                          src={CHURCH_INFO.images.aboutFamily}
                          alt={t.about.familyAlt}
                          referrerPolicy="no-referrer"
                          onError={() => setFamilyImgFailed(true)}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs text-[#47596B]">
                          {t.about.familyFallback}
                        </div>
                      )}
                    </div>
                    <figcaption className="mt-2.5 text-xs leading-snug text-[#47596B] sm:text-sm">
                      {t.about.familyCaption}
                    </figcaption>
                  </figure>

                  <figure className="sm:mt-6">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#D6DEE6] bg-[#EEF2F6]">
                      {!sanctuaryImgFailed ? (
                        <img
                          src={CHURCH_INFO.images.aboutSanctuary}
                          alt={t.about.sanctuaryAlt}
                          referrerPolicy="no-referrer"
                          onError={() => setSanctuaryImgFailed(true)}
                          className="h-full w-full object-cover object-center"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs text-[#47596B]">
                          {t.about.sanctuaryFallback}
                        </div>
                      )}
                    </div>
                    <figcaption className="mt-2.5 text-xs leading-snug text-[#47596B] sm:text-sm">
                      {t.about.sanctuaryCaption}
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="space-y-4 text-base leading-relaxed text-[#47596B]">
                  <p className="max-w-[60ch]">{t.about.paragraph1}</p>
                  <p className="max-w-[60ch]">{t.about.paragraph2}</p>
                </div>

                {/* Citação Editorial dos 51 Anos */}
                <blockquote className="mt-6 border-y border-[#D6DEE6] py-5">
                  <p className="font-display text-lg font-medium italic leading-relaxed text-[#0F1E2E] sm:text-xl">
                    {t.about.quote}
                  </p>
                  <footer className="mt-2 text-xs font-semibold tracking-wide text-[#47596B]">
                    {t.about.quoteFooter}
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* 3 Pilares: Carrossel Horizontal Touch no Mobile / Grid 3 colunas no Desktop */}
            <div className="mt-14 lg:mt-16">
              <div className="mb-4 flex items-center justify-between md:hidden">
                <span className="text-xs font-semibold tracking-wide text-[#47596B]">
                  {t.about.pillarsLabel}
                </span>
                <span className="text-xs text-[#47596B]">
                  {t.about.swipeHint}
                </span>
              </div>

              <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
                {ESSENCE_PILLARS.map((pillar) => {
                  const localized = t.about.pillars[pillar.number];
                  return (
                    <div
                      key={pillar.number}
                      className="w-[82vw] max-w-[320px] shrink-0 snap-start border-t border-[#143A61]/30 pt-5 md:w-auto md:max-w-none"
                    >
                      <span className="font-display text-sm font-semibold tabular-nums text-[#8F5B18]">
                        {pillar.number}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-[#0F1E2E]">
                        {localized.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-[#47596B]">
                        {localized.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ABA 2: EM QUE CREMOS (DECLARAÇÃO DE FÉ BAPTISTA) */}
        {activeTab === 'cremos' && (
          <div role="tabpanel" className="pt-10">
            <p className="max-w-[68ch] text-base leading-relaxed text-[#47596B] sm:text-lg">
              {t.about.beliefsIntro}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
              {BELIEF_ARTICLES.map((article) => {
                const localized = t.about.beliefsItems[article.id];
                return (
                  <article
                    key={article.id}
                    className="flex flex-col justify-between border-t border-[#D6DEE6] pt-5"
                  >
                    <div>
                      <span className="font-display text-sm font-semibold tabular-nums text-[#8F5B18]">
                        {article.number}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-[#0F1E2E]">
                        {localized.title}
                      </h3>
                      <p className="mt-2.5 text-base leading-relaxed text-[#47596B]">
                        {localized.summary}
                      </p>
                    </div>
                    <p className="mt-4 text-xs font-medium text-[#143A61]">
                      {article.references}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ABA 3: COOPERAÇÃO BAPTISTA E EVANGÉLICA */}
        {activeTab === 'cooperacao' && (
          <div role="tabpanel" className="pt-10">
            <p className="max-w-[68ch] text-base leading-relaxed text-[#47596B] sm:text-lg">
              {t.about.cooperationIntro}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {COOPERATION_PARTNERS.map((partner) => {
                const localized = t.about.cooperationItems[partner.id];
                return (
                  <article
                    key={partner.id}
                    className="flex flex-col justify-between rounded-2xl border border-[#D6DEE6] bg-[#F8FAFC] p-6 transition-colors hover:border-[#143A61]/50"
                  >
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-[#8F5B18]">
                        {localized.scope}
                      </p>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-[#0F1E2E]">
                        {localized.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#47596B]">
                        {localized.description}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-[#D6DEE6] pt-3.5">
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold text-[#143A61] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A61]"
                      >
                        <span>{t.about.cooperationVisitLink}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
