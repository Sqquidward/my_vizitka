"use client";

import { useCallback, useRef, type MouseEvent, type RefObject } from "react";

interface UseTiltOptions {
  maxTilt?: number;
  lift?: number;
}

interface UseTiltResult<T extends HTMLElement> {
  ref: RefObject<T | null>;
  onMouseMove: (event: MouseEvent<T>) => void;
  onMouseLeave: () => void;
}

export function useTilt<T extends HTMLElement>({
  maxTilt = 10,
  lift = 4,
}: UseTiltOptions = {}): UseTiltResult<T> {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback(
    (event: MouseEvent<T>) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      element.style.transform = `perspective(900px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) translateY(-${lift}px)`;
    },
    [lift, maxTilt],
  );

  const onMouseLeave = useCallback(() => {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
