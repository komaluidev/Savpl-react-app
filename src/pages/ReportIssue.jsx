import desIcon from "../assets/des.png";
import uploadIcon from "../assets/upload.png";

const ReportIssue = () => {
  return (
    <div className="h-screen flex flex-col w-full items-center bg-gray-200">
      <div className="w-full h-full shadow-lg overflow-hidden bg-white">
        {/* Gradient Header */}
        <div
          className="h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>

        {/* Title */}
        <h1 className="text-black text-2xl font-semibold text-center mt-6 mb-4">
          Report Crop Issue
        </h1>

        {/* Upload Field */}
        <div className="flex items-center gap-3  max-w-md mx-auto mb-4 rounded-full bg-white shadow p-3">
          <div className="bg-green-100 rounded-full p-3">
            <img src={uploadIcon} alt="Upload icon" className="h-6 w-6" />
          </div>
          <span className="text-black">Crop Upload</span>
          <label className="ml-auto">
            <input type="file" className="hidden" />
            <span className="cursor-pointer bg-gray-200 text-xs py-1 px-2 text-black rounded">
              Choose file
            </span>
          </label>
        </div>

        {/* Description Field */}
        <div className="max-w-md mx-auto flex items-center rounded-full bg-white shadow p-3">
          <div className="bg-red-100 rounded-full p-3">
            <img src={desIcon} alt="Description icon" className="h-6 w-6" />
          </div>
          <input
            type="text"
            placeholder="Description of the Issue"
            className="flex-1 bg-transparent focus:outline-none px-3 text-black placeholder-black"
          />
        </div>
        <div className="max-w-md mx-auto mt-4">
          <button className="w-full bg-[#6CC51D] text-white font-semibold py-3 rounded-full">
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
