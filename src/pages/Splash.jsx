import React, { useEffect } from "react";
import yourLogo from "../assets/savpl-logo.png";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/Into1");
    }, 5000);
  }, []);

  return (
    <div className="w-full flex justify-center items-center h-screen bg-green-200 ">
        <img
          src={yourLogo}
          alt="SAVPL Nature's Ally Logo"
        />
    </div>
  );
};

export default Splash;
