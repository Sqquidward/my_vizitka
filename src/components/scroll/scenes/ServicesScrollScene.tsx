"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { DESKTOP_MQ, MOBILE_MQ, revealOnScroll } from "@/lib/scroll/gsap-config";
import { useScrollContext } from "../ScrollContext";

interface ServicesScrollSceneProps {
  children: ReactNode;
}

export function ServicesScrollScene({ children }: ServicesScrollSceneProps) {
  const { ready, isCinematic } = useScrollContext();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ready || !sectionRef.current) return;

      const cards = sectionRef.current.querySelectorAll("[data-service-card]");
      if (!cards.length) return;

      if (!isCinematic) {
        revealOnScroll(cards, sectionRef.current, { y: 24, stagger: 0.05 });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(DESKTOP_MQ, () => {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, rotateX: 8, transformPerspective: 800 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 0.5,
            },
          },
        );
      });

      mm.add(MOBILE_MQ, () => {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 35%",
              scrub: 0.5,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [ready, isCinematic] },
  );

  return (
    <section
      id="services-section"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="scroll-scene"
    >
      {children}
    </section>
  );
}
