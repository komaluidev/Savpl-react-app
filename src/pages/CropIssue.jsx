const CropIssue = () => {
  const farms = [
    {
      name: "Title of the issue",
      des: "Lorem ipsum dolor sit",
      status: (
        <span className="px-2 py-1 rounded-full text-sm ">
          Pending
        </span>
      ),
    },
    {
      name: "Title of the issue",
      des: "Lorem ipsum dolor sit",
      status: (
        <span className="px-3 py-1 rounded-full text-sm ">
          Checked
        </span>
      ),
    },
    {
      name: "Title of the issue",
      des: "Lorem ipsum dolor sit",
      status: (
        <span className="px-3 py-1 rounded-full text-sm ">
          Pending
        </span>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col  w-full bg-gray-200 gap-2">
     <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
        }}
      ></div>
    <div className=" px-2 py-4 w-full max-w-md mx-auto">
      <h2 className="text-center font-bold text-lg mb-4">Crop Issue</h2>

      {farms.map((farm, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-4 mb-3 shadow flex justify-between items-start"
        >
          {/* Left */}
          <div>
            <h3 className="font-bold text-gray-800">{farm.name}</h3>
            <p className="text-gray-600 text-sm">{farm.des}</p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-700 font-semibold">Status</span>
            {farm.status}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CropIssue;
 