import type { SVGProps } from "react";

// Egyvonalas ikonkészlet (24×24, stroke), a plakát kerek ikonjainak stílusában.
const paths: Record<string, React.ReactNode> = {
  chat: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5v-7Z" />
      <path d="M8.5 10h.01M12 10h.01M15.5 10h.01" strokeWidth="2.4" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12" />
      <path d="M4.5 8h3v8h-3zM16.5 8h3v8h-3z" />
    </>
  ),
  walk: (
    <>
      <circle cx="13.5" cy="4.5" r="1.6" />
      <path d="M10 21l2.2-6.2M12.5 9.5 9.5 12l-1.2 4M12.5 9.5l2.5 3 3 1.5M12.5 9.5 11 8.2 8 9.5 6.5 12.5M14.7 12.7 16 21" />
    </>
  ),
  question: (
    <>
      <path d="M9.2 9.2a2.9 2.9 0 1 1 4.3 2.6c-.9.5-1.5 1.2-1.5 2.2v.4" />
      <circle cx="12" cy="17.8" r=".9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="9.2" />
    </>
  ),
  pulse: (
    <>
      <path d="M12 20.5s-7.5-4.6-7.5-10A4 4 0 0 1 12 8a4 4 0 0 1 7.5 2.5c0 5.4-7.5 10-7.5 10Z" />
      <path d="M6.5 13h3l1.2-2.4 1.8 4.4 1.3-2h3.7" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16M6 16l4-4 3 3 5-6" />
      <path d="M15 9h3v3" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  care: (
    <>
      <path d="M12 17.5s-5-3.1-5-6.6A2.6 2.6 0 0 1 12 9.6a2.6 2.6 0 0 1 5 1.3c0 3.5-5 6.6-5 6.6Z" />
      <path d="M3.5 15.5c2 0 3-1.5 5.5-1.5M20.5 15.5c-2 0-3-1.5-5.5-1.5M3.5 15.5V20M20.5 15.5V20" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.3 3 7.9 7 9.5 4-1.6 7-5.2 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M9.5 12h5M9.5 15.5h5M9.5 8.5h2" />
    </>
  ),
  run: (
    <>
      <circle cx="14.5" cy="4.5" r="1.6" />
      <path d="M6.5 21l3-5.5 2.5 1.5L10 21M13.5 8.5l-3 2.5 2 3.5 3 1 1.5 4M13.5 8.5l2.5 2.5 3-1M13.5 8.5 11 7.5 7.5 9.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
      <path d="M5 19c3-5 6-8 10-10" />
    </>
  ),
  body: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 7.5v7M8 9.5l4 1.5 4-1.5M12 14.5 9.5 21M12 14.5l2.5 6.5" />
    </>
  ),
  sport: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5c-3 3-3 14 0 17M12 3.5c3 3 3 14 0 17M3.5 12h17M5.5 7.5c3.5 2 9.5 2 13 0M5.5 16.5c3.5-2 9.5-2 13 0" />
    </>
  ),
  tape: (
    <>
      <path d="M4 9.5 15.5 4l4.5 8-11.5 5.5z" />
      <path d="M8.5 17.5 4 9.5M6.5 12.5l3 1.5M9 10.5l3 1.5M11.5 8.5l3 1.5" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2 5 13.5h6L10 22l9-12h-6l1-8Z" />
    </>
  ),
  wave: (
    <>
      <path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      <path d="M3 7c2-3 4-3 6 0s4 3 6 0 4-3 6 0M3 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity=".45" />
    </>
  ),
  laser: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  boot: (
    <>
      <path d="M8 3h6v9l5 3v3H5v-3l3-2z" />
      <path d="M8 8h6M8 12.5h6" opacity=".6" />
    </>
  ),
  field: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="12" r="6" opacity=".6" />
      <circle cx="12" cy="12" r="9.5" opacity=".3" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <circle cx="12" cy="8.5" r="2" />
      <path d="M8.5 17c0-2.5 1.5-4 3.5-4s3.5 1.5 3.5 4" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  check: (
    <>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7.5-4.6-7.5-10A4 4 0 0 1 12 7.5 4 4 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
    </>
  ),
  gift: (
    <>
      <path d="M4 11h16v10H4zM3 7h18v4H3zM12 7v14" />
      <path d="M12 7c-2-4-6-3.5-6-1.5S10 7 12 7c2 0 6 .5 6-1.5S14 3 12 7Z" />
    </>
  ),
  star: (
    <>
      <path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z" />
    </>
  ),
  facebook: (
    <>
      <path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2H8v3.5h2.5V21H14v-7.5h2.5l.5-3.5h-3V8Z" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, className = "", strokeWidth = 1.7, ...rest }: { name: IconName | string; className?: string; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...rest}
    >
      {paths[name] ?? paths.leaf}
    </svg>
  );
}
