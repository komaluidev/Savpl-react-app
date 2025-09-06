import Greenfarm from "../assets/greenfarm.png";
import City from "../assets/city.png";
import Fence from "../assets/fence.png";

const AddNewFarm = () => {
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
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Add New Farm</h2>
        <div className="flex items-center  text-center bg-white rounded-full shadow">
          <div className="bg-green-100 rounded-full p-2 flex items-center justify-center mr-2">
            <img src={Greenfarm} alt="farm icon" className="h-6 w-6" />
          </div>

          <input
            type="text"
            placeholder="Add New Farm"
            className="flex-1 bg-transparent focus:outline-none px-4 text-black"
          />
        </div>
        <div className="flex items-center  text-center bg-white rounded-full shadow">
          <div className="bg-red-100 rounded-full p-2 flex items-center justify-center mr-2">
            <img src={City} alt="farm icon" className="h-6 w-6" />
          </div>

          <input
            type="text"
            placeholder="City"
            className="flex-1 bg-transparent focus:outline-none px-4 text-black"
          />
        </div>
        <div className="flex items-center  text-center bg-white rounded-full shadow">
          <div className="bg-purple-200 rounded-full p-2 flex items-center justify-center mr-2">
            <img src={Fence} alt="farm icon" className="h-6 w-6" />
          </div>

          <input
            type="text"
            placeholder="Fence the farm"
            className="flex-1 bg-transparent focus:outline-none px-4 text-black"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto max-w-md mt-2">
        <button className="bg-[#6CC51D] text-white font-semibold py-2 px-6 w-80 rounded-full shadow-md hover:bg-green-600 transition">
          Add Farm
        </button>
      </div>
    </div>
  );
};

export default AddNewFarm;
