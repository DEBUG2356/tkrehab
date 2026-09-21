"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Icon } from "./Icons";
import { luxe } from "./motion";
import { gallery, type GalleryCat } from "@/lib/images";

const cats: { key: GalleryCat | "all"; label: string }[] = [
  { key: "all", label: "Összes" },
  { key: "studio", label: "Stúdió" },
  { key: "rehab", label: "Rehabilitáció" },
  { key: "moti", label: "Moti Physio 3D" },
  { key: "therapy", label: "Fizikoterápia" },
  { key: "gift", label: "Ajándékkártya" },
  { key: "brand", label: "Árlista & kezelések" },
];

export default function GalleryGrid() {
  const [cat, setCat] = useState<GalleryCat | "all">("all");
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const openFb = params.get("kep");
  const items = useMemo(() => (cat === "all" ? gallery : gallery.filter((g) => g.cat === cat)), [cat]);
  const idx = openFb ? items.findIndex((g) => String(g.fb) === openFb) : -1;
  const current = idx >= 0 ? items[idx] : openFb ? gallery.find((g) => String(g.fb) === openFb) : undefined;

  const setOpen = useCallback(
    (fb: number | null) => {
      router.replace(fb === null ? pathname : `${pathname}?kep=${fb}`, { scroll: false });
    },
    [router, pathname],
  );
  const step = useCallback(
    (d: number) => {
      if (idx < 0) return;
      const n = (idx + d + items.length) % items.length;
      setOpen(items[n].fb);
    },
    [idx, items, setOpen],
  );

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.classList.add("lenis-stopped");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [current, setOpen, step]);

  return (
    <>
      <div role="tablist" aria-label="Galéria-kategóriák" className="flex flex-wrap gap-2">
        {cats.map((c) => {
          const on = c.key === cat;
          return (
            <button
              key={c.key}
              role="tab"
              aria-selected={on}
              onClick={() => setCat(c.key)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${on ? "text-cream" : "text-forest/70 hover:text-forest"}`}
            >
              {on && <motion.span layoutId="gal-pill" className="absolute inset-0 rounded-full bg-forest" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className="relative z-10">{c.label}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
        <AnimatePresence mode="popLayout">
          {items.map((g, i) => (
            <motion.button
              layout
              key={g.src}
              type="button"
              onClick={() => setOpen(g.fb)}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.03, 0.4), ease: luxe }}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.25rem] bg-paper shadow-[var(--shadow-card)] text-left"
              aria-label={g.caption}
            >
              <Image
                src={g.src}
                alt={g.caption}
                width={g.w}
                height={g.h}
                sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 48vw"
                className="w-full transition-transform duration-[1.3s] [transition-timing-function:var(--ease-luxe)] group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-forest/75 to-transparent p-3 pt-8 text-xs text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.caption}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {current && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[95] flex items-center justify-center bg-forest/92 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal
            aria-label={current.caption}
          >
            <motion.figure
              key={current.src}
              className="relative w-full max-w-[min(92vw,70rem)]"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: luxe }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.caption}
                width={current.w}
                height={current.h}
                sizes="92vw"
                priority
                className="mx-auto h-auto max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
              />
              <figcaption className="mt-3 px-10 text-center text-sm text-cream/85">{current.caption}</figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
              aria-label="Bezárás"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
            {idx >= 0 && items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:left-6"
                  aria-label="Előző kép"
                >
                  <Icon name="arrow" className="h-5 w-5 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:right-6"
                  aria-label="Következő kép"
                >
                  <Icon name="arrow" className="h-5 w-5" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
