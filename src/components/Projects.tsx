import { projects } from "@/data/projects";
import { ScrollReveal } from "./motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section aria-labelledby="projects-heading">
      <ScrollReveal>
        <SectionHeading id="projects-heading" label="// projects" title="Избранные работы" />
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
