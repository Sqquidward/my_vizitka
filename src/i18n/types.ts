import type { ProjectCategoryKey } from "@/data/projects";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  site: {
    name: string;
  };
  hero: {
    available: string;
    tags: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
    };
    description: string;
    cryptoNote: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  terminal: {
    ariaLabel: string;
    filename: string;
    lines: Array<{
      type: "command" | "success" | "output" | "highlight";
      text: string;
    }>;
  };
  sections: {
    services: {
      label: string;
      title: string;
    };
    projects: {
      label: string;
      title: string;
      description: string;
      descriptionExtra: string;
    };
    approach: {
      label: string;
      title: string;
    };
  };
  services: Array<{
    title: string;
    description: string;
  }>;
  projects: Record<
    string,
    {
      title: string;
      category: ProjectCategoryKey;
      description: string;
    }
  >;
  categories: Record<ProjectCategoryKey, string>;
  workPrinciples: Array<{
    title: string;
    description: string;
  }>;
  footer: {
    title: string;
    subtitle: string;
  };
  languageSwitcher: {
    label: string;
    switchTo: string;
  };
  themeSwitcher: {
    label: string;
    switchToLight: string;
    switchToDark: string;
  };
  storytellingSwitcher: {
    label: string;
    switchToCinematic: string;
    switchToComfortable: string;
    shortOn: string;
    shortOff: string;
  };
  storytellingHints: {
    title: string;
    dismiss: string;
    showAgain: string;
    scroll: string;
    scrollDown: string;
    nav: string;
    navTitle: string;
    navAria: string;
    navJump: string;
    exit: string;
    projects: string;
    approach: string;
    sections: {
      hero: string;
      services: string;
      projects: string;
      approach: string;
    };
  };
}
