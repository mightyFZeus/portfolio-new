"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { useEffect, useRef, type PointerEvent } from "react";

export function KineticType() {
  const rows = useRef<Array<HTMLDivElement | null>>([]);
  const frame = useRef(0);
  const reducedMotion = useRef(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      reducedMotion.current = preference.matches;
      if (preference.matches)
        rows.current.forEach((row) => row?.style.removeProperty("transform"));
    };
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => {
      cancelAnimationFrame(frame.current);
      preference.removeEventListener("change", updatePreference);
    };
  }, []);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion.current || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      rows.current.forEach((row, index) => {
        if (row)
          row.style.transform = `translate(${x * (index + 1) * 12}px, ${y * 12}px)`;
      });
    });
  };

  const reset = () => {
    cancelAnimationFrame(frame.current);
    rows.current.forEach((row) => row?.style.removeProperty("transform"));
  };

  return (
    <div
      className="kinetic-stage reveal-delay"
      aria-hidden="true"
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <div className="kinetic-scroll">
        {["think.", "build.", "ship."].map((word, index) => (
          <div
            key={word}
            className="kinetic-row"
            ref={(element) => {
              rows.current[index] = element;
            }}
          >
            <div className={`kinetic-line kinetic-line-${index}`}>
              <span className="kinetic-number">0{index + 1}</span>
              <span className="kinetic-word">{word}</span>
              {index === 1 && (
                <ArrowUpRight className="kinetic-arrow" strokeWidth={1.25} />
              )}
            </div>
          </div>
        ))}
        <div className="kinetic-caption">
          <Code2 size={18} />
          <span>React Native / iOS / Android</span>
        </div>
      </div>
    </div>
  );
}
