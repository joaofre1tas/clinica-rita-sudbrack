"use client";

import { useState } from "react";
import { courseModules } from "./modules";

export default function CourseModules() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="course-modules">
      {courseModules.map((module, index) => {
        const expanded = open === index;
        return (
          <article
            key={module.number}
            className={`course-module ${module.featured ? "course-module--featured" : ""}`}
          >
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={`course-module-${index}`}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span className="course-module-number">{module.number}</span>
              <span className="course-module-intro">
                <strong>{module.title}</strong>
                <small>{module.description}</small>
              </span>
              {module.featured && (
                <span className="course-module-label">Diferencial prático</span>
              )}
              <span className="course-module-toggle" aria-hidden="true">
                {expanded ? "−" : "+"}
              </span>
            </button>
            {expanded && (
              <div
                className="course-module-content"
                id={`course-module-${index}`}
              >
                <ul>
                  {module.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
