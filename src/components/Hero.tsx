"use client";

import { m } from "framer-motion";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import type { MouseEvent } from "react";
import { siteConfig } from "@/config/site";
import { scrollToTarget } from "@/lib/scroll/scroll-to";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";
import { defaultTransition, fadeInUp, staggerContainer } from "@/lib/motion";
import { HeroTerminal } from "./HeroTerminal";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ScrollCue } from "./scroll/ScrollCue";
import { ThemeSwitcher } from "./ThemeSwitcher";

const techPills = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React",
  "Python",
  "Java",
  "Spring",
  "PostgreSQL",
  "Swift",
  "Kotlin",
  "Telegram SDK",
  "Cloudflare",
];

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

function handleProjectsClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  scrollToTarget("#projects-heading");
}

export function Hero({ locale, dict }: HeroProps) {
  const { hero, terminal } = dict;

  return (
    <m.header
      className="relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <m.div
        className="mb-5 flex flex-wrap items-center gap-2 sm:mb-8 sm:gap-3"
        variants={fadeInUp}
        transition={defaultTransition}
      >
        {siteConfig.available && (
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400 sm:px-3.5 sm:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 max-sm:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </span>
            {hero.available}
          </span>
        )}
        <span className="hidden items-center gap-1.5 rounded-full border border-border/60 bg-card/50 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted sm:inline-flex">
          <Sparkles className="h-3 w-3 text-cyan/70" />
          {hero.tags}
        </span>
        <ThemeSwitcher dict={dict} />
        <LanguageSwitcher locale={locale} />
      </m.div>

      <div className="grid items-center gap-4 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(380px,440px)] xl:gap-14">
        <div className="min-w-0">
          <m.h1
            data-hero="title"
            className="text-[1.75rem] font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[3.75rem]"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <span className="text-gradient">{hero.title.line1}</span>
            <span className="text-foreground">{hero.title.line2}</span>
            <span className="text-gradient">{hero.title.line3}</span>
            <span className="text-foreground">{hero.title.line4}</span>
          </m.h1>

          <div data-hero="description">
            <m.p
              className="mt-4 hidden max-w-2xl text-[15px] leading-relaxed text-muted md:block md:text-base lg:text-lg"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              {hero.description}
            </m.p>

            <m.p
              className="mt-2 hidden max-w-2xl text-sm text-muted/70 sm:block sm:mt-3"
              variants={fadeInUp}
              transition={defaultTransition}
            >
              {hero.cryptoNote}
            </m.p>
          </div>
        </div>

        <m.div
          data-hero="terminal"
          className="w-full min-w-0"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.15 }}
        >
          <HeroTerminal terminal={terminal} />
        </m.div>
      </div>

      <m.div
        data-hero="pills"
        className="mt-6 hidden flex-wrap gap-2 md:mt-8 md:flex"
        variants={fadeInUp}
        transition={defaultTransition}
      >
        {techPills.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border/50 bg-card/40 px-2.5 py-1 font-mono text-[11px] text-muted/80 backdrop-blur-sm transition-colors duration-300 hover:border-cyan/20 hover:text-cyan/80"
          >
            {tech}
          </span>
        ))}
      </m.div>

      <m.div
        data-hero="cta"
        className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-3"
        variants={fadeInUp}
        transition={defaultTransition}
      >
        <a
          href={siteConfig.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="group glow-cyan-strong inline-flex items-center justify-center gap-2 rounded-xl border border-cyan/40 bg-gradient-to-r from-cyan/20 to-cyan/10 px-5 py-3 font-mono text-sm font-medium text-cyan transition-all duration-300 hover:border-cyan/70 hover:from-cyan/30 hover:to-cyan/15 sm:gap-2.5 sm:px-6 sm:py-3.5"
        >
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          {hero.ctaPrimary}
          <ArrowRight className="hidden h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:inline" />
        </a>
        <a
          href="#projects-heading"
          onClick={handleProjectsClick}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/30 px-5 py-3 font-mono text-sm text-muted backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:text-foreground sm:px-6 sm:py-3.5"
        >
          {hero.ctaSecondary}
        </a>
      </m.div>

      <ScrollCue dict={dict} />
    </m.header>
  );
}
