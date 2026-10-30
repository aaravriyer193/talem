import {
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
  TrashIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import HeroBackdrop from '../../components/talem/HeroBackdrop';

import {
  FaPlusCircle, FaArrowRight
} from 'react-icons/fa';

import { LuPanelTopClose, LuPanelBottomClose } from "react-icons/lu";
import searchnone from '../Images/searchnone.svg'

import { Helmet } from 'react-helmet';

import React, { useEffect, useState } from 'react';

import ECItem from '../Components/Extracurricular/ECItem';
import '../index.css';

export default function Extracurriculars(props) {
  let [dropState, setDropState] = useState({
    settingState: false,
    gradeState: false,
    environmentState: false,
    companyState: false,
    durationState: false,
    teamIndividualState: false,
    skillLevelState: false,
    locationState: false,
    activityCategoryState: false,
    generalFilterState: false,
    programmingState: false,
    engineeringState: false,
    mathScienceState: false,
    businessSocialState: false,
    humanityArtState: false,
  });

  const [showBanner, setShowBanner] = useState(true);
  const [showBookmarked, setShowBookmark] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if (data !== null) setShowBanner(JSON.parse(data));

    const bookmarkedData = window.localStorage.getItem('BOOKMARKED_ITEMS_LIST');
    if (bookmarkedData !== null) setBookmarkedItems(JSON.parse(bookmarkedData));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  }, [showBanner]);

  useEffect(() => {
    window.localStorage.setItem(
      'BOOKMARKED_ITEMS_LIST',
      JSON.stringify([]),
    );
  }, [bookmarkedItems]);

  function handleBookmark(ec) {
    // Check if the item is already bookmarked
    const isBookmarked = bookmarkedItems.some((item) => item.id === ec.id);

    if (isBookmarked) {
      // Item is already bookmarked, remove it
      const updatedItems = bookmarkedItems.filter((item) => item.id !== ec.id);
      setBookmarkedItems(updatedItems);
    } else {
      // Item is not bookmarked, add it
      const updatedItems = [...bookmarkedItems, ec];
      setBookmarkedItems(updatedItems);
    }

    console.log(bookmarkedItems);
  }

  function handleBookmarkVal() {
    setShowBookmark((prevValue) => !prevValue);
  }

  function changeAllDropdownState(bool) {
    const updatedDropState = Object.fromEntries(
      Object.entries(dropState).map(([key]) => [key, bool]),
    );

    setDropState(updatedDropState);
  }

  let gradeItems = [
    {
      id: 'allgrades',
      text: 'All Grades',
      tooltip: 'Search for activites for All Grades',
    },
    {
      id: 'grade9',
      text: 'Freshman',
      tooltip: 'Search for activites ONLY for Freshman',
    },
    {
      id: 'grade10',
      text: 'Sophomore',
      tooltip: 'Search for activites ONLY for Sophomores',
    },
    {
      id: 'grade11',
      text: 'Junior',
      tooltip: 'Search for activites ONLY for Juniors',
    },
    {
      id: 'grade12',
      text: 'Senior',
      tooltip: 'Search for activites ONLY for Seniors',
    },
  ];

  let companyItems = [
    { id: 'nonprofit', text: 'Nonprofit Organization' },
    { id: 'businesscompany', text: 'Business Enterprise' },
    { id: 'governmentagency', text: 'Government Agency' },
    { id: 'educationalinstitution', text: 'Educational Institution' },
    { id: 'academicprogram', text: 'Academic Program' },
  ];

  let durationItems = [
    { id: 'shortterm', text: 'Short-Term Committments' },
    { id: 'longterm', text: 'Long-Term Committments' },
  ];

  let teamIndividualItems = [
    { id: 'teamandindividual', text: 'Both Individual + Team' },
    { id: 'individualbased', text: 'Individual/Solo Activites Only' },
    { id: 'teambased', text: 'Team Based Activites Only' },
  ];

  let skillLevelItems = [
    { id: 'allskillevels', text: 'All Skill Levels' },
    { id: 'beginnerfriendly', text: 'Beginner-Friendly' },
    { id: 'intermediatelevel', text: 'Intermediate' },
    { id: 'advancedlevel', text: 'Advanced' },
  ];

  let locationItems = [
    { id: 'global', text: 'Global/Worldwide' },
    { id: 'eastcoast', text: 'East Coast (USA)' },
    { id: 'westcoast', text: 'West Coast (USA)' },
    { id: 'midwest', text: 'MidWest (USA)' },
    { id: 'allusa', text: 'Only USA' },
  ];

  let programmingItems = [
    { id: 'cybersecurity', text: 'Cybersecurity' },
    { id: 'softwaredev', text: 'Software Development' },
    { id: 'machinelearning', text: 'Machine Learning/AI' },
    { id: 'competitiveprogramming', text: 'Competitive Programming' },
  ];

  let engineeringItems = [
    { id: 'mechengineering', text: 'Mechanical Engineering' },
    { id: 'electricalengineering', text: 'Electrical Engineering' },
    { id: 'aeroengineering', text: 'Aerospace Engineering' },
  ];

  let activityCategoryItems = [
    { id: 'communityservice', text: 'Community Service' },
    { id: 'research', text: 'Academic Research' },
    { id: 'competition', text: 'Competition' },
    { id: 'club', text: 'Club' },
    { id: 'program', text: 'Pre-College Program' },
  ];

  let mathScienceItems = [
    { id: 'astronomy', text: 'Astronomy' },
    { id: 'biology', text: 'Biology' },
    { id: 'chemistry', text: 'Chemistry' },
    { id: 'physics', text: 'Physics' },
    { id: 'environmentalscience', text: 'Environmental Science' },
    { id: 'mathematics', text: 'Mathematics' },
    { id: 'medicine', text: 'Medicine' },
  ];

  let businessSocialItems = [
    { id: 'business', text: 'Business' },
    { id: 'economics', text: 'Economics' },
    { id: 'marketing', text: 'Marketing/Advertising' },
    { id: 'entrepreneurship', text: 'Entrepreneurship' },
    { id: 'leadership', text: 'Leadership' },
    { id: 'globalgovernment', text: 'Global Government' },
    { id: 'law', text: 'Law' },
    { id: 'politics', text: 'Politics' },
    { id: 'history', text: 'History' },
  ];

  let humanitiesArtItems = [
    { id: 'philosophy', text: 'Philosophy' },
    { id: 'literature', text: 'Literature and Language' },
    { id: 'film', text: 'Film and Video Production' },
    { id: 'music', text: 'Music' },
    { id: 'drama', text: 'Theatre and Drama' },
    { id: 'writing', text: 'Writing' },
    { id: 'foreign', text: 'Foreign Languages' },
    { id: 'photography', text: 'Photography' },
    { id: 'debate', text: 'Debate' },
    { id: 'art', text: 'Art/Design' },
  ];

  let generalItems = [
    { id: 'allsubjects', text: 'All Subjects' },
    { id: 'allstem', text: 'All STEM' },
    { id: 'allengineering', text: 'All Engineering' },
    { id: 'allprogramming', text: 'All Programming' },
    { id: 'allmathscience', text: 'All Math + Science' },
  ];

  const getTagsWithTrueValue = (allFilters) => {
    return Object.values(allFilters)
      .filter((obj) => obj.value === true)
      .map((obj) => obj.tag);
  };

  const FinancialAidPopup = () => {
    return (
      <div className="flex items-center flex-col font-outfit bg-red-100">
        <div className="flex-col bg-gradient-to-r gap-y-2 w-full from-indigo-500 to-purple-500 text-white px-8 py-8 rounded-lg shadow-lg shadow-purple-500/50 transform transition hover:scale-[1.01] flex items-center">
          <p className="text-4xl mr-4">Enjoying Talem so far?</p>
          <p className="text-lg mr-4 text-center">
            We have a ton of new features planned for the coming weeks and months. Everything from resources for scholarships and internships 
            to accessing college programs to <i>free</i> 1-1 help from successful college students. However, we could not have done all of this 
            without <b>your</b> help. Talem depends on feedback from users like you to help us grow and improve our site.
          </p>
          <a href="https://tally.so/r/wvYJZ4" target='_blank' className="flex items-center">
            <span className="text-lg font-semibold text-yellow-400 hover:text-yellow-300 transition-colors">
              Give Us Feedback
            </span>
            <FaArrowRight className="ml-2 text-yellow-400 hover:text-yellow-300 transition-colors" />
          </a>
        </div>
      </div>
    );
  };

  const tagsArray = getTagsWithTrueValue(props.allFilters);

  function handleGrade(name) {
    setDropState((prevArray) => {
      return {
        ...prevArray,
        [name]: !prevArray[name],
      };
    });
  }

  return (
    <>
      <Helmet>
        <html lang='en'></html>
        <title>Extracurriculars and Internships made Easy - Talem</title>
        <meta charSet='utf-8'/>
        <meta name="description" content="Explore hundreds of high-quality highschool extracurricular and internship opportunities. Sort with over 50+ unique filters in our free & massive database."/>
        <link rel="canonical" href="https://talem.org/extracurriculars" />
      </Helmet>
      <div className="font-outfit">
        <section className="px-3 pt-3 sm:px-4 sm:pt-4">
          <div className="relative isolate overflow-hidden rounded-[28px] border border-line bg-sand-200">
            <HeroBackdrop />
            <div className="relative mx-auto flex max-w-[1180px] flex-col items-center px-5 pb-10 pt-12 text-center sm:px-10 sm:pb-12 sm:pt-16">
              <h1 className="t-display text-[clamp(2.9rem,7vw,5.5rem)] text-ink">
                Extracurriculars <span className="text-accent">made easy.</span>
              </h1>
              <p className="t-lead mt-5 max-w-[560px]">
                Search hundreds of free, high-quality opportunities and narrow them down with 50+ filters.
              </p>

              <div className="mt-8 flex w-full max-w-[760px] items-center gap-2 text-left sm:gap-3">
                <label htmlFor="default-search" className="sr-only">Search</label>
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-3" aria-hidden="true" />
                  <input
                    type="search"
                    id="default-search"
                    onChange={props.searchChange}
                    className="t-input !py-4 !pl-[52px] text-[16px] shadow-[0_18px_40px_-30px_rgba(60,45,20,0.6)]"
                    placeholder="Search activities (e.g. Robotics)"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={handleBookmarkVal}
                  aria-pressed={showBookmarked}
                  className={`relative flex h-[58px] shrink-0 items-center gap-2 rounded-full border px-4 text-[15px] transition-colors sm:px-5 ${showBookmarked ? 'border-ink bg-ink text-sand-100' : 'border-line-2 bg-sand-100 text-ink hover:border-ink/30'}`}>
                  <BookmarkIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="hidden sm:inline">Saved</span>
                  <span className={`grid h-6 min-w-6 place-items-center rounded-full px-1.5 text-[12px] ${showBookmarked ? 'bg-sand-100 text-ink' : 'bg-accent text-white'}`}>
                    {bookmarkedItems.length}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1280px] px-3 pb-10 pt-6 sm:px-4 lg:px-6">

            <button
              type="button"
              onClick={() => setShowMobileFilters((value) => !value)}
              aria-expanded={showMobileFilters}
              className="mb-4 flex w-full items-center justify-between rounded-full border border-line-2 bg-sand-100 px-5 py-3 text-[15px] text-ink md:hidden">
              <span className="flex items-center gap-2">
                <AdjustmentsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                Filters
                {tagsArray.length > 0 && (
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1.5 text-[11px] text-white">{tagsArray.length}</span>
                )}
              </span>
              <span className="text-ink-3">{showMobileFilters ? 'Hide' : 'Show'}</span>
            </button>

            {/* Filter Content Area*/}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[270px_minmax(0,1fr)] lg:grid-cols-[290px_minmax(0,1fr)] h-max">

              {/* Column Span 1 items */}

              {/* Button Settings Filters */}
              <aside className={`${showMobileFilters ? 'block' : 'hidden'} md:block space-y-3 md:sticky md:top-[96px] md:max-h-[calc(100vh-112px)] md:overflow-y-auto md:pb-6 ec-sidebar`}>

                <div className="ec-panel">
                  <div className="filter filter-settings">
                    <div
                      className="filter-title"
                      onClick={() => handleGrade('settingState')}>
                      Settings
                      <AdjustmentsHorizontalIcon className="dropdown-main" />
                    </div>

                    {dropState.settingState && (
                      <>
                        <div className="mt-1 flex flex-col gap-1 pb-1">
                          <button
                            className="ec-setting-btn"
                            onClick={() => changeAllDropdownState(false)}>
                            Close All Filters{' '}
                            <XCircleIcon className="dropdown-main" />
                          </button>
                          <button
                            className="ec-setting-btn"
                            onClick={() => changeAllDropdownState(true)}>
                            Open All Filters{' '}
                            <LuPanelBottomClose className="dropdown-main" />
                          </button>
                          <button
                            className="ec-setting-btn"
                            onClick={props.resetValues}>
                            Clear All Filters{' '}
                            <TrashIcon className="dropdown-main" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="ec-panel">
                  
                  <div className='grid w-full grid-cols-1 gap-2 min-[480px]:grid-cols-2 md:grid-cols-1'>
                    {/* Grade Filters */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('gradeState')}>
                        Grade Level
                        {dropState.gradeState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.gradeState && (
                        <div className="pt-1">
                          {gradeItems.map((item) => {
                            return (
                              <div className="w-full group relative">
                                <div className="flex items-center py-1.5">
                                <input
                                  id={item.id}
                                  name={item.id}
                                  type="checkbox"
                                  onChange={() => props.filterChange(item.id)}
                                  checked={props.checkVal[item.id]}
                                  className="filterinputec"
                                />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                                <div className="pointer-events-none overflow-x-auto text-xs absolute -right-1 top-0 w-[40%] text-center opacity-0 transition-opacity group-hover:opacity-100 rounded-lg bg-ink px-2 py-1 text-sand-100">
                                  {item.tooltip}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Environment Filters */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('environmentState')}>
                        Activity Format
                        {dropState.environmentState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.environmentState && (
                        <div className="pt-1">
                          <div className="w-full">
                            <div className="flex items-center py-1.5">
                              <input
                                id="inperson"
                                type="checkbox"
                                onChange={() => props.filterChange('inperson')}
                                checked={props.checkVal['inperson']}
                                className="filterinputec"
                              />
                              <label
                                htmlFor="inperson"
                                className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                In-Person
                              </label>
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex items-center py-1.5">
                              <input
                                id="remote"
                                type="checkbox"
                                onChange={() => props.filterChange('remote')}
                                checked={props.checkVal['remote']}
                                className="filterinputec"
                              />
                              <label
                                htmlFor="remote"
                                className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                Remote
                              </label>
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="flex items-center py-1.5">
                              <input
                                id="hybrid"
                                type="checkbox"
                                onChange={() => props.filterChange('hybrid')}
                                checked={props.checkVal['hybrid']}
                                className="filterinputec"
                              />
                              <label
                                htmlFor="hybrid"
                                className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                Hybrid
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='grid w-full grid-cols-1 gap-2 min-[480px]:grid-cols-2 md:grid-cols-1'>
                    {/* Company Type Filters */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('companyState')}>
                        Activity Type
                        {dropState.companyState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.companyState && (
                        <div className="pt-1">
                          {companyItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    type="checkbox"
                                    value=""
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Duration Filters */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('durationState')}>
                        Activity Committment
                        {dropState.durationState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.durationState && (
                        <div className="pt-1">
                          {durationItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='grid w-full grid-cols-1 gap-2 min-[480px]:grid-cols-2 md:grid-cols-1'>
                    {/* Solo/Team Filters */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('teamIndividualState')}>
                        Solo vs. Team-Based Activites
                        {dropState.teamIndividualState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.teamIndividualState && (
                        <div className="pt-1">
                          {teamIndividualItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Skill Level Filters */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('skillLevelState')}>
                        Skill Level
                        {dropState.skillLevelState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.skillLevelState && (
                        <div className="pt-1">
                          {skillLevelItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='grid w-full grid-cols-1 gap-2 min-[480px]:grid-cols-2 md:grid-cols-1'>
                    {/* Location Filters */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('locationState')}>
                        Activity/EC Location
                        {dropState.locationState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.locationState && (
                        <div className="pt-1">
                          {locationItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Category Type Filters */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('activityCategoryState')}>
                        Activity Category
                        {dropState.activityCategoryState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.activityCategoryState && (
                        <div className="pt-1">
                          {activityCategoryItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subject Filters*/}
                <div className="ec-panel">

                  <div className='grid w-full grid-cols-1 gap-2 min-[480px]:grid-cols-2 md:grid-cols-1'>
                    {/* General Filters (All STEM)*/}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('generalFilterState')}>
                        General Filters
                        {dropState.generalFilterState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.generalFilterState && (
                        <div className="pt-1">
                          {generalItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    name={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>


                    {/* Programming/Tech Filters*/}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('programmingState')}>
                        Programming, Tech
                        {dropState.programmingState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.programmingState && (
                        <div className="pt-1">
                          {programmingItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    name={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='grid w-full grid-cols-1 gap-2 min-[480px]:grid-cols-2 md:grid-cols-1'>
                  {/* Engineering Filters*/}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('engineeringState')}>
                        Engineering, Design
                        {dropState.engineeringState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.engineeringState && (
                        <div className="pt-1">
                          {engineeringItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    name={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Math/Science Filters*/}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('mathScienceState')}>
                        Mathematics, Science
                        {dropState.mathScienceState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.mathScienceState && (
                        <div className="pt-1">
                          {mathScienceItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    name={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='grid w-full grid-cols-1 gap-2 min-[480px]:grid-cols-2 md:grid-cols-1'>
                    {/* Business/Social */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('businessSocialState')}>
                        Business, Social Studies
                        {dropState.businessSocialState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.businessSocialState && (
                        <div className="pt-1">
                          {businessSocialItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    name={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Humanities/Art */}
                    <div className="filter">
                      <div
                        className="filter-title"
                        onClick={() => handleGrade('humanityArtState')}>
                        Humanities, Art
                        {dropState.humanityArtState ? (
                          <LuPanelTopClose className="dropdown-main" />
                        ) : (
                          <LuPanelBottomClose className="dropdown-main" />
                        )}
                      </div>

                      {dropState.humanityArtState && (
                        <div className="pt-1">
                          {humanitiesArtItems.map((item) => {
                            return (
                              <div className="w-full">
                                <div className="flex items-center py-1.5">
                                  <input
                                    id={item.id}
                                    name={item.id}
                                    type="checkbox"
                                    onChange={() => props.filterChange(item.id)}
                                    checked={props.checkVal[item.id]}
                                    className="filterinputec"
                                  />
                                  <label
                                    htmlFor={item.id}
                                    className="ml-2.5 cursor-pointer text-[14.5px] text-ink-2">
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                </div>

              </aside>

              {/* Results column */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                  <p className="text-[14px] text-ink-3">
                    {showBookmarked
                      ? `Showing ${bookmarkedItems.length} saved ${bookmarkedItems.length === 1 ? 'activity' : 'activities'}`
                      : props.loadingVal ? 'Booting up the database…' : `About ${props.ecArray.length} results`}
                  </p>
                  {showBookmarked && (
                    <button type="button" onClick={() => setShowBookmark(false)} className="t-link text-[14px]">
                      Back to all results
                    </button>
                  )}
                </div>

                {/* Show Tags */}
                {tagsArray.length > 0 &&
                  <div className="flex flex-wrap gap-2 pt-4">
                    {tagsArray.map((tag) => {
                      return (
                        <button
                          type="button"
                          key={tag}
                          onClick={() => props.removeTag(tag)}
                          className="t-chip t-chip-accent transition-colors hover:bg-accent hover:text-white">
                          {tag}
                          <XMarkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      );
                    })}
                    <button type="button" onClick={props.resetValues} className="t-chip transition-colors hover:border-ink/30">
                      Clear all
                    </button>
                  </div>
                }

                {showBookmarked && bookmarkedItems.length === 0 && (
                  <div className="t-card mt-6 flex flex-col items-center gap-3 px-6 py-16 text-center">
                    <BookmarkIcon className="h-8 w-8 text-accent" aria-hidden="true" />
                    <p className="text-[22px] tracking-[-0.02em] text-ink">You don't have any saved activities yet.</p>
                    <p className="text-[15px] text-ink-3">Open an activity and press the bookmark icon to save it here.</p>
                    <button type="button" onClick={() => setShowBookmark(false)} className="t-btn-ink mt-3">
                      Browse activities
                    </button>
                  </div>
                )}

                {/* Actual EC Components */}
                <div className="flex flex-col gap-3 pt-4">
                  {/* Main EC holder */}

                  {props.ecArray.length === 0 ? (
                    <>
                      {
                      props.loadingVal &&
                        <>
                          <div className='flex flex-col gap-3'>
                            {[...Array(5)].map((_, index) => (
                              <div className="t-card animate-pulse p-5 sm:p-6" key={index}>
                                <div className="flex items-center gap-3">
                                  <div className="h-9 w-9 rounded-full bg-ink/10" />
                                  <div className="h-3 w-40 rounded-full bg-ink/10" />
                                </div>
                                <div className="mt-4 h-5 w-2/5 rounded-full bg-ink/10" />
                                <div className="mt-3 h-3 w-full rounded-full bg-ink/[0.07]" />
                                <div className="mt-2 h-3 w-4/5 rounded-full bg-ink/[0.07]" />
                              </div>
                            ))}
                          </div>
                        </>
                      }

                      {
                        !props.loadingVal && 
                        <>
                          <div className="t-card flex flex-col items-center gap-3 px-6 py-16 text-center">
                            <img src={searchnone} alt="" className="w-full max-w-[280px] opacity-80" />
                            <p className="text-[22px] tracking-[-0.02em] text-ink">We couldn't find what you're looking for.</p>
                            <p className="text-[15px] text-ink-3">Try a different search or clear your filters.</p>
                            <button type="button" onClick={props.resetValues} className="t-btn-ink mt-3">Clear filters</button>
                          </div>
                        </>
                      }
                    </>
                  ) : (
                    (showBookmarked ? bookmarkedItems : props.ecArray).map((ec, index) => (
                      <React.Fragment key={ec.id}>
                        <ECItem
                          ec={ec}
                          handleBookmark={handleBookmark}
                          bookmarkedItems={bookmarkedItems}
                        />
                        {/* {props.loadingVal ? <></> : (index + 1) % 40 === 0 && <FinancialAidPopup/>} */}
                      </React.Fragment>
                    ))
                  )}

                </div>
              </div>

            </div>
        </div>
      </div>
    </>
  );
}
