import Avatar from "../assets/avatar.png";
import search from "../assets/search.png";

const FarmerPhoneBook = () =>{
    const Users = [
    { name: "Ajay Kumar", activity: "Added new farm" },
    { name: "Ajay Kumar", activity: "Added new farm" },
    { name: "Ajay Kumar", activity: "Added new farm" },
    { name: "Ajay Kumar", activity: "Added new farm" },
  ];
     return (
       <div className="flex min-h-screen flex-col w-full bg-gray-100">
         <div
           className="h-24 w-full"
           style={{
             background:
               "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
           }}
         ></div>
   
         <h2 className="font-semibold text-black flex justify-center items-center">
          Add Farmer from Phonebook
         </h2>
   
         <div className="flex max-w-md w-full mx-auto mt-2 bg-white rounded-lg">
           <input
             type="text"
             placeholder="Search contacts"
             className="flex-1 px-3 py-3 text-gray-700 focus:outline-none rounded-lg"
           />
           <div className="bg-[#6CC51D] rounded-lg p-3">
             <img
               src={search}
               alt="search"
               className="w-4 h-4 mr-3 ml-3 text-white"
             />
           </div>
         </div>
   
         <div className="p-4">
           {Users.map((user, i) => (
             <div
               key={i}
               className="bg-white max-w-md mx-auto w-full shadow rounded-xl p-2 flex items-center justify-between mb-2"
             >
               <div className="flex items-center gap-2">
                 <img
                   src={Avatar}
                   alt="avatar"
                   className="h-14 w-14 p-1 rounded-lg"
                 />
   
                 <div>
                   <h3 className="text-gray-800 font-semibold">{user.name}</h3>
                 </div>
               </div>
               <button className="bg-[#6CC51D] text-white px-12  p-4 rounded-lg m-4">
                 Add as Farmer
               </button>
             </div>
           ))}
         </div>
       </div>
     );
}

export default FarmerPhoneBook;