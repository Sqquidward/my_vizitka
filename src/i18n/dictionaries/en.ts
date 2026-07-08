import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Websites, Apps & Telegram Bots — Full-Stack Development",
    description:
      "Landing pages, portfolio sites, e-commerce, Telegram apps, mobile apps, and automation. Next.js, TypeScript, Cloudflare.",
    ogDescription: "Turnkey websites and apps — fast delivery, no templates. Crypto payments accepted.",
  },
  site: {
    name: "Web & App Developer",
  },
  hero: {
    available: "Available for projects",
    tags: "Websites · Telegram · Stores · Apps",
    title: {
      line1: "Websites, apps",
      line2: " & ",
      line3: "automation",
      line4: " — turnkey",
    },
    description:
      "Landing pages, portfolio sites, e-commerce, Telegram bots, and mobile apps. Clean code, fast launch — no templates.",
    cryptoNote: "Also open to crypto and Web3 projects if that's what you need.",
    ctaPrimary: "Discuss a project",
    ctaSecondary: "View work",
  },
  terminal: {
    ariaLabel: "How it works: from request to a live website or app",
    filename: "how-it-works.txt",
    lines: [
      { type: "command", text: "What do you need?" },
      { type: "output", text: "→ Website, store, app, or Telegram bot" },
      { type: "command", text: "How we work:" },
      { type: "success", text: "✓ Discuss the task and requirements" },
      { type: "success", text: "✓ Design and build the project" },
      { type: "success", text: "✓ Launch — you get a live link" },
      { type: "command", text: "Timeline & contact:" },
      { type: "output", text: "→ Timeline after brief · quick replies on Telegram." },
      { type: "highlight", text: "● Available for a new project — reach out!" },
    ],
  },
  sections: {
    services: {
      label: "// services",
      title: "What I do",
    },
    projects: {
      label: "// projects",
      title: "Selected work",
      description: "Demo projects that showcase code quality and launch approach.",
      descriptionExtra: "Not a full client list — commercial cases are discussed separately.",
    },
    approach: {
      label: "// approach",
      title: "How I work",
    },
  },
  services: [
    {
      title: "Landing & promo sites",
      description: "Single-page sites for ads, product launches, or service promotion.",
    },
    {
      title: "Portfolio sites",
      description: "Compact sites for studios, specialists, and local businesses.",
    },
    {
      title: "E-commerce",
      description: "Catalog, cart, checkout, and admin panel for online sales.",
    },
    {
      title: "Telegram apps",
      description: "Bots and Mini Apps: orders, notifications, personal account in Telegram.",
    },
    {
      title: "Mobile apps",
      description: "iOS and Android apps for your product or service.",
    },
    {
      title: "Scrapers & automation",
      description: "Data collection, price monitoring, reports, and routine tasks on autopilot.",
    },
  ],
  projects: {
    "trustlink-otc": {
      title: "TrustLink OTC",
      category: "crypto",
      description: "Platform for secure peer-to-peer deals without intermediaries.",
    },
    ecospace: {
      title: "EcoSpace",
      category: "landing",
      description: "Promo site for an architecture studio with a project cost calculator.",
    },
    "glina-ogon": {
      title: "Clay & Fire",
      category: "portfolio",
      description: "Craft workshop site with online workshop booking.",
    },
    "otc-hub": {
      title: "OTC-Hub",
      category: "telegram",
      description: "Trading panel in Telegram: order book, currency calculator, P2P.",
    },
  },
  categories: {
    landing: "Landing",
    portfolio: "Portfolio",
    telegram: "Telegram",
    crypto: "Crypto",
  },
  workPrinciples: [
    {
      title: "Clear communication",
      description:
        "I explain decisions without jargon, align on milestones before starting, and keep you updated on progress.",
    },
    {
      title: "Timelines after the brief",
      description:
        "I estimate timelines once the scope is clear. No \"three-day\" promises before discussing details.",
    },
    {
      title: "Revisions without bureaucracy",
      description:
        "Changes are handled quickly: revisions during review — no unnecessary paperwork.",
    },
    {
      title: "From code to deploy",
      description:
        "I write, configure, and deploy the project myself — you get a live link, not a zip archive.",
    },
  ],
  footer: {
    title: "Ready for a new project?",
    subtitle: "Message me on Telegram — I'll reply right away.",
  },
  languageSwitcher: {
    label: "Language",
    switchTo: "Русский",
  },
  themeSwitcher: {
    label: "Theme",
    switchToLight: "Light",
    switchToDark: "Dark",
  },
  storytellingSwitcher: {
    label: "View mode",
    switchToCinematic: "Storytelling",
    switchToComfortable: "Standard",
    shortOn: "Story",
    shortOff: "Std",
  },
  storytellingHints: {
    title: "How storytelling mode works",
    dismiss: "Got it",
    showAgain: "Hints",
    scroll: "Scroll with your mouse wheel or swipe up/down to move through the page.",
    scrollDown: "Scroll down",
    nav: "On the right, buttons 1–4 with section names — click to jump there.",
    navTitle: "Sections",
    navAria: "Section navigation",
    navJump: "Go to section",
    exit: "The “Standard” button at the top returns you to normal browsing.",
    projects: "In Projects: scroll down and the cards move sideways.",
    approach: "In “How I work”: each scroll reveals the next step.",
    sections: {
      hero: "Home",
      services: "Services",
      projects: "Projects",
      approach: "Approach",
    },
  },
};
