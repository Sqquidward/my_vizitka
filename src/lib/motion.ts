import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
};

export const viewport = {
  once: true,
  margin: "-80px 0px -40px 0px",
} as const;
