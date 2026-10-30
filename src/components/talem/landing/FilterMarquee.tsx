import type { CSSProperties } from "react";
import SectionHeading from "../SectionHeading";

const TAGS = [
  "In-Person",
  "All Grades",
  "Programming",
  "Art/Design",
  "Engineering",
  "Debate",
  "Law",
  "Beginner-Friendly",
  "International",
  "History",
  "Business",
  "STEM",
  "Biology",
  "Physics",
  "Leadership",
  "Marketing",
  "Entrepreneurship",
  "Cybersecurity",
  "Community Service",
  "Team-Based",
];

const ROWS = [
  { offset: 0, duration: 48, reverse: false },
  { offset: 7, duration: 56, reverse: true },
  { offset: 13, duration: 44, reverse: false },
];

function rotate<T>(list: T[], by: number) {
  return [...list.slice(by), ...list.slice(0, by)];
}

export default function FilterMarquee() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        align="center"
        title={
          <>
            One <span className="text-accent">powerful</span> filtering system.
          </>
        }
        lead="An extensive array of filters helps you discover the perfect activity for your grade, schedule and interests."
      />
      <div className="relative mt-12 flex flex-col gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {ROWS.map(row => {
          const tags = rotate(TAGS, row.offset);
          return (
            <div
              key={row.offset}
              className="t-marquee flex w-max"
              style={{ animationDuration: `${row.duration}s`, animationDirection: row.reverse ? "reverse" : "normal" } as CSSProperties}
            >
              {[...tags, ...tags].map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="mr-3 rounded-full border border-line-2 bg-sand-100/80 px-5 py-3 text-[clamp(0.95rem,1.4vw,1.15rem)] text-ink-2"
                >
                  <span className="mr-1 text-ink-4">#</span>
                  {tag}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
