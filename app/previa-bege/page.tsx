import type { Metadata } from "next";
import ClinicHome from "../components/ClinicHome";

export const metadata: Metadata = {
  title: "Clínica Rita Sudbrack | Prévia bege",
  robots: { index: false, follow: false },
};

export default function BeigePreviewPage() {
  return <ClinicHome heroVariant="beige" />;
}
