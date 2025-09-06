
import MapPhoto from "../assets/map.png"

const GreenValleyFarm = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-200 gap-4">
      <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
        }}
      ></div>
      <div className="flex justify-center items-center max-w-md w-full mx-auto flex-col gap-4 rounded-full ">
       
        <div>
              <h3 className="font-semibold text-lg">Green Valley Farm</h3>
              <p className="text-gray-600 text-center">Chandigarh</p>
              <p className="text-gray-600 text-center">Sunny , 75°F</p>
            </div>

            
  <div className="flex justify-center items-center  w-full mx-auto ">
           <div
             className="h-64 bg-cover w-full p-4 m-2  bg-no-repeat rounded-lg"
             style={{ backgroundImage: `url(${MapPhoto})` }}
           ></div>
         </div>
 </div>

 
<div className="flex space-x-4 text-center justify-between max-w-md gap-2 mx-auto items-center mt-4 w-full">
  <button className="bg-[#1D8DC5]  text-white font-semibold py-4 px-6 rounded-full shadow-md min-w-[120px] lg:flex-1">
    Edit Farm
  </button>
  <button className="bg-[#EE0000] text-white font-semibold py-4 px-6 rounded-full min-w-[120px] lg:flex-1 shadow-md ">
    Delete Farm
  </button>
</div>

    </div>
  );
};

export default GreenValleyFarm;
