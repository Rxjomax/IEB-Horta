import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  LANGUAGE_OPTIONS,
  TRANSLATIONS,
  type LanguageCode,
  type LanguageOption,
  type SiteTranslations,
} from './translations';

const STORAGE_KEY = 'iebhorta_lang';

interface LanguageContextValue {
  language: LanguageCode;
  languageOption: LanguageOption;
  setLanguage: (lang: LanguageCode) => void;
  t: SiteTranslations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

function isSupportedLanguage(value: string | null): value is LanguageCode {
  return (
    value === 'pt-PT' ||
    value === 'pt-BR' ||
    value === 'en' ||
    value === 'fr' ||
    value === 'es'
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isSupportedLanguage(saved)) {
        return saved;
      }
    } catch {
      // Silencioso caso localStorage esteja indisponível
    }
    return 'pt-PT';
  });

  const languageOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === language) ??
    LANGUAGE_OPTIONS[0];
  const t = TRANSLATIONS[language];

  const setLanguage = (nextLang: LanguageCode) => {
    setLanguageState(nextLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // Ignora erro de armazenamento
    }
  };

  useEffect(() => {
    document.documentElement.lang = languageOption.htmlLang;
    document.title = t.meta.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', t.meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.meta.title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute('content', t.meta.description);
    }
  }, [languageOption.htmlLang, t.meta.description, t.meta.title]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageOption,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
