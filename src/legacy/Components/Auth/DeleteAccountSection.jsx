import React from "react";

const DeleteAccountSection = ({ handleDeleteUser }) => {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold">Delete</h3>
      <p className="text-sm text-gray-500">
        Allows you to <b>permanently</b> delete your account
      </p>
      <hr className="h-px my-6 bg-gray-500 border-0" />
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
        <div className="text-center">
          <svg
            className="text-gray-400 w-12 h-12 mb-3 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="mb-4 text-gray-500 p-2">
            Are you sure you want to delete this account? This action is{" "}
            <b>NOT</b> reversible
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handleDeleteUser}
              className="w-full py-2 px-4 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Yes, <b>DELETE</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountSection;
