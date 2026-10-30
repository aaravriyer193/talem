import type { CSSProperties } from "react";
import CardNav, { type CardNavItem } from "../reactbits/CardNav";
import TalemMark from "./TalemMark";

const SUBMIT_FORM = "https://forms.gle/YEmqpvWMTEA1X2ye9";

const ITEMS: CardNavItem[] = [
  {
    label: "Discover",
    description: "Search 500+ free extracurriculars, internships and competitions.",
    links: [
      { label: "Extracurriculars", href: "/extracurriculars" },
      { label: "College programs", href: "/programs" },
    ],
  },
  {
    label: "Get inspired",
    description: "Real applications from students who got in.",
    links: [
      { label: "Applications", href: "/applications" },
      { label: "About Talem", href: "/about" },
    ],
  },
  {
    label: "Contribute",
    description: "Know an opportunity we're missing? Add it in a minute.",
    bgColor: "#0b1220",
    textColor: "#fdfcfa",
    links: [
      { label: "Submit an activity", href: SUBMIT_FORM },
      { label: "support@talem.org", href: "mailto:support@talem.org" },
    ],
  },
];

// Sand-toned overrides for the React Bits Card Nav "light" theme.
const SAND_THEME = {
  "--cn-panel": "rgba(249, 247, 243, 0.82)",
  "--cn-solid": "#f9f7f3",
  "--cn-edge": "rgba(11, 18, 32, 0.1)",
  "--cn-highlight": "rgba(255, 255, 255, 0.6)",
  "--cn-shadow": "0 24px 48px -28px rgba(60, 45, 20, 0.45), 0 6px 16px -12px rgba(60, 45, 20, 0.25)",
  "--cn-text": "#0b1220",
  "--cn-muted": "rgba(11, 18, 32, 0.58)",
  "--cn-hover": "rgba(11, 18, 32, 0.05)",
  "--cn-ring": "rgba(47, 107, 255, 0.6)",
  "--cn-tile": "linear-gradient(180deg, #fcfbf8 0%, #f3f0ea 100%)",
  "--cn-tile-rim":
    "inset 0 0 0 1px rgba(11, 18, 32, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 4px 10px -6px rgba(60, 45, 20, 0.3)",
  "--cn-cta": "linear-gradient(180deg, #1d2638 0%, #0b1220 100%)",
  "--cn-cta-ink": "#fdfcfa",
  "--cn-radius": "20px",
} as CSSProperties;

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5 text-ink">
      <TalemMark className="!h-[22px] !w-auto text-accent" />
      <span className="font-display text-[21px] tracking-[-0.01em]">Talem</span>
    </span>
  );
}

export default function SiteNav() {
  if (typeof window !== "undefined" && window.location.pathname === "/auth") return null;

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <CardNav
        logo={<Wordmark />}
        logoAlt="Talem home"
        logoHref="/"
        items={ITEMS}
        cta={{ label: "Explore database", href: "/extracurriculars" }}
        theme="light"
        surface="glass"
        cardEffect="rise"
        cardHeight={196}
        maxWidth={1180}
        style={SAND_THEME}
      />
    </div>
  );
}
