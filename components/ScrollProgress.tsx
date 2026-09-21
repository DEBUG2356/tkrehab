"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Vékony rózsaszín csík a lap tetején, ami a görgetés arányát mutatja.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-rose-deep via-rose to-blush"
      style={{ scaleX }}
    />
  );
}
