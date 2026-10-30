import React, { useEffect, useState } from "react";
import { DEFAULT_IMAGE_LINK } from "../common/config";
import { useLocation } from "react-router-dom";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../firebase";
import ProfileInfoHeader from "../Components/Profile/InfoHeader";
import FavBlogGrid from "../Components/Profile/FavBlogGrid";
import Error from "../Components/common/Error";
const Profile = () => {

  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const [error, setError] = useState("")
  const [user, setUser] = useState({});
  const location = useLocation();

  // Get a specific query parameter
  const email = new URLSearchParams(location.search).get('email');
  console.log(email)

  useEffect(() => {
    if (!email) {
      setError("no-exists");
      return;
    }

    const getUserData = async () => {
      try {
        // Reference the collection 'users'
        const usersRef = collection(db, "users");
    
        // Create a query to find the document where the 'email' field matches the provided email
        const q = query(usersRef, where("email", "==", email));
    
        // Fetch the documents that match the query
        const querySnapshot = await getDocs(q);
    
        if (!querySnapshot.empty) {
          // Assuming the email is unique and there's only one match
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
          });
        } else {
          // No matching documents found
          setError("no-exists");
        }
      } catch (err) {
        if (err.code === 'permission-denied') {
          setError("permission-denied");
        } else {
          setError("problem-fetching-document");
        }
      }
    };
    

    getUserData();
  }, [email]);

  const toggleBio = () => {
    setIsBioExpanded(!isBioExpanded);
  };

  const bioText = user?.bio || "No bio";
  const truncatedBio = bioText.slice(0, 30);
  const favouriteBlogCount = user?.favouriteBlog?.length || 0; // Default to 0 if user.favouriteBlog is undefined

  // UI error handling
  
  switch (error) {
    case "permission-denied":
      return (
        <Error 
          http_code="403" 
          error_title="Permission denied" 
          error_msg="Sorry, you need to be logged in for this feature. Please navigate to /auth" 
        />
      );
    case "no-exists":
      return (
        <Error 
          http_code="404" 
          error_title="Profile not found" 
          error_msg="This email was not found within our systems. Please double check for typos and try again!" 
        />
      );
    case "problem-fetching-document":
      return (
        <Error 
          http_code="500"
          error_title="There was an issue"
          error_msg="There was an issue with the database/system. Please try again or contact the Talem developement team."
        />
      )
  }
  

  return (
    <div className="text-left">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-24 lg:mt-4">
        <div className="p-8 lg:p-4">
          <div className="flex -mb-2">
            <div className="mr-7 lg:mr-10 lg:mt-0 mt-2">
              <img
                src={user.photoURL || DEFAULT_IMAGE_LINK}
                className={`${
                  isBioExpanded && "lg:hidden"
                } rounded-full w-36 h-36 lg:w-44 lg:h-44`}
                alt="Profile"
              />
            </div>
            <div className="mt-3">
              <h1 className="text-2xl font-bold mt-8 lg:mt-0">{user.name}</h1>
              <a
                href={`mailto:${email}`}
                className="cursor-pointer flex items-center justify-end lg:hidden bg-gray-100 px-4 py-0.5 rounded-full font-medium w-full mt-1"
              >
                <svg
                  fill="#000000"
                  height="17px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 60 60"
                  xmlSpace="preserve"
                  className="ml-2 mr-2"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689 c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01 c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z"></path>{" "}
                  </g>
                </svg>
                <span>Contact</span>
              </a>

              <p
                className={`hidden lg:flex text-gray-400  ${
                  isBioExpanded && "lg:flex-col"
                }`}
              >
                {isBioExpanded ? bioText : truncatedBio}
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={toggleBio}
                >
                  {isBioExpanded ? " Show less" : "... (Show more)"}
                </span>
              </p>

              <div
                className={`hidden lg:block ${isBioExpanded && "lg:hidden"}`}
              >
                <ProfileInfoHeader
                  user={user}
                  favouriteBlogCount={favouriteBlogCount}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <ProfileInfoHeader
            user={user}
            favouriteBlogCount={favouriteBlogCount}
          />
          <div className="flex items-center justify-between border ml-7 mr-7 py-4 rounded-2xl mt-1">
            <div className="flex items-center">
              <div
                className={`relative flex justify-center items-center w-[55px] h-[55px] ml-5 ${
                  isBioExpanded && "hidden"
                }`}
              >
                <svg
                  className="absolute"
                  height="55px"
                  fill="#EBEDFF"
                  viewBox="0 0 64 64"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                  }}
                  stroke="#EBEDFF"
                >
                  <g id="SVGRepo_iconCarrier">
                    <g transform="matrix(1,0,0,1,-576,-320)">
                      <rect
                        id="Icons"
                        x="0"
                        y="0"
                        width="1280"
                        height="800"
                        style={{ fill: "none" }}
                      ></rect>
                      <g id="Icons1">
                        <g
                          id="circle-filled"
                          transform="matrix(1.70002,0,0,1.70002,-316.778,-246.387)"
                        >
                          <circle cx="543.992" cy="352" r="14.13"></circle>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <svg
                  className="w-[25px] h-[25px] z-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 21C4 17.134 7.13401 14 11 14C11.3395 14 11.6734 14.0242 12 14.0709M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM12.5898 21L14.6148 20.595C14.7914 20.5597 14.8797 20.542 14.962 20.5097C15.0351 20.4811 15.1045 20.4439 15.1689 20.399C15.2414 20.3484 15.3051 20.2848 15.4324 20.1574L19.5898 16C20.1421 15.4477 20.1421 14.5523 19.5898 14C19.0376 13.4477 18.1421 13.4477 17.5898 14L13.4324 18.1574C13.3051 18.2848 13.2414 18.3484 13.1908 18.421C13.1459 18.4853 13.1088 18.5548 13.0801 18.6279C13.0478 18.7102 13.0302 18.7985 12.9948 18.975L12.5898 21Z"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>

              <p
                className={`ml-2 text-lg font-light text-black ${
                  isBioExpanded && "p-6"
                }`}
              >
                {isBioExpanded ? bioText : truncatedBio}
                <span
                  className={`${
                    isBioExpanded ? "cursor-pointer text-blue-400" : ""
                  }`}
                  onClick={isBioExpanded ? toggleBio : undefined}
                >
                  {isBioExpanded ? " Show less" : "..."}
                </span>
              </p>
            </div>

            <svg
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`cursor-pointer mr-5 ${isBioExpanded && "hidden"}`}
              onClick={toggleBio}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.9394 12.0001L8.46973 6.53039L9.53039 5.46973L16.0607 12.0001L9.53039 18.5304L8.46973 17.4697L13.9394 12.0001Z"
                  fill="#080341"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="mt-10 mr-14">
          <a
            href={`mailto:${email}`}
            className={`hidden lg:flex cursor-pointer items-center bg-gradient-to-r from-blue-400 to-cyan-500 duration-500 hover:scale-105 text-white font-semibold px-4 py-2 rounded-xl ${
              isBioExpanded && "lg:hidden"
            }`}
          >
            <svg
              className="mr-2"
              fill="#ffff"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 324.143 324.143"
              xmlSpace="preserve"
              stroke="#ffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M191.418,94.884c-10.724,0-20.921,3.421-29.346,9.747c-8.425-6.326-18.623-9.747-29.346-9.747 c-13.088,0-25.393,5.097-34.648,14.351c-19.105,19.105-19.105,50.193,0,69.299l58.689,58.689 c1.406,1.406,3.314,2.196,5.303,2.196c1.989,0,3.897-0.79,5.303-2.196l58.69-58.69c9.255-9.256,14.352-21.561,14.353-34.648 c0-13.089-5.097-25.394-14.352-34.649C216.811,99.98,204.506,94.884,191.418,94.884z M215.457,167.925l-53.386,53.388 l-53.386-53.387c-13.257-13.257-13.257-34.827,0-48.084c6.422-6.422,14.96-9.958,24.042-9.958c9.082,0,17.621,3.537,24.042,9.959 c1.406,1.406,3.314,2.196,5.303,2.196c1.989,0,3.897-0.79,5.303-2.196c6.422-6.423,14.961-9.959,24.043-9.959 c9.081,0,17.619,3.536,24.04,9.958c6.422,6.421,9.959,14.96,9.959,24.041C225.416,152.965,221.88,161.503,215.457,167.925z"></path>{" "}
                      <path d="M162.071,0C73.163,0,0.83,72.332,0.83,161.241c0,37.076,12.788,73.004,36.1,101.677 c-6.65,16.756-17.789,31.245-32.401,42.089c-2.238,1.66-3.37,4.424-2.941,7.177c0.429,2.754,2.349,5.042,4.986,5.942 c11.683,3.992,23.856,6.017,36.182,6.017c19.572,0,38.698-5.093,55.569-14.763c20.158,8.696,41.584,13.104,63.747,13.104 c88.909,0,161.241-72.333,161.241-161.242S250.98,0,162.071,0z M162.071,307.483c-21.32,0-41.881-4.492-61.111-13.351 c-2.291-1.057-4.959-0.889-7.101,0.443c-15.313,9.529-32.985,14.566-51.105,14.566c-6.053,0-12.065-0.564-17.981-1.684 c12.52-12.12,22.014-26.95,27.787-43.547c0.879-2.525,0.346-5.328-1.397-7.354C28.378,230.07,15.83,196.22,15.83,161.241 C15.83,80.604,81.434,15,162.071,15s146.241,65.604,146.241,146.241C308.313,241.88,242.709,307.483,162.071,307.483z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <span>Contact me</span>
          </a>
        </div>
      </div>
      <hr className="hidden lg:flex h-px my-4 bg-gray-600 border-0 ml-20 mr-20" />

      <div className="ml-4 lg:ml-24 font-bold text-xl mb-2">Loved Blogs</div>

      <FavBlogGrid favouriteBlog={user?.favouriteBlog} />
    </div>
  );
};

export default Profile;
