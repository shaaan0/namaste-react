import React, { useState, useContext } from "react";
import LOGO_URL from "../utils/imageURLs";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import LoginContext from "../utils/LoginContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";

export default HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, update } = useContext(LoginContext);
  const [showCart, setShowCart] = useState(false);

  const cart = useSelector((store) => store.cart.item);

  const handleLogin = () => {
    if (loggedInUser) {
      update("");
    } else {
      update("Suzz");
    }
  };

  const handleCartShow = () => {
    if (cart.length) {
      setShowCart(!showCart);
    }
  };
  return (
    <div className=" bg-slate-50 shadow-lg">
      <div className="m-auto max-w-[1080px] flex justify-between">
        <div className="m-2">
          <img className="w-10" src={LOGO_URL.company_logo} />
        </div>
        <div className="flex items-center">
          <ul className="flex px-4 m-4 gap-4">
            <li>
              {" "}
              Online Status :{onlineStatus ? <span>✅</span> : <span>🔴</span>}
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="font-bold">
              <Link to="/cart">Cart - {cart.length}</Link>
            </li>
            <button className="login-btn" onClick={() => handleLogin()}>
              {" "}
              <Link to="/login">{loggedInUser ? loggedInUser : "Login"}</Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
