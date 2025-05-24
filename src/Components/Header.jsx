import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("LogIn");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between lg:bg-pink-100 shadow-lg sm:bg-blue-300 ">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex-item-centre">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "LogIn" ? setBtn("LogOut") : setBtn("LogIn");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
