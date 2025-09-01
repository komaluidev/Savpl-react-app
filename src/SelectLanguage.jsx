import React, { useState } from "react";
import LinkButton from "./components/LinkButton";

const SelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // You can keep this line if you want the dropdown to close after a selection is made
  };



  const languages = ["English", "Hindi", "Punjabi"];

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
        }}
      ></div>

      <div className="bg-white max-w-md lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl p-4 lg:p-12 rounded-t-lg flex-grow flex justify-center items-center">
        <div className="bg-[#F4F5F9] p-8 h-full w-full flex flex-col">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2 text-center">
              Choose the language
            </h1>
            <p className="text-gray-600 text-sm text-center">
              Select your preferred language below. This helps us serve you
              better.
            </p>
          </div>

          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="mt-6 border border-gray-300 bg-white rounded-md p-4 flex justify-between items-center text-gray-700 cursor-pointer w-full"
          >
            <span>{selectedLanguage || "Select Language"}</span>
            <span>&gt;</span>
          </div>

          <div className="mt-4 border bg-white border-gray-300 rounded-md w-full">
            {languages.map((lang) => (
              <div
                key={lang}
                onClick={() => handleLanguageSelect(lang)}
                className={`p-4 cursor-pointer text-gray-700 ${
                  selectedLanguage === lang ? "bg-gray-100 font-semibold" : ""
                } hover:bg-gray-50 last:rounded-b-md first:rounded-t-md`}
              >
                {lang}
              </div>
            ))}
          </div>
          <div className="flex space-x-4 text-center justify-between items-center mt-4 w-full">
            <LinkButton href="/walcomepage" className="bg-[#6CC51D] flex-1">
              Previous
            </LinkButton>
            <LinkButton href="/authlogin" className="bg-[#6CC51D] flex-1">
              Next
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectLanguage;
