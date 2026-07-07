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
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,242,254,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,242,254,0.6) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)",
        }}
      />

      <div className="bg-orb bg-orb-cyan absolute -left-32 top-[-10%] h-[600px] w-[600px] rounded-full bg-cyan/[0.04] blur-[140px]" />
      <div className="bg-orb bg-orb-purple absolute -right-32 top-[20%] h-[500px] w-[500px] rounded-full bg-purple/[0.05] blur-[120px]" />
      <div className="bg-orb bg-orb-pink absolute bottom-[-10%] left-1/3 h-[400px] w-[400px] rounded-full bg-pink/[0.03] blur-[100px]" />

      <div className="cursor-glow cursor-glow-cyan absolute inset-0" />
      <div className="cursor-glow cursor-glow-purple absolute inset-0" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(0,242,254,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
    </div>
  );
}
