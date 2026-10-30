import React from "react";

const ProfileInfoHeader = ({ user, favouriteBlogCount }) => {
  return (
    <div>
      <div className="flex justify-center items-center lg:block">
        <div className="flex items-center mr-4 lg:mr-0">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#9ca3b7"
          >
            <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Z" />
          </svg>

          <p className="text-gray-400">Joined {user?.joined}</p>
        </div>

        <div className="flex items-center mt-1">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#9ca3b7"
          >
            <path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Z" />
          </svg>

          <p className="text-gray-400">
            {favouriteBlogCount} favourite blog
            {favouriteBlogCount !== 1 && "s"}
          </p>
        </div>
      </div>
      <span className="flex justify-center lg:justify-start text-3xl">
        {user.country !== "NO COUNTRY" && user.country}
      </span>
    </div>
  );
};

export default ProfileInfoHeader;
