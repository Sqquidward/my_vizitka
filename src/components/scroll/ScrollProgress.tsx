"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { SCROLL_SECTIONS } from "@/lib/scroll/gsap-config";
import { scrollToTarget } from "@/lib/scroll/scroll-to";
import { useScrollContext } from "./ScrollContext";

interface ScrollProgressProps {
  dict: Dictionary;
}

const sectionLabelKeys = [
  "hero",
  "services",
  "projects",
  "approach",
] as const;

export function ScrollProgress({ dict }: ScrollProgressProps) {
  const { ready, isCinematic } = useScrollContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const { storytellingHints } = dict;

  useGSAP(
    () => {
      if (!ready) return;

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: () => {
          const sectionElements = SCROLL_SECTIONS.map(({ id }) =>
            document.getElementById(id),
          ).filter(Boolean) as HTMLElement[];

          const viewportCenter = window.innerHeight * 0.35;
          let closestIndex = 0;
          let closestDistance = Number.POSITIVE_INFINITY;

          sectionElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - viewportCenter);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });

          setActiveIndex(closestIndex);
        },
      });
    },
    { dependencies: [ready] },
  );

  if (!ready || !isCinematic) return null;

  return (
    <nav
      aria-label={storytellingHints.navAria}
      className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 md:block xl:right-6"
    >
      <p className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-muted/50">
        {storytellingHints.navTitle}
      </p>
      <ul className="flex flex-col gap-1 rounded-2xl border border-border/50 bg-card/80 p-2 shadow-lg backdrop-blur-md">
        {SCROLL_SECTIONS.map((section, index) => {
          const labelKey = sectionLabelKeys[index];
          const label = storytellingHints.sections[labelKey];

          return (
            <li key={section.id}>
              <button
                type="button"
                title={label}
                aria-label={`${storytellingHints.navJump}: ${label}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => scrollToTarget(`#${section.id}`)}
                className={`group flex min-w-[7.5rem] items-center gap-2 rounded-xl px-2 py-1.5 text-left transition-all duration-200 ${
                  activeIndex === index
                    ? "bg-cyan/15 text-cyan"
                    : "text-muted/70 hover:bg-foreground/5 hover:text-muted"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${
                    activeIndex === index
                      ? "border border-cyan/40 bg-cyan/10"
                      : "border border-border/60 bg-background/40"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wide">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
