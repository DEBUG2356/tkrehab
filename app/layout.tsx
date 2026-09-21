import type { Metadata, Viewport } from "next";
import { Playfair_Display, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import { brand } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-caveat",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tkrehab.hu"),
  title: {
    default: "TK Rehab Gyógytorna Stúdió · Kecskemét",
    template: "%s · TK Rehab Gyógytorna Stúdió",
  },
  description:
    "Gyógytorna, sportrehabilitáció, fizikoterápia (ultrahang, laser, elektroterápia, nyirokcsizma) és AI alapú 3D mozgáselemzés Kecskeméten. Tóthné Király Enikő gyógytornász BSc, MSc, sportfizioterapeuta.",
  keywords: ["gyógytorna Kecskemét", "gyógytornász", "sportrehabilitáció", "fizikoterápia", "lézerterápia", "ultrahang terápia", "Moti Physio 3D", "TK Rehab"],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: brand.fullName,
    title: "TK Rehab Gyógytorna Stúdió · Kecskemét",
    description: "Mozgás. Egy biztosabb holnapért. Gyógytorna és fizioterápia személyre szabva, Kecskeméten.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: brand.fullName }],
  },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#2e3a2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${playfair.variable} ${caveat.variable} ${dmSans.variable}`}>
      <body>
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
