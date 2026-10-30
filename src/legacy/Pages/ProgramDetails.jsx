import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import collegeProgramsData from '../Data/collegeProgramsData';
import { FaUniversity } from 'react-icons/fa';
import { ArrowUpRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Footer from '../Components/common/Footer';
import HeroBackdrop from '../../components/talem/HeroBackdrop';
import SpecularLink from '../../components/talem/SpecularLink';
import { Helmet } from 'react-helmet';

const CollegeDetailPage = () => {
  const { slug } = useParams();

  const [specificCollegeData, setSpecificCollegeData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [collegeseo, setCollegeseo] = useState('Colleges')

  useEffect(() => {
    const getData = async () => {
      try {
        const collegeData = collegeProgramsData[slug];
        setSpecificCollegeData(collegeData);
        setCollegeseo(collegeData.title)
      } catch (error) {
        console.log("An error occurred: ", error);
      }
    };

    getData();
  }, [slug]);

  const filteredPrograms = specificCollegeData.programs
  ? specificCollegeData.programs.filter(program =>
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) || program.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : [];

  const FinancialAid = () => (
    <div className="t-card relative col-span-full flex flex-col gap-5 overflow-hidden !rounded-[24px] !bg-ink p-6 text-sand-100 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="max-w-[640px]">
        <p className="t-h3 text-[clamp(1.5rem,3vw,2rem)] leading-[1.1] tracking-[-0.03em]">Need financial aid?</p>
        <p className="mt-3 text-[15px] leading-[1.6] text-sand-300/80">
          College programs can be expensive — but most colleges offer financial aid. See what {specificCollegeData.title} offers.
        </p>
      </div>
      <SpecularLink href={specificCollegeData.finaid} tone="sand" newTab className="shrink-0">
        Get financial aid <span aria-hidden="true">↗</span>
      </SpecularLink>
    </div>
  );

  const aidIndex = Math.floor(filteredPrograms.length / 2);

  return (
    <>
      <Helmet>
        <html lang='en'></html>
        <title>Summer Programs & Opportunities for {collegeseo} - Talem</title>
        <meta charSet='utf-8'/>
        <meta name="description" content={`View College programs, Summer programs, research opportunities, and more for highschoolers at ${collegeseo} with Talem's massive college-program database.`}/>
      </Helmet>
      <div className="font-outfit">
        <section className="px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-sand-200">
            <HeroBackdrop />
            <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-5 pb-10 pt-10 text-center sm:px-10 sm:pb-12 sm:pt-14">
              <Link to="/programs" className="t-chip transition-colors hover:border-ink/30">
                <span aria-hidden="true">←</span> All colleges
              </Link>
              <h1 className="t-display mt-6 text-[clamp(2.6rem,6.5vw,5.25rem)] text-ink">
                Programs for <br className="hidden sm:block" />
                <span className="text-accent">{specificCollegeData.title}</span>
              </h1>
              <div className="mt-8 flex w-full max-w-[760px] flex-col items-center gap-3 text-left sm:flex-row">
                <div className="relative flex-1">
                  <label htmlFor="program-search" className="sr-only">Search programs</label>
                  <MagnifyingGlassIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-3" aria-hidden="true" />
                  <input
                    id="program-search"
                    type="text"
                    placeholder={`Search programs at ${specificCollegeData.title ?? 'this college'}…`}
                    className="t-input !pl-[52px]"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
                {specificCollegeData.length !== 0 && (
                  <span className="t-chip t-chip-accent">
                    <span className="t-dot" />
                    {filteredPrograms.length} {filteredPrograms.length === 1 ? 'program' : 'programs'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-3 pt-8 sm:px-6 sm:pt-10">
          {Object.keys(specificCollegeData).length === 0 ? (
            <p className="py-16 text-center text-ink-3">Loading data…</p>
          ) : (
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredPrograms.map((program, index) => (
                <React.Fragment key={program.title}>
                  {index === aidIndex && filteredPrograms.length > 2 && <FinancialAid />}
                  <article className="t-card flex min-w-0 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                        <FaUniversity className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="t-index">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h2 className="mt-5 text-[clamp(1.2rem,2vw,1.4rem)] leading-[1.2] tracking-[-0.02em] text-ink">{program.title}</h2>
                    <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-ink-2 select-text">{program.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {program.tags.map(tag => (
                        <span key={tag} className="t-chip !whitespace-normal !rounded-[10px] !text-[12px]">{tag}</span>
                      ))}
                    </div>
                    <a
                      href={Array.isArray(program.link) ? program.link[0] : program.link}
                      className="mt-5 inline-flex items-center justify-between gap-2 border-t border-line pt-4 text-[14.5px] text-ink transition-colors hover:text-accent"
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Visit site
                      <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </article>
                </React.Fragment>
              ))}
              {filteredPrograms.length > 0 && filteredPrograms.length <= 2 && <FinancialAid />}
            </div>
          )}
          {Object.keys(specificCollegeData).length > 0 && filteredPrograms.length === 0 && (
            <p className="py-16 text-center text-[15px] text-ink-3">No programs match “{searchQuery}”.</p>
          )}

          <div className="t-card mt-10 flex flex-col items-start gap-4 !rounded-[24px] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="t-h3 text-[24px] tracking-[-0.025em] text-ink">Want to explore programs from other colleges?</p>
            </div>
            <SpecularLink href="/programs">
              Explore more <span aria-hidden="true">→</span>
            </SpecularLink>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CollegeDetailPage;
