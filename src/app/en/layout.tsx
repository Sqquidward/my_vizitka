import type { Metadata } from "next";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { createMetadata } from "@/lib/create-metadata";

export const metadata: Metadata = createMetadata("en");

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetHtmlLang lang="en" />
      {children}
    </>
  );
}
