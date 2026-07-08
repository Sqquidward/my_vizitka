import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export const SCROLL_SECTIONS = [
  { id: "hero-section", label: "Hero" },
  { id: "services-section", label: "Services" },
  { id: "projects-section", label: "Projects" },
  { id: "approach-section", label: "Approach" },
] as const;

export const DESKTOP_MQ = "(min-width: 768px)";
export const MOBILE_MQ = "(max-width: 767px)";

export const revealDefaults = {
  duration: 0.55,
  ease: "power2.out",
  stagger: 0.06,
} as const;

export function revealOnScroll(
  targets: gsap.TweenTarget,
  trigger: Element | null,
  options?: {
    y?: number;
    stagger?: number;
    start?: string;
  },
) {
  if (!trigger) return;

  const y = options?.y ?? 28;
  const targetList = gsap.utils.toArray(targets) as Element[];

  if (!targetList.length) return;

  gsap.set(targetList, { opacity: 0, y });

  gsap.to(targetList, {
    opacity: 1,
    y: 0,
    duration: revealDefaults.duration,
    stagger: options?.stagger ?? revealDefaults.stagger,
    ease: revealDefaults.ease,
    scrollTrigger: {
      trigger,
      start: options?.start ?? "top 88%",
      once: true,
    },
  });

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    const triggerRect = trigger.getBoundingClientRect();
    if (triggerRect.top > window.innerHeight * 0.92) return;

    gsap.set(targetList, { opacity: 1, y: 0 });
  });
}
