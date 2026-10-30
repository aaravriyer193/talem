import HeroBackdrop from "../HeroBackdrop";
import SpecularLink from "../SpecularLink";
import displaySearch from "../../../assets/hero/display-search.webp";

const STATS = [
  { value: "500+", label: "Opportunities" },
  { value: "50+", label: "Filters" },
  { value: "8", label: "Universities" },
  { value: "$0", label: "To use" },
];

export default function LandingHero() {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-sand-200 shadow-[0_30px_60px_-40px_rgba(60,45,20,0.55)]">
        <HeroBackdrop />

        <div className="relative mx-auto flex min-h-[min(860px,calc(100svh-110px))] max-w-[1280px] flex-col justify-between px-5 pb-6 pt-14 sm:px-10 sm:pt-20 lg:pt-20">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-4">
            <div className="mx-auto flex max-w-[980px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
              <span className="t-chip t-chip-accent">
                <span className="t-dot" />
                Free, no sign-up
              </span>

              <h1 className="t-display mt-7 text-[clamp(3.6rem,11vw,9rem)] text-ink lg:text-[clamp(4rem,6.6vw,6.75rem)]">
                High school
                <br />
                <span className="text-accent">made easy.</span>
              </h1>

              <p className="t-lead mt-7 max-w-[600px] lg:max-w-[500px]">
                Talem makes finding high school opportunities easy — extracurriculars, research programs,
                competitions and real college applications, all in one free database.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <SpecularLink href="/extracurriculars" size="lg">
                  Explore the database <span aria-hidden="true">→</span>
                </SpecularLink>
                <a href="/programs" className="t-btn-ghost !px-6 !py-[17px]">
                  College programs <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Rendered with React Bits Center Stage from the real search page. */}
            <img
              src={displaySearch}
              alt="Talem's extracurricular search on a desktop display."
              width={1300}
              height={1038}
              decoding="async"
              fetchPriority="high"
              draggable={false}
              className="pointer-events-none mx-auto block h-auto w-full max-w-[560px] select-none lg:-mr-6 lg:max-w-none"
            />
          </div>

          <dl className="mt-14 grid grid-cols-2 overflow-hidden rounded-[20px] border border-line bg-sand-100/70 backdrop-blur-md md:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-5 py-5 text-center sm:px-7 sm:py-6 ${index % 2 === 1 ? "border-l border-line" : ""} ${index >= 2 ? "border-t border-line md:border-t-0" : ""} ${index === 2 ? "md:border-l" : ""}`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-[clamp(2rem,3.4vw,2.75rem)] leading-none tracking-[-0.04em] text-ink">{stat.value}</dd>
                <dd className="t-caps mt-3">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
