"use client";

import { m, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { defaultTransition, fadeInUp, staggerContainer, viewport } from "@/lib/motion";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function StaggerContainer({
  children,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  return (
    <m.div
      variants={fadeInUp}
      transition={defaultTransition}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}
