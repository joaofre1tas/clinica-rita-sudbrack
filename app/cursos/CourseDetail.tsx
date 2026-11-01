import type { ReactNode } from "react";
import Link from "next/link";
import AppointmentButton from "../components/AppointmentButton";
import SiteHeader from "../components/SiteHeader";
import SymeSignature from "../components/SymeSignature";
import type { Course } from "./courses";
import "./course-detail.css";

type CourseDetailProps = {
  course: Course;
  /* Conteúdo programático, para os cursos que já têm os módulos definidos. */
  program?: ReactNode;
};

export default function CourseDetail({ course, program }: CourseDetailProps) {
  const whatsappUrl = `https://wa.me/5551995599459?text=${encodeURIComponent(course.whatsappMessage)}`;

  return (
    <main className="cd-page">
      <SiteHeader
        basePath="/"
        className="cd-header"
        cta={{ label: course.ctaLabel, href: whatsappUrl }}
      />

      <section className="cd-hero section-shell" aria-labelledby="cd-title">
        {course.image ? (
          <img
            className="cd-hero-photo"
            src={course.image}
            alt={course.imageAlt}
          />
        ) : (
          /* Placeholder: trocar pela foto real quando existir. */
          <div className="cd-hero-photo cd-hero-placeholder">
            <span>{course.photoBrief}</span>
          </div>
        )}
        <div className="cd-hero-content">
          <div className="cd-hero-copy">
            <p className="eyebrow">Curso profissional</p>
            <h1 id="cd-title">{course.name}</h1>
            <p className="cd-hero-lead">{course.lead}</p>
          </div>
          <aside className="cd-hero-card" aria-label="Resumo do curso">
            <ul>
              {course.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <AppointmentButton
              tone="light"
              className="appointment-cta--full"
              href={whatsappUrl}
            >
              {course.ctaLabel}
            </AppointmentButton>
          </aside>
        </div>
      </section>

      <section className="cd-info section-shell" id="informacoes">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Antes de se inscrever</p>
            <h2>{course.infoTitle}</h2>
          </div>
          <p>{course.infoText}</p>
        </div>
        <div className="cd-info-grid">
          {course.info.map((item) => (
            <article
              key={item.label}
              className={`cd-info-tile ${item.featured ? "cd-info-tile--featured" : ""}`}
            >
              <p>{item.label}</p>
              <div>
                <h3>{item.value}</h3>
                {item.note && <small>{item.note}</small>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {program && (
        <section className="cd-program" id="conteudo">
          <div className="section-shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Ementa organizada</p>
                <h2>Conteúdo do curso</h2>
              </div>
              <p>
                Explore os módulos para conhecer os temas e as atividades que
                fazem parte da formação.
              </p>
            </div>
            {program}
          </div>
        </section>
      )}

      <section className="final-cta">
        <div className="final-cta-ornament" aria-hidden="true" />
        <div className="section-shell final-cta-content">
          <p className="eyebrow">Próximo passo</p>
          <h2>{course.closingTitle}</h2>
          <p>{course.closingText}</p>
          <AppointmentButton tone="light" href={whatsappUrl}>
            {course.ctaLabel}
          </AppointmentButton>
        </div>
      </section>

      <footer className="site-footer course-detail-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <img src="/assets/logo.svg" alt="Clínica Rita Sudbrack" />
            <p className="brand-slogan">Estética que reflete a alma.</p>
          </div>
          <div>
            <p className="footer-title">Navegação</p>
            <nav>
              <Link href="/">Página inicial</Link>
              <Link href="/#cursos">Cursos profissionais</Link>
              {program && <a href="#conteudo">Conteúdo do curso</a>}
              <a href="#informacoes">Informações</a>
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
          <span>
            © 2026 Clínica Rita Sudbrack. Todos os direitos reservados.
          </span>
          <SymeSignature />
        </div>
      </footer>
    </main>
  );
}
