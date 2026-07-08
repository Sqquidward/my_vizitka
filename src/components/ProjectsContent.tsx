import type { Locale } from "@/i18n/config";
import { getProjects } from "@/lib/get-projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectsContentProps {
  locale: Locale;
  layout?: "horizontal" | "stack";
}

export function ProjectsContent({ locale, layout = "horizontal" }: ProjectsContentProps) {
  const projects = getProjects(locale);

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={project.id}
          data-project-card
          data-project-index={index}
          data-project-category={project.category}
          className={
            layout === "horizontal"
              ? "w-[85vw] shrink-0 will-change-transform md:w-[min(520px,42vw)]"
              : "w-full"
          }
        >
          <ProjectCard project={project} index={index} cinematic={layout === "horizontal"} />
        </div>
      ))}
    </>
  );
}
