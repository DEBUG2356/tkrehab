# TK Rehab Gyógytorna Stúdió – forrásjegyzék és egyeztetendők

Az oldal tartalma **kizárólag** a Facebook-oldalról (<https://www.facebook.com/p/TK-Rehab-Gy%C3%B3gytorna-Studio-61572759920159/>)
és a beküldött „Műtét előtt és után" plakátról származik. Kinyerés dátuma: 2026-09-21. Minden szöveg a `lib/site.ts`-ben van.

## Biztos adatok (forrással)

| Adat | Érték | Forrás |
|---|---|---|
| Név | TK Rehab Gyógytorna Stúdió | FB oldalnév, logó |
| Tulajdonos | Tóthné Király Enikő – gyógytornász BSc & MSc, sportfizioterapeuta, egészségügyi tanár | FB névjegy + 2025-03-09 bemutatkozó poszt |
| Telefon | +36 30 516 0898 | FB névjegy + minden poszt |
| E-mail | kiralyencsi@gmail.com | FB névjegy |
| Cím | 6000 Kecskemét, Losonczy utca 7. | 2026-09-13 és 2025-11-04 poszt |
| Árlista | 2026. január 5-től érvényes | #011 grafika („ÁRLISTA") |
| Moti Physio 3D ára | 35 000 Ft (elemzés + magyarázat + nyomtatott házi feladat + 6 hét múlva kedvezményes kontroll) | 2026-07-15 poszt |
| Elérhető kezelések | gyógytorna, sportrehabilitáció, kineziotape, elektroterápia, ultrahang, laser, nyirokcsizma, Bemer | borítókép (#019/#024) |
| Indikációk / kontraindikációk | ultrahang, laser, elektroterápia, nyirokcsizma | #020–#023 grafikák |
| Vélemény | „100% ajánlja (6 vélemény)"; Ilona Pető, 2026. július | FB reviews fül (kijelentkezve csak 1 látszik) |
| Életút | 2012 BSc Pécs · 2012 Nagykőrösi Rehabilitációs Szakkórház · 2018 MSc Pécs · 2021 Mercedes Kosárlabda Akadémia · 2023 Egészségügyi tanár, Debreceni Egyetem · McKenzie A/B/C, Kinesiotape, Sportfizioterapeuta tanfolyamok | 2025-03-09 poszt |

## Feltételezések / egyeztetendő

- **Nyitvatartás**: a FB-n be van állítva („Jelenleg zárva"), de bejelentkezés nélkül nem olvasható → az oldalon nincs nyitvatartás, csak „időpont-egyeztetés telefonon".
- **Domain**: `tkrehab.hu` csak feltételezés a `metadataBase`-hez (`app/layout.tsx`) – cserélendő a valódira.
- **Logó**: a valódi arculati jel a TK-monogram (FB-profilkép, `public/img/site/logo-mark-*.png`). A beküldött plakát bagoly-logója MI-generált („MI-tartalom" jelölésű poszt), ezért **nem** használtuk; a plakátról a színvilág, a tipográfia, a boltíves fotó, a rózsaszín ecsetmatrica és a két panel jött.
- **Hero fotó**: a plakát stúdiófotójának bal oldalán lévő matrica és bagoly nélküli kivágás (`public/img/site/studio.jpg`, 2×-re nagyítva). Ha van valódi stúdiófotó, érdemes lecserélni.
- **Bemer terápia**: csak a borítóképen szerepel, leírás és ár nincs hozzá → általános szöveg, az árlistában nincs.
- **Messenger link**: `m.me/61572759920159` (az oldal-ID-ből); ellenőrizendő.
- **A 2025-11-04-i poszt** egy másik telefonszámot ad meg (06 70 516 6408) – az oldalon a névjegyben és a többi posztban szereplő +36 30 516 0898-at használjuk.
- **Sebfotó** (#018, lézeres sebgyógyulás): érzékeny tartalom, ezért elmosva, kattintásra jelenik meg. Ha nem kell, a `Results.tsx`-ből törölhető.
- **Videók / reelsek**: bejelentkezés nélkül nem elérhetők, nem kerültek fel.

## Nyers anyag

- `source-assets/plakat.webp` – a beküldött plakát
- `source-assets/fb/` – mind a 29 FB-kép eredeti felbontásban (gitignore-olva)
- `source-assets/fb-posts.txt` – a posztok teljes szövege; `fb-data.json` – a képek eredeti URL-jei
