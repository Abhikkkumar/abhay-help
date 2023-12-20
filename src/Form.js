import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div className="form">
      <div className="icon-input ">
        <div className="icon">
          <span class="material-symbols-outlined" style={{ color: "red" }}>
            arrow_outward
          </span>
        </div>
        <input type="text" placeholder="Leaving From" />
      </div>
      <div className="icon-input">
        <div className="icon">
          <span class="material-symbols-outlined" style={{color:"red"}}>location_on</span>
        </div>
        <input type="text" placeholder="Going to" />
      </div>

      <div className="icon-input">
        <div className="icon" style={{cursor:"pointer"}}>
          <span class="material-symbols-outlined" style={{ color: "red" }}>
            calendar_month
          </span>
        </div>
        <input type="text" placeholder="Date of Journey" />
      </div>
      <button >Submit</button>
    </div>
  );
}
