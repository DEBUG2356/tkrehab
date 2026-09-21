"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon, type IconName } from "./Icons";
import { Reveal, SplitLines, luxe } from "./motion";
import { services } from "@/lib/site";
import { site } from "@/lib/images";

const by = (slug: string) => services.find((s) => s.slug === slug)!;
const physio = ["elektroterapia", "ultrahang", "laser", "nyirokcsizma"] as const;

const hoverImg =
  "object-cover transition-transform duration-[1.4s] [transition-timing-function:var(--ease-luxe)] group-hover:scale-105";

const arrow = (
  <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 [transition-timing-function:var(--ease-luxe)] group-hover:translate-x-1.5" />
);

// „Bento" elrendezés: a fő szolgáltatás nagy zöld panelben fotóval, a fizikoterápia egy csoport-panelben,
// a kineziotape képkártyán, a Moti Physio 3D kiemelt sötét panelben.
export default function Services() {
  const gyogy = by("gyogytorna");
  const sport = by("sportrehabilitacio");
  const tape = by("kineziotape");
  const bemer = by("bemer");
  const moti = by("moti");

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

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* 01 Gyógytorna – nagy zöld panel, boltíves fotóval */}
          <Reveal className="lg:col-span-7">
            <Link
              href="/#arlista"
              className="group relative flex h-full min-h-[24rem] overflow-hidden rounded-[2rem] bg-forest text-cream shadow-[var(--shadow-soft)] leaf-texture"
            >
              <div className="relative z-10 flex flex-1 flex-col justify-between p-7 sm:p-9">
                <div>
                  <span className="script text-2xl text-rose">01</span>
                  <h3 className="mt-1 font-display text-3xl font-bold text-cream sm:text-4xl">{gyogy.title}</h3>
                  <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-cream/75">{gyogy.short}</p>
                </div>
                <div className="mt-8">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream/55">
                    Állapotfelmérés · Egyéni gyógytorna · McKenzie · Sportfizioterápia
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose">
                    Árak és időtartamok {arrow}
                  </span>
                </div>
              </div>
              <div className="relative hidden w-[42%] shrink-0 sm:block">
                <div className="arch absolute inset-y-6 right-6 left-0 overflow-hidden">
                  <Image src={site.treatment.src} alt="Gyógytorna a stúdióban" fill sizes="30vw" className={`${hoverImg} object-[50%_35%]`} />
                </div>
                <motion.span
                  aria-hidden
                  className="absolute bottom-5 right-10 grid h-16 w-16 place-items-center rounded-full bg-rose text-forest shadow-[var(--shadow-soft)]"
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.4 }}
                >
                  <Icon name="body" className="h-8 w-8" strokeWidth={1.5} />
                </motion.span>
              </div>
            </Link>
          </Reveal>

          {/* 02 Sportrehabilitáció – fotó fent, szöveg lent */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <Link href="/#panaszok" className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-forest/6 bg-paper shadow-[var(--shadow-card)]">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={site["progress-1"].src} alt="Térd-rehabilitáció lépésről lépésre" fill sizes="(min-width: 1024px) 34vw, 90vw" className={`${hoverImg} object-[50%_62%]`} />
                <span className="absolute left-4 top-4 rounded-full bg-forest/75 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur">
                  rehabilitáció
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-semibold text-forest">{sport.title}</h3>
                  <span className="script text-2xl text-rose-deep/70">02</span>
                </div>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{sport.short}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-forest">Kinek segít? {arrow}</span>
              </div>
            </Link>
          </Reveal>

          {/* 03 Fizikoterápiás kezelések – csoport-panel négy tétellel */}
          <Reveal delay={0.05} className="lg:col-span-8">
            <div className="flex h-full flex-col rounded-[2rem] border border-forest/6 bg-paper p-7 shadow-[var(--shadow-card)] sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="script text-2xl text-rose-deep/70">03</span>
                  <h3 className="font-display text-2xl font-semibold text-forest sm:text-3xl">Fizikoterápiás kezelések</h3>
                  <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                    A gyógytorna hatását fokozzák, kúraszerűen a leghatékonyabbak – 20 perces kezelések, kettő egy alkalommal is kérhető.
                  </p>
                </div>
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl">
                  <Image src={site.device.src} alt="Fizikoterápiás készülék" fill sizes="7rem" className="object-cover" />
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {physio.map((slug, i) => {
                  const s = by(slug);
                  return (
                    <motion.li
                      key={slug}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: luxe }}
                    >
                      <Link
                        href="/#fizikoterapia"
                        className="group flex h-full flex-col rounded-2xl bg-cream-2/70 p-4 transition-colors duration-300 hover:bg-blush-2"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-paper text-rose-deep transition-transform duration-700 [transition-timing-function:var(--ease-luxe)] group-hover:-rotate-6 group-hover:scale-110">
                          <Icon name={s.icon as IconName} className="h-5 w-5" />
                        </span>
                        <span className="mt-3 font-display text-lg font-semibold leading-tight text-forest">{s.title}</span>
                        <span className="mt-1.5 text-[0.82rem] leading-snug text-ink-soft">{s.short}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <Link href="/#fizikoterapia" className="group mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-forest">
                Indikációk és kontraindikációk {arrow}
              </Link>
            </div>
          </Reveal>

          {/* 04 Kineziotape – képkártya */}
          <Reveal delay={0.15} className="lg:col-span-4">
            <Link href="/#arlista" className="group relative block h-full min-h-[18rem] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <Image src={site.tapes.src} alt="Kineziotape tekercsek" fill sizes="(min-width: 1024px) 28vw, 90vw" className={hoverImg} />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                <span className="script text-2xl text-rose">04</span>
                <h3 className="font-display text-2xl font-semibold text-cream">{tape.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-cream/80">{tape.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rose">6 000 Ft / testtáj {arrow}</span>
              </div>
            </Link>
          </Reveal>

          {/* 05 Bemer – pulzáló gyűrűk */}
          <Reveal delay={0.05} className="lg:col-span-4">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-blush-2 p-7 shadow-[var(--shadow-card)]">
              <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-44 w-44">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute inset-0 rounded-full border border-rose-deep/40"
                    animate={{ scale: [0.4, 1], opacity: [0.7, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.05, ease: "easeOut" }}
                  />
                ))}
              </div>
              <span className="script text-2xl text-rose-deep/70">05</span>
              <h3 className="font-display text-2xl font-semibold text-forest">{bemer.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{bemer.short}</p>
              <p className="mt-auto pt-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-rose-deep">Fizikai érterápia · mikrokeringés</p>
            </div>
          </Reveal>

          {/* 06 Moti Physio 3D – kiemelt sötét panel */}
          <Reveal delay={0.1} className="lg:col-span-8">
            <Link
              href="/#moti"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-forest p-7 text-cream shadow-[var(--shadow-soft)] sm:flex-row sm:items-end sm:p-9"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(201,160,145,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,145,0.35) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                  maskImage: "radial-gradient(circle at 85% 50%, #000, transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-rose px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-forest">Új</span>
                  <span className="script text-2xl text-rose">06</span>
                </div>
                <h3 className="mt-2 font-display text-3xl font-bold text-cream sm:text-4xl">{moti.title}</h3>
                <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-cream/75">{moti.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-rose">Így zajlik a vizsgálat {arrow}</span>
              </div>
              <div className="relative mt-6 flex items-center gap-4 sm:mt-0 sm:flex-col sm:items-end">
                <motion.span
                  className="grid h-16 w-16 place-items-center rounded-full border border-rose/60 text-rose"
                  animate={{ rotate: [0, 6, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon name="scan" className="h-8 w-8" strokeWidth={1.4} />
                </motion.span>
                <p className="font-display text-2xl font-bold text-cream sm:text-right">
                  35 000 Ft
                  <span className="block text-xs font-medium tracking-wide text-cream/55">kontrollal együtt</span>
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
