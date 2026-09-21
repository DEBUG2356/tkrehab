// Facebook-képek optimalizálása a public/img alá, és a lib/images.ts generálása.
// Futtatás: node scripts/prep-images.mjs
import sharp from "sharp";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";

const SRC = "source-assets/fb";
const files = readdirSync(SRC);
const byIndex = (i) => {
  const f = files.find((n) => n.startsWith(String(i).padStart(3, "0") + "_"));
  if (!f) throw new Error(`nincs kép #${i}`);
  return `${SRC}/${f}`;
};

mkdirSync("public/img/site", { recursive: true });
mkdirSync("public/img/gallery", { recursive: true });

async function out(src, dest, { width = 1600, quality = 82, extract } = {}) {
  let img = sharp(src).rotate();
  if (extract) img = img.extract(extract);
  img = img.resize({ width, fit: "inside", withoutEnlargement: true });
  const info = await img.jpeg({ quality, mozjpeg: true }).toFile(dest);
  return { w: info.width, h: info.height };
}

// ---- Oldal-képek -------------------------------------------------------
const site = {
  eniko: [26, { width: 900 }],                                                        // Enikő portré (tél)
  tapes: [2, { width: 1200 }],                                                        // kineziotape tekercsek
  device: [12, { width: 1000 }],                                                      // fizikoterápiás készülék
  treatment: [13, { width: 1200 }],                                                   // kezelés az ágyon
  "moti-back": [5, { width: 900, extract: { left: 610, top: 0, width: 470, height: 1080 } }],   // női hát, gerinc
  giftcard: [14, { width: 1000 }],                                                    // ajándékkártya kézben
  "giftcard-mock": [16, { width: 1200 }],                                             // ajándékkártya mockup
  "progress-1": [9, { width: 1200 }],                                                 // térd-rehab 08.06 / 10.06 / 12.06
  "progress-2": [10, { width: 1200 }],
  "laser-result": [18, { width: 1000 }],                                              // sebgyógyulás (érzékeny)
  cover: [19, { width: 1600 }],                                                       // Elérhető kezelések borító
  pricelist: [11, { width: 1000 }],                                                   // Árlista 2026
};
const siteMeta = {};
for (const [name, [idx, opt]] of Object.entries(site)) {
  siteMeta[name] = await out(byIndex(idx), `public/img/site/${name}.jpg`, opt);
}
// A hero stúdiófotó Pythonnal készült (plakát-kivágás), csak a méretét olvassuk ki.
{
  const m = await sharp("public/img/site/studio.jpg").metadata();
  siteMeta.studio = { w: m.width, h: m.height };
}

// ---- Galéria ------------------------------------------------------------
// [index, kategória, felirat]
const gallery = [
  [2, "studio", "Kineziotape – mindenféle új szín"],
  [13, "studio", "Fizikoterápiás kezelés a stúdióban"],
  [12, "studio", "Kombinált fizikoterápiás készülék"],
  [9, "rehab", "Térd-rehabilitáció – 08.06 · 10.06 · 12.06"],
  [10, "rehab", "Térd-rehabilitáció – a mozgástartomány visszatér"],
  [14, "gift", "Ajándékkártya – egészséget ajándékozz"],
  [16, "gift", "TK Rehab ajándékkártya, 10 000 Ft"],
  [3, "moti", "Indulj el a változás felé"],
  [4, "moti", "Moti Physio 3D – AI alapú tartás- és mozgáselemzés"],
  [6, "moti", "Modern 3D technológia, érthető eredmények"],
  [7, "moti", "A vizsgálat menete"],
  [8, "moti", "Mit tartalmaz a vizsgálat?"],
  [5, "moti", "Kinek ajánljuk?"],
  [19, "brand", "Elérhető kezelések"],
  [11, "brand", "Árlista – 2026. január 5-től"],
  [20, "therapy", "Ultrahang terápia – indikációk"],
  [21, "therapy", "Nyirokcsizma kezelés – alkalmazása"],
  [22, "therapy", "Laser terápia – indikációk"],
  [23, "therapy", "Elektroterápia – indikációk"],
  [26, "studio", "Tóthné Király Enikő"],
];
const galleryMeta = [];
for (const [idx, cat, caption] of gallery) {
  const name = `g${String(idx).padStart(3, "0")}`;
  const size = await out(byIndex(idx), `public/img/gallery/${name}.jpg`, { width: 1400, quality: 80 });
  galleryMeta.push({ src: `/img/gallery/${name}.jpg`, ...size, cat, caption, fb: idx });
}

const ts = `// GENERÁLT FÁJL – node scripts/prep-images.mjs
export type Img = { src: string; w: number; h: number };
export const site = ${JSON.stringify(
  Object.fromEntries(Object.entries(siteMeta).map(([k, v]) => [k, { src: `/img/site/${k}.jpg`, ...v }])),
  null,
  2,
)} as const satisfies Record<string, Img>;

export type GalleryCat = "studio" | "rehab" | "gift" | "moti" | "brand" | "therapy";
export type GalleryImg = Img & { cat: GalleryCat; caption: string; fb: number };
export const gallery: GalleryImg[] = ${JSON.stringify(galleryMeta, null, 2)};
`;
writeFileSync("lib/images.ts", ts);
console.log("kész:", Object.keys(siteMeta).length, "oldal-kép,", galleryMeta.length, "galéria-kép");
