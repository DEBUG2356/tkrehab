import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { Reveal, SplitLines } from "@/components/motion";
import { gallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Galéria",
  description: "Képek a TK Rehab Gyógytorna Stúdióból: kezelések, rehabilitáció, Moti Physio 3D, ajándékkártya.",
};

export default function GaleriaPage() {
  return (
    <>
      <Header />
      <main className="pt-32 lg:pt-40">
        <section className="container-x pb-24">
          <Reveal>
            <p className="eyebrow">Galéria · {gallery.length} kép</p>
          </Reveal>
          <SplitLines
            as="h1"
            className="mt-3 font-display text-4xl font-bold leading-[1.05] text-forest sm:text-6xl"
            lines={[
              <span key="a">Pillanatok</span>,
              <span key="b">
                a <span className="italic font-medium text-rose-deep">stúdióból.</span>
              </span>,
            ]}
          />
          {/* Nincs Reveal-burkoló: a transform/filter megtörné a nagyító position:fixed rétegét. */}
          <div className="mt-10">
            <Suspense fallback={null}>
              <GalleryGrid />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
