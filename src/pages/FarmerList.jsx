import Arrow from "../assets/arrow.png";

const FarmerList = () => {
  return (
    <div className="h-screen flex justify-center flex-col bg-gray-200 items-center w-full mx-auto">
      <div className="w-full h-full shadow-lg overflow-hidden">
        <div
          className="h-24 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>
        <h2 className=" text-black mt-2 text-xl flex justify-center items-center">
          Farmer
        </h2>

        <div className="flex flex-col justify-center items-center gap-4 max-w-lg mx-auto w-full p-12">
          <div className="bg-white rounded-2xl shadow-md w-full p-4 flex items-center justify-between">
            <input
              type="text"
              className="flex justify-between focus:outline-none placeholder-black"
              placeholder="Sampurn Protocol"
            />
            <img src={Arrow} alt="arrow" className="h-5 w-5" />
          </div>

          <div className="bg-white rounded-2xl shadow-md w-full p-4 flex items-center justify-between">
            <input
              type="text"
              className="flex-1 focus:outline-none placeholder-black"
              placeholder="Orders Sampurn Protocol"
            />
            <img src={Arrow} alt="arrow" className="h-5 w-5" />
          </div>

          <div className="bg-white rounded-2xl shadow-md w-full p-4 flex items-center justify-between">
            <input
              type="text"
              className="flex-1 bg-transparent focus:outline-none placeholder-black"
              placeholder="Crop Issues"
            />
            <img src={Arrow} alt="arrow" className="h-5 w-5 ml-2" />
          </div>

          <div className="bg-white rounded-2xl shadow-md w-full p-4 flex items-center justify-between">
            <input
              type="text"
              className="flex-1 bg-transparent focus:outline-none placeholder-black"
              placeholder="Shoot Notification"
            />
            <img src={Arrow} alt="arrow" className="h-5 w-5 ml-2" />
          </div>

          <div className="bg-white rounded-2xl shadow-md w-full p-4 flex items-center justify-between">
            <input
              type="text"
              className="flex-1 bg-transparent focus:outline-none placeholder-black"
              placeholder="All Farms with current temperature and GeoFenced Image"
            />
            <img src={Arrow} alt="arrow" className="h-5 w-5 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerList;
