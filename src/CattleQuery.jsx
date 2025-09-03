import yourLogo from "./assets/soil.png";
import eyebIcon from "./assets/eyeblue.png";
import deleteIcon from "./assets/delete.png";
import downloadIcon from "./assets/down.png";
import cattle from "./assets/cattle.png";
import Footer from "./components/Footer";


const CattleQuery = () => {
  return (
    <div className="h-screen flex justify-center flex-col bg-gray-200 items-center">
      <div className="w-full h-full shadow-lg overflow-y-auto">
        <div className="h-[15vh] bg-[linear-gradient(180deg,#6CC51D_0%,#DAF3C0_100%)]"></div>

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

          <div className="flex flex-col m-4 gap-1">
                
                 <div className="flex items-center bg-white rounded-xl shadow-sm p-4 text-black ">
                   <input
                     type="text"
                     id="text"
                     className="flex-1 focus:outline-none  placeholder-sky-700"
                     placeholder="Query one"
                     required
                   />
                 <div className="flex justify-end gap-4 items-center">
                       <img src={eyebIcon} alt="eyeblue-icon" className="w-4 h-3" />
                   <img src={deleteIcon} alt="delete-icon" className="w-4 h-4" />
                 
                   </div>
       
                 </div>
                     <div className="flex items-center bg-white rounded-xl shadow-sm p-4 text-black">
                   <input
                     type="text"
                     id="text"
                     className="flex-1 focus:outline-none  placeholder-sky-700"
                     placeholder="Query two"
                     required
                   />
                   <div className="flex justify-end gap-4 items-center">
                       <img src={eyebIcon} alt="eyeblue-icon" className="w-4 h-3" />
                   <img src={deleteIcon} alt="delete-icon" className="w-4 h-4" />
                
                   </div>
                 </div>
                       <div className="flex items-center bg-white rounded-xl shadow-sm p-4 text-black">
                   <input
                     type="text"
                     id="text"
                     className="flex-1 focus:outline-none  placeholder-sky-700"
                     placeholder="Query three"
                     required
                   />
                   <div className="flex justify-end gap-4 items-center">
                       <img src={eyebIcon} alt="eyeblue-icon" className="w-4 h-3" />
                   <img src={deleteIcon} alt="delete-icon" className="w-4 h-4" />
               
                   </div>
                 </div>
       
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default CattleQuery;
