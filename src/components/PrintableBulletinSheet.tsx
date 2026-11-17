import { useEffect, useState } from 'react';
import { Check, Download, Printer, X } from 'lucide-react';
import {
  CHURCH_INFO,
  NOVEMBER_AGENDA,
  NOVEMBER_PRAYER_IDS,
} from '../data/churchConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface PrintableBulletinContentProps {
  idPrefix?: string;
}

export function PrintableBulletinContent({
  idPrefix = 'bulletin-sheet',
}: PrintableBulletinContentProps) {
  const { t } = useLanguage();

  return (
    <article
      id={idPrefix}
      className="mx-auto w-full max-w-[794px] bg-white text-[#172226]"
    >
      {/* Cabeçalho Editorial do Boletim */}
      <header className="flex flex-col gap-4 border-b-2 border-[#195963] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3.5">
          <img
            src={CHURCH_INFO.logos.circularSeal}
            alt={t.about.sealAlt}
            className="h-14 w-14 shrink-0 object-contain"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9C412A]">
              {t.bulletin.kicker}
            </p>
            <h2 className="font-display text-xl font-bold text-[#172226] sm:text-2xl">
              {CHURCH_INFO.fullName}
            </h2>
            <p className="text-xs text-[#46585E]">{CHURCH_INFO.affiliation}</p>
          </div>
        </div>

        <div className="text-xs leading-relaxed text-[#46585E] sm:text-right">
          <p className="font-semibold text-[#195963]">
            {t.bulletin.printModal.venueHeader}
          </p>
          <p>{t.bulletin.printModal.hqHeader}</p>
          <p className="tabular-nums">
            {CHURCH_INFO.pastor} · {CHURCH_INFO.pastorPhoneDisplay} ·{' '}
            {CHURCH_INFO.email}
          </p>
        </div>
      </header>

      {/* Bloco 1: Agenda de Novembro + Atividades Semanais */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12">
        <section className="md:col-span-7">
          <h3 className="border-b border-[#DDD7CE] pb-2 font-display text-base font-bold uppercase tracking-wide text-[#195963]">
            {t.bulletin.tabs.agenda}
          </h3>
          <ul className="divide-y divide-[#DDD7CE]">
            {NOVEMBER_AGENDA.map((item) => {
              const localized = t.bulletin.agendaItems[item.id];
              return (
                <li
                  key={item.id}
                  className="print-avoid-break flex items-baseline gap-4 py-2.5"
                >
                  <span
                    className={`w-14 shrink-0 font-display text-base font-bold tabular-nums ${
                      item.isHighlight ? 'text-[#9C412A]' : 'text-[#195963]'
                    }`}
                  >
                    {item.dayMonth}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#46585E]">
                      {localized.weekday}
                    </p>
                    <p className="font-display text-sm font-semibold text-[#172226]">
                      {localized.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#46585E]">
                      {localized.detail}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="space-y-5 md:col-span-5">
          <div className="print-avoid-break rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] p-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[#9C412A]">
              {t.bulletin.activitiesCard.kicker}
            </h3>
            <ul className="mt-2.5 divide-y divide-[#DDD7CE] border-t border-[#DDD7CE]">
              {t.bulletin.activitiesCard.rows.map((row) => (
                <li
                  key={`${row.day}-${row.label}`}
                  className="flex items-baseline justify-between gap-2 py-2 text-xs"
                >
                  <div>
                    <span className="font-semibold text-[#172226]">
                      {row.day}:
                    </span>{' '}
                    <span className="text-[#46585E]">{row.label}</span>
                  </div>
                  <span className="shrink-0 font-display font-bold tabular-nums text-[#195963]">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-2.5 text-[11px] leading-relaxed text-[#46585E]">
              {t.bulletin.activitiesCard.venueNote}
            </p>
          </div>

          <div className="print-avoid-break rounded-xl border border-[#DDD7CE] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9C412A]">
              {t.bulletin.thanksgivingDinner.dateShort}
            </p>
            <h4 className="mt-1 font-display text-base font-bold text-[#172226]">
              {t.bulletin.thanksgivingDinner.title}
            </h4>
            <p className="mt-1 text-xs leading-relaxed text-[#46585E]">
              {t.bulletin.thanksgivingDinner.description}
            </p>
            <dl className="mt-2.5 divide-y divide-[#DDD7CE] border-t border-[#DDD7CE] text-xs">
              {t.bulletin.thanksgivingDinner.details.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-2 py-1.5"
                >
                  <dt className="text-[#46585E]">{row.label}</dt>
                  <dd className="text-right font-semibold text-[#172226]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>

      {/* Bloco 2: Anúncios, Campanha Juntos & Celeiro */}
      <section className="print-avoid-break mt-6 border-t border-[#DDD7CE] pt-5">
        <h3 className="font-display text-base font-bold uppercase tracking-wide text-[#195963]">
          {t.bulletin.tabs.announcements}
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-[#DDD7CE] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9C412A]">
              {t.bulletin.venueAnnouncement.kicker}
            </p>
            <h4 className="mt-1 font-display text-sm font-bold text-[#172226]">
              {t.bulletin.venueAnnouncement.title}
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-[#46585E]">
              {t.bulletin.venueAnnouncement.body1}
            </p>
          </div>

          <div className="rounded-xl border border-[#DDD7CE] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9C412A]">
              {t.bulletin.juntosCampaign.kicker}
            </p>
            <h4 className="mt-1 font-display text-sm font-bold text-[#172226]">
              {t.bulletin.juntosCampaign.title}
            </h4>
            <p className="mt-1.5 text-xs text-[#172226]">
              <strong>{t.bulletin.juntosCampaign.tier1Title}:</strong>{' '}
              {t.bulletin.juntosCampaign.tier1Items}
            </p>
            <p className="mt-1 text-xs text-[#46585E]">
              <strong>{t.bulletin.juntosCampaign.tier2Title}:</strong>{' '}
              {t.bulletin.juntosCampaign.tier2Items}
            </p>
          </div>

          <div className="rounded-xl border border-[#DDD7CE] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9C412A]">
              {t.bulletin.celeiro.kicker}
            </p>
            <h4 className="mt-1 font-display text-sm font-bold text-[#172226]">
              {t.bulletin.celeiro.title}
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-[#46585E]">
              {t.bulletin.celeiro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 3: 11 Motivos de Oração */}
      <section className="print-avoid-break mt-6 border-t border-[#DDD7CE] pt-5">
        <h3 className="font-display text-base font-bold uppercase tracking-wide text-[#195963]">
          {t.bulletin.tabs.prayer}
        </h3>
        <ol className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
          {NOVEMBER_PRAYER_IDS.map((id, idx) => (
            <li
              key={id}
              className="flex items-start gap-2.5 border-b border-[#EFECE5] pb-1.5 text-xs leading-relaxed"
            >
              <span className="shrink-0 font-display font-bold tabular-nums text-[#9C412A]">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="text-[#172226]">
                {t.bulletin.prayerRequests[id]}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Bloco 4: Momento de Gratidão + Aniversariantes */}
      <section className="print-avoid-break mt-6 grid grid-cols-1 gap-6 border-t border-[#DDD7CE] pt-5 sm:grid-cols-12">
        <div className="sm:col-span-8">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9C412A]">
            {t.bulletin.gratitude.kicker}
          </p>
          <h3 className="mt-1 font-display text-base font-bold text-[#172226]">
            {t.bulletin.gratitude.title}
          </h3>
          <div className="mt-2 space-y-2 text-xs leading-relaxed text-[#46585E]">
            {t.bulletin.gratitude.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          <p className="mt-3 font-display text-xs font-semibold text-[#195963]">
            {t.bulletin.gratitude.signature}
          </p>
          <p className="mt-1 font-display text-xs font-semibold text-[#172226]">
            {t.bulletin.gratitude.verse}
          </p>
        </div>

        <div className="rounded-xl border border-[#DDD7CE] bg-[#FAF8F4] p-4 sm:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9C412A]">
            {t.bulletin.birthdays.kicker}
          </p>
          <h3 className="mt-1 font-display text-sm font-bold text-[#172226]">
            {t.bulletin.birthdays.title}
          </h3>
          <div className="mt-3 flex items-baseline justify-between border-y border-[#DDD7CE] py-2.5 text-sm">
            <span className="font-display font-semibold text-[#172226]">
              Cristiane Lima
            </span>
            <span className="font-display font-bold tabular-nums text-[#195963]">
              09/11
            </span>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-[#46585E]">
            {t.bulletin.birthdays.updateNote}
          </p>
        </div>
      </section>
    </article>
  );
}

interface PrintableBulletinModalProps {
  open: boolean;
  onClose: () => void;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function PrintableBulletinModal({
  open,
  onClose,
}: PrintableBulletinModalProps) {
  const { t, language } = useLanguage();
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleTriggerPrint = () => {
    try {
      window.print();
    } catch {
      // Fallback tratado pelo botão de download da ficha em HTML
    }
  };

  const handleDownloadPrintableHtml = () => {
    const agendaRows = NOVEMBER_AGENDA.map((item) => {
      const loc = t.bulletin.agendaItems[item.id];
      return `<li><strong>${escapeHtml(item.dayMonth)}</strong> (${escapeHtml(loc.weekday)}) — <strong>${escapeHtml(loc.title)}</strong><br/><span>${escapeHtml(loc.detail)}</span></li>`;
    }).join('');

    const weeklyRows = t.bulletin.activitiesCard.rows
      .map(
        (row) =>
          `<li><strong>${escapeHtml(row.day)} · ${escapeHtml(row.time)}</strong> — ${escapeHtml(row.label)}</li>`
      )
      .join('');

    const prayerRows = NOVEMBER_PRAYER_IDS.map((id, i) => {
      return `<li><strong>${String(i + 1).padStart(2, '0')}.</strong> ${escapeHtml(t.bulletin.prayerRequests[id])}</li>`;
    }).join('');

    const htmlDoc = `<!doctype html>
<html lang="${escapeHtml(language)}">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(CHURCH_INFO.fullName)} — ${escapeHtml(t.bulletin.kicker)}</title>
<style>
  @page { size: A4; margin: 14mm; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #172226; max-width: 780px; margin: 24px auto; padding: 0 16px; line-height: 1.5; }
  header { border-bottom: 2px solid #195963; padding-bottom: 12px; margin-bottom: 18px; }
  h1 { margin: 4px 0; font-size: 22px; }
  h2 { font-size: 15px; text-transform: uppercase; letter-spacing: 0.04em; color: #195963; border-bottom: 1px solid #DDD7CE; padding-bottom: 4px; margin-top: 20px; }
  .kicker { color: #9C412A; font-size: 12px; font-weight: 700; text-transform: uppercase; margin: 0; }
  ul, ol { padding-left: 18px; }
  li { margin-bottom: 8px; font-size: 13px; }
  .box { border: 1px solid #DDD7CE; background: #FAF8F4; padding: 12px 14px; border-radius: 8px; margin-top: 12px; font-size: 13px; }
  .print-btn { margin-bottom: 18px; padding: 10px 16px; background: #195963; color: #fff; border: 0; border-radius: 8px; font-weight: 600; cursor: pointer; }
  @media print { .print-btn { display: none; } body { margin: 0; padding: 0; } }
</style>
</head>
<body>
  <button class="print-btn" onclick="window.print()">${escapeHtml(t.bulletin.printModal.printNow)}</button>
  <header>
    <p class="kicker">${escapeHtml(t.bulletin.kicker)}</p>
    <h1>${escapeHtml(CHURCH_INFO.fullName)}</h1>
    <p style="margin:4px 0;font-size:13px;">${escapeHtml(t.bulletin.printModal.venueHeader)} · ${escapeHtml(t.bulletin.printModal.hqHeader)}</p>
    <p style="margin:0;font-size:13px;">${escapeHtml(CHURCH_INFO.pastor)} · ${escapeHtml(CHURCH_INFO.pastorPhoneDisplay)} · ${escapeHtml(CHURCH_INFO.email)}</p>
  </header>
  <h2>${escapeHtml(t.bulletin.tabs.agenda)}</h2>
  <ul>${agendaRows}</ul>
  <h2>${escapeHtml(t.bulletin.activitiesCard.kicker)}</h2>
  <ul>${weeklyRows}</ul>
  <div class="box">
    <strong>${escapeHtml(t.bulletin.thanksgivingDinner.title)}</strong> (${escapeHtml(t.bulletin.thanksgivingDinner.dateShort)})<br/>
    ${escapeHtml(t.bulletin.thanksgivingDinner.summary)}
  </div>
  <h2>${escapeHtml(t.bulletin.tabs.announcements)}</h2>
  <p style="font-size:13px;"><strong>${escapeHtml(t.bulletin.venueAnnouncement.title)}:</strong> ${escapeHtml(t.bulletin.venueAnnouncement.body1)}</p>
  <p style="font-size:13px;"><strong>${escapeHtml(t.bulletin.juntosCampaign.title)}:</strong> ${escapeHtml(t.bulletin.juntosCampaign.tier1Title)} — ${escapeHtml(t.bulletin.juntosCampaign.tier1Items)} | ${escapeHtml(t.bulletin.juntosCampaign.tier2Title)} — ${escapeHtml(t.bulletin.juntosCampaign.tier2Items)}</p>
  <p style="font-size:13px;"><strong>${escapeHtml(t.bulletin.celeiro.title)}:</strong> ${escapeHtml(t.bulletin.celeiro.description)}</p>
  <h2>${escapeHtml(t.bulletin.tabs.prayer)}</h2>
  <ol style="list-style:none;padding-left:0;">${prayerRows}</ol>
  <h2>${escapeHtml(t.bulletin.tabs.gratitude)}</h2>
  <p style="font-size:13px;"><strong>${escapeHtml(t.bulletin.gratitude.title)}</strong></p>
  ${t.bulletin.gratitude.paragraphs.map((p) => `<p style="font-size:13px;">${escapeHtml(p)}</p>`).join('')}
  <p style="font-size:13px;font-weight:700;color:#195963;">${escapeHtml(t.bulletin.gratitude.signature)}</p>
  <p style="font-size:13px;font-style:italic;">${escapeHtml(t.bulletin.gratitude.verse)}</p>
  <div class="box"><strong>${escapeHtml(t.bulletin.birthdays.kicker)}:</strong> Cristiane Lima — 09/11 · ${escapeHtml(t.bulletin.birthdays.updateNote)}</div>
</body>
</html>`;

    const blob = new Blob([htmlDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'boletim-novembro-2026-ieb-horta.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="printable-bulletin-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B2A30]/80 p-3 sm:p-6 print:static print:block print:bg-white print:p-0"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#DDD7CE] bg-[#EFECE5] text-[#172226] shadow-2xl print:max-h-none print:max-w-none print:overflow-visible print:rounded-none print:border-none print:bg-white print:shadow-none"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Barra Superior de Ações (oculta na impressão) */}
        <div className="no-print flex flex-col gap-3 border-b border-[#DDD7CE] bg-[#FAF8F4] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <h2
              id="printable-bulletin-modal-title"
              className="font-display text-sm font-semibold text-[#172226] sm:text-base"
            >
              {t.bulletin.printModal.previewTitle}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.bulletin.printModal.close}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#172226] hover:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] sm:hidden"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleTriggerPrint}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#195963] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#12434B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] sm:flex-none"
            >
              <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.bulletin.printModal.printNow}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadPrintableHtml}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-[#DDD7CE] bg-white px-4 py-2 text-sm font-semibold text-[#172226] transition-colors hover:border-[#195963] hover:text-[#195963] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] sm:flex-none"
            >
              {downloaded ? (
                <>
                  <Check className="h-4 w-4 shrink-0 text-[#195963]" aria-hidden="true" />
                  <span>{t.bulletin.printModal.savedNotice}</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 shrink-0 text-[#195963]" aria-hidden="true" />
                  <span>{t.bulletin.printModal.downloadHtml}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label={t.bulletin.printModal.close}
              className="hidden h-11 w-11 items-center justify-center rounded-xl border border-[#DDD7CE] bg-white text-[#172226] transition-colors hover:bg-[#EFECE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#195963] sm:inline-flex"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Folha A4 com o Boletim Completo */}
        <div className="overflow-y-auto p-4 sm:p-8 print:overflow-visible print:p-0">
          <div className="rounded-xl border border-[#DDD7CE] bg-white p-5 shadow-xs sm:p-8 print:rounded-none print:border-none print:p-0 print:shadow-none">
            <PrintableBulletinContent idPrefix="bulletin-modal-sheet" />
          </div>
        </div>
      </div>
    </div>
  );
}
