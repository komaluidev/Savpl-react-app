import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import yourLogo from "../assets/into4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen justify-center items-end flex bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${yourLogo})` }}
    >
      <div className="bg-white  max-w-md lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl p-4 lg:p-12 rounded-t-lg ">
        <div>
          <h1 className=" text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 ">
            Welcome
          </h1>
          <p className=" text-gray-600 text-xs md:text-sm mt-2 mb-2 lg:mt-8">
            Lorem ipsum dolor sit amet, consectetur uifhe jfweifn fjwef
          </p>
        </div>

        {/* This is the corrected section */}
        <div className="flex flex-col space-y-4">
          <button className="bg-[#2041EA] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
            <FaFacebook className="w-6 h-6" />
            <span>Continue With Facebook</span>
          </button>
          <button className="bg-black text-white font-semibold w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
            <FaApple className="w-6 h-6" />
            <span>Continue With Apple</span>
          </button>
          <button className="bg-gray-200 text-black font-semibold w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
            <FaGoogle className="w-4 h-4" />
            <span>Continue With Google</span>
          </button>
          <button className="bg-[#6CC51D] text-white font-semibold w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
            <FontAwesomeIcon icon={faUserCircle} className=" text-white " />
            <span>Create an account</span>
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?
            <span
              className="font-bold text-black ml-1"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
