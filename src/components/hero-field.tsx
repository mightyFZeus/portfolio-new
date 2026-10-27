"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribeToMotion = (notify: () => void) => {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
};

export function HeroField() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef({ phase: 0, x: 0.7, y: 0.5 });
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(motionQuery).matches,
    () => true,
  );

  useEffect(() => {
    const element = canvas.current;
    const hero = element?.closest("section");
    const context = element?.getContext("2d");
    if (!element || !hero || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let phase = scene.current.phase;
    let visible = true;
    let pointerX = 0.7;
    let pointerY = 0.5;
    let currentX = scene.current.x;
    let currentY = scene.current.y;
    const still = paused || reducedMotion;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const lines = width < 600 ? 20 : 32;
      const spread = width < 600 ? 6 : 9;
      for (let line = 0; line < lines; line++) {
        const offset = (line - lines / 2) * spread;
        context.beginPath();
        context.lineWidth = line % 8 === 0 ? 1.1 : 0.65;
        context.strokeStyle = line % 8 === 0
          ? "oklch(0.88 0.19 125 / 0.26)"
          : "oklch(0.76 0.045 170 / 0.15)";
        for (let point = 0; point <= 120; point++) {
          const t = point / 120;
          const x = width * (-0.1 + t * 1.2);
          const fold = Math.sin(t * Math.PI * 2 - 0.8 + phase * 0.18);
          const influence = Math.exp(-((t - currentX) ** 2) * 9);
          const y = height * 0.48
            + fold * height * 0.23
            + offset * (0.35 + Math.cos(t * Math.PI) ** 2)
            + Math.sin(t * 5 + line * 0.07 + phase) * 12
            + influence * (currentY - 0.5) * 80;
          if (point === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.stroke();
      }
    };

    // Render only while the hero is visible, capped at 30 frames per second.
    const animate = (time: number) => {
      if (time - lastTime >= 1000 / 30) {
        phase += Math.min(time - lastTime, 50) * 0.00025;
        currentX += (pointerX - currentX) * 0.08;
        currentY += (pointerY - currentY) * 0.08;
        draw();
        lastTime = time;
      }
      frame = requestAnimationFrame(animate);
    };
    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (!still && visible && !document.hidden) {
        lastTime = performance.now();
        frame = requestAnimationFrame(animate);
      }
    };
    const resize = () => {
      const bounds = element.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      element.width = Math.round(width * scale);
      element.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
      draw();
    };
    const move = (event: PointerEvent) => {
      if (still || event.pointerType !== "mouse") return;
      const bounds = hero.getBoundingClientRect();
      pointerX = (event.clientX - bounds.left) / bounds.width;
      pointerY = (event.clientY - bounds.top) / bounds.height;
    };
    const reset = () => {
      pointerX = 0.7;
      pointerY = 0.5;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(element);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    visibilityObserver.observe(hero);
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    document.addEventListener("visibilitychange", syncAnimation);
    resize();
    syncAnimation();

    return () => {
      scene.current = { phase, x: currentX, y: currentY };
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
      document.removeEventListener("visibilitychange", syncAnimation);
    };
  }, [paused, reducedMotion]);

  const label = reducedMotion
    ? "Reduced motion enabled"
    : paused ? "Play background motion" : "Pause background motion";

  return (
    <>
      <canvas ref={canvas} className="hero-field" aria-hidden="true" />
      <button
        className="motion-toggle"
        type="button"
        onClick={() => setPaused(!paused)}
        disabled={reducedMotion}
        aria-label={label}
        title={label}
      >
        {paused || reducedMotion ? <Play size={15} /> : <Pause size={15} />}
      </button>
    </>
  );
}
