"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { defaultTransition, fadeInUp, staggerContainer } from "@/lib/motion";
import { CountUp } from "./motion/CountUp";
import { HeroTerminal } from "./HeroTerminal";

const stats = [
  { value: "100+", label: "проектов" },
  { value: "7 дн", label: "средний срок" },
  { value: "24ч", label: "ответ" },
];

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
    <motion.header
      className="relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="grid items-start gap-10 xl:grid-cols-[1fr_minmax(420px,1.05fr)] xl:gap-14">
        <div>
          <motion.div
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
          </motion.div>

          <motion.h1
            className="max-w-4xl text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem]"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <span className="text-gradient">Сайты, приложения</span>
            <span className="text-foreground"> и</span>
            <br />
            <span className="xl:whitespace-nowrap">
              <span className="text-gradient">автоматизация</span>
              <span className="text-foreground"> под ключ</span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Лендинги, визитки, интернет-магазины, Telegram-боты и мобильные приложения.
            Пишу чистый код, быстро запускаю — без шаблонов.
          </motion.p>

          <motion.p
            className="mt-3 max-w-2xl text-sm text-muted/70"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            Также беру крипто-проекты и Web3 — если вам это нужно.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-2"
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
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
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
          </motion.div>
        </div>

        <motion.div
          className="w-full xl:max-w-[540px] xl:justify-self-end"
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.15 }}
        >
          <HeroTerminal />
        </motion.div>
      </div>

      <motion.div
        className="mt-14 grid grid-cols-3 gap-4 border-t border-border/40 pt-8 sm:max-w-md sm:gap-8"
        variants={fadeInUp}
        transition={defaultTransition}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <CountUp
              value={stat.value}
              className="text-gradient-static text-2xl font-bold tabular-nums sm:text-3xl"
            />
            <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.header>
  );
}
