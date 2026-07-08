"use client";

import { useEffect } from "react";
import { useThemeColors } from "./ThemeProvider";

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        colorScheme: "light" | "dark";
        platform: string;
      };
    };
  }
}

export function TelegramProvider({ children }: { children: React.ReactNode }) {
  const { background } = useThemeColors();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();
    tg.setHeaderColor(background);
    tg.setBackgroundColor(background);
  }, [background]);

  return <>{children}</>;
}
