"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Icon } from "./Icons";
import { Magnetic, Reveal, SplitLines, luxe } from "./motion";
import { brand, moti } from "@/lib/site";
import { gallery, site } from "@/lib/images";

const includeIcons = ["body", "boot", "run"] as const;

const stepsWrap = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };
const step = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: luxe } },
};

export default function Moti() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const slides = gallery.filter((g) => g.cat === "moti");
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="moti"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-forest py-24 text-cream leaf-texture lg:py-32"
      aria-labelledby="moti-title"
    >
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-rose/15 blur-3xl" />

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Kép „szkennerrel" */}
        <div className="relative lg:col-span-5">
          <motion.figure
            className="relative mx-auto w-[min(100%,24rem)] lg:w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: luxe }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
                <Image
                  src={site["moti-back"].src}
                  alt="Testtartás-elemzés: női hát a gerinc kiemelésével"
                  fill
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
              {/* rács */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-30 mix-blend-screen"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(201,160,145,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,145,0.35) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              {/* pásztázó vonal */}
              <motion.div
                aria-hidden
                className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-rose/45 to-transparent"
                animate={{ top: ["-20%", "110%"] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
              >
                <div className="absolute inset-x-0 bottom-0 h-px bg-rose shadow-[0_0_18px_2px_rgba(201,160,145,0.9)]" />
              </motion.div>
              {/* sarok-jelölők */}
              {["left-5 top-5 border-l border-t", "right-5 top-5 border-r border-t", "left-5 bottom-5 border-l border-b", "right-5 bottom-5 border-r border-b"].map(
                (c) => (
                  <span key={c} aria-hidden className={`absolute h-7 w-7 border-rose/90 ${c}`} />
                ),
              )}
              <div className="absolute left-5 top-14 rounded-full bg-forest/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-rose backdrop-blur">
                3D szkennelés
              </div>
            </div>

            {/* lebegő címkék */}
            <motion.div
              className="absolute right-2 top-10 rounded-2xl bg-paper px-4 py-3 text-forest shadow-[var(--shadow-soft)] sm:-right-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: luxe }}
            >
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rose-deep">A vizsgálat ára</p>
                <p className="font-display text-2xl font-bold">{moti.price}</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="absolute left-2 bottom-12 rounded-2xl bg-rose px-4 py-3 text-forest shadow-[var(--shadow-soft)] sm:-left-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.7, ease: luxe }}
            >
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/70">6 hét múlva</p>
                <p className="font-display text-xl font-bold">kedvezményes kontroll</p>
              </motion.div>
            </motion.div>
          </motion.figure>
        </div>

        {/* Szöveg */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow eyebrow-light">{moti.eyebrow} · Moti Physio 3D</p>
          </Reveal>
          <SplitLines
            as="h2"
            className="mt-3 font-display text-4xl font-bold leading-[1.05] text-cream sm:text-5xl lg:text-[3.4rem]"
            lines={[
              <span key="a" id="moti-title">
                AI alapú tartás-
              </span>,
              <span key="b">
                és <span className="italic font-medium text-rose">mozgáselemzés</span>
              </span>,
            ]}
          />
          <Reveal delay={0.25}>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">{moti.lead}</p>
            <p className="script mt-3 text-2xl text-rose">{moti.problem}</p>
          </Reveal>

          {/* mit tartalmaz */}
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {moti.includes.map((inc, i) => (
              <Reveal key={inc.title} delay={0.1 + i * 0.1} className="rounded-2xl border border-cream/10 bg-cream/5 p-5 backdrop-blur-sm">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-rose/60 text-rose">
                  <Icon name={includeIcons[i]} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">{inc.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/65">{inc.text}</p>
              </Reveal>
            ))}
          </div>

        </div>
      </div>

      {/* Menet + kinek ajánlom – teljes szélességben, két egyenlő oszlopban, középre igazítva */}
      <div className="container-x relative mt-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow eyebrow-light">Lépésről lépésre</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-cream">A vizsgálat menete</h3>
              </Reveal>
              <motion.ol
                className="relative mt-8 space-y-7"
                variants={stepsWrap}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0px" }}
              >
                <motion.span
                  aria-hidden
                  className="absolute left-[1.35rem] top-4 w-px origin-top bg-gradient-to-b from-rose via-rose/60 to-transparent"
                  style={{ height: "calc(100% - 2rem)" }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: luxe, delay: 0.3 }}
                />
                {moti.steps.map((s, i) => (
                  <motion.li key={s.title} variants={step} className="relative flex gap-5">
                    <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose font-display text-lg font-bold text-forest">
                      {i + 1}.
                    </span>
                    <div className="pt-1.5">
                      <h4 className="font-display text-xl font-semibold text-rose">{s.title}</h4>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-cream/70">{s.text}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            </div>

            <div>
              <Reveal>
                <p className="eyebrow eyebrow-light">Célcsoport</p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-cream">Kinek ajánlom?</h3>
              </Reveal>
              <ul className="mt-8">
                {moti.forWhom.map((f, i) => (
                  <Reveal
                    as="li"
                    key={f}
                    delay={0.1 + i * 0.08}
                    className="flex items-start gap-4 border-b border-cream/10 py-3.5 text-[1rem] leading-snug text-cream/85 first:border-t"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose/20 text-rose">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    {f}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* árpanel – középen, az előnyök egy sorban */}
          <Reveal delay={0.2} className="mt-16 rounded-[2rem] bg-paper p-7 text-forest shadow-[var(--shadow-soft)] sm:p-9">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1">
                <p className="eyebrow">A vizsgálat ára</p>
                <p className="mt-1 font-display text-5xl font-bold">{moti.price}</p>
                <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">{moti.priceIncludes}</p>
              </div>
              <Magnetic>
                <a href={brand.phoneHref} className="btn btn-primary">
                  <Icon name="phone" className="h-4 w-4" />
                  Időpontot kérek
                </a>
              </Magnetic>
            </div>
            <ul className="mt-7 grid gap-3 border-t border-forest/10 pt-6 sm:grid-cols-3">
              {moti.benefits.map((b, i) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium text-forest">
                  <span className="script text-xl text-rose-deep">0{i + 1}</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* húzható diasor */}
      <div className="relative mt-20">
        <Reveal className="container-x mb-6 flex items-center justify-between">
          <p className="eyebrow eyebrow-light">Moti Physio 3D · bemutató</p>
          <p className="hidden text-xs font-medium text-cream/50 sm:block">← húzza a kártyákat →</p>
        </Reveal>
        <div ref={trackRef} className="overflow-hidden">
          {/* w-max: a húzható doboz a tartalom szélességét veszi fel, így a dragConstraints az utolsó kártyáig enged.
              A bal padding a .container-x belső élére igazít (100% = a track szélessége). */}
          <motion.div
            className="flex w-max cursor-grab gap-5 pr-6 active:cursor-grabbing sm:pr-10"
            style={{ paddingLeft: "max(1rem, calc((100% - 80rem) / 2 + 2.5rem))" }}
            drag="x"
            dragConstraints={trackRef}
            dragElastic={0.08}
            whileTap={{ cursor: "grabbing" }}
          >
            {slides.map((s, i) => (
              <motion.figure
                key={s.src}
                className="relative w-[17rem] shrink-0 overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] sm:w-[20rem]"
                initial={{ opacity: 0, y: 30, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: luxe }}
                whileHover={{ y: -8 }}
              >
                <Image
                  src={s.src}
                  alt={s.caption}
                  width={s.w}
                  height={s.h}
                  sizes="20rem"
                  draggable={false}
                  className="pointer-events-none aspect-square w-full object-cover"
                />
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
