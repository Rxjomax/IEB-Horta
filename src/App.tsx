import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { InstagramGallery } from './components/InstagramGallery';
import { MinistriesSection } from './components/MinistriesSection';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Navbar } from './components/Navbar';
import { ScheduleSection } from './components/ScheduleSection';
import { VisitLocationSection } from './components/VisitLocationSection';

export default function App() {
  const [selectedMinistry, setSelectedMinistry] = useState('');

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF8F4] text-[#172226]">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#195963] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar />

      <main id="conteudo-principal">
        <Hero />
        <ScheduleSection />
        <AboutSection />
        <MinistriesSection onSelectMinistry={setSelectedMinistry} />
        <InstagramGallery />
        <VisitLocationSection selectedMinistry={selectedMinistry} />
      </main>

      <Footer />
      <MobileQuickBar />
    </div>
  );
}
