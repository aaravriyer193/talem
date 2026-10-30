import React, { useEffect, useState } from "react";
import axios from "axios";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

const Modal = ({ showModal, setShowModal, field }) => {
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryOptions, setCountryOptions] = useState([]);

  const handleUpdate = async (field, value) => {
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, { [field]: value });
    toast.success("Profile updated successfully");
  };

  useEffect(() => {
    const handleGetAllCountries = async () => {
      if (field === "country") {
        try {
          const response = await axios.get(
            "https://restcountries.com/v3.1/all?fields=name,flag,cca3"
          );
          const data = response.data; // No parentheses here
          const sortedCountries = data.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          );

          setCountryOptions(sortedCountries);
        } catch (error) {
          console.error(error);
        }
      }
    };

    handleGetAllCountries();
  }, [field]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (field === "country") {
      handleUpdate(field, selectedCountry);
    } else {
      handleUpdate(field, inputValue);
    }
    setInputValue("");
    setSelectedCountry("");
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-75"
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">
              Update {field}
            </h3>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4">
              {field === "country" ? (
                <div className="col-span-2">
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select your country
                  </label>
                  <select
                    id="country"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  >
                    <option value="">Select a country</option>
                    {countryOptions.map((country) => (
                      <option key={country.cca3} value={country.flag}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="col-span-2">
                  <label
                    htmlFor="input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {`Update ${field}`}
                  </label>
                  <input
                    type="text"
                    id="input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder={`Type new ${field}`}
                    required
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <svg
                className="mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
