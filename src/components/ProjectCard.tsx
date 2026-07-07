import { ExternalLink, Send } from "lucide-react";
import type { Project } from "@/data/projects";
import { GitHubIcon } from "./icons/GitHubIcon";
import { ProjectPreview } from "./ProjectPreview";
import { TiltSurface } from "./TiltSurface";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryColors: Record<string, string> = {
  Лендинг: "border-pink/30 bg-pink/10 text-pink",
  "Сайт-визитка": "border-foreground/20 bg-foreground/5 text-foreground/70",
  Telegram: "border-purple/30 bg-purple/10 text-purple",
  Крипто: "border-cyan/30 bg-cyan/10 text-cyan",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isTelegramLive = project.liveLabel === "telegram";
  const badgeClass = categoryColors[project.category] ?? categoryColors["Сайт-визитка"];

  return (
    <TiltSurface
      className="gradient-border glass-card group flex h-full flex-col overflow-hidden p-0 transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,242,254,0.08)]"
      role="article"
      aria-label={project.title}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden"
        tabIndex={-1}
        aria-hidden
      >
        <ProjectPreview
          image={project.image}
          video={project.video}
          title={project.title}
          priority={index === 0}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-2 font-mono text-xs text-cyan">
            {isTelegramLive ? (
              <Send className="h-3.5 w-3.5" />
            ) : (
              <ExternalLink className="h-3.5 w-3.5" />
            )}
            Live Demo
          </span>
        </div>

        <span className="absolute left-3 top-3 font-mono text-[10px] tabular-nums text-foreground/50">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm ${badgeClass}`}
        >
          {project.category}
        </span>
      </a>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="mb-1.5 text-base font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-cyan sm:mb-2 sm:text-lg">
          {project.title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted sm:mb-5">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-5">
          {project.stack.map((tech, techIndex) => (
            <span
              key={tech}
              className={`rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted/70 transition-all duration-300 group-hover:border-border group-hover:text-muted ${techIndex >= 4 ? "hidden sm:inline" : ""}`}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted/70 sm:hidden">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/5 px-3 py-2 font-mono text-xs text-cyan transition-all duration-300 hover:border-cyan/60 hover:bg-cyan/15 hover:shadow-[0_0_16px_rgba(0,242,254,0.12)] sm:py-2.5"
          >
            {isTelegramLive ? (
              <Send className="h-3 w-3" />
            ) : (
              <ExternalLink className="h-3 w-3" />
            )}
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-background/30 px-3 py-2 font-mono text-xs text-muted transition-all duration-300 hover:border-foreground/20 hover:text-foreground sm:py-2.5"
          >
            <GitHubIcon className="h-3 w-3" />
            GitHub
          </a>
        </div>
      </div>
    </TiltSurface>
  );
}
