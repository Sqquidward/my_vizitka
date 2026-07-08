"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/types";
import { DESKTOP_MQ, MOBILE_MQ, revealOnScroll } from "@/lib/scroll/gsap-config";
import { SectionHint } from "@/components/scroll/SectionHint";
import { useScrollContext } from "../ScrollContext";

interface ApproachScrollSceneProps {
  children: ReactNode;
  stackContent: ReactNode;
  stepCount: number;
  dict: Dictionary;
}

export function ApproachScrollScene({
  children,
  stackContent,
  stepCount,
  dict,
}: ApproachScrollSceneProps) {
  const { ready, isCinematic } = useScrollContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MQ);
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (!ready || !containerRef.current) return;

      if (!isCinematic) {
        const heading = containerRef.current.querySelector("[data-reveal='heading']");
        const steps = containerRef.current.querySelectorAll("[data-approach-step]");

        if (heading) {
          revealOnScroll(heading, containerRef.current, { y: 20, start: "top 92%" });
        }

        revealOnScroll(steps, containerRef.current, { y: 24, stagger: 0.07, start: "top 85%" });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(DESKTOP_MQ, () => {
        if (!pinRef.current) return;

        const steps = containerRef.current!.querySelectorAll("[data-approach-step]");
        const dots = progressRef.current?.querySelectorAll("[data-approach-dot]");
        if (!steps.length) return;

        gsap.set(steps, { opacity: 0, scale: 0.96, rotate: -2 });
        gsap.set(steps[0], { opacity: 1, scale: 1, rotate: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${stepCount * 100}%`,
            pin: pinRef.current,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        steps.forEach((step, index) => {
          if (index === 0) return;

          const segment = 1 / stepCount;
          const start = segment * index;

          tl.to(
            steps[index - 1],
            { opacity: 0, scale: 0.96, rotate: 2, ease: "none" },
            start,
          ).to(step, { opacity: 1, scale: 1, rotate: 0, ease: "none" }, start);

          if (dots?.length) {
            tl.call(
              () => {
                dots.forEach((dot, dotIndex) => {
                  dot.classList.toggle("is-active", dotIndex === index);
                });
              },
              undefined,
              start,
            );
          }
        });

        dots?.[0]?.classList.add("is-active");
      });

      mm.add(MOBILE_MQ, () => {
        const steps = containerRef.current!.querySelectorAll("[data-approach-step]");
        gsap.fromTo(
          steps,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "top 15%",
              scrub: 0.5,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [ready, isCinematic, isDesktop, stepCount] },
  );

  if (!ready || !isCinematic || !isDesktop) {
    return (
      <section id="approach-section" ref={containerRef} className="scroll-scene">
        {stackContent}
      </section>
    );
  }

  return (
    <div
      id="approach-section"
      ref={containerRef}
      className="relative min-h-[400vh]"
    >
      <div ref={pinRef} className="relative flex min-h-screen w-full items-center">
        <SectionHint text={dict.storytellingHints.approach} />
        <div
          ref={progressRef}
          className="absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex"
          aria-hidden
        >
          {Array.from({ length: stepCount }).map((_, index) => (
            <span
              key={index}
              data-approach-dot
              className="h-2 w-2 rounded-full border border-border/60 bg-muted/20 transition-all duration-300 [&.is-active]:scale-125 [&.is-active]:border-cyan [&.is-active]:bg-cyan [&.is-active]:shadow-[0_0_8px_rgba(0,242,254,0.5)]"
            />
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-3xl px-4 md:px-8">{children}</div>
      </div>
    </div>
  );
}
