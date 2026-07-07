import { Check, Zap } from "lucide-react";
import { pricingNote, pricingTiers } from "@/data/pricing";
import { ScrollReveal } from "./motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "./motion/Stagger";
import { SectionHeading } from "./SectionHeading";
import { TiltSurface } from "./TiltSurface";

const tierFeatures: Record<string, string[]> = {
  "Лендинг и визитка": ["Адаптивный дизайн", "SEO-оптимизация", "Быстрый запуск"],
  "Интернет-магазин": ["Каталог и корзина", "Оплата и доставка", "Админ-панель"],
  "Telegram-приложение": ["Бот или Mini App", "Платежи и уведомления", "Админ-панель"],
  "Мобильное приложение": ["iOS и Android", "Push-уведомления", "Публикация в сторах"],
  "Парсер / автоматизация": ["Сбор данных", "Интеграция с таблицами", "Расписание запуска"],
  "Крипто / Web3": ["Подключение кошелька", "Смарт-контракты", "Аудит безопасности"],
};

export function Pricing() {
  return (
    <section aria-labelledby="pricing-heading">
      <ScrollReveal>
        <SectionHeading id="pricing-heading" label="// pricing" title="Стоимость и сроки" />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => {
          const isFeatured = tier.featured === true;
          const features = tierFeatures[tier.label] ?? [];

          return (
            <StaggerItem key={tier.label}>
              <TiltSurface
                maxTilt={8}
                className={`gradient-border glass-card relative flex h-full flex-col p-6 transition-shadow duration-500 ${
                  isFeatured
                    ? "glow-cyan md:-mt-2 md:mb-[-8px] md:py-8"
                    : "hover:shadow-[0_16px_48px_rgba(0,242,254,0.06)]"
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan">
                    <Zap className="h-3 w-3" />
                    Популярно
                  </span>
                )}

                <h3 className="text-sm font-medium text-foreground">{tier.label}</h3>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-gradient-static text-3xl font-bold tabular-nums">
                    {tier.price}
                  </span>
                </div>

                <p className="mt-1 font-mono text-xs text-muted">{tier.duration}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-cyan/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </TiltSurface>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <ScrollReveal delay={0.15}>
        <p className="mt-6 rounded-xl border border-border/40 bg-card/30 px-5 py-4 text-xs leading-relaxed text-muted backdrop-blur-sm">
          {pricingNote}
        </p>
      </ScrollReveal>
    </section>
  );
}
