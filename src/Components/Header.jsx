import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("LogIn");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
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
