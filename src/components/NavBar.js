import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../assets/Logo_black.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <a href={() => {window.location.href="/"}}>
        <img src={Logo} alt="movies-now" style={{height: "40px", padding: "10px"}}/>
      </a>
     
    </div>
  )
};

export default NavBar;