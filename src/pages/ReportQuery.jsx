import yourLogo from "../assets/soil.png";
import eyebIcon from "../assets/eyeblue.png";
import deleteIcon from "../assets/delete.png";
import downloadIcon from "../assets/down.png";
import calendar from "../assets/calendardate.png";


const ReportQuery = () => {
  return (
    <div className="h-screen flex justify-center flex-col  mx-auto bg-gray-200 items-center">
      <div className="w-full h-full shadow-lg overflow-y-auto">
        <div
          className="h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
          }}
        ></div>
        <div className="flex justify-center">
          <div
            className="h-40 bg-contain w-full max-w-xs bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${yourLogo})` }}
          ></div>
        </div>
        <div className="flex justify-between items-center max-w-md mx-auto m-2 p-2">
          <p className="text-xs">Date 02-08-2025</p>
          <div className="flex justify-end gap-4 items-center">
          <p className="text-x ">Search by date</p>
           <img src={calendar} alt="calendar-icon" className="w-6 h-6 bg-slate-100" />
</div>
        </div>
        <div className="flex flex-col max-w-md mx-auto m-4 gap-1">
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
              <img src={downloadIcon} alt="eye-icon" className="w-4 h-4" />
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
              <img src={downloadIcon} alt="eye-icon" className="w-4 h-4" />
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
              <img src={downloadIcon} alt="eye-icon" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportQuery;
