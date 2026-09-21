"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Icon } from "./Icons";
import LeafArt from "./LeafArt";
import { Counter, Reveal, SplitLines, SplitWords, luxe } from "./motion";
import { about } from "@/lib/site";
import { site } from "@/lib/images";

const tl = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const tlItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: luxe } },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} id="rolam" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32" aria-labelledby="about-title">
      <LeafArt className="pointer-events-none absolute -right-8 top-0 hidden h-[20rem] text-rose/50 lg:block" flip delay={1} />

      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* portré */}
        <div className="relative lg:col-span-5">
          <motion.figure
            className="relative mx-auto w-[min(100%,22rem)] lg:w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: luxe }}
          >
            <div className="arch relative aspect-[3/4] overflow-hidden shadow-[var(--shadow-soft)]">
              <motion.div style={{ y }} className="absolute inset-0 scale-[1.15]">
                <Image src={site.eniko.src} alt="Tóthné Király Enikő gyógytornász" fill sizes="(min-width: 1024px) 34vw, 90vw" className="object-cover object-[50%_20%]" />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="font-display text-2xl font-semibold">{about.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-cream/80">{about.role}</p>
              </figcaption>
            </div>
            <motion.div
              className="brush-circle absolute right-0 top-6 grid h-28 w-28 place-items-center text-center text-cream sm:-right-8 sm:h-32 sm:w-32"
              initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: luxe }}
            >
              <motion.p className="script text-xl leading-tight sm:text-2xl" animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                Enikő
                <br />
                <span className="text-base">gyógytornász</span>
              </motion.p>
            </motion.div>
          </motion.figure>

          {/* számok */}
          <ul className="mx-auto mt-10 grid w-[min(100%,26rem)] grid-cols-2 gap-3 lg:w-full">
            {about.stats.map((s, i) => (
              <Reveal as="li" key={s.label} delay={0.1 + i * 0.08} className="panel p-5">
                <p className="font-display text-4xl font-bold text-forest">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* szöveg */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Rólam</p>
          </Reveal>
          <SplitLines
            as="h2"
            className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl"
            lines={[
              <span key="a" id="about-title">
                A testünk mindig jelez –
              </span>,
              <span key="b">csak meg kell tanulnunk</span>,
              <span key="c">
                <span className="italic font-medium text-rose-deep">jól értelmezni.</span>
              </span>,
            ]}
          />
          <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-ink-soft">
            {about.paragraphs.map((p, i) => (
              <SplitWords key={i} text={p} delay={0.05 * i} />
            ))}
          </div>

          <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-2">
            {about.credentials.map((c) => (
              <span key={c} className="chip chip-rose">
                <Icon name="check" className="h-3.5 w-3.5 text-rose-deep" strokeWidth={2.4} />
                {c}
              </span>
            ))}
          </Reveal>

          {/* idővonal */}
          <motion.ol
            className="relative mt-12 space-y-0 border-l border-forest/15 pl-8"
            variants={tl}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <motion.span
              aria-hidden
              className="absolute -left-px top-0 w-px origin-top bg-rose"
              style={{ height: "100%" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: luxe }}
            />
            {about.timeline.map((t) => (
              <motion.li key={t.year + t.title} variants={tlItem} className="relative pb-7 last:pb-0">
                <span className="absolute -left-[2.45rem] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-cream">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose ring-4 ring-cream" />
                </span>
                <p className="script text-xl text-rose-deep">{t.year}</p>
                <p className="font-display text-lg font-semibold text-forest">{t.title}</p>
                <p className="text-sm text-ink-soft">{t.where}</p>
              </motion.li>
            ))}
          </motion.ol>

          <Reveal delay={0.2} className="mt-12 rounded-[2rem] bg-forest p-8 text-cream shadow-[var(--shadow-soft)] leaf-texture">
            {about.values.map((v, i) => (
              <p key={v} className={`font-display text-xl leading-snug sm:text-2xl ${i === about.values.length - 1 ? "script mt-3 text-3xl text-rose sm:text-4xl" : "text-cream/90"}`}>
                {v}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
