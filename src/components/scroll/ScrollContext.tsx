"use client";

import { createContext, useContext } from "react";
import type { ScrollMode } from "@/lib/scroll/mode";

interface ScrollContextValue {
  ready: boolean;
  mode: ScrollMode;
  isCinematic: boolean;
  cinematicEpoch: number;
  toggleMode: () => void;
}

export const ScrollContext = createContext<ScrollContextValue>({
  ready: false,
  mode: "comfortable",
  isCinematic: false,
  cinematicEpoch: 0,
  toggleMode: () => {},
});

export function useScrollContext() {
  return useContext(ScrollContext);
}
