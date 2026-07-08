"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/types";

interface HeroTerminalProps {
  terminal: Dictionary["terminal"];
}

const TYPING_MS = 32;
const LINE_PAUSE_MS = 380;

const lineColors = {
  command: "text-foreground/90",
  success: "text-emerald-400/90",
  output: "text-muted",
  highlight: "text-cyan",
} as const;

export function HeroTerminal({ terminal }: HeroTerminalProps) {
  const reducedMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setLineIndex(terminal.lines.length - 1);
      setCharIndex(terminal.lines.at(-1)!.text.length);
      setFinished(true);
      return;
    }

    const currentLine = terminal.lines[lineIndex];
    if (!currentLine) return;

    if (charIndex < currentLine.text.length) {
      const timeout = window.setTimeout(() => setCharIndex((c) => c + 1), TYPING_MS);
      return () => window.clearTimeout(timeout);
    }

    if (lineIndex < terminal.lines.length - 1) {
      const timeout = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, LINE_PAUSE_MS);
      return () => window.clearTimeout(timeout);
    }

    setFinished(true);
  }, [lineIndex, charIndex, reducedMotion, terminal.lines]);

  const visibleLines = terminal.lines.slice(0, lineIndex + 1);

  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan/10 via-purple/5 to-transparent blur-2xl md:-inset-6"
      />

      <div
        className="gradient-border glass-card glow-cyan relative w-full overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.35)] md:shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
        role="img"
        aria-label={terminal.ariaLabel}
      >
        <div className="flex items-center gap-2 border-b border-border/60 bg-card/90 px-3.5 py-2.5 md:gap-2.5 md:px-5 md:py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] md:h-3 md:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e] md:h-3 md:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840] md:h-3 md:w-3" />
          <span className="ml-1.5 truncate font-mono text-[10px] text-muted/70 md:ml-2 md:text-[11px]">
            {terminal.filename}
          </span>
        </div>

        <div className="min-h-[220px] bg-background/60 p-3.5 font-mono text-[11px] leading-[1.7] sm:min-h-[260px] sm:p-5 sm:text-xs sm:leading-[1.75] md:min-h-[280px] md:p-6 md:text-[13px] lg:min-h-[300px] xl:min-h-[320px] xl:p-6 xl:text-sm">
          {visibleLines.map((line, index) => {
            const isCurrent = index === lineIndex;
            const text =
              isCurrent && !reducedMotion
                ? line.text.slice(0, charIndex)
                : line.text;

            return (
              <div key={`${line.type}-${index}`} className="mb-2 flex gap-2">
                {line.type === "command" && (
                  <span className="shrink-0 text-cyan/80">❯</span>
                )}
                {line.type !== "command" && <span className="shrink-0 opacity-0">❯</span>}
                <span className={lineColors[line.type]}>{text}</span>
              </div>
            );
          })}

          {!finished && (
            <span className="inline-block h-[1.1em] w-2 animate-pulse bg-cyan/80 align-middle" />
          )}
        </div>
      </div>
    </div>
  );
}
