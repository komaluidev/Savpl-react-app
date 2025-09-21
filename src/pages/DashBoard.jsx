
import MachineryIcon from "../assets/machineryicon.png";
import protocolIcon from "../assets/protocolicon.png";
import fieldsIcon from "../assets/fieldsicon.png";
import weatherIcon from "../assets/weathericon.png";
import farmIcon from "../assets/farmicon.png";
import dashboardicon1 from "../assets/dashboardicon1.png";
import diary from "../assets/diary.png";
import billing from "../assets/billing.png";

import manImage from "../assets/man.png";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Setup";

const Dashboard = () => {
  const [Userdata, setUserData] = useState(null);
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userDecRef = doc(db, "users", user.uid);
          const docInfo = await getDoc(userDecRef);
          setUserData(docInfo.data());
        } else {
          console.log("no user is logged in");
          setUserData(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchWeatherData = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?q=30.7281%2C76.8079&lang=en&key=bbb11cdc696b463bb81114857252009`
        );
        const data = await res.json();

        console.log("weather data", data);
        setWeatherData(data);
      } catch (error) {
        console.log("error fecthing data", error);
      }
    };
    fetchUserData();
    fetchWeatherData();
  }, []);

  return (
    <div className=" w-full h-screen p-2 bg-gray-50 ">
      <div className="flex w-full md:flex-row gap-2">
        <div className="flex w-1/2  rounded-2xl bg-[#DDFFBE] h-[182px] shadow">
          <div className="flex flex-col justify-center items-center mt-4">
            <div
              className="h-42 bg-cover  max-w-xs bg-no-repeat rounded-lg h-16 w-16  border-green-500"
              style={{ backgroundImage: `url(${manImage})` }}
            />

            <div className="ml-4 flex-1 text-center justify-center items-center ">
              <h2 className="text-sm font-semibold">Hello!</h2>
              <p className="text-gray-700 font-semibold">
                {Userdata?.firstName && Userdata?.lastName
                  ? `${Userdata.firstName} ${Userdata.lastName}`
                  : "User"}
              </p>
            </div>
          </div>

          <div className="flex flex-col  py-2 px-2 gap-4 flex-grow  text-green-600 bg-[#F6FFEE]  text-sm">
            <p className="flex items-center gap-2 ">
              <span>Notifications</span>
              
            </p>
            <p className="flex items-center gap-2">
              <span>Location</span>
            </p>
            <p className="flex items-center gap-2">
              <span>Altitude</span>
            </p>
          </div>
        </div>

        <div className="bg-[#6CC51D] h-[180px]  text-white rounded-2xl w-1/2 text-center shadow">
        {
            weatherData ? (
                <>
                <p className="text-sm mt-2">Today, {weatherData?.location.localtime.split(" ")[0]}</p>
          <h1 className="text-5xl font-bold">{Math.round(weatherData?.current.temp_c)}</h1>
          <p className="text-lg">{weatherData?.current.condition.text}</p>
                </>
            ):(
                <div>Loading</div>
            )
        }
          
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-4 px-4 py-4">
        {[
          {
            label: "Soil Report",
            icon: dashboardicon1,
            color: "bg-yellow-100 ",
          },
          { label: "Weather", icon: weatherIcon, color: "bg-teal-100" },
          { label: "Machinery", icon: MachineryIcon, color: "bg-orange-100" },
          { label: "Daily Diary", icon: diary, color: "bg-purple-100" },
          { label: "Add Farm", icon: farmIcon, color: "bg-green-100" },
          { label: "Manage field", icon: fieldsIcon, color: "bg-pink-100" },

          {
            label: "Sampurn Protocol",
            icon: protocolIcon,
            color: "bg-orange-100",
            span: "col-start-2",
          },
          { label: "Billing", icon: billing, color: "bg-blue-100" },
        ].map((item, i) => (
          <div
            key={i}
            className="text-center justify-center p-2 h-[100px] bg-white rounded-lg flex flex-col items-center"
          >
            <div
              className={`h-12 w-12 ${item.color}  rounded-full flex items-center justify-center mb-2`}
            >
              <img src={item.icon} alt={item.label} className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
