import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Youtube,
} from 'lucide-react';
import { CHURCH_INFO, COOPERATION_PARTNERS } from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import type { AboutTabId } from './AboutSection';
import type { CommunityTabId } from './InstagramGallery';
import type { BulletinTabId } from './NovemberBulletinSection';

interface FooterProps {
  onSelectBulletinTab: (tab: BulletinTabId) => void;
  onSelectAboutTab: (tab: AboutTabId) => void;
  onSelectCommunityTab: (tab: CommunityTabId) => void;
}

export function Footer({
  onSelectBulletinTab,
  onSelectAboutTab,
  onSelectCommunityTab,
}: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.hero.whatsappMessage
  )}`;

  const footerLinks: Array<{
    label: string;
    href: string;
    onClick?: () => void;
  }> = [
    { label: t.nav.links.schedule, href: '#horarios' },
    {
      label: t.nav.links.novemberAgenda,
      href: '#agenda-novembro',
      onClick: () => onSelectBulletinTab('agenda'),
    },
    {
      label: t.nav.subLinks.churchHistory,
      href: '#essencia',
      onClick: () => onSelectAboutTab('historia'),
    },
    {
      label: t.nav.subLinks.whatWeBelieve,
      href: '#essencia',
      onClick: () => onSelectAboutTab('cremos'),
    },
    { label: t.nav.links.ministries, href: '#ministerios' },
    {
      label: t.nav.subLinks.archivesEvents,
      href: '#comunidade',
      onClick: () => onSelectCommunityTab('arquivos'),
    },
    {
      label: t.nav.subLinks.offeringsMission,
      href: '#comunidade',
      onClick: () => onSelectCommunityTab('ofertas'),
    },
    { label: t.hero.ctaVisit, href: '#visita' },
  ];

  return (
    <footer className="border-t border-[#DDD7CE] bg-[#EFECE5] pb-16 text-[#172226] md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Coluna 1: Marca e Moradas */}
          <div className="md:col-span-4">
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
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-[#46585E]">
              {t.footer.summary}
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              <p className="font-medium text-[#195963]">
                {t.visit.locations.ebd.label}: {CHURCH_INFO.worshipVenueName}
              </p>
              <p className="text-[#46585E]">
                {t.visit.locations.templo.label}: {CHURCH_INFO.address} ·{' '}
                {t.visit.locations.templo.region}
              </p>
              <p className="pt-1">
                <a
                  href={`tel:+${CHURCH_INFO.whatsappNumber}`}
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-medium tabular-nums text-[#172226] hover:text-[#195963] hover:underline"
                >
                  <Phone className="h-3.5 w-3.5 text-[#195963]" aria-hidden="true" />
                  <span>
                    {CHURCH_INFO.pastor} · {CHURCH_INFO.pastorPhoneDisplay}
                  </span>
                </a>
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a
                  href={`mailto:${CHURCH_INFO.email}`}
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-[#172226] hover:text-[#195963] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5 text-[#195963]" aria-hidden="true" />
                  <span>{CHURCH_INFO.email}</span>
                </a>
                <a
                  href={`mailto:${CHURCH_INFO.pastorEmail}`}
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-[#46585E] hover:text-[#195963] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5 text-[#195963]" aria-hidden="true" />
                  <span>{CHURCH_INFO.pastorEmail}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação & Abas */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-[#172226]">
              {t.footer.navigationTitle}
            </h2>
            <ul className="mt-3 space-y-0.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={link.onClick}
                    className="inline-flex min-h-[44px] items-center text-sm text-[#46585E] transition-colors hover:text-[#195963] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Cooperação Baptista (inspirada na IEBC) */}
          <div className="md:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-wide text-[#172226]">
              {t.footer.cooperationTitle}
            </h2>
            <ul className="mt-3 space-y-0.5">
              {COOPERATION_PARTNERS.map((partner) => {
                const localized = t.about.cooperationItems[partner.id];
                return (
                  <li key={partner.id}>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1 text-sm text-[#46585E] transition-colors hover:text-[#195963] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                    >
                      <span>{localized.name}</span>
                      <ArrowUpRight
                        className="h-3 w-3 shrink-0 opacity-65"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Coluna 4: Canais Oficiais */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-[#172226]">
              {t.footer.channelsTitle}
            </h2>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={CHURCH_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <Instagram
                  className="h-4 w-4 shrink-0 text-[#195963]"
                  aria-hidden="true"
                />
                <span>{t.footer.instagramLabel}</span>
              </a>

              <a
                href={CHURCH_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <Facebook
                  className="h-4 w-4 shrink-0 text-[#195963]"
                  aria-hidden="true"
                />
                <span>{t.footer.facebookLabel}</span>
              </a>

              <a
                href={CHURCH_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <Youtube
                  className="h-4 w-4 shrink-0 text-[#195963]"
                  aria-hidden="true"
                />
                <span>{t.footer.youtubeLabel}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#9C412A] hover:text-[#9C412A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C412A]"
              >
                <MessageCircle
                  className="h-4 w-4 shrink-0 text-[#9C412A]"
                  aria-hidden="true"
                />
                <span>{t.footer.whatsappLabel}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final de Direitos */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[#DDD7CE] pt-6 text-xs text-[#46585E] sm:flex-row sm:items-center sm:text-sm">
          <p>
            © {currentYear} {CHURCH_INFO.fullName}. {t.footer.rightsReserved}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={CHURCH_INFO.logos.circularSeal}
              alt=""
              aria-hidden="true"
              className="h-7 w-7 object-contain mix-blend-multiply opacity-85"
            />
            <span>{t.footer.sundayLine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
