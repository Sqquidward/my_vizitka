"use client";

import { Clapperboard, LayoutList } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { useScrollContext } from "@/components/scroll/ScrollContext";

interface StorytellingSwitcherProps {
  dict: Dictionary;
}

export function StorytellingSwitcher({ dict }: StorytellingSwitcherProps) {
  const { ready, isCinematic, toggleMode } = useScrollContext();
  const { storytellingSwitcher } = dict;

  if (!ready) return null;

  return (
    <button
      type="button"
      onClick={toggleMode}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors duration-300 sm:px-3.5 sm:text-[11px] ${
        isCinematic
          ? "border-cyan/40 bg-cyan/10 text-cyan hover:border-cyan/60"
          : "border-border/60 bg-card/50 text-muted hover:border-foreground/20 hover:text-foreground"
      }`}
      title={
        isCinematic
          ? storytellingSwitcher.switchToComfortable
          : storytellingSwitcher.switchToCinematic
      }
      aria-pressed={isCinematic}
      aria-label={
        isCinematic
          ? `${storytellingSwitcher.label}: ${storytellingSwitcher.switchToComfortable}`
          : `${storytellingSwitcher.label}: ${storytellingSwitcher.switchToCinematic}`
      }
    >
      {isCinematic ? (
        <LayoutList className="h-3 w-3 shrink-0 text-cyan/70" />
      ) : (
        <Clapperboard className="h-3 w-3 shrink-0 text-cyan/70" />
      )}
      <span className="hidden sm:inline">
        {isCinematic
          ? storytellingSwitcher.switchToComfortable
          : storytellingSwitcher.switchToCinematic}
      </span>
      <span className="sm:hidden">
        {isCinematic ? storytellingSwitcher.shortOff : storytellingSwitcher.shortOn}
      </span>
    </button>
  );
}
