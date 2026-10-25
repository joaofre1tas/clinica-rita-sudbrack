import "../about-editorial.css";

const values = [
  "Conhecimento técnico",
  "Escuta cuidadosa",
  "Planejamento individual",
  "Comunicação clara",
  "Acompanhamento próximo",
  "Respeito ao tempo de cada pele",
];

export default function EditorialAbout() {
  return (
    <section className="about-editorial" id="sobre" aria-labelledby="about-editorial-title">
      <div className="about-editorial-profile">
        <div className="about-editorial-shell about-editorial-layout">
          <figure className="about-editorial-portrait">
            <div className="about-editorial-photo">
              <img
                src="/assets/images/rita-sobre.webp"
                alt="Rita Sudbrack junto à janela, sob a luz natural"
                width="1365"
                height="2048"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              <span className="about-editorial-name">Rita Sudbrack</span>
              <span>
                Esteticista e cosmetóloga
                <br />
                Especialista em estética facial
              </span>
            </figcaption>
          </figure>

          <div className="about-editorial-copy">
            <p className="about-editorial-eyebrow">A profissional por trás do cuidado</p>
            <h2 id="about-editorial-title">
              Conhecimento para orientar.
              <span>Sensibilidade para compreender.</span>
            </h2>

            <div className="about-editorial-story">
              <p>
                Rita Sudbrack acredita que cuidar da aparência também é cuidar da
                forma como uma mulher se percebe.
              </p>
              <p>
                Por isso, seu trabalho não começa pela indicação de um
                procedimento. Começa pela compreensão de cada paciente.
              </p>
              <p>
                Necessidades, histórico, rotina, expectativas e características da
                pele são consideradas antes da definição de qualquer tratamento.
                Assim, o cuidado se torna mais consciente, individual e coerente
                com o resultado desejado.
              </p>
            </div>

            <a className="about-editorial-link" href="#diferenciais">
              Conheça nosso método
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="about-editorial-purpose">
        <div className="about-editorial-shell about-editorial-purpose-layout">
          <div className="about-editorial-values">
            <p className="about-editorial-eyebrow">Estética com propósito</p>
            <h3>
              Um bom tratamento respeita os traços e contribui para uma relação
              mais positiva com a própria imagem.
            </h3>
            <ul aria-label="Princípios do atendimento">
              {values.map((value) => <li key={value}>{value}</li>)}
            </ul>
          </div>

          <div className="about-editorial-belief">
            <blockquote>
              <p>
                “Minha missão é cuidar da sua pele com atenção, conhecimento e
                respeito à sua individualidade, para que você se sinta bonita sem
                deixar de ser você.”
              </p>
              <footer>
                <cite>Rita Sudbrack</cite>
                <span>Atuação desde 2016</span>
              </footer>
            </blockquote>
            <p className="about-editorial-promise">
              Sem exageros. Sem recomendações automáticas.
              <br />
              Sem padrões que apagam sua individualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
