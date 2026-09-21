"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "./Icons";
import { Reveal, SplitLines, TiltCard, luxe } from "./motion";
import { services } from "@/lib/site";

const grid = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const card = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: luxe } },
};

export default function Services() {
  return (
    <section id="kezelesek" className="relative scroll-mt-24 py-24 lg:py-32" aria-labelledby="services-title">
      <div className="container-x">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Elérhető kezelések</p>
            </Reveal>
            <SplitLines
              as="h2"
              className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl lg:text-6xl"
              lines={[
                <span key="a" id="services-title">
                  Egy helyen minden,
                </span>,
                <span key="b">
                  ami a <span className="italic font-medium text-rose-deep">felépüléshez</span> kell.
                </span>,
              ]}
            />
          </div>
          <Reveal className="lg:col-span-5" delay={0.2}>
            <p className="text-lg leading-relaxed text-ink-soft">
              Gyógytorna és fizikoterápia kombinációja, komplex szemlélettel. Minden kezelés állapotfelméréssel indul –
              beutalóval és anélkül is.
            </p>
          </Reveal>
        </div>

        <motion.ul
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {services.map((s, i) => (
            <motion.li key={s.slug} variants={card} className="group">
              <TiltCard className="h-full">
                <Link
                  href={s.slug === "moti" ? "/#moti" : ["ultrahang", "laser", "elektroterapia", "nyirokcsizma"].includes(s.slug) ? `/#fizikoterapia` : "/#arlista"}
                  className={`shine relative flex h-full flex-col rounded-[1.75rem] border p-6 transition-shadow duration-500 sm:p-7 ${
                    s.accent
                      ? "border-transparent bg-forest text-cream shadow-[var(--shadow-soft)] leaf-texture"
                      : "border-forest/6 bg-paper shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-full transition-transform duration-700 [transition-timing-function:var(--ease-luxe)] group-hover:-rotate-6 group-hover:scale-110 ${
                        s.accent ? "bg-rose text-forest" : "bg-blush-2 text-rose-deep group-hover:bg-rose group-hover:text-forest"
                      }`}
                    >
                      <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.5} />
                    </span>
                    <span className={`script text-xl ${s.accent ? "text-rose" : "text-rose-deep/70"}`}>0{i + 1}</span>
                  </div>
                  <h3 className={`mt-6 font-display text-2xl font-semibold ${s.accent ? "text-cream" : "text-forest"}`}>{s.title}</h3>
                  <p className={`mt-2.5 text-[0.95rem] leading-relaxed ${s.accent ? "text-cream/75" : "text-ink-soft"}`}>{s.short}</p>
                  <span
                    className={`mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold ${
                      s.accent ? "text-rose" : "text-forest"
                    }`}
                  >
                    {s.accent ? "Új szolgáltatás" : "Részletek"}
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform duration-500 [transition-timing-function:var(--ease-luxe)] group-hover:translate-x-1.5"
                    />
                  </span>
                </Link>
              </TiltCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
