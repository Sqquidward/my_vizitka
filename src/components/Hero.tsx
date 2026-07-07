"use client";

import { m } from "framer-motion";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { defaultTransition, fadeInUp, staggerContainer } from "@/lib/motion";
import { HeroTerminal } from "./HeroTerminal";

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

export function Hero() {
  return (
    <m.header
      className="relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <m.div
        className="mb-8 flex flex-wrap items-center gap-3"
        variants={fadeInUp}
        transition={defaultTransition}
      >
        {siteConfig.available && (
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </span>
            Открыт для проектов
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/50 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
          <Sparkles className="h-3 w-3 text-cyan/70" />
          Сайты · Telegram · Магазины · Приложения
        </span>
      </m.div>

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(380px,440px)] xl:gap-14">
        <div className="min-w-0">
          <m.h1
            className="text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[3.75rem]"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <span className="text-gradient">Сайты, приложения</span>
            <span className="text-foreground"> и </span>
            <span className="text-gradient">автоматизация</span>
            <span className="text-foreground"> под ключ</span>
          </m.h1>

          <m.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Лендинги, визитки, интернет-магазины, Telegram-боты и мобильные приложения.
            Пишу чистый код, быстро запускаю — без шаблонов.
          </m.p>

          <m.p
            className="mt-3 max-w-2xl text-sm text-muted/70"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Также беру крипто-проекты и Web3 — если вам это нужно.
          </m.p>
        </div>

        <m.div
          className="w-full min-w-0"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.15 }}
        >
          <HeroTerminal />
        </m.div>
      </div>

      <m.div
        className="mt-8 flex flex-wrap gap-2"
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
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        variants={fadeInUp}
        transition={defaultTransition}
      >
        <a
          href={siteConfig.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="group glow-cyan-strong inline-flex items-center justify-center gap-2.5 rounded-xl border border-cyan/40 bg-gradient-to-r from-cyan/20 to-cyan/10 px-6 py-3.5 font-mono text-sm font-medium text-cyan transition-all duration-300 hover:border-cyan/70 hover:from-cyan/30 hover:to-cyan/15"
        >
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          Обсудить проект
          <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
        </a>
        <a
          href="#projects-heading"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/30 px-6 py-3.5 font-mono text-sm text-muted backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
        >
          Смотреть работы
        </a>
      </m.div>
    </m.header>
  );
}
