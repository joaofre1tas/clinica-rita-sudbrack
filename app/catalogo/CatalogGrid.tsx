"use client";

import { useMemo, useState } from "react";
import { perfumes } from "./perfumes";
import { perfumeWhatsappUrl } from "./whatsapp";

function normalize(value: string): string {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

const searchable = perfumes.map((perfume) => ({
  perfume,
  text: normalize(`${perfume.name} ${perfume.notes} ${perfume.tagline}`),
}));

export default function CatalogGrid() {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return perfumes;
    return searchable
      .filter(({ text }) => terms.every((term) => text.includes(term)))
      .map(({ perfume }) => perfume);
  }, [query]);

  return (
    <>
      <div className="catalog-toolbar">
        <label className="catalog-search">
          <span className="catalog-search-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </span>
          <span className="catalog-search-label">Buscar por nome ou nota</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por nome ou nota"
            autoComplete="off"
            spellCheck={false}
          />
        </label>
        <p className="catalog-count" role="status">
          {visible.length === perfumes.length
            ? `${perfumes.length} perfumes`
            : `${visible.length} de ${perfumes.length} perfumes`}
        </p>
      </div>

      {visible.length === 0 ? (
        <div className="catalog-empty">
          <p>Nenhum perfume encontrado para “{query.trim()}”.</p>
          <button type="button" onClick={() => setQuery("")}>
            Ver todos os perfumes
          </button>
        </div>
      ) : (
        <ul className="catalog-grid">
          {visible.map((perfume) => (
            <li className="catalog-card" key={perfume.slug}>
              <div className="catalog-card-image">
                <img
                  src={`/assets/images/catalogo/${perfume.slug}.webp`}
                  alt={`Frasco do perfume ${perfume.name}`}
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="catalog-card-body">
                <h3>{perfume.name}</h3>
                <p className="catalog-card-notes">{perfume.notes}</p>
                {perfume.tagline && (
                  <p className="catalog-card-tagline">{perfume.tagline}</p>
                )}
              </div>
              <a
                className="button catalog-card-button"
                href={perfumeWhatsappUrl(perfume.name)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Consultar valor do perfume ${perfume.name} pelo WhatsApp`}
              >
                <span>Consultar valor</span>
                <span className="button-icon" aria-hidden="true">
                  <img src="/assets/whatsapp.svg" alt="" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
