import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import yourLogo from "./assets/into4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Into4 = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col h-full w-full">
        <div
          className="h-2/5 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${yourLogo})` }}
        />

        <div className="flex-grow flex flex-col bg-[#F4F5F9] rounded-t-[40px] p-8 -mt-24">
          <div className="mb-4 mt-4">
            <h1 className="text-2xl text-center md:text-2xl font-bold">
              Welcome
            </h1>
            <p className="mt-2 text-sm text-center md:text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur uifhe jfweifn fjwef
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <button className="bg-[#2041EA] text-white font-semibold w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
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
              <FontAwesomeIcon
                icon={faUserCircle}
                className=" text-white "
              />
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
    </div>
  );
};

export default Into4;
