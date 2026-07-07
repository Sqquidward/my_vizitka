"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useTilt } from "@/hooks/useTilt";

interface TiltSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxTilt?: number;
}

export function TiltSurface({
  children,
  className,
  maxTilt = 10,
  style,
  ...rest
}: TiltSurfaceProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>({ maxTilt });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out",
        ...style,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
