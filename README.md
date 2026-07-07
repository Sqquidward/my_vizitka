# Портфолио — Web3 & Telegram Mini Apps

Одностраничный хаб-портфолио в стиле кибер-минимализма. Поддерживает открытие как Telegram Mini App.

## Стек

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Lucide React

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Настройка

Замените ссылки в `src/config/site.ts` и `src/data/projects.ts` на свои:

- Telegram-профиль
- GitHub-профиль
- Live Demo и репозитории проектов

## Telegram Mini App

Сайт автоматически инициализирует `Telegram.WebApp` при открытии внутри Telegram:

- Раскрывает viewport (`expand`)
- Устанавливает цвета хедера и фона
- Учитывает safe-area insets

Для деплоя как TMA укажите URL сайта в настройках бота через [@BotFather](https://t.me/BotFather).

## Деплой

Рекомендуется Cloudflare Pages:

```bash
npm run build
```
