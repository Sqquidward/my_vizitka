import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/types";
import { GitHubIcon } from "./icons/GitHubIcon";
import { ScrollReveal } from "./motion/ScrollReveal";

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const { footer } = dict;

  return (
    <ScrollReveal>
      <footer className="border-t border-border/30 pt-8 sm:pt-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-foreground">{footer.title}</p>
            <p className="mt-1 text-sm text-muted">{footer.subtitle}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover-soft-shadow rounded-xl border border-border/60 bg-card/30 p-3 text-muted backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="glow-cyan rounded-xl border border-cyan/30 bg-cyan/10 p-3 text-cyan transition-all duration-300 hover:border-cyan/50 hover:bg-cyan/15"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/40">
          © 2026 · Next.js · TypeScript · Cloudflare
        </p>
      </footer>
    </ScrollReveal>
  );
}
