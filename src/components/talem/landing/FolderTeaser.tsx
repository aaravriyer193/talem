import type { CSSProperties } from "react";
import Folder from "../../reactbits/Folder";
import SpecularLink from "../SpecularLink";

const PAPERS = [
  { tag: "Competition", title: "USA Biology Olympiad", meta: ["All grades", "Hybrid"] },
  { tag: "Research", title: "Research Science Institute", meta: ["Grade 11", "In person"] },
  { tag: "Club", title: "Model United Nations", meta: ["All grades", "Global"] },
];

const s = (px: number) => `calc(${px}px * var(--folder-scale))`;

function Paper({ tag, title, meta }: (typeof PAPERS)[number]) {
  const wrap: CSSProperties = { padding: `${s(12)} ${s(11)}`, gap: s(6) };
  return (
    <div className="flex h-full flex-col text-ink" style={wrap}>
      <span className="t-caps !text-accent" style={{ fontSize: s(6.5) }}>
        {tag}
      </span>
      <span className="leading-[1.1] tracking-[-0.02em]" style={{ fontSize: s(12) }}>
        {title}
      </span>
      <span className="flex flex-col" style={{ gap: s(4), marginTop: s(2) }}>
        {[92, 80, 86, 60].map(width => (
          <span key={width} className="rounded-full bg-ink/10" style={{ height: s(3.5), width: `${width}%` }} />
        ))}
      </span>
      <span className="mt-auto flex flex-wrap" style={{ gap: s(3) }}>
        {meta.map(item => (
          <span
            key={item}
            className="rounded-full border border-line-2 text-ink-2"
            style={{ fontSize: s(6.5), padding: `${s(1.5)} ${s(5)}` }}
          >
            {item}
          </span>
        ))}
      </span>
    </div>
  );
}

const POINTS = [
  { title: "No sign-up or login", body: "Head to the database and explore — no account needed." },
  { title: "Free forever", body: "Every high schooler deserves equal access to opportunities." },
  { title: "Bookmark for later", body: "Save the activities you like and come back to your shortlist." },
];

export default function FolderTeaser() {
  return (
    <section className="px-3 sm:px-4">
      <div className="t-card mx-auto grid max-w-[1180px] items-center gap-6 overflow-hidden !rounded-[28px] p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:p-14">
        <div>
          <h2 className="t-h2 text-ink">
            Find the right activities to make your <span className="text-accent">resume shine.</span>
          </h2>
          <p className="t-lead mt-5 max-w-[520px]">
            It seems like everything is hidden behind a paywall these days. Talem is 100% free — open the folder
            and see what's inside.
          </p>

          <ul className="mt-8 border-t border-line">
            {POINTS.map((point, index) => (
              <li key={point.title} className="grid grid-cols-[40px_1fr] gap-x-3 border-b border-line py-4">
                <span className="t-index pt-[3px]">0{index + 1}</span>
                <span>
                  <span className="block text-[16px] text-ink">{point.title}</span>
                  <span className="mt-1 block text-[14px] leading-[1.5] text-ink-3">{point.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <SpecularLink href="/extracurriculars">
              Start exploring <span aria-hidden="true">→</span>
            </SpecularLink>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center rounded-[22px] border border-line bg-sand-300/60 py-16 sm:min-h-[480px] lg:h-full">
          <p className="t-caps absolute left-5 top-5">Click the folder</p>
          <Folder
            items={PAPERS.map(paper => (
              <Paper key={paper.title} {...paper} />
            ))}
            label="Talem"
            color="#2f6bff"
            paperColor="#ffffff"
            theme="light"
            size={1.45}
            tabPosition="left"
            layout="spread"
            draggable={false}
            zoomOnClick={false}
          />
        </div>
      </div>
    </section>
  );
}
