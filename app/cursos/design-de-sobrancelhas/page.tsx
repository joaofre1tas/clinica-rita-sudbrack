import type { Metadata } from "next";
import CourseDetail from "../CourseDetail";
import { courses } from "../courses";
import CourseModules from "./CourseModules";

const course = courses.designDeSobrancelhas;

export const metadata: Metadata = {
  title: `Curso de ${course.name} | Clínica Rita Sudbrack`,
  description: course.metaDescription,
};

export default function CoursePage() {
  return <CourseDetail course={course} program={<CourseModules />} />;
}
