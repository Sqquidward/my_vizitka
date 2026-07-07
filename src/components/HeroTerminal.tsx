"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type LineType = "command" | "success" | "output" | "highlight";

interface TerminalLine {
  type: LineType;
  text: string;
}

const TERMINAL_LINES: TerminalLine[] = [
  { type: "command", text: "Что вам нужно?" },
  { type: "output", text: "→ Сайт, магазин, приложение или бот в Telegram" },
  { type: "command", text: "Как проходит работа:" },
  { type: "success", text: "✓ Обсуждаем задачу и пожелания" },
  { type: "success", text: "✓ Делаю дизайн и собираю проект" },
  { type: "success", text: "✓ Запускаю — вы получаете готовую ссылку" },
  { type: "command", text: "Сроки и связь:" },
  { type: "output", text: "→ Срок обсуждаем после брифа · ответ в Telegram за 24ч" },
  { type: "highlight", text: "● Свободен для нового заказа — напишите!" },
];

const TYPING_MS = 32;
const LINE_PAUSE_MS = 380;

const lineColors: Record<LineType, string> = {
  command: "text-foreground/90",
  success: "text-emerald-400/90",
  output: "text-muted",
  highlight: "text-cyan",
};

export function HeroTerminal() {
  const reducedMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setLineIndex(TERMINAL_LINES.length - 1);
      setCharIndex(TERMINAL_LINES.at(-1)!.text.length);
      setFinished(true);
      return;
    }

    const currentLine = TERMINAL_LINES[lineIndex];
    if (!currentLine) return;

    if (charIndex < currentLine.text.length) {
      const timeout = window.setTimeout(() => setCharIndex((c) => c + 1), TYPING_MS);
      return () => window.clearTimeout(timeout);
    }

    if (lineIndex < TERMINAL_LINES.length - 1) {
      const timeout = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, LINE_PAUSE_MS);
      return () => window.clearTimeout(timeout);
    }

    setFinished(true);
  }, [lineIndex, charIndex, reducedMotion]);

  const visibleLines = TERMINAL_LINES.slice(0, lineIndex + 1);

  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-cyan/10 via-purple/5 to-transparent blur-2xl"
      />

      <div
        className="gradient-border glass-card glow-cyan relative w-full overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
        role="img"
        aria-label="Как проходит работа: от заказа до готового сайта или приложения"
      >
        <div className="flex items-center gap-2.5 border-b border-border/60 bg-card/90 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[11px] text-muted/70">как-это-работает.txt</span>
        </div>

        <div className="min-h-[260px] bg-background/60 p-5 font-mono text-xs leading-[1.75] sm:min-h-[280px] sm:p-6 sm:text-[13px] lg:min-h-[300px] xl:min-h-[320px] xl:p-6 xl:text-sm">
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
