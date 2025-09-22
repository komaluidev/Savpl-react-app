import { useEffect, useState } from "react";
import telephoneIcon from "../assets/telephone.png";

import { auth } from "../firebase/Setup";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

  import { getAuth, onAuthStateChanged } from "firebase/auth";

const LoginWithOtp = () => {
  const [activeButton, setActiveButton] = useState("phone");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sending, setSending] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const navigate = useNavigate();


  const sendOtp = async () => {
    setSending(true);
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {},
          "expired-callback": () => {},
        }
      );
      const appVerifier = window.recaptchaVerifier;

      const phoneNumber = `+91${phone}`;
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setConfirmationResult(confirmation);

      console.log("otp sent successfully", confirmation);
    } catch (err) {
      console.error(err);
      setSending(false);
    }
  };

  const verifyOtp = async () => {
    try {
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      console.log("User signed in:", user);

      
      if (user.displayName) {
        navigate("/dashboard");
      } else {
        navigate("/authlogin");
      }
    } catch (err) {
      console.error("Invalid OTP:", err);
    }
  };
  return (
    <div className="h-screen flex flex-col ">
      <div
        className="h-24 w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108, 197, 29, 1), rgba(108, 197, 29, 0))",
        }}
      ></div>

      <div className="bg-white rounded-t-[40px] p-4 text-center max-w-md w-full mx-auto">
        <div>
          
          <p className="text-gray-600 text-sm mb-2">Sign in to your account</p>
        </div>

        <div className="flex w-full items-center bg-[#6CC51D] rounded-lg p-1 mt-auto mb-2">
          <button
            onClick={() => setActiveButton("phone")}
            className={`w-full font-semibold py-2 px-4 rounded-lg transition-all duration-200 
          ${
            activeButton === "phone"
              ? "bg-white text-black shadow-sm"
              : " bg-transparent text-white"
          }`}
          >
            Phone Number
          </button>
     
        </div>

        <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pr-2 w-full p-2">
          <img
            src={telephoneIcon}
            alt="Phone number icon"
            className="h-4 w-5 mr-4"
          />

          <input
            type="tel"
            id="phone"
            className="flex-1 bg-transparent focus:outline-none"
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}

          />
        </div>
        <div id="recaptcha-container"></div>

        {confirmationResult && (
          <div className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pr-2 mt-2 w-full p-2">
            <input
              type="text"
              id="otp"
              className="flex-1 bg-transparent focus:outline-none"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}
        <div className="flex justify-between items-center mt-4 gap-2">
          {!confirmationResult ? (
              <button
              type="button"
              onClick={sendOtp}
              disabled={sending} 
              className={`flex-1 font-semibold py-2 rounded-lg ${
                sending
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#6CC51D] text-white"
              }`}
            >
              {sending ? "Sending..." : "Send OTP"}
            </button>
          ) : (
            <button
              type="button"
              onClick={verifyOtp}
              className="flex-1 bg-blue-500 text-white font-semibold py-2 rounded-lg"
            >
              Continue
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default LoginWithOtp;
