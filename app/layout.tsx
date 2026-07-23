import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clínica Rita Sudbrack | Estética Facial e Cuidados com a Pele",
  description:
    "Tratamentos personalizados para melasma, manchas, rejuvenescimento e qualidade da pele. Agende sua avaliação na Clínica Rita Sudbrack.",
  openGraph: {
    title: "Clínica Rita Sudbrack — Cuidado individual para a sua pele",
    description:
      "Estética facial com conhecimento, naturalidade e atendimento personalizado.",
    type: "website",
    locale: "pt_BR",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
