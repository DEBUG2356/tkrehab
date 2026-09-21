"use client";

import { motion } from "motion/react";
import { draw } from "./motion";

// A plakát sarkaiban látható levél-vonalrajz: görgetésre rajzolódik ki (pathLength).
// Egy ívelt szár, rajta váltakozva elhelyezett levelek, mindegyik saját erezettel.
const LEAVES = [
  { t: 0.12, side: 1, s: 1.0 },
  { t: 0.26, side: -1, s: 1.15 },
  { t: 0.4, side: 1, s: 1.2 },
  { t: 0.54, side: -1, s: 1.1 },
  { t: 0.68, side: 1, s: 0.95 },
  { t: 0.82, side: -1, s: 0.8 },
  { t: 0.94, side: 1, s: 0.6 },
];

// Szár: kvadratikus görbe (0,300) → (120,0) kontroll (-40,120)
function stemPoint(t: number) {
  const p0 = { x: 20, y: 300 }, p1 = { x: -30, y: 130 }, p2 = { x: 130, y: 0 };
  const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x;
  const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y;
  const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
  const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
  // Kerekítve, hogy a szerver és a kliens azonos stringet adjon (hydration).
  const r2 = (v: number) => Math.round(v * 100) / 100;
  return { x: r2(x), y: r2(y), angle: r2((Math.atan2(dy, dx) * 180) / Math.PI) };
}

export default function LeafArt({
  className = "",
  color = "currentColor",
  flip = false,
  delay = 0,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="-40 -20 220 340"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-5% 0px" }}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <motion.path d="M20 300 Q -30 130 130 0" variants={draw} custom={delay} />
      {LEAVES.map((l, i) => {
        const p = stemPoint(l.t);
        const rot = Math.round((p.angle + l.side * 62) * 100) / 100;
        return (
          <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${rot}) scale(${l.s})`}>
            <motion.path d="M0 0 C 18 -14, 44 -12, 56 4 C 44 20, 18 22, 0 0 Z" variants={draw} custom={delay + i + 1} />
            <motion.path d="M4 2 L 50 4" variants={draw} custom={delay + i + 1.5} opacity={0.7} />
          </g>
        );
      })}
    </motion.svg>
  );
}
