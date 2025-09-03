import yourLogo from "../assets/soil.png";

import cattle from "../assets/cattle.png";
import desIcon from "../assets/des.png";

import uploadIcon from "../assets/upload.png";
import animalIcon from "../assets/animal.png";
import vaccinationIcon from "../assets/vaccination.png";
import notesIcon from "../assets/notes.png";
import Footer from "../components/Footer";

const CattleManagement = () => {
  return (
    <div className="h-screen flex justify-center flex-col max-w-md w-full mx-auto bg-gray-200 items-center">
      <div className="w-full h-full shadow-lg overflow-hidden">
      <div
          className="h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>
        <div className="flex justify-center">
          <div
            className="h-40 bg-contain w-full max-w-xs bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${cattle})` }}
          >
            <h1 className="text-white text-2xl font-semibold ml-3 mt-6 text-left">
              Cattle <br /> Management
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-2 rounded-2xl">
          <button className=" flex items-center  text-sm font-normal rounded-full  bg-white">
            <div className="bg-teal-100 rounded-2xl p-2 flex items-center justify-center mr-2">
              <img src={animalIcon} alt="Report icon" className="h-6 w-6" />
            </div>
            <span className="px-4">Name of cattle</span>
          </button>

          <div className="flex items-center  text-center bg-white rounded-2xl ">
            <div className="bg-green-100  rounded-2xl p-2 flex items-center justify-center mr-2">
              <img src={uploadIcon} alt="Report icon" className="h-6 w-6" />
            </div>
            <span className="mr-2 font-normal text-black">Upload soil photo</span>
            <label className="flex-1">
              <input type="file" className="hidden" />
              <span className="cursor-pointer bg-gray-200 text-xs py-1 px-2 text-black shadow  transition">
                Choose file
              </span>
            </label>
          </div>

          <div className="flex items-center  text-center bg-white rounded-full shadow">
            <div className="bg-red-100 rounded-full p-2 flex items-center justify-center mr-2">
              <img src={desIcon} alt="Report icon" className="h-6 w-6" />
            </div>

            <input
              type="text"
              placeholder="Add description"
              className="flex-1 bg-transparent focus:outline-none px-4 text-black  placeholder-black"
            />
          </div>

          <div className="flex items-center  text-center bg-white rounded-2xl shadow">
            <div className="bg-purple-200 rounded-2xl p-2 flex items-center justify-center mr-2">
              <img
                src={vaccinationIcon}
                alt="Report icon"
                className="h-6 w-6"
              />
            </div>

            <input
              type="text"
              placeholder="Vaccination details"
              className="flex-1 focus:outline-none px-4 text-black  placeholder-black"
            />
          </div>

          <div className="flex items-center  text-center bg-white rounded-2xl shadow">
            <div className="bg-blue-100 rounded-2xl p-2 flex items-center justify-center mr-2">
              <img src={notesIcon} alt="Report icon" className="h-6 w-6" />
            </div>

            <input
              type="text"
              placeholder="Notes"
              className="flex-1 focus:outline-none px-4 text-black placeholder-black"
            />
          </div>

          <div className="flex justify-between items-center mt-2">
            <button className="flex-1 mr-2 bg-[#6CC51D] text-white font-semibold py-2 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CattleManagement;
