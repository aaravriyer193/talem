import React from "react";

const ProfileInfoSection = ({
  userData,
  truncateText,
  MAX_LENGTH,
  setShowModal,
  setFieldToUpdate,
}) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold">Profile</h3>
      <p className="text-sm text-gray-500">
        Update your personal information connected to your profile
      </p>
      <hr className="h-px my-6 bg-gray-500 border-0" />
      <div className="mt-4 space-y-4 text-sm">
        {[
          {
            label: "Full name",
            value: userData.name || "N/A",
            field: "name",
          },
          {
            label: "Country",
            value: userData.country || "N/A",
            field: "country",
          },
          {
            label: "Bio",
            value: truncateText(userData.bio || "N/A", MAX_LENGTH),
            field: "bio",
          },
        ].map(({ label, value, field }) => (
          <div key={label}>
            <div className="flex items-center justify-between">
              <span className="font-semibold">{label}</span>
              <span className="flex-1 text-center text-gray-600">{value}</span>
              <button
                className="ml-4 text-blue-500 font-extrabold"
                onClick={() => {
                  setShowModal(true);
                  setFieldToUpdate(field);
                }}
              >
                Update
              </button>
            </div>
            <hr className="h-px my-4 bg-gray-300 border-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfoSection;
