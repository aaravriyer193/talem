import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase.js";
import axios from "axios";
import { GoogleProvider } from "../firebase.js";
import UserSvg from "../assets/user.svg?react"; // Import SVG as a React component
import EmailSvg from "../assets/email.svg?react"; // Import SVG as a React component
import PasswordSvg from "../assets/pwd.svg?react"; // Import SVG as a React component
import BioSvg from "../assets/bio.svg?react"; // Import SVG as a React component
import { toast } from "react-toastify";
import GoogleAfterSignIn from "../Components/Auth/GoogleAfterSignIn";
import googleLogo from "../assets/auth/google.svg";
import xLogo from "../assets/auth/x.svg";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  profilePhoto: "",
  password: "",
  confirmPassword: "",
  bio: "",
  country: "",
};

const Auth = () => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const [countryOptions, setCountryOptions] = useState([]);
  const [googleUser, setGoogleUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState("");

  const toggleSignUp = () => {
    setSignUp((prev) => !prev);
  };

  const {
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
    bio,
    country,
  } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flag,cca3"
        );

        const data = response.data; // No parentheses here
        // Sort the array by country name in ascending order
        const sortedCountries = data.sort(
          (a, b) => a.name.common.localeCompare(b.name.common) // Ensure you are accessing the right property
        );

        // Set the sorted countries
        setCountryOptions(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleMonthYear = () => {
    const now = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    return `${month} ${year}`;
  };

  const handleUserPwd = async (
    e,
    email,
    password,
    firstName,
    lastName,
    confirmPassword,
    bio,
    country,
    signUp
  ) => {
    e.preventDefault();

    try {
      if (!signUp) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        if (password !== confirmPassword) {
          throw new Error("Passwords do not match");
        }

        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await setDoc(doc(db, "users", user.uid), {
          name: `${firstName} ${lastName}`,
          bio,
          country,
          photoURL: "",
          joined: handleMonthYear(),
          email: user.email
        });

        await updateProfile(user, {
          displayName: `${firstName} ${lastName}`,
        });
      }

      window.location.href = "/";
    } catch (error) {
      toast.error(`Firebase error: ${error.message}`);
    }
  };

  const handleGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, GoogleProvider);
      const userUID = response.user.uid;
      const docRef = doc(db, "users", userUID);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        // Open modal to get user country input
        setIsModalOpen(true);
        setGoogleUser(response.user);
      } else {
        window.location.href = "/"
      }
    } catch (error) {
      console.error("Firebase error:", error);
      toast.error(`Firebase error: ${error.message}`);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side for the logo and welcome message */}
      <div className="hidden xl:flex lg:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-tr-xl rounded-br-xl">
        <img
          src="/favicon.ico"
          className="w-10 h-10 m-2 xl:m-4"
          alt="Company Logo"
        />
        <div className="flex flex-col justify-center items-start text-white">
          <h2 className="text-5xl font-bold mb-2">Welcome to</h2>
          <h2 className="text-4xl font-black">Talem</h2>
        </div>
      </div>

      {/* Right side for the authentication form */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="p-8">
          <div className="text-right mb-6 w-full">
            {!signUp ? (
              <div className="pt-2">
                <p className="small font-bold text-gray-500">
                  Don’t have an account?{" "}
                  <span
                    className="text-blue-400 cursor-pointer"
                    onClick={toggleSignUp}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            ) : (
              <div className="pt-2">
                <p className="small font-bold text-gray-500">
                  Already have an account?{" "}
                  <span
                    className="text-blue-400 cursor-pointer"
                    onClick={toggleSignUp}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            )}
          </div>
          <div className="text-left mb-8">
            <div className="text-6xl font-bold">
              {!signUp ? "Sign in" : "Sign up"}
            </div>
          </div>
          <form
            className="row"
            onSubmit={(e) =>
              handleUserPwd(
                e,
                email,
                password,
                firstName,
                lastName,
                confirmPassword,
                bio,
                country,
                signUp
              )
            }
          >
            <p className="mb-3 text-left text-sm font-bold">
              Sign in with Open account
            </p>
            <div className="flex">
              <button
                type="button"
                onClick={handleGoogle}
                className="items-center px-12 py-2 border flex rounded-xl gap-1 border-gray-300 hover:shadow transition duration-150"
              >
                <img
                  className="w-6 h-6"
                  src={googleLogo}
                  loading="lazy"
                  alt="google logo"
                />
                <span className="font-bold text-sm">Google</span>
              </button>
              <button
                type="button"
                onClick={() => alert("This feature is coming very soon!")}
                className="ml-2 items-center px-12 py-2 border flex rounded-xl gap-1 border-gray-300 hover:shadow transition duration-150"
              >
                <img
                  className="w-5 h-5"
                  src={xLogo}
                  loading="lazy"
                  alt="twitter logo"
                />
                <span className="font-bold text-sm">Twitter/X</span>
              </button>
            </div>
            <hr className="px-0 my-8 bg-gray-400 border-0" />
            <p className="text-left text-sm font-bold">
              Or continue with email address
            </p>
            <div
              className={`${signUp && "grid"} ${signUp && "gap-4"} ${
                signUp && "grid-cols-2"
              }`}
            >
              {signUp && (
                <>
                  <div className="col-span-1 relative">
                    <input
                      type="text"
                      className="text-black border-none bg-gray-100 pr-4 pl-14 py-2.5 text-sm rounded-lg w-full outline-none"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                    />
                    <UserSvg />
                  </div>
                  <div className="col-span-1 relative">
                    <input
                      type="text"
                      className="text-black border-none bg-gray-100 pr-4 pl-14 py-2.5 text-sm rounded-lg w-full outline-none"
                      placeholder="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                    />
                    <UserSvg />
                  </div>
                </>
              )}
              <div className="col-span-1 relative">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="text-black border-none bg-gray-100 pr-4 pl-14 py-2.5 text-sm rounded-lg w-full outline-none"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                <EmailSvg />
              </div>
              <div className={`col-span-1 relative ${!signUp && "mt-2.5"}`}>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="text-black border-none bg-gray-100 pr-4 pl-14 py-2.5 text-sm rounded-lg w-full outline-none"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <PasswordSvg />
              </div>
              {signUp && (
                <>
                  <div className="col-span-1 relative">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="text-black border-none bg-gray-100 pr-4 pl-14 py-2.5 text-sm rounded-lg w-full outline-none"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                    <PasswordSvg />
                  </div>
                  <div className="col-span-1 relative">
                    <select
                      name="country"
                      value={country}
                      onChange={handleChange}
                      className="text-black border-none bg-gray-100 pr-4 pl-4 py-2.5 text-sm rounded-lg w-full outline-none"
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      {countryOptions.map((option) => (
                        <option key={option.cca3} value={option.flag}>
                          {option.name.common}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-1 relative">
                    <input
                      type="text"
                      placeholder="Enter bio"
                      className="text-black border-none bg-gray-100 pr-4 pl-14 py-2.5 text-sm rounded-lg w-full outline-none"
                      name="bio"
                      value={bio}
                      onChange={handleChange}
                    />
                    <BioSvg />
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-center">
              <button
                className="mt-2 bg-blue-400 text-white text-sm font-semibold py-2.5 rounded-lg w-full mr-px ml-px transition-transform transform hover:scale-105 hover:shadow-lg"
                type="submit"
              >
                {!signUp ? "Start learning!" : "Register account"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <GoogleAfterSignIn isModalOpen={isModalOpen} googleUser={googleUser} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
};

export default Auth;