"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Icon } from "./Icons";
import { Magnetic, Reveal, SplitLines, luxe } from "./motion";
import { gallery } from "@/lib/images";

// Három oszlop, eltérő sebességű parallaxszal.
const picks = [2, 13, 9, 14, 12, 10, 3, 16, 26];

export default function GalleryPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const imgs = picks.map((fb) => gallery.find((g) => g.fb === fb)!).filter(Boolean);
  const cols = [imgs.slice(0, 3), imgs.slice(3, 6), imgs.slice(6, 9)];
  const ys = [y1, y2, y3];

  return (
    <section ref={ref} id="galeria" className="relative scroll-mt-24 overflow-hidden bg-cream-2/60 py-24 lg:py-32" aria-labelledby="gallery-title">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">Galéria</p>
            </Reveal>
            <SplitLines
              as="h2"
              className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl"
              lines={[
                <span key="a" id="gallery-title">
                  Pillanatok
                </span>,
                <span key="b">
                  a <span className="italic font-medium text-rose-deep">stúdióból.</span>
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.2}>
            <Magnetic>
              <Link href="/galeria" className="btn btn-primary">
                Teljes galéria
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {cols.map((col, ci) => (
            <motion.div key={ci} style={{ y: ys[ci] }} className={`flex flex-col gap-3 sm:gap-5 ${ci === 2 ? "hidden md:flex" : ""}`}>
              {col.map((g, i) => (
                <motion.div
                  key={g.src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.9, delay: i * 0.08, ease: luxe }}
                >
                  <Link href={`/galeria?kep=${g.fb}`} className="group relative block overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-card)]">
                    <Image
                      src={g.src}
                      alt={g.caption}
                      width={g.w}
                      height={g.h}
                      sizes="(min-width: 768px) 30vw, 45vw"
                      className="w-full transition-transform duration-[1.4s] [transition-timing-function:var(--ease-luxe)] group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-forest/70 to-transparent p-4 text-sm text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {g.caption}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
