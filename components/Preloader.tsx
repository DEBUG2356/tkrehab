"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const KEY = "tkrehab-intro-seen";

// Nyitó függöny: a TK-monogram lélegzik egyet, a rózsaszín vonal kihúzódik, aztán a krém függöny felszalad.
// Munkamenetenként egyszer fut le.
export default function Preloader() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
      sessionStorage.setItem(KEY, "1");
    } catch {}
    const t = setTimeout(() => setShow(false), seen || reduce ? 0 : 2000);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    document.documentElement.style.overflow = show ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          aria-hidden
        >
          <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush/60 blur-3xl" />
          <motion.div
            className="relative w-[40vmin] max-w-[260px]"
            initial={{ opacity: 0, scale: 0.82, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/img/site/logo-mark-dark.png" alt="" width={1343} height={1010} priority className="h-auto w-full" />
          </motion.div>
          <motion.div
            className="absolute bottom-[18vh] left-1/2 h-[3px] w-24 -translate-x-1/2 origin-left rounded-full bg-rose"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="script absolute bottom-[10vh] left-1/2 -translate-x-1/2 whitespace-nowrap text-2xl text-rose-deep"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Mozgás. Egy biztosabb holnapért.
          </motion.p>
          {/* ívelt alsó él a felhúzáshoz */}
          <div className="absolute -bottom-[12vh] left-0 h-[24vh] w-full rounded-b-[50%] bg-cream" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
