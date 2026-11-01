"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import "../method-stage.css";

type Step = {
  title: string;
  text: string;
  /* Quanto o card se desloca na rolagem: valores diferentes criam a profundidade. */
  depth: number;
  icon: ReactNode;
};

const steps: Step[] = [
  {
    title: "Compreensão da sua pele",
    text: "O atendimento começa com uma conversa detalhada sobre suas queixas, histórico, rotina, cuidados atuais e objetivos. A pele é analisada com atenção para que a indicação não se limite ao que aparece na superfície.",
    depth: 0.1,
    icon: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
  },
  {
    title: "Plano personalizado",
    text: "Depois da avaliação, você conhece as possibilidades mais coerentes com o seu caso, entende o motivo de cada indicação e quais etapas podem fazer parte do processo.",
    depth: 0.08,
    icon: (
      <>
        <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
        <path d="M9 4.5V3h6v1.5M9 10h6M9 13.5h6M9 17h3.5" />
      </>
    ),
  },
  {
    title: "Execução cuidadosa",
    text: "Os procedimentos são realizados com atenção, segurança e respeito às características da sua pele, buscando uma evolução natural e compatível com você.",
    depth: -0.16,
    icon: (
      <path d="M12 3c.6 4.8 3.2 7.4 8 8-4.8.6-7.4 3.2-8 8-.6-4.8-3.2-7.4-8-8 4.8-.6 7.4-3.2 8-8Z" />
    ),
  },
  {
    title: "Acompanhamento da evolução",
    text: "A resposta da pele é observada ao longo do processo. Quando necessário, orientações e etapas são ajustadas para acompanhar sua evolução com mais precisão.",
    depth: -0.1,
    icon: <path d="M4 17.5 9.5 12l3.5 3.5L20 8.5M15 8.5h5v5" />,
  },
];

export default function MethodStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const motion = window.matchMedia(
      "(min-width: 921px) and (prefers-reduced-motion: no-preference)",
    );
    const cards = [...stage.querySelectorAll<HTMLElement>("[data-depth]")];
    let frame = 0;

    function update() {
      frame = 0;
      const box = stage!.getBoundingClientRect();
      const center = box.top + box.height / 2 - window.innerHeight / 2;
      const offset = Math.max(-560, Math.min(560, center));
      for (const card of cards) {
        card.style.transform = motion.matches
          ? `translate3d(0, ${(offset * Number(card.dataset.depth)).toFixed(1)}px, 0)`
          : "";
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section className="method-stage" id="metodo" aria-labelledby="method-stage-title">
      <div className="method-stage-shell">
        <header className="method-stage-heading">
          <div>
            <p className="eyebrow">Nosso método</p>
            <h2 id="method-stage-title">
              Sua pele não precisa de uma indicação <em>genérica</em>
            </h2>
          </div>
          <p className="method-stage-intro">
            O mesmo incômodo pode ter causas, intensidades e necessidades
            diferentes. Cada atendimento segue um processo para compreender,
            planejar, cuidar e acompanhar.
          </p>
        </header>

        <div className="method-stage-board" ref={stageRef}>
          <div className="method-stage-photo">
            <img
              src="/assets/images/rita-metodo.webp"
              alt="Rita Sudbrack com a mão apoiada no queixo, em retrato sobre fundo escuro"
              width="1400"
              height="2101"
              loading="lazy"
              decoding="async"
            />
          </div>

          <ol className="method-stage-steps">
            {steps.map((step, index) => (
              <li key={step.title} className="method-step" data-depth={step.depth}>
                <span className="method-step-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{step.icon}</svg>
                </span>
                <span className="method-step-label">Etapa {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
