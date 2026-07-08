"use client";

import { ChevronDown, CircleHelp, LayoutList, Mouse, X } from "lucide-react";
import { useState } from "react";
import type { Dictionary } from "@/i18n/types";
import { useScrollContext } from "@/components/scroll/ScrollContext";

interface StorytellingGuideProps {
  dict: Dictionary;
}

export function StorytellingGuide({ dict }: StorytellingGuideProps) {
  const { isCinematic, cinematicEpoch } = useScrollContext();
  const [dismissedEpoch, setDismissedEpoch] = useState(-1);
  const { storytellingHints } = dict;

  const open = isCinematic && dismissedEpoch !== cinematicEpoch;

  if (!isCinematic) return null;

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setDismissedEpoch(-1)}
          className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-card/90 px-3 py-2 font-mono text-[11px] text-cyan shadow-lg backdrop-blur-md transition-colors hover:border-cyan/50 hover:bg-cyan/10 sm:bottom-6 sm:left-6 sm:px-4 sm:text-xs"
          aria-label={storytellingHints.showAgain}
        >
          <CircleHelp className="h-3.5 w-3.5" />
          {storytellingHints.showAgain}
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-labelledby="storytelling-guide-title"
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-cyan/25 bg-card/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:p-5"
        >
          <div className="mb-3 flex items-start justify-between gap-3">
            <h2
              id="storytelling-guide-title"
              className="text-sm font-semibold text-foreground sm:text-base"
            >
              {storytellingHints.title}
            </h2>
            <button
              type="button"
              onClick={() => setDismissedEpoch(cinematicEpoch)}
              className="rounded-lg p-1 text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              aria-label={storytellingHints.dismiss}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <ul className="space-y-3 text-sm leading-relaxed text-muted">
            <li className="flex gap-2.5">
              <Mouse className="mt-0.5 h-4 w-4 shrink-0 text-cyan/80" />
              <span>{storytellingHints.scroll}</span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 font-mono text-[9px] text-cyan">
                1
              </span>
              <span>{storytellingHints.nav}</span>
            </li>
            <li className="flex gap-2.5">
              <LayoutList className="mt-0.5 h-4 w-4 shrink-0 text-cyan/80" />
              <span>{storytellingHints.exit}</span>
            </li>
            <li className="flex gap-2.5 border-t border-border/40 pt-3">
              <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-cyan/80" />
              <span>{storytellingHints.projects}</span>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setDismissedEpoch(cinematicEpoch)}
            className="mt-4 w-full rounded-xl border border-cyan/35 bg-cyan/10 px-4 py-2.5 font-mono text-xs text-cyan transition-colors hover:border-cyan/55 hover:bg-cyan/15"
          >
            {storytellingHints.dismiss}
          </button>
        </div>
      )}
    </>
  );
}
