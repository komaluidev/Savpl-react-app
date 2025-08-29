import yourLogo from "./assets/soil.png";
import staffIcon from "./assets/staff.png";
import desIcon from "./assets/des.png";
import detectIcon from "./assets/detect.png";
import uploadIcon from "./assets/upload.png";
import Footer from "./Footer";

const SoilReport = () => {
  return (
    <div className="h-screen flex justify-center flex-col bg-gray-200 items-center">
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
            style={{ backgroundImage: `url(${yourLogo})` }}
          ></div>
        </div>

        <div className="flex flex-col gap-4 p-4 rounded-lg">
          <button className=" flex items-center  text-sm font-medium rounded-full  bg-white">
            <div className="bg-yellow-100 rounded-full p-2 flex items-center justify-center mr-2">
              <img src={staffIcon} alt="Report icon" className="h-8 w-8" />
            </div>
            <span className="px-4">Request a report to Staff</span>
          </button>

          <div className="flex items-center bg-white rounded-full shadow-md ">
            <div className="bg-cyan-100 rounded-full p-2 flex items-center justify-center mr-2">
              <img src={detectIcon} alt="Report icon" className="h-8 w-8" />
            </div>
            <select className="flex-1 border-none text-black bg-transparent focus:outline-none">
              <option value="">Auto-detect or choose saved file</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </div>

          <div className="flex items-center  text-center bg-white rounded-full shadow">
            <div className="bg-red-100 rounded-full p-2 flex items-center justify-center mr-2">
              <img src={desIcon} alt="Report icon" className="h-8 w-8" />
            </div>

            <input
              type="text"
              placeholder="Add description"
              className="flex-1 focus:outline-none px-4 placeholder:text-black"
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
          
        </div>
         
      </div>
  <Footer />
   
    </div>
  );
};

export default SoilReport;
