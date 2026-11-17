import { useEffect, useState } from 'react';
import { AboutSection, type AboutTabId } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import {
  InstagramGallery,
  type CommunityTabId,
} from './components/InstagramGallery';
import { MinistriesSection } from './components/MinistriesSection';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Navbar } from './components/Navbar';
import {
  NovemberBulletinSection,
  type BulletinTabId,
} from './components/NovemberBulletinSection';
import { PrintableBulletinContent } from './components/PrintableBulletinSheet';
import { ScheduleSection } from './components/ScheduleSection';
import { SearchModal } from './components/SearchModal';
import { VisitLocationSection } from './components/VisitLocationSection';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppContent() {
  const [selectedMinistryId, setSelectedMinistryId] = useState('');
  const [focusedMinistryId, setFocusedMinistryId] = useState('');
  const [bulletinTab, setBulletinTab] = useState<BulletinTabId>('agenda');
  const [aboutTab, setAboutTab] = useState<AboutTabId>('historia');
  const [communityTab, setCommunityTab] = useState<CommunityTabId>('fotos');
  const [searchOpen, setSearchOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen((prev) => !prev);
        return;
      }

      if (event.key === '/' && !searchOpen) {
        const target = event.target as HTMLElement | null;
        const tag = target?.tagName?.toLowerCase();
        const isEditable =
          tag === 'input' ||
          tag === 'textarea' ||
          tag === 'select' ||
          target?.isContentEditable;
        if (!isEditable) {
          event.preventDefault();
          setSearchOpen(true);
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [searchOpen]);

  const handleNavigateToBulletinTab = (tab: BulletinTabId) => {
    setBulletinTab(tab);
  };

  const handleNavigateToAboutTab = (tab: AboutTabId) => {
    setAboutTab(tab);
  };

  const handleNavigateToCommunityTab = (tab: CommunityTabId) => {
    setCommunityTab(tab);
  };

  return (
    <>
      <div className="no-print min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#0F1E2E]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#143A61] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {t.meta.skipToContent}
        </a>

        <Navbar
          onSelectBulletinTab={handleNavigateToBulletinTab}
          onSelectAboutTab={handleNavigateToAboutTab}
          onSelectCommunityTab={handleNavigateToCommunityTab}
          onOpenSearch={() => setSearchOpen(true)}
        />

        <main id="conteudo-principal">
          <Hero onSelectAboutTab={handleNavigateToAboutTab} />
          <ScheduleSection />
          <NovemberBulletinSection
            activeTab={bulletinTab}
            onTabChange={setBulletinTab}
            onSelectCommunityTab={handleNavigateToCommunityTab}
          />
          <AboutSection activeTab={aboutTab} onTabChange={setAboutTab} />
          <MinistriesSection
            onSelectMinistry={setSelectedMinistryId}
            focusedMinistryId={focusedMinistryId}
          />
          <InstagramGallery
            activeTab={communityTab}
            onTabChange={setCommunityTab}
            onSelectBulletinTab={handleNavigateToBulletinTab}
          />
          <VisitLocationSection
            selectedMinistryId={selectedMinistryId}
            onClearMinistry={() => setSelectedMinistryId('')}
          />
        </main>

        <Footer
          onSelectBulletinTab={handleNavigateToBulletinTab}
          onSelectAboutTab={handleNavigateToAboutTab}
          onSelectCommunityTab={handleNavigateToCommunityTab}
          onOpenSearch={() => setSearchOpen(true)}
        />
        <MobileQuickBar />
      </div>

      <SearchModal
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectBulletinTab={handleNavigateToBulletinTab}
        onSelectAboutTab={handleNavigateToAboutTab}
        onSelectCommunityTab={handleNavigateToCommunityTab}
        onFocusMinistry={setFocusedMinistryId}
      />

      {/* Folha de Impressão A4 isolada para window.print() / Ctrl+P */}
      <div className="hidden print-only-sheet">
        <PrintableBulletinContent idPrefix="bulletin-direct-print" />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
