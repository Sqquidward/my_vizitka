import { projects } from "@/data/projects";
import { ScrollReveal } from "./motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="section-below-fold">
      <ScrollReveal>
        <div className="mb-8">
          <SectionHeading id="projects-heading" label="// projects" title="Избранные работы" />
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Демо-проекты, которые показывают уровень кода и подход к запуску. Это не полный
            список заказов — коммерческие кейсы обсуждаем отдельно.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} index={index} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
