import {
  FaLaptopCode,
  FaRegEnvelope,
  FaUserTie,
} from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { FaBriefcase, FaFileAlt, FaHeart, FaRocket } from 'react-icons/fa';

import Footer from '../Components/common/Footer';
import reading from '../Images/reading.svg';

import { IoIosArrowDown } from "react-icons/io";

const JoinPage = () => {
  const jobPositions = [
    {
      title: 'Content Creator',
      description:
        "We're looking for someone to help us create 1-2 videos on a weekly basis to post on our social media accounts. You'll have full creative freedom and work with our social media manager to produce and publish content!",
      icon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
      requiredSkills: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Firebase',
      ],
      urgent: false,
      spotsOpen: 3,
      closed: false
    },
    {
      title: 'Blog Writer + Creator',
      description:
        "If you haven't noticed, our blog is a bit empty. We're looking to onboard new blog writers to help us push out highschool-related content! You'll have a ton of creative freedom with this role!",
      icon: <FaRegEnvelope className="w-8 h-8 text-blue-500" />,
      requiredSkills: [
        'Writing',
        'Creativity',
        'Research',
        'SEO',
        'Content Creation',
        'Communication',
      ],
      urgent: true,
      spotsOpen: 2,
      closed: true
    },
    {
      title: 'Social Media Manager',
      description:
        "We need someone to help run our newly made social media accounts! This includes our tiktok and instagram accounts. You'll work with our content creators to publish, post, and manage everything!",
      icon: <FaUserTie className="w-8 h-8 text-blue-500" />,
      requiredSkills: [
        'Marketing Strategy',
        'Social Media',
        'Content Creation',
        'Content Management',
      ],
      urgent: false,
      spotsOpen: 1,
      closed: true
    },
  ];

  const talemPerks = [
    {
      title: 'Resume Boost',
      description:
        "We are a legitimate organization with our website attracting hundreds of users daily. Working with us will provide valuable experience that will look impressive on your college application, resume, and more",
      icon: <FaBriefcase />,
    },
    {
      title: 'Making a Difference',
      description:
        "Our mission is all about helping others and providing free education. With us, you'll work on projects that have a positive impact on the community.",
      icon: <FaHeart />,
    },
    {
      title: 'Rec Letters/Volunteer Hours',
      description:
        "We're more than happy to sign off on any volunteer hours/write up a quick rec letter for you!",
      icon: <FaFileAlt />,
    },
    {
      title: 'Possible Compensation',
      description:
        "While we can't confirm anything at the moment, we do plan on providing small stipends/compensation for the work done here in the future!",
      icon: <FaRocket />,
    },
  ];

  return (
    <>
      <section className="bg-white pb-20 pt-10 font-outfit px-4">

        <div className="max-w-5xl flex flex-col gap-y-4 mx-auto relative">
          <div className="space-y-2 flex flex-col items-center justify-center">
            <h2 className="six-title max-w-[38rem] font-medium tracking-tight text-center">
              Want to help Make Educational Resources{' '}
              <span className="main-gradient">Abundant for All?</span>
            </h2>
            <img src={reading} alt="" className="w-2/3" />

            <div className="flex flex-col justify-center items-center max-w-4xl">
              <h4 className="font-normal three-title w-3/4 tracking-tight">
                We're on a mission to democratize access to educational
                resources around the world.
              </h4>
              <p className="text-xl max-w-2xl text-slate-600 mt-4 w-full">
                Let's be honest - a lot of educational aspects these days feel
                very <b className="font-semibold tracking-tight">"Pay to Win"</b>, right?
                <br />
                <br />
                Now what do I mean by this? Just think about it - those that
                come from more affluent backgrounds are able to get themselves
                on a <b className="font-semibold tracking-tight">"higher level"</b> than those that come from humbler
                backgrounds.
                <br />
                <br />
                Whether it be private SAT tutoring or buying expensive college
                counseling packages, the truth is there and it's kind of bitter:
                <br />
                <br />
                <blockquote class="border-l-4 border-gray-500 italic pl-4 md:pl-8 py-2 mx-4 md:mx-6 max-w-lg">
                  <p class="text-xl font-medium">
                    Money can and <i>often does</i> buy better education
                  </p>
                </blockquote>
                <br />
                <br />
                And there's nothing wrong with that. If you were given resources
                that set you up for success, you would take it. Hell, I would
                take it. Who wouldn't?
                <br />
                <br />
                The issue arises when those who come from poorer backgrounds
                also put just as much, if not more, effort and don't make it as
                far due to the lack of non-paywalled resources out there. There are just <b className="font-semibold tracking-tight">not</b>{' '}
                enough quality resources out there that <i>aren't behind a paywall.</i>
                <br />
                <br />
                Which is why Talem <i>exists.</i> We're trying to provide the
                resources for any highschooler - from anywhere - to succeed.
                Regardless of age, gender, religion, ethnicity, blah blah blah.
                Who cares. If you're passionate about something, you deserve the
                resources to succeed and take your passion far.
                <br />
                <br />
                Now I'm assuming you came to this page because you want to work
                with us. Listed below are the current positions we have open. It
                honestly shouldn't take more than 5~ minutes to apply. We're
                just looking to see whether you are passionate about joining us. 
                We look forward to your application!
                {/* <br />
                <br />
                <span className="text-slate-500">P.S. If you have read this far, the code is "<span className="underline">Education</span>"</span> */}
              </p>
            </div>

            <div className="flex flex-col gap-y-8 justify-center items-center max-w-3xl w-full py-10">
              <div className='space-y-2'>
                <h2 className="six-title max-w-[38rem] font-semibold text-center">
                  Open Positions
                </h2>
                {/* <p className='text-red-800 text-lg text-center'>
                  Application Deadline: <b className="font-semibold tracking-tight">Tuesday, July 2nd</b>
                </p>   */}
              </div>
              <div className="space-y-4">
                {jobPositions.map((job, index) => {
                  return (
                    <div>
                      {
                        job.closed == true ?
                        <div
                          target="_blank"
                          className="flex flex-col gap-y-6 w-full relative duration-300">
                          <div className="border-2 border-red-200 bg-red-50 rounded-xl p-8 flex flex-col gap-y-2">
                            <h2 className="text-xl font-medium">{job.title} <span className="text-red-800">(Closed)</span></h2>
                            <p>{job.description}</p>
                            <h3 className="text-red-500">
                              <span className="font-bold">0</span>{' '}
                              <span className="text-sm">
                                spots open
                              </span>
                            </h3>
                          </div>
                        </div>
                        :
                        <a
                          href="/apply-form"
                          target="_blank"
                          className="flex flex-col gap-y-6 w-full relative cursor-pointer transition transform hover:scale-[1.02] duration-300">
                          <div className="absolute top-4 right-4">
                            <FaExternalLinkSquareAlt className="size-4" />
                          </div>
                          <div className="border-2 border-slate-200 rounded-xl p-8 flex flex-col gap-y-2">
                            <h2 className="text-xl font-medium">{job.title}</h2>
                            <p>{job.description}</p>
                            <h3 className="text-blue-500">
                              <span className="font-bold">{job.spotsOpen}</span>{' '}
                              <span className="text-sm">
                                {job.spotsOpen > 1 ? 'spots open' : 'spot open'}
                              </span>
                            </h3>
                          </div>
                        </a>
                      }
                    </div>
                  )

                })}

                {/* <div
                  target="_blank"
                  className="flex flex-col gap-y-6 w-full relative">
                  <div className="border-2 bg-red-50 text-red-800 border-red-200 rounded-xl p-8 flex flex-col gap-y-2">
                    <h2 className="text-xl font-semibold">Frontend Developer</h2>
                    <p>We're looking for a skilled frontend developer with experience in React and JavaScript to help build and maintain our user interface.</p>
                    <h3 className="">
                      <span className="font-bold">Application Capacity Reached (10)</span>{' '}
                    </h3>
                  </div>
                </div> */}
                
                {/* <a
                  href='/apply-form'
                  target="_blank"
                  className="flex flex-col gap-y-6 w-full relative">
                  <div className="border-2 bg-blue-50 border-blue-200 transition transform hover:scale-[1.02] rounded-xl p-8 flex flex-col gap-y-2 text-blue-800">
                    <div className="absolute top-4 right-4">
                      <FaExternalLinkSquareAlt className="size-4" />
                    </div>
                    <h2 className="text-xl font-semibold">Custom Role</h2>
                    <p>
                      Think you fit better into a role that's not mentioned above? On our application form, choose "custom" in the dropdown and enter a title. We can't guaruantee this will be available, however!
                    </p>
                    <h3 className="">
                      <span className="font-bold">Rolling Applications - Apply anytime</span>{' '}
                    </h3>
                  </div>
                </a> */}

                <a
                  href='/apply-form'
                  target="_blank"
                  className="flex flex-col gap-y-6 w-full relative">
                  <div className="border-2 bg-green-50 border-green-200 transition transform hover:scale-[1.02] rounded-xl p-8 flex flex-col gap-y-2 text-green-800">
                    <div className="absolute top-4 right-4">
                      <FaExternalLinkSquareAlt className="size-4" />
                    </div>
                    <h2 className="text-xl font-semibold">Custom Role <span className="text-green-800">(Open)</span></h2>
                    <p>
                      Our Rolling applications are always open - apply to any job you'd like whether it's one we have or something you see yourself better at. We can't always confirm that these are open due to limited space, however.
                    </p>
                    <h3 className="">
                      <span className="font-bold">Rolling Applications - Apply anytime</span>{' '}
                    </h3>
                  </div>
                </a>

              </div>
            </div>

            <div className="flex flex-col gap-y-8 justify-center items-center max-w-3xl w-full py-10">
              <h2 className="six-title max-w-[38rem] font-semibold text-center">
                Perks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {talemPerks.map((perk, index) => (
                  <div
                    key={index}
                    className="flex items-center p-8 border-2 rounded-lg">
                    {/* <div className="text-3xl text-blue-500 mr-4">
                      {perk.icon}
                    </div> */}
                    <div className="space-y-2">
                      <h3 className="two-title font-medium">{perk.title}</h3>
                      <p>{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                  Questions?{' '}
                  <a
                    href="mailto:talemcompany@gmail.com"
                    className="text-blue-500 hover:underline">
                    Reach out to us
                  </a>
                </div>
            </div>

            <div className="flex flex-col gap-y-8 justify-center items-center w-full py-10 max-w-3xl">
              <h2 className="six-title max-w-[38rem] font-semibold text-center">
                  FAQ
              </h2>
              <div className="space-y-4 w-full">
                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 className="font-medium">When do I know if I'm accepted?</h2>

                    <IoIosArrowDown className='size-4'/>
                  </summary>

                  <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    We'll send you back an email (to the email you used when applying) regarding your status within a weeks time. If you're accepted, 
                    we'll have you sign a quick internship form and proceed from there!
                  </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 className="font-medium">How competitive is this application?</h2>

                    <IoIosArrowDown className='size-4'/>
                  </summary>

                  <p className="mt-4 px-4 leading-relaxed text-gray-700 ">
                    We'll be straightforward: it's kind of competitive. The exact numbers and whatnot we don't have since 
                    people do apply on a rolling basis (if positions are open), but what we do know from past cycles is that 
                    we have had to reject (I hate that word) applicants before. <span className="font-semibold">For reference, our last cycle had 4 open positions 
                    and we had 32 applicants.</span>
                  </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 className="font-medium">Do I get paid?</h2>

                    <IoIosArrowDown className='size-4'/>
                  </summary>

                  <p className="mt-4 px-4 leading-relaxed text-gray-700 ">
                    At the moment, we are not providing compensation to our interns but we do have plans down the road to! Once this 
                    does become a thing, we'll structure it in the form of a stipend for new and current interns. 
                  </p>
                </details>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JoinPage;
