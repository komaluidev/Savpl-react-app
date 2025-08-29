import React from "react";
import savpalImg from "./assets/savpal.png";
import uploadIcon from "./assets/upload.png";
import LocationIcon from "./assets/location.png";

const Step1 = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-200 p-2">
      <div className="w-full max-w-sm flex-grow rounded-xl overflow-hidden shadow-lg bg-gray-100 flex flex-col">
        <div
          className="h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>

        <div className="flex justify-center">
          <div
            className="w-40 h-20 mt-2 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${savpalImg})` }}
          ></div>
        </div>

        <div className="p-4 flex overflow-y-auto flex-col gap-4">
          <h3 className="text-base font-semibold text-black">
            Step 1 : Apply 500 kg FOM before field preparation
          </h3>
          <span className="text-black text-sm">Instruction:</span>
          <p className="text-gray-600 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            t emporibus blanditiis magni ut cum harum.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-md">
              <div className="bg-green-100 p-2 rounded-full">
                <img src={uploadIcon} alt="Report icon" className="h-6 w-6" />
              </div>
              <span className="font-normal text-black text-sm flex-1">
                Field photo
              </span>
              <label>
                <input type="file" className="hidden" />
                <span className="cursor-pointer bg-gray-200 text-xs py-1 px-2 text-black shadow transition rounded-full">
                  Choose file
                </span>
              </label>
            </div>

            <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-md">
              <div className="bg-purple-200 p-2 rounded-full">
                <img
                  src={LocationIcon}
                  alt="LocationIcon icon"
                  className="h-6 w-6"
                />
              </div>
              <input
                type="text"
                placeholder="Current location"
                className="flex-1 bg-transparent focus:outline-none text-black text-sm"
              />
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-md">
            <label
              htmlFor="notes"
              className="block text-sm font-normal text-gray-700"
            >
              Note
            </label>
            <textarea
              id="notes"
              rows="2"
              className="w-full border-none focus:outline-none resize-none"
            />
          </div>

          <button className="bg-[#6CC51D] text-white font-semibold py-2 rounded-full shadow-lg w-full">
            Submit
          </button>
        </div>
        <div className="w-full m-2 p-2 bg-white rounded-xl flex flex-col items-center">
          <p className="text-sm font-semibold">
            Status:{" "}
            <span className="text-green-700 font-normal">
              Your query has been submitted
            </span>
          </p>
          <p className="text-lg font-bold text-cyan-900 mt-2">
            Waiting Time: 00:00
          </p>
          <p className="text-gray-500 text-xs italic text-center mt-2">
            Only proceed to the next step once your current step is verified and
            approved by the staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
