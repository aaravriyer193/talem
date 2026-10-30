import React from "react";
import { DEFAULT_IMAGE_LINK } from "../../common/config";

const ProfilePictureSection = ({
  photoURL,
  handleFileChange,
  removeProfilePicture,
}) => {
  return (
    <div className="mt-6 flex items-center">
      <img
        src={photoURL || DEFAULT_IMAGE_LINK}
        alt="Profile"
        className="w-20 h-20 rounded-full mr-5 mb-2"
      />
      <div>
        <h5 className="text-lg font-bold mb-2">Picture</h5>
        <div className="flex">
          <label className="w-32 mb-2 h-9 bg-[#303642] text-white text-sm font-black rounded-md flex items-center justify-center cursor-pointer">
            <input type="file" onChange={handleFileChange} className="hidden" />
            Upload image
          </label>
          <button
            onClick={removeProfilePicture}
            className="ml-3 w-20 mb-2 h-9 bg-white shadow-sm text-black text-sm font-black rounded-md"
          >
            Remove
          </button>
        </div>
        <p className="text-gray-600 text-xs mt-2">
          We support images (PNG, JPEG, GIF) only
        </p>
      </div>
    </div>
  );
};

export default ProfilePictureSection;
