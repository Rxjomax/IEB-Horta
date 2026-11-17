import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react';
import { CHURCH_INFO } from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import type { AboutTabId } from './AboutSection';
import type { CommunityTabId } from './InstagramGallery';
import { LanguageSwitcher } from './LanguageSwitcher';

const NAV_IDS = [
  'horarios',
  'essencia',
  'ministerios',
  'comunidade',
  'visita',
] as const;

interface NavbarProps {
  onSelectAboutTab: (tab: AboutTabId) => void;
  onSelectCommunityTab: (tab: CommunityTabId) => void;
}

export function Navbar({
  onSelectAboutTab,
  onSelectCommunityTab,
}: NavbarProps) {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    null | 'essencia' | 'comunidade'
  >(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { id: 'horarios', label: t.nav.links.schedule, href: '#horarios' },
    { id: 'essencia', label: t.nav.links.essence, href: '#essencia' },
    { id: 'ministerios', label: t.nav.links.ministries, href: '#ministerios' },
    { id: 'comunidade', label: t.nav.links.community, href: '#comunidade' },
    { id: 'visita', label: t.nav.links.visit, href: '#visita' },
  ];

  const aboutSubLinks: Array<{ label: string; tab: AboutTabId }> = [
    { label: t.nav.subLinks.churchHistory, tab: 'historia' },
    { label: t.nav.subLinks.whatWeBelieve, tab: 'cremos' },
    { label: t.nav.subLinks.cooperation, tab: 'cooperacao' },
  ];

  const communitySubLinks: Array<{ label: string; tab: CommunityTabId }> = [
    { label: t.nav.subLinks.instagramFeed, tab: 'fotos' },
    { label: t.nav.subLinks.archivesEvents, tab: 'arquivos' },
    { label: t.nav.subLinks.offeringsMission, tab: 'ofertas' },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(1, Math.max(0, y / docHeight)));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (openDropdown) setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen, openDropdown]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const whatsappUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.hero.whatsappMessage
  )}`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-t-[3px] border-t-[#195963] transition-colors duration-200 ${
          scrolled
            ? 'border-b border-[#DDD7CE] bg-[#FAF8F4]/95 backdrop-blur-md'
            : 'border-b border-[#DDD7CE]/80 bg-[#FAF8F4]'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 md:h-[4.25rem] lg:gap-8 lg:px-8">
          {/* Zona 1: Marca Oficial */}
          <a
            href="#inicio"
            aria-label={CHURCH_INFO.fullName}
            className="flex shrink-0 items-center rounded-md py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"
          >
            <img
              src={CHURCH_INFO.logos.horizontal}
              alt={CHURCH_INFO.fullName}
              className="h-7 w-auto object-contain mix-blend-multiply sm:h-9"
            />
          </a>

          {/* Zona 2: Links de Navegação Desktop com Sub-abas Dropdown (inspiração IEBC) */}
          <nav
            aria-label={t.nav.ariaMain}
            className="hidden items-center gap-5 lg:flex xl:gap-6"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const hasSubmenu =
                link.id === 'essencia' || link.id === 'comunidade';

              if (!hasSubmenu) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative shrink-0 whitespace-nowrap py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-0 after:h-[1.5px] after:bg-[#195963] after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] focus-visible:ring-offset-2 ${
                      isActive
                        ? 'text-[#195963] after:w-full'
                        : 'text-[#172226]/85 hover:text-[#195963] after:w-0 hover:after:w-full'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              }

              const isDropdownOpen = openDropdown === link.id;
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    setOpenDropdown(link.id as 'essencia' | 'comunidade')
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={isDropdownOpen}
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === link.id
                          ? null
                          : (link.id as 'essencia' | 'comunidade')
                      )
                    }
                    className={`relative inline-flex shrink-0 items-center gap-1 whitespace-nowrap py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] focus-visible:ring-offset-2 ${
                      isActive
                        ? 'text-[#195963]'
                        : 'text-[#172226]/85 hover:text-[#195963]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-150 ${
                        isDropdownOpen ? 'rotate-180 text-[#195963]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 top-full z-50 w-56 pt-1">
                      <div className="overflow-hidden rounded-xl border border-[#DDD7CE] bg-white py-1.5 shadow-lg">
                        {link.id === 'essencia' &&
                          aboutSubLinks.map((sub) => (
                            <a
                              key={sub.tab}
                              href="#essencia"
                              onClick={() => {
                                onSelectAboutTab(sub.tab);
                                setOpenDropdown(null);
                              }}
                              className="flex min-h-[44px] items-center whitespace-nowrap px-4 py-2 text-sm font-medium text-[#172226] transition-colors hover:bg-[#FAF8F4] hover:text-[#195963]"
                            >
                              {sub.label}
                            </a>
                          ))}
                        {link.id === 'comunidade' &&
                          communitySubLinks.map((sub) => (
                            <a
                              key={sub.tab}
                              href="#comunidade"
                              onClick={() => {
                                onSelectCommunityTab(sub.tab);
                                setOpenDropdown(null);
                              }}
                              className="flex min-h-[44px] items-center whitespace-nowrap px-4 py-2 text-sm font-medium text-[#172226] transition-colors hover:bg-[#FAF8F4] hover:text-[#195963]"
                            >
                              {sub.label}
                            </a>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Zona 3: Ação Primária + Seletor de Idioma + Menu Mobile */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            <a
              href="#visita"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-[#195963] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#12434B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4] sm:px-5 sm:text-sm"
            >
              {t.nav.ctaVisit}
            </a>

            <LanguageSwitcher compact />

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#172226] transition-colors hover:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Barra de progresso de leitura discreta */}
        <div
          aria-hidden="true"
          className="h-[2px] w-full origin-left bg-[#9C412A]/85 transition-transform duration-100"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </header>

      {/* Gaveta de Navegação Mobile em Tela Cheia com Sub-abas */}
      <div
        id="mobile-navigation-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-50 flex flex-col bg-[#FAF8F4] transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex h-14 items-center justify-between border-b border-[#DDD7CE] border-t-[3px] border-t-[#195963] px-4 sm:px-6">
          <a
            href="#inicio"
            onClick={handleNavClick}
            aria-label={CHURCH_INFO.fullName}
            className="flex items-center py-1"
          >
            <img
              src={CHURCH_INFO.logos.horizontal}
              alt={CHURCH_INFO.fullName}
              className="h-8 w-auto object-contain mix-blend-multiply"
            />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label={t.nav.closeNavDrawer}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-[#172226] hover:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 py-6">
          <nav
            aria-label={t.nav.ariaMobile}
            className="flex flex-col divide-y divide-[#DDD7CE]"
          >
            {navLinks.map((link, index) => (
              <div key={link.href} className="py-1">
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex min-h-[52px] items-center justify-between py-2 font-display text-xl font-semibold text-[#172226] transition-colors hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-medium tabular-nums text-[#46585E]">
                    0{index + 1}
                  </span>
                </a>

                {link.id === 'essencia' && (
                  <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1 pl-1">
                    {aboutSubLinks.map((sub) => (
                      <a
                        key={sub.tab}
                        href="#essencia"
                        onClick={() => {
                          onSelectAboutTab(sub.tab);
                          handleNavClick();
                        }}
                        className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#195963] underline-offset-4 hover:underline"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}

                {link.id === 'comunidade' && (
                  <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1 pl-1">
                    {communitySubLinks.map((sub) => (
                      <a
                        key={sub.tab}
                        href="#comunidade"
                        onClick={() => {
                          onSelectCommunityTab(sub.tab);
                          handleNavClick();
                        }}
                        className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#195963] underline-offset-4 hover:underline"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-4 border-t border-[#DDD7CE] pt-6">
            <div className="flex items-center gap-4">
              <img
                src={CHURCH_INFO.logos.circularSeal}
                alt={t.about.sealAlt}
                className="h-14 w-14 shrink-0 object-contain mix-blend-multiply"
              />
              <div>
                <p className="font-display text-sm font-semibold text-[#195963]">
                  {CHURCH_INFO.fullName}
                </p>
                <p className="text-sm text-[#46585E]">
                  {t.nav.drawerSummary}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              <a
                href="#visita"
                onClick={handleNavClick}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#9C412A] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#803320]"
              >
                {t.nav.ctaVisitDrawer}
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CHURCH_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#DDD7CE] bg-white px-4 py-2.5 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963]"
                >
                  <Instagram
                    className="h-4 w-4 text-[#195963]"
                    aria-hidden="true"
                  />
                  <span>@iebhorta</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-[#46585E]"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#DDD7CE] bg-white px-4 py-2.5 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963]"
                >
                  <MessageCircle
                    className="h-4 w-4 text-[#195963]"
                    aria-hidden="true"
                  />
                  <span>{t.nav.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
