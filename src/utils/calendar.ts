/**
 * Utilitários de data e calendário para o fuso horário dos Açores (Atlantic/Azores).
 */

export interface NextSundayInfo {
  formattedDate: string;
  isToday: boolean;
  celebrationTime: string;
  ebdTime: string;
  isSummerSchedule: boolean;
}

export function getNextSundayDate(referenceDate = new Date()): Date {
  const date = new Date(referenceDate);
  const dayOfWeek = date.getDay(); // 0 = Domingo
  const daysToAdd = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
  date.setDate(date.getDate() + daysToAdd);
  date.setHours(11, 15, 0, 0);

  // Se for domingo e já passou das 12h30, aponta para o próximo domingo
  if (dayOfWeek === 0 && referenceDate.getHours() >= 13) {
    date.setDate(date.getDate() + 7);
  }

  return date;
}

export function getNextSundayInfo(intlLocale = 'pt-PT'): NextSundayInfo {
  const now = new Date();
  const nextSunday = getNextSundayDate(now);
  const month = nextSunday.getMonth(); // 0-indexed (6 = Julho, 7 = Agosto)
  const isSummerSchedule = month === 6 || month === 7;
  const usesHNotation =
    intlLocale.startsWith('pt') || intlLocale.startsWith('fr');

  const celebrationTime = isSummerSchedule
    ? usesHNotation
      ? '11h00'
      : '11:00'
    : usesHNotation
      ? '11h15'
      : '11:15';
  const ebdTime = usesHNotation ? '10h00' : '10:00';

  const isToday =
    now.getFullYear() === nextSunday.getFullYear() &&
    now.getMonth() === nextSunday.getMonth() &&
    now.getDate() === nextSunday.getDate();

  const formattedDate = new Intl.DateTimeFormat(intlLocale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(nextSunday);

  const capitalized =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return {
    formattedDate: capitalized,
    isToday,
    celebrationTime,
    ebdTime,
    isSummerSchedule,
  };
}

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function formatIcsLocalDate(date: Date): string {
  return (
    `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}` +
    `T${pad(date.getHours())}${pad(date.getMinutes())}00`
  );
}

export interface CalendarIcsTexts {
  prodId: string;
  summary: string;
  description: string;
  fileName: string;
}

const DEFAULT_ICS_TEXTS: CalendarIcsTexts = {
  prodId: '-//IEB Horta//Agenda Dominical//PT',
  summary: 'Culto de Celebração — IEB Horta',
  description:
    'Escola Bíblica Dominical às 10h00 e Culto de Celebração na Igreja Evangélica Baptista da Horta. Portas abertas!',
  fileName: 'culto-ieb-horta.ics',
};

/**
 * Gera e descarrega um ficheiro .ics válido para o próximo Culto de Celebração dominical.
 */
export function downloadSundayWorshipIcs(
  icsTexts: CalendarIcsTexts = DEFAULT_ICS_TEXTS
): void {
  const info = getNextSundayInfo();
  const start = getNextSundayDate();
  if (info.isSummerSchedule) {
    start.setHours(11, 0, 0, 0);
  } else {
    start.setHours(11, 15, 0, 0);
  }

  const end = new Date(start.getTime() + 90 * 60 * 1000);
  const dtStamp = formatIcsLocalDate(new Date());

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:${icsTexts.prodId}`,
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:culto-domingo-${start.getTime()}@iebhorta.pt`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${formatIcsLocalDate(start)}`,
    `DTEND:${formatIcsLocalDate(end)}`,
    `SUMMARY:${icsTexts.summary}`,
    `DESCRIPTION:${icsTexts.description}`,
    'LOCATION:Av. Marginal\\, n.º 17\\, 9900-114 Horta\\, Açores\\, Portugal',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = icsTexts.fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
