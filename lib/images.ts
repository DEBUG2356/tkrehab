// GENERÁLT FÁJL – node scripts/prep-images.mjs
export type Img = { src: string; w: number; h: number };
export const site = {
  "eniko": {
    "src": "/img/site/eniko.jpg",
    "w": 720,
    "h": 960
  },
  "tapes": {
    "src": "/img/site/tapes.jpg",
    "w": 1200,
    "h": 1600
  },
  "device": {
    "src": "/img/site/device.jpg",
    "w": 1000,
    "h": 833
  },
  "treatment": {
    "src": "/img/site/treatment.jpg",
    "w": 1200,
    "h": 1600
  },
  "moti-back": {
    "src": "/img/site/moti-back.jpg",
    "w": 470,
    "h": 1080
  },
  "giftcard": {
    "src": "/img/site/giftcard.jpg",
    "w": 1000,
    "h": 1333
  },
  "giftcard-mock": {
    "src": "/img/site/giftcard-mock.jpg",
    "w": 1200,
    "h": 1194
  },
  "progress-1": {
    "src": "/img/site/progress-1.jpg",
    "w": 1200,
    "h": 960
  },
  "progress-2": {
    "src": "/img/site/progress-2.jpg",
    "w": 1200,
    "h": 960
  },
  "laser-result": {
    "src": "/img/site/laser-result.jpg",
    "w": 1000,
    "h": 1000
  },
  "cover": {
    "src": "/img/site/cover.jpg",
    "w": 1600,
    "h": 838
  },
  "pricelist": {
    "src": "/img/site/pricelist.jpg",
    "w": 1000,
    "h": 1402
  },
  "studio": {
    "src": "/img/site/studio.jpg",
    "w": 704,
    "h": 944
  }
} as const satisfies Record<string, Img>;

export type GalleryCat = "studio" | "rehab" | "gift" | "moti" | "brand" | "therapy";
export type GalleryImg = Img & { cat: GalleryCat; caption: string; fb: number };
export const gallery: GalleryImg[] = [
  {
    "src": "/img/gallery/g002.jpg",
    "w": 1400,
    "h": 1867,
    "cat": "studio",
    "caption": "Kineziotape – mindenféle új szín",
    "fb": 2
  },
  {
    "src": "/img/gallery/g013.jpg",
    "w": 1400,
    "h": 1867,
    "cat": "studio",
    "caption": "Fizikoterápiás kezelés a stúdióban",
    "fb": 13
  },
  {
    "src": "/img/gallery/g012.jpg",
    "w": 1003,
    "h": 835,
    "cat": "studio",
    "caption": "Kombinált fizikoterápiás készülék",
    "fb": 12
  },
  {
    "src": "/img/gallery/g009.jpg",
    "w": 1350,
    "h": 1080,
    "cat": "rehab",
    "caption": "Térd-rehabilitáció – 08.06 · 10.06 · 12.06",
    "fb": 9
  },
  {
    "src": "/img/gallery/g010.jpg",
    "w": 1350,
    "h": 1080,
    "cat": "rehab",
    "caption": "Térd-rehabilitáció – a mozgástartomány visszatér",
    "fb": 10
  },
  {
    "src": "/img/gallery/g014.jpg",
    "w": 1400,
    "h": 1867,
    "cat": "gift",
    "caption": "Ajándékkártya – egészséget ajándékozz",
    "fb": 14
  },
  {
    "src": "/img/gallery/g016.jpg",
    "w": 1400,
    "h": 1392,
    "cat": "gift",
    "caption": "TK Rehab ajándékkártya, 10 000 Ft",
    "fb": 16
  },
  {
    "src": "/img/gallery/g003.jpg",
    "w": 1080,
    "h": 1080,
    "cat": "moti",
    "caption": "Indulj el a változás felé",
    "fb": 3
  },
  {
    "src": "/img/gallery/g004.jpg",
    "w": 1080,
    "h": 1080,
    "cat": "moti",
    "caption": "Moti Physio 3D – AI alapú tartás- és mozgáselemzés",
    "fb": 4
  },
  {
    "src": "/img/gallery/g006.jpg",
    "w": 1080,
    "h": 1080,
    "cat": "moti",
    "caption": "Modern 3D technológia, érthető eredmények",
    "fb": 6
  },
  {
    "src": "/img/gallery/g007.jpg",
    "w": 1080,
    "h": 1080,
    "cat": "moti",
    "caption": "A vizsgálat menete",
    "fb": 7
  },
  {
    "src": "/img/gallery/g008.jpg",
    "w": 1080,
    "h": 1080,
    "cat": "moti",
    "caption": "Mit tartalmaz a vizsgálat?",
    "fb": 8
  },
  {
    "src": "/img/gallery/g005.jpg",
    "w": 1080,
    "h": 1080,
    "cat": "moti",
    "caption": "Kinek ajánljuk?",
    "fb": 5
  },
  {
    "src": "/img/gallery/g019.jpg",
    "w": 1400,
    "h": 733,
    "cat": "brand",
    "caption": "Elérhető kezelések",
    "fb": 19
  },
  {
    "src": "/img/gallery/g011.jpg",
    "w": 1150,
    "h": 1612,
    "cat": "brand",
    "caption": "Árlista – 2026. január 5-től",
    "fb": 11
  },
  {
    "src": "/img/gallery/g020.jpg",
    "w": 1048,
    "h": 1013,
    "cat": "therapy",
    "caption": "Ultrahang terápia – indikációk",
    "fb": 20
  },
  {
    "src": "/img/gallery/g021.jpg",
    "w": 1051,
    "h": 1037,
    "cat": "therapy",
    "caption": "Nyirokcsizma kezelés – alkalmazása",
    "fb": 21
  },
  {
    "src": "/img/gallery/g022.jpg",
    "w": 1034,
    "h": 1044,
    "cat": "therapy",
    "caption": "Laser terápia – indikációk",
    "fb": 22
  },
  {
    "src": "/img/gallery/g023.jpg",
    "w": 1042,
    "h": 1032,
    "cat": "therapy",
    "caption": "Elektroterápia – indikációk",
    "fb": 23
  },
  {
    "src": "/img/gallery/g026.jpg",
    "w": 720,
    "h": 960,
    "cat": "studio",
    "caption": "Tóthné Király Enikő",
    "fb": 26
  }
];
