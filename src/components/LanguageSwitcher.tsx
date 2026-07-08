import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import Link from "next/link";
import { Languages } from "lucide-react";
import { getDictionary } from "@/i18n";

interface LanguageSwitcherProps {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const dict = getDictionary(locale);
  const targetLocale = locale === "ru" ? "en" : "ru";
  const href = localePath(targetLocale);

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-full border border-cyan/45 bg-cyan/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-cyan/95 transition-colors duration-300 hover:border-cyan/70 hover:bg-cyan/15 hover:text-cyan/100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 sm:px-3.5 sm:text-[12px]"
      aria-label={`${dict.languageSwitcher.label}: ${dict.languageSwitcher.switchTo}`}
    >
      <Languages className="h-3.5 w-3.5 shrink-0 text-cyan/75" />
      {dict.languageSwitcher.switchTo}
    </Link>
  );
}
