"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Icon } from "./Icons";
import { Magnetic, Reveal, SplitLines, luxe } from "./motion";
import { brand, prices } from "@/lib/site";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const row = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: luxe } },
};

export default function Prices() {
  return (
    <section id="arlista" className="relative scroll-mt-24 overflow-hidden bg-forest py-24 text-cream leaf-texture lg:py-32" aria-labelledby="prices-title">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Image src="/img/site/logo-mark-light.png" alt="" width={1343} height={1010} className="mx-auto h-12 w-auto" />
          </Reveal>
          <SplitLines
            as="h2"
            className="mt-6 font-display text-5xl font-semibold uppercase tracking-[0.08em] text-cream sm:text-6xl"
            lines={[
              <span key="a" id="prices-title">
                Árlista
              </span>,
            ]}
          />
          <motion.span
            aria-hidden
            className="mx-auto mt-5 block h-1 w-20 origin-center rounded-full bg-rose"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: luxe }}
          />
          <Reveal delay={0.3}>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-cream/60">Érvényes {prices.validFrom}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {prices.groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.12} className="rounded-[2rem] border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm sm:p-8">
              <h3 className="font-display text-lg font-bold uppercase tracking-[0.12em] text-rose">{g.title}</h3>
              <motion.ul className="mt-6 space-y-3.5" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10% 0px" }}>
                {g.items.map((it) => (
                  <motion.li key={it.name + it.duration} variants={row} className="group flex items-baseline text-[0.98rem]">
                    <span className="min-w-0 text-cream/90 transition-colors group-hover:text-cream">
                      {it.name}
                      {it.duration && <span className="ml-1.5 text-cream/50">{it.duration}</span>}
                    </span>
                    <span className="leader !border-cream/25" />
                    <span className="shrink-0 whitespace-nowrap font-display text-lg font-semibold text-rose">{it.price}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-sm leading-relaxed text-cream/65">
            Az árak forintban értendők. Beutalóval és anélkül is jöhet – a kezelést minden esetben állapotfelmérés előzi meg.
            Ajándékkártya bármely szolgáltatásra vásárolható.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Magnetic>
              <a href={brand.phoneHref} className="btn btn-rose">
                <Icon name="phone" className="h-4 w-4" />
                Időpontkérés
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="/img/site/pricelist.jpg" target="_blank" rel="noopener" className="btn btn-light">
                <Icon name="doc" className="h-4 w-4" />
                Árlista képként
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
