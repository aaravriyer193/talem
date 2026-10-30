import HeroBackdrop from "../HeroBackdrop";
import SpecularLink from "../SpecularLink";

export default function FinalCta() {
  return (
    <section className="px-3 pb-3 pt-24 sm:px-4 sm:pb-4 sm:pt-32">
      <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-sand-200">
        <HeroBackdrop />
        <div className="relative mx-auto flex max-w-[1180px] flex-col items-center gap-9 px-6 py-20 text-center sm:px-10 sm:py-28">
          <div className="flex flex-col items-center">
            <h2 className="t-display text-[clamp(3rem,7.4vw,6rem)] text-ink">
              <span className="whitespace-nowrap">Ready to get</span>
              <br />
              <span className="text-accent">started?</span>
            </h2>
            <p className="t-lead mt-6 max-w-[460px]">Make the most of your high school career.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <SpecularLink href="/extracurriculars" size="lg">
              Explore the database <span aria-hidden="true">→</span>
            </SpecularLink>
            <a href="/applications" className="t-btn-ghost !px-6 !py-[17px]">
              College applications <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
