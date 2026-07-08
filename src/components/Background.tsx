"use client";

import { useEffect } from "react";

export function Background() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    document.documentElement.style.setProperty("--cursor-x", `${window.innerWidth / 2}px`);
    document.documentElement.style.setProperty("--cursor-y", `${window.innerHeight / 2}px`);

    if (!finePointer || reducedMotion) return;

    const onMove = ({ clientX, clientY }: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="noise-overlay pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div
        className="bg-grid-overlay absolute inset-0 max-md:hidden"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
        }}
      />

      <div
        data-parallax-orb="cyan"
        className="bg-orb bg-orb-cyan absolute -left-32 top-[-10%] h-[600px] w-[600px] rounded-full bg-cyan/[0.04] blur-[140px] max-md:h-[320px] max-md:w-[320px] max-md:opacity-50"
      />
      <div
        data-parallax-orb="purple"
        className="bg-orb bg-orb-purple absolute -right-32 top-[20%] h-[500px] w-[500px] rounded-full bg-purple/[0.05] blur-[120px] max-md:hidden"
      />
      <div
        data-parallax-orb="pink"
        className="bg-orb bg-orb-pink absolute bottom-[-10%] left-1/3 h-[400px] w-[400px] rounded-full bg-pink/[0.03] blur-[100px] max-md:hidden"
      />

      <div className="cursor-glow cursor-glow-cyan absolute inset-0" />
      <div className="cursor-glow cursor-glow-purple absolute inset-0" />

      <div className="bg-radial-top absolute inset-0" />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
    </div>
  );
}
