import React from 'react';
import { Helmet } from "react-helmet";
import Blog from '../../assets/blog.svg?react'
import Award from '../../assets/award.svg?react'
import GraduationCap from '../../assets/graduation-cap.svg?react'
import Footer from './Footer';

const QuickItem = ({ title, desc, SVG, cta, href }) => {
  return (
    <div className="relative max-w-sm bg-blue-50 py-6 px-24 rounded-xl text-left pl-7">
      <div className="absolute top-6 left-7">
        <SVG />
      </div>

      <div className="mt-11">
        <p className="font-bold">{title}</p>
        <p className="mt-3 text-gray-500 font-medium">{desc}</p>

        <a
          href={href}
          class="inline-flex items-center mt-4 text-sm text-blue-500 font-medium gap-x-2 hover:underline">
          <span>{cta}</span>
        </a>
      </div>
    </div>
  );
};
const Error = ({ http_code, error_title, error_msg }) => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Error! - Talem</title>
        </Helmet>
        <div className="grid min-h-full bg-white px-6 py-24 sm:py-32 lg:px-8">
          {' '}
          <div className="text-center flex flex-col gap-y-4 items-center justify-center font-outfit">
              <h1 className="text-9xl font-black text-gray-200">{http_code}</h1>

              <p className="five-title font-semibold tracking-tight text-gray-900">This Page Doesn't exist.</p>

              <p className="text-gray-500 w-full">Are you sure this is the right link?</p>

              <div className="flex gap-x-2">
                  <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 transition300scale px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                      >
                      Find Extracurriculars
                  </a>
                  <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 transition300scale px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
                      >
                      Explore College Applications
                  </a>
              </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error;
