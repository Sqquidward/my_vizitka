"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function Background() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 90, damping: 28, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 90, damping: 28, mass: 0.6 });
  const [interactive, setInteractive] = useState(false);

  const cursorGlow = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, rgba(0, 242, 254, 0.1), transparent 65%)`;
  const cursorAccent = useMotionTemplate`radial-gradient(420px circle at ${springX}px ${springY}px, rgba(153, 69, 255, 0.06), transparent 70%)`;

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const canInteract = finePointer && !reducedMotion;

    setInteractive(canInteract);
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    if (!canInteract) return;

    const onMove = ({ clientX, clientY }: MouseEvent) => {
      x.set(clientX);
      y.set(clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

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

      <div className="absolute -left-32 top-[-10%] h-[600px] w-[600px] animate-float rounded-full bg-cyan/[0.04] blur-[140px]" />
      <div className="absolute -right-32 top-[20%] h-[500px] w-[500px] animate-float-delayed rounded-full bg-purple/[0.05] blur-[120px]" />
      <div className="absolute bottom-[-10%] left-1/3 h-[400px] w-[400px] animate-pulse-glow rounded-full bg-pink/[0.03] blur-[100px]" />

      {interactive && (
        <>
          <motion.div className="absolute inset-0" style={{ background: cursorGlow }} />
          <motion.div className="absolute inset-0" style={{ background: cursorAccent }} />
        </>
      )}

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
