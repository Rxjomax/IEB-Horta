import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGE_OPTIONS, type LanguageCode } from '../i18n/translations';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { language, languageOption, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.nav.ariaLanguage}: ${languageOption.label}`}
        className={`inline-flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-[#DDD7CE] bg-white font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4] ${
          compact ? 'px-2.5 py-2 text-xs' : 'px-2.5 py-2 text-xs sm:px-3 sm:text-sm'
        }`}
      >
        <Globe className="h-4 w-4 shrink-0 text-[#195963]" aria-hidden="true" />
        <span className="sm:hidden">{languageOption.compactCode}</span>
        <span className="hidden sm:inline">{languageOption.shortCode}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 text-[#46585E] transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.nav.languageMenuTitle}
          className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-[#DDD7CE] bg-white py-1.5 shadow-lg"
        >
          <p className="border-b border-[#DDD7CE] px-3.5 pb-2 pt-1.5 text-[11px] font-semibold tracking-wide text-[#46585E]">
            {t.nav.languageMenuTitle}
          </p>
          <div className="divide-y divide-[#EFECE5]">
            {LANGUAGE_OPTIONS.map((option) => {
              const isSelected = option.code === language;
              return (
                <button
                  key={option.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.code)}
                  className={`flex min-h-[44px] w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#195963] ${
                    isSelected
                      ? 'bg-[#FAF8F4] font-semibold text-[#195963]'
                      : 'text-[#172226] hover:bg-[#FAF8F4]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="inline-block w-11 shrink-0 font-display text-xs font-semibold tracking-wide text-[#9C412A]">
                      {option.shortCode}
                    </span>
                    <span className="truncate">{option.label}</span>
                  </span>
                  {isSelected && (
                    <Check
                      className="h-4 w-4 shrink-0 text-[#195963]"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
