"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal() {
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () =>
      root.classList.toggle("reveal-ready", !motion.matches);
    syncMotion();
    motion.addEventListener("change", syncMotion);

    let frame = 0;
    const updateProgress = () => {
      const available = root.scrollHeight - window.innerHeight;
      const fraction =
        available > 0
          ? Math.min(1, Math.max(0, window.scrollY / available))
          : 0;
      if (progress.current)
        progress.current.style.transform = `scaleX(${fraction})`;
      frame = 0;
    };
    const requestProgress = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const delay = element.dataset.revealDelay;

          if (delay) {
            element.style.transitionDelay = `${delay}ms`;
          }

          element.classList.add("is-visible");
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.15,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", syncMotion);
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
      root.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={progress} />
    </div>
  );
}
