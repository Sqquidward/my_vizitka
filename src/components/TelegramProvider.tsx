"use client";

import { useEffect } from "react";

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
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();
    tg.setHeaderColor("#0B0E14");
    tg.setBackgroundColor("#0B0E14");
  }, []);

  return <>{children}</>;
}
