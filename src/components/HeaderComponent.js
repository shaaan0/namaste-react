import React, { useState } from "react";
import LOGO_URL from "../utils/imageURLs";
import { Link } from "react-router-dom";

export default HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL.company_logo} />
        <div className="logo-name">Company Name</div>
      </div>
      <div className="nav-container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName("Logout");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
