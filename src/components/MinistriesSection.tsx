import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { MINISTRIES } from '../data/churchConfig';
import { Reveal } from './Reveal';

interface MinistriesSectionProps {
  onSelectMinistry: (ministryTitle: string) => void;
}

export function MinistriesSection({ onSelectMinistry }: MinistriesSectionProps) {
  const [openId, setOpenId] = useState<string>(MINISTRIES[0].id);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? '' : id));
  };

  return (
    <section
      id="ministerios"
      aria-labelledby="ministerios-heading"
      className="border-b border-[#DDD7CE] bg-[#FAF8F4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda */}
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-semibold tracking-wide text-[#9C412A]">
                Conecte-se
              </p>
              <h2
                id="ministerios-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#172226] [text-wrap:balance] sm:text-4xl"
              >
                Ministérios para caminhar juntos
              </h2>
              <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-[#46585E]">
                Há sempre um lugar preparado para a sua fase de vida. Toque em
                um ministério para ver os encontros, fotos reais e se conectar
                com a equipe.
              </p>
            </div>
          </Reveal>

          {/* Coluna Direita: Acordeão Interativo com Foto Real */}
          <Reveal delayMs={80} className="lg:col-span-8">
            <div className="divide-y divide-[#DDD7CE] border-y border-[#DDD7CE]">
              {MINISTRIES.map((ministry) => {
                const isOpen = openId === ministry.id;
                const panelId = `ministry-panel-${ministry.id}`;
                const triggerId = `ministry-trigger-${ministry.id}`;
                const hasFailed = failedImages[ministry.id];

                return (
                  <div key={ministry.id} className="bg-transparent">
                    <h3>
                      <button
                        id={triggerId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(ministry.id)}
                        className="flex min-h-[64px] w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#195963]"
                      >
                        <div className="flex items-baseline gap-4 pr-2">
                          <span className="font-display text-sm font-semibold tabular-nums text-[#9C412A]">
                            {ministry.number}
                          </span>
                          <div>
                            <span className="block font-display text-xl font-semibold text-[#172226] sm:text-2xl">
                              {ministry.title}
                            </span>
                            <span className="mt-1 block text-sm font-normal text-[#46585E]">
                              {ministry.summary}
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
                      className="pb-6 pl-4 sm:pl-10"
                    >
                      <div className="flex flex-col gap-5 rounded-xl border border-[#DDD7CE] bg-white p-5 sm:flex-row sm:items-center sm:p-6">
                        {!hasFailed && (
                          <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg border border-[#DDD7CE] bg-[#EFECE5] sm:aspect-[4/5] sm:w-36">
                            <img
                              src={ministry.image}
                              alt={ministry.imageAlt}
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
                              {ministry.schedule}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{ministry.audience}</span>
                          </div>

                          <p className="mt-2.5 max-w-[54ch] text-base leading-relaxed text-[#172226]/85">
                            {ministry.description}
                          </p>

                          <div className="mt-5">
                            <a
                              href="#visita"
                              onClick={() => onSelectMinistry(ministry.title)}
                              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#195963] px-4 py-2 text-sm font-semibold text-[#195963] transition-colors hover:bg-[#195963] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                            >
                              <span>Quero participar</span>
                              <ArrowRight
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
