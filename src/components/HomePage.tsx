"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import type { Dictionary } from "@/i18n/types";
import { Hero } from "@/components/Hero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StorytellingUI } from "@/components/scroll/StorytellingUI";
import { useScrollContext } from "@/components/scroll/ScrollContext";

const Services = dynamic(() =>
  import("@/components/Services").then((m) => ({ default: m.Services })),
);

const WorkPrinciples = dynamic(() =>
  import("@/components/WorkPrinciples").then((m) => ({ default: m.WorkPrinciples })),
);

const Footer = dynamic(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer })),
);

const HeroScrollScene = dynamic(
  () =>
    import("@/components/scroll/scenes/HeroScrollScene").then((m) => ({
      default: m.HeroScrollScene,
    })),
  { ssr: false },
);

const ServicesScrollScene = dynamic(
  () =>
    import("@/components/scroll/scenes/ServicesScrollScene").then((m) => ({
      default: m.ServicesScrollScene,
    })),
  { ssr: false },
);

const ProjectsScrollScene = dynamic(
  () =>
    import("@/components/scroll/scenes/ProjectsScrollScene").then((m) => ({
      default: m.ProjectsScrollScene,
    })),
  { ssr: false },
);

const ApproachScrollScene = dynamic(
  () =>
    import("@/components/scroll/scenes/ApproachScrollScene").then((m) => ({
      default: m.ApproachScrollScene,
    })),
  { ssr: false },
);

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const dict = getDictionary(locale);
  const { ready } = useScrollContext();

  return (
    <>
      <StorytellingUI dict={dict} />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:gap-16 sm:px-8 sm:py-12 md:gap-20 md:py-16 lg:gap-24 lg:py-20">
      {ready ? (
        <HeroScrollScene>
          <Hero locale={locale} dict={dict} />
        </HeroScrollScene>
      ) : (
        <div id="hero-section">
          <Hero locale={locale} dict={dict} />
        </div>
      )}

      <Suspense fallback={null}>
        {ready ? (
          <ServicesScrollScene>
            <Services dict={dict} />
          </ServicesScrollScene>
        ) : (
          <section id="services-section" aria-labelledby="services-heading">
            <ScrollReveal>
              <Services dict={dict} />
            </ScrollReveal>
          </section>
        )}
      </Suspense>

      <Suspense fallback={null}>
        <ProjectsScrollScene
          heading={<ProjectsHeading dict={dict} />}
          locale={locale}
          dict={dict}
        />
      </Suspense>

      <Suspense fallback={null}>
        {ready ? (
          <ApproachScrollScene
            stepCount={dict.workPrinciples.length}
            stackContent={<WorkPrinciples dict={dict} variant="stack" />}
            dict={dict}
          >
            <WorkPrinciples dict={dict} variant="pinned" />
          </ApproachScrollScene>
        ) : (
          <section id="approach-section">
            <ScrollReveal>
              <WorkPrinciples dict={dict} variant="stack" />
            </ScrollReveal>
          </section>
        )}
      </Suspense>

      <Suspense fallback={null}>
        <ScrollReveal>
          <Footer dict={dict} />
        </ScrollReveal>
      </Suspense>
      </main>
    </>
  );
}

function ProjectsHeading({ dict }: { dict: Dictionary }) {
  const { sections } = dict;

  return (
    <div className="mb-6 sm:mb-8">
      <div className="mb-2 flex items-center gap-2.5 sm:mb-3 sm:gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan/60">
          {sections.projects.label}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan/20 to-transparent" />
      </div>
      <h2
        id="projects-heading"
        className="text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl"
      >
        {sections.projects.title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:mt-3">
        {sections.projects.description}
        <span className="hidden sm:inline"> {sections.projects.descriptionExtra}</span>
      </p>
    </div>
  );
}
