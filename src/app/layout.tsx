import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Background } from "@/components/Background";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollProvider } from "@/components/scroll/ScrollProvider";
import { TelegramProvider } from "@/components/TelegramProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { createMetadata } from "@/lib/create-metadata";
import { themeInitScript } from "@/lib/theme";
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

export const metadata: Metadata = createMetadata("ru");

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
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full">
        <Background />
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="lazyOnload"
        />
        <ThemeProvider>
          <MotionProvider>
            <ScrollProvider>
              <TelegramProvider>{children}</TelegramProvider>
            </ScrollProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
