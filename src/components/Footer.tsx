import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Search,
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
  onOpenSearch: () => void;
}

export function Footer({
  onSelectBulletinTab,
  onSelectAboutTab,
  onSelectCommunityTab,
  onOpenSearch,
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
    <footer className="border-t-2 border-t-[#B57A25] bg-[#091B30] pb-16 text-[#F8FAFC] md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Coluna 1: Brasão Oficial Colorido, Marca e Moradas */}
          <div className="md:col-span-4">
            <a
              href="#inicio"
              aria-label={CHURCH_INFO.fullName}
              className="group inline-flex items-center gap-3.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B86B]"
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#E2B86B]/55 bg-[#0C263D] p-0.5 shadow-sm transition-transform duration-200 group-hover:scale-[1.03]">
                <img
                  src={CHURCH_INFO.logos.darkGoldSeal}
                  alt={CHURCH_INFO.fullName}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <span className="block font-display text-lg font-semibold leading-snug text-white">
                  {CHURCH_INFO.fullName}
                </span>
                <span className="mt-0.5 block text-xs font-medium tracking-wide text-[#E2B86B]">
                  {CHURCH_INFO.addressRegion}
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-[38ch] text-sm leading-relaxed text-[#CBD8E6]">
              {t.footer.summary}
            </p>

            <div className="mt-5 space-y-1.5 border-t border-white/10 pt-4 text-sm">
              <p className="font-medium text-[#E2B86B]">
                {t.visit.locations.ebd.label}: {CHURCH_INFO.worshipVenueName}
              </p>
              <p className="text-[#CBD8E6]">
                {t.visit.locations.templo.label}: {CHURCH_INFO.address} ·{' '}
                {t.visit.locations.templo.region}
              </p>
              <p className="pt-1">
                <a
                  href={`tel:+${CHURCH_INFO.whatsappNumber}`}
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-medium tabular-nums text-white transition-colors hover:text-[#E2B86B] hover:underline"
                >
                  <Phone
                    className="h-3.5 w-3.5 text-[#E2B86B]"
                    aria-hidden="true"
                  />
                  <span>
                    {CHURCH_INFO.pastor} · {CHURCH_INFO.pastorPhoneDisplay}
                  </span>
                </a>
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a
                  href={`mailto:${CHURCH_INFO.email}`}
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-white transition-colors hover:text-[#E2B86B] hover:underline"
                >
                  <Mail
                    className="h-3.5 w-3.5 text-[#E2B86B]"
                    aria-hidden="true"
                  />
                  <span>{CHURCH_INFO.email}</span>
                </a>
                <a
                  href={`mailto:${CHURCH_INFO.pastorEmail}`}
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-[#CBD8E6] transition-colors hover:text-[#E2B86B] hover:underline"
                >
                  <Mail
                    className="h-3.5 w-3.5 text-[#E2B86B]"
                    aria-hidden="true"
                  />
                  <span>{CHURCH_INFO.pastorEmail}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação & Abas */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold tracking-wide text-[#E2B86B]">
              {t.footer.navigationTitle}
            </h2>
            <ul className="mt-3 space-y-0.5">
              <li>
                <button
                  type="button"
                  onClick={onOpenSearch}
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#E2B86B] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B86B]"
                >
                  <Search
                    className="h-4 w-4 shrink-0 text-[#E2B86B]"
                    aria-hidden="true"
                  />
                  <span>{t.search.footerLinkLabel}</span>
                </button>
              </li>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={link.onClick}
                    className="inline-flex min-h-[44px] items-center text-sm text-[#CBD8E6] transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B86B]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Cooperação Baptista */}
          <div className="md:col-span-2">
            <h2 className="font-display text-sm font-semibold tracking-wide text-[#E2B86B]">
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
                      className="inline-flex min-h-[44px] items-center gap-1 text-sm text-[#CBD8E6] transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B86B]"
                    >
                      <span>{localized.name}</span>
                      <ArrowUpRight
                        className="h-3 w-3 shrink-0 text-[#E2B86B]/75"
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
            <h2 className="font-display text-sm font-semibold tracking-wide text-[#E2B86B]">
              {t.footer.channelsTitle}
            </h2>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={CHURCH_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#E2B86B]/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B86B]"
              >
                <Instagram
                  className="h-4 w-4 shrink-0 text-[#E2B86B]"
                  aria-hidden="true"
                />
                <span>{t.footer.instagramLabel}</span>
              </a>

              <a
                href={CHURCH_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#E2B86B]/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B86B]"
              >
                <Facebook
                  className="h-4 w-4 shrink-0 text-[#E2B86B]"
                  aria-hidden="true"
                />
                <span>{t.footer.facebookLabel}</span>
              </a>

              <a
                href={CHURCH_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#E2B86B]/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B86B]"
              >
                <Youtube
                  className="h-4 w-4 shrink-0 text-[#E2B86B]"
                  aria-hidden="true"
                />
                <span>{t.footer.youtubeLabel}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-[#E2B86B]/40 bg-[#E2B86B]/15 px-4 py-2 text-sm font-semibold text-[#F8FAFC] transition-colors hover:border-[#E2B86B] hover:bg-[#E2B86B] hover:text-[#091B30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E2B86B]"
              >
                <MessageCircle
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
                <span>{t.footer.whatsappLabel}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final de Direitos */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-xs text-[#CBD8E6] sm:flex-row sm:items-center sm:text-sm">
          <p>
            © {currentYear} {CHURCH_INFO.fullName}. {t.footer.rightsReserved}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={CHURCH_INFO.logos.darkGoldSeal}
              alt=""
              aria-hidden="true"
              className="h-8 w-8 rounded-full border border-[#E2B86B]/40 object-cover"
            />
            <span className="text-[#E2B86B]">{t.footer.sundayLine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
