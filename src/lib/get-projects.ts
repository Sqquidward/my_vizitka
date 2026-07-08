import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import type { Project } from "@/data/projects";
import { projectsData } from "@/data/projects";

export function getProjects(locale: Locale): Project[] {
  const dict = getDictionary(locale);

  return projectsData.map((project) => {
    const translation = dict.projects[project.id];

    return {
      ...project,
      title: translation.title,
      category: translation.category,
      categoryLabel: dict.categories[translation.category],
      description: translation.description,
    };
  });
}
