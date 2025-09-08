import Avatar from "../assets/avatar.png";
import Arrow from "../assets/arrow.png";
import search from "../assets/search.png";
const ActivityCard = () => {
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
        Manage linked farmer
      </h2>
      <div className="flex max-w-md w-full mx-auto mt-2 bg-white rounded-lg">
        <input
          type="text"
          placeholder="Search farmer"
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
            className="bg-white max-w-md mx-auto w-full shadow rounded-xl p-3 flex  justify-between mb-3"
          >
            <div className="flex items-center gap-3">
              <div className=" flex items-center justify-center ">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="h-12 w-12 rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">
                  Last activity:
                  <span className="text-gray-600">{user.activity}</span>
                </p>
              </div>
            </div>

            <img src={Arrow} alt="arrow" className="h-5 w-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;
