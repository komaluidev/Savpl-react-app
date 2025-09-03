import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import telephoneIcon from "../assets/telephone.png";
import passwordIcon from "../assets/password.png";
import rememberIcon from "../assets/remember.png";
import eyeIcon from "../assets/eye.png";
import googleICon from "../assets/Google.png";
import facebookIcon from "../assets/Facebook.png";

const AuthLogin1 = () => {
  const [activeButton, setActiveButton] = useState("phone");
  return (
    <div className="h-screen flex flex-col ">
     <div
          className="h-24 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>

      <div className="bg-white rounded-t-[40px] p-4 text-center max-w-md w-full mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600 text-sm mb-2">Sign in to your account</p>
        </div>

        <div className="flex w-full items-center bg-[#6CC51D] rounded-lg p-1 mt-auto mb-2">
          <button
            onClick={() => setActiveButton("phone")}
            className={`w-full font-semibold py-2 px-4 rounded-lg transition-all duration-200 
          ${
            activeButton === "phone"
              ? "bg-white text-black shadow-sm"
              : " bg-transparent text-white"
          }`}
          >
            Phone Number
          </button>
          <button
            onClick={() => setActiveButton("email")}
            className={`w-full font-semibold py-2 px-4 rounded-lg transition-all duration-200 
          ${
            activeButton === "email"
              ? "bg-white text-black shadow-sm"
              : "  bg-transparent text-white"
          }`}
          >
            Email
          </button>
        </div>
        <form>
          <div className="grid gap-4 mb-4 md:grid-cols-1">
            <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pr-2 w-full p-2">
              <img
                src={telephoneIcon}
                alt="Phone number icon"
                className="h-4 w-5 mr-4"
              />

              <input
                type="tel"
                id="phone"
                className="flex-1 bg-transparent focus:outline-none"
                placeholder="Phone Number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pr-2 w-full p-2">
              <img
                src={passwordIcon}
                alt="Phone number icon"
                className="h-4 w-4 mr-4"
              />
              <input
                type="password"
                id="password"
                className="flex-1 bg-transparent focus:outline-none"
                placeholder="Password"
                required
              />
              <img src={eyeIcon} alt="remember-icon" className="h-3 w-5" />
            </div>
          </div>
        </form>

        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img src={rememberIcon} alt="remember-icon" className="h-4 w-6" />
            <span className="text-gray-600 text-sm mr-6">Remember me </span>
          </div>
          <p className=" text-blue-500">Forgot password</p>
        </div>

        <div className=""></div>

        <div className="flex justify-between items-center mt-4">
          <button className="flex-1 mr-2 bg-[#6CC51D] text-white font-semibold py-2 rounded-lg">
            Login
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-4">or Sign with</p>
        </div>
        <div className="flex flex-col space-y-4 ">
          <button className="bg-gray-50 border border-gray-300 text-black font-semibold w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
            <img src={googleICon} className="w-4 h-4" />
            <span>Continue With Google</span>
          </button>
          <button className="bg-gray-50 border border-gray-300 text-black font-semibold w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
            <img src={facebookIcon} className="w-4 h-4" />
            <span>Continue With Facebook</span>
          </button>

          <div className="mt-4 text-center ">
            <p className="text-sm text-gray-500">
              Don't have an account?
              <span
                className="font-bold text-black ml-1"
                onClick={() => navigate("/login")}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin1;
