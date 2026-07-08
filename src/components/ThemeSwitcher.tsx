"use client";

import { Moon, Sun } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { useTheme } from "./ThemeProvider";

interface ThemeSwitcherProps {
  dict: Dictionary;
}

export function ThemeSwitcher({ dict }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const { themeSwitcher } = dict;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-1.5 rounded-full border border-cyan/45 bg-cyan/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-cyan/95 transition-colors duration-300 hover:border-cyan/70 hover:bg-cyan/15 hover:text-cyan/100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 sm:px-3.5 sm:text-[12px]"
      aria-label={`${themeSwitcher.label}: ${isDark ? themeSwitcher.switchToLight : themeSwitcher.switchToDark}`}
    >
      {isDark ? (
        <Sun className="h-3.5 w-3.5 shrink-0 text-cyan/85" />
      ) : (
        <Moon className="h-3.5 w-3.5 shrink-0 text-cyan/85" />
      )}
      {isDark ? themeSwitcher.switchToLight : themeSwitcher.switchToDark}
    </button>
  );
}
