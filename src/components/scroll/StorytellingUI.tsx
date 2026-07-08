"use client";

import type { Dictionary } from "@/i18n/types";
import { ScrollProgress } from "@/components/scroll/ScrollProgress";
import { StorytellingGuide } from "@/components/scroll/StorytellingGuide";

interface StorytellingUIProps {
  dict: Dictionary;
}

export function StorytellingUI({ dict }: StorytellingUIProps) {
  return (
    <>
      <StorytellingGuide dict={dict} />
      <ScrollProgress dict={dict} />
    </>
  );
}
