import ResultsCarousel from "./components/ResultsCarousel";

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Clínica Rita Sudbrack">
          <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">{"Sobre"}</a>
          <a href="#diferenciais">{"Diferenciais"}</a>
          <a href="#tratamentos">{"Tratamentos"}</a>
          <a href="#cursos">{"Cursos"}</a>
          <a href="#resultados">{"Resultados"}</a>
          <a href="#clinica">{"A Clínica"}</a>
          <a href="#duvidas">{"Dúvidas"}</a>
        </nav>
        <a
          className="header-cta"
          href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
          target="_blank"
          rel="noreferrer"
        >
          {"Agendar avaliação "}
          <span className="button-icon" aria-hidden="true">
            <img src="/assets/whatsapp.svg" alt="" />
          </span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu">{"Menu"}</summary>
          <nav aria-label="Navegação para celular">
            <a href="#sobre">{"Sobre"}</a>
            <a href="#diferenciais">{"Diferenciais"}</a>
            <a href="#tratamentos">{"Tratamentos"}</a>
            <a href="#cursos">{"Cursos"}</a>
            <a href="#resultados">{"Resultados"}</a>
            <a href="#clinica">{"A Clínica"}</a>
            <a href="#duvidas">{"Dúvidas"}</a>
            <a
              href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
              target="_blank"
              rel="noreferrer"
            >
              {"Agendar avaliação"}
            </a>
          </nav>
        </details>
      </header>
      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">{"Estética facial • Santa Cruz do Sul"}</p>
          <h1>
            {"Cuidado especializado para uma pele mais"}{" "}
            <em>{"saudável, bonita e natural"}</em>
          </h1>
          <div className="hero-intro">
            <p>{"Cada pele tem uma história."}</p>
            <p>
              {
                "Por isso, cada tratamento começa com escuta, análise e um plano pensado de forma individual."
              }
            </p>
          </div>
          <p className="hero-description">
            {
              "Estética facial e saúde da pele caminham juntas para valorizar sua beleza sem excessos e sem apagar aquilo que torna você única."
            }
          </p>
          <div className="hero-actions">
            <a
              className="button "
              href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
              target="_blank"
              rel="noreferrer"
            >
              <span>{"Agendar minha avaliação"}</span>
              <span className="button-icon" aria-hidden="true">
                <img src="/assets/whatsapp.svg" alt="" />
              </span>
            </a>
            <a className="text-link" href="#tratamentos">
              {"Conhecer os tratamentos"}
              <span className="text-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </span>
            </a>
          </div>
          <p className="credibility">
            {
              "Especialização em estética facial, melasma, manchas e cuidados personalizados para a pele."
            }
          </p>
        </div>
        <div className="hero-visual">
          <div className="image-frame image-frame--hero">
            <img src="/assets/images/rita-hero.webp" alt="Dra. Rita Sudbrack" />
          </div>
          <p className="image-caption">{"Naturalidade em cada detalhe."}</p>
        </div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-group">
            <span>{"CUIDADO INDIVIDUAL"}</span>
            <i>{"•"}</i>
            <span>{"PELE SAUDÁVEL"}</span>
            <i>{"•"}</i>
            <span>{"BELEZA SEM EXCESSOS"}</span>
            <i>{"•"}</i>
            <span>{"NATURALIDADE"}</span>
            <i>{"•"}</i>
          </div>
          <div className="marquee-group">
            <span>{"CUIDADO INDIVIDUAL"}</span>
            <i>{"•"}</i>
            <span>{"PELE SAUDÁVEL"}</span>
            <i>{"•"}</i>
            <span>{"BELEZA SEM EXCESSOS"}</span>
            <i>{"•"}</i>
            <span>{"NATURALIDADE"}</span>
            <i>{"•"}</i>
          </div>
        </div>
      </div>
      <section className="about section-shell" id="sobre">
        <div className="about-layout">
          <div className="about-copy">
            <div className="about-intro">
              <p className="eyebrow">{"Sobre a Dra. Rita Sudbrack"}</p>
              <h2>
                {"Conhecimento para orientar. "}
                <em>{"Sensibilidade"}</em>
                {" para compreender."}
              </h2>
            </div>
            <p className="lead">
              {
                "Rita Sudbrack acredita que cuidar da aparência também é cuidar da forma como uma mulher se percebe."
              }
            </p>
            <p>
              {
                "Por isso, seu trabalho não começa pela indicação de um procedimento. Começa pela compreensão de cada paciente."
              }
            </p>
            <p>
              {
                "Necessidades, histórico, rotina, expectativas e características da pele são consideradas antes da definição de qualquer tratamento. Assim, o cuidado se torna mais consciente, individual e coerente com o resultado desejado."
              }
            </p>
            <div className="short-lines" aria-label="Princípios do atendimento">
              <span>{"Sem exageros."}</span>
              <span>{"Sem recomendações automáticas."}</span>
              <span>{"Sem padrões que apagam sua individualidade."}</span>
            </div>
          </div>
          <div className="about-visual">
            <div className="image-frame image-frame--consultation">
              <img
                src="/assets/images/rita-sobre.webp"
                alt="Dra. Rita Sudbrack em retrato profissional"
              />
            </div>
          </div>
        </div>
        <div className="purpose-grid">
          <div>
            <p className="eyebrow">{"Estética com propósito"}</p>
            <h3>
              {
                "Um bom tratamento respeita os traços e contribui para uma relação mais positiva com a própria imagem."
              }
            </h3>
          </div>
          <ul className="clean-list">
            <li>
              <span className="clinic-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="m6 12 4 4 8-9" />
                </svg>
              </span>
              <span>{"Conhecimento técnico"}</span>
            </li>
            <li>
              <span className="clinic-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="m6 12 4 4 8-9" />
                </svg>
              </span>
              <span>{"Escuta cuidadosa"}</span>
            </li>
            <li>
              <span className="clinic-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="m6 12 4 4 8-9" />
                </svg>
              </span>
              <span>{"Planejamento individual"}</span>
            </li>
            <li>
              <span className="clinic-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="m6 12 4 4 8-9" />
                </svg>
              </span>
              <span>{"Comunicação clara"}</span>
            </li>
            <li>
              <span className="clinic-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="m6 12 4 4 8-9" />
                </svg>
              </span>
              <span>{"Acompanhamento próximo"}</span>
            </li>
            <li>
              <span className="clinic-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="m6 12 4 4 8-9" />
                </svg>
              </span>
              <span>{"Respeito ao tempo de cada pele"}</span>
            </li>
          </ul>
        </div>
        <blockquote className="quote-block">
          <span className="quote-mark" aria-hidden="true">
            {"“"}
          </span>
          <p>
            {
              "Minha missão é cuidar da sua pele com atenção, conhecimento e respeito à sua individualidade, para que você se sinta bonita sem deixar de ser você."
            }
          </p>
          <footer>
            <strong>{"Rita Sudbrack"}</strong>
            <span>
              {
                "Esteticista e cosmetóloga • Especialista em estética facial • atuação desde 2016"
              }
            </span>
          </footer>
        </blockquote>
      </section>
      <section className="method" id="diferenciais">
        <div className="section-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">{"Nosso método"}</p>
              <h2>
                {"Sua pele não precisa de uma indicação "}
                <em>{"genérica"}</em>
              </h2>
            </div>
            <p>
              {
                "O mesmo incômodo pode ter causas, intensidades e necessidades diferentes. Cada atendimento segue um processo para compreender, planejar, cuidar e acompanhar."
              }
            </p>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">
                {"0"}
                {"1"}
              </span>
              <h3>{"Compreensão da sua pele"}</h3>
              <p>
                {
                  "O atendimento começa com uma conversa detalhada sobre suas queixas, histórico, rotina, cuidados atuais e objetivos. A pele é analisada com atenção para que a indicação não se limite ao que aparece na superfície."
                }
              </p>
            </article>
            <article className="step-card">
              <span className="step-number">
                {"0"}
                {"2"}
              </span>
              <h3>{"Plano personalizado"}</h3>
              <p>
                {
                  "Depois da avaliação, você conhece as possibilidades mais coerentes com o seu caso, entende o motivo de cada indicação e quais etapas podem fazer parte do processo."
                }
              </p>
            </article>
            <article className="step-card">
              <span className="step-number">
                {"0"}
                {"3"}
              </span>
              <h3>{"Execução cuidadosa"}</h3>
              <p>
                {
                  "Os procedimentos são realizados com atenção, segurança e respeito às características da sua pele, buscando uma evolução natural e compatível com você."
                }
              </p>
            </article>
            <article className="step-card">
              <span className="step-number">
                {"0"}
                {"4"}
              </span>
              <h3>{"Acompanhamento da evolução"}</h3>
              <p>
                {
                  "A resposta da pele é observada ao longo do processo. Quando necessário, orientações e etapas são ajustadas para acompanhar sua evolução com mais precisão."
                }
              </p>
            </article>
          </div>
          <div className="differentials-layout">
            <div>
              <p className="eyebrow">{"Por que escolher a clínica"}</p>
              <h3>{"Cuidado que considera você por inteiro."}</h3>
            </div>
            <ul className="check-list">
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Avaliação personalizada antes de qualquer indicação"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Planejamento conforme as necessidades reais da pele"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Resultados naturais e progressivos"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Comunicação baseada em conhecimento e saúde"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Acompanhamento durante o processo"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Experiência acolhedora e individualizada"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Ambiente confortável e reservado"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Método especializado para o controle do melasma"}
              </li>
              <li>
                <span aria-hidden="true">{"✓"}</span>
                {"Integração entre procedimentos e cuidados cotidianos"}
              </li>
            </ul>
          </div>
          <article className="melasma-card">
            <div className="melasma-index" aria-hidden="true">
              {"MC"}
            </div>
            <div>
              <p className="eyebrow">{"Diferencial exclusivo"}</p>
              <h3>{"Melasma Control"}</h3>
            </div>
            <div className="melasma-copy">
              <p>
                {
                  "Um método voltado ao cuidado individualizado de pacientes que convivem com melasma e manchas."
                }
              </p>
              <p>
                {
                  "Em vez de tratar todos os casos da mesma forma, considera o histórico, as características da pele, a intensidade do quadro e os fatores relacionados à sua evolução."
                }
              </p>
              <p className="small-note">
                {"A indicação e as etapas dependem de avaliação personalizada."}
              </p>
              <a
                className="button "
                href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
                target="_blank"
                rel="noreferrer"
              >
                <span>{"Conhecer o Melasma Control"}</span>
                <span className="button-icon" aria-hidden="true">
                  <img src="/assets/whatsapp.svg" alt="" />
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="treatments section-shell" id="tratamentos">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">{"Tratamentos"}</p>
            <h2>
              {"Você não precisa saber o nome do "}
              <em>{"procedimento"}</em>
            </h2>
          </div>
          <div>
            <p className="lead">
              {"Precisa apenas entender o que deseja cuidar."}
            </p>
            <p>
              {
                "A escolha não deve acontecer por tentativa, tendência ou indicação genérica. Ela acontece depois de uma avaliação."
              }
            </p>
          </div>
        </div>
        <div className="treatment-list">
          <details className="treatment-card" open>
            <summary>
              <span className="treatment-number">{"01"}</span>
              <span>
                <strong>{"Manchas e melasma"}</strong>
                <small>
                  {
                    "Para cuidar do tom, da uniformidade e da aparência das manchas."
                  }
                </small>
              </span>
              <i aria-hidden="true">{"+"}</i>
            </summary>
            <div className="treatment-content">
              <p className="treatment-description">
                {
                  "O melasma e outras alterações de pigmentação se manifestam de maneiras diferentes. O plano considera o histórico, a rotina e as necessidades específicas de cada pele."
                }
              </p>
              <div>
                <h4>{"Possibilidades de cuidado"}</h4>
                <ul>
                  <li>{"Método Melasma Control"}</li>
                  <li>{"Tratamentos para manchas"}</li>
                  <li>{"Clareamento da pele"}</li>
                  <li>{"Peelings químicos"}</li>
                  <li>{"Protocolos de renovação e uniformização"}</li>
                </ul>
              </div>
              <div>
                <h4>{"Pode beneficiar quem deseja"}</h4>
                <ul>
                  <li>{"Melasma"}</li>
                  <li>{"Manchas persistentes"}</li>
                  <li>{"Alterações no tom da pele"}</li>
                  <li>{"Pigmentação irregular"}</li>
                  <li>{"Recorrência após tentativas anteriores"}</li>
                </ul>
              </div>
              <div className="treatment-action">
                <span>{"A indicação depende de avaliação."}</span>
                <a
                  className="button "
                  href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{"Avaliação para manchas"}</span>
                  <span className="button-icon" aria-hidden="true">
                    <img src="/assets/whatsapp.svg" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </details>
          <details className="treatment-card">
            <summary>
              <span className="treatment-number">{"02"}</span>
              <span>
                <strong>{"Rejuvenescimento e qualidade da pele"}</strong>
                <small>
                  {"Cuidar dos sinais do tempo sem perder a naturalidade."}
                </small>
              </span>
              <i aria-hidden="true">{"+"}</i>
            </summary>
            <div className="treatment-content">
              <p className="treatment-description">
                {
                  "O cuidado não precisa apagar sua história. Ele pode melhorar textura, firmeza e luminosidade, suavizando sinais de forma progressiva e natural."
                }
              </p>
              <div>
                <h4>{"Possibilidades de cuidado"}</h4>
                <ul>
                  <li>{"Tratamentos para linhas de expressão"}</li>
                  <li>{"Cuidados para flacidez"}</li>
                  <li>{"Rejuvenescimento facial"}</li>
                  <li>{"Tratamentos para pele sem viço"}</li>
                  <li>{"Cuidados para poros dilatados"}</li>
                  <li>{"Protocolos de revitalização facial"}</li>
                </ul>
              </div>
              <div>
                <h4>{"Pode beneficiar quem deseja"}</h4>
                <ul>
                  <li>{"Melhorar a luminosidade"}</li>
                  <li>{"Suavizar linhas de expressão"}</li>
                  <li>{"Cuidar da flacidez"}</li>
                  <li>{"Melhorar a textura"}</li>
                  <li>{"Reduzir a aparência de poros"}</li>
                  <li>{"Recuperar uma aparência mais descansada"}</li>
                </ul>
              </div>
              <div className="treatment-action">
                <span>{"A indicação depende de avaliação."}</span>
                <a
                  className="button "
                  href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{"Cuidar da qualidade da pele"}</span>
                  <span className="button-icon" aria-hidden="true">
                    <img src="/assets/whatsapp.svg" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </details>
          <details className="treatment-card">
            <summary>
              <span className="treatment-number">{"03"}</span>
              <span>
                <strong>{"Valorização do olhar e dos traços"}</strong>
                <small>
                  {
                    "Cuidados delicados para regiões que influenciam a expressão."
                  }
                </small>
              </span>
              <i aria-hidden="true">{"+"}</i>
            </summary>
            <div className="treatment-content">
              <p className="treatment-description">
                {
                  "O objetivo não é criar um novo rosto, mas valorizar, com delicadeza, as características que já fazem parte de você."
                }
              </p>
              <div>
                <h4>{"Possibilidades de cuidado"}</h4>
                <ul>
                  <li>{"Tratamentos para olheiras"}</li>
                  <li>{"Cuidados para os lábios"}</li>
                  <li>{"Design de sobrancelhas"}</li>
                  <li>{"Serviços relacionados aos cílios"}</li>
                </ul>
              </div>
              <div>
                <h4>{"Pode beneficiar quem deseja"}</h4>
                <ul>
                  <li>{"Suavizar a aparência cansada"}</li>
                  <li>{"Valorizar o olhar"}</li>
                  <li>{"Cuidar dos lábios"}</li>
                  <li>{"Realçar sobrancelhas e cílios"}</li>
                </ul>
              </div>
              <div className="treatment-action">
                <span>{"A indicação depende de avaliação."}</span>
                <a
                  className="button "
                  href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{"Valorizar meus traços"}</span>
                  <span className="button-icon" aria-hidden="true">
                    <img src="/assets/whatsapp.svg" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </details>
          <details className="treatment-card">
            <summary>
              <span className="treatment-number">{"04"}</span>
              <span>
                <strong>{"Beleza e autocuidado"}</strong>
                <small>
                  {"Serviços complementares para um cuidado mais completo."}
                </small>
              </span>
              <i aria-hidden="true">{"+"}</i>
            </summary>
            <div className="treatment-content">
              <p className="treatment-description">
                {
                  "A clínica também oferece serviços voltados ao bem-estar e ao autocuidado, como parte complementar da experiência em estética facial e saúde da pele."
                }
              </p>
              <div>
                <h4>{"Possibilidades de cuidado"}</h4>
                <ul>
                  <li>{"Manicure"}</li>
                  <li>{"Cuidados com as unhas"}</li>
                  <li>{"Serviços complementares de beleza"}</li>
                </ul>
              </div>
              <div>
                <h4>{"Pode beneficiar quem deseja"}</h4>
                <ul>
                  <li>{"Mais praticidade na sua rotina"}</li>
                  <li>{"Experiência de cuidado integrada"}</li>
                  <li>{"Atendimento acolhedor"}</li>
                </ul>
              </div>
              <div className="treatment-action">
                <span>{"A indicação depende de avaliação."}</span>
                <a
                  className="button "
                  href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{"Conhecer serviços complementares"}</span>
                  <span className="button-icon" aria-hidden="true">
                    <img src="/assets/whatsapp.svg" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </details>
        </div>
      </section>
      <section className="courses" id="cursos">
        <div className="section-shell">
          <div className="courses-heading">
            <div>
              <p className="eyebrow">{"Formação profissional"}</p>
              <h2>{"Cursos Profissionais"}</h2>
            </div>
            <p>
              {
                "Formações para quem deseja aprender técnicas profissionais com segurança, atenção aos detalhes e prática orientada."
              }
            </p>
          </div>
          <article className="course-card">
            <div className="course-visual">
              <img
                src="/assets/images/curso-design-sobrancelhas.png"
                alt="Treinamento profissional de design de sobrancelhas em ambiente clínico"
              />
              <div
                className="course-badges"
                aria-label="Características do curso"
              >
                <span>{"Curso presencial"}</span>
                <span>{"Teoria e prática"}</span>
                <span>{"Modelos reais"}</span>
                <span>{"Até 20x no cartão"}</span>
              </div>
            </div>
            <div className="course-copy">
              <p className="course-category">{"Formação profissional"}</p>
              <h3>{"Curso de Design de Sobrancelhas"}</h3>
              <p className="course-description">
                {
                  "Uma formação completa que percorre os fundamentos de biossegurança e anatomia até as técnicas de visagismo, mapeamento, epilação, henna, tintura, acabamento e prática supervisionada."
                }
              </p>
              <div className="course-benefits">
                <div className="course-benefit">
                  <span className="benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="M12 3 5.5 5.8v5.4c0 4.2 2.6 7.5 6.5 9.8 3.9-2.3 6.5-5.6 6.5-9.8V5.8L12 3Z" />
                      <path d="m9.2 12 1.8 1.8 3.9-4.1" />
                    </svg>
                  </span>
                  <div>
                    <strong>{"Fundamentos técnicos"}</strong>
                    <span>
                      {"Biossegurança e responsabilidade profissional."}
                    </span>
                  </div>
                </div>
                <div className="course-benefit">
                  <span className="benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="M6.2 13.5c.4 4.1 2.4 6.5 5.8 7.5 3.4-1 5.4-3.4 5.8-7.5" />
                      <path d="M5 10.5C5 6.4 8.1 3 12 3s7 3.4 7 7.5" />
                      <path d="M8.3 10.2c1.1-.9 2.2-.9 3.3 0M12.4 10.2c1.1-.9 2.2-.9 3.3 0M12 11.5v3" />
                    </svg>
                  </span>
                  <div>
                    <strong>{"Visagismo personalizado"}</strong>
                    <span>{"Leitura facial e desenho para cada cliente."}</span>
                  </div>
                </div>
                <div className="course-benefit">
                  <span className="benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="m4 19 5.2-5.2M7 17l-2-2M10 13l8-8a1.4 1.4 0 0 1 2 2l-8 8" />
                      <path d="M14.5 5.5 18.5 9.5" />
                    </svg>
                  </span>
                  <div>
                    <strong>{"Técnicas completas"}</strong>
                    <span>{"Epilação, acabamento, henna e tintura."}</span>
                  </div>
                </div>
                <div className="course-benefit">
                  <span className="benefit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="M4 18.5V7.2A2.2 2.2 0 0 1 6.2 5H10l2 2h5.8A2.2 2.2 0 0 1 20 9.2v9.3" />
                      <path d="M8 13h8M12 9v8" />
                    </svg>
                  </span>
                  <div>
                    <strong>{"Prática orientada"}</strong>
                    <span>{"Treino em moldes e modelos reais."}</span>
                  </div>
                </div>
              </div>
              <div className="course-summary">
                <div>
                  <span>{"Modalidade"}</span>
                  <strong>{"Presencial"}</strong>
                </div>
                <div>
                  <span>{"Duração"}</span>
                  <strong>{"2 dias de curso"}</strong>
                </div>
                <div>
                  <span>{"Turma"}</span>
                  <strong>{"Máximo de 3 alunas"}</strong>
                </div>
              </div>
              <div className="course-actions">
                <a
                  className="button "
                  href="https://wa.me/5551995599459?text=Ol%C3%A1!%20Gostaria%20de%20saber%20a%20data%20da%20pr%C3%B3xima%20turma%20e%20a%20disponibilidade%20de%20vagas%20para%20o%20Curso%20de%20Design%20de%20Sobrancelhas%20da%20Cl%C3%ADnica%20Rita%20Sudbrack.%20Tamb%C3%A9m%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20op%C3%A7%C3%B5es%20Normal%20e%20VIP%20e%20o%20parcelamento%20em%20at%C3%A9%2020x%20no%20cart%C3%A3o."
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{"Quero informações sobre a próxima turma"}</span>
                  <span className="button-icon" aria-hidden="true">
                    <img src="/assets/whatsapp.svg" alt="" />
                  </span>
                </a>
                <a
                  className="button button--outline"
                  href="/cursos/design-de-sobrancelhas"
                >
                  <span>{"Ver mais informações"}</span>
                  <span className="outline-button-icon" aria-hidden="true">
                    {"→"}
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="results" id="resultados">
        <div className="section-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">{"Resultados e confiança"}</p>
              <h2>
                {"Resultados reais começam com "}
                <em>{"expectativas reais"}</em>
              </h2>
            </div>
            <p>
              {
                "Cada pele responde de uma maneira. O compromisso é oferecer um cuidado responsável, acompanhar a evolução e buscar resultados naturais dentro das possibilidades de cada caso."
              }
            </p>
          </div>
          <ResultsCarousel />
        </div>
      </section>
      <section className="clinic section-shell" id="clinica">
        <div className="clinic-layout">
          <div className="clinic-image-wrap">
            <img
              src="/assets/images/foto-clinica.jpg"
              alt="Recepção da Clínica Rita Sudbrack"
            />
          </div>
          <div className="clinic-copy">
            <p className="eyebrow">{"A experiência da clínica"}</p>
            <h2>
              {"Um espaço pensado para cuidar de você com"}{" "}
              <em>{"conforto e privacidade"}</em>
            </h2>
            <p className="lead">
              {
                "A experiência da paciente não começa no procedimento. Ela começa na forma como é recebida."
              }
            </p>
            <p>
              {
                "Um ambiente onde você pode conversar com tranquilidade, esclarecer dúvidas e compreender suas possibilidades antes de tomar qualquer decisão."
              }
            </p>
          </div>
        </div>
        <div className="journey">
          <div className="journey-heading">
            <p className="eyebrow">{"Sua jornada"}</p>
            <h3>
              {"Do primeiro contato ao"}{" "}
              <span className="journey-title-word">{"acompanhamento"}</span>
            </h3>
            <p>
              {
                "Você não precisa escolher um tratamento antes de entrar em contato. A avaliação existe justamente para ajudar nessa decisão."
              }
            </p>
          </div>
          <ol>
            <li>
              <span>
                {"0"}
                {"1"}
              </span>
              <div>
                <h4>{"Contato pelo WhatsApp"}</h4>
                <p>
                  {"Você informa à equipe que deseja agendar uma avaliação."}
                </p>
              </div>
            </li>
            <li>
              <span>
                {"0"}
                {"2"}
              </span>
              <div>
                <h4>{"Agendamento"}</h4>
                <p>
                  {
                    "A equipe apresenta os horários disponíveis e orienta sobre a visita."
                  }
                </p>
              </div>
            </li>
            <li>
              <span>
                {"0"}
                {"3"}
              </span>
              <div>
                <h4>{"Avaliação personalizada"}</h4>
                <p>
                  {
                    "Rita conhece suas queixas, seu histórico e seus objetivos, além de analisar sua pele."
                  }
                </p>
              </div>
            </li>
            <li>
              <span>
                {"0"}
                {"4"}
              </span>
              <div>
                <h4>{"Definição do plano"}</h4>
                <p>
                  {
                    "As possibilidades são explicadas com clareza e o plano é definido conforme o seu caso."
                  }
                </p>
              </div>
            </li>
            <li>
              <span>
                {"0"}
                {"5"}
              </span>
              <div>
                <h4>{"Tratamento e acompanhamento"}</h4>
                <p>
                  {
                    "Os procedimentos são realizados e a evolução é acompanhada ao longo do processo."
                  }
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="location-card">
          <div>
            <p className="eyebrow">{"Localização"}</p>
            <h3>{"Clínica Rita Sudbrack"}</h3>
          </div>
          <address>
            <strong>{"Rua João Pessoa, 603"}</strong>
            <span>{"Santa Cruz do Sul — RS"}</span>
            <span>{"Atendimento com hora marcada"}</span>
          </address>
          <a
            className="button button--light"
            href="https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Pessoa%2C%20603%2C%20Santa%20Cruz%20do%20Sul%2C%20RS"
            target="_blank"
            rel="noreferrer"
          >
            <span>{"Ver no mapa"}</span>
            <span className="button-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </section>
      <section className="faq" id="duvidas">
        <div className="section-shell faq-layout">
          <div className="faq-heading">
            <p className="eyebrow">{"Dúvidas frequentes"}</p>
            <h2>
              {"Informação também é uma forma de "}
              <em>{"cuidado"}</em>
            </h2>
            <p>
              {
                "Reunimos respostas para as perguntas mais comuns antes da avaliação."
              }
            </p>
            <a
              className="button "
              href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
              target="_blank"
              rel="noreferrer"
            >
              <span>{"Falar com a clínica"}</span>
              <span className="button-icon" aria-hidden="true">
                <img src="/assets/whatsapp.svg" alt="" />
              </span>
            </a>
          </div>
          <div className="faq-list">
            <details open>
              <summary>
                <span>{"Como funciona a avaliação personalizada?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "A avaliação é o primeiro momento de compreensão da paciente e da pele. São considerados a queixa principal, o histórico, a rotina, os tratamentos anteriores, as características da pele e os objetivos. A partir disso, Rita explica quais possibilidades podem ser consideradas."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>
                  {"Preciso saber qual tratamento desejo antes de agendar?"}
                </span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "Não. Você pode agendar sabendo apenas o que deseja cuidar. A escolha do tratamento acontece depois da avaliação, com base nas necessidades da sua pele."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>
                  {"O Melasma Control é indicado para todos os casos?"}
                </span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "Não existe uma indicação única para todas as pacientes. O método é planejado de acordo com as características, o histórico e as necessidades de cada caso. A indicação depende de avaliação."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>{"Quantas sessões podem ser necessárias?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "A quantidade varia conforme o tratamento, a necessidade da pele e a resposta individual. Uma estimativa pode ser apresentada depois da avaliação."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>{"Os procedimentos exigem tempo de recuperação?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "Depende do procedimento. Alguns cuidados permitem retomar rapidamente a rotina; outros podem exigir orientações específicas ou um período de recuperação. Tudo é explicado antes do início."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>{"Os resultados são imediatos ou progressivos?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "Alguns tratamentos podem apresentar mudanças iniciais mais rapidamente. Outros dependem de evolução progressiva e acompanhamento. A resposta varia conforme a pele, o tratamento e os cuidados adotados."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>
                  {"Como saber qual tratamento é ideal para minha pele?"}
                </span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "A avaliação personalizada é a forma mais segura de compreender quais possibilidades fazem sentido para você, evitando escolhas baseadas apenas em tendências ou recomendações genéricas."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>{"A clínica atende quais faixas etárias?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "A clínica atende pacientes adultas com diferentes necessidades relacionadas à estética facial, à saúde e à qualidade da pele. A indicação depende das características e objetivos de cada pessoa."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>{"Quais cuidados devo seguir antes e depois?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "Os cuidados variam conforme o procedimento. Cada paciente recebe orientações claras sobre preparação, rotina, exposição solar, produtos e cuidados posteriores."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>{"Como realizar o agendamento?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "O agendamento é realizado pelo WhatsApp da clínica. A equipe apresenta os horários disponíveis e orienta sobre a avaliação."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>{"Onde a clínica está localizada?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "Na Rua João Pessoa, 603, em Santa Cruz do Sul, Rio Grande do Sul. O atendimento é realizado com hora marcada."
                }
              </p>
            </details>
            <details>
              <summary>
                <span>{"Quais são as formas de pagamento?"}</span>
                <i aria-hidden="true">{"+"}</i>
              </summary>
              <p>
                {
                  "As formas de pagamento disponíveis podem variar conforme o serviço. Consulte a equipe no momento do agendamento."
                }
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="final-cta" id="contato">
        <div className="final-cta-ornament" aria-hidden="true">
          {"RS"}
        </div>
        <div className="section-shell final-cta-content">
          <p className="eyebrow">{"Seu primeiro passo"}</p>
          <h2>
            {"O primeiro passo não é escolher um procedimento."}{" "}
            <em>{"É compreender o que sua pele precisa."}</em>
          </h2>
          <p>
            {
              "Conheça suas possibilidades, esclareça dúvidas e construa um plano de cuidado mais seguro e coerente com você. Sem pressão. Sem indicações automáticas. Com conhecimento, individualidade e naturalidade."
            }
          </p>
          <a
            className="button button--light"
            href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
            target="_blank"
            rel="noreferrer"
          >
            <span>{"Agendar avaliação pelo WhatsApp"}</span>
            <span className="button-icon" aria-hidden="true">
              <img src="/assets/whatsapp.svg" alt="" />
            </span>
          </a>
          <span className="cta-support">
            {
              "Converse com a equipe e encontre o melhor horário para sua avaliação."
            }
          </span>
        </div>
      </section>
      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
            <p>{"Estética facial, saúde da pele e cuidado individualizado."}</p>
          </div>
          <div>
            <p className="footer-title">{"Navegação"}</p>
            <nav>
              <a href="#sobre">{"Sobre"}</a>
              <a href="#diferenciais">{"Diferenciais"}</a>
              <a href="#tratamentos">{"Tratamentos"}</a>
              <a href="#cursos">{"Cursos profissionais"}</a>
              <a href="#resultados">{"Resultados"}</a>
              <a href="#clinica">{"A Clínica"}</a>
              <a href="#duvidas">{"Perguntas frequentes"}</a>
            </nav>
          </div>
          <div>
            <p className="footer-title">{"Contato"}</p>
            <a
              href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
              target="_blank"
              rel="noreferrer"
            >
              {"(51) 99559-9459"}
            </a>
            <a
              href="https://www.instagram.com/clinicaritasudbrack/"
              target="_blank"
              rel="noreferrer"
            >
              {"@clinicaritasudbrack"}
            </a>
            <p>{"Rua João Pessoa, 603"}</p>
            <p>{"Santa Cruz do Sul — RS"}</p>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>
            {"© 2026 Clínica Rita Sudbrack. Todos os direitos reservados."}
          </span>
          <span>
            {"Desenvolvido por"}{" "}
            <a
              href="https://symewebstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              {"Syme Web Studio"}
            </a>
          </span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Clínica Rita Sudbrack pelo WhatsApp"
      >
        <span className="button-icon" aria-hidden="true">
          <img src="/assets/whatsapp.svg" alt="" />
        </span>
        <span>{"Falar com a clínica"}</span>
      </a>
    </main>
  );
}
