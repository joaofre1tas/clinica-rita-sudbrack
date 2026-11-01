import ResultsCarousel from "./ResultsCarousel";
import SymeSignature from "./SymeSignature";
import EditorialHero from "./EditorialHero";
import EditorialAbout from "./EditorialAbout";
import AppointmentButton from "./AppointmentButton";
import SiteHeader from "./SiteHeader";
import MethodStage from "./MethodStage";
import WhyBento from "./WhyBento";
import TreatmentsPicker from "./TreatmentsPicker";
import CoursesShowcase from "./CoursesShowcase";
import "../hero.css";

export default function ClinicHome({
  heroVariant = "green",
  aboutVariant = "original",
}: {
  heroVariant?: "green" | "beige";
  aboutVariant?: "original" | "editorial";
}) {
  return (
    <main>
      <div
        className={
          heroVariant === "beige"
            ? "hero-masthead hero-masthead--beige"
            : "hero-masthead"
        }
      >
        <SiteHeader />
        <EditorialHero variant={heroVariant} />
      </div>
      {heroVariant === "green" && (
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
      )}
      {aboutVariant === "editorial" ? (
        <EditorialAbout />
      ) : (
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
      )}
      <MethodStage />
      <WhyBento>
        <article className="melasma-card">
          <div className="melasma-card-photo">
            {/* Placeholder: trocar pela foto real quando existir. */}
            <span>
              Foto de fundo a incluir: pele em close ou Rita em atendimento,
              formato horizontal, com área livre à direita
            </span>
          </div>
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
            <AppointmentButton
                tone="light"
                href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada.">
              {"Conhecer o Melasma Control"}
            </AppointmentButton>
          </div>
        </article>
      </WhyBento>
      <TreatmentsPicker />
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
          <CoursesShowcase />
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
          <AppointmentButton tone="light" href="https://www.google.com/maps/search/?api=1&query=Rua%20Jo%C3%A3o%20Pessoa%2C%20603%2C%20Santa%20Cruz%20do%20Sul%2C%20RS">
            {"Ver no mapa"}
          </AppointmentButton>
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
            <AppointmentButton href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada.">
              {"Falar com a clínica"}
            </AppointmentButton>
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
          <AppointmentButton tone="light" href="https://wa.me/5551995599459?text=Ol%C3%A1%21%20Conheci%20a%20Cl%C3%ADnica%20Rita%20Sudbrack%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20avalia%C3%A7%C3%A3o%20personalizada.">
            {"Agendar avaliação pelo WhatsApp"}
          </AppointmentButton>
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
            <p className="brand-slogan">Estética que reflete a alma.</p>
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
          <SymeSignature />
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
