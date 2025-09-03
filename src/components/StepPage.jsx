// src/components/StepPage.jsx

import React from 'react';
import savpalImg from "../assets/savpal.png";

const StepPage = ({ title, instruction, children }) => {
  return (
    <div className="h-screen flex flex-col mx-auto w-full items-center">
      {/* Main card container */}
      <div className="w-full flex-grow shadow-md bg-gray-100 flex flex-col">
        {/* Header with gradient */}
        <div
          className="h-24"
          style={{
            background: "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>

        {/* Logo */}
        <div className="flex max-w-md mx-auto w-full justify-center">
          <div
            className="w-40 h-20 mt-2 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${savpalImg})` }}
          ></div>
        </div>

        {/* Scrollable content area */}
        <div className="p-2 flex  flex-col  max-w-md mx-auto gap-2">
          <h3 className="text-base font-semibold text-black">{title}</h3>
          <span className="text-black text-sm">Instruction:</span>
          <p className="text-gray-600 text-sm ">{instruction}</p>
          {children}
        </div>

       
      </div>

      
    </div>
  );
};

export default StepPage;