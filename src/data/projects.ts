export type ProjectCategoryKey = "landing" | "portfolio" | "telegram" | "crypto";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategoryKey;
  categoryLabel: string;
  description: string;
  image: string;
  video?: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  liveLabel?: "telegram" | "default";
}

export interface ProjectData {
  id: string;
  image: string;
  video?: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  liveLabel?: "telegram" | "default";
}

export const projectsData: ProjectData[] = [
  {
    id: "trustlink-otc",
    image: "/projects/trustlink-otc.png",
    video: "/projects/trustlink-otc.mp4",
    stack: ["Next.js", "TypeScript", "WalletConnect"],
    liveUrl: "https://dapp.leto1527.workers.dev/",
    githubUrl: "https://github.com/Sqquidward/dapp",
  },
  {
    id: "ecospace",
    image: "/projects/ecospace.png",
    video: "/projects/ecospace.mp4",
    stack: ["Vite", "TypeScript", "Tailwind", "GSAP"],
    liveUrl: "https://ecospace.leto1527.workers.dev/",
    githubUrl: "https://github.com/Sqquidward/EcoSpace",
  },
  {
    id: "glina-ogon",
    image: "/projects/glina-ogon.png",
    video: "/projects/glina-ogon.mp4",
    stack: ["React", "CSS Grid", "Booking"],
    liveUrl: "https://clayfire.leto1527.workers.dev/",
    githubUrl: "https://github.com/Sqquidward/ClayFire",
  },
  {
    id: "otc-hub",
    image: "/projects/otc-hub.png",
    video: "/projects/otc-hub.mp4",
    stack: ["React", "Telegram SDK", "TailwindCSS"],
    liveUrl: "https://t.me/otchub_bot",
    githubUrl: "https://github.com/Sqquidward/otchub",
    liveLabel: "telegram",
  },
];
