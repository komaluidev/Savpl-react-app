import yourLogo from "./assets/soil.png";
import Footer from "./Footer";
import desIcon from "./assets/des.png";
import uploadIcon from "./assets/upload.png";
import calender1Icon from "./assets/cal.png";
import farmIcon from "./assets/farm.png";


const SoilReportSubmit = () => {
  return (
    <div className="h-screen flex justify-center flex-col bg-gray-200 items-center">
      <div className="w-full  h-full shadow-lg overflow-hidden">
         <div
          className="h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>

        <div className="flex justify-center">
          <div
            className="h-40 bg-contain w-full p-2 m-2 bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${yourLogo})` }}
          ></div>
        </div>

        <div className="flex flex-col gap-3 p-2 rounded-full">
          <div className="flex items-center bg-gray-50 border border-gray-300 text-sm rounded-full pr-2 w-full ">
             <div className="bg-teal-100 rounded-full p-2 flex items-center justify-center mr-2">
            <img
              src={calender1Icon}
              alt="calender icon"
              className="h-5 w-5"
            />
            </div>
            <input
              type="DOB"
              id="dob"
              className="flex-1 pl-4 bg-transparent focus:outline-none"
              placeholder="DD/MM/YYYY"
              required
            />
          </div>
          

          <div className="flex items-center  text-center bg-white rounded-full ">
            <div className="bg-green-100 rounded-full p-2 flex items-center justify-center mr-2">
              <img src={uploadIcon} alt="Report icon" className="h-7 w-7" />
            </div>
            <span className="mr-2 text-black">Upload soil photo</span>
            <label className="flex-1">
              <input type="file" className="hidden" />
              <span className="cursor-pointer bg-gray-200 text-xs py-1 px-2 text-black shadow  transition">
                Choose file
              </span>
            </label>
          </div>
          <div className="flex items-center  text-center bg-white rounded-full shadow">
            <div className="bg-purple-300 rounded-full p-2 flex items-center justify-center mr-2">
              <img src={farmIcon} alt="farm icon" className="h-6 w-6" />
            </div>

            <input
              type="text"
              placeholder="Add Form"
              className="flex-1 bg-transparent focus:outline-none px-4 text-black"
            />
          </div>

          <div className="flex items-center  text-center bg-white rounded-full shadow">
            <div className="bg-red-100 rounded-full p-2 flex items-center justify-center mr-2">
              <img src={desIcon} alt="Description icon" className="h-8 w-8" />
            </div>

            <input
              type="text"
              placeholder="Add description"
              className="flex-1 bg-transparent focus:outline-none px-4 text-black"
            />
          </div>

        <div className="flex justify-between items-center mt-4">
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

export default SoilReportSubmit;
