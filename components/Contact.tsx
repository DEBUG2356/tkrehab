"use client";

import { motion } from "motion/react";
import { Icon } from "./Icons";
import LeafArt from "./LeafArt";
import { Magnetic, Reveal, SplitLines, luxe } from "./motion";
import { brand } from "@/lib/site";

const rows = [
  { icon: "phone", label: "Telefon", value: brand.phone, href: brand.phoneHref },
  { icon: "pin", label: "Cím", value: brand.address, href: brand.mapLink },
  { icon: "mail", label: "E-mail", value: brand.email, href: `mailto:${brand.email}` },
  { icon: "person", label: "Gyógytornász", value: brand.owner },
] as const;

export default function Contact() {
  return (
    <section id="kapcsolat" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32" aria-labelledby="contact-title">
      <LeafArt className="pointer-events-none absolute -left-10 bottom-0 hidden h-[22rem] text-rose/60 lg:block" delay={1} />
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Kapcsolat</p>
          </Reveal>
          <SplitLines
            as="h2"
            className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-5xl"
            lines={[
              <span key="a" id="contact-title">
                Ne maradjon egyedül
              </span>,
              <span key="b">
                a <span className="italic font-medium text-rose-deep">kérdéseivel.</span>
              </span>,
            ]}
          />
          <Reveal delay={0.25}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Hívjon, írjon, vagy üzenjen Messengeren – időpontot egyeztetünk, és az első alkalommal állapotfelméréssel
              indulunk. Beutaló nem szükséges.
            </p>
          </Reveal>

          {/* rózsaszín kapcsolat-kártya a plakátról */}
          <Reveal delay={0.3} className="mt-9 rounded-[2rem] bg-rose p-7 text-forest shadow-[var(--shadow-soft)] sm:p-8">
            <ul className="space-y-4">
              {rows.map((r, i) => (
                <motion.li
                  key={r.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: luxe }}
                  className="flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper/60 text-forest">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest/60">{r.label}</p>
                    {"href" in r && r.href ? (
                      <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="font-semibold underline-offset-4 hover:underline">
                        {r.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{r.value}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="mt-7 border-t border-forest/15 pt-6 text-center">
              <p className="font-display text-xl font-bold uppercase tracking-[0.12em]">TK Rehab</p>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-forest/60">Gyógytorna Stúdió</p>
              <p className="script mt-4 text-3xl">Kérdezzen bátran! ♡</p>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="mt-6 flex flex-wrap gap-3">
            <Magnetic>
              <a href={brand.phoneHref} className="btn btn-primary">
                <Icon name="phone" className="h-4 w-4" />
                Hívás
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={brand.messenger} target="_blank" rel="noopener" className="btn btn-ghost">
                <Icon name="chat" className="h-4 w-4" />
                Messenger
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={brand.facebook} target="_blank" rel="noopener" className="btn btn-ghost">
                <Icon name="facebook" className="h-4 w-4" />
                Facebook
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-7">
          <div className="relative h-[26rem] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)] lg:h-full lg:min-h-[36rem]">
            <iframe
              title="TK Rehab a térképen – Kecskemét, Losonczy utca 7."
              src={brand.mapEmbed}
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.3] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={brand.mapLink}
              target="_blank"
              rel="noopener"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-sm font-semibold text-forest shadow-[var(--shadow-card)] backdrop-blur"
            >
              <Icon name="pin" className="h-4 w-4 text-rose-deep" />
              Útvonaltervezés
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
