import React from "react";
import { homeIcon, userNoAuth } from "../img";

import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img className="header-home-icon" src={homeIcon} alt="" />
        <ul className="header-menu">
          <li>Home</li>
          <li>Rooms</li>
          <li>Devices</li>
          <li>About</li>
        </ul>
        <div className="header-user-auth">
          <button className="header-user-auth-btn">Sign In</button>
          <img className="header-user-auth-icon" src={userNoAuth} alt="" />
        </div>
      </div>
    </>
  );
};
