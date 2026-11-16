import { useEffect, useState, type FormEvent } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  RotateCcw,
} from 'lucide-react';
import {
  CHURCH_INFO,
  CHURCH_LOCATIONS,
  GROUP_SIZE_OPTIONS,
  VISIT_DAY_OPTIONS,
} from '../data/churchConfig';
import { Reveal } from './Reveal';

interface VisitLocationSectionProps {
  selectedMinistry: string;
}

const VISITOR_NOTES = [
  'Localização central junto à baía da Horta na Av. Marginal, nº 17.',
  'Venha como você está — nosso ambiente é acolhedor e familiar.',
  'Salas da Escola Bíblica Dominical para adultos, adolescentes e crianças.',
];

export function VisitLocationSection({
  selectedMinistry,
}: VisitLocationSectionProps) {
  const [activeLocationId, setActiveLocationId] = useState<'templo' | 'ebd'>(
    'templo'
  );
  const [copiedAddress, setCopiedAddress] = useState(false);

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [visitDay, setVisitDay] = useState(VISIT_DAY_OPTIONS[0]);
  const [groupSize, setGroupSize] = useState(GROUP_SIZE_OPTIONS[0]);
  const [note, setNote] = useState('');
  const [interest, setInterest] = useState(selectedMinistry);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const activeLocation =
    CHURCH_LOCATIONS.find((l) => l.id === activeLocationId) ??
    CHURCH_LOCATIONS[0];

  useEffect(() => {
    if (selectedMinistry) {
      setInterest(selectedMinistry);
      setSubmitted(false);
    }
  }, [selectedMinistry]);

  const formatPhoneInput = (value: string) => {
    return value.replace(/[^\d+\s()-]/g, '').slice(0, 20);
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        `${activeLocation.address}, ${activeLocation.region}`
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
      setErrorMsg('Por favor, informe seu nome para prepararmos sua recepção.');
      return;
    }

    if (digitsOnly.length < 8) {
      setErrorMsg('Informe um número de contacto ou WhatsApp válido.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setWhatsapp('');
    setVisitDay(VISIT_DAY_OPTIONS[0]);
    setGroupSize(GROUP_SIZE_OPTIONS[0]);
    setNote('');
    setInterest('');
    setErrorMsg('');
  };

  const fullSummaryMessage = `Olá! Sou ${name.trim()} (${groupSize}) e pretendo visitar a IEB Horta (${visitDay})${
    interest ? ` — interesse em ${interest}` : ''
  }${note.trim() ? `. Observação: ${note.trim()}` : '.'}`;

  const confirmWhatsAppUrl = `https://wa.me/${CHURCH_INFO.whatsappNumber}?text=${encodeURIComponent(
    fullSummaryMessage
  )}`;
  const confirmMailtoUrl = `mailto:${CHURCH_INFO.email}?subject=${encodeURIComponent(
    `Planejamento de Visita — ${name.trim()}`
  )}&body=${encodeURIComponent(
    `${fullSummaryMessage}\nContacto: ${whatsapp.trim()}`
  )}`;

  return (
    <section
      id="visita"
      aria-labelledby="visita-heading"
      className="bg-[#FAF8F4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-[#9C412A]">
            Localização &amp; Primeira Visita
          </p>
          <h2
            id="visita-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#172226] [text-wrap:balance] sm:text-4xl"
          >
            Planeje sua primeira visita
          </h2>
          <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-[#46585E]">
            Será uma alegria receber você pessoalmente na Horta. Confira os
            nossos espaços e avise qual dia pretende vir para aguardarmos por
            você.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Coluna Esquerda: Seletor de Localização e Rotas */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#DDD7CE] bg-white p-6 sm:p-8">
              <div>
                {/* Seletor entre Templo Principal e Salas da EBD 16h */}
                <div
                  role="tablist"
                  aria-label="Selecionar espaço da igreja"
                  className="grid grid-cols-2 gap-1.5 rounded-xl border border-[#DDD7CE] bg-[#EFECE5] p-1"
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
                        className={`min-h-[42px] truncate rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                          selected
                            ? 'bg-white text-[#195963] shadow-xs'
                            : 'text-[#46585E] hover:text-[#172226]'
                        }`}
                      >
                        {loc.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DDD7CE] bg-[#FAF8F4]">
                    <MapPin
                      className="h-5 w-5 text-[#195963]"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold text-[#172226]">
                      {activeLocation.title}
                    </h3>
                    <p className="mt-1 text-base font-medium text-[#195963]">
                      {activeLocation.address}
                    </p>
                    <p className="mt-0.5 text-sm text-[#46585E]">
                      {activeLocation.region}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#46585E]">
                      {activeLocation.note}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#DDD7CE] bg-[#FAF8F4] px-3 py-1.5 text-xs font-semibold text-[#172226] transition-colors hover:border-[#195963]"
                      >
                        {copiedAddress ? (
                          <>
                            <Check
                              className="h-3.5 w-3.5 text-[#195963]"
                              aria-hidden="true"
                            />
                            <span>Morada copiada</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Copiar morada</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`mailto:${CHURCH_INFO.email}`}
                        className="inline-flex min-h-[38px] items-center gap-1.5 text-xs font-semibold text-[#195963] underline-offset-2 hover:underline"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{CHURCH_INFO.email}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lista de hospitalidade separada por hairlines */}
                <ul className="mt-6 divide-y divide-[#DDD7CE] border-t border-[#DDD7CE]">
                  {VISITOR_NOTES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 py-3 text-sm leading-relaxed text-[#172226]/85"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#195963]"
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
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#195963] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12434B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Google Maps</span>
                </a>
                <a
                  href={activeLocation.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-3 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963]"
                >
                  <Navigation
                    className="h-4 w-4 shrink-0 text-[#195963]"
                    aria-hidden="true"
                  />
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Coluna Direita: Formulário de Visita Completo com Múltiplos Canais */}
          <Reveal delayMs={80} className="lg:col-span-7">
            <div className="rounded-2xl border border-[#DDD7CE] bg-white p-6 sm:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#172226]">
                      Avise que você vem
                    </h3>
                    <p className="mt-1 text-sm text-[#46585E]">
                      Leva menos de um minuto. Assim nossa equipe de recepção
                      pode dar as boas-vindas para você e sua família.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="visitor-name"
                        className="block text-sm font-medium text-[#172226]"
                      >
                        Seu nome
                      </label>
                      <input
                        id="visitor-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Maria Clara"
                        className="mt-1.5 block min-h-[48px] w-full rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2.5 text-base text-[#172226] placeholder:text-[#46585E]/60 focus:border-[#195963] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#195963]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="visitor-whatsapp"
                        className="block text-sm font-medium text-[#172226]"
                      >
                        WhatsApp / Telemóvel
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
                        placeholder="+351 9XX XXX XXX"
                        className="mt-1.5 block min-h-[48px] w-full rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2.5 text-base text-[#172226] placeholder:text-[#46585E]/60 focus:border-[#195963] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#195963]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-[#172226]">
                      Qual dia pretende nos visitar?
                    </span>
                    <div
                      role="radiogroup"
                      aria-label="Dia pretendido para a visita"
                      className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
                    >
                      {VISIT_DAY_OPTIONS.map((option) => {
                        const selected = visitDay === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => setVisitDay(option)}
                            className={`flex min-h-[48px] items-center justify-start rounded-xl border px-4 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] ${
                              selected
                                ? 'border-[#195963] bg-[#195963] text-white'
                                : 'border-[#DDD7CE] bg-[#FAF8F4] text-[#172226] hover:border-[#195963]/50'
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
                      <span className="block text-sm font-medium text-[#172226]">
                        Quem vem com você?
                      </span>
                      <div
                        role="radiogroup"
                        aria-label="Quantidade de visitantes"
                        className="mt-2 grid grid-cols-3 gap-2"
                      >
                        {GROUP_SIZE_OPTIONS.map((opt) => {
                          const active = groupSize === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              onClick={() => setGroupSize(opt)}
                              className={`min-h-[44px] rounded-xl border px-2.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                                active
                                  ? 'border-[#195963] bg-[#195963] text-white'
                                  : 'border-[#DDD7CE] bg-[#FAF8F4] text-[#172226] hover:border-[#195963]/50'
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
                        className="block text-sm font-medium text-[#172226]"
                      >
                        Observação ou pedido de oração (opcional)
                      </label>
                      <input
                        id="visitor-note"
                        name="note"
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Ex: Vamos com 2 crianças"
                        className="mt-2 block min-h-[44px] w-full rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-2 text-base text-[#172226] placeholder:text-[#46585E]/60 focus:border-[#195963] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#195963]/20"
                      />
                    </div>
                  </div>

                  {interest && (
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-4 py-3 text-sm">
                      <span>
                        Interesse selecionado:{' '}
                        <strong className="font-semibold text-[#195963]">
                          {interest}
                        </strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => setInterest('')}
                        className="min-h-[36px] shrink-0 text-xs font-semibold text-[#46585E] underline hover:text-[#172226]"
                      >
                        Remover
                      </button>
                    </div>
                  )}

                  {errorMsg && (
                    <p
                      role="alert"
                      className="rounded-xl border border-[#9C412A]/35 bg-[#9C412A]/10 px-4 py-3 text-sm font-medium text-[#803320]"
                    >
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#9C412A] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#803320] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9C412A] focus-visible:ring-offset-2"
                  >
                    Confirmar Planejamento de Visita
                  </button>
                </form>
              ) : (
                /* Estado de Confirmação Visual Imediato */
                <div role="status" aria-live="polite" className="py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#195963]/15 text-[#195963]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-[#172226]">
                    Estaremos esperando por você, {name.trim()}!
                  </h3>
                  <p className="mt-2 max-w-[54ch] text-base leading-relaxed text-[#46585E]">
                    Registramos sua intenção de visita ({groupSize}) para{' '}
                    <strong className="font-semibold text-[#172226]">
                      {visitDay}
                    </strong>
                    {interest ? ` com interesse em ${interest}` : ''}. Caso
                    queira enviar o aviso diretamente à igreja, escolha um canal
                    abaixo:
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={confirmMailtoUrl}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#195963] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12434B]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Enviar por E-mail</span>
                    </a>

                    <a
                      href={confirmWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#195963] bg-white px-5 py-3 text-sm font-semibold text-[#195963] transition-colors hover:bg-[#FAF8F4]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Enviar no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] px-5 py-3 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963]"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span>Novo registro</span>
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
