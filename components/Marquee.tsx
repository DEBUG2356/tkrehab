"use client";

import { motion } from "motion/react";
import { marquee } from "@/lib/site";

// Végtelen szalag a szolgáltatásokkal – a plakát zöld panel-színével.
export default function Marquee({ dark = true }: { dark?: boolean }) {
  const items = [...marquee, ...marquee];
  return (
    <div
      className={`relative overflow-hidden py-4 ${dark ? "bg-forest text-cream leaf-texture" : "bg-blush-2 text-forest"}`}
      aria-hidden
    >
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
      >
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg italic tracking-wide sm:text-xl">
            {t}
            <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-rose" : "bg-rose-deep"}`} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
