import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  buildSiteSearchIndex,
  searchSiteIndex,
  type SearchCategory,
  type SearchResult,
} from '../utils/siteSearch';
import type { AboutTabId } from './AboutSection';
import type { CommunityTabId } from './InstagramGallery';
import type { BulletinTabId } from './NovemberBulletinSection';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  onSelectBulletinTab: (tab: BulletinTabId) => void;
  onSelectAboutTab: (tab: AboutTabId) => void;
  onSelectCommunityTab: (tab: CommunityTabId) => void;
  onFocusMinistry: (ministryId: string) => void;
}

const CATEGORY_ORDER: SearchCategory[] = [
  'all',
  'bulletin',
  'schedule',
  'essence',
  'ministries',
  'community',
  'visit',
];

export function SearchModal({
  open,
  onClose,
  onSelectBulletinTab,
  onSelectAboutTab,
  onSelectCommunityTab,
  onFocusMinistry,
}: SearchModalProps) {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchIndex = useMemo(() => buildSiteSearchIndex(t), [t]);
  const results = useMemo(
    () => searchSiteIndex(searchIndex, query, category),
    [searchIndex, query, category]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query, category, open]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 30);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const handleNavigate = (item: SearchResult) => {
    if (item.bulletinTab) {
      onSelectBulletinTab(item.bulletinTab);
    }
    if (item.aboutTab) {
      onSelectAboutTab(item.aboutTab);
    }
    if (item.communityTab) {
      onSelectCommunityTab(item.communityTab);
    }
    if (item.ministryId) {
      onFocusMinistry(item.ministryId);
    }

    onClose();

    const targetId = item.targetHref.replace(/^#/, '');
    window.setTimeout(() => {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (results.length === 0) return;

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % results.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (event.key === 'Enter') {
        const selected = results[activeIndex];
        if (selected) {
          event.preventDefault();
          handleNavigate(selected);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!open) return null;

  const hasQuery = query.trim().length > 0;
  const countLabel =
    results.length === 1
      ? `1 ${t.search.resultsCountSingular}`
      : `${results.length} ${t.search.resultsCountPlural}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-search-title"
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#172226]/65 p-3 pt-4 backdrop-blur-sm sm:p-6 sm:pt-14"
      onClick={onClose}
    >
      <div
        className="flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#DDD7CE] bg-[#FAF8F4] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho + Input com Lupa */}
        <div className="border-b border-[#DDD7CE] bg-white px-4 pb-3 pt-4 sm:px-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2
              id="site-search-title"
              className="font-display text-lg font-semibold text-[#172226] sm:text-xl"
            >
              {t.search.modalTitle}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.search.closeModal}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[#46585E] transition-colors hover:bg-[#EFECE5] hover:text-[#172226] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex items-center">
            <Search
              className="pointer-events-none absolute left-3.5 h-5 w-5 text-[#195963]"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search.inputPlaceholder}
              aria-label={t.search.inputPlaceholder}
              className="min-h-[48px] w-full rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] pl-11 pr-12 text-base text-[#172226] placeholder:text-[#46585E]/75 focus:border-[#195963] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#195963]/20"
            />
            {hasQuery && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                aria-label={t.search.clearInput}
                className="absolute right-1.5 inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#46585E] transition-colors hover:bg-[#EFECE5] hover:text-[#172226] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Filtros de secção */}
          <div
            role="tablist"
            aria-label={t.search.filterAria}
            className="mt-3 flex gap-1.5 overflow-x-auto pb-1"
          >
            {CATEGORY_ORDER.map((cat) => {
              const selected = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setCategory(cat)}
                  className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] ${
                    selected
                      ? 'bg-[#195963] text-white'
                      : 'bg-[#EFECE5] text-[#46585E] hover:text-[#172226]'
                  }`}
                >
                  {t.search.categories[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sugestões rápidas quando sem termo digitado */}
        {!hasQuery && (
          <div className="border-b border-[#DDD7CE] bg-[#EFECE5]/65 px-4 py-3 sm:px-6">
            <p className="text-xs font-semibold tracking-wide text-[#46585E]">
              {t.search.suggestionsTitle}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.search.suggestions.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => {
                    setQuery(term);
                    inputRef.current?.focus();
                  }}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#DDD7CE] bg-white px-3 py-1.5 text-xs font-medium text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <Search
                    className="h-3.5 w-3.5 shrink-0 text-[#9C412A]"
                    aria-hidden="true"
                  />
                  <span>{term}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lista de Resultados */}
        <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-6">
          {results.length > 0 ? (
            <>
              {hasQuery && (
                <p className="mb-2 text-xs font-medium tabular-nums text-[#46585E]">
                  {countLabel}
                </p>
              )}
              <ul className="divide-y divide-[#DDD7CE] overflow-hidden rounded-xl border border-[#DDD7CE] bg-white">
                {results.map((item, idx) => {
                  const isHighlighted = idx === activeIndex;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(item)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`flex min-h-[56px] w-full items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#195963] ${
                          isHighlighted ? 'bg-[#FAF8F4]' : 'bg-white'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#46585E]">
                            <span className="font-semibold text-[#9C412A]">
                              {item.sectionLabel}
                            </span>
                            {item.subLabel && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="truncate">{item.subLabel}</span>
                              </>
                            )}
                          </div>
                          <p className="mt-1 font-display text-base font-semibold text-[#172226]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed text-[#46585E]">
                            {item.snippet}
                          </p>
                        </div>

                        <span
                          aria-hidden="true"
                          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                            isHighlighted
                              ? 'border-[#195963] bg-[#195963] text-white'
                              : 'border-[#DDD7CE] bg-[#FAF8F4] text-[#195963]'
                          }`}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div className="rounded-xl border border-[#DDD7CE] bg-white px-6 py-10 text-center">
              <Search
                className="mx-auto h-7 w-7 text-[#46585E]/70"
                aria-hidden="true"
              />
              <p className="mt-3 font-display text-lg font-semibold text-[#172226]">
                {t.search.emptyTitle}
              </p>
              <p className="mx-auto mt-1.5 max-w-[44ch] text-sm leading-relaxed text-[#46585E]">
                {t.search.emptyHint}
              </p>
            </div>
          )}
        </div>

        {/* Rodapé discreto com atalho de teclado no desktop */}
        <div className="hidden items-center justify-between border-t border-[#DDD7CE] bg-white px-6 py-2.5 text-xs text-[#46585E] sm:flex">
          <span>{t.search.keyboardHint}</span>
          <span className="font-semibold text-[#195963]">Ctrl + K / ⌘K</span>
        </div>
      </div>
    </div>
  );
}
