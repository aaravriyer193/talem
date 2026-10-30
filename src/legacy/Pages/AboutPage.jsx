import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../Components/common/Footer';
import HeroBackdrop from '../../components/talem/HeroBackdrop';
import SpecularLink from '../../components/talem/SpecularLink';
import yelLogo from '../../assets/yel-logo.svg';

const ACCESS_FACTS = [
  {
    value: '463 million',
    label: "students don't have access to proper educational resources.",
    source: 'https://www.washingtonpost.com/education/2020/08/27/least-463-million-students-around-world-have-no-access-digital-or-broadcast-lessons-unicef/',
    sourceName: 'The Washington Post',
  },
  {
    value: '244 million',
    label: 'children and young people are out of school around the world.',
    source: 'https://www.unesco.org/gem-report/en/articles/244m-children-wont-start-new-school-year',
    sourceName: 'UNESCO',
  },
];

const IMPACT = [
  { value: '1.2M', label: 'Lifetime page views' },
  { value: '200k', label: 'Lifetime unique users' },
  { value: '300–500', label: 'Daily users on average' },
  { value: '$3,000', label: 'Raised through grants and donations' },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <html lang='en'></html>
        <title>About Talem </title>
        <link rel="canonical" href="https://talem.org/about" />
        <meta charSet='utf-8'/>
        <meta name="description" content={`Our Mission here at Talem is to allow students from anywhere to find extracurriculars and resources for their highschool careers.`}/>
      </Helmet>

      <div className="font-outfit">
        <section className="px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-sand-200">
            <HeroBackdrop />
            <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-5 pb-14 pt-14 text-center sm:px-10 sm:pb-20 sm:pt-20">
              <span className="t-chip t-chip-accent"><span className="t-dot" />Our mission</span>
              <h1 className="t-display mt-6 max-w-[980px] text-[clamp(2.6rem,6.4vw,5.25rem)] text-ink">
                Educational resources, accessible to <span className="text-accent">every student.</span>
              </h1>
              <p className="t-lead mt-6 max-w-[600px]">
                The gap isn't about ambition or talent. It's about access. Talem exists to close it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 pt-20 sm:px-6 sm:pt-28">
          <h2 className="t-h2 text-ink">Consider this.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ACCESS_FACTS.map((fact) => (
              <figure key={fact.value} className="t-card flex flex-col p-6 sm:p-8">
                <p className="t-display text-[clamp(2.6rem,5.5vw,4rem)] text-ink">{fact.value}</p>
                <figcaption className="mt-3 max-w-[380px] text-[17px] leading-[1.5] text-ink-2">{fact.label}</figcaption>
                <a href={fact.source} target="_blank" rel="noreferrer" className="t-link mt-6 w-fit text-[13.5px]">
                  Source: {fact.sourceName} ↗
                </a>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 pt-20 sm:px-6 sm:pt-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
            <h2 className="t-h2 text-ink">
              Wealth shouldn't decide who gets <span className="text-accent">opportunities.</span>
            </h2>
            <div className="flex flex-col gap-5 text-[17px] leading-[1.7] text-ink-2">
              <p>
                Children from wealthier families are <span className="text-ink">three times more likely</span> to take part in
                extracurriculars like music lessons or academic camps than those from low-income households. Students in
                high-poverty schools have less access to advanced courses and activities.
              </p>
              <p>
                Wealthier students often grow up with a planned roadmap to success: private tutors, exclusive research
                opportunities, summer programs. Students from lower-income backgrounds face a different reality. Many don't
                know these opportunities exist, let alone how to reach them, and are left navigating a system that feels
                overwhelming.
              </p>
              <p>
                That's why Talem exists. Our mission is to give <span className="text-ink">every student</span>, regardless of
                background, ethnicity, religion or race, the resources they need to reach their goals. Whether it's the right
                extracurricular, a volunteer opportunity or a summer program, we're building one free place to find
                high-quality opportunities that match your passions.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-4 pt-20 sm:px-6 sm:pt-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="t-h2 text-ink">Our impact since August 2023.</h2>
          </div>
          <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-[22px] border border-line bg-sand-200 lg:grid-cols-4">
            {IMPACT.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2 p-6 sm:p-8 ${index % 2 === 1 ? 'border-l border-line' : ''} ${index >= 2 ? 'border-t border-line lg:border-t-0' : ''} ${index === 2 ? 'lg:border-l' : ''}`}
              >
                <dd className="t-display text-[clamp(2rem,4vw,3rem)] text-ink">{item.value}</dd>
                <dt className="text-[14px] leading-[1.45] text-ink-3">{item.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mx-auto mt-10 max-w-[720px] text-center text-[17px] leading-[1.7] text-ink-2">
            The impact goes beyond numbers. Hundreds of students have reached out to share how Talem helped them, and that's
            what matters most. Our vision is a world where opportunity isn't a privilege but a right for every student.
          </p>
        </section>

        <section className="px-3 pt-20 sm:px-4 sm:pt-28">
          <div className="t-card mx-auto flex max-w-[1180px] flex-col items-center gap-6 !rounded-[28px] px-6 py-12 text-center sm:py-16">
            <img src={yelLogo} alt="Youth Economy Lab" className="h-12 w-auto" />
            <div>
              <h2 className="t-h2 !text-[clamp(1.9rem,3.6vw,2.75rem)] text-ink">Run by the Youth Economy Lab.</h2>
              <p className="t-lead mx-auto mt-4 max-w-[520px]">
                Talem is managed by the Youth Economy Lab, a student-led organization offering free, inclusive opportunities in finance and economics.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <SpecularLink href="https://www.linkedin.com/company/the-youth-economy-lab/" newTab>
                Reach out on LinkedIn <span aria-hidden="true">↗</span>
              </SpecularLink>
              <a href="https://youtheconomylab.com" target="_blank" rel="noreferrer" className="t-btn-ghost">
                youtheconomylab.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
