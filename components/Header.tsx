"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Icon } from "./Icons";
import { Magnetic, luxe } from "./motion";
import { brand, nav } from "@/lib/site";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: luxe, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[70]"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled ? "bg-cream/80 shadow-[0_10px_40px_-20px_rgba(46,58,46,0.35)] backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
            <Logo />
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Fő navigáció">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="group relative px-3.5 py-2 text-[0.9rem] font-medium text-forest/85 transition-colors hover:text-forest"
                >
                  {n.label}
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-rose transition-transform duration-500 [transition-timing-function:var(--ease-luxe)] group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Magnetic className="hidden sm:inline-block">
                <a href={brand.phoneHref} className="btn btn-primary !py-3 !text-[0.85rem]">
                  <Icon name="phone" className="h-4 w-4" />
                  {brand.phone}
                </a>
              </Magnetic>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/80 text-forest shadow-[var(--shadow-card)] lg:hidden"
                aria-label="Menü megnyitása"
              >
                <Icon name="menu" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[90] flex flex-col bg-forest text-cream leaf-texture"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: luxe }}
          >
            <div className="container-x flex items-center justify-between py-5">
              <Logo variant="light" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream"
                aria-label="Menü bezárása"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-x flex flex-1 flex-col justify-center gap-1 py-6" aria-label="Mobil navigáció">
              {nav.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: luxe }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-cream/10 py-3.5 font-display text-3xl text-cream"
                  >
                    <span className="script text-lg text-rose">0{i + 1}</span>
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="container-x flex flex-wrap items-center gap-3 pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: luxe }}
            >
              <a href={brand.phoneHref} className="btn btn-rose">
                <Icon name="phone" className="h-4 w-4" />
                {brand.phone}
              </a>
              <a href={brand.facebook} target="_blank" rel="noopener" className="btn btn-light">
                <Icon name="facebook" className="h-4 w-4" />
                Facebook
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
