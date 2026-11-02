export type CourseInfo = {
  label: string;
  value: string;
  note?: string;
  featured?: boolean;
};

export type Course = {
  slug: string;
  name: string;
  metaDescription: string;
  lead: string;
  facts: string[];
  image?: string;
  imageAlt?: string;
  photoBrief?: string;
  ctaLabel: string;
  whatsappMessage: string;
  infoTitle: string;
  infoText: string;
  info: CourseInfo[];
  closingTitle: string;
  closingText: string;
};

/* Limpeza de Pele e Melasma Control compartilham as condições do curso. */
const sharedInfo: CourseInfo[] = [
  { label: "Modalidade", value: "Presencial" },
  { label: "Duração", value: "2 dias" },
  { label: "Turma", value: "Máximo de 2 alunos" },
  { label: "Data", value: "Conforme sua disponibilidade" },
  {
    label: "Materiais",
    value: "Apostila e materiais",
    note: "Para iniciar seus atendimentos.",
  },
  { label: "Certificado", value: "Incluso" },
  { label: "Formato", value: "Opção VIP disponível" },
  {
    label: "Valores",
    value: "Sob consulta",
    note: "Consulte pelo WhatsApp.",
    featured: true,
  },
];

export const courses = {
  designDeSobrancelhas: {
    slug: "design-de-sobrancelhas",
    name: "Design de Sobrancelhas",
    metaDescription:
      "Conheça o conteúdo, os benefícios e as informações do Curso de Design de Sobrancelhas da Clínica Rita Sudbrack.",
    lead: "Uma formação para aprender técnicas profissionais com segurança, atenção aos detalhes e prática orientada.",
    facts: ["Presencial", "2 dias de curso", "Máximo de 3 alunas"],
    image: "/assets/images/editorial/curso-sobrancelhas-banner.webp",
    imageAlt:
      "Demonstração de técnica de design de sobrancelhas",
    ctaLabel: "Mais informações",
    whatsappMessage:
      "Olá! Gostaria de saber a data da próxima turma e a disponibilidade de vagas para o Curso de Design de Sobrancelhas da Clínica Rita Sudbrack. Também gostaria de informações sobre as opções Normal e VIP e o parcelamento em até 20x no cartão.",
    infoTitle: "Informações do curso",
    infoText:
      "Conheça o formato da formação, o que está incluído e as duas opções de investimento disponíveis. O pagamento pode ser parcelado em até 20x no cartão.",
    info: [
      { label: "Modalidade", value: "Presencial" },
      {
        label: "Local",
        value: "Clínica Rita Sudbrack",
        note: "Endereço completo informado na inscrição.",
      },
      {
        label: "Duração",
        value: "2 dias de curso",
        note: "Teoria e prática distribuídas em dois dias.",
      },
      {
        label: "Turma",
        value: "Máximo de 3 alunas",
        note: "Acompanhamento próximo.",
      },
      {
        label: "Materiais",
        value: "Apostila + material básico",
        note: "Para começar a trabalhar após a formação.",
      },
      {
        label: "Certificado",
        value: "Incluso",
        note: "Entregue ao final da formação.",
      },
      {
        label: "Nível",
        value: "Iniciante",
        note: "Não é necessário ter experiência prévia.",
      },
      {
        label: "Acompanhamento",
        value: "Vitalício",
        note: "Suporte contínuo após a conclusão do curso.",
      },
      {
        label: "Modelos e redes sociais",
        value: "Fotos para seu portfólio",
        note: "Uso das fotos das modelos na divulgação.",
      },
      {
        label: "Próxima turma",
        value: "Consultar",
        note: "Data informada diretamente pela equipe.",
      },
      {
        label: "Investimento normal",
        value: "R$ 990",
        note: "Formação completa. Até 20x no cartão.",
      },
      {
        label: "Investimento VIP",
        value: "R$ 1.200",
        note: "Inclui Brow Lamination como bônus. Até 20x no cartão.",
        featured: true,
      },
    ],
    closingTitle: "Aprenda uma técnica profissional com prática orientada.",
    closingText:
      "Consulte a data da próxima turma e a disponibilidade de vagas diretamente com a equipe.",
  },
  limpezaDePele: {
    slug: "limpeza-de-pele",
    name: "Limpeza de Pele",
    metaDescription:
      "Curso presencial de Limpeza de Pele na Clínica Rita Sudbrack, em 2 dias, com apostila, certificado e materiais para iniciar seus atendimentos.",
    lead: "Uma formação presencial de 2 dias, com apostila, certificado e materiais para iniciar seus atendimentos.",
    facts: ["Presencial", "2 dias", "Máximo de 2 alunos"],
    image: "/assets/images/editorial/curso-limpeza.webp",
    imageAlt: "Prática de limpeza de pele",
    ctaLabel: "Mais informações",
    whatsappMessage:
      "Olá! Gostaria de mais informações sobre o Curso de Limpeza de Pele da Clínica Rita Sudbrack.",
    infoTitle: "Informações do curso",
    infoText:
      "A data é definida conforme a sua disponibilidade, em turma de no máximo 2 alunos.",
    info: sharedInfo,
    closingTitle: "Comece seus atendimentos com orientação próxima.",
    closingText:
      "Fale com a equipe pelo WhatsApp para consultar os valores e combinar a sua data.",
  },
  melasmaControl: {
    slug: "melasma-control",
    name: "Melasma Control",
    metaDescription:
      "Curso de protocolo de melasma para profissionais da área da beleza, presencial, em 2 dias, na Clínica Rita Sudbrack.",
    lead: "Curso de protocolo de melasma para profissionais da área da beleza.",
    facts: ["Presencial", "2 dias", "Máximo de 2 alunos"],
    image: "/assets/images/editorial/curso-melasma.webp",
    imageAlt: "Prática de cuidados com melasma",
    ctaLabel: "Mais informações",
    whatsappMessage:
      "Olá! Gostaria de mais informações sobre o Curso Melasma Control da Clínica Rita Sudbrack.",
    infoTitle: "Informações do curso",
    infoText:
      "A data é definida conforme a sua disponibilidade, em turma de no máximo 2 alunos.",
    info: sharedInfo,
    closingTitle: "Leve o protocolo de melasma para os seus atendimentos.",
    closingText:
      "Fale com a equipe pelo WhatsApp para consultar os valores e combinar a sua data.",
  },
} satisfies Record<string, Course>;
