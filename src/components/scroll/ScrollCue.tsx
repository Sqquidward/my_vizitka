"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { useScrollContext } from "@/components/scroll/ScrollContext";

interface ScrollCueProps {
  dict: Dictionary;
}

export function ScrollCue({ dict }: ScrollCueProps) {
  const { isCinematic } = useScrollContext();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    if (!isCinematic) return;

    const onScroll = () => {
      setScrolledPastHero(window.scrollY >= window.innerHeight * 0.4);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCinematic]);

  if (!isCinematic || scrolledPastHero) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-1 text-center md:bottom-10"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70 sm:text-[11px]">
        {dict.storytellingHints.scrollDown}
      </span>
      <ChevronDown className="h-5 w-5 animate-bounce text-cyan/60" />
    </div>
  );
}
