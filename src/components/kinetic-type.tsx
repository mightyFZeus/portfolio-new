"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const approach = [
  {
    word: "think.",
    label: "The product",
    detail: "Understand the people and the problem. Help shape what is worth building.",
  },
  {
    word: "build.",
    label: "The craft",
    detail: "Thoughtful architecture, secure foundations, and the details that make an app feel native.",
  },
  {
    word: "ship.",
    label: "The follow-through",
    detail: "Own the release. Listen to the people using it. Keep making the product better.",
  },
];

export function KineticType() {
  const [active, setActive] = useState(1);

  return (
    <div className="kinetic-stage reveal-delay">
      <div className="kinetic-choices" role="group" aria-label="My approach to building products">
        {approach.map((step, index) => (
          <button
            key={step.word}
            className="kinetic-choice"
            type="button"
            aria-pressed={active === index}
            aria-controls="approach-detail"
            onClick={() => setActive(index)}
          >
            <span className="kinetic-number" aria-hidden="true">0{index + 1}</span>
            <span className="kinetic-word">{step.word}</span>
            <ArrowUpRight className="kinetic-arrow" strokeWidth={1.25} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div id="approach-detail" className="kinetic-detail" aria-live="polite" aria-atomic="true">
        <div key={active} className="kinetic-detail-copy">
          <span>{approach[active].label}</span>
          <p>{approach[active].detail}</p>
        </div>
      </div>
    </div>
  );
}
