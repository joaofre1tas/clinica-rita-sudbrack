"use client";

import { useEffect, useRef } from "react";

const appointmentUrl =
  "https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada.";

export default function EditorialHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const main = hero?.closest("main");
    if (!hero || !main) return;

    const observer = new IntersectionObserver(([entry]) => {
      main.dataset.heroVisible = String(entry.isIntersecting);
    });
    observer.observe(hero);

    return () => {
      observer.disconnect();
      delete main.dataset.heroVisible;
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-editorial" id="inicio" aria-labelledby="hero-heading">
      <div className="hero-editorial-backdrop" aria-hidden="true" />

      <div className="hero-editorial-topline">
        <span>Estética facial & cuidado com a pele</span>
        <span>Santa Cruz do Sul, RS</span>
      </div>

      <p className="hero-editorial-name" aria-hidden="true">
        <span>Rita</span>
        <span>Sudbrack</span>
      </p>

      <img
        className="hero-editorial-portrait"
        src="/assets/images/rita-hero-recorte.webp"
        alt="Rita Sudbrack, esteticista e cosmetóloga"
        width="1024"
        height="1536"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-editorial-foreground" aria-hidden="true" />
      <div className="hero-editorial-shade" aria-hidden="true" />
      <div className="hero-editorial-veil" aria-hidden="true" />

      <div className="hero-editorial-content">
        <div className="hero-editorial-heading">
          <ul className="hero-editorial-tags" aria-label="Nosso cuidado">
            <li>Individual</li>
            <li>Natural</li>
          </ul>
          <h1 id="hero-heading">
            Sua beleza,
            <br />
            por natureza.
          </h1>
        </div>

        <div className="hero-editorial-conversion">
          <p>
            Cada pele tem uma história. Um cuidado personalizado para valorizar a
            sua, com conhecimento e naturalidade.
          </p>
          <a className="hero-editorial-cta" href={appointmentUrl} target="_blank" rel="noreferrer">
            Agendar minha avaliação
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
          <a className="hero-editorial-link" href="#tratamentos">
            Conhecer os tratamentos
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14m-6-6 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-editorial-footnote">
        <span>Conhecimento. Sensibilidade. Você.</span>
        <a href="#sobre" aria-label="Conheça a Rita Sudbrack">
          <span>Conheça a Rita</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14m-6-6 6 6 6-6" />
          </svg>
        </a>
        <span>Beleza sem excessos.</span>
      </div>
    </section>
  );
}
