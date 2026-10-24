import type { Metadata } from "next";
import Link from "next/link";
import CatalogGrid from "./CatalogGrid";
import { perfumes } from "./perfumes";
import { catalogWhatsappUrl } from "./whatsapp";
import "./catalogo.css";
import SymeSignature from "../components/SymeSignature";

export const metadata: Metadata = {
  title: "Catálogo de Perfumes Árabes | Clínica Rita Sudbrack",
  description:
    "Conheça a seleção de perfumes árabes da Clínica Rita Sudbrack, com as notas de cada fragrância. Consulte valores e disponibilidade pelo WhatsApp.",
};

export default function CatalogPage() {
  return (
    <main className="course-detail-page catalog-page">
      <header className="site-header course-detail-header">
        <Link className="brand" href="/" aria-label="Clínica Rita Sudbrack">
          <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação do catálogo">
          <Link href="/">Página inicial</Link>
          <a href="#perfumes">Perfumes</a>
          <a href="#atendimento">Atendimento</a>
        </nav>
        <a
          className="header-cta"
          href={catalogWhatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {"Falar no WhatsApp "}
          <span className="button-icon" aria-hidden="true">
            <img src="/assets/whatsapp.svg" alt="" />
          </span>
        </a>
        <Link className="course-mobile-back" href="/">
          Voltar
        </Link>
      </header>

      <section className="course-detail-hero catalog-hero">
        <div className="section-shell course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <Link className="course-breadcrumb" href="/">
              {"Clínica Rita Sudbrack "}
              <span>—</span>
              {" Catálogo"}
            </Link>
            <p className="eyebrow">Catálogo de perfumes</p>
            <h1>
              Perfumaria <em>Árabe</em>
            </h1>
            <p className="lead">
              Uma seleção de {perfumes.length} fragrâncias para conhecer com
              calma, das mais doces e cremosas às florais, frutadas e
              amadeiradas.
            </p>
            <p>
              Veja as notas de cada perfume e fale com a equipe pelo WhatsApp
              para consultar valores e disponibilidade.
            </p>
            <div className="course-detail-actions">
              <a className="button" href="#perfumes">
                <span>Ver os perfumes</span>
                <span className="button-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M12 5v14M6 13l6 6 6-6" />
                  </svg>
                </span>
              </a>
              <a
                className="text-link"
                href={catalogWhatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Falar com a equipe
                <span className="text-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="catalog-hero-visual">
            <div className="course-detail-hero-visual">
              <img
                src="/assets/images/catalogo/capa-1.webp"
                alt="Modelo segurando um frasco dourado de perfume árabe"
              />
            </div>
            <img
              className="catalog-hero-inset"
              src="/assets/images/catalogo/capa-3.webp"
              alt="Modelo segurando um frasco rosa de perfume árabe"
            />
          </div>
        </div>
      </section>

      <section className="catalog-list" id="perfumes">
        <div className="section-shell">
          <div className="course-subheading">
            <div>
              <p className="eyebrow">Seleção completa</p>
              <h2>Perfumes</h2>
            </div>
            <p>
              Cada perfume traz as notas principais e uma descrição da
              fragrância. Toque em “Consultar valor” para falar sobre o perfume
              escolhido.
            </p>
          </div>
          <CatalogGrid />
          <div className="course-conversion" id="atendimento">
            <div>
              <p className="eyebrow">Atendimento</p>
              <h3>Ficou em dúvida entre mais de um perfume?</h3>
            </div>
            <div>
              <p>
                Conte para a equipe o tipo de fragrância que você gosta e receba
                ajuda para escolher. Valores e disponibilidade são informados
                pelo WhatsApp.
              </p>
              <a
                className="button button--light"
                href={catalogWhatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>Falar com a equipe</span>
                <span className="button-icon" aria-hidden="true">
                  <img src="/assets/whatsapp.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer course-detail-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
            <p>Perfumaria árabe selecionada pela Clínica Rita Sudbrack.</p>
          </div>
          <div>
            <p className="footer-title">Navegação</p>
            <nav>
              <Link href="/">Página inicial</Link>
              <a href="#perfumes">Perfumes</a>
              <a href="#atendimento">Atendimento</a>
            </nav>
          </div>
          <div>
            <p className="footer-title">Contato</p>
            <a href={catalogWhatsappUrl} target="_blank" rel="noreferrer">
              (51) 99559-9459
            </a>
            <a
              href="https://www.instagram.com/clinicaritasudbrack/"
              target="_blank"
              rel="noreferrer"
            >
              @clinicaritasudbrack
            </a>
            <p>Rua João Pessoa, 603</p>
            <p>Santa Cruz do Sul — RS</p>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>
            © 2026 Clínica Rita Sudbrack. Todos os direitos reservados.
          </span>
          <SymeSignature />
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={catalogWhatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar sobre os perfumes pelo WhatsApp"
      >
        <span className="button-icon" aria-hidden="true">
          <img src="/assets/whatsapp.svg" alt="" />
        </span>
        <span>Falar no WhatsApp</span>
      </a>
    </main>
  );
}
