import React from "react";
import logo from "./images/seat-adda.jpg";
// import bars from "./images/bars-solid.svg";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="seat-adda-logo" />
      {/* <img className='bars' src={bars} alt="toggle-bars" /> */}
      <span className="material-symbols-outlined bars">menu</span>
    </div>
  );
}
