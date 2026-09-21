"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useSyncExternalStore } from "react";

const query = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getSnapshot = () => window.matchMedia(query).matches;

// Lágy púderrózsaszín fényfolt, ami a kurzort követi (csak egér + hover eszközökön).
export default function CursorGlow() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-multiply"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(closest-side, rgba(201,160,145,0.22), rgba(201,160,145,0.08) 45%, rgba(201,160,145,0) 70%)",
      }}
    />
  );
}
