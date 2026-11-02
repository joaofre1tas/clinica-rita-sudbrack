import Link from "next/link";
import "../courses-showcase.css";

type Course = {
  name: string;
  summary: string;
  facts: string[];
  href: string;
  linkLabel: string;
  image?: string;
  imageAlt?: string;
  photoBrief?: string;
};

const courses: Course[] = [
  {
    name: "Design de Sobrancelhas",
    summary: "Formação completa, da biossegurança à prática com modelos reais.",
    facts: ["Presencial", "2 dias", "Máximo de 3 alunas"],
    href: "/cursos/design-de-sobrancelhas",
    linkLabel: "Conhecer o curso",
    image: "/assets/images/editorial/curso-sobrancelhas-card.webp",
    imageAlt:
      "Demonstração de técnica de design de sobrancelhas",
  },
  {
    name: "Limpeza de Pele",
    summary:
      "Inclui apostila, certificado e materiais para iniciar seus atendimentos.",
    facts: ["Presencial", "2 dias", "Máximo de 2 alunos"],
    href: "/cursos/limpeza-de-pele",
    linkLabel: "Conhecer o curso",
    image: "/assets/images/editorial/curso-limpeza.webp",
    imageAlt: "Prática de limpeza de pele",
  },
  {
    name: "Melasma Control",
    summary: "Protocolo de melasma para profissionais da área da beleza.",
    facts: ["Presencial", "2 dias", "Máximo de 2 alunos"],
    href: "/cursos/melasma-control",
    linkLabel: "Conhecer o curso",
    image: "/assets/images/editorial/curso-melasma.webp",
    imageAlt: "Prática de cuidados com melasma",
  },
];

export default function CoursesShowcase() {
  return (
    <div className="courses-showcase">
      {courses.map((course) => (
        <Link key={course.name} className="course-tile" href={course.href}>
          {course.image ? (
            <img
              className="course-tile-photo"
              src={course.image}
              alt={course.imageAlt}
              loading="lazy"
            />
          ) : (
            /* Placeholder: trocar pela foto real quando existir. */
            <div className="course-tile-photo course-tile-placeholder">
              <span>{course.photoBrief}</span>
            </div>
          )}
          <div className="course-tile-info">
            <h3>{course.name}</h3>
            <p>{course.summary}</p>
            <p className="course-tile-facts">{course.facts.join(" · ")}</p>
            <span className="course-tile-link">
              {course.linkLabel}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
