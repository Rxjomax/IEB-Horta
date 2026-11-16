import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Maximize2,
  X,
} from 'lucide-react';
import {
  CHURCH_INFO,
  INSTAGRAM_POSTS,
  type GalleryPost,
} from '../data/churchConfig';
import { Reveal } from './Reveal';

type GalleryFilter = 'todos' | GalleryPost['filterGroup'];

export function InstagramGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('todos');
  const [selectedPost, setSelectedPost] = useState<GalleryPost | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visiblePosts = INSTAGRAM_POSTS.filter((post) =>
    filter === 'todos' ? true : post.filterGroup === filter
  );

  useEffect(() => {
    if (!selectedPost) return;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPost(null);
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
    if (!selectedPost || visiblePosts.length === 0) return;
    const idx = visiblePosts.findIndex((p) => p.id === selectedPost.id);
    if (idx === -1) return;
    const nextIdx =
      (idx + direction + visiblePosts.length) % visiblePosts.length;
    setSelectedPost(visiblePosts[nextIdx]);
  };

  return (
    <section
      id="comunidade"
      aria-labelledby="comunidade-heading"
      className="border-b border-[#DDD7CE] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#9C412A]">
                Diretamente do Instagram · {CHURCH_INFO.handle}
              </p>
              <h2
                id="comunidade-heading"
                className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#172226] [text-wrap:balance] sm:text-4xl"
              >
                Siga o dia a dia da nossa família
              </h2>
            </div>

            <a
              href={CHURCH_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-[#195963] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12434B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] focus-visible:ring-offset-2 sm:w-auto sm:text-base"
            >
              <Instagram className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Seguir @iebhorta no Instagram</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Filtro por tema da galeria */}
          <div
            role="group"
            aria-label="Filtrar publicações da comunidade"
            className="mt-7 inline-flex flex-wrap gap-1.5 rounded-xl border border-[#DDD7CE] bg-[#EFECE5] p-1"
          >
            {[
              { id: 'todos' as const, label: `Todas (${INSTAGRAM_POSTS.length})` },
              { id: 'cultos' as const, label: 'Cultos & Palavra' },
              { id: 'comunidade' as const, label: 'Comunidade' },
              { id: 'acao-social' as const, label: 'Ação Social' },
            ].map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  aria-pressed={active}
                  className={`min-h-[40px] whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
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
        </Reveal>

        {/* Grid 2x2 no Mobile / 3 Colunas no Desktop mantendo nitidez nativa das fotos */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {visiblePosts.map((post) => {
            const hasFailed = failedImages[post.id];

            return (
              <figure
                key={post.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-[#DDD7CE] bg-[#EFECE5] sm:rounded-2xl"
              >
                {!hasFailed ? (
                  <img
                    src={post.image}
                    alt={post.alt}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [post.id]: true }))
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
                      {post.category}
                    </span>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  aria-label={`Ver detalhes: ${post.category}`}
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
                      {post.category} · {post.dateLabel}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs leading-snug text-white sm:text-sm">
                      {post.caption}
                    </p>
                  </div>
                </button>
              </figure>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-[#46585E]">
          Toque numa publicação para ler a legenda completa.
        </p>
      </div>

      {/* Modal Lightbox Acessível */}
      {selectedPost && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B2A30]/80 p-4 backdrop-blur-xs"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#DDD7CE] bg-[#FAF8F4] text-[#172226]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#DDD7CE] px-5 py-3.5">
              <p className="text-xs font-semibold tracking-wide text-[#9C412A]">
                {selectedPost.category} · {selectedPost.dateLabel}
              </p>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                aria-label="Fechar visualização"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#172226] hover:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-12 sm:items-center sm:p-6">
              <div className="mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-xl border border-[#DDD7CE] bg-[#EFECE5] sm:col-span-5">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.alt}
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
                    {selectedPost.category}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#46585E]">
                    {selectedPost.caption}
                  </p>
                  {selectedPost.scripture && (
                    <p className="mt-3 text-sm font-semibold text-[#195963]">
                      Referência: {selectedPost.scripture}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#DDD7CE] pt-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => navigateModal(-1)}
                      aria-label="Publicação anterior"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDD7CE] bg-white text-[#172226] hover:border-[#195963]"
                    >
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateModal(1)}
                      aria-label="Próxima publicação"
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
                    <span>Ver no @iebhorta</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
