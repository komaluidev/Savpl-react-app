import yourLogo from "./assets/soil.png";
import Footer from "./Footer";

const SoilReport3 = () => {
  return (
    <div className="h-screen flex justify-center flex-col bg-gray-200 items-center">
      <div className="w-full h-full shadow-lg overflow-y-auto">
 
        <div className="h-[15vh] bg-[linear-gradient(180deg,#6CC51D_0%,#DAF3C0_100%)]"></div>
        <div className="flex justify-center">
          <div
            className="h-40 bg-contain w-full max-w-xs bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${yourLogo})` }}
          ></div>
        </div>


        <div className="flex flex-col gap-2 p-2">
         
          <div className="flex items-center bg-white rounded-2xl shadow-sm p-4 text-black">
            <input
              type="text"
              id="text"
              className="flex-1 focus:outline-none  placeholder-blue-300"
              placeholder="Filename...img.jpg"
              required
            />
          </div>

          {/* Description field */}
          <div className="flex items-center bg-white rounded-2xl shadow-sm p-4 text-gray-900">
            <input
              type="text"
              className="flex-1 focus:outline-none placeholder-black"
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet"
            />
          </div>

          {/* Remarks field */}
          <div className="flex items-center bg-white rounded-2xl shadow-sm p-4 text-gray-900">
            <input
              type="text"
              className="flex-1 focus:outline-none placeholder-black"
              placeholder="Remarks"
            />
          </div>

          {/* Awaiting Review field */}
          <div className="flex items-center bg-white rounded-2xl shadow-sm p-4 text-gray-900">
            <input
              type="text"
              className="flex-1 focus:outline-none placeholder-black"
              placeholder="Awaiting Review"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SoilReport3;