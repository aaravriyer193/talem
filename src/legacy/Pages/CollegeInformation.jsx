import React from 'react';
import { useEffect, useState } from 'react';

import Footer from '../Components/common/Footer';

const CollegeInformation = () => {
  const apiKeyTest = 'wwTLebbLUR6WjfBJ2y32Qup2CGbyE5B6cflClwZw';

  const [collegeData, setCollegeData] = useState([]);
  const [currentInput, setCurrentInput] = useState("")

  const collegeSamples = [
    'University of Pennsylvania',
    'Harvard',
    'Princeton',
    'Georgia Tech',
    'MIT',
    'University of Virginia',
    'UCLA',
    'UC Berkeley',
    'Yale',
  ];

  function fetchCollegeData(college) {
    // setCurrentInput("")
    const url = 
    `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKeyTest}&school.name=${college}&fields=id,school.name,latest.student.size,2022.admissions.sat_scores`;

    fetch(url)
      .then((response) => response.json()) // this will parse the JSON response
      .then((data) => {
        console.log(data); // to see the raw data we're dealing w/
      })
      .catch((error) => console.log(error)); // handle any errors
  }

  function handleInputChange(event) {
    console.log(event.target.value)
    setCurrentInput(event.target.value)
  }

  return (
    <>
      <div className="font-outfit max-w-[70rem] mx-auto flex flex-col justify-center items-center pb-20">
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="six-title font-medium tracking-tight text-center">
            Find Important <br />{' '}
            <span className="main-gradient">College Information</span>
          </h1>
          <p className="max-w-xl text-xl text-center text-slate-600">
            Find all the college information you need - from rankings to SAT
            scores to admission statistics.
          </p>
          <div className="flex flex-col items-center space-y-4 max-w-[40rem]">
            <div class="relative w-full">
              <input
                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                type="search"
                value={currentInput}
                onChange={handleInputChange}
                placeholder="Enter a College (Ex: University of Pennsylvania)"
                
              />
              <button 
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none"
                onClick={() => fetchCollegeData(currentInput)}
              >

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center text-blue-600">
              {collegeSamples.map((college, index) => {
                return (
                  <h3 className=" px-4 py-1 bg-blue-300 text-sm border-2 border-blue-600 rounded-md shadow-md">
                    {college}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CollegeInformation;
