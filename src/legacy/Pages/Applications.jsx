import React, { useMemo, useState } from 'react';
import applicationsData from '../Data/applications';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Footer from '../Components/common/Footer';
import HeroBackdrop from '../../components/talem/HeroBackdrop';
import SpecularLink from '../../components/talem/SpecularLink';

const SUBMIT_APPLICATION = 'https://tally.so/r/w72BXz';

const FILTERS = [
  {
    id: 'schoolType',
    label: 'School type',
    options: [
      { value: 'ivy', label: 'Ivy League' },
      { value: 'top-public', label: 'Top school' },
      { value: 'lac', label: 'Liberal arts college' },
    ],
  },
  {
    id: 'gender',
    label: 'Gender',
    options: [
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' },
      { value: 'Nonbinary', label: 'Other / nonbinary' },
    ],
  },
  {
    id: 'satScore',
    label: 'SAT score',
    options: [
      { value: '1500+', label: '1500+' },
      { value: '1400-1500', label: '1400–1500' },
      { value: 'below1400', label: 'Below 1400' },
    ],
  },
  {
    id: 'major',
    label: 'Intended major',
    options: [
      'Computer Science',
      'Physics',
      'Communications',
      'Business',
      'Political Science',
      'Biology',
      'Environmental Science',
    ].map((major) => ({ value: major, label: major })).concat({ value: 'Pre-med', label: 'Pre-medicine' }),
  },
];

function matchesSat(application, range) {
  const sat = application.standardizedTesting.satScore;
  if (range === '1500+') return sat >= 1500;
  if (range === '1400-1500') return sat >= 1400 && sat < 1500;
  if (range === 'below1400') return sat < 1400;
  return true;
}

function Stat({ value, label }) {
  return (
    <div className="flex flex-col gap-1 px-4 py-3">
      <dd className="t-h3 text-[22px] text-ink">{value}</dd>
      <dt className="text-[12.5px] text-ink-3">{label}</dt>
    </div>
  );
}

const Applications = () => {
  const [filters, setFilters] = useState({ schoolType: '', gender: '', satScore: '', major: '' });

  const applications = useMemo(
    () =>
      applicationsData.filter(
        (application) =>
          (!filters.schoolType || application.schooltype === filters.schoolType) &&
          (!filters.gender || application.demographics.gender === filters.gender) &&
          (!filters.satScore || matchesSat(application, filters.satScore)) &&
          (!filters.major || application.demographics.intendedMajor.toLowerCase() === filters.major.toLowerCase()),
      ),
    [filters],
  );

  const activeFilters = Object.values(filters).filter(Boolean).length;

  return (
    <>
      <Helmet>
        <html lang='en'></html>
        <title>Real, High-Quality College Applications - Talem</title>
        <meta charSet='utf-8'/>
        <meta name="description" content="Want to see the college application of students who go to Ivy Leagues or students who got into Top 20 schools? Explore Talem's massive, FREE database of college applications."/>
        <link rel="canonical" href="https://talem.org/applications" />
      </Helmet>

      <div className="font-outfit">
        <section className="px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-sand-200">
            <HeroBackdrop />
            <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-5 pb-10 pt-12 text-center sm:px-10 sm:pb-12 sm:pt-16">
              <span className="t-chip t-chip-accent"><span className="t-dot" />{applicationsData.length} real applications</span>
              <h1 className="t-display mt-6 text-[clamp(2.7rem,6.5vw,5.25rem)] text-ink">
                Real college <span className="text-accent">applications.</span>
              </h1>
              <p className="t-lead mt-5 max-w-[600px]">
                See the grades, scores, activities and decisions behind real admissions, from Ivy League acceptances to top public schools.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <SpecularLink href={SUBMIT_APPLICATION} newTab>
                  Submit your application <span aria-hidden="true">↗</span>
                </SpecularLink>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-3 pt-8 sm:px-6 sm:pt-10">
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {FILTERS.map((filter) => (
              <div key={filter.id} className="relative">
                <label htmlFor={`filter-${filter.id}`} className="sr-only">{filter.label}</label>
                <select
                  id={`filter-${filter.id}`}
                  value={filters[filter.id]}
                  onChange={(event) => setFilters((current) => ({ ...current, [filter.id]: event.target.value }))}
                  className={`w-full cursor-pointer appearance-none rounded-full border py-3 pl-5 pr-10 text-[14.5px] outline-none transition-colors focus:border-accent/60 focus:ring-4 focus:ring-accent/10 ${filters[filter.id] ? 'border-accent/40 bg-accent/[0.08] text-accent' : 'border-line-2 bg-sand-100 text-ink'}`}
                >
                  <option value="">{filter.label}: any</option>
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" aria-hidden="true" />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 border-b border-line pb-4">
            <p className="text-[14px] text-ink-3">
              Showing {applications.length} of {applicationsData.length} applications
            </p>
            {activeFilters > 0 && (
              <button
                type="button"
                onClick={() => setFilters({ schoolType: '', gender: '', satScore: '', major: '' })}
                className="t-link text-[14px]"
              >
                Clear filters
              </button>
            )}
          </div>

          {applications.length === 0 ? (
            <div className="t-card mt-6 flex flex-col items-center gap-3 px-6 py-16 text-center">
              <p className="t-h3 text-[24px] text-ink">No applications match these filters.</p>
              <p className="text-[15px] text-ink-3">Try removing a filter to see more.</p>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
              {applications.map((application) => {
                const accepted = application.acceptedColleges ?? [];
                const { satScore, actScore } = application.standardizedTesting;
                return (
                  <Link
                    key={application.applicationNumber}
                    to={`/applications/${application.applicationNumber}`}
                    className="group t-card flex flex-col p-5 transition-[border-color,background-color] duration-200 hover:border-line-2 hover:bg-sand-100 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h2 className="t-h3 text-[clamp(1.25rem,2.2vw,1.55rem)] text-ink transition-colors group-hover:text-accent">
                          {application.title}
                        </h2>
                        <p className="mt-1.5 text-[14px] text-ink-3">
                          {application.demographics.intendedMajor} · {application.demographics.gender} · {application.demographics.raceEthnicity} · {application.demographics.residence}
                        </p>
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-2 text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-sand-100">
                        <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>

                    <dl className="mt-5 grid grid-cols-2 divide-line overflow-hidden rounded-2xl border border-line bg-sand-50/50 sm:grid-cols-4 sm:divide-x">
                      <Stat value={application.academics.gpa} label="GPA" />
                      <Stat value={satScore || actScore || '—'} label={satScore ? 'SAT' : 'ACT'} />
                      <Stat value={application.extracurriculars.length} label="Activities" />
                      <Stat value={application.awardsHonors?.length ?? 0} label="Awards" />
                    </dl>

                    <div className="mt-5">
                      <p className="t-caps">Accepted to</p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {accepted.slice(0, 5).map((college) => (
                          <span key={college} className="t-chip !whitespace-normal !rounded-[10px]">{college}</span>
                        ))}
                        {accepted.length > 5 && (
                          <span className="t-chip t-chip-accent">+{accepted.length - 5} more</span>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 border-t border-line pt-4">
                      <p className="t-caps">Top activities</p>
                      <ul className="mt-2.5 space-y-1.5 text-[14px] leading-[1.5] text-ink-2">
                        {application.extracurriculars.slice(0, 3).map((activity) => (
                          <li key={activity} className="flex gap-2">
                            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ink-4" aria-hidden="true" />
                            <span className="line-clamp-1">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
