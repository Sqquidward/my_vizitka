import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Globe,
  IdCard,
  Send,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Лендинги и промо-сайты",
    description: "Одностраничники под рекламу, запуск продукта или услуги.",
    icon: Globe,
  },
  {
    title: "Сайты-визитки",
    description: "Небольшие сайты для мастерских, специалистов и локального бизнеса.",
    icon: IdCard,
  },
  {
    title: "Интернет-магазины",
    description: "Каталог, корзина, оплата и админка для продаж онлайн.",
    icon: ShoppingCart,
  },
  {
    title: "Telegram-приложения",
    description: "Боты и Mini Apps: заказы, уведомления, личный кабинет в Telegram.",
    icon: Send,
  },
  {
    title: "Мобильные приложения",
    description: "Приложения для iOS и Android под ваш продукт или сервис.",
    icon: Smartphone,
  },
  {
    title: "Парсеры и автоматизация",
    description: "Сбор данных, мониторинг цен, отчёты и рутинные задачи на автопилоте.",
    icon: Bot,
  },
];
