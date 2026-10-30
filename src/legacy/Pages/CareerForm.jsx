import React from 'react';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import uploadIcon from '../assets/upload.svg';

const FileUpload = () => {
  const [fileInfo, setFileInfo] = useState(null);

  const handleFiles = (files) => {
    if (files.length) {
      const file = files[0];
      const validTypes = [
        'text/csv',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/pdf',
      ];

      if (validTypes.includes(file.type) && file.size <= 10 * 1024 * 1024) {
        // 10MB
        // Set file information
        setFileInfo({
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
          type: file.type,
        });
      } else {
        alert('Please upload a valid file (CSV, DOCX, PDF) up to 10MB.');
        setFileInfo(null);
      }
    }
  };

  const handleChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };



  return (
    <div
      className="w-full relative border-2 border-gray-300 border-dashed rounded-lg p-6"
      id="dropzone"
      onDrop={handleDrop}
      onDragOver={handleDragOver}>
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 z-50"
        onChange={handleChange}
        accept=".csv, .docx, .pdf"
        name='resume'
      />
      <div className="text-center">
        <img
          className="mx-auto h-12 w-12"
          src={uploadIcon}
          alt="upload icon"
        />
        <h3 className="mt-2 text-sm font-medium text-gray-900 cursor-pointer">
          <label className="relative cursor-pointer">
            <span>Drag and drop</span>
            <span className="text-indigo-600"> or browse </span>
            <span>to upload</span>
          </label>
        </h3>
        <p className="mt-1 text-xs text-gray-500">CSV, DOCX, PDF up to 10MB</p>
      </div>
      {fileInfo && (
        <div className="text-center mt-4 bg-slate-100 py-2 rounded-md px-2 relative border-2 border-slate-300">
          <IoClose
            className="absolute top-2 right-2 w-4 h-4 z-50"
            onClick={() => setFileInfo(null)}
          />
          <div className="flex items-center gap-x-2">
            {/* <div className='py-1 px-2 bg-white rounded-md border'>
              <img src={pdficon} alt="PDF Icon" className='w-10 h-10' />
            </div> */}
            <div className="flex flex-col gap-y-1 justify-start">
              <p className="text-sm font-medium text-gray-900">
                {fileInfo.name}
              </p>
              <p className="text-xs text-gray-500 w-full text-start">
                File Size: {fileInfo.size}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CareerForm = () => {
  const [selectedRole, setSelectedRole] = useState("")
  
  function handleRole(event) {
    setSelectedRole(event.target.value)
    console.log(selectedRole)
  }

  return (
    <>
      <div className="pt-20 font-outfit flex flex-col gap-y-10">
        <div className="sm:flex sm:items-start justify-center">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex flex-col gap-y-8 items-center justify-center">
            <h3 className="five-title font-semibold leading-6 text-gray-900">
              Work with us at <span className="main-gradient">Talem!</span>
            </h3>
            <p className="text-lg w-2/3 text-gray-500 text-center">
              Thank you for taking the time to {' '}
              <span className="font-semibold">apply here at Talem. </span>
              We look forward to your application and hearing from you.
            </p>
          </div>
        </div>

        <form
          action="https://usebasin.com/f/a84de2e65a7c"
          method="POST"
          className="max-w-[80rem] mx-auto px-8"
          enctype="multipart/form-data"
          accept-charset="UTF-8"
        >

          <div className="mb-4 grid gap-y-8 md:grid-cols-2 border-t-2 border-stone-300 py-10">
            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">Personal Information</h4>
              <p className="text-slate-500 w-3/4 text-sm">
                Please Fill out the following fields which is just some beginner
                information for us to get to know you/some info about you!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder='e.g. "John Doe"'
                  name="name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder='e.g. "johndoe@gmail.com"'
                  name="email"
                  required
                />
              </div>

              <div className="">
                <label
                  htmlFor="gradeLevel"
                  className="block text-sm font-medium text-gray-700">
                  Current Grade Level?
                </label>
                <select
                  id="gradeLevel"
                  name="gradeLevel"
                  className="mt-1 p-2 w-full border-2 rounded-md text-gray-800"
                  required>
                  <option
                    disabled="disabled"
                    selected="selected"
                    className="text-black">
                    Select your grade level
                  </option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="collegeStudent">College Student</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700">
                  Role Applying For:
                </label>
                <select
                  id="position"
                  name="position"
                  className="mt-1 p-2 w-full border-2 rounded-md text-gray-800"
                  value={selectedRole}
                  onChange={handleRole}
                  required>
                  <option
                    disabled="disabled"
                    selected="selected"
                    className="text-black">
                    Select your intended position
                  </option>
                  <option value="blog-writer">Blog Writer</option>
                  <option value="content-creator">Content Creator</option>
                  <option value="social-media-manager">Social Media Manager</option>
                  <option value="custom">Custom Role</option>
                </select>

              </div>

              {
                selectedRole == "custom" && 
                <div>
                  <label
                    htmlFor="custom-role"
                    className="block text-sm font-medium text-gray-700">
                    Enter a "Custom Role" you'd like to apply for (we can't 100% guaruantee this however!)
                  </label>
                  <input
                    type="text"
                    id="custom-role"
                    className="mt-1 p-2 w-full border-2 rounded-md"
                    placeholder='e.g. Marketing Intern'
                    name="custom-role"
                  />
                </div>
              }


            </div>
          </div>

          <div className="mb-4 grid gap-y-8 md:grid-cols-2 border-t-2 border-stone-300 py-10">
            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">
                Experience/Qualifications
              </h4>
              <p className="text-slate-500 w-3/4 text-sm">
                Please fill out the following questions so we can learn more
                about your experience/qualifications regarding your chosen role!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="why-work"
                  className="block text-sm font-medium text-gray-700">
                  Why do you want to work with us at Talem? Is there anything in
                  specific that made you apply?
                </label>
                <textarea
                  id="why-work"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder="I want to work with Talem because . . ."
                  name="why-work"
                  required></textarea>
              </div>

              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-gray-700">
                  Briefly describe your prior experience with this role. We
                  don't need an essay - simply jot down any
                  stats/accomplishments/awards related to this role.
                </label>
                <textarea
                  id="skills"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder="I'm a good fit for this role because..."
                  name="skills"
                  required></textarea>
              </div>

              <div>
                <label
                  htmlFor="strengths"
                  className="block text-sm font-medium text-gray-700">
                  What would you say are your strengths regarding this role?
                  Could be literally anything.
                </label>
                <textarea
                  id="strengths"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder="My Strengths include . . ."
                  name="strengths"
                  required></textarea>
              </div>

              <div>
                <label
                  htmlFor="tools"
                  className="block text-sm font-medium text-gray-700">
                  What specific skills or tools are you proficient in that are relevant to the role you're applying for?
                  <i className='block text-slate-600'>Please list any software, programming languages, design tools, or other tools you have experience with.</i> 
                </label>
                <textarea
                  id="tools"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder="I'm familiar with . . ."
                  name="tools"
                  required></textarea>
              </div>

              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-medium text-gray-700">
                  Have a programming/design portfolio relevant to this position?
                  Drop it below - we'd love to take a look! <i>(Optional)</i>
                </label>
                <input
                  type="text"
                  id="portfolio"
                  name="portfolio"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder="linktomyportfolio.com"
                />
              </div>
            </div>
          </div>

          <div className="mb-4 grid gap-y-8 md:grid-cols-2 border-t-2 border-stone-300 py-10">
            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">Resume</h4>
              <p className="text-slate-500 w-3/4 text-sm">
                Have a resume? Drop it in. All good if you don't have one
                (although we would love to see one!) <i>(Optional)</i>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <FileUpload />
            </div>
          </div>

          <div className="mb-4 grid gap-y-8 md:grid-cols-2 border-t-2 border-stone-300 py-10">
            <div className="flex flex-col">
              <h4 className="font-semibold text-xl">Miscellaneous Questions</h4>
              <p className="text-slate-500 w-3/4 text-sm">
                Just some random questions we collect for data purposes. You
                don't have to answer these!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              
              <div>
                <label
                  htmlFor="anything-about-you"
                  className="block text-sm font-medium text-gray-700">
                  Is there anything else you'd want us to know about you? Everything is fair game!
                </label>
                <textarea
                  id="anything-about-you"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder="Fun fact: Giraffes are 30 times more likely to get hit by lightning than people"
                  name="anything-about-you"
                  ></textarea>
              </div>

              <div>
                <label
                  htmlFor="about-talem"
                  className="block text-sm font-medium text-gray-700">
                  How did you find out about Talem?
                </label>
                <input
                  type="text"
                  id="about-talem"
                  name="about-talem"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder="I found about talem through . . ."
                />
              </div>

              <div>
                <label
                  htmlFor="reference"
                  className="block text-sm font-medium text-gray-700">
                  Were you referred by someone inside the team? Let us know!
                </label>
                <input
                  type="text"
                  id="reference"
                  name="reference"
                  className="mt-1 p-2 w-full border-2 rounded-md"
                  placeholder="I was referred by . . ."
                />
              </div>

              

              <div className='flex justify-end'>
                <input type="submit" value="Submit Application" className='px-6 py-2 cursor-pointer transition300scale bg-blue-600 rounded-md text-white'/>
              </div>

            </div>


          </div>

        </form>
      </div>
    </>
  );
};

export default CareerForm;
