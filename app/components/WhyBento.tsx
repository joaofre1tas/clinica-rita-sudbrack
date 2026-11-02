"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import AppointmentButton from "./AppointmentButton";
import "../why-bento.css";

const appointmentUrl =
  "https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada.";

export default function WhyBento({ children }: { children?: ReactNode }) {
  const [position, setPosition] = useState(50);

  return (
    <section
      className="why-bento"
      id="diferenciais"
      aria-labelledby="why-bento-title"
    >
      <div className="section-shell">
        <header className="why-bento-heading">
          <p className="eyebrow">Por que escolher a clínica</p>
          <h2 id="why-bento-title">Cuidado que considera você por inteiro.</h2>
        </header>

        <div className="why-bento-grid">
          <article className="why-tile why-tile--result">
            <img
              className="why-compare-image"
              src="/assets/images/results/03-antes.jpg"
              alt="Pele com manchas antes do tratamento"
              loading="lazy"
            />
            <div
              className="why-compare-after"
              style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            >
              <img
                className="why-compare-image"
                src="/assets/images/results/03-depois.jpg"
                alt="A mesma pele, com tom mais uniforme, depois do tratamento"
                loading="lazy"
              />
            </div>
            <span className="why-compare-label">Antes</span>
            <span className="why-compare-label why-compare-label--after">
              Depois
            </span>
            <span
              className="why-compare-divider"
              style={{ left: `${position}%` }}
              aria-hidden="true"
            >
              <span className="why-compare-handle">
                <svg viewBox="0 0 24 24">
                  <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
                </svg>
              </span>
            </span>
            <input
              className="why-compare-range"
              type="range"
              min="0"
              max="100"
              value={position}
              aria-label="Comparar antes e depois"
              onChange={(event) => setPosition(Number(event.target.value))}
            />
            <div className="why-result-caption">
              <h3>Resultados naturais e progressivos</h3>
            </div>
          </article>

          <article className="why-tile why-tile--evaluation">
            <h3>Avaliação personalizada antes de qualquer indicação</h3>
            <AppointmentButton size="sm" href={appointmentUrl}>
              Agendar avaliação
            </AppointmentButton>
          </article>

          <article className="why-tile why-tile--welcome">
            <h3>Experiência acolhedora e individualizada</h3>
            <img className="why-welcome-photo" src="/assets/images/editorial/acolhimento.webp" alt="Mãos em gesto de acolhimento" loading="lazy" />
          </article>

          <article className="why-tile why-tile--plan">
            <div className="why-faces" aria-hidden="true">
              <img
                src="/assets/images/editorial/manchas.webp"
                alt=""
                loading="lazy"
              />
              <img
                src="/assets/images/editorial/vico.webp"
                alt=""
                loading="lazy"
              />
              <img
                src="/assets/images/editorial/flacidez.webp"
                alt=""
                loading="lazy"
              />
            </div>
            <h3>Planejamento conforme as necessidades reais da pele</h3>
          </article>

          <article className="why-tile why-tile--space">
            <img
              src="/assets/images/clinica-sala.webp"
              alt="Sala de atendimento da clínica, com maca e iluminação suave"
              loading="lazy"
            />
            <h3>Ambiente confortável e reservado</h3>
          </article>

          <article className="why-tile why-tile--knowledge">
            <h3>Comunicação baseada em conhecimento e saúde</h3>
            <span className="why-since" aria-hidden="true">
              Desde 2016
            </span>
          </article>

          <article className="why-tile why-tile--care">
            <ul>
              <li>Acompanhamento durante o processo</li>
              <li>Método especializado para o controle do melasma</li>
              <li>Integração entre procedimentos e cuidados cotidianos</li>
            </ul>
          </article>
        </div>
        {children}
      </div>
    </section>
  );
}
