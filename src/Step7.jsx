import StepPage from "./StepPage";
import uploadIcon from './assets/upload.png';
import LocationIcon from './assets/location.png';

const Step7 = () =>{

    const pageTitle = "Step 7 : Continue applying enriched LFOM" 
    const pageInstruction = "Continue application of Liquid Fermented Organic Manure (LFOM) at specified intervals to sustain crop nutrition and soil balance."
    return (
        <StepPage title={pageTitle} instruction={pageInstruction}>
         
               <div className="flex flex-col gap-4">
             
                 <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-md">
         
                     {/* img div */}
                   <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
                     <img src={uploadIcon} alt="Seed photo icon" className="h-6 w-6" />
                   </div>
                   <span className="font-normal text-black text-sm flex-1">
                     LFOM photo
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
         
               {/* Submit Button */}
               <button className="bg-[#2f6003] text-white font-semibold py-4 rounded-full shadow-lg w-full">
                 Resubmit
               </button>


             <div className="w-full p-2 bg-gray-100 rounded-xl flex flex-col items-center text-center">
        <p className="text-sm font-semibold">
          Status:{" "}
          <span className="text-green-700 font-normal">
            Your query has been submitted
          </span>
        </p>
        
        <p className="text-gray-500 text-xs italic text-center mt-2">
         You have  completed all the steps to get
update from the support
        </p>
      </div>
         
        </StepPage>
    )
}

export default Step7;