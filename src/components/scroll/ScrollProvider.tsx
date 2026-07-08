"use client";

import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { registerGsapPlugins } from "@/lib/scroll/gsap-config";
import type { ScrollMode } from "@/lib/scroll/mode";
import { setLenisInstance } from "@/lib/scroll/scroll-to";
import { ScrollContext } from "./ScrollContext";

interface ScrollProviderProps {
  children: ReactNode;
}

function refreshScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  ScrollTrigger.refresh();
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [ready, setReady] = useState(false);
  // Откат сторителлинга: всегда работаем в стандартном режиме.
  const [mode] = useState<ScrollMode>("comfortable");
  const isCinematic = false;

  const toggleMode = useCallback(() => {
    // no-op: режим cinematic намеренно отключён
  }, []);

  useEffect(() => {
    registerGsapPlugins();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    queueMicrotask(() => {
      setReady(true);
    });

    ScrollTrigger.refresh();

    const refreshTimeout = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.clearTimeout(refreshTimeout);
      window.removeEventListener("load", onLoad);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!ready) return;

    const html = document.documentElement;

    if (!isCinematic) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setLenisInstance(null);
      }
      html.classList.remove("lenis", "lenis-smooth");
      html.style.scrollBehavior = "";
      ScrollTrigger.refresh();
      return;
    }

    html.classList.add("lenis", "lenis-smooth");
    html.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      autoRaf: false,
      syncTouch: true,
      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
      html.classList.remove("lenis", "lenis-smooth");
      html.style.scrollBehavior = "";
    };
  }, [ready, isCinematic]);

  useGSAP(
    () => {
      if (!ready) return;

      const parallaxStrength = isCinematic ? 1 : 0.4;

      gsap.to("[data-parallax-orb='cyan']", {
        y: -200 * parallaxStrength,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: isCinematic ? 2 : 3,
        },
      });

      gsap.to("[data-parallax-orb='purple']", {
        y: -120 * parallaxStrength,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: isCinematic ? 2.5 : 3,
        },
      });

      if (isCinematic) {
        gsap.to("[data-parallax-orb='pink']", {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 3,
          },
        });
      }
    },
    { dependencies: [ready, isCinematic] },
  );

  return (
    <ScrollContext.Provider value={{ ready, mode, isCinematic, cinematicEpoch: 0, toggleMode }}>
      {children}
    </ScrollContext.Provider>
  );
}
