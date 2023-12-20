import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-list home">
        <span class="material-symbols-outlined" style={{color:"red"}}>home</span>
        <p style={{color:"red"}}>Home</p>
      </div>
      <div className="footer-list booking">
        <span class="material-symbols-outlined">edit_calendar</span>
        <p>Booking</p>
      </div>
      <div className="footer-list menu">
        <span class="material-symbols-outlined">widgets</span>
        <p>Menu</p>
      </div>
      <div className="footer-list wallet">
        <span class="material-symbols-outlined">account_balance_wallet</span>
        <p>Wallet</p>
      </div>
      <div className="footer-list ">
        <span class="material-symbols-outlined">chat</span>
        <p>Chat</p>
      </div>
    </div>
  );
}
