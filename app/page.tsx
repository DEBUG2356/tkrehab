import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Surgery from "@/components/Surgery";
import Moti from "@/components/Moti";
import Therapies from "@/components/Therapies";
import Problems from "@/components/Problems";
import About from "@/components/About";
import Prices from "@/components/Prices";
import GiftCard from "@/components/GiftCard";
import Results from "@/components/Results";
import GalleryPreview from "@/components/GalleryPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Surgery />
        <Moti />
        <Therapies />
        <Problems />
        <About />
        <Prices />
        <GiftCard />
        <Results />
        <GalleryPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
