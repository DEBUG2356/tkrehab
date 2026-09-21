import Link from "next/link";
import Logo from "./Logo";
import { Icon } from "./Icons";
import { brand, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream leaf-texture">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo variant="light" />
          <p className="script mt-5 text-3xl text-rose">Mozgás. Egy biztosabb holnapért.</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/60">
            Gyógytorna, sportrehabilitáció, fizikoterápia és 3D mozgáselemzés Kecskeméten – személyre szabva,
            szakmai háttérrel.
          </p>
        </div>
        <nav className="lg:col-span-3" aria-label="Lábléc navigáció">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-rose">Oldalak</p>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-rose">Elérhetőség</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-4 w-4 text-rose" />
              <a href={brand.phoneHref} className="text-cream/85 hover:text-cream">{brand.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4 text-rose" />
              <a href={`mailto:${brand.email}`} className="text-cream/85 hover:text-cream">{brand.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="pin" className="h-4 w-4 text-rose" />
              <span className="text-cream/85">{brand.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="facebook" className="h-4 w-4 text-rose" />
              <a href={brand.facebook} target="_blank" rel="noopener" className="text-cream/85 hover:text-cream">TK Rehab Gyógytorna Studio</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {brand.fullName} · {brand.owner}</p>
          <p>Gyógytornász BSc & MSc · Sportfizioterapeuta · Egészségügyi tanár</p>
        </div>
      </div>
    </footer>
  );
}
