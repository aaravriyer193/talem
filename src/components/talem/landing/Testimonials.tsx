import SectionHeading from "../SectionHeading";

const QUOTES = [
  {
    title: "A game-changer",
    body: "Talem helped me a discover a ton of competitions and extracurriculars that I didn't even know about like the Conrad Challenge or Envirothon. I even started my own club in school from an extracurricular I saw here. This is an amazing website which has helped me and my friends a lot!",
    name: "Lilly",
    role: "Junior from New Jersey",
  },
  {
    title: "Best site ever",
    body: "Talem is one of the most helpful sites. It helped me find Computer Science Competitions like USACO which are really interesting to me especially because I love Computers! I also started doing Debate after finding Talem and now I'm preparing for Mathematics Competitions like HMMT and AMC 10, all of which I wouldn't have learned of if not for this website.",
    name: "Advik",
    role: "Sophomore from Texas",
  },
  {
    title: "Saved my college apps!",
    body: "I can not stress how helpful this site has been to me! I found some last minute activites and competitions I could put on my college application before I applied which helped me a ton! Kudos to the Talem Team for putting this amazing site together! Their college programs feature also helped me find a few programs at my favorite unis that I did over the summer.",
    name: "Ananya",
    role: "Senior from California",
  },
  {
    title: "Very helpful to me",
    body: "Talem showed me a lot of extracurriculars I didn't know existed. Through this website, I found a passion for Model UN and and joined my school's debate team as well. I feel like I have a real purpose now and this is all thanks to Talem!!",
    name: "Mira",
    role: "Freshman from Colorado",
  },
  {
    title: "Better than anything else",
    body: "I found this website from a friend and did not expect much of it. I thought it was another highschooler run regular nonprofit, but I was wrong. Talem is a great website that I am sure has helped not only me, but also many other highschoolers in the process as well. The website is built very well and the user experience is really nice as well (:",
    name: "Chanming",
    role: "Junior Highschooler from Taiwan",
  },
  {
    title: "Helpful to all students",
    body: "Here in India there are not many resources for us students. This website has helped me a lot in finding extracurriculars and competitions that I can do regardless of where I live. It has provided a lot of help to international students and since I want to study in the USA, Talem has helped me a lot with finding opportunities.",
    name: "Rohan",
    role: "Class 11 from India",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeading
        title={
          <>
            It's not <span className="text-accent">just us.</span>
          </>
        }
        action={
          <a href="https://discord.gg/DVfUGkJD6W" target="_blank" rel="noreferrer" className="t-btn-ghost">
            Read all reviews <span aria-hidden="true">→</span>
          </a>
        }
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {QUOTES.map((quote, index) => (
          <figure key={quote.name} className="t-card flex flex-col p-6 sm:p-7">
            <span className="t-index">0{index + 1}</span>
            <blockquote className="mt-4 flex-1">
              <p className="text-[21px] leading-[1.15] tracking-[-0.025em] text-ink">“{quote.title}”</p>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-ink-2">{quote.body}</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4 text-[14px]">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/10 text-accent">{quote.name[0]}</span>
              <span>
                <span className="block text-ink">{quote.name}</span>
                <span className="block text-ink-3">{quote.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="t-caps mt-6 text-center">Testimonials were taken from Talem's Discord server</p>
    </section>
  );
}
