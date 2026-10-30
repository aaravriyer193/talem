import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import collegeProgramsData from '../Data/collegeProgramsData';
import Footer from '../Components/common/Footer';
import { Helmet } from 'react-helmet';
import { ArrowUpRightIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import CircularGallery from '../../components/reactbits/CircularGallery';
import HeroBackdrop from '../../components/talem/HeroBackdrop';
import SpecularLink from '../../components/talem/SpecularLink';
import { navigateTo } from '../../components/talem/navigate';
import harvardImage from '../assets/colleges/harvard.jpg';
import uvaImage from '../assets/colleges/uva.jpg';
import yaleImage from '../assets/colleges/yale.jpg';
import upennImage from '../assets/colleges/upenn.jpg';
import mitImage from '../assets/colleges/mit.jpg';
import brownImage from '../assets/colleges/brown.jpg';
import uclaImage from '../assets/colleges/ucla.jpg';
import rutgersImage from '../assets/colleges/rutgers.jpg';

const colleges = [
  {
    id: 1,
    slug: 'harvard',
    name: 'Harvard',
    image: harvardImage,
    city: 'Cambridge, Massachusetts',
    academicPrograms: 8,
  },
  {
    id: 2,
    slug: 'university-of-virginia',
    name: 'University of Virginia (UVA)',
    image: uvaImage,
    city: 'Charlottesville, Virginia',
    academicPrograms: 12,
  },
  {
    id: 3,
    slug: 'yale',
    name: 'Yale University',
    image: yaleImage,
    city: 'New Haven, Connecticut',
  },
  {
    id: 4,
    slug: 'upenn',
    name: 'University of Pennsylvania (UPenn)',
    image: upennImage,
    city: 'Philadelphia, Pennsylvania',
  },
  {
    id: 5,
    slug: 'mit',
    name: 'Massachusetts Institute of Technology (MIT)',
    image: mitImage,
    city: 'Cambridge, Massachusetts',
  },
  {
    id: 6,
    slug: 'brown',
    name: 'Brown University',
    image: brownImage,
    city: 'Providence, Rhode Island',
  },
  {
    id: 7,
    slug: 'ucla',
    name: 'University of California, Los Angeles (UCLA)',
    image: uclaImage,
    city: 'Los Angeles, California',
  },
  {
    id: 8,
    slug: 'rutgers',
    name: 'Rutgers University',
    image: rutgersImage,
    city: 'Newark, New Jersey',
  },
  
  
  
];

const galleryItems = colleges.map((college) => ({
    image: college.image,
    text: college.name.replace(/\s*\(.*\)$/, ''),
    alt: college.name,
}));

const ProgramsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [active, setActive] = useState(0);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredColleges = colleges.filter((college) =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function clearSearchQuery() {
        setSearchQuery('');
    }

    const activeCollege = colleges[active % colleges.length];
    const programCount = (slug) => collegeProgramsData[slug]?.programs.length ?? 0;
    const totalPrograms = colleges.reduce((sum, college) => sum + programCount(college.slug), 0);

    return (
        <>
            <Helmet>
                <html lang='en'></html>
                <title>College Programs Made Easy - Talem</title>
                <meta charSet='utf-8'/>
                <meta name="description" content="Find Summer Programs, Pre-college programs, research opportunities, and more with Talem's free & massive online database. Search for your favorite colleges!"/>
                <link rel="canonical" href="https://talem.org/programs" />
            </Helmet>
            <div className="font-outfit">
                <section className="px-3 pt-3 sm:px-4 sm:pt-4">
                    <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-sand-200">
                        <HeroBackdrop />
                        <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-5 pt-12 text-center sm:px-10 sm:pt-16">
                            <span className="t-chip t-chip-accent"><span className="t-dot" />{colleges.length} universities, {totalPrograms} programs</span>
                            <h1 className="t-display mt-6 text-[clamp(2.9rem,7vw,5.5rem)] text-ink">
                                Find the perfect <span className="text-accent">college programs.</span>
                            </h1>
                            <p className="t-lead mt-5 max-w-[560px]">
                                Summer, pre-college and research programs at top universities. Drag the gallery or pick a school below.
                            </p>
                        </div>

                        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
                            <CircularGallery
                                items={galleryItems}
                                bend={2.4}
                                textColor="#0b1220"
                                borderRadius={0.06}
                                font='400 24px "Geist Variable"'
                                itemSize={1}
                                gap={0.22}
                                fadeEdges={0.1}
                                shadow={0.3}
                                scrollEase={0.06}
                                wheelScroll={false}
                                openOnClick={false}
                                onActiveChange={setActive}
                                onItemClick={(item, index) => {
                                    if (index === active % colleges.length) {
                                        navigateTo(`/programs/${colleges[index].slug}`);
                                    }
                                }}
                            />
                        </div>

                        <div className="relative mx-auto flex max-w-[1180px] flex-col items-center gap-5 px-5 pb-10 text-center sm:px-10 sm:pb-12">
                            <div aria-live="polite">
                                <p className="t-caps">Now showing</p>
                                <p className="mt-2 text-[22px] tracking-[-0.025em] text-ink">{activeCollege.name}</p>
                                <p className="text-[14px] text-ink-3">{activeCollege.city} · {programCount(activeCollege.slug)} programs</p>
                            </div>
                            <SpecularLink href={`/programs/${activeCollege.slug}`}>
                                View programs <span aria-hidden="true">→</span>
                            </SpecularLink>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-[1180px] px-4 pt-14 sm:px-6 sm:pt-20">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className="t-h2 text-ink">Browse by school</h2>
                        </div>
                        <div className="relative w-full sm:max-w-[360px]">
                            <label htmlFor="college-search" className="sr-only">Search colleges</label>
                            <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink-3" aria-hidden="true" />
                            <input
                                id="college-search"
                                type="text"
                                placeholder="Search colleges or cities…"
                                value={searchQuery}
                                onChange={handleSearch}
                                className="t-input !py-3 !pl-11 !pr-11 text-[15px]"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    aria-label="Clear search"
                                    onClick={clearSearchQuery}
                                    className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-ink-3 transition-colors hover:bg-ink/5 hover:text-ink"
                                >
                                    <XMarkIcon className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Sets a link to each corresponding uni page based on "SLUG" */}
                    <ul className="mt-8 border-t border-line">
                        {filteredColleges.map((college, index) => (
                            <li key={college.id} className="border-b border-line">
                                <Link
                                    to={`/programs/${college.slug}`}
                                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 transition-colors sm:grid-cols-[48px_72px_1fr_auto_auto] sm:gap-6 sm:py-5"
                                >
                                    <span className="t-index hidden sm:block">{String(index + 1).padStart(2, '0')}</span>
                                    <img
                                        src={college.image}
                                        alt=""
                                        loading="lazy"
                                        width="1200"
                                        height="800"
                                        className="h-12 w-16 rounded-xl object-cover sm:h-14 sm:w-[72px]"
                                    />
                                    <span className="min-w-0">
                                        <span className="block truncate text-[17px] tracking-[-0.015em] text-ink transition-colors group-hover:text-accent sm:text-[19px]">{college.name}</span>
                                        <span className="block truncate text-[13.5px] text-ink-3">{college.city}</span>
                                    </span>
                                    <span className="t-chip hidden sm:inline-flex">{programCount(college.slug)} programs</span>
                                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line-2 text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-sand-100">
                                        <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {filteredColleges.length === 0 && (
                        <p className="py-10 text-center text-[15px] text-ink-3">No colleges match “{searchQuery}”.</p>
                    )}
                    <div className="mt-8 flex justify-center">
                        <span className="t-chip t-chip-accent"><span className="t-dot" />More coming soon</span>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default ProgramsPage
