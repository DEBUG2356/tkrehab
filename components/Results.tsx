"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Icon } from "./Icons";
import { Counter, Reveal, SplitLines, luxe } from "./motion";
import { brand, laserResult, reviews } from "@/lib/site";
import { site } from "@/lib/images";

export default function Results() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="velemenyek" className="relative scroll-mt-24 py-24 lg:py-32" aria-labelledby="results-title">
      <div className="container-x">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Eredmények és vélemények</p>
            </Reveal>
            <SplitLines
              as="h2"
              className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl lg:text-6xl"
              lines={[
                <span key="a" id="results-title">
                  Lépésről lépésre
                </span>,
                <span key="b">
                  a <span className="italic font-medium text-rose-deep">gyógyulás</span> felé.
                </span>,
              ]}
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* vélemény-összegzés */}
          <Reveal className="rounded-[2rem] bg-forest p-8 text-cream shadow-[var(--shadow-soft)] leaf-texture lg:col-span-4">
            <div className="flex items-center gap-1 text-rose">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 260, damping: 14 }}
                >
                  <Icon name="star" className="h-6 w-6 fill-current" />
                </motion.span>
              ))}
            </div>
            <p className="mt-5 font-display text-6xl font-bold text-cream">
              <Counter value={brand.rating.percent} suffix="%" />
            </p>
            <p className="mt-1 font-display text-2xl text-rose">{reviews.headline}</p>
            <p className="mt-1 text-sm text-cream/60">{reviews.sub}</p>
            <a href={brand.facebook} target="_blank" rel="noopener" className="btn btn-rose mt-8 !py-3 !text-sm">
              <Icon name="facebook" className="h-4 w-4" />
              Vélemények a Facebookon
            </a>
          </Reveal>

          {/* idézet */}
          <Reveal delay={0.1} className="panel relative flex flex-col justify-between p-8 lg:col-span-4">
            <span aria-hidden className="absolute right-6 top-2 font-display text-8xl leading-none text-rose/50">
              ”
            </span>
            <div>
              <p className="script text-3xl text-rose-deep">Ügyfelünk írta</p>
              <p className="mt-4 font-display text-2xl leading-snug text-forest">„{reviews.items[0].text}”</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-blush text-forest font-display font-bold">
                {reviews.items[0].name[0]}
              </span>
              <div>
                <p className="font-semibold text-forest">{reviews.items[0].name}</p>
                <p className="text-xs text-ink-soft">{reviews.items[0].date} · Facebook-ajánlás</p>
              </div>
            </div>
          </Reveal>

          {/* lézer-eredmény (érzékeny kép) */}
          <Reveal delay={0.2} className="panel overflow-hidden lg:col-span-4">
            <div className="relative aspect-[4/3]">
              <Image
                src={site["laser-result"].src}
                alt="Sebgyógyulás lézerterápiával – 1 hét, 5 kezelés"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className={`object-cover transition-[filter] duration-700 ${revealed ? "" : "blur-2xl scale-110"}`}
              />
              <AnimatePresence>
                {!revealed && (
                  <motion.button
                    key="veil"
                    type="button"
                    onClick={() => setRevealed(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-forest/40 p-6 text-center text-cream backdrop-blur-sm"
                    exit={{ opacity: 0, transition: { duration: 0.5, ease: luxe } }}
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-paper/20">
                      <Icon name="eye" className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold">Sebfotó – kattintson a megtekintéshez</span>
                    <span className="text-xs text-cream/70">Elhúzódó sebgyógyulás, 5 lézerkezelés után</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            <div className="p-7">
              <h3 className="font-display text-xl font-semibold text-forest">{laserResult.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{laserResult.text}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {laserResult.points.map((p) => (
                  <li key={p} className="chip chip-rose !text-xs">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
