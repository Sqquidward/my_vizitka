"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { DESKTOP_MQ, MOBILE_MQ, revealOnScroll } from "@/lib/scroll/gsap-config";
import { getProjects } from "@/lib/get-projects";
import {
  pauseAllProjectVideos,
  resetProjectFocus,
  updateProjectFocus,
} from "@/lib/scroll/project-focus";
import { ProjectsContent } from "@/components/ProjectsContent";
import { ProjectsProgress } from "@/components/scroll/ProjectsProgress";
import { SectionHint } from "@/components/scroll/SectionHint";
import { useScrollContext } from "../ScrollContext";

interface ProjectsScrollSceneProps {
  heading: ReactNode;
  locale: Locale;
  dict: Dictionary;
}

function readIsDesktop() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(DESKTOP_MQ).matches;
}

export function ProjectsScrollScene({ heading, locale, dict }: ProjectsScrollSceneProps) {
  const { ready, isCinematic } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const [isDesktop, setIsDesktop] = useState(readIsDesktop);
  const [activeIndex, setActiveIndex] = useState(0);
  const projectCount = getProjects(locale).length;

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MQ);
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const setActiveIndexIfChanged = (index: number) => {
    if (activeIndexRef.current === index) return;
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  useGSAP(
    () => {
      if (!ready || !sectionRef.current) return;

      if (!isCinematic) {
        const headingBlock = sectionRef.current.querySelector("[data-reveal='heading']");
        const cards = sectionRef.current.querySelectorAll("[data-project-card]");

        // Откат сторителлинга: в стандартном режиме не используем scroll-reveal,
        // чтобы секция Projects не зависала в opacity: 0 при проблемах с ScrollTrigger.
        if (headingBlock) {
          gsap.set(headingBlock, { opacity: 1, y: 0 });
        }
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(DESKTOP_MQ, () => {
        if (!pinRef.current || !trackRef.current) return;

        const track = trackRef.current;
        const cards = sectionRef.current!.querySelectorAll("[data-project-card]");

        const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 64);

        const applyFocus = () => {
          const nextIndex = updateProjectFocus(cards);
          setActiveIndexIfChanged(nextIndex);
        };

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${track.scrollWidth}`,
            pin: pinRef.current,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: applyFocus,
            onEnter: applyFocus,
            onLeave: () => pauseAllProjectVideos(cards),
            onLeaveBack: () => pauseAllProjectVideos(cards),
          },
        });

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          applyFocus();
        });

        return () => {
          pauseAllProjectVideos(cards);
          resetProjectFocus(cards);
        };
      });

      mm.add(MOBILE_MQ, () => {
        const cards = sectionRef.current!.querySelectorAll("[data-project-card]");
        revealOnScroll(cards, sectionRef.current, { y: 50, stagger: 0.1, start: "top 85%" });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [ready, isCinematic, isDesktop] },
  );

  if (!ready) {
    return (
      <section id="projects-section" aria-labelledby="projects-heading" className="scroll-scene">
        {heading}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <ProjectsContent locale={locale} layout="stack" />
        </div>
      </section>
    );
  }

  if (!isCinematic || !isDesktop) {
    return (
      <section
        id="projects-section"
        ref={sectionRef}
        aria-labelledby="projects-heading"
        className="scroll-scene"
      >
        <div data-reveal="heading">{heading}</div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <ProjectsContent locale={locale} layout="stack" />
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects-section"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="scroll-scene -mx-4 sm:-mx-8"
    >
      <div ref={pinRef} className="relative min-h-screen w-screen max-w-none overflow-hidden">
        <div className="pointer-events-none absolute inset-x-4 top-8 z-10 sm:inset-x-8 md:top-12">
          {heading}
        </div>
        <SectionHint text={dict.storytellingHints.projects} />
        <ProjectsProgress activeIndex={activeIndex} total={projectCount} />
        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-6 px-4 pt-28 [perspective:1200px] md:gap-8 md:px-8 md:pt-32"
        >
          <ProjectsContent locale={locale} layout="horizontal" />
        </div>
      </div>
    </section>
  );
}
