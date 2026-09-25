"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Wires up lightweight, declarative effects for server-rendered markup:
 * - [data-reveal]   fade/slide in when scrolled into view
 * - .spotlight      cursor-following glow (sets --mx / --my)
 * - [data-count]    count-up numbers when visible
 */
export function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)");
    const revealer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach((el) => (reduceMotion ? el.classList.add("is-visible") : revealer.observe(el)));

    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const counter = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          counter.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? "";
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / 1600, 1);
            el.textContent = `${Math.round(target * (1 - Math.pow(1 - p, 3)))}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );
    if (!reduceMotion) counters.forEach((el) => counter.observe(el));

    const onPointerMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      revealer.disconnect();
      counter.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, [pathname]);

  return null;
}
