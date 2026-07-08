"use client";

interface SectionHintProps {
  text: string;
}

export function SectionHint({ text }: SectionHintProps) {
  return (
    <div
      aria-live="polite"
      className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex justify-center px-4 md:bottom-8"
    >
      <span className="rounded-full border border-cyan/25 bg-card/85 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-cyan/90 shadow-lg backdrop-blur-md sm:text-[11px]">
        {text}
      </span>
    </div>
  );
}
