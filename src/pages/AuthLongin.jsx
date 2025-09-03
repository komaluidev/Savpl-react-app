import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import emailIcon from "../assets/email_icon.png";
import calenderIcon from "../assets/calendar.png";
import telephoneIcon from "../assets/telephone.png";
import passwordIcon from "../assets/password.png";
import rememberIcon from "../assets/remember.png";
import eyeIcon from "../assets/eye.png";

const AuthLogin = () => {
  const [activeButton, setActiveButton] = useState("signup");
  return (
         <div className="h-screen overflow-hidden flex flex-col items-center justify-start">

        <div
          className="h-24 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>

   
      <div className="bg-white rounded-t-[40px] p-4  text-center max-w-md w-full mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Get started Now
          </h1>
          <p className="text-gray-600 text-sm mb-2">sign in to your account</p>
        </div>

        <div className="flex w-full items-center bg-[#6CC51D] rounded-lg mt-4 mb-6 p-1">
          <button
            onClick={() => setActiveButton("signup")}
            className={`w-full py-2 font-semibold rounded-lg transition-all duration-200 ${
              activeButton === "signup"
                ? "bg-white text-black shadow-sm"
                : "bg-transparent text-white"
            }`}
          >
            Sign up
          </button>
          <button
            onClick={() => setActiveButton("register")}
            className={`w-full py-2 font-semibold rounded-lg transition-all duration-200 ${
              activeButton === "register"
                ? "bg-white text-black shadow-sm"
                : "bg-transparent text-white"
            }`}
          >
            Register
          </button>
        </div>

        <form>
          <div className="grid items-center gap-2 mb-2 md:grid-cols-2">
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 mb-2 "
                placeholder="First Name"
                required
              />
            </div>

            <div>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 mb-2"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="grid gap-4 mb-4 md:grid-cols-1">
            <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pr-2 w-full p-2">
              <img src={emailIcon} alt="Report icon" className="h-4 w-5 mr-4" />
              <input
                type="email"
                id="email"
                className="flex-1 bg-transparent focus:outline-none"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pr-2 w-full p-2">
              <img
                src={calenderIcon}
                alt="calender icon"
                className="h-4 w-4 mr-4"
              />
              <input
                type="DOB"
                id="dob"
                className="flex-1 bg-transparent focus:outline-none"
                placeholder="DD/MM/YYYY"
                required
              />
            </div>
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
  );
};

export default AuthLogin;
