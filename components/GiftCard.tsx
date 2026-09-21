"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Icon } from "./Icons";
import { Magnetic, Reveal, SplitLines, TiltCard, luxe } from "./motion";
import { brand, giftCard } from "@/lib/site";
import { site } from "@/lib/images";

export default function GiftCard() {
  return (
    <section id="ajandekkartya" className="relative scroll-mt-24 overflow-hidden bg-blush-2 py-24 lg:py-32" aria-labelledby="gift-title">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-rose/30 blur-3xl" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">Ajándékkártya</p>
          </Reveal>
          <SplitLines
            as="h2"
            className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl"
            lines={[
              <span key="a" id="gift-title">
                Ajándékozzon mozgást,
              </span>,
              <span key="b">
                egészséget és <span className="italic font-medium text-rose-deep">feltöltődést!</span>
              </span>,
            ]}
          />
          <Reveal delay={0.25}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{giftCard.text}</p>
          </Reveal>
          <ul className="mt-7 space-y-3">
            {giftCard.points.map((p, i) => (
              <Reveal as="li" key={p} delay={0.3 + i * 0.08} className="flex items-start gap-3 text-forest">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-rose text-forest">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
                {p}
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.5} className="mt-9 flex flex-wrap gap-3">
            <Magnetic>
              <a href={brand.messenger} target="_blank" rel="noopener" className="btn btn-primary">
                <Icon name="gift" className="h-4 w-4" />
                Ajándékkártyát kérek
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={brand.phoneHref} className="btn btn-ghost">
                <Icon name="phone" className="h-4 w-4" />
                {brand.phone}
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto w-[min(100%,30rem)]">
            <TiltCard className="group" max={9}>
              <motion.div
                className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]"
                initial={{ opacity: 0, y: 40, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.1, ease: luxe }}
              >
                <Image src={site["giftcard-mock"].src} alt="TK Rehab ajándékkártya" width={site["giftcard-mock"].w} height={site["giftcard-mock"].h} sizes="(min-width: 1024px) 40vw, 90vw" className="w-full" />
              </motion.div>
            </TiltCard>
            <motion.div
              className="absolute -bottom-8 left-0 w-40 overflow-hidden rounded-[1.5rem] border-4 border-blush-2 shadow-[var(--shadow-soft)] sm:-left-10 sm:w-52"
              initial={{ opacity: 0, y: 30, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: luxe }}
              whileHover={{ rotate: 0, scale: 1.04 }}
            >
              <Image src={site.giftcard.src} alt="Ajándékkártyák kézben" width={site.giftcard.w} height={site.giftcard.h} sizes="13rem" className="aspect-[3/4] w-full object-cover" />
            </motion.div>
            <motion.div
              className="brush-circle absolute right-0 -top-6 grid h-24 w-24 place-items-center text-center text-cream sm:-right-8 sm:h-28 sm:w-28"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: luxe }}
            >
              <p className="script text-lg leading-tight sm:text-xl">
                választható
                <br />
                értékben
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
