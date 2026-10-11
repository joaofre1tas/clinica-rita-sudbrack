"use client";

import { useState } from "react";

const results = Array.from({ length: 9 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    before: `/assets/images/results/${number}-antes.jpg`,
    after: `/assets/images/results/${number}-depois.jpg`,
  };
});

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
    >
      <path
        d={direction === "left" ? "M15 5 8 12l7 7" : "m9 5 7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResultsCarousel() {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [comparisons, setComparisons] = useState(() => results.map(() => 50));
  const visible = [0, 1, 2].map((offset) => (start + offset) % results.length);

  function move(delta: number) {
    setDirection(delta > 0 ? "next" : "previous");
    setStart((current) => (current + delta + results.length) % results.length);
  }

  function choose(index: number) {
    setDirection(index >= start ? "next" : "previous");
    setStart(index);
  }

  return (
    <div
      className="results-carousel"
      aria-roledescription="carrossel"
      aria-label="Comparações de antes e depois"
    >
      <div key={start} className={`results-carousel-grid is-${direction}`}>
        {visible.map((index) => (
          <article key={index} className="comparison-card">
            <div className="comparison-frame">
              <img
                className="comparison-image comparison-image--before"
                src={results[index].before}
                alt={`Antes do resultado ${index + 1}`}
                draggable={false}
              />
              <div
                className="comparison-after"
                style={{ clipPath: `inset(0 0 0 ${comparisons[index]}%)` }}
                aria-hidden="true"
              >
                <img
                  className="comparison-image comparison-image--after"
                  src={results[index].after}
                  alt=""
                  draggable={false}
                />
              </div>
              <span className="comparison-label comparison-label--before">
                Antes
              </span>
              <span className="comparison-label comparison-label--after">
                Depois
              </span>
              <div
                className="comparison-divider"
                style={{ left: `${comparisons[index]}%` }}
                aria-hidden="true"
              >
                <span className="comparison-handle">
                  <svg viewBox="0 0 34 20" width="26" height="16" fill="none">
                    <path
                      d="M12 4 5 10l7 6M22 4l7 6-7 6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                className="comparison-range"
                type="range"
                min="0"
                max="100"
                value={comparisons[index]}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setComparisons((current) =>
                    current.map((comparison, i) =>
                      i === index ? value : comparison,
                    ),
                  );
                }}
                aria-label={`Comparar antes e depois do resultado ${index + 1}`}
              />
            </div>
          </article>
        ))}
      </div>
      <div className="results-carousel-controls">
        <button
          className="results-carousel-arrow"
          type="button"
          onClick={() => move(-1)}
          aria-label="Voltar um resultado"
        >
          <Arrow direction="left" />
        </button>
        <div className="results-carousel-dots" aria-label="Escolher resultado">
          {results.map((_, index) => (
            <button
              key={index}
              className={index === start ? "is-active" : ""}
              type="button"
              onClick={() => choose(index)}
              aria-label={`Começar pelo resultado ${index + 1}`}
              aria-current={index === start ? "true" : undefined}
            />
          ))}
        </div>
        <span className="results-carousel-counter" aria-live="polite">
          {String(start + 1).padStart(2, "0")} /{" "}
          {String(results.length).padStart(2, "0")}
        </span>
        <button
          className="results-carousel-arrow"
          type="button"
          onClick={() => move(1)}
          aria-label="Avançar um resultado"
        >
          <Arrow direction="right" />
        </button>
      </div>
      <p className="legal-note">
        Os resultados variam conforme as características da pele, o tratamento
        realizado, os cuidados adotados e a resposta individual de cada
        paciente.
      </p>
    </div>
  );
}
