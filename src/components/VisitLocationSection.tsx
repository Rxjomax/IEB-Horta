import { useEffect, useState, type FormEvent } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { CHURCH_INFO, CHURCH_LOCATIONS } from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';

interface VisitLocationSectionProps {
  selectedMinistryId: string;
  onClearMinistry: () => void;
}

export function VisitLocationSection({
  selectedMinistryId,
  onClearMinistry,
}: VisitLocationSectionProps) {
  const { t } = useLanguage();
  const [activeLocationId, setActiveLocationId] = useState<'templo' | 'ebd'>(
    'ebd'
  );
  const [copiedAddress, setCopiedAddress] = useState(false);

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [visitDayIndex, setVisitDayIndex] = useState(0);
  const [groupSizeIndex, setGroupSizeIndex] = useState(0);
  const [note, setNote] = useState('');
  const [errorType, setErrorType] = useState<'' | 'name' | 'phone'>('');
  const [submitted, setSubmitted] = useState(false);

  const activeLocation =
    CHURCH_LOCATIONS.find((l) => l.id === activeLocationId) ??
    CHURCH_LOCATIONS[0];
  const localizedLocation = t.visit.locations[activeLocation.id];

  const visitDay =
    t.visit.dayOptions[visitDayIndex] ?? t.visit.dayOptions[0];
  const groupSize =
    t.visit.groupSizeOptions[groupSizeIndex] ?? t.visit.groupSizeOptions[0];
  const interestLabel = selectedMinistryId
    ? (t.ministries.items[selectedMinistryId]?.title ?? '')
    : '';

  const errorMsg =
    errorType === 'name'
      ? t.visit.errorName
      : errorType === 'phone'
        ? t.visit.errorPhone
        : '';

  useEffect(() => {
    if (selectedMinistryId) {
      setSubmitted(false);
    }
  }, [selectedMinistryId]);

  const formatPhoneInput = (value: string) => {
    return value.replace(/[^\d+\s()-]/g, '').slice(0, 20);
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        `${activeLocation.address}, ${localizedLocation.region}`
      );
      setCopiedAddress(true);
      window.setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      // Silencioso caso clipboard seja bloqueado pelo iframe
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = name.trim();
    const digitsOnly = whatsapp.replace(/\D/g, '');

    if (cleanName.length < 2) {
      setErrorType('name');
      return;
    }

    if (digitsOnly.length < 8) {
      setErrorType('phone');
      return;
    }

    setErrorType('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setWhatsapp('');
    setVisitDayIndex(0);
    setGroupSizeIndex(0);
    setNote('');
    onClearMinistry();
    setErrorType('');
  };

  const fullSummaryMessage = `${t.visit.summaryGreeting} ${name.trim()} (${groupSize}) — ${CHURCH_INFO.shortName} (${visitDay})${
    interestLabel ? ` · ${t.visit.summaryInterestPrefix} ${interestLabel}` : ''
  }${note.trim() ? `. ${t.visit.summaryNotePrefix} ${note.trim()}` : '.'}`;

  const confirmWhatsAppUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    fullSummaryMessage
  )}`;
  const confirmMailtoUrl = `mailto:${CHURCH_INFO.email}?subject=${encodeURIComponent(
    `${t.visit.mailSubjectPrefix} — ${name.trim()}`
  )}&body=${encodeURIComponent(
    `${fullSummaryMessage}\n${t.visit.contactLabel} ${whatsapp.trim()}`
  )}`;

  return (
    <section
      id="visita"
      aria-labelledby="visita-heading"
      className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 text-sm font-semibold tracking-wide text-[#8F5B18]">
            <span
              aria-hidden="true"
              className="inline-block h-[1.5px] w-6 bg-[#8F5B18]"
            />
            <span>{t.visit.kicker}</span>
          </p>
          <h2
            id="visita-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#0F1E2E] [text-wrap:balance] sm:text-4xl"
          >
            {t.visit.heading}
          </h2>
          <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[#47596B]">
            {t.visit.intro}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Coluna Esquerda: Seletor de Localização e Rotas */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#D6DEE6] border-t-2 border-t-[#143A61] bg-white p-6 shadow-xs sm:p-8">
              <div>
                {/* Seletor entre Templo Principal e Salas da EBD 16h */}
                <div
                  role="tablist"
                  aria-label={t.visit.spaceTabsAria}
                  className="grid grid-cols-2 gap-1.5 rounded-xl border border-[#D6DEE6] bg-[#EEF2F6] p-1"
                >
                  {CHURCH_LOCATIONS.map((loc) => {
                    const selected = loc.id === activeLocationId;
                    return (
                      <button
                        key={loc.id}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setActiveLocationId(loc.id)}
                        className={`min-h-[44px] truncate rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                          selected
                            ? 'bg-white text-[#143A61] shadow-xs'
                            : 'text-[#47596B] hover:text-[#0F1E2E]'
                        }`}
                      >
                        {t.visit.locations[loc.id].label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D6DEE6] bg-[#F8FAFC]">
                    <MapPin
                      className="h-5 w-5 text-[#143A61]"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold text-[#0F1E2E]">
                      {localizedLocation.title}
                    </h3>
                    <p className="mt-1 text-base font-medium text-[#143A61]">
                      {activeLocation.address}
                    </p>
                    <p className="mt-0.5 text-sm text-[#47596B]">
                      {localizedLocation.region}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#47596B]">
                      {localizedLocation.note}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-[#D6DEE6] bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-[#0F1E2E] transition-colors hover:border-[#143A61]"
                      >
                        {copiedAddress ? (
                          <>
                            <Check
                              className="h-3.5 w-3.5 text-[#143A61]"
                              aria-hidden="true"
                            />
                            <span>{t.visit.copiedAddress}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>{t.visit.copyAddress}</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`tel:+${CHURCH_INFO.whatsappNumber}`}
                        className="inline-flex min-h-[44px] items-center gap-1.5 px-2 text-xs font-semibold tabular-nums text-[#143A61] underline-offset-2 hover:underline"
                      >
                        <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>
                          {CHURCH_INFO.pastor} · {CHURCH_INFO.pastorPhoneDisplay}
                        </span>
                      </a>

                      <a
                        href={`mailto:${CHURCH_INFO.email}`}
                        className="inline-flex min-h-[44px] items-center gap-1.5 px-1 text-xs font-semibold text-[#143A61] underline-offset-2 hover:underline"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{CHURCH_INFO.email}</span>
                      </a>

                      <a
                        href={`mailto:${CHURCH_INFO.pastorEmail}`}
                        className="inline-flex min-h-[44px] items-center gap-1.5 px-1 text-xs font-medium text-[#47596B] underline-offset-2 hover:text-[#143A61] hover:underline"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{CHURCH_INFO.pastorEmail}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lista de hospitalidade separada por hairlines */}
                <ul className="mt-6 divide-y divide-[#D6DEE6] border-t border-[#D6DEE6]">
                  {t.visit.visitorNotes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 py-3 text-sm leading-relaxed text-[#0F1E2E]/85"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#143A61]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botões Diretos de Rota */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={activeLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#143A61] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0E2A47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A61]"
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.visit.googleMaps}</span>
                </a>
                <a
                  href={activeLocation.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#D6DEE6] bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#0F1E2E] transition-colors hover:border-[#143A61] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A61]"
                >
                  <Navigation
                    className="h-4 w-4 shrink-0 text-[#143A61]"
                    aria-hidden="true"
                  />
                  <span>{t.visit.openWaze}</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Coluna Direita: Formulário de Visita Completo com Múltiplos Canais */}
          <Reveal delayMs={80} className="lg:col-span-7">
            <div className="rounded-2xl border border-[#D6DEE6] border-t-2 border-t-[#8F5B18] bg-white p-6 shadow-xs sm:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#0F1E2E]">
                      {t.visit.formTitle}
                    </h3>
                    <p className="mt-1 text-sm text-[#47596B]">
                      {t.visit.formSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="visitor-name"
                        className="block text-sm font-medium text-[#0F1E2E]"
                      >
                        {t.visit.nameLabel}
                      </label>
                      <input
                        id="visitor-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.visit.namePlaceholder}
                        className="mt-1.5 block min-h-[48px] w-full rounded-xl border border-[#D6DEE6] bg-[#F8FAFC] px-4 py-2.5 text-base text-[#0F1E2E] placeholder:text-[#47596B]/60 focus:border-[#143A61] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143A61]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="visitor-whatsapp"
                        className="block text-sm font-medium text-[#0F1E2E]"
                      >
                        {t.visit.phoneLabel}
                      </label>
                      <input
                        id="visitor-whatsapp"
                        name="whatsapp"
                        type="tel"
                        inputMode="tel"
                        required
                        autoComplete="tel"
                        value={whatsapp}
                        onChange={(e) =>
                          setWhatsapp(formatPhoneInput(e.target.value))
                        }
                        placeholder={t.visit.phonePlaceholder}
                        className="mt-1.5 block min-h-[48px] w-full rounded-xl border border-[#D6DEE6] bg-[#F8FAFC] px-4 py-2.5 text-base text-[#0F1E2E] placeholder:text-[#47596B]/60 focus:border-[#143A61] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143A61]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-[#0F1E2E]">
                      {t.visit.dayQuestion}
                    </span>
                    <div
                      role="radiogroup"
                      aria-label={t.visit.dayAria}
                      className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
                    >
                      {t.visit.dayOptions.map((option, index) => {
                        const selected = visitDayIndex === index;
                        return (
                          <button
                            key={index}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => setVisitDayIndex(index)}
                            className={`flex min-h-[48px] items-center justify-start rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A61] ${
                              selected
                                ? 'border-[#143A61] bg-[#143A61] text-white'
                                : 'border-[#D6DEE6] bg-[#F8FAFC] text-[#0F1E2E] hover:border-[#143A61]/50'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <span className="block text-sm font-medium text-[#0F1E2E]">
                        {t.visit.groupQuestion}
                      </span>
                      <div
                        role="radiogroup"
                        aria-label={t.visit.groupAria}
                        className="mt-2 grid grid-cols-3 gap-2"
                      >
                        {t.visit.groupSizeOptions.map((opt, index) => {
                          const active = groupSizeIndex === index;
                          return (
                            <button
                              key={index}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              onClick={() => setGroupSizeIndex(index)}
                              className={`min-h-[44px] rounded-xl border px-2.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                                active
                                  ? 'border-[#143A61] bg-[#143A61] text-white'
                                  : 'border-[#D6DEE6] bg-[#F8FAFC] text-[#0F1E2E] hover:border-[#143A61]/50'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="visitor-note"
                        className="block text-sm font-medium text-[#0F1E2E]"
                      >
                        {t.visit.noteLabel}
                      </label>
                      <input
                        id="visitor-note"
                        name="note"
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder={t.visit.notePlaceholder}
                        className="mt-2 block min-h-[44px] w-full rounded-xl border border-[#D6DEE6] bg-[#F8FAFC] px-4 py-2 text-base text-[#0F1E2E] placeholder:text-[#47596B]/60 focus:border-[#143A61] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#143A61]/20"
                      />
                    </div>
                  </div>

                  {interestLabel && (
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-[#D6DEE6] bg-[#F8FAFC] px-4 py-3 text-sm">
                      <span>
                        {t.visit.interestSelected}{' '}
                        <strong className="font-semibold text-[#143A61]">
                          {interestLabel}
                        </strong>
                      </span>
                      <button
                        type="button"
                        onClick={onClearMinistry}
                        className="min-h-[44px] shrink-0 text-xs font-semibold text-[#47596B] underline hover:text-[#0F1E2E]"
                      >
                        {t.visit.removeInterest}
                      </button>
                    </div>
                  )}

                  {errorMsg && (
                    <p
                      role="alert"
                      className="rounded-xl border border-[#8F5B18]/35 bg-[#8F5B18]/10 px-4 py-3 text-sm font-medium text-[#734710]"
                    >
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#8F5B18] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#734710] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F5B18] focus-visible:ring-offset-2"
                  >
                    {t.visit.submitCta}
                  </button>
                </form>
              ) : (
                /* Estado de Confirmação Visual Imediato */
                <div role="status" aria-live="polite" className="py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#143A61]/15 text-[#143A61]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-[#0F1E2E]">
                    {t.visit.successTitlePrefix}
                    {name.trim()}
                    {t.visit.successTitleSuffix}
                  </h3>
                  <p className="mt-2 max-w-[54ch] text-base leading-relaxed text-[#47596B]">
                    {t.visit.successBodyPrefix} ({groupSize}){' '}
                    {t.visit.successBodyFor}{' '}
                    <strong className="font-semibold text-[#0F1E2E]">
                      {visitDay}
                    </strong>
                    {interestLabel
                      ? ` ${t.visit.successBodyWithInterest} ${interestLabel}`
                      : ''}
                    {t.visit.successBodySuffix}
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={confirmMailtoUrl}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#143A61] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0E2A47]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>{t.visit.sendEmail}</span>
                    </a>

                    <a
                      href={confirmWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#143A61] bg-white px-5 py-3 text-sm font-semibold text-[#143A61] transition-colors hover:bg-[#F8FAFC]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>{t.visit.sendWhatsApp}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#D6DEE6] bg-[#F8FAFC] px-5 py-3 text-sm font-semibold text-[#0F1E2E] transition-colors hover:border-[#143A61]"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span>{t.visit.newRegistration}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
