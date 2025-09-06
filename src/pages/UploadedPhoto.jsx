import UploadedIcon from "../assets/uploadephoto.png";

const UploadedPhoto = () =>{
    return(
 <div className="flex min-h-screen flex-col  w-full bg-gray-200 gap-2">
      <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
        }}
      ></div>
      <div className="flex justify-center items-center max-w-md w-full mx-auto flex-col gap-4 rounded-full ">
       
        
               <h1 className="text-black text-2xl font-semibold text-center mt-4 mb-2">
          Uploaded Photo
        </h1>
            
           
            
  <div className="flex justify-center items-center  w-full mx-auto ">
           <div
             className="h-48 bg-cover w-full p-4 m-2  bg-no-repeat rounded-lg"
             style={{ backgroundImage: `url(${UploadedIcon})` }}
           ></div>
         </div>
 </div>

  <div className="bg-white max-w-md mx-auto p-4 rounded-lg shadow2">
                <p className="text-black font-semibold">Description of the Issue</p>
                <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, porro!</p>
            </div>

<div className="flex space-x-4 text-center justify-between max-w-md gap-2 mx-auto items-center mt-2 w-full">
  <button className="bg-[#1D8DC5]  text-white font-semibold py-4 px-6 rounded-full shadow-md min-w-[120px] lg:flex-1">
    Voice Note
  </button>
  <button className="bg-[#D7B80B] text-white font-semibold py-4 px-6 rounded-full min-w-[120px] lg:flex-1 shadow-md ">
    Status Pending
  </button>

  
</div>

 <div className="bg-white max-w-md mx-auto p-4 mb-2 rounded-lg shadow">
               <p className="text-black font-semibold">Resolution from sampurna</p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>


    </div>
    )
}


export default UploadedPhoto