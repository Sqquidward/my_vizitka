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
  video?: string;
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
    image: "/projects/trustlink-otc.png",
    video: "/projects/trustlink-otc.mp4",
    stack: ["Next.js", "TypeScript", "WalletConnect"],
    liveUrl: "https://dapp.leto1527.workers.dev/",
    githubUrl: "https://github.com/Sqquidward/dapp",
  },
  {
    id: "ecospace",
    title: "EcoSpace",
    category: "Лендинг",
    description:
      "Промо-сайт архитектурного бюро с калькулятором стоимости проекта.",
    image: "/projects/ecospace.png",
    video: "/projects/ecospace.mp4",
    stack: ["Vite", "TypeScript", "Tailwind", "GSAP"],
    liveUrl: "https://ecospace.leto1527.workers.dev/",
    githubUrl: "https://github.com/Sqquidward/EcoSpace",
  },
  {
    id: "glina-ogon",
    title: "Глина & Огонь",
    category: "Сайт-визитка",
    description:
      "Сайт крафтовой мастерской с онлайн-записью на мастер-классы.",
    image: "/projects/glina-ogon.png",
    video: "/projects/glina-ogon.mp4",
    stack: ["React", "CSS Grid", "Онлайн-запись"],
    liveUrl: "https://clayfire.leto1527.workers.dev/",
    githubUrl: "https://github.com/Sqquidward/ClayFire",
  },
  {
    id: "otc-hub",
    title: "OTC-Hub",
    category: "Telegram",
    description:
      "Торговая панель в Telegram: стакан ордеров, калькулятор валют, P2P.",
    image: "/projects/otc-hub.png",
    video: "/projects/otc-hub.mp4",
    stack: ["React", "Telegram SDK", "TailwindCSS"],
    liveUrl: "https://t.me/otchub_bot",
    githubUrl: "https://github.com/Sqquidward/otchub",
    liveLabel: "telegram",
  },
];
