import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import savpalImg from "../assets/savpal.png"

const SelectYourCrop = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const handleCropSelect = (language) => {
    setSelectedCrop(language);
    setIsDropdownOpen(false);
  };

  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate(-1);
  };

  const handleNextClick = () => {
    navigate("/authlogin");
  };

  const languages = ["Rice", "Wheat", "Millets"];

  return (
    <div className="h-screen flex flex-col">
     <div
          className="h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>
 
      <div className="bg-[#F4F5F9] p-8 shadow-lg  max-w-md w-full mx-auto">

        <div className="flex justify-center items-center">
        <div  className ="w-40 h-20 bg-no-repeat bg-contain" style={{ backgroundImage: `url(${savpalImg})` }}></div>
            </div>
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="mt-6 border border-gray-300 rounded-md p-4 flex justify-between items-center text-gray-700 bg-white cursor-pointer"
        >
          <span>{selectedCrop || "Select Your Crop"}</span>
          <span>&gt;</span>
        </div>

       

        <div className="mt-4 bg-white border border-gray-300 rounded-md">
          {languages.map((lang) => (
            <div
              key={lang}
              onClick={() => handleCropSelect(lang)}
              className={`p-4 cursor-pointer text-gray-700 ${
                selectedCrop === lang ? "bg-gray-100 font-semibold" : ""
              } hover:bg-gray-50 last:rounded-b-md first:rounded-t-md`}
            >
              {lang}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
       <button className="flex-1 mr-2 bg-[#6CC51D] text-white text-xl font-semibold py-2 rounded-lg">
            Chandigarh 29" <span className="text-xs">cloudy</span>
          </button>

              </div>
        <div className="flex space-x-4 justify-between items-center mt-8">
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

export default SelectYourCrop;
