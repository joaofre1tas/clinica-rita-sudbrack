import type { Metadata } from "next";
import CertificateGenerator from "./CertificateGenerator";
import "./certificados.css";

export const metadata: Metadata = {
  title: "Gerador de certificados | Clínica Rita Sudbrack",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function CertificadosPage() {
  return <CertificateGenerator />;
}
