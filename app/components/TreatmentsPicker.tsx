"use client";

import { useState } from "react";
import AppointmentButton from "./AppointmentButton";
import "../treatments-picker.css";

const appointmentUrl =
  "https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada.";

type Need = {
  name: string;
  line: string;
  services: string[];
  brief: string;
};

const needs: Need[] = [
  {
    name: "Manchas",
    line: "Para uniformizar o tom da pele.",
    services: [
      "Tratamentos para manchas",
      "Clareamento da pele",
      "Peelings químicos",
    ],
    brief: "Foto: pele com tom uniforme",
  },
  {
    name: "Melasma",
    line: "Um método voltado ao controle do melasma.",
    services: ["Método Melasma Control", "Protocolos de renovação"],
    brief: "Foto: tratamento de melasma",
  },
  {
    name: "Linhas de expressão",
    line: "Suavizar os sinais sem perder a naturalidade.",
    services: [
      "Tratamentos para linhas de expressão",
      "Rejuvenescimento facial",
    ],
    brief: "Foto: região dos olhos e da testa",
  },
  {
    name: "Flacidez",
    line: "Cuidar da firmeza de forma progressiva.",
    services: ["Cuidados para flacidez", "Rejuvenescimento facial"],
    brief: "Foto: contorno do rosto",
  },
  {
    name: "Pele sem viço",
    line: "Devolver a luminosidade à pele.",
    services: ["Tratamentos para pele sem viço", "Revitalização facial"],
    brief: "Foto: pele luminosa",
  },
  {
    name: "Poros",
    line: "Melhorar a textura da pele.",
    services: ["Cuidados para poros dilatados"],
    brief: "Foto: textura da pele em close",
  },
  {
    name: "Olheiras",
    line: "Suavizar a aparência cansada.",
    services: ["Tratamentos para olheiras"],
    brief: "Foto: região dos olhos",
  },
  {
    name: "Lábios",
    line: "Valorizar com delicadeza.",
    services: ["Cuidados para os lábios"],
    brief: "Foto: lábios em close",
  },
  {
    name: "Sobrancelhas e cílios",
    line: "Realçar o olhar.",
    services: ["Design de sobrancelhas", "Serviços para cílios"],
    brief: "Foto: sobrancelha e cílios",
  },
  {
    name: "Unhas",
    line: "Mais praticidade na sua rotina.",
    services: ["Manicure", "Cuidados com as unhas"],
    brief: "Foto: mãos e unhas",
  },
];

export default function TreatmentsPicker() {
  const [active, setActive] = useState(0);
  const current = needs[active];

  return (
    <section
      className="treatments-picker"
      id="tratamentos"
      aria-labelledby="treatments-title"
    >
      <div className="section-shell treatments-picker-layout">
        <div>
          <p className="eyebrow">Tratamentos</p>
          <h2 id="treatments-title">O que você quer cuidar?</h2>
          <p className="treatments-picker-intro">
            Você não precisa saber o nome do procedimento. A indicação acontece
            depois de uma avaliação.
          </p>
          <div className="treatments-picker-chips">
            {needs.map((need, index) => (
              <button
                key={need.name}
                type="button"
                aria-pressed={index === active}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                {need.name}
              </button>
            ))}
          </div>
        </div>
        <article className="treatments-picker-card" key={current.name}>
          {/* Placeholder: trocar pela foto real quando existir. */}
          <div className="treatments-picker-photo">
            <span>{current.brief}</span>
          </div>
          <div className="treatments-picker-info">
            <h3>{current.name}</h3>
            <p>{current.line}</p>
            <ul>
              {current.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
            <AppointmentButton tone="light" size="sm" href={appointmentUrl}>
              Agendar avaliação
            </AppointmentButton>
          </div>
        </article>
      </div>
    </section>
  );
}
