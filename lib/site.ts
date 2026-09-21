// A TK Rehab Gyógytorna Stúdió minden szöveges tartalma egy helyen.
// Forrás: a Facebook-oldal posztjai és grafikái (2025. jan. – 2026. szept.) + a beküldött plakát.

export const brand = {
  name: "TK Rehab",
  fullName: "TK Rehab Gyógytorna Stúdió",
  owner: "Tóthné Király Enikő",
  tagline: "Mozgás. Egy biztosabb holnapért.",
  phone: "+36 30 516 0898",
  phoneHref: "tel:+36305160898",
  email: "kiralyencsi@gmail.com",
  address: "6000 Kecskemét, Losonczy utca 7.",
  city: "Kecskemét",
  facebook: "https://www.facebook.com/p/TK-Rehab-Gy%C3%B3gytorna-Studio-61572759920159/",
  messenger: "https://m.me/61572759920159",
  mapEmbed:
    "https://www.google.com/maps?q=Kecskem%C3%A9t%2C+Losonczy+utca+7&output=embed&z=16&hl=hu",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Kecskem%C3%A9t%2C+Losonczy+utca+7",
  rating: { percent: 100, count: 6 },
};

export const nav = [
  { href: "/#kezelesek", label: "Kezelések" },
  { href: "/#mutet", label: "Műtét előtt–után" },
  { href: "/#moti", label: "Moti Physio 3D" },
  { href: "/#rolam", label: "Rólam" },
  { href: "/#arlista", label: "Árlista" },
  { href: "/galeria", label: "Galéria" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];

// A hero „chipjei” a plakát alsó sorából.
export const heroChips = [
  { icon: "shield", label: "kevesebb bizonytalanság" },
  { icon: "doc", label: "érthető, személyre szabott útmutatás" },
  { icon: "run", label: "biztonságosabb mozgás" },
  { icon: "leaf", label: "tudatosabb felépülés" },
];

export const marquee = [
  "Gyógytorna",
  "Sportrehabilitáció",
  "Kineziotape ragasztás",
  "Elektroterápia",
  "Ultrahang terápia",
  "Laser terápia",
  "Nyirokcsizma kezelés",
  "Bemer terápia",
  "Moti Physio 3D",
  "McKenzie terápia",
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: "body" | "sport" | "tape" | "bolt" | "wave" | "laser" | "boot" | "field" | "scan";
  accent?: boolean;
};

export const services: Service[] = [
  {
    slug: "gyogytorna",
    title: "Gyógytorna",
    short: "Egyéni, állapotfelmérésre épülő mozgásterápia: mobilizálás, erősítés, testtartás-finomhangolás.",
    icon: "body",
  },
  {
    slug: "sportrehabilitacio",
    title: "Sportrehabilitáció",
    short: "Sportfizioterapeutaként a túlterhelésből, rossz mozgásmintákból vagy sérülésekből eredő panaszokra.",
    icon: "sport",
  },
  {
    slug: "kineziotape",
    title: "Kineziotape ragasztás",
    short: "Rugalmas szalag, ami támogatja az izmokat és ízületeket – edzés, munka és rehabilitáció alatt is.",
    icon: "tape",
  },
  {
    slug: "elektroterapia",
    title: "Elektroterápia",
    short: "TENS, EMS, galván, szelektív ingeráram, iontoforézis – fájdalomcsillapításra és izomaktiválásra.",
    icon: "bolt",
  },
  {
    slug: "ultrahang",
    title: "Ultrahang terápia",
    short: "Mélyszöveti mikromasszázs, ami javítja a keringést és oldja a letapadásokat.",
    icon: "wave",
  },
  {
    slug: "laser",
    title: "Laser terápia",
    short: "Fájdalmatlan lágylézer: gyulladáscsökkentő, fájdalomcsillapító, szövetregeneráló.",
    icon: "laser",
  },
  {
    slug: "nyirokcsizma",
    title: "Nyirokcsizma kezelés",
    short: "Légkompressziós nyirokmasszázs a talptól a csípőig – ödémára, „nehéz láb” érzésre.",
    icon: "boot",
  },
  {
    slug: "bemer",
    title: "Bemer terápia",
    short: "Fizikai érterápia a mikrokeringés támogatására, a regeneráció kiegészítéseként.",
    icon: "field",
  },
  {
    slug: "moti",
    title: "Moti Physio 3D",
    short: "AI alapú 3D tartás- és mozgáselemzés – objektív, pontos eredmények, személyre szabott gyakorlatsor.",
    icon: "scan",
    accent: true,
  },
];

// A plakát két panelje.
export const surgery = {
  title: ["Műtét előtt és után –", "nem kell egyedül", "végigcsinálnia."],
  script: "Miért fontos a gyógytornász konzultáció?",
  intro:
    "A műtét sok kérdést és bizonytalanságot hozhat. Egy előzetes, személyre szabott konzultáció segít megérteni, mi vár Önre, és felkészülni a műtét utáni időszakra.",
  before: {
    title: "Műtét előtt",
    sub: "Felkészülten, magabiztosabban",
    items: [
      { icon: "chat", text: "Átbeszéljük, mire számíthat." },
      { icon: "dumbbell", text: "Megtanulja a fontos mozdulatokat és gyakorlatokat." },
      { icon: "walk", text: "Felkészítjük a biztonságos mozgásra." },
      { icon: "question", text: "Minden kérdésére van idő." },
    ],
  },
  after: {
    title: "Műtét után",
    sub: "Lépésről lépésre a felépülésért",
    items: [
      { icon: "pulse", text: "Segítünk értelmezni, mi számít normálisnak." },
      { icon: "chart", text: "Fokozatosan építjük vissza a mozgást." },
      { icon: "person", text: "Személyre szabjuk a terhelést." },
      { icon: "care", text: "Végigkísérjük a felépülés útján." },
    ],
  },
  quote: "A tudás megnyugtat.",
  quoteSub:
    "Ha tudja, mi fog történni, magabiztosabban indulhat neki a műtétnek és a rehabilitációnak.",
  closing:
    "Ha műtét előtt áll, vagy már túl van a beavatkozáson, kérdezzen bátran – a konzultáció azért van, hogy ne maradjon egyedül a kérdéseivel.",
};

export const moti = {
  eyebrow: "Új szolgáltatás",
  title: "AI alapú tartás- és mozgáselemzés",
  lead: "A Moti Physio 3D mesterséges intelligenciát és szakértelmet ötvözve segít feltárni a mozgásszervi eltérések valódi okát.",
  problem:
    "Fáj a háta, dereka vagy nyaka? Úgy érzi, valami nincs rendben a mozgásával, de nem tudja pontosan, mi az oka?",
  includes: [
    { title: "3D tartáselemzés", text: "Precíz szkennelés és testtartás-értékelés." },
    { title: "Boka stabilitás vizsgálat", text: "Valós idejű mérés a boka mozgásáról." },
    { title: "Mozgáselemzés", text: "Tartás- és mozgásminták részletes elemzése." },
  ],
  steps: [
    { title: "Előkészület", text: "Álljon a szenzor elé a szakember utasításai szerint." },
    { title: "3D szkennelés", text: "A szenzor néhány másodperc alatt több irányból rögzíti a testet." },
    { title: "AI elemzés", text: "A szoftver azonnal elkészíti a 3D modellt és a részletes eredményeket." },
    {
      title: "Konzultáció",
      text: "Az eredmények alapján javasolt gyakorlatsort állítok össze, valamint lehetőség van kontroll- és visszamérésre.",
    },
  ],
  benefits: [
    "objektív, pontos eredmények",
    "személyre szabott gyakorlatsor",
    "kontroll- és visszamérés lehetősége",
  ],
  forWhom: [
    "Krónikus fájdalommal küzdőknek (hát, nyak, derék, váll, térd…)",
    "Sportolóknak és aktív életmódot folytatóknak",
    "Műtét vagy sérülés utáni rehabilitációhoz",
    "Prevencióra és teljesítményoptimalizálásra",
    "Mindenkinek, aki szeretné jobban megérteni a testét",
  ],
  price: "35 000 Ft",
  priceIncludes:
    "Tartalmazza a mozgáselemzést, a magyarázatot, a személyre szabott házi feladatokat nyomtatott formában és 6 hét múlva egy kedvezményes kontroll lehetőségét.",
};

export type Therapy = {
  slug: string;
  title: string;
  sub: string;
  description: string;
  indications: string[];
  contraTitle: string;
  contraindications: string[];
  types?: string[];
  typesTitle?: string;
};

export const therapies: Therapy[] = [
  {
    slug: "ultrahang",
    title: "Ultrahang",
    sub: "terápia",
    description:
      "A modern fizikoterápia alapja, különösen azok számára, akik gyors és hatékony megoldást keresnek mozgásszervi problémáikra. A kezelés során alkalmazott magas frekvenciájú hanghullámok mélyen behatolnak a szövetekbe, ahol célzottan hatnak a problémás területekre (ín, izom, lágyrész).",
    indications: [
      "Fájdalomcsillapító",
      "Gyulladáscsökkentő hatású",
      "Különböző mozgásszervi elváltozások",
      "Bursitis",
      "Ínhüvelygyulladás",
      "Izomhúzódások és szakadások",
      "Befagyott váll",
      "Izomrándulások és szalagsérülések",
      "Ízületi mozgásbeszűkülés",
      "Kontraktúra",
      "Derékfájás",
      "Nyaki fájdalom",
      "Rotátorköpeny szakadás",
      "Térd meniscus szakadás",
      "Bokasérülések",
    ],
    contraTitle: "Kontraindikációk",
    contraindications: [
      "Terhesség",
      "Rossz indulatú daganatok",
      "Sérült vagy fertőzött bőr",
      "Pacemaker esetén a mellkas területén",
      "Érrendszeri betegségek (mélyvénás trombózis, embólia)",
      "Láz, fertőző állapot",
      "Kezeletlen magas vérnyomás",
      "Vérhígító alkalmazása",
      "Gerincműtétek után (laminectomia)",
      "Érzéstelenített területek",
      "Súlyos csontritkulás",
      "Endoprotézisek környéke",
    ],
  },
  {
    slug: "laser",
    title: "Laser",
    sub: "terápia",
    description:
      "A lágylézer előnye, hogy fájdalmatlan, mellékhatása nincs, nem allergizál és jól kombinálható más, klasszikus kezelésekkel is. Protézises betegek is igénybe vehetik.",
    indications: [
      "Nyak-, hát- és derékfájdalom",
      "Különböző ízületi kopások (csípő, térd, váll, ujjak)",
      "Porckorongsérv, lumbágó, isiász",
      "Teniszkönyök, golfkönyök",
      "Bütyök, illetve sarokfájdalom",
      "Plantarfasciitis (talpi bőnye gyulladás)",
      "Sportsérülések, íngyulladások",
      "Műtétek utáni duzzanat",
      "Elhúzódó sebgyógyulás, fekélyek",
    ],
    contraTitle: "Kontraindikációk",
    contraindications: [
      "Tisztázatlan diagnózis",
      "Lázas állapot",
      "Daganatos megbetegedések",
      "Anyajegyek direkt besugárzása",
      "Várandósság esetén alhas és ágyéki gerinc környékének kezelése",
      "Pajzsmirigy és egyéb endokrin mirigyek besugárzása",
      "Gombás bőrelváltozások",
    ],
  },
  {
    slug: "elektroterapia",
    title: "Elektroterápia",
    sub: "TENS · EMS · interferencia",
    description:
      "A legrégibb gyógyító eljárások egyike a fizioterápia, amely a természet energiáit használja fel a gyógyító tevékenysége során. Segít csökkenteni a fájdalmat, aktiválni a gyenge izmokat és fokozni a vérkeringést.",
    typesTitle: "Nálam elérhető kisfrekvenciás kezelések",
    types: ["Galvánkezelés", "TENS kezelés", "Szelektív ingeráram kezelés", "Iontoforézis"],
    indications: [
      "Idegfájdalom, ideggyulladás",
      "Izomfájdalom",
      "Ínszalaggyulladás, ínhüvelygyulladás",
      "Nyáktömlőgyulladás",
      "Teniszkönyök, golfkönyök",
      "Sudeck-szindróma",
      "Csonttörések, csontritkulás",
      "Végtagok bénult izmainak rehabilitációja",
    ],
    contraTitle: "Kontraindikációk",
    contraindications: [
      "Lázas állapot",
      "Daganatos betegség",
      "Pacemaker-beültetés",
      "Menstruáció",
      "Sérült bőrfelület",
      "Csontvelőgyulladás",
      "Fémimplantátum",
    ],
  },
  {
    slug: "nyirokcsizma",
    title: "Nyirokcsizma",
    sub: "kezelés",
    description:
      "A nyirokmasszázs csizma tulajdonképpen egy légkompresszor. A kezelés során egy kompresszor levegőt pumpál a nyirokmasszázs csizmákba, melynek következtében a nyomáshullámok váltakozó időközönként és erősséggel a talptól kiindulva egészen a csípőig „masszírozzák” végig a testet.",
    indications: [
      "Szervezet méregtelenítésére",
      "Akut és krónikus ödéma kezelésére",
      "Véredény és nyirok ödémák kezelésére",
      "Nyirokpangás kezelésére",
      "Visszér kialakulásának megelőzésére és kezelésére",
      "Kötőszövet feszességének javítására",
      "Cellulit kezelésére",
      "Bőr rugalmasságának, tónusának növelésére",
      "Vér és nyirokkeringés élénkítésére",
      "„Nehéz láb” érzés csökkentésére",
    ],
    contraTitle: "Használata nem ajánlott",
    contraindications: [
      "Heveny, akut gyulladásos folyamatoknál",
      "Fertőzés, lázas állapot esetén",
      "Magas vérnyomás esetén",
      "Terhesség, szoptatás alatt",
      "Menstruáció első napjaiban",
      "Friss műtétek után",
      "Egyes bőrbetegségek esetén (herpesz, övsömör)",
      "Pajzsmirigy működési zavaroknál",
      "Daganatos megbetegedéseknél",
      "Véralvadási zavarban szenvedők esetén",
      "Pacemaker használata esetén",
      "Nagyfokú asztma esetén",
      "Nagyfokú szívelégtelenség és ehhez társuló ödémák esetén",
      "Trombózisra hajlamos személyeknél",
    ],
  },
];

export const therapyNote = {
  title: "Kúraszerűen a leghatékonyabb",
  text: "A fizikoterápiás kezelések önmagukban is hatékonyak, de gyógytornával kombinálva segítenek a tartós javulás elérésében, a visszatérő panaszok megelőzésében és a mozgásminőség javításában. Érdemes kúraszerűen felvenni őket: egymást követő napokon vagy heti 2–3 alkalommal, összesen 5–10–15 kezelés fejti ki legjobban a hatását.",
  referral: "Érkezhet szakorvosi beutalóval – de anélkül is egy állapotfelmérés után kezdünk a kezelésbe.",
};

// „Milyen problémákkal fordulnak leggyakrabban gyógytornászhoz?” (2025. dec. 9.)
export const problems = [
  {
    n: "01",
    title: "Rehabilitáció műtét vagy sérülés után",
    text: "Legyen szó törésről, keresztszalag-szakadásról, csípő- vagy térdprotézisről, rotátorköpeny-műtétről – a sikeres felépülés alapja a szakmailag felépített, fokozatos rehabilitáció. A terápia célja a teljes mozgástartomány visszanyerése, az erő és stabilitás újraépítése.",
  },
  {
    n: "02",
    title: "Térd- és csípőpanaszok, kopás, sportsérülések",
    text: "Sportfizioterapeutaként kiemelt figyelmet fordítok a túlterhelésből, rossz mozgásmintákból vagy sérülésekből eredő panaszokra. Funkcionális erősítés, egyensúlyfejlesztés és a terhelés okos, fokozatos visszaállítása – már néhány alkalom után érezhető stabilitással.",
  },
  {
    n: "03",
    title: "Derék- és hátfájdalom",
    text: "A sok ülés, a rossz tartás és a mozgáshiány miatt a gerinc körüli izmok könnyen befeszülnek. A kezelés része a mobilizálás, a törzsizmok erősítése és a testtartás finomhangolása, ami tartós javulást hoz.",
  },
  {
    n: "04",
    title: "Nyak- és vállövi panaszok",
    text: "Monitorozás, rossz alvási pozíció, stressz vagy túlterhelés következtében gyakori a trapézizom túlfeszülése, a lapocka körüli fájdalom vagy a karba sugárzó panasz. A célzott lapockastabilizáló gyakorlatok és a manuális technikák gyorsan csökkentik a feszülést.",
  },
  {
    n: "+",
    title: "Stressz okozta izomfeszülés, feszes testérzet",
    text: "A feszültség könnyen megjelenik a nyakban, vállban vagy derékban. A gyógytorna és légzőgyakorlatok segítenek visszaállítani a test „kisimult” állapotát.",
  },
];

// A 2026. jan. 5-i poszt panaszlistája – „Milyen panaszok esetén ajánlott a lézer-, ultrahang- és elektroterápia?”
export const complaints = [
  "Nyak-, hát-, derékfájás",
  "Váll-, könyök-, csuklófájdalom",
  "Csípő-, térd-, bokafájdalom",
  "Isiász, ülőideg fájdalom",
  "Nyaki eredetű fejfájás",
  "Ízületi kopás (arthrosis)",
  "Ízületi gyulladás (arthritis)",
  "Teniszkönyök, golfkönyök",
  "Achilles-ín gyulladás",
  "Szalag- és lágyrészsérülések",
  "Izomhúzódás, izomsérülés",
  "Izomfeszülés, izomcsomók",
  "Befagyott váll",
  "Sarkantyú, sarokfájdalom",
  "Talpi fájdalmak",
  "Sportsérülések",
  "Mozgásbeszűkülés, ízületi merevség",
  "Izomgyengeség, izomsorvadás",
  "Idegi eredetű fájdalmak",
  "Műtét utáni rehabilitáció",
  "Hegkezelés",
  "Lassú gyógyulású lágyrészpanaszok",
];

export const about = {
  name: "Tóthné Király Enikő",
  role: "gyógytornász BSc & MSc · sportfizioterapeuta · egészségügyi tanár",
  lead: "Gyógytornászként és fizioterapeutaként hiszem, hogy a testünk mindig jelez – csak meg kell tanulnunk jól értelmezni ezeket a jeleket.",
  paragraphs: [
    "Azért választottam ezt a hivatást, mert nap mint nap látom, mennyit számít, ha valaki időben, megfelelő szakemberhez fordul. Három diplomával és több mint egy évtizedes szakmai tapasztalattal dolgozom: gyógytornász BSc és MSc végzettséggel, egészségügyi tanári diplomával, valamint számos szakmai továbbképzéssel a hátam mögött kezelek mozgásszervi panaszokat, sportsérüléseket és rehabilitációs eseteket.",
    "Egy fájdalom mögött idegrendszeri, ízületi, izom- vagy akár belszervi összefüggések is állhatnak. A célom nem csupán a fájdalom csökkentése, hanem az okok feltárása, a test működésének megértése és a hosszú távú javulás. Minden hozzám fordulóval egyénileg foglalkozom, komplex szemlélettel, gyógytorna és fizikoterápiás kezelések kombinációjával.",
    "Kecskeméten élek a férjemmel és három kisgyermekünkkel. Édesapám révén – aki játékos és játékvezető volt, azóta edző – mindig is a kosárlabda világában mozogtam: közel 25 éve dolgozom kosárlabda-mérkőzéseken asztalszemélyzetként.",
  ],
  stats: [
    { value: 3, suffix: "", label: "diploma" },
    { value: 10, suffix: "+", label: "év szakmai tapasztalat" },
    { value: 25, suffix: "", label: "év a kosárlabda világában" },
    { value: 100, suffix: "%", label: "ajánlja a Facebookon" },
  ],
  timeline: [
    { year: "2012", title: "Gyógytornász BSc", where: "Pécsi Tudományegyetem" },
    { year: "2012", title: "Nagykőrösi Rehabilitációs Szakkórház", where: "neurológia, ortopédia, traumatológia, gerincbetegségek" },
    { year: "2018", title: "Gyógytornász MSc", where: "Pécsi Tudományegyetem" },
    { year: "2021", title: "Mercedes Kosárlabda Akadémia", where: "sportfizioterápia, prevenció, rehabilitáció" },
    { year: "2023", title: "Egészségügyi tanár", where: "Debreceni Egyetem" },
    { year: "2025", title: "TK Rehab Gyógytorna Stúdió", where: "Kecskemét, Losonczy utca 7." },
  ],
  credentials: ["McKenzie A · B · C", "Kinesiotape ragasztás", "Sportfizioterapeuta", "Egészségügyi tanár MSc"],
  values: [
    "Ha szeretne tudatosan tenni az egészségéért,",
    "ha fontos Önnek a valódi szakmai háttér,",
    "és ha nem csak kezelést, hanem biztonságot is keres –",
    "szeretettel várom.",
  ],
};

export type PriceGroup = { title: string; items: { name: string; duration?: string; price: string }[] };

export const prices: { validFrom: string; groups: PriceGroup[] } = {
  validFrom: "2026. január 5-től",
  groups: [
    {
      title: "Fizikoterápiás kezelések",
      items: [
        { name: "Állapotfelmérés", duration: "20 perc", price: "8 000 Ft" },
        { name: "Ultrahang terápia", duration: "20 perc", price: "8 000 Ft" },
        { name: "Elektroterápia", duration: "20 perc", price: "8 000 Ft" },
        { name: "Laser terápia", duration: "20 perc", price: "8 000 Ft" },
        { name: "2 fizikoterápiás kezelés egy alkalommal", price: "12 000 Ft" },
      ],
    },
    {
      title: "Gyógytorna",
      items: [
        { name: "Állapotfelmérés", duration: "55 perc", price: "15 000 Ft" },
        { name: "Egyéni gyógytorna", duration: "40 perc", price: "10 000 Ft" },
        { name: "Egyéni gyógytorna", duration: "55 perc", price: "14 000 Ft" },
        { name: "McKenzie terápia", duration: "30 perc", price: "10 000 Ft" },
        { name: "Sportfizioterápia", duration: "60 perc", price: "15 000 Ft" },
      ],
    },
    {
      title: "Kiegészítő terápiák",
      items: [
        { name: "Kineziotape ragasztás", duration: "1 testtáj", price: "6 000 Ft" },
        { name: "Nyirokcsizma kezelés", duration: "30 perc", price: "6 000 Ft" },
        { name: "Moti Physio 3D mozgáselemzés", duration: "kontrollal", price: "35 000 Ft" },
      ],
    },
  ],
};

export const giftCard = {
  title: "Ajándékozzon mozgást, egészséget és feltöltődést!",
  text: "Lepje meg szeretteit egy TK Rehab ajándékkártyával, amely nemcsak figyelmesség, hanem igazi törődés is. Nem porosodik a fiókban, nem sablonos – az egészséget és a törődést ajándékozza.",
  points: ["Választható értékben és alkalomra", "Megvásárolható személyesen a stúdióban vagy üzenetben is megrendelhető", "Gyógytorna, fizikoterápia vagy mozgáselemzés – a megajándékozott dönt"],
};

export const reviews = {
  headline: "100% ajánlja",
  sub: "6 vélemény a Facebookon",
  items: [
    { name: "Ilona Pető", date: "2026. július", text: "Nagyon kedves, rugalmas és precíz, szívből ajánlom." },
  ],
};

export const laserResult = {
  title: "Lépésről lépésre a gyógyulás felé",
  text: "Mindössze 1 hét és 5 lézerkezelés után látványos javulás. A fotókon végigkövethető a seb állapotának fokozatos változása, ahogy a lézerterápia támogatja a gyorsabb és esztétikusabb regenerációt – még elhúzódó vagy fekélyes sebek esetén is.",
  points: ["Fájdalom enyhítése", "Gyulladás csökkentése", "Gyógyulási folyamat felgyorsítása"],
};
