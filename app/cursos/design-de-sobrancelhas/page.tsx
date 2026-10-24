import type { Metadata } from "next";
import CourseModules from "./CourseModules";
import SymeSignature from "../../components/SymeSignature";

export const metadata: Metadata = {
  title: "Curso de Design de Sobrancelhas | Clínica Rita Sudbrack",
  description:
    "Conheça o conteúdo, os benefícios e as informações do Curso de Design de Sobrancelhas da Clínica Rita Sudbrack.",
};

export default function CoursePage() {
  return (
    <main className="course-detail-page">
      <header className="site-header course-detail-header">
        <a className="brand" href="/" aria-label="Clínica Rita Sudbrack">
          <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação do curso">
          <a href="/#cursos">{"Cursos profissionais"}</a>
          <a href="#conteudo">{"Conteúdo"}</a>
          <a href="#informacoes">{"Informações"}</a>
        </nav>
        <a
          className="header-cta"
          href="https://wa.me/5551995599459?text=Ol%C3%A1!%20Gostaria%20de%20saber%20a%20data%20da%20pr%C3%B3xima%20turma%20e%20a%20disponibilidade%20de%20vagas%20para%20o%20Curso%20de%20Design%20de%20Sobrancelhas%20da%20Cl%C3%ADnica%20Rita%20Sudbrack.%20Tamb%C3%A9m%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20op%C3%A7%C3%B5es%20Normal%20e%20VIP%20e%20o%20parcelamento%20em%20at%C3%A9%2020x%20no%20cart%C3%A3o."
          target="_blank"
          rel="noreferrer"
        >
          {"Consultar próxima turma "}
          <span className="button-icon" aria-hidden="true">
            <img src="/assets/whatsapp.svg" alt="" />
          </span>
        </a>
        <a className="course-mobile-back" href="/#cursos">
          {"Voltar"}
        </a>
      </header>
      <section className="course-detail-hero">
        <div className="section-shell course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <a className="course-breadcrumb" href="/#cursos">
              {"Clínica Rita Sudbrack "}
              <span>{"—"}</span>
              {" Cursos profissionais"}
            </a>
            <p className="eyebrow">{"Formação profissional"}</p>
            <h1>{"Curso de Design de Sobrancelhas"}</h1>
            <p className="lead">
              {
                "Uma formação para aprender técnicas profissionais com segurança, atenção aos detalhes e prática orientada."
              }
            </p>
            <p>
              {
                "Dos fundamentos de biossegurança e anatomia às técnicas de visagismo, mapeamento, epilação, henna, tintura, acabamento e prática supervisionada."
              }
            </p>
            <div className="course-detail-actions">
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
              <a className="text-link" href="#conteudo">
                {"Conhecer o conteúdo"}
                <span className="text-link-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M12 5v14M6 13l6 6 6-6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="course-detail-hero-visual">
            <img
              src="/assets/images/curso-design-sobrancelhas.png"
              alt="Treinamento profissional de design de sobrancelhas em ambiente clínico"
            />
            <div
              className="course-badges"
              aria-label="Características do curso"
            >
              <span>{"Curso presencial"}</span>
              <span>{"2 dias de curso"}</span>
              <span>{"Até 3 alunas"}</span>
              <span>{"Acompanhamento vitalício"}</span>
              <span>{"Até 20x no cartão"}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="course-detail-overview section-shell">
        <div className="course-detail-overview-heading">
          <p className="eyebrow">{"O que você vai desenvolver"}</p>
          <h2>{"Base técnica, precisão e prática orientada."}</h2>
        </div>
        <div className="course-detail-benefits">
          <article>
            <span className="benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M12 3 5.5 5.8v5.4c0 4.2 2.6 7.5 6.5 9.8 3.9-2.3 6.5-5.6 6.5-9.8V5.8L12 3Z" />
                <path d="m9.2 12 1.8 1.8 3.9-4.1" />
              </svg>
            </span>
            <strong>{"Fundamentos técnicos e biossegurança"}</strong>
            <p>{"Uma base responsável para atender com segurança."}</p>
          </article>
          <article>
            <span className="benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M6.2 13.5c.4 4.1 2.4 6.5 5.8 7.5 3.4-1 5.4-3.4 5.8-7.5" />
                <path d="M5 10.5C5 6.4 8.1 3 12 3s7 3.4 7 7.5" />
                <path d="M8.3 10.2c1.1-.9 2.2-.9 3.3 0M12.4 10.2c1.1-.9 2.2-.9 3.3 0M12 11.5v3" />
              </svg>
            </span>
            <strong>{"Visagismo e mapeamento personalizado"}</strong>
            <p>{"Leitura facial e planejamento para cada cliente."}</p>
          </article>
          <article>
            <span className="benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="m4 19 5.2-5.2M7 17l-2-2M10 13l8-8a1.4 1.4 0 0 1 2 2l-8 8" />
                <path d="M14.5 5.5 18.5 9.5" />
              </svg>
            </span>
            <strong>{"Epilação, henna e tintura"}</strong>
            <p>{"Técnicas completas para execução e acabamento."}</p>
          </article>
          <article>
            <span className="benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M4 18.5V7.2A2.2 2.2 0 0 1 6.2 5H10l2 2h5.8A2.2 2.2 0 0 1 20 9.2v9.3" />
                <path d="M8 13h8M12 9v8" />
              </svg>
            </span>
            <strong>{"Prática em moldes e modelos reais"}</strong>
            <p>{"Treinamento progressivo com orientação próxima."}</p>
          </article>
        </div>
        <div className="course-detail-summary">
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
          <div>
            <span>{"Nível"}</span>
            <strong>{"Iniciante"}</strong>
          </div>
        </div>
      </section>
      <section className="course-detail-program" id="conteudo">
        <div className="section-shell">
          <div className="course-subheading">
            <div>
              <p className="eyebrow">{"Ementa organizada"}</p>
              <h2>{"Conteúdo do Curso"}</h2>
            </div>
            <p>
              {
                "Explore os módulos para conhecer os temas e as atividades que fazem parte da formação. Um módulo permanece aberto por vez."
              }
            </p>
          </div>
          <CourseModules />
        </div>
      </section>
      <section
        className="course-information course-detail-information"
        id="informacoes"
      >
        <div className="section-shell">
          <div className="course-subheading">
            <div>
              <p className="eyebrow">{"Antes de se inscrever"}</p>
              <h2>{"Informações do Curso"}</h2>
            </div>
            <p>
              {
                "Conheça o formato da formação, o que está incluído e as duas opções de investimento disponíveis. O pagamento pode ser parcelado em até 20x no cartão."
              }
            </p>
          </div>
          <div className="course-info-grid">
            <article className="course-info-card ">
              <span className="course-info-index">{"01"}</span>
              <p>{"Modalidade"}</p>
              <strong>{"Presencial"}</strong>
              <small>{"Formação realizada presencialmente."}</small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"02"}</span>
              <p>{"Local do curso"}</p>
              <strong>{"Clínica Rita Sudbrack"}</strong>
              <small>
                {"Endereço completo informado no momento da inscrição."}
              </small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"03"}</span>
              <p>{"Duração"}</p>
              <strong>{"2 dias de curso"}</strong>
              <small>
                {
                  "Conteúdo teórico e atividades práticas distribuídos em dois dias."
                }
              </small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"04"}</span>
              <p>{"Tamanho da turma"}</p>
              <strong>{"Máximo de 3 alunas"}</strong>
              <small>
                {"Turma reduzida para permitir acompanhamento próximo."}
              </small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"05"}</span>
              <p>{"Materiais incluídos"}</p>
              <strong>{"Apostila + material básico"}</strong>
              <small>
                {"Material básico para começar a trabalhar após a formação."}
              </small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"06"}</span>
              <p>{"Certificado"}</p>
              <strong>{"Certificado incluso"}</strong>
              <small>{"Entregue ao final da formação."}</small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"07"}</span>
              <p>{"Nível"}</p>
              <strong>{"Iniciante"}</strong>
              <small>{"Não é necessário ter experiência prévia."}</small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"08"}</span>
              <p>{"Acompanhamento"}</p>
              <strong>{"Vitalício"}</strong>
              <small>{"Suporte contínuo após a conclusão do curso."}</small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"09"}</span>
              <p>{"Modelos e redes sociais"}</p>
              <strong>{"Fotos para seu portfólio"}</strong>
              <small>
                {"Uso das fotos das modelos para divulgação nas redes sociais."}
              </small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"10"}</span>
              <p>{"Próxima turma"}</p>
              <strong>{"Consultar"}</strong>
              <small>
                {"A próxima data será informada diretamente pela equipe."}
              </small>
            </article>
            <article className="course-info-card ">
              <span className="course-info-index">{"11"}</span>
              <p>{"Investimento normal"}</p>
              <strong>{"R$ 990"}</strong>
              <small>
                {
                  "Formação completa em Design de Sobrancelhas. Até 20x no cartão."
                }
              </small>
            </article>
            <article className="course-info-card course-info-card--featured">
              <span className="course-info-index">{"12"}</span>
              <p>{"Investimento VIP"}</p>
              <strong>{"R$ 1.200"}</strong>
              <small>
                {
                  "Inclui o curso de Brow Lamination como bônus. Até 20x no cartão."
                }
              </small>
            </article>
          </div>
          <div className="course-conversion">
            <div>
              <p className="eyebrow">{"Próxima turma"}</p>
              <h3>
                {"Aprenda uma técnica profissional com prática orientada."}
              </h3>
            </div>
            <div>
              <p>
                {
                  "Consulte a data da próxima turma e confirme a disponibilidade de vagas diretamente com a equipe da Clínica Rita Sudbrack."
                }
              </p>
              <a
                className="button button--light"
                href="https://wa.me/5551995599459?text=Ol%C3%A1!%20Gostaria%20de%20saber%20a%20data%20da%20pr%C3%B3xima%20turma%20e%20a%20disponibilidade%20de%20vagas%20para%20o%20Curso%20de%20Design%20de%20Sobrancelhas%20da%20Cl%C3%ADnica%20Rita%20Sudbrack.%20Tamb%C3%A9m%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20op%C3%A7%C3%B5es%20Normal%20e%20VIP%20e%20o%20parcelamento%20em%20at%C3%A9%2020x%20no%20cart%C3%A3o."
                target="_blank"
                rel="noreferrer"
              >
                <span>{"Quero saber sobre a próxima turma"}</span>
                <span className="button-icon" aria-hidden="true">
                  <img src="/assets/whatsapp.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer course-detail-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
            <p>
              {"Formação profissional com conhecimento, precisão e prática."}
            </p>
          </div>
          <div>
            <p className="footer-title">{"Navegação"}</p>
            <nav>
              <a href="/">{"Página inicial"}</a>
              <a href="/#cursos">{"Cursos profissionais"}</a>
              <a href="#conteudo">{"Conteúdo do curso"}</a>
              <a href="#informacoes">{"Informações"}</a>
            </nav>
          </div>
          <div>
            <p className="footer-title">{"Contato"}</p>
            <a
              href="https://wa.me/5551995599459?text=Ol%C3%A1!%20Gostaria%20de%20saber%20a%20data%20da%20pr%C3%B3xima%20turma%20e%20a%20disponibilidade%20de%20vagas%20para%20o%20Curso%20de%20Design%20de%20Sobrancelhas%20da%20Cl%C3%ADnica%20Rita%20Sudbrack.%20Tamb%C3%A9m%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20op%C3%A7%C3%B5es%20Normal%20e%20VIP%20e%20o%20parcelamento%20em%20at%C3%A9%2020x%20no%20cart%C3%A3o."
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
        href="https://wa.me/5551995599459?text=Ol%C3%A1!%20Gostaria%20de%20saber%20a%20data%20da%20pr%C3%B3xima%20turma%20e%20a%20disponibilidade%20de%20vagas%20para%20o%20Curso%20de%20Design%20de%20Sobrancelhas%20da%20Cl%C3%ADnica%20Rita%20Sudbrack.%20Tamb%C3%A9m%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20op%C3%A7%C3%B5es%20Normal%20e%20VIP%20e%20o%20parcelamento%20em%20at%C3%A9%2020x%20no%20cart%C3%A3o."
        target="_blank"
        rel="noreferrer"
        aria-label="Perguntar sobre o Curso de Design de Sobrancelhas pelo WhatsApp"
      >
        <span className="button-icon" aria-hidden="true">
          <img src="/assets/whatsapp.svg" alt="" />
        </span>
        <span>{"Consultar próxima turma"}</span>
      </a>
    </main>
  );
}
