const whatsappUrl =
  "https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada.";

const careSteps = [
  {
    title: "Compreensão da sua pele",
    text: "O atendimento começa com uma conversa detalhada sobre suas queixas, histórico, rotina, cuidados atuais e objetivos. A pele é analisada com atenção para que a indicação não se limite ao que aparece na superfície.",
  },
  {
    title: "Plano personalizado",
    text: "Depois da avaliação, você conhece as possibilidades mais coerentes com o seu caso, entende o motivo de cada indicação e quais etapas podem fazer parte do processo.",
  },
  {
    title: "Execução cuidadosa",
    text: "Os procedimentos são realizados com atenção, segurança e respeito às características da sua pele, buscando uma evolução natural e compatível com você.",
  },
  {
    title: "Acompanhamento da evolução",
    text: "A resposta da pele é observada ao longo do processo. Quando necessário, orientações e etapas são ajustadas para acompanhar sua evolução com mais precisão.",
  },
];

const differentials = [
  "Avaliação personalizada antes de qualquer indicação",
  "Planejamento conforme as necessidades reais da pele",
  "Resultados naturais e progressivos",
  "Comunicação baseada em conhecimento e saúde",
  "Acompanhamento durante o processo",
  "Experiência acolhedora e individualizada",
  "Ambiente confortável e reservado",
  "Método especializado para o controle do melasma",
  "Integração entre procedimentos e cuidados cotidianos",
];

const treatments = [
  {
    number: "01",
    title: "Manchas e melasma",
    subtitle:
      "Para cuidar do tom, da uniformidade e da aparência das manchas.",
    text: "O melasma e outras alterações de pigmentação se manifestam de maneiras diferentes. O plano considera o histórico, a rotina e as necessidades específicas de cada pele.",
    possibilities: [
      "Método Melasma Control",
      "Tratamentos para manchas",
      "Clareamento da pele",
      "Peelings químicos",
      "Protocolos de renovação e uniformização",
    ],
    benefits: [
      "Melasma",
      "Manchas persistentes",
      "Alterações no tom da pele",
      "Pigmentação irregular",
      "Recorrência após tentativas anteriores",
    ],
    cta: "Avaliação para manchas",
  },
  {
    number: "02",
    title: "Rejuvenescimento e qualidade da pele",
    subtitle: "Cuidar dos sinais do tempo sem perder a naturalidade.",
    text: "O cuidado não precisa apagar sua história. Ele pode melhorar textura, firmeza e luminosidade, suavizando sinais de forma progressiva e natural.",
    possibilities: [
      "Tratamentos para linhas de expressão",
      "Cuidados para flacidez",
      "Rejuvenescimento facial",
      "Tratamentos para pele sem viço",
      "Cuidados para poros dilatados",
      "Protocolos de revitalização facial",
    ],
    benefits: [
      "Melhorar a luminosidade",
      "Suavizar linhas de expressão",
      "Cuidar da flacidez",
      "Melhorar a textura",
      "Reduzir a aparência de poros",
      "Recuperar uma aparência mais descansada",
    ],
    cta: "Cuidar da qualidade da pele",
  },
  {
    number: "03",
    title: "Valorização do olhar e dos traços",
    subtitle: "Cuidados delicados para regiões que influenciam a expressão.",
    text: "O objetivo não é criar um novo rosto, mas valorizar, com delicadeza, as características que já fazem parte de você.",
    possibilities: [
      "Tratamentos para olheiras",
      "Cuidados para os lábios",
      "Design de sobrancelhas",
      "Serviços relacionados aos cílios",
    ],
    benefits: [
      "Suavizar a aparência cansada",
      "Valorizar o olhar",
      "Cuidar dos lábios",
      "Realçar sobrancelhas e cílios",
    ],
    cta: "Valorizar meus traços",
  },
  {
    number: "04",
    title: "Beleza e autocuidado",
    subtitle: "Serviços complementares para um cuidado mais completo.",
    text: "A clínica também oferece serviços voltados ao bem-estar e ao autocuidado, como parte complementar da experiência em estética facial e saúde da pele.",
    possibilities: [
      "Manicure",
      "Cuidados com as unhas",
      "Serviços complementares de beleza",
    ],
    benefits: [
      "Mais praticidade na sua rotina",
      "Experiência de cuidado integrada",
      "Atendimento acolhedor",
    ],
    cta: "Conhecer serviços complementares",
  },
];

const resultCategories = [
  {
    title: "Melasma e manchas",
    text: "Evolução após plano individualizado para o cuidado de manchas e uniformização da pele.",
  },
  {
    title: "Rejuvenescimento",
    text: "Cuidado voltado à qualidade da pele e à suavização de sinais, preservando os traços da paciente.",
  },
  {
    title: "Textura e luminosidade",
    text: "Evolução da textura e da luminosidade da pele ao longo do acompanhamento.",
  },
  {
    title: "Olheiras e valorização facial",
    text: "Tratamento planejado conforme as características e os objetivos individuais da paciente.",
  },
];

const testimonials = [
  "Desde a primeira avaliação, senti que o atendimento era realmente direcionado para mim. Tudo foi explicado com calma e clareza.",
  "Eu tinha medo de ficar com um resultado artificial. O cuidado respeitou meus traços e me deixou muito mais segura.",
  "Já havia tentado outros cuidados para as manchas, mas nunca tinha recebido uma orientação tão completa.",
  "O ambiente, o atendimento e o acompanhamento fizeram toda a diferença na minha experiência.",
];

const journey = [
  {
    title: "Contato pelo WhatsApp",
    text: "Você informa à equipe que deseja agendar uma avaliação.",
  },
  {
    title: "Agendamento",
    text: "A equipe apresenta os horários disponíveis e orienta sobre a visita.",
  },
  {
    title: "Avaliação personalizada",
    text: "Rita conhece suas queixas, seu histórico e seus objetivos, além de analisar sua pele.",
  },
  {
    title: "Definição do plano",
    text: "As possibilidades são explicadas com clareza e o plano é definido conforme o seu caso.",
  },
  {
    title: "Tratamento e acompanhamento",
    text: "Os procedimentos são realizados e a evolução é acompanhada ao longo do processo.",
  },
];

const faqs = [
  {
    question: "Como funciona a avaliação personalizada?",
    answer:
      "A avaliação é o primeiro momento de compreensão da paciente e da pele. São considerados a queixa principal, o histórico, a rotina, os tratamentos anteriores, as características da pele e os objetivos. A partir disso, Rita explica quais possibilidades podem ser consideradas.",
  },
  {
    question: "Preciso saber qual tratamento desejo antes de agendar?",
    answer:
      "Não. Você pode agendar sabendo apenas o que deseja cuidar. A escolha do tratamento acontece depois da avaliação, com base nas necessidades da sua pele.",
  },
  {
    question: "O Melasma Control é indicado para todos os casos?",
    answer:
      "Não existe uma indicação única para todas as pacientes. O método é planejado de acordo com as características, o histórico e as necessidades de cada caso. A indicação depende de avaliação.",
  },
  {
    question: "Quantas sessões podem ser necessárias?",
    answer:
      "A quantidade varia conforme o tratamento, a necessidade da pele e a resposta individual. Uma estimativa pode ser apresentada depois da avaliação.",
  },
  {
    question: "Os procedimentos exigem tempo de recuperação?",
    answer:
      "Depende do procedimento. Alguns cuidados permitem retomar rapidamente a rotina; outros podem exigir orientações específicas ou um período de recuperação. Tudo é explicado antes do início.",
  },
  {
    question: "Os resultados são imediatos ou progressivos?",
    answer:
      "Alguns tratamentos podem apresentar mudanças iniciais mais rapidamente. Outros dependem de evolução progressiva e acompanhamento. A resposta varia conforme a pele, o tratamento e os cuidados adotados.",
  },
  {
    question: "Como saber qual tratamento é ideal para minha pele?",
    answer:
      "A avaliação personalizada é a forma mais segura de compreender quais possibilidades fazem sentido para você, evitando escolhas baseadas apenas em tendências ou recomendações genéricas.",
  },
  {
    question: "A clínica atende quais faixas etárias?",
    answer:
      "A clínica atende pacientes adultas com diferentes necessidades relacionadas à estética facial, à saúde e à qualidade da pele. A indicação depende das características e objetivos de cada pessoa.",
  },
  {
    question: "Quais cuidados devo seguir antes e depois?",
    answer:
      "Os cuidados variam conforme o procedimento. Cada paciente recebe orientações claras sobre preparação, rotina, exposição solar, produtos e cuidados posteriores.",
  },
  {
    question: "Como realizar o agendamento?",
    answer:
      "O agendamento é realizado pelo WhatsApp da clínica. A equipe apresenta os horários disponíveis e orienta sobre a avaliação.",
  },
  {
    question: "Onde a clínica está localizada?",
    answer:
      "Na Rua João Pessoa, 603, em Santa Cruz do Sul, Rio Grande do Sul. O atendimento é realizado com hora marcada.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "As formas de pagamento disponíveis podem variar conforme o serviço. Consulte a equipe no momento do agendamento.",
  },
];

function WhatsAppIcon() {
  return (
    <span className="button-icon" aria-hidden="true">
      <img src="/assets/whatsapp.svg" alt="" />
    </span>
  );
}

function ExternalIcon() {
  return (
    <span className="button-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="presentation">
        <path d="M7 17 17 7M9 7h8v8" />
      </svg>
    </span>
  );
}

function PrimaryLink({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button--light" : ""}`}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <WhatsAppIcon />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Clínica Rita Sudbrack">
          <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre Rita</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#clinica">A Clínica</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <a
          className="header-cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Agendar avaliação <WhatsAppIcon />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu">Menu</summary>
          <nav aria-label="Navegação para celular">
            <a href="#sobre">Sobre Rita</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#resultados">Resultados</a>
            <a href="#clinica">A Clínica</a>
            <a href="#duvidas">Dúvidas</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar avaliação
            </a>
          </nav>
        </details>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Estética facial • Santa Cruz do Sul</p>
          <h1>
            Cuidado especializado para uma pele mais{" "}
            <em>saudável, bonita e natural</em>
          </h1>
          <div className="hero-intro">
            <p>Cada pele tem uma história.</p>
            <p>
              Por isso, cada tratamento começa com escuta, análise e um plano
              pensado de forma individual.
            </p>
          </div>
          <p className="hero-description">
            Estética facial e saúde da pele caminham juntas para valorizar sua
            beleza sem excessos e sem apagar aquilo que torna você única.
          </p>
          <div className="hero-actions">
            <PrimaryLink>Agendar minha avaliação</PrimaryLink>
            <a className="text-link" href="#tratamentos">
              Conhecer os tratamentos
              <span className="text-link-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </span>
            </a>
          </div>
          <p className="credibility">
            Especialização em estética facial, melasma, manchas e cuidados
            personalizados para a pele.
          </p>
        </div>

        <div className="hero-visual">
          <div className="image-frame image-frame--hero">
            <img
              src="/assets/images/hero-portrait.webp"
              alt="Retrato de uma mulher adulta com pele natural"
            />
          </div>
          <div className="hero-seal" aria-hidden="true">
            <span>cuidado</span>
            <strong>01</strong>
            <span>individual</span>
          </div>
          <p className="image-caption">Naturalidade em cada detalhe.</p>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <span>CUIDADO INDIVIDUAL</span>
        <i>•</i>
        <span>PELE SAUDÁVEL</span>
        <i>•</i>
        <span>BELEZA SEM EXCESSOS</span>
        <i>•</i>
        <span>NATURALIDADE</span>
      </div>

      <section className="about section-shell" id="sobre">
        <div className="about-intro">
          <p className="eyebrow">Sobre Rita</p>
          <h2>
            Conhecimento para orientar. <em>Sensibilidade</em> para compreender.
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p className="lead">
              Rita Sudbrack acredita que cuidar da aparência também é cuidar da
              forma como uma mulher se percebe.
            </p>
            <p>
              Por isso, seu trabalho não começa pela indicação de um
              procedimento. Começa pela compreensão de cada paciente.
            </p>
            <p>
              Necessidades, histórico, rotina, expectativas e características
              da pele são consideradas antes da definição de qualquer
              tratamento. Assim, o cuidado se torna mais consciente, individual
              e coerente com o resultado desejado.
            </p>
            <div className="short-lines" aria-label="Princípios do atendimento">
              <span>Sem exageros.</span>
              <span>Sem recomendações automáticas.</span>
              <span>Sem padrões que apagam sua individualidade.</span>
            </div>
          </div>

          <div className="about-visual">
            <div className="image-frame image-frame--consultation">
              <img
                src="/assets/images/consultation.webp"
                alt="Consulta cuidadosa entre profissional e paciente adulta"
              />
            </div>
          </div>
        </div>

        <div className="purpose-grid">
          <div>
            <p className="eyebrow">Estética com propósito</p>
            <h3>
              Um bom tratamento respeita os traços e contribui para uma relação
              mais positiva com a própria imagem.
            </h3>
          </div>
          <ul className="clean-list">
            {[
              "Conhecimento técnico",
              "Escuta cuidadosa",
              "Planejamento individual",
              "Comunicação clara",
              "Acompanhamento próximo",
              "Respeito ao tempo de cada pele",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <blockquote className="quote-block">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <p>
            Minha missão é cuidar da sua pele com atenção, conhecimento e
            respeito à sua individualidade, para que você se sinta bonita sem
            deixar de ser você.
          </p>
          <footer>
            <strong>Rita Sudbrack</strong>
            <span>
              Esteticista e cosmetóloga • Especialista em estética facial •
              atuação desde 2016
            </span>
          </footer>
        </blockquote>
      </section>

      <section className="method" id="diferenciais">
        <div className="section-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Nosso método</p>
              <h2>
                Sua pele não precisa de uma indicação <em>genérica</em>
              </h2>
            </div>
            <p>
              O mesmo incômodo pode ter causas, intensidades e necessidades
              diferentes. Cada atendimento segue um processo para compreender,
              planejar, cuidar e acompanhar.
            </p>
          </div>

          <div className="steps-grid">
            {careSteps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="differentials-layout">
            <div>
              <p className="eyebrow">Por que escolher a clínica</p>
              <h3>Cuidado que considera você por inteiro.</h3>
            </div>
            <ul className="check-list">
              {differentials.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <article className="melasma-card">
            <div className="melasma-index" aria-hidden="true">
              MC
            </div>
            <div>
              <p className="eyebrow">Diferencial exclusivo</p>
              <h3>Melasma Control</h3>
            </div>
            <div className="melasma-copy">
              <p>
                Um método voltado ao cuidado individualizado de pacientes que
                convivem com melasma e manchas.
              </p>
              <p>
                Em vez de tratar todos os casos da mesma forma, considera o
                histórico, as características da pele, a intensidade do quadro
                e os fatores relacionados à sua evolução.
              </p>
              <p className="small-note">
                A indicação e as etapas dependem de avaliação personalizada.
              </p>
              <PrimaryLink>Conhecer o Melasma Control</PrimaryLink>
            </div>
          </article>
        </div>
      </section>

      <section className="treatments section-shell" id="tratamentos">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Tratamentos</p>
            <h2>
              Você não precisa saber o nome do <em>procedimento</em>
            </h2>
          </div>
          <div>
            <p className="lead">Precisa apenas entender o que deseja cuidar.</p>
            <p>
              A escolha não deve acontecer por tentativa, tendência ou
              indicação genérica. Ela acontece depois de uma avaliação.
            </p>
          </div>
        </div>

        <div className="treatment-list">
          {treatments.map((treatment, index) => (
            <details className="treatment-card" key={treatment.title} open={index === 0}>
              <summary>
                <span className="treatment-number">{treatment.number}</span>
                <span>
                  <strong>{treatment.title}</strong>
                  <small>{treatment.subtitle}</small>
                </span>
                <i aria-hidden="true">+</i>
              </summary>
              <div className="treatment-content">
                <p className="treatment-description">{treatment.text}</p>
                <div>
                  <h4>Possibilidades de cuidado</h4>
                  <ul>
                    {treatment.possibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Pode beneficiar quem deseja</h4>
                  <ul>
                    {treatment.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="treatment-action">
                  <span>A indicação depende de avaliação.</span>
                  <PrimaryLink>{treatment.cta}</PrimaryLink>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="results" id="resultados">
        <div className="section-shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Resultados e confiança</p>
              <h2>
                Resultados reais começam com <em>expectativas reais</em>
              </h2>
            </div>
            <p>
              Cada pele responde de uma maneira. O compromisso é oferecer um
              cuidado responsável, acompanhar a evolução e buscar resultados
              naturais dentro das possibilidades de cada caso.
            </p>
          </div>

          <div className="results-grid">
            {resultCategories.map((result, index) => (
              <article className="result-card" key={result.title}>
                <div className={`result-placeholder result-placeholder--${index + 1}`}>
                  <span>Área reservada para resultado autorizado</span>
                </div>
                <p className="result-index">0{index + 1}</p>
                <h3>{result.title}</h3>
                <p>{result.text}</p>
              </article>
            ))}
          </div>

          <p className="legal-note">
            Os resultados variam conforme as características da pele, o
            tratamento realizado, os cuidados adotados e a resposta individual
            de cada paciente.
          </p>

          <div className="testimonials">
            <div className="testimonials-heading">
              <p className="eyebrow">Experiências</p>
              <h3>O que dizem as pacientes</h3>
              <p>
                Abaixo, a estrutura preparada para receber relatos reais e
                autorizados.
              </p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial}>
                  <span aria-hidden="true">“</span>
                  <p>{testimonial}</p>
                  <footer>Relato demonstrativo • substituir por paciente</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="clinic section-shell" id="clinica">
        <div className="clinic-layout">
          <div className="clinic-image-wrap">
            <img
              src="/assets/images/clinic-interior.webp"
              alt="Ambiente de clínica acolhedor em tons naturais"
            />
            <span>Imagem conceitual • substituir por foto do espaço</span>
          </div>
          <div className="clinic-copy">
            <p className="eyebrow">A experiência da clínica</p>
            <h2>
              Um espaço pensado para cuidar de você com{" "}
              <em>conforto e privacidade</em>
            </h2>
            <p className="lead">
              A experiência da paciente não começa no procedimento. Ela começa
              na forma como é recebida.
            </p>
            <p>
              Um ambiente onde você pode conversar com tranquilidade,
              esclarecer dúvidas e compreender suas possibilidades antes de
              tomar qualquer decisão.
            </p>
            <ul className="clinic-features">
              {[
                "Atendimento com hora marcada",
                "Privacidade durante a avaliação",
                "Salas preparadas para os atendimentos",
                "Comunicação clara e acolhedora",
                "Orientação antes e depois",
                "Acompanhamento durante o processo",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="journey">
          <div className="journey-heading">
            <p className="eyebrow">Sua jornada</p>
            <h3>Do primeiro contato ao acompanhamento</h3>
            <p>
              Você não precisa escolher um tratamento antes de entrar em
              contato. A avaliação existe justamente para ajudar nessa decisão.
            </p>
          </div>
          <ol>
            {journey.map((item, index) => (
              <li key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="location-card">
          <div>
            <p className="eyebrow">Localização</p>
            <h3>Clínica Rita Sudbrack</h3>
          </div>
          <address>
            <strong>Rua João Pessoa, 603</strong>
            <span>Santa Cruz do Sul — RS</span>
            <span>Atendimento com hora marcada</span>
          </address>
          <a
            className="button button--light"
            href="https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Pessoa%2C%20603%2C%20Santa%20Cruz%20do%20Sul%2C%20RS"
            target="_blank"
            rel="noreferrer"
          >
            <span>Ver no mapa</span>
            <ExternalIcon />
          </a>
        </div>
      </section>

      <section className="faq" id="duvidas">
        <div className="section-shell faq-layout">
          <div className="faq-heading">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2>
              Informação também é uma forma de <em>cuidado</em>
            </h2>
            <p>
              Reunimos respostas para as perguntas mais comuns antes da
              avaliação.
            </p>
            <PrimaryLink>Falar com a clínica</PrimaryLink>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div className="final-cta-ornament" aria-hidden="true">
          RS
        </div>
        <div className="section-shell final-cta-content">
          <p className="eyebrow">Seu primeiro passo</p>
          <h2>
            O primeiro passo não é escolher um procedimento.{" "}
            <em>É compreender o que sua pele precisa.</em>
          </h2>
          <p>
            Conheça suas possibilidades, esclareça dúvidas e construa um plano
            de cuidado mais seguro e coerente com você. Sem pressão. Sem
            indicações automáticas. Com conhecimento, individualidade e
            naturalidade.
          </p>
          <PrimaryLink light>Agendar avaliação pelo WhatsApp</PrimaryLink>
          <span className="cta-support">
            Converse com a equipe e encontre o melhor horário para sua avaliação.
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
            <p>Estética facial, saúde da pele e cuidado individualizado.</p>
          </div>
          <div>
            <p className="footer-title">Navegação</p>
            <nav>
              <a href="#sobre">Sobre Rita</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#tratamentos">Tratamentos</a>
              <a href="#resultados">Resultados</a>
              <a href="#clinica">A Clínica</a>
              <a href="#duvidas">Perguntas frequentes</a>
            </nav>
          </div>
          <div>
            <p className="footer-title">Contato</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
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
          <span>© 2026 Clínica Rita Sudbrack. Todos os direitos reservados.</span>
          <span>Responsável técnica e registro profissional: inserir.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Clínica Rita Sudbrack pelo WhatsApp"
      >
        <WhatsAppIcon />
        <span>Falar com a clínica</span>
      </a>
    </main>
  );
}
