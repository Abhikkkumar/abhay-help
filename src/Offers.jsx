import React from "react";
import "./offers.css";
import OffersImage from "./images/sale-offer-image-removebg.png";

export default function Offers() {
  return (
    <div className="offers">
      <hr />
      <h1>Web Offers</h1>
      <div className="offers-option">
        <p>All Offers</p>
        <p>Bus Offers</p>
        <p
          style={{
            color: "black",
            backgroundColor: "rgb(157, 162, 167)",
            borderRadius: "10px",
          }}
        >
          View All
        </p>
      </div>
      <img src={OffersImage} alt="offers" />
    </div>
  );
}
