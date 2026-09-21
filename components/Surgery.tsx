"use client";

import { motion } from "motion/react";
import { Icon } from "./Icons";
import LeafArt from "./LeafArt";
import { Magnetic, Reveal, SplitLines, SplitWords, luxe } from "./motion";
import { brand, surgery } from "@/lib/site";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const row = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: luxe } },
};
const dot = {
  hidden: { scale: 0, rotate: -40 },
  show: { scale: 1, rotate: 0, transition: { type: "spring" as const, stiffness: 260, damping: 16 } },
};

function Panel({
  data,
  dark,
}: {
  data: typeof surgery.before;
  dark: boolean;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-[2rem] p-7 sm:p-9 ${
        dark ? "bg-forest text-cream shadow-[var(--shadow-soft)] leaf-texture" : "bg-paper text-forest shadow-[var(--shadow-card)] border border-forest/6"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, ease: luxe }}
    >
      <div className="text-center">
        <h3 className={`font-display text-3xl font-bold uppercase tracking-[0.06em] sm:text-4xl ${dark ? "text-cream" : "text-forest"}`}>
          {data.title}
        </h3>
        <p className={`mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] ${dark ? "text-cream/60" : "text-ink-soft"}`}>{data.sub}</p>
        <span className={`mx-auto mt-5 block h-px w-16 ${dark ? "bg-rose/70" : "bg-rose"}`} />
      </div>
      <motion.ul className="mt-8 space-y-2" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10% 0px" }}>
        {data.items.map((it) => (
          <motion.li
            key={it.text}
            variants={row}
            className={`flex items-center gap-5 rounded-2xl p-3 transition-colors duration-300 ${
              dark ? "hover:bg-cream/5" : "hover:bg-blush-2/70"
            }`}
          >
            <motion.span
              variants={dot}
              className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${dark ? "bg-rose text-forest" : "bg-forest text-cream"}`}
            >
              <Icon name={it.icon} className="h-7 w-7" strokeWidth={1.5} />
            </motion.span>
            <p className={`text-[1.05rem] leading-snug ${dark ? "text-cream/90" : "text-ink"}`}>{it.text}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function Surgery() {
  return (
    <section id="mutet" className="relative scroll-mt-24 overflow-hidden bg-cream-2/60 py-24 lg:py-32" aria-labelledby="surgery-title">
      <LeafArt className="pointer-events-none absolute -left-10 top-10 hidden h-[24rem] text-rose/60 lg:block" />
      <LeafArt className="pointer-events-none absolute -right-10 bottom-10 hidden h-[24rem] text-rose/60 lg:block" flip delay={3} />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <SplitLines
            as="h2"
            className="font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl lg:text-[3.6rem]"
            lines={surgery.title.map((l, i) => (
              <span key={i} id={i === 0 ? "surgery-title" : undefined}>
                {l}
              </span>
            ))}
          />
          <Reveal delay={0.35}>
            <p className="script mt-4 text-3xl text-rose-deep sm:text-4xl">{surgery.script}</p>
          </Reveal>
          <SplitWords text={surgery.intro} className="mt-6 text-lg leading-relaxed text-ink-soft" delay={0.4} />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Panel data={surgery.before} dark />
          <Panel data={surgery.after} dark={false} />
        </div>

        {/* idézet */}
        <div className="relative mx-auto mt-20 max-w-3xl text-center">
          <motion.span
            aria-hidden
            className="absolute -left-2 -top-10 font-display text-8xl leading-none text-rose sm:-left-10"
            initial={{ opacity: 0, scale: 0.4, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: luxe }}
          >
            “
          </motion.span>
          <motion.span
            aria-hidden
            className="absolute -right-2 -top-10 font-display text-8xl leading-none text-rose sm:-right-10"
            initial={{ opacity: 0, scale: 0.4, rotate: 12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: luxe }}
          >
            ”
          </motion.span>
          <SplitLines
            as="p"
            className="font-display text-4xl font-bold italic text-forest sm:text-5xl lg:text-6xl"
            lines={[<span key="q">{surgery.quote}</span>]}
          />
          <Reveal delay={0.3}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{surgery.quoteSub}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 rounded-[2rem] bg-rose/90 p-8 text-center text-forest shadow-[var(--shadow-soft)] sm:flex-row sm:text-left">
          <p className="flex-1 text-[1.02rem] leading-relaxed">{surgery.closing}</p>
          <div className="flex flex-col items-center gap-2">
            <span className="script text-2xl">Kérdezzen bátran!</span>
            <Magnetic>
              <a href={brand.phoneHref} className="btn btn-primary">
                <Icon name="phone" className="h-4 w-4" />
                {brand.phone}
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
