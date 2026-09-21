"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Icon } from "./Icons";
import LeafArt from "./LeafArt";
import { Magnetic, SplitLines, luxe } from "./motion";
import { brand, heroChips } from "@/lib/site";
import { site } from "@/lib/images";

const CIRCLE_ID = "hero-circle";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const stickerY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 lg:pt-32" aria-labelledby="hero-title">
      {/* háttér-fények */}
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-blush/70 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-[60%] h-[30rem] w-[30rem] rounded-full bg-sage-light/40 blur-3xl" />

      {/* levél-vonalrajzok a sarkokban */}
      <LeafArt className="pointer-events-none absolute -left-8 bottom-0 hidden h-[22rem] text-rose/70 md:block" />
      <LeafArt className="pointer-events-none absolute -right-6 top-6 hidden h-[16rem] text-rose/50 lg:block" flip delay={2} />

      <div className="container-x relative grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Szöveg */}
        <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 lg:col-span-7">
          <motion.p
            className="script text-2xl text-rose-deep sm:text-3xl"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: luxe }}
          >
            Gyógytorna stúdió · Kecskemét
          </motion.p>

          <SplitLines
            as="h1"
            delay={0.45}
            className="mt-3 font-display text-[2.7rem] font-bold leading-[1.02] text-forest sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]"
            lines={[
              <span key="a">Mozgás.</span>,
              <span key="b">
                Egy <span className="italic font-medium text-rose-deep">biztosabb</span>
              </span>,
              <span key="c">holnapért.</span>,
            ]}
          />
          <span id="hero-title" className="sr-only">
            {brand.tagline}
          </span>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: luxe }}
          >
            Gyógytorna, sportrehabilitáció, fizikoterápia és AI alapú 3D mozgáselemzés – személyre szabva, egy
            helyen. <strong className="font-semibold text-forest">Tóthné Király Enikő</strong>, gyógytornász BSc &amp;
            MSc, sportfizioterapeuta.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: luxe }}
          >
            <Magnetic>
              <a href={brand.phoneHref} className="btn btn-primary">
                <Icon name="phone" className="h-4 w-4" />
                Időpontot kérek
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="/#kezelesek" className="btn btn-ghost">
                Kezelések
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Magnetic>
          </motion.div>

          {/* a plakát alsó „chip"-sora */}
          <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4" aria-label="Amit a konzultáció ad">
            {heroChips.map((c, i) => (
              <motion.li
                key={c.label}
                className="flex items-center gap-2.5 rounded-2xl border border-forest/8 bg-paper/70 p-2.5 pr-3 backdrop-blur-sm"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.25 + i * 0.08, ease: luxe }}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rose text-forest">
                  <Icon name={c.icon} className="h-4.5 w-4.5" />
                </span>
                <span className="text-[0.78rem] font-medium leading-tight text-forest">{c.label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Kép */}
        <div className="relative lg:col-span-5">
          <motion.figure
            className="relative mx-auto w-[min(100%,26rem)] lg:ml-auto lg:w-full"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.5, ease: luxe }}
          >
            {/* boltív a plakátról */}
            <div className="arch relative aspect-[3/4] overflow-hidden shadow-[var(--shadow-soft)]">
              <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.18] origin-top">
                <Image
                  src={site.studio.src}
                  alt="A TK Rehab stúdió recepciója – Mozgás. Egy biztosabb holnapért."
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent" />
            </div>

            {/* rózsaszín ecsetmatrica */}
            <motion.div
              style={{ y: stickerY }}
              className="absolute -left-2 top-[18%] w-[9.5rem] sm:-left-10 sm:w-[11.5rem] lg:-left-14"
              initial={{ opacity: 0, scale: 0.6, rotate: -18 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ duration: 1.1, delay: 1.2, ease: luxe }}
            >
              <motion.div
                className="brush-circle flex aspect-square flex-col items-center justify-center p-5 text-center text-cream"
                animate={{ rotate: [-2, 2, -2], y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon name="heart" className="h-5 w-5 opacity-80" />
                <p className="script mt-1 text-[1.15rem] leading-[1.05] sm:text-[1.35rem]">
                  Tudatos felkészülés, nyugodtabb műtét, biztosabb felépülés.
                </p>
              </motion.div>
            </motion.div>

            {/* forgó körfelirat a TK-monogrammal */}
            <motion.div
              className="absolute -bottom-8 right-0 h-32 w-32 sm:-right-8 sm:h-40 sm:w-40"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4, ease: luxe }}
            >
              <div className="absolute inset-0 rounded-full bg-paper shadow-[var(--shadow-card)]" />
              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                aria-hidden
              >
                <defs>
                  <path id={CIRCLE_ID} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text className="fill-forest font-sans text-[8.2px] font-semibold uppercase tracking-[0.22em]">
                  <textPath href={`#${CIRCLE_ID}`} startOffset="0">
                    Gyógytorna stúdió · Tóthné Király Enikő ·
                  </textPath>
                </text>
              </motion.svg>
              <Image
                src="/img/site/logo-mark-dark.png"
                alt=""
                width={1343}
                height={1010}
                className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
          </motion.figure>
        </div>
      </div>

      {/* görgess-jelzés */}
      <motion.div
        aria-hidden
        className="container-x mb-6 hidden items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-ink-soft lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="relative h-10 w-px overflow-hidden bg-forest/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-rose-deep"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        Görgessen
      </motion.div>
    </section>
  );
}
