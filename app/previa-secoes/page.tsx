import type { Metadata } from "next";
import ClinicHome from "../components/ClinicHome";

export const metadata: Metadata = {
  title: "Clínica Rita Sudbrack | Prévia das seções",
  robots: { index: false, follow: false },
};

export default function SectionsPreviewPage() {
  return <ClinicHome heroVariant="beige" aboutVariant="editorial" />;
}
