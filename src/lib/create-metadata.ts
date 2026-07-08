import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

export function createMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      type: "website",
    },
    alternates: {
      languages: {
        ru: "/",
        en: "/en",
      },
    },
  };
}
