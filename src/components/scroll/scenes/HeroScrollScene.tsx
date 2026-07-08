"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { DESKTOP_MQ, MOBILE_MQ } from "@/lib/scroll/gsap-config";
import { useScrollContext } from "../ScrollContext";

interface HeroScrollSceneProps {
  children: ReactNode;
}

export function HeroScrollScene({ children }: HeroScrollSceneProps) {
  const { isCinematic } = useScrollContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!isCinematic || !containerRef.current || !pinRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(DESKTOP_MQ, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=100%",
            pin: pinRef.current,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.to("[data-hero='title']", {
          y: -80,
          opacity: 0,
          filter: "blur(4px)",
          ease: "none",
        })
          .to("[data-hero='description']", { y: -40, opacity: 0, ease: "none" }, 0)
          .to("[data-hero='pills']", { y: 20, opacity: 0, ease: "none" }, 0.1)
          .to("[data-hero='cta']", { y: 20, opacity: 0, ease: "none" }, 0.15)
          .to("[data-hero='terminal']", { y: -40, scale: 0.92, ease: "none" }, 0);
      });

      mm.add(MOBILE_MQ, () => {
        gsap.to("[data-hero='title'], [data-hero='description']", {
          y: -30,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=50%",
            scrub: 1,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [isCinematic] },
  );

  if (!isCinematic) {
    return (
      <div id="hero-section" ref={containerRef} className="relative">
        {children}
      </div>
    );
  }

  return (
    <div
      id="hero-section"
      ref={containerRef}
      className="relative min-h-[150vh] md:min-h-[200vh]"
    >
      <div ref={pinRef} className="min-h-screen w-full">
        {children}
      </div>
    </div>
  );
}
