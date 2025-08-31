import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";

const SelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    navigate("/authlogin");
  };

  const languages = ["English", "Hindi", "Punjabi"];

  return (
    <div className="h-screen flex flex-col">
     <div
          className="h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>

      <div className="bg-[#F4F5F9]  p-8 h-full">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
            Choose the language
          </h1>
          <p className="text-gray-600 text-sm">
            Select your preferred language below. This helps us serve you
            better.
          </p>
        </div>

        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="mt-6 border border-gray-300 bg-white rounded-md p-4 flex justify-between items-center text-gray-700 cursor-pointer"
        >
          <span>{selectedLanguage || "Select Language"}</span>
          <span>&gt;</span>
        </div>

       

        <div className="mt-4 border  bg-white  border-gray-300 rounded-md">
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
       

        <div className="flex space-x-4 justify-between items-center mt-4">
          <Button
            onClick={handlePrevClick}
            className="bg-[#6CC51D] "
          >
            Previous
          </Button>
          <Button
            onClick={handleNextClick}
            className=" bg-[#6CC51D]"
          >
            Next
          </Button>
        </div>
       </div>
       </div>
   
  );
};

export default SelectLanguage;
