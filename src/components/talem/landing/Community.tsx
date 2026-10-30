import SpecularLink from "../SpecularLink";

const DISCORD = "https://discord.com/invite/AMXD6jAb";

const STEPS = [
  { title: "Meet likeminded students", body: "Share ideas about high school, college and extracurriculars with students worldwide." },
  { title: "Give suggestions & feedback", body: "Have an idea to make Talem better? Tell the team directly." },
  { title: "Get updates & beta test", body: "Be the first to try new features on Talem." },
];

export default function Community() {
  return (
    <section className="px-3 sm:px-4">
      <div className="mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-[1.25fr_1fr]">
        <div className="t-card flex flex-col !rounded-[28px] p-6 sm:p-10">
          <h2 className="t-h2 text-ink">
            Join our <span className="text-accent">growing community.</span>
          </h2>
          <p className="t-lead mt-5 max-w-[540px]">
            Have a question, a suggestion or a new opportunity to share? Our Discord server is the place for it.
          </p>
          <ol className="mt-8 border-t border-line">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[40px_1fr] gap-x-3 border-b border-line py-5 sm:grid-cols-[48px_1fr_auto] sm:items-baseline"
              >
                <span className="t-index">0{index + 1}</span>
                <span className="text-[17px] text-ink">{step.title}</span>
                <span className="col-start-2 mt-1 text-[14px] leading-[1.5] text-ink-3 sm:col-start-auto sm:mt-0 sm:max-w-[260px] sm:text-right">
                  {step.body}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <SpecularLink href={DISCORD} newTab>
              Join the Discord <span aria-hidden="true">↗</span>
            </SpecularLink>
            <span className="t-caps">Every program free, always.</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-line bg-ink p-3 shadow-[var(--card-shadow)]">
          {import.meta.env.VITE_SANDBOX ? (
            // Sandboxed builds can't embed the Discord widget.
            <a
              href={DISCORD}
              target="_blank"
              rel="noreferrer"
              className="flex h-full min-h-[320px] flex-col justify-end gap-2 rounded-[20px] p-7 text-sand-100"
            >
              <span className="t-h3 text-[clamp(1.75rem,3vw,2.5rem)]">Talem on Discord</span>
              <span className="text-[15px] text-sand-300/80">Open the server in a new tab ↗</span>
            </a>
          ) : (
            <iframe
              title="Talem Discord server"
              className="block h-[460px] w-full rounded-[20px] lg:h-full lg:min-h-[520px]"
              src="https://discord.com/widget?id=1129165961849745618&theme=dark"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          )}
        </div>
      </div>
    </section>
  );
}
