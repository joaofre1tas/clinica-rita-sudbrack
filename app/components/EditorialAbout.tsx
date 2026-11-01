import "../about-editorial.css";

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

            <a className="about-editorial-link" href="#metodo">
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
    </section>
  );
}
