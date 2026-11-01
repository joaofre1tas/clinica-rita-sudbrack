import AppointmentButton from "./AppointmentButton";
import "../hero.css";

const appointmentUrl =
  "https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada.";

const links = [
  ["sobre", "Sobre"],
  ["diferenciais", "Diferenciais"],
  ["tratamentos", "Tratamentos"],
  ["cursos", "Cursos"],
  ["resultados", "Resultados"],
  ["clinica", "A Clínica"],
  ["duvidas", "Dúvidas"],
];

type SiteHeaderProps = {
  /* "/" nas páginas internas, para os links apontarem para as seções da home. */
  basePath?: string;
  className?: string;
  /* Nas páginas de curso, o botão do cabeçalho é o do curso. */
  cta?: { label: string; href: string };
};

export default function SiteHeader({
  basePath = "",
  className = "",
  cta = { label: "Agendar avaliação", href: appointmentUrl },
}: SiteHeaderProps) {
  const navLinks = links.map(([id, label]) => (
    <a key={id} href={`${basePath}#${id}`}>
      {label}
    </a>
  ));

  return (
    <header className={`site-header site-header--editorial ${className}`}>
      <a
        className="brand"
        href={`${basePath}#inicio`}
        aria-label="Clínica Rita Sudbrack"
      >
        <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navLinks}
      </nav>
      <AppointmentButton
        tone="outline"
        size="sm"
        className="appointment-cta--header"
        href={cta.href}
      >
        {cta.label}
      </AppointmentButton>
      <details className="mobile-menu">
        <summary aria-label="Abrir menu">Menu</summary>
        <nav aria-label="Navegação para celular">
          {navLinks}
          <a href={cta.href} target="_blank" rel="noreferrer">
            {cta.label}
          </a>
        </nav>
      </details>
    </header>
  );
}
