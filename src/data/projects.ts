export type ProjectCategory =
  | "Лендинг"
  | "Сайт-визитка"
  | "Telegram"
  | "Крипто";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  liveLabel?: "telegram" | "default";
}

export const projects: Project[] = [
  {
    id: "trustlink-otc",
    title: "TrustLink OTC",
    category: "Крипто",
    description:
      "Платформа для безопасных сделок между пользователями без посредника.",
    image: "/projects/trustlink-otc.svg",
    stack: ["Next.js", "TypeScript", "WalletConnect"],
    liveUrl: "https://trustlink-otc.example.com",
    githubUrl: "https://github.com/yourusername/trustlink-otc",
  },
  {
    id: "otc-hub",
    title: "OTC-Hub",
    category: "Telegram",
    description:
      "Торговая панель в Telegram: стакан ордеров, калькулятор валют, P2P.",
    image: "/projects/otc-hub.svg",
    stack: ["React", "Telegram SDK", "TailwindCSS"],
    liveUrl: "https://t.me/otc_hub_bot",
    githubUrl: "https://github.com/yourusername/otc-hub",
    liveLabel: "telegram",
  },
  {
    id: "ecospace",
    title: "EcoSpace",
    category: "Лендинг",
    description:
      "Промо-сайт архитектурного бюро с калькулятором стоимости проекта.",
    image: "/projects/ecospace.svg",
    stack: ["Vite", "TypeScript", "Tailwind", "GSAP"],
    liveUrl: "https://ecospace.example.com",
    githubUrl: "https://github.com/yourusername/ecospace",
  },
  {
    id: "glina-ogon",
    title: "Глина & Огонь",
    category: "Сайт-визитка",
    description:
      "Сайт крафтовой мастерской с онлайн-записью на мастер-классы.",
    image: "/projects/glina-ogon.svg",
    stack: ["React", "CSS Grid", "Онлайн-запись"],
    liveUrl: "https://glina-ogon.example.com",
    githubUrl: "https://github.com/yourusername/glina-ogon",
  },
];
