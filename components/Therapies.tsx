"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Icon } from "./Icons";
import { Reveal, SplitLines, luxe } from "./motion";
import { complaints, therapies, therapyNote } from "@/lib/site";

const icons: Record<string, "wave" | "laser" | "bolt" | "boot"> = {
  ultrahang: "wave",
  laser: "laser",
  elektroterapia: "bolt",
  nyirokcsizma: "boot",
};

const chips = { hidden: {}, show: { transition: { staggerChildren: 0.03 } } };
const chip = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: luxe } },
};
const row = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: luxe } },
};

export default function Therapies() {
  const [active, setActive] = useState(0);
  const t = therapies[active];

  return (
    <section id="fizikoterapia" className="relative scroll-mt-24 py-24 lg:py-32" aria-labelledby="therapies-title">
      <div className="container-x">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Fizikoterápiás kiegészítő kezelések</p>
            </Reveal>
            <SplitLines
              as="h2"
              className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl lg:text-6xl"
              lines={[
                <span key="a" id="therapies-title">
                  A torna hatása
                </span>,
                <span key="b">
                  <span className="italic font-medium text-rose-deep">tovább fokozható.</span>
                </span>,
              ]}
            />
          </div>
          <Reveal className="lg:col-span-5" delay={0.2}>
            <p className="text-lg leading-relaxed text-ink-soft">
              A gyógytorna hatékonysága fizikoterápiás eljárásokkal tovább fokozható – ezekkel a tornával elért eredmények
              maximalizálhatók és tartósabbá tehetők.
            </p>
          </Reveal>
        </div>

        {/* fülek */}
        <Reveal className="mt-12">
          <div role="tablist" aria-label="Fizikoterápiás kezelések" className="flex flex-wrap gap-2 rounded-full bg-paper p-1.5 shadow-[var(--shadow-card)] sm:inline-flex">
            {therapies.map((th, i) => {
              const on = i === active;
              return (
                <button
                  key={th.slug}
                  role="tab"
                  aria-selected={on}
                  aria-controls={`therapy-${th.slug}`}
                  id={`tab-${th.slug}`}
                  onClick={() => setActive(i)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                    on ? "text-cream" : "text-forest/70 hover:text-forest"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="therapy-pill"
                      className="absolute inset-0 rounded-full bg-forest shadow-[0_10px_24px_-10px_rgba(46,58,46,0.7)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon name={icons[th.slug]} className="h-4 w-4" />
                    {th.title}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* tartalom – a FB-kártyák zöld/rózsaszín felosztása */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.slug}
              id={`therapy-${t.slug}`}
              role="tabpanel"
              aria-labelledby={`tab-${t.slug}`}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: luxe }}
              className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]"
            >
              <div className="bg-forest p-7 text-cream leaf-texture sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-4xl font-semibold uppercase tracking-[0.04em] text-cream sm:text-5xl">{t.title}</h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.25em] text-cream/60">{t.sub}</p>
                    <span className="mt-4 block h-1 w-16 rounded-full bg-rose" />
                  </div>
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-rose/50 text-rose">
                    <Icon name={icons[t.slug]} className="h-8 w-8" strokeWidth={1.4} />
                  </span>
                </div>
                <p className="mt-6 max-w-3xl text-[1.02rem] leading-relaxed text-cream/85">{t.description}</p>

                {t.types && (
                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cream/80">{t.typesTitle}</p>
                    <motion.div className="mt-3 flex flex-wrap gap-2" variants={chips} initial="hidden" animate="show">
                      {t.types.map((x) => (
                        <motion.span key={x} variants={chip} className="rounded-md bg-rose px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-forest">
                          {x}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                )}

                <p className="mt-9 font-display text-xl font-semibold text-rose">Indikációk</p>
                <span className="mt-2 block h-px w-12 bg-rose/60" />
                <motion.ul className="mt-3 sm:columns-2 sm:gap-x-10 lg:columns-3" variants={chips} initial="hidden" animate="show">
                  {t.indications.map((x) => (
                    <motion.li
                      key={x}
                      variants={row}
                      className="flex break-inside-avoid items-start gap-3 border-b border-cream/10 py-2.5 text-[0.95rem] leading-snug text-cream/85"
                    >
                      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                      {x}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="bg-rose p-7 text-forest sm:p-10">
                <p className="font-display text-xl font-semibold uppercase tracking-[0.06em]">{t.contraTitle}</p>
                <span className="mt-2 block h-px w-12 bg-forest/40" />
                <motion.ul className="mt-3 sm:columns-2 sm:gap-x-10 lg:columns-3" variants={chips} initial="hidden" animate="show">
                  {t.contraindications.map((x) => (
                    <motion.li
                      key={x}
                      variants={row}
                      className="flex break-inside-avoid items-start gap-3 border-b border-forest/12 py-2.5 text-[0.95rem] leading-snug text-forest/90"
                    >
                      <svg viewBox="0 0 12 12" className="mt-[0.45em] h-2.5 w-2.5 shrink-0 text-forest/70" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                        <path d="M2 2l8 8M10 2l-8 8" />
                      </svg>
                      {x}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* kúra + panaszok */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="panel p-8 lg:col-span-5">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-blush-2 text-rose-deep">
              <Icon name="clock" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{therapyNote.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{therapyNote.text}</p>
            <p className="mt-4 rounded-2xl bg-blush-2 p-4 text-sm font-medium text-forest">{therapyNote.referral}</p>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold">Milyen panaszok esetén ajánlott?</h3>
              <p className="mt-2 text-ink-soft">Lézer-, ultrahang- és elektroterápia – ha az alábbiak bármelyike igaz Önre, hívjon bátran.</p>
            </Reveal>
            <motion.ul
              className="mt-6 sm:columns-2 sm:gap-x-10"
              variants={chips}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              {complaints.map((c) => (
                <motion.li
                  key={c}
                  variants={row}
                  className="group flex break-inside-avoid items-start gap-3 border-b border-forest/10 py-2.5 text-[0.95rem] leading-snug text-forest/90"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blush-2 text-rose-deep transition-colors duration-300 group-hover:bg-rose group-hover:text-forest">
                    <Icon name="check" className="h-3 w-3" strokeWidth={2.6} />
                  </span>
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
