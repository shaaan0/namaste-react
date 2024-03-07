import React, { useState } from "react"
import LOGO_URL from "../utils/imageURLs"

export default HeaderComponent = () => {

    const [btnName, setBtnName] = useState("Login")

    return(

        <div className="nav-bar">
        <div className="logo-container">
            <img className="logo-img" src={LOGO_URL.company_logo}/>
            <div className="logo-name">Company Name</div>
        </div>
        <div className="nav-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>
                    Cart
                </li>
                <button className="login-btn" onClick={() => { setBtnName("Logout")}}>{btnName}</button>
            </ul>
        </div>
    </div>
)
}


