import React, { useState, useEffect } from "react";
import ModalWrapper from "../../Wrappers/ModalWrapper";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleAfterSignIn = ({ isModalOpen, googleUser, setIsModalOpen }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [bio, setBio] = useState("");
  const [countryOptions, setCountryOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,flag,cca3"
        );
        const data = response.data;
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
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

  const handleGoogleAfterLogin = async () => {
    if (!googleUser) {
      toast.error("User not authenticated.");
      return;
    }

    const docRef = doc(db, "users", googleUser.uid);
    const docSnap = await getDoc(docRef);
    const userData = {
      name: googleUser.displayName || "No name",
      photoURL: googleUser.photoURL || "",
      joined: handleMonthYear(),
      country: selectedCountry,
      email: googleUser.email
    };

    console.log(selectedCountry)

    if (selectedCountry) {
      userData.country = selectedCountry;
    }

    if (docSnap.exists()) {
      await setDoc(docRef, userData, { merge: true });
    } else {
      userData.country = selectedCountry;
      userData.bio = bio; // or use a form to get bio
      await setDoc(docRef, userData);
    }

    setIsModalOpen(false); // Close modal after completing
    navigate("/");
  };

  return (
    <ModalWrapper
      isOpen={isModalOpen}
      onClose={() => {
        if (googleUser) {
          handleGoogleAfterLogin(); // Ensure document is updated even if modal is closed
        } else {
          setIsModalOpen(false);
        }
      }}
    >
      <label>Your bio:</label>
      <input
        className="border"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <h2 className="text-lg font-semibold mb-4">Select your country</h2>
      <select
        name="country"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="text-black border-none bg-gray-100 pr-4 pl-4 py-2.5 text-sm rounded-lg w-full outline-none mb-4"
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

      <button
        onClick={handleGoogleAfterLogin}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
      >
        Submit
      </button>

      <button
        onClick={() => {
          setIsModalOpen(false);
          if (googleUser) {
            handleGoogleAfterLogin(); // Handle closing the modal without selection
          }
        }}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
      >
        Cancel
      </button>
    </ModalWrapper>
  );
};

export default GoogleAfterSignIn;
