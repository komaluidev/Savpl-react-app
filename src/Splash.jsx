import React, { useEffect } from "react";
import yourLogo from "./assets/savpl-logo.png";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/Into1");
  //   }, 5000);
  // }, []);

  return (
    // This main container takes up the entire viewport, both in width and height.
    <div className="w-screen h-screen bg-green-200 flex justify-center items-center">
      {/* The image itself should be sized screen.
          Using a max-width and max-height ensures it's responsive. */}
      <img
        src={yourLogo}
        alt="SAVPL Nature's Ally Logo"
        className="max-w-xs md:max-w-md lg:max-w-xl max-h-48 md:max-h-64 lg:max-h-96"
      />
    </div>
  );
};

export default Splash;