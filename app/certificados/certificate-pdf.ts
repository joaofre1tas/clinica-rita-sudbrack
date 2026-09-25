import type * as PdfLib from "pdf-lib";

type Fontkit = Parameters<PdfLib.PDFDocument["registerFontkit"]>[0];
type Bytes = ArrayBuffer | Uint8Array;

export type CertificateAssets = {
  base: Bytes;
  pinyon: Bytes;
  redondaRegular: Bytes;
  redondaMedium: Bytes;
};

export type CertificateText = {
  name: string;
  intro: string;
  course: string;
  details: string;
};

const MM = 2.834645669;
const CENTER_X_MM = 192.5;
const MAX_WIDTH_MM = 170;

// Escreve só os textos variáveis por cima do certificado-base.pdf, sem alterar o resto.
export async function renderCertificate(
  pdfLib: typeof PdfLib,
  fontkit: Fontkit,
  assets: CertificateAssets,
  text: CertificateText,
): Promise<Uint8Array> {
  const { PDFDocument, rgb } = pdfLib;
  const INK = rgb(0x27 / 255, 0x1f / 255, 0x19 / 255); // #271f19
  const TXT = rgb(0x38 / 255, 0x2f / 255, 0x28 / 255); // #382f28

  const doc = await PDFDocument.load(assets.base);
  doc.registerFontkit(fontkit);
  const pinyon = await doc.embedFont(assets.pinyon, { subset: true });
  // Redonda é CFF: o subset do pdf-lib pode corromper glifos, então embute inteira.
  const redondaRegular = await doc.embedFont(assets.redondaRegular);
  const redondaMedium = await doc.embedFont(assets.redondaMedium);

  const page = doc.getPage(0);
  const { height } = page.getSize();

  function drawCentered(
    line: string,
    font: PdfLib.PDFFont,
    sizeMm: number,
    baselineFromTopMm: number,
    color: PdfLib.RGB,
  ) {
    if (!line) return;
    let size = sizeMm * MM;
    let width = font.widthOfTextAtSize(line, size);
    if (width > MAX_WIDTH_MM * MM) {
      size *= (MAX_WIDTH_MM * MM) / width;
      width = font.widthOfTextAtSize(line, size);
    }
    page.drawText(line, {
      x: CENTER_X_MM * MM - width / 2,
      y: height - baselineFromTopMm * MM,
      size,
      font,
      color,
    });
  }

  drawCentered(text.name, pinyon, 14.5, 114.25, INK);
  drawCentered(text.intro, redondaRegular, 4.3, 129.07, TXT);
  drawCentered(text.course, redondaMedium, 7.4, 138.38, INK);
  drawCentered(text.details, redondaRegular, 3.9, 146.05, TXT);

  return doc.save();
}
