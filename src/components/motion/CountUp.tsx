"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  className?: string;
}

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { end: Number(match[1]), suffix: match[2] };
}

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseStatValue(value);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(parsed ? `0${parsed.suffix}` : value);

  useEffect(() => {
    if (!parsed || !isInView) return;

    const controls = animate(motionValue, parsed.end, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    });

    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(`${v}${parsed.suffix}`);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, motionValue, rounded, parsed]);

  if (!parsed) {
    return <p className={className}>{value}</p>;
  }

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
