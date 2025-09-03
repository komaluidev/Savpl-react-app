import React from "react";
import savpalImg from "../assets/savpal.png";
import uploadIcon from "../assets/upload.png";
import LocationIcon from "../assets/location.png";
import StepPage from "../components/StepPage";

const Step1 = () => {
  const pageTitle = "Step 1 : Apply 500 kg FOM before field preparation";
  const pageInstruction = "Apply 500 kg of Fermented Organic Manure (FOM) evenly across the land before field preparation. This improves soil organic carbon and supports microbial activity."
   return (
        <StepPage title={pageTitle} instruction={pageInstruction}>
         
               <div className="flex flex-col gap-2 w-full mx-auto">
             
                 <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-md">
         
                     {/* img div */}
                   <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
                     <img src={uploadIcon} alt="Seed photo icon" className="h-6 w-6" />
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
         
                 {/* Current Location Input */}
                <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-md">
          <div className="bg-purple-200 p-2 rounded-full flex items-center justify-center">
                     <img
                       src={LocationIcon}
                       alt="Location icon"
                       className="h-6 w-6"
                     />
                   </div>
                   <input
                     type="text"
                     placeholder="Current location"
                     className="flex-1 bg-transparent focus:outline-none text-black text-sm"
                     readOnly
                   />
                 </div>
               </div>
         
               {/* Note Section */}
               <div className="bg-white p-2 rounded-lg shadow-md">
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
         
               {/* Submit Button */}
               <button className="bg-[#2f6003] text-white font-semibold py-2 rounded-full shadow-lg w-full">
                 Submit
               </button>


             <div className="w-full p-2 bg-gray-100 rounded-xl flex flex-col items-center text-center">
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
         You have  completed all the steps to get
           update from the support
        </p>
      </div>
         
        </StepPage>
    )
};

export default Step1;
