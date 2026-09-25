export type CertificateFields = {
  name: string;
  intro: string;
  course: string;
  date: string;
  hours: string;
};

export type CertificateLines = {
  name: string;
  intro: string;
  course: string;
  details: string;
};

export const DEFAULT_FIELDS: CertificateFields = {
  name: "",
  intro: "concluiu com êxito o curso de",
  course: "Limpeza de Pele",
  date: "nos dias 26 e 27 de setembro de 2026",
  hours: "10",
};

const LOWERCASE_PARTICLES = new Set(["da", "de", "do", "das", "dos", "e"]);

export function cleanSpaces(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

// A fonte do nome é script: em caixa alta fica ilegível, então usamos iniciais maiúsculas.
export function formatStudentName(value: string): string {
  return cleanSpaces(value)
    .split(" ")
    .filter(Boolean)
    .map((word, index) => {
      const lower = word.toLocaleLowerCase("pt-BR");
      if (index > 0 && LOWERCASE_PARTICLES.has(lower)) return lower;
      // Maiúscula no início e depois de hífen ou apóstrofo: Ana-Lúcia, D'Ávila.
      return lower.replace(
        /(^|[-'’])(\p{L})/gu,
        (_, separator: string, letter: string) =>
          separator + letter.toLocaleUpperCase("pt-BR"),
      );
    })
    .join(" ");
}

export function formatDetailsLine(date: string, hours: string): string {
  const cleanDate = cleanSpaces(date);
  const cleanHours = hours.trim().replace(",", ".");
  const amount = cleanHours === "" ? NaN : Number(cleanHours);

  if (!Number.isFinite(amount) || amount <= 0) return cleanDate;

  const unit = amount === 1 ? "hora" : "horas";
  const workload = `com carga horária de ${amount.toLocaleString("pt-BR")} ${unit}`;
  return cleanDate ? `${cleanDate}, ${workload}` : workload;
}

export function prepareLines(fields: CertificateFields): CertificateLines {
  return {
    name: formatStudentName(fields.name),
    intro: cleanSpaces(fields.intro),
    course: cleanSpaces(fields.course).toLocaleUpperCase("pt-BR"),
    details: formatDetailsLine(fields.date, fields.hours),
  };
}

export function certificateFileName(fields: CertificateFields): string {
  const safe = (value: string) =>
    cleanSpaces(value.replace(/[\\/:*?"<>|\u0000-\u001f\u007f]/g, " ")).replace(
      /^\.+|\.+$/g,
      "",
    );
  const course = safe(cleanSpaces(fields.course));
  const name = safe(formatStudentName(fields.name));
  return `Certificado - ${course} - ${name}.pdf`;
}
