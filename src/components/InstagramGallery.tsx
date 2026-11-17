import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Instagram,
  Mail,
  Maximize2,
  MessageCircle,
  X,
  Youtube,
} from 'lucide-react';
import {
  CHURCH_INFO,
  COMMUNITY_ARCHIVES,
  INSTAGRAM_POSTS,
  type GalleryPost,
} from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';
import type { BulletinTabId } from './NovemberBulletinSection';

export type CommunityTabId = 'fotos' | 'arquivos' | 'ofertas';
type GalleryFilter = 'todos' | GalleryPost['filterGroup'];

interface InstagramGalleryProps {
  activeTab: CommunityTabId;
  onTabChange: (tab: CommunityTabId) => void;
  onSelectBulletinTab?: (tab: BulletinTabId) => void;
}

export function InstagramGallery({
  activeTab,
  onTabChange,
  onSelectBulletinTab,
}: InstagramGalleryProps) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<GalleryFilter>('todos');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visiblePosts = INSTAGRAM_POSTS.filter((post) =>
    filter === 'todos' ? true : post.filterGroup === filter
  );

  const selectedPost = selectedPostId
    ? INSTAGRAM_POSTS.find((p) => p.id === selectedPostId) ?? null
    : null;

  useEffect(() => {
    if (!selectedPostId) return;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPostId(null);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const navigateModal = (direction: 1 | -1) => {
    if (!selectedPostId || visiblePosts.length === 0) return;
    const idx = visiblePosts.findIndex((p) => p.id === selectedPostId);
    if (idx === -1) return;
    const nextIdx =
      (idx + direction + visiblePosts.length) % visiblePosts.length;
    setSelectedPostId(visiblePosts[nextIdx].id);
  };

  const communityTabs: Array<{ id: CommunityTabId; label: string }> = [
    { id: 'fotos', label: t.gallery.tabs.photos },
    { id: 'arquivos', label: t.gallery.tabs.archives },
    { id: 'ofertas', label: t.gallery.tabs.giving },
  ];

  const givingWhatsappUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.gallery.giving.whatsappMessage
  )}`;
  const givingMailtoUrl = `mailto:${CHURCH_INFO.email}?subject=${encodeURIComponent(
    t.gallery.giving.mailSubject
  )}`;

  return (
    <section
      id="comunidade"
      aria-labelledby="comunidade-heading"
      className="border-b border-[#DDD7CE] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-[#DDD7CE] pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#9C412A]">
                {t.gallery.kickerPrefix} · {CHURCH_INFO.handle}
              </p>
              <h2
                id="comunidade-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#172226] [text-wrap:balance] sm:text-4xl"
              >
                {t.gallery.heading}
              </h2>
            </div>

            {/* Abas principais: Momentos @iebhorta | Arquivos & Eventos | Ofertas & Missão */}
            <div
              role="tablist"
              aria-label={t.gallery.tabsAria}
              className="inline-flex flex-wrap gap-1.5 self-start rounded-xl border border-[#DDD7CE] bg-[#EFECE5] p-1 lg:self-auto"
            >
              {communityTabs.map((tab) => {
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
                        ? 'bg-white text-[#195963] shadow-xs'
                        : 'text-[#46585E] hover:text-[#172226]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ABA 1: MOMENTOS @iebhorta (GALERIA INSTAGRAM) */}
        {activeTab === 'fotos' && (
          <div role="tabpanel" className="pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div
                role="group"
                aria-label={t.gallery.filterAria}
                className="inline-flex flex-wrap gap-1.5 self-start rounded-xl border border-[#DDD7CE] bg-[#EFECE5] p-1"
              >
                {[
                  {
                    id: 'todos' as const,
                    label: `${t.gallery.filters.allPrefix} (${INSTAGRAM_POSTS.length})`,
                  },
                  { id: 'cultos' as const, label: t.gallery.filters.worship },
                  {
                    id: 'comunidade' as const,
                    label: t.gallery.filters.community,
                  },
                  {
                    id: 'acao-social' as const,
                    label: t.gallery.filters.socialAction,
                  },
                ].map((tab) => {
                  const active = filter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setFilter(tab.id)}
                      aria-pressed={active}
                      className={`min-h-[44px] whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                        active
                          ? 'bg-white text-[#195963] shadow-xs'
                          : 'text-[#46585E] hover:text-[#172226]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <a
                href={CHURCH_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#195963] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#12434B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] focus-visible:ring-offset-2"
              >
                <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.gallery.followCta}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
              {visiblePosts.map((post) => {
                const hasFailed = failedImages[post.id];
                const localized = t.gallery.posts[post.id];

                return (
                  <figure
                    key={post.id}
                    className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#DDD7CE] bg-[#EFECE5] sm:rounded-2xl"
                  >
                    {!hasFailed ? (
                      <img
                        src={post.image}
                        alt={localized.alt}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({
                            ...prev,
                            [post.id]: true,
                          }))
                        }
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                        <Instagram
                          className="h-6 w-6 text-[#195963]"
                          aria-hidden="true"
                        />
                        <span className="mt-2 text-xs font-medium text-[#46585E]">
                          {localized.category}
                        </span>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedPostId(post.id)}
                      aria-label={`${t.gallery.openDetailsPrefix}: ${localized.category}`}
                      className="absolute inset-0 flex flex-col justify-between p-3 text-left transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:p-4 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-[#0D3238]/92 via-[#0D3238]/30 to-transparent opacity-80 sm:opacity-100"
                      />
                      <div className="relative z-10 hidden justify-end sm:flex">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#172226]">
                          <Maximize2 className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="relative z-10 mt-auto text-white">
                        <p className="text-[11px] font-medium tracking-wide text-[#FAF8F4]/90 sm:text-xs">
                          {localized.category} · {localized.dateLabel}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs leading-snug text-white sm:text-sm">
                          {localized.caption}
                        </p>
                      </div>
                    </button>
                  </figure>
                );
              })}
            </div>

            <p className="mt-4 text-xs text-[#46585E]">{t.gallery.tapHint}</p>
          </div>
        )}

        {/* ABA 2: ARQUIVOS & EVENTOS (INSPIRADO EM ARQUIVOS + EVENTOS DA IEBC) */}
        {activeTab === 'arquivos' && (
          <div role="tabpanel" className="pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[64ch] text-base leading-relaxed text-[#46585E]">
                {t.gallery.archivesIntro}
              </p>

              <a
                href={CHURCH_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#195963] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#12434B]"
              >
                <Youtube className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.gallery.archivesYouTubeCta}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {COMMUNITY_ARCHIVES.map((item) => {
                const localized = t.gallery.archivesItems[item.id];
                const href =
                  item.actionType === 'youtube'
                    ? CHURCH_INFO.youtubeUrl
                    : item.actionType === 'instagram'
                      ? CHURCH_INFO.instagramUrl
                      : item.actionType === 'bulletin'
                        ? '#agenda-novembro'
                        : '#visita';
                const isExternal =
                  item.actionType === 'youtube' ||
                  item.actionType === 'instagram';

                return (
                  <article
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-[#DDD7CE] bg-[#FAF8F4] sm:flex-row"
                  >
                    <div className="aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#EFECE5] sm:aspect-auto sm:w-44">
                      <img
                        src={item.image}
                        alt={localized.imageAlt}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <p className="text-xs font-medium text-[#46585E]">
                          <span className="font-semibold text-[#9C412A]">
                            {localized.category}
                          </span>
                          <span aria-hidden="true" className="mx-1.5">
                            ·
                          </span>
                          <span>{localized.dateLabel}</span>
                        </p>
                        <h3 className="mt-1.5 font-display text-lg font-semibold text-[#172226] sm:text-xl">
                          {localized.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#46585E]">
                          {localized.summary}
                        </p>
                      </div>

                      <div className="mt-4 pt-2">
                        <a
                          href={href}
                          onClick={
                            item.actionType === 'bulletin'
                              ? () => onSelectBulletinTab?.('agenda')
                              : undefined
                          }
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#195963] underline-offset-4 hover:underline"
                        >
                          <span>{localized.actionLabel}</span>
                          {isExternal ? (
                            <ArrowUpRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          )}
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* ABA 3: OFERTAS & MISSÃO (INSPIRADO EM DONATIVOS DA IEBC) */}
        {activeTab === 'ofertas' && (
          <div role="tabpanel" className="pt-8">
            <div className="grid grid-cols-1 gap-8 rounded-2xl border border-[#DDD7CE] bg-[#FAF8F4] p-6 sm:p-8 lg:grid-cols-12 lg:p-10">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#9C412A]">
                  <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                  <span>{t.gallery.giving.kicker}</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#172226] sm:text-3xl">
                  {t.gallery.giving.heading}
                </h3>
                <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-[#46585E]">
                  {t.gallery.giving.paragraph1}
                </p>
                <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[#46585E]">
                  {t.gallery.giving.paragraph2}
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={givingWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#195963] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12434B]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>{t.gallery.giving.ctaWhatsApp}</span>
                  </a>
                  <a
                    href={givingMailtoUrl}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#DDD7CE] bg-white px-5 py-3 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963]"
                  >
                    <Mail className="h-4 w-4 text-[#195963]" aria-hidden="true" />
                    <span>{t.gallery.giving.ctaEmail}</span>
                  </a>
                </div>
              </div>

              <div className="divide-y divide-[#DDD7CE] rounded-xl border border-[#DDD7CE] bg-white lg:col-span-6">
                {t.gallery.giving.pillars.map((pillar, idx) => (
                  <div key={pillar.title} className="p-5 sm:p-6">
                    <span className="font-display text-xs font-semibold tabular-nums text-[#9C412A]">
                      0{idx + 1}
                    </span>
                    <h4 className="mt-1 font-display text-lg font-semibold text-[#172226]">
                      {pillar.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#46585E]">
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Lightbox Acessível para Fotos @iebhorta */}
      {selectedPost && (() => {
        const localizedSelected = t.gallery.posts[selectedPost.id];
        return (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B2A30]/80 p-4 backdrop-blur-xs"
            onClick={() => setSelectedPostId(null)}
          >
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#DDD7CE] bg-[#FAF8F4] text-[#172226]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#DDD7CE] px-5 py-3.5">
                <p className="text-xs font-semibold tracking-wide text-[#9C412A]">
                  {localizedSelected.category} · {localizedSelected.dateLabel}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedPostId(null)}
                  aria-label={t.gallery.closeLightbox}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#172226] hover:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-12 sm:items-center sm:p-6">
                <div className="mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-xl border border-[#DDD7CE] bg-[#EFECE5] sm:col-span-5">
                  <img
                    src={selectedPost.image}
                    alt={localizedSelected.alt}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between sm:col-span-7">
                  <div>
                    <h3
                      id="lightbox-title"
                      className="font-display text-2xl font-semibold text-[#172226]"
                    >
                      {localizedSelected.category}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-[#46585E]">
                      {localizedSelected.caption}
                    </p>
                    {localizedSelected.scripture && (
                      <p className="mt-3 text-sm font-semibold text-[#195963]">
                        {t.gallery.referenceLabel}:{' '}
                        {localizedSelected.scripture}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#DDD7CE] pt-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => navigateModal(-1)}
                        aria-label={t.gallery.prevPost}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDD7CE] bg-white text-[#172226] hover:border-[#195963]"
                      >
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateModal(1)}
                        aria-label={t.gallery.nextPost}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDD7CE] bg-white text-[#172226] hover:border-[#195963]"
                      >
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>

                    <a
                      href={CHURCH_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#195963] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12434B]"
                    >
                      <Instagram className="h-4 w-4" aria-hidden="true" />
                      <span>{t.gallery.viewOnInstagram}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
