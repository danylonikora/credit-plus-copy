import React from "react";
import "./PhoneInfo.scss";

function PhoneInfo({ color }) {
  return (
    <div className="phone-info" style={{ color: color || "#fff" }}>
      <a className="phone-info__number" href="tel:0800753363">
        0 800 753 363
      </a>
      <span>безкоштовно по Україні</span>
    </div>
  );
}

export default PhoneInfo;
