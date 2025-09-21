import { useState } from "react";
import emailIcon from "../assets/email_icon.png";
import calenderIcon from "../assets/calendar.png";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";
import { db } from "../firebase/Setup";

const UserInfo = () => {
  const [activeButton, setActiveButton] = useState("signup");

  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const user = auth.currentUser;

      if (!user) throw new Error("No user logged in");

      console.log("User before saving:", user.uid);
      console.log("FormData:", formData);
 
      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      });

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        firstName: formData.firstName || null,
        lastName: formData.lastName || null,
        email: formData.email || null,
        dob: new Date(formData.dob) || null,
      });

      console.log("User data successfully added to Firestore!");
      setFormdata({ firstName: "", lastName: "", email: "", dob: "" });
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-start">
      <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
        }}
      ></div>

      <div className="bg-white rounded-t-[40px] p-4  text-center max-w-md w-full mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Get started Now
          </h1>
          <p className="text-gray-600 text-sm mb-2">sign in to your account</p>
        </div>

        <div className="flex w-full items-center bg-[#6CC51D] rounded-lg mt-4 mb-6 p-1">
          <button
            onClick={() => setActiveButton("register")}
            className={`w-full py-2 font-semibold rounded-lg transition-all duration-200 ${
              activeButton === "register"
                ? "bg-white text-black shadow-sm"
                : "bg-transparent text-white"
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid items-center gap-2 mb-2 md:grid-cols-2">
            <div>
              <input
                type="text"
                id="first_name"
                value={formData.firstName}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 mb-2 "
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 mb-2"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                required
              />
            </div>
          </div>
          <div className="grid gap-4 mb-4 md:grid-cols-1">
            <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pr-2 w-full p-2">
              <img src={emailIcon} alt="Report icon" className="h-4 w-5 mr-4" />
              <input
                type="email"
                id="email"
                className="flex-1 bg-transparent focus:outline-none"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />
            </div>

            <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pr-2 w-full p-2">
              <img
                src={calenderIcon}
                alt="calender icon"
                className="h-4 w-4 mr-4"
              />
              <input
                type="date"
                id="dob"
                className="flex-1 bg-transparent focus:outline-none"
                placeholder="DD/MM/YYYY"
                value={formData.dob}
                onChange={handleChange}
                name="dob"
                required
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <button className="flex-1 mr-2 bg-[#6CC51D] text-white font-semibold py-2 rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
