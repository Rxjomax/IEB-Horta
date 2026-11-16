import { useState } from 'react';
import { CHURCH_INFO, ESSENCE_PILLARS } from '../data/churchConfig';
import { Reveal } from './Reveal';

export function AboutSection() {
  const [familyImgFailed, setFamilyImgFailed] = useState(false);
  const [sanctuaryImgFailed, setSanctuaryImgFailed] = useState(false);

  return (
    <section
      id="essencia"
      aria-labelledby="essencia-heading"
      className="border-b border-[#DDD7CE] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Bloco Assimétrico: Duas Fotografias Reais do @iebhorta + Nossa História */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <figure>
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#DDD7CE] bg-[#EFECE5]">
                  {!familyImgFailed ? (
                    <img
                      src={CHURCH_INFO.images.aboutFamily}
                      alt="Membros e crianças da Igreja Evangélica Baptista da Horta reunidos juntos"
                      referrerPolicy="no-referrer"
                      onError={() => setFamilyImgFailed(true)}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs text-[#46585E]">
                      Família IEB Horta
                    </div>
                  )}
                </div>
                <figcaption className="mt-2.5 text-xs leading-snug text-[#46585E] sm:text-sm">
                  A nossa família reunida na Horta.
                </figcaption>
              </figure>

              <figure className="sm:mt-6">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#DDD7CE] bg-[#EFECE5]">
                  {!sanctuaryImgFailed ? (
                    <img
                      src={CHURCH_INFO.images.aboutSanctuary}
                      alt="Interior do templo da IEB Horta na Avenida Marginal com bancos de madeira e cruz"
                      referrerPolicy="no-referrer"
                      onError={() => setSanctuaryImgFailed(true)}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs text-[#46585E]">
                      Templo Av. Marginal, 17
                    </div>
                  )}
                </div>
                <figcaption className="mt-2.5 text-xs leading-snug text-[#46585E] sm:text-sm">
                  Culto no templo · Av. Marginal, 17.
                </figcaption>
              </figure>
            </div>
          </Reveal>

          <Reveal delayMs={80} className="lg:col-span-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold tracking-wide text-[#9C412A]">
                  A Nossa Essência
                </p>
                <h2
                  id="essencia-heading"
                  className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#172226] [text-wrap:balance] sm:text-4xl"
                >
                  Amar a Deus, servir pessoas e viver o Evangelho na ilha.
                </h2>
              </div>
              {/* Selo circular oficial da igreja */}
              <img
                src={CHURCH_INFO.logos.circularSeal}
                alt={`Selo oficial ${CHURCH_INFO.fullName}`}
                className="hidden h-20 w-20 shrink-0 object-contain mix-blend-multiply sm:block"
              />
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#46585E]">
              <p className="max-w-[60ch]">
                Há 51 anos na Ilha do Faial, a {CHURCH_INFO.fullName}, filiada à
                Convenção Baptista Portuguesa, caminha como uma família espiritual
                onde cada pessoa é acolhida pelo nome e encorajada a crescer na
                fé em Jesus Cristo.
              </p>
              <p className="max-w-[60ch]">
                Cremos que a fé cristã se expressa tanto na reverência da
                adoração dominical como no cuidado prático durante a semana —
                a apoiar famílias, a formar discípulos e a servir a nossa
                comunidade com generosidade.
              </p>
            </div>

            {/* Citação Editorial dos 51 Anos (divisórias 1px, sem barra lateral) */}
            <blockquote className="mt-6 border-y border-[#DDD7CE] py-4">
              <p className="font-display text-base font-medium leading-relaxed text-[#172226] sm:text-lg">
                “Mas Deus prova o seu amor para connosco, em que Cristo morreu
                por nós, sendo nós ainda pecadores.”
              </p>
              <footer className="mt-1.5 text-xs font-medium tracking-wide text-[#46585E]">
                Romanos 5:8 · Lema dos 51 Anos · {CHURCH_INFO.pastor}
              </footer>
            </blockquote>
          </Reveal>
        </div>

        {/* 3 Pilares: Carrossel Horizontal Touch no Mobile / Grid 3 colunas no Desktop */}
        <Reveal delayMs={120} className="mt-14 lg:mt-16">
          <div className="mb-4 flex items-center justify-between md:hidden">
            <span className="text-xs font-semibold tracking-wide text-[#46585E]">
              Os Nossos Pilares
            </span>
            <span className="text-xs text-[#46585E]">
              Deslize para o lado →
            </span>
          </div>

          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
            {ESSENCE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="w-[82vw] max-w-[320px] shrink-0 snap-start border-t border-[#195963]/30 pt-5 md:w-auto md:max-w-none"
              >
                <span className="font-display text-sm font-semibold tabular-nums text-[#9C412A]">
                  {pillar.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#172226]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#46585E]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
