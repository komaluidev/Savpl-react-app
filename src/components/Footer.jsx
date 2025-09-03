import { useState } from "react";

import HomeIcon from "../assets/home.png";
import chatIcon from "../assets/chat.png";
import FarmsIcon from "../assets/farms.png";
import calenderIcon from "../assets/calender2.png";
import settingIcon from "../assets/settings.png";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("chat");

  const navItems = [
    { name: "Chat", icon: chatIcon, key: "chat" },
    { name: "Farms", icon: FarmsIcon, key: "Farms" },
    { name: "Home", icon: HomeIcon, key: "home" },
    { name: "Calender", icon: calenderIcon, key: "calender" },
    { name: "Setting", icon: settingIcon, key: "setting" },
  ];
  return (
    
    <footer className="w-full flex justify-around items-center bg-white border-t border-gray-200 py-2 ">
      {navItems.map((item) => (
        <div
          key={item.key}
          onClick={() => setActiveTab(item.key)}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <img
            src={item.icon}
            alt=""
            className={`h-6 w-6 ${activeTab === item.key ? 'text-green-300' : 'text-gray-500'}`}
          />
            <span
              className={`text-xs ${
                activeTab === item.key
                  ? "text-green-500 font-bold"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </span>
        
        </div>
      ))}
    </footer>
  );
};

export default Footer;
