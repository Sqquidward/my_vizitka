import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Background } from "@/components/Background";
import { MotionProvider } from "@/components/MotionProvider";
import { TelegramProvider } from "@/components/TelegramProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Разработка сайтов, приложений и Telegram-ботов под ключ",
  description:
    "Лендинги, визитки, интернет-магазины, Telegram-приложения, мобильные приложения и автоматизация. Next.js, TypeScript, Cloudflare.",
  openGraph: {
    title: "Разработка сайтов, приложений и Telegram-ботов под ключ",
    description:
      "Сайты и приложения под ключ — быстро, без шаблонов. Переводы и USDT.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0B0E14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Background />
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="lazyOnload"
        />
        <MotionProvider>
          <TelegramProvider>{children}</TelegramProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
