export type ScrollMode = "comfortable" | "cinematic";

export const SCROLL_MODE_STORAGE_KEY = "scroll-mode";

export function readScrollMode(): ScrollMode {
  if (typeof window === "undefined") return "comfortable";

  try {
    const stored = localStorage.getItem(SCROLL_MODE_STORAGE_KEY);
    if (stored === "cinematic" || stored === "comfortable") return stored;
  } catch {
    // ignore
  }

  return "comfortable";
}

export function saveScrollMode(mode: ScrollMode) {
  try {
    localStorage.setItem(SCROLL_MODE_STORAGE_KEY, mode);
  } catch {
    // ignore
  }
}
