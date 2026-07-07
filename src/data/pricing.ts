export interface PricingTier {
  label: string;
  price: string;
  duration: string;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  { label: "Лендинг и визитка", price: "от $300", duration: "3–5 дней", featured: true },
  { label: "Интернет-магазин", price: "от $600", duration: "7–14 дней" },
  { label: "Telegram-приложение", price: "от $500", duration: "5–10 дней" },
  { label: "Мобильное приложение", price: "от $1500", duration: "14–21 день" },
  { label: "Парсер / автоматизация", price: "от $400", duration: "3–7 дней" },
  { label: "Крипто / Web3", price: "от $800", duration: "по запросу" },
];

export const pricingNote =
  "Принимаю переводы и криптовалюту (USDT). Итоговая стоимость зависит от задачи — обсуждаем под ваш бюджет.";
