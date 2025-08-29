import React, { useEffect } from "react";
import yourLogo from "./assets/savpl-logo.png";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/Into1");
    }, 5000);
  }, []);

  return (
    <div className="flex w-full h-screen bg-green-200 ">
      <div className="" >
        <img
          src={yourLogo}
          alt="SAVPL Nature's Ally Logo"
        />
      </div>
    </div>
  );
};

export default Splash;
