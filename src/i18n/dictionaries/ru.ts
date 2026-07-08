import type { Dictionary } from "../types";

export const ru: Dictionary = {
  meta: {
    title: "Разработка сайтов, приложений и Telegram-ботов под ключ",
    description:
      "Лендинги, визитки, интернет-магазины, Telegram-приложения, мобильные приложения и автоматизация. Next.js, TypeScript, Cloudflare.",
    ogDescription: "Сайты и приложения под ключ — быстро, без шаблонов. Переводы и USDT.",
  },
  site: {
    name: "Разработчик сайтов и приложений",
  },
  hero: {
    available: "Открыт для проектов",
    tags: "Сайты · Telegram · Магазины · Приложения",
    title: {
      line1: "Сайты, приложения",
      line2: " и ",
      line3: "автоматизация",
      line4: " под ключ",
    },
    description:
      "Лендинги, визитки, интернет-магазины, Telegram-боты и мобильные приложения. Пишу чистый код, быстро запускаю — без шаблонов.",
    cryptoNote: "Также беру крипто-проекты и Web3 — если вам это нужно.",
    ctaPrimary: "Обсудить проект",
    ctaSecondary: "Смотреть работы",
  },
  terminal: {
    ariaLabel: "Как проходит работа: от заказа до готового сайта или приложения",
    filename: "как-это-работает.txt",
    lines: [
      { type: "command", text: "Что вам нужно?" },
      { type: "output", text: "→ Сайт, магазин, приложение или бот в Telegram" },
      { type: "command", text: "Как проходит работа:" },
      { type: "success", text: "✓ Обсуждаем задачу и пожелания" },
      { type: "success", text: "✓ Делаю дизайн и собираю проект" },
      { type: "success", text: "✓ Запускаю — вы получаете готовую ссылку" },
      { type: "command", text: "Сроки и связь:" },
      { type: "output", text: "→ Срок после брифа · в Telegram отвечаю сразу." },
      { type: "highlight", text: "● Свободен для нового заказа — напишите!" },
    ],
  },
  sections: {
    services: {
      label: "// services",
      title: "Что делаю",
    },
    projects: {
      label: "// projects",
      title: "Избранные работы",
      description: "Демо-проекты, которые показывают уровень кода и подход к запуску.",
      descriptionExtra: "Это не полный список заказов — коммерческие кейсы обсуждаем отдельно.",
    },
    approach: {
      label: "// approach",
      title: "Как я работаю",
    },
  },
  services: [
    {
      title: "Лендинги и промо-сайты",
      description: "Одностраничники под рекламу, запуск продукта или услуги.",
    },
    {
      title: "Сайты-визитки",
      description: "Небольшие сайты для мастерских, специалистов и локального бизнеса.",
    },
    {
      title: "Интернет-магазины",
      description: "Каталог, корзина, оплата и админка для продаж онлайн.",
    },
    {
      title: "Telegram-приложения",
      description: "Боты и Mini Apps: заказы, уведомления, личный кабинет в Telegram.",
    },
    {
      title: "Мобильные приложения",
      description: "Приложения для iOS и Android под ваш продукт или сервис.",
    },
    {
      title: "Парсеры и автоматизация",
      description: "Сбор данных, мониторинг цен, отчёты и рутинные задачи на автопилоте.",
    },
  ],
  projects: {
    "trustlink-otc": {
      title: "TrustLink OTC",
      category: "crypto",
      description: "Платформа для безопасных сделок между пользователями без посредника.",
    },
    ecospace: {
      title: "EcoSpace",
      category: "landing",
      description: "Промо-сайт архитектурного бюро с калькулятором стоимости проекта.",
    },
    "glina-ogon": {
      title: "Глина & Огонь",
      category: "portfolio",
      description: "Сайт крафтовой мастерской с онлайн-записью на мастер-классы.",
    },
    "otc-hub": {
      title: "OTC-Hub",
      category: "telegram",
      description: "Торговая панель в Telegram: стакан ордеров, калькулятор валют, P2P.",
    },
  },
  categories: {
    landing: "Лендинг",
    portfolio: "Сайт-визитка",
    telegram: "Telegram",
    crypto: "Крипто",
  },
  workPrinciples: [
    {
      title: "Понятная коммуникация",
      description:
        "Объясняю решения без жаргона, согласовываю этапы до старта и держу в курсе прогресса.",
    },
    {
      title: "Сроки после брифа",
      description:
        "Оцениваю сроки, когда понятна задача. Без обещаний «за три дня» до обсуждения деталей.",
    },
    {
      title: "Правки без бюрократии",
      description:
        "Вношу изменения оперативно: правки на этапе согласования — без лишних формальностей.",
    },
    {
      title: "От кода до деплоя",
      description:
        "Сам пишу, настраиваю и выкладываю проект — вы получаете готовую ссылку, а не архив с файлами.",
    },
  ],
  footer: {
    title: "Готов к новому проекту?",
    subtitle: "Напишите в Telegram — отвечу сразу.",
  },
  languageSwitcher: {
    label: "Язык",
    switchTo: "English",
  },
  themeSwitcher: {
    label: "Тема",
    switchToLight: "Светлая",
    switchToDark: "Тёмная",
  },
  storytellingSwitcher: {
    label: "Режим просмотра",
    switchToCinematic: "Сторителлинг",
    switchToComfortable: "Обычный",
    shortOn: "Стори",
    shortOff: "Обычн.",
  },
  storytellingHints: {
    title: "Как пользоваться сторителлингом",
    dismiss: "Понятно",
    showAgain: "Подсказка",
    scroll: "Крутите колёсико мыши или свайпайте вверх/вниз — так вы двигаетесь по странице.",
    scrollDown: "Листайте вниз",
    nav: "Справа кнопки 1–4 с названиями секций — нажмите, чтобы сразу перейти.",
    navTitle: "Секции",
    navAria: "Навигация по секциям",
    navJump: "Перейти к секции",
    exit: "Кнопка «Обычный» вверху страницы — вернуться к обычному просмотру.",
    projects: "В проектах: прокручивайте вниз — карточки будут листаться вбок.",
    approach: "В «Как я работаю»: каждая прокрутка показывает следующий шаг.",
    sections: {
      hero: "Главная",
      services: "Услуги",
      projects: "Проекты",
      approach: "Подход",
    },
  },
};
