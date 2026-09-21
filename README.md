# TK Rehab Gyógytorna Stúdió – weboldal

Tóthné Király Enikő kecskeméti gyógytorna-stúdiójának bemutatkozó oldala. Next.js 16 (App Router) + React 19 +
Tailwind CSS v4 + Motion 13 + Lenis. A tartalom a Facebook-oldal posztjaiból és a „Műtét előtt és után" plakátból
készült – a források és az egyeztetendő adatok a `CEGADATOK.md`-ben.

## Fejlesztés

```bash
npm install
npm run dev      # http://localhost:3232
npm run build
```

## Szerkezet

- `lib/site.ts` – minden szöveges tartalom (elérhetőségek, szolgáltatások, árlista, Moti Physio, terápiák, rólam…)
- `lib/images.ts` – **generált** képjegyzék (`node scripts/prep-images.mjs`)
- `components/` – szekciók (`Hero`, `Services`, `Surgery`, `Moti`, `Therapies`, `Problems`, `About`, `Prices`,
  `GiftCard`, `Results`, `GalleryPreview`, `Contact`) és segédek (`motion.tsx`: Reveal, SplitLines, SplitWords,
  Magnetic, TiltCard, Counter; `LeafArt`: kirajzolódó levél-vonalrajz; `Preloader`, `CursorGlow`, `ScrollProgress`)
- `app/galeria` – szűrhető galéria nagyítóval (`?kep=<fb-index>` mélylink)
- `source-assets/` – nyers Facebook-képek és posztszövegek

## Új kép hozzáadása

1. Tedd a képet a `source-assets/fb/` mappába `NNN_…` névvel.
2. Vedd fel a `scripts/prep-images.mjs` `site` vagy `gallery` listájába.
3. `node scripts/prep-images.mjs` – ez újragenerálja a `public/img/` képeket és a `lib/images.ts`-t.
