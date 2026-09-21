import Image from "next/image";
import Link from "next/link";

// TK-monogram (a Facebook-profilképből kulcsolva) + „REHAB" szedett felirat.
export default function Logo({
  variant = "dark",
  className = "",
  withSub = true,
}: {
  variant?: "dark" | "light";
  className?: string;
  withSub?: boolean;
}) {
  const light = variant === "light";
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="TK Rehab – kezdőlap">
      <Image
        src={light ? "/img/site/logo-mark-light.png" : "/img/site/logo-mark-dark.png"}
        alt=""
        width={1343}
        height={1010}
        priority
        className="h-10 w-auto transition-transform duration-700 [transition-timing-function:var(--ease-luxe)] group-hover:rotate-[-4deg] group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-semibold tracking-[0.12em] ${light ? "text-cream" : "text-forest"}`}
        >
          REHAB
        </span>
        {withSub && (
          <span className={`mt-1 whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.3em] ${light ? "text-rose" : "text-rose-deep"}`}>
            Gyógytorna Stúdió
          </span>
        )}
      </span>
    </Link>
  );
}
