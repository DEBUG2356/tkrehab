"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Icon } from "./Icons";
import { Reveal, SplitLines, luxe } from "./motion";
import { problems } from "@/lib/site";
import { site } from "@/lib/images";

export default function Problems() {
  const [open, setOpen] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="panaszok" className="relative scroll-mt-24 overflow-hidden bg-cream-2/60 py-24 lg:py-32" aria-labelledby="problems-title">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow">Mikor érdemes jönni?</p>
            </Reveal>
            <SplitLines
              as="h2"
              className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl"
              lines={[
                <span key="a" id="problems-title">
                  Milyen problémákkal
                </span>,
                <span key="b">fordulnak hozzám</span>,
                <span key="c">
                  <span className="italic font-medium text-rose-deep">leggyakrabban?</span>
                </span>,
              ]}
            />
            <Reveal delay={0.3}>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                A gyógytorna azoknak segít, akik szeretnének fájdalommentesebben mozogni, gyorsabban regenerálódni és
                biztonságban érezni magukat a saját testükben.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-8 hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
                <motion.div style={{ y }} className="absolute inset-0 scale-[1.15]">
                  <Image src={site.treatment.src} alt="Fizikoterápiás kezelés a stúdióban" fill sizes="30vw" className="object-cover object-[50%_35%]" />
                </motion.div>
                <span className="absolute bottom-4 left-4 rounded-full bg-paper/85 px-3 py-1.5 text-xs font-semibold text-forest backdrop-blur">
                  Kezelés a stúdióban
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="lg:col-span-7">
          {problems.map((p, i) => {
            const on = open === i;
            return (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="border-b border-forest/10 first:border-t">
                <button
                  type="button"
                  onClick={() => setOpen(on ? -1 : i)}
                  aria-expanded={on}
                  className="group flex w-full items-center gap-5 py-6 text-left sm:gap-8"
                >
                  <span className={`script text-3xl transition-colors duration-300 sm:text-4xl ${on ? "text-rose-deep" : "text-forest/35 group-hover:text-rose-deep"}`}>
                    {p.n}
                  </span>
                  <span className={`flex-1 font-display text-xl font-semibold transition-colors duration-300 sm:text-2xl ${on ? "text-forest" : "text-forest/80"}`}>
                    {p.title}
                  </span>
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 [transition-timing-function:var(--ease-luxe)] ${
                      on ? "rotate-45 border-forest bg-forest text-cream" : "border-forest/20 text-forest group-hover:border-forest"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: luxe }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-[3.6rem] pr-12 leading-relaxed text-ink-soft sm:pl-[5.4rem]">{p.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
          <Reveal className="mt-8 flex items-center gap-3 text-sm text-ink-soft">
            <Icon name="leaf" className="h-5 w-5 text-rose-deep" />
            Sportfizioterapeutaként kiemelt figyelmet fordítok a túlterhelésből eredő panaszokra.
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
