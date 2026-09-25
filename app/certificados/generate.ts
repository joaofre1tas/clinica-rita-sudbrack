import {
  renderCertificate,
  type CertificateAssets,
} from "./certificate-pdf";
import {
  certificateFileName,
  prepareLines,
  type CertificateFields,
} from "./format";

let assetsPromise: Promise<CertificateAssets> | null = null;

async function fetchBytes(url: string): Promise<ArrayBuffer> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Não foi possível carregar ${url}`);
  return response.arrayBuffer();
}

// Mantém os arquivos só em memória enquanto a página está aberta.
function loadAssets(): Promise<CertificateAssets> {
  assetsPromise ??= Promise.all([
    fetchBytes("/certificados/certificado-base.pdf"),
    fetchBytes("/certificados/PinyonScript-Regular.ttf"),
    fetchBytes("/assets/fonts/redonda-regular.otf"),
    fetchBytes("/assets/fonts/redonda-medium.otf"),
  ])
    .then(([base, pinyon, redondaRegular, redondaMedium]) => ({
      base,
      pinyon,
      redondaRegular,
      redondaMedium,
    }))
    .catch((error) => {
      assetsPromise = null;
      throw error;
    });
  return assetsPromise;
}

export async function generateCertificate(
  fields: CertificateFields,
): Promise<{ blob: Blob; fileName: string }> {
  const [pdfLib, fontkitModule, assets] = await Promise.all([
    import("pdf-lib"),
    import("@pdf-lib/fontkit"),
    loadAssets(),
  ]);
  const bytes = await renderCertificate(
    pdfLib,
    fontkitModule.default,
    assets,
    prepareLines(fields),
  );
  return {
    blob: new Blob([bytes as BlobPart], { type: "application/pdf" }),
    fileName: certificateFileName(fields),
  };
}
