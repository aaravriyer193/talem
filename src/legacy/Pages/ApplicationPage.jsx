import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import applicationsData from '../Data/applications';
import Footer from '../Components/common/Footer';
import HeroBackdrop from '../../components/talem/HeroBackdrop';
import SpecularLink from '../../components/talem/SpecularLink';

const SUBMIT_APPLICATION = 'https://tally.so/r/w72BXz';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'academics', label: 'Academics' },
  { id: 'scores', label: 'AP scores' },
  { id: 'activities', label: 'Activities' },
  { id: 'awards', label: 'Awards & letters' },
  { id: 'decisions', label: 'Decisions' },
];

// Decision text is free-form ("Accepted OOS", "Accepted with 40k merit…").
function decisionTone(decision) {
  const text = decision.toLowerCase();
  if (text.startsWith('accepted') || text.startsWith('admitted') || text.includes('committed')) return 'accepted';
  if (text.startsWith('rejected') || text.startsWith('denied')) return 'rejected';
  if (text.startsWith('waitlist') || text.startsWith('deferred')) return 'pending';
  return 'neutral';
}

const TONES = {
  accepted: 'border-[#9cc7a8] bg-[#dfeadb] text-[#24573a]',
  rejected: 'border-[#e0b2a6] bg-[#f1ddd5] text-[#8a3424]',
  pending: 'border-[#e3c98f] bg-[#f3e6c6] text-[#7a5a12]',
  neutral: 'border-line-2 bg-sand-100 text-ink-2',
};

function Section({ id, title, aside, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-10 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        <div>
          <h2 className="t-h2 !text-[clamp(1.75rem,3vw,2.25rem)] text-ink">{title}</h2>
          {aside && <div className="mt-3 text-[14px] leading-[1.55] text-ink-3">{aside}</div>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

function StatTile({ value, label }) {
  return (
    <div className="t-card flex flex-col gap-1.5 !rounded-[18px] px-5 py-4">
      <span className="t-h3 text-[clamp(1.6rem,3vw,2.1rem)] text-ink">{value}</span>
      <span className="text-[13px] text-ink-3">{label}</span>
    </div>
  );
}

function NumberedList({ items }) {
  return (
    <ol className="border-t border-line">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="grid grid-cols-[40px_minmax(0,1fr)] gap-3 border-b border-line py-3.5">
          <span className="t-index pt-0.5">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-[15.5px] leading-[1.55] text-ink">{item}</span>
        </li>
      ))}
    </ol>
  );
}

const ApplicationPage = () => {
  const { applicationid } = useParams();
  const index = Number.parseInt(applicationid, 10);
  const application = applicationsData[index];
  const next = (index + 1) % applicationsData.length;
  const previous = (index - 1 + applicationsData.length) % applicationsData.length;

  if (!application) {
    return (
      <div className="font-outfit">
        <section className="mx-auto flex max-w-[640px] flex-col items-center px-4 py-24 text-center">
          <h1 className="t-display text-[clamp(2.4rem,6vw,3.5rem)] text-ink">We couldn't find this application.</h1>
          <p className="t-lead mt-4">It may have been removed, or the link is mistyped.</p>
          <Link to="/applications" className="t-btn-ink mt-8">Browse all applications</Link>
        </section>
        <Footer />
      </div>
    );
  }

  const { demographics, academics, standardizedTesting: testing } = application;
  const overview = [
    { label: 'Intended major', value: demographics.intendedMajor },
    { label: 'Gender', value: demographics.gender },
    { label: 'Ethnicity', value: demographics.raceEthnicity },
    { label: 'Location', value: demographics.residence },
    { label: 'Household income', value: demographics.incomeBracket ? `$${Number(demographics.incomeBracket).toLocaleString('en-US')}` : null },
    { label: 'Type of school', value: demographics.typeOfSchool },
    { label: 'Hooks', value: demographics.hooks },
  ].filter((row) => row.value);

  return (
    <>
      <Helmet>
        <html lang='en'></html>
        <title>View an {application.seo} Admit's Application - Talem</title>
        <meta charSet='utf-8'/>
        <meta name="description" content={`View the college application of a student admitted to ${application.seo}. Explore their demographics, test scores, extracurriculars, awards and recommendation letters.`}/>
        <link rel="canonical" href={`https://talem.org/applications/${applicationid}`} />
      </Helmet>

      <div className="font-outfit">
        <section className="px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-sand-200">
            <HeroBackdrop />
            <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-5 pb-10 pt-10 text-center sm:px-10 sm:pb-12 sm:pt-14">
              <Link to="/applications" className="t-chip transition-colors hover:border-ink/30">
                <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" /> All applications
              </Link>
              <h1 className="t-display mt-6 max-w-[900px] text-[clamp(2.4rem,5.6vw,4.5rem)] text-ink">{application.title}</h1>
              <p className="t-lead mt-5">
                Intended major: <span className="text-accent">{demographics.intendedMajor}</span>
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <SpecularLink href={`/applications/${next}`}>
                  Next application <span aria-hidden="true">→</span>
                </SpecularLink>
                <a href={SUBMIT_APPLICATION} target="_blank" rel="noreferrer" className="t-btn-ghost">
                  Submit yours <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <nav aria-label="Application sections" className="sticky top-[84px] z-30 mx-auto mt-4 max-w-[1180px] px-3 sm:top-[92px] sm:px-6">
          <div className="flex gap-1.5 overflow-x-auto rounded-full border border-line bg-sand-100/90 p-1.5 backdrop-blur-md [scrollbar-width:none]">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="shrink-0 rounded-full px-4 py-2 text-[14px] text-ink-2 transition-colors hover:bg-ink hover:text-sand-100"
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="mx-auto max-w-[1180px] px-4 pt-6 sm:px-6">
          <Section id="overview" title="Overview" aside="Who this applicant is and where they applied from.">
            <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {overview.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-line py-3.5">
                  <dt className="text-[14px] text-ink-3">{row.label}</dt>
                  <dd className="text-right text-[15.5px] text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section
            id="academics"
            title="Academics"
            aside="AP: college-level courses and exams. DE: dual enrollment, college courses taken in high school. IB: International Baccalaureate."
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <StatTile value={academics.gpa} label="GPA (W/UW)" />
              <StatTile value={academics.rank ? `#${academics.rank}` : 'None'} label="Class rank" />
              <StatTile value={academics.honorsAPCollegeClasses || 'N/A'} label="Honors / AP / college classes" />
              {testing.satScore ? (
                <StatTile value={testing.satScore} label="SAT score" />
              ) : (
                <StatTile value={testing.actScore || 'N/A'} label="ACT score" />
              )}
            </div>
            {academics.seniorYearCourseLoad?.length > 0 && (
              <div className="mt-8">
                <p className="t-caps">Senior year courseload</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {academics.seniorYearCourseLoad.map((course) => (
                    <span key={course} className="t-chip !whitespace-normal !rounded-[10px] !px-3.5 !py-1.5 !text-[13.5px]">{course}</span>
                  ))}
                </div>
              </div>
            )}
          </Section>

          <Section id="scores" title="AP scores" aside="5 usually earns college credit, 3–4 may, depending on the college.">
            {testing.apScores?.length ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {testing.apScores.map((score) => (
                  <div
                    key={score.subject}
                    className={`flex flex-col gap-1 rounded-[18px] border px-5 py-4 ${score.score >= 5 ? 'border-accent/30 bg-accent/[0.07]' : 'border-line bg-sand-200'}`}
                  >
                    <span className={`t-h3 text-[28px] ${score.score >= 5 ? 'text-accent' : 'text-ink'}`}>{score.score}</span>
                    <span className="text-[13.5px] leading-[1.35] text-ink-2">AP {score.subject}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[15px] text-ink-3">This applicant didn't share AP scores.</p>
            )}
          </Section>

          <Section id="activities" title="Activities" aside="In the order listed on the application. Numbers in brackets are the grades they took part.">
            <NumberedList items={application.extracurriculars} />
          </Section>

          <Section id="awards" title="Awards & letters">
            <div className="grid gap-10 xl:grid-cols-2">
              <div>
                <p className="t-caps">Awards & honors</p>
                <div className="mt-3">
                  {application.awardsHonors?.length ? (
                    <NumberedList items={application.awardsHonors} />
                  ) : (
                    <p className="text-[15px] text-ink-3">No awards listed.</p>
                  )}
                </div>
              </div>
              <div>
                <p className="t-caps">Letters of recommendation</p>
                <div className="mt-3 flex flex-col gap-3">
                  {(application.lettersOfRecommendation ?? []).map((letter) => (
                    <div key={letter.subject} className="t-card !rounded-[18px] p-5">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="t-h3 text-[19px] text-ink">{letter.subject}</span>
                        <span className="text-[14px] tabular-nums text-ink-2">{letter.rating}/10</span>
                      </div>
                      <div className="mt-3 h-1 rounded-full bg-ink/10">
                        <div className="h-full rounded-full bg-accent" style={{ width: `${letter.rating * 10}%` }} />
                      </div>
                      {letter.relationship && (
                        <p className="mt-3 text-[14.5px] leading-[1.55] text-ink-2">“{letter.relationship}”</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {application.essays && (
              <div className="mt-10">
                <p className="t-caps">Essays</p>
                <dl className="mt-3 grid gap-3 md:grid-cols-2">
                  {Object.entries(application.essays).map(([kind, summary]) => (
                    <div key={kind} className="t-card !rounded-[18px] p-5">
                      <dt className="t-h3 text-[19px] text-ink">{kind === 'personalStatement' ? 'Personal statement' : kind === 'supplementals' ? 'Supplementals' : kind}</dt>
                      <dd className="mt-2 text-[14.5px] leading-[1.6] text-ink-2">{summary}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </Section>

          <Section id="decisions" title="Decisions" aside="IS = in state, OOS = out of state.">
            <div className="flex flex-col gap-8">
              {Object.entries(application.decisions ?? {}).map(([round, decisions]) => (
                <div key={round}>
                  <p className="t-caps">{round}</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {Object.entries(decisions).map(([school, decision]) => (
                      <li key={school} className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-sand-100/70 px-4 py-3">
                        <span className="min-w-0 text-[15.5px] text-ink">{school}</span>
                        <span className={`shrink-0 rounded-full border px-3 py-1 text-[12.5px] ${TONES[decisionTone(decision)]}`}>
                          {decision}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {application.withdrawn?.length > 0 && (
                <div>
                  <p className="t-caps">Withdrawn</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {application.withdrawn.map((college) => (
                      <span key={college} className="t-chip !whitespace-normal !rounded-[10px]">{college}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Section>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              to={`/applications/${previous}`}
              className="group t-card flex flex-col gap-1 p-5 transition-colors hover:border-line-2 hover:bg-sand-100"
            >
              <span className="flex items-center gap-1.5 text-[13px] text-ink-3"><ArrowLeftIcon className="h-3.5 w-3.5" /> Previous</span>
              <span className="t-h3 text-[19px] text-ink group-hover:text-accent">{applicationsData[previous].title}</span>
            </Link>
            <Link
              to={`/applications/${next}`}
              className="group t-card flex flex-col items-end gap-1 p-5 text-right transition-colors hover:border-line-2 hover:bg-sand-100"
            >
              <span className="flex items-center gap-1.5 text-[13px] text-ink-3">Next <ArrowRightIcon className="h-3.5 w-3.5" /></span>
              <span className="t-h3 text-[19px] text-ink group-hover:text-accent">{applicationsData[next].title}</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplicationPage;
