import type { CSSProperties, ReactNode } from "react";
import MagicBento, { type MagicBentoItem } from "../../reactbits/MagicBento";
import SectionHeading from "../SectionHeading";

// Sand overrides for the React Bits Magic Bento "light" theme.
const SAND_BENTO = {
  "--mb-surface": "linear-gradient(180deg, #fcfbf8 0%, #f5f2ed 100%)",
  "--mb-edge": "rgba(11, 18, 32, 0.1)",
  "--mb-highlight": "rgba(255, 255, 255, 0.55)",
  "--mb-shadow": "0 24px 48px -36px rgba(60, 45, 20, 0.5), 0 8px 18px -16px rgba(60, 45, 20, 0.25)",
  "--mb-ink": "#0b1220",
  "--mb-muted": "rgba(11, 18, 32, 0.6)",
  "--mb-line": "rgba(11, 18, 32, 0.1)",
  "--mb-glow-alpha": 0.55,
  "--mb-spot-alpha": 0.06,
} as CSSProperties;

function Cell({
  title,
  body,
  children,
  wide = false,
}: {
  title: string;
  body: string;
  children?: ReactNode;
  wide?: boolean;
}) {
  const text = (
    <div className="mt-auto">
      <h3 className="text-[21px] leading-[1.15] tracking-[-0.025em]">{title}</h3>
      <p className="mt-2 max-w-[420px] text-[14px] leading-[1.5] text-ink-3">{body}</p>
    </div>
  );

  if (wide) {
    return (
      <div className="grid h-full min-h-0 gap-5 text-ink sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] sm:gap-6">
        <div className="flex min-h-0 flex-col">{text}</div>
        {children && <div className="flex min-h-0 flex-col justify-center">{children}</div>}
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col gap-4 text-ink">
      {children && <div className="relative flex min-h-0 flex-1 flex-col justify-center">{children}</div>}
      {text}
    </div>
  );
}

const RESULTS = [
  { name: "Research Science Institute", meta: "Research · Grade 11 · In person" },
  { name: "USA Biology Olympiad", meta: "Competition · All grades · Hybrid" },
  { name: "Key Club", meta: "Club · Community service · Global" },
];

function DatabaseVisual() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2 rounded-full border border-line-2 bg-sand-50/70 px-4 py-2.5 text-[13.5px] text-ink-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        biology research for juniors
      </div>
      {RESULTS.map((result, index) => (
        <div
          key={result.name}
          className="flex items-center gap-3 rounded-2xl border border-line bg-sand-50/55 px-4 py-3"
          style={{ opacity: 1 - index * 0.18 }}
        >
          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-accent/10 text-[12px] text-accent">
            0{index + 1}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[14.5px] text-ink">{result.name}</span>
            <span className="block truncate text-[12.5px] text-ink-3">{result.meta}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function FilterVisual() {
  const chips = ["All grades", "Remote", "STEM", "Beginner", "Team-based"];
  return (
    <div className="flex flex-wrap gap-1.5">
      {chips.map((chip, index) => (
        <span key={chip} className={`t-chip !text-[12px] ${index === 1 || index === 2 ? "t-chip-accent" : ""}`}>
          {chip}
        </span>
      ))}
    </div>
  );
}

function ProgramsVisual() {
  const schools = ["Harvard", "Yale", "MIT", "UPenn", "Brown", "UCLA", "UVA", "Rutgers"];
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-[clamp(1.05rem,1.5vw,1.3rem)] tracking-[-0.03em] text-ink-2">
      {schools.map((school, index) => (
        <span key={school} className={index % 3 === 0 ? "text-ink" : "text-ink-4"}>
          {school}
        </span>
      ))}
    </div>
  );
}

function ApplicationsVisual() {
  const rows = [
    { label: "Essays", value: 92 },
    { label: "Activities", value: 78 },
    { label: "Awards", value: 64 },
  ];
  return (
    <div className="flex flex-col gap-3">
      {rows.map(row => (
        <div key={row.label}>
          <div className="flex items-baseline justify-between text-[13.5px]">
            <span className="text-ink-2">{row.label}</span>
            <span className="text-accent">{row.value}%</span>
          </div>
          <div className="mt-1.5 h-1 rounded-full bg-ink/10">
            <div className="h-full rounded-full bg-accent" style={{ width: `${row.value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const ITEMS: MagicBentoItem[] = [
  {
    id: "database",
    colSpan: 2,
    rowSpan: 2,
    href: "/extracurriculars",
    content: (
      <Cell
        title="One massive database."
        body="Over 500 extracurriculars, internships and competitions — each with grade level, format, commitment and a direct link."
      >
        <DatabaseVisual />
      </Cell>
    ),
  },
  {
    id: "filters",
    href: "/extracurriculars",
    content: (
      <Cell title="Sort & filter" body="50+ filters, from location to subject.">
        <FilterVisual />
      </Cell>
    ),
  },
  {
    id: "free",
    content: (
      <Cell title="Free forever" body="No paywall. No sign-up. Ever.">
        <span className="text-[clamp(3rem,5vw,4.25rem)] leading-none tracking-[-0.06em] text-ink">$0</span>
      </Cell>
    ),
  },
  {
    id: "programs",
    colSpan: 2,
    href: "/programs",
    content: (
      <Cell
        wide
        title="Find college programs"
        body="Summer and pre-college programs at the schools you love."
      >
        <ProgramsVisual />
      </Cell>
    ),
  },
  {
    id: "applications",
    colSpan: 2,
    href: "/applications",
    content: (
      <Cell
        wide
        title="Get inspired"
        body="Read real applications from students admitted everywhere from state schools to the Ivy League."
      >
        <ApplicationsVisual />
      </Cell>
    ),
  },
  {
    id: "community",
    colSpan: 2,
    href: "https://forms.gle/YEmqpvWMTEA1X2ye9",
    target: "_blank",
    rel: "noreferrer",
    content: (
      <Cell
        wide
        title="Built with your help"
        body="Talem grows from your suggestions. Submit an activity or share feedback on Discord."
      >
        <div className="rounded-2xl border border-line bg-sand-50/60 p-4">
          <p className="t-caps">New submission</p>
          <p className="mt-2 text-[16px] tracking-[-0.01em] text-ink">Your favorite opportunity</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <span className="t-chip t-chip-accent">
              <span className="t-dot" />
              Reviewed weekly
            </span>
            <span className="text-[14px] text-accent">
              Submit <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </Cell>
    ),
  },
];

export default function FeatureBento() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        title={
          <>
            Finding opportunities has <span className="text-accent">never been easier.</span>
          </>
        }
        lead="Talem lets you search, sort and filter a constantly growing collection of opportunities — so you spend less time searching and more time doing."
      />
      <div className="mt-12">
        <MagicBento
          items={ITEMS}
          columns={4}
          rowHeight={236}
          gap={14}
          radius={24}
          theme="light"
          glowColor="#2f6bff"
          textAutoHide={false}
          enableTilt
          spotlightRadius={340}
          style={SAND_BENTO}
        />
      </div>
    </section>
  );
}
