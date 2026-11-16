import { Facebook, Instagram, Mail, MessageCircle, Youtube } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchConfig';

const FOOTER_LINKS = [
  { label: 'Horários de Cultos', href: '#horarios' },
  { label: 'Nossa Essência', href: '#essencia' },
  { label: 'Ministérios', href: '#ministerios' },
  { label: 'Comunidade @iebhorta', href: '#comunidade' },
  { label: 'Planeje sua Visita', href: '#visita' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    CHURCH_INFO.whatsappMessage
  )}`;

  return (
    <footer className="border-t border-[#DDD7CE] bg-[#EFECE5] pb-16 text-[#172226] md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Marca e Resumo Institucional */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              aria-label={CHURCH_INFO.fullName}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
            >
              <img
                src={CHURCH_INFO.logos.horizontal}
                alt={CHURCH_INFO.fullName}
                className="h-10 w-auto object-contain mix-blend-multiply"
              />
            </a>
            <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-[#46585E] sm:text-base">
              Há 51 anos na Ilha do Faial, uma comunidade cristã comprometida em
              amar a Deus, servir pessoas e anunciar o Evangelho com
              simplicidade.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p className="font-medium text-[#195963]">
                {CHURCH_INFO.address} · {CHURCH_INFO.addressRegion}
              </p>
              <p className="text-[#46585E]">{CHURCH_INFO.ebdTempAddress}</p>
              <p className="pt-1">
                <a
                  href={`mailto:${CHURCH_INFO.email}`}
                  className="inline-flex items-center gap-1.5 font-medium text-[#172226] hover:text-[#195963] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5 text-[#195963]" aria-hidden="true" />
                  <span>{CHURCH_INFO.email}</span>
                </a>
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-semibold tracking-wide text-[#172226]">
              Navegação
            </h2>
            <ul className="mt-3 space-y-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-[#46585E] transition-colors hover:text-[#195963] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Canais Oficiais */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-[#172226]">
              Acompanhe e Fale Conosco
            </h2>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={CHURCH_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <Instagram className="h-4 w-4 shrink-0 text-[#195963]" aria-hidden="true" />
                <span>Instagram @iebhorta</span>
              </a>

              <a
                href={CHURCH_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <Facebook className="h-4 w-4 shrink-0 text-[#195963]" aria-hidden="true" />
                <span>Facebook IEB Horta</span>
              </a>

              <a
                href={CHURCH_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <Youtube className="h-4 w-4 shrink-0 text-[#195963]" aria-hidden="true" />
                <span>YouTube IEB Horta</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#9C412A] hover:text-[#9C412A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C412A]"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[#9C412A]" aria-hidden="true" />
                <span>WhatsApp da Igreja</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final de Direitos */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#DDD7CE] pt-6 text-xs text-[#46585E] sm:flex-row sm:items-center sm:text-sm">
          <p>
            © {currentYear} {CHURCH_INFO.fullName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <img
              src={CHURCH_INFO.logos.circularSeal}
              alt=""
              aria-hidden="true"
              className="h-7 w-7 object-contain mix-blend-multiply opacity-85"
            />
            <span>Domingos · 10h00 Escola Bíblica · 11h15 Celebração</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
