import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {
  const [btn, setBtn] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
