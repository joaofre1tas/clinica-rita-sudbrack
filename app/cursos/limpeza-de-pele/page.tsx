import type { Metadata } from "next";
import CourseDetail from "../CourseDetail";
import { courses } from "../courses";

const course = courses.limpezaDePele;

export const metadata: Metadata = {
  title: `Curso de ${course.name} | Clínica Rita Sudbrack`,
  description: course.metaDescription,
};

export default function CoursePage() {
  return <CourseDetail course={course} />;
}
