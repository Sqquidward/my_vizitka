"use client";

interface ProjectsProgressProps {
  activeIndex: number;
  total: number;
}

export function ProjectsProgress({ activeIndex, total }: ProjectsProgressProps) {
  const current = String(activeIndex + 1).padStart(2, "0");
  const max = String(total).padStart(2, "0");

  return (
    <div
      aria-live="polite"
      aria-label={`Project ${activeIndex + 1} of ${total}`}
      className="pointer-events-none absolute bottom-6 right-4 z-20 sm:bottom-8 sm:right-8"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-card/85 px-4 py-2 font-mono text-[10px] tabular-nums tracking-wider text-cyan/90 shadow-lg backdrop-blur-md sm:text-[11px]">
        <span className="text-cyan">{current}</span>
        <span className="text-cyan/40">/</span>
        <span className="text-cyan/60">{max}</span>
      </span>
    </div>
  );
}
