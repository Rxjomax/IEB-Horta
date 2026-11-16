import { Calendar, MapPin, MessageCircle } from 'lucide-react';
import { CHURCH_INFO } from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Barra de ação rápida fixa apenas para ecrãs móveis (altura 48px),
 * oferecendo acesso imediato com o polegar para Rotas, Horários e WhatsApp.
 */
export function MobileQuickBar() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    t.hero.whatsappMessage
  )}`;

  return (
    <div
      aria-label={t.mobileBar.ariaLabel}
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#DDD7CE] bg-[#FAF8F4]/95 backdrop-blur-md md:hidden"
    >
      <div className="grid h-12 grid-cols-3 divide-x divide-[#DDD7CE]">
        <a
          href={CHURCH_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full items-center justify-center gap-1.5 text-xs font-semibold text-[#195963] active:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#195963]"
        >
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{t.mobileBar.map}</span>
        </a>

        <a
          href="#horarios"
          className="flex h-full items-center justify-center gap-1.5 text-xs font-semibold text-[#172226] active:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#195963]"
        >
          <Calendar
            className="h-4 w-4 shrink-0 text-[#195963]"
            aria-hidden="true"
          />
          <span>{t.mobileBar.schedule}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full items-center justify-center gap-1.5 text-xs font-semibold text-[#9C412A] active:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#9C412A]"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{t.mobileBar.whatsapp}</span>
        </a>
      </div>
    </div>
  );
}
