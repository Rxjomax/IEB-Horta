import { useState } from 'react';
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
import { ScheduleSection } from './components/ScheduleSection';
import { VisitLocationSection } from './components/VisitLocationSection';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppContent() {
  const [selectedMinistryId, setSelectedMinistryId] = useState('');
  const [bulletinTab, setBulletinTab] = useState<BulletinTabId>('agenda');
  const [aboutTab, setAboutTab] = useState<AboutTabId>('historia');
  const [communityTab, setCommunityTab] = useState<CommunityTabId>('fotos');
  const { t } = useLanguage();

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
    <div className="min-h-screen overflow-x-hidden bg-[#FAF8F4] text-[#172226]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#195963] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t.meta.skipToContent}
      </a>

      <Navbar
        onSelectBulletinTab={handleNavigateToBulletinTab}
        onSelectAboutTab={handleNavigateToAboutTab}
        onSelectCommunityTab={handleNavigateToCommunityTab}
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
        <MinistriesSection onSelectMinistry={setSelectedMinistryId} />
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
      />
      <MobileQuickBar />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
