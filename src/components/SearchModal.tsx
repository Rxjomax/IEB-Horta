import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  buildSiteSearchIndex,
  searchSiteIndex,
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
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchIndex = useMemo(() => buildSiteSearchIndex(t), [t]);
  const hasQuery = query.trim().length > 0;

  const results = useMemo(
    () => (hasQuery ? searchSiteIndex(searchIndex, query, 'all') : []),
    [searchIndex, query, hasQuery]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.search.modalTitle}
      className="fixed inset-0 z-50 flex items-start justify-center bg-[#091B30]/70 p-3 pt-6 backdrop-blur-sm sm:p-6 sm:pt-16"
      onClick={onClose}
    >
      <div
        className="flex max-h-[85dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#D6DEE6] bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Apenas o campo de pesquisa com lupa e botão de fechar */}
        <div className="flex items-center gap-2 p-2.5 sm:p-3">
          <div className="relative flex flex-1 items-center">
            <Search
              className="pointer-events-none absolute left-3.5 h-5 w-5 text-[#143A61]"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search.inputPlaceholder}
              aria-label={t.search.inputPlaceholder}
              className="min-h-[48px] w-full rounded-xl border border-[#D6DEE6] bg-[#F8FAFC] pl-11 pr-11 text-base text-[#0F1E2E] placeholder:text-[#47596B]/75 focus:border-[#143A61] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143A61]/20"
            />
            {hasQuery && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  inputRef.current?.focus();
                }}
                aria-label={t.search.clearInput}
                className="absolute right-1 inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#47596B] transition-colors hover:bg-[#EEF2F6] hover:text-[#0F1E2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A61]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.search.closeModal}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D6DEE6] bg-[#F8FAFC] text-[#47596B] transition-colors hover:border-[#143A61] hover:text-[#0F1E2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A61]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Resultados aparecem apenas quando o utilizador escreve no campo */}
        {hasQuery && (
          <div className="flex-1 overflow-y-auto border-t border-[#D6DEE6] bg-[#F8FAFC] p-3 sm:p-4">
            {results.length > 0 ? (
              <ul className="divide-y divide-[#D6DEE6] overflow-hidden rounded-xl border border-[#D6DEE6] bg-white">
                {results.map((item, idx) => {
                  const isHighlighted = idx === activeIndex;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(item)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`flex min-h-[56px] w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#143A61] ${
                          isHighlighted ? 'bg-[#F8FAFC]' : 'bg-white'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#47596B]">
                            <span className="font-semibold text-[#8F5B18]">
                              {item.sectionLabel}
                            </span>
                            {item.subLabel && (
                              <>
                                <span aria-hidden="true">·</span>
                                <span className="truncate">{item.subLabel}</span>
                              </>
                            )}
                          </div>
                          <p className="mt-1 font-display text-base font-semibold text-[#0F1E2E]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed text-[#47596B]">
                            {item.snippet}
                          </p>
                        </div>

                        <span
                          aria-hidden="true"
                          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                            isHighlighted
                              ? 'border-[#143A61] bg-[#143A61] text-white'
                              : 'border-[#D6DEE6] bg-[#F8FAFC] text-[#143A61]'
                          }`}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="rounded-xl border border-[#D6DEE6] bg-white px-6 py-8 text-center">
                <p className="font-display text-base font-semibold text-[#0F1E2E]">
                  {t.search.emptyTitle}
                </p>
                <p className="mx-auto mt-1 max-w-[44ch] text-sm leading-relaxed text-[#47596B]">
                  {t.search.emptyHint}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
