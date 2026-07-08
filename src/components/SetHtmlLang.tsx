"use client";

import { useEffect } from "react";

interface SetHtmlLangProps {
  lang: string;
}

export function SetHtmlLang({ lang }: SetHtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
