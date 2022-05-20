import React from "react";

function EnterSvg(props) {
  // color: white | orange
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.6875 0.468756V4.34107C5.14453 4.1786 5.57532 4.24427 5.93677 4.48622L7.85388 5.92274C8.20362 6.15394 8.4375 6.59156 8.4375 7.06251C8.4375 7.53358 8.20362 7.9712 7.81128 8.23256L5.97888 9.60866C5.54004 9.90456 5.11865 9.93703 4.6875 9.78383C4.6875 9.93068 4.6875 12.8174 4.6875 12.7188C4.6875 12.9779 4.89709 13.1875 5.15625 13.1875H9.375V3.28126C9.375 2.81117 9.61487 2.3672 10.0054 2.10853L12.8167 5.72205e-06H5.15625C4.89709 5.72205e-06 4.6875 0.209723 4.6875 0.468756Z"
        fill={props.color === "white" ? "white" : "#FF8900"}
      />
      <path
        d="M15 0.468738C15 0.299914 14.9093 0.144274 14.7623 0.0609004C14.6154 -0.0223517 14.4351 -0.0201544 14.2899 0.0668818L10.5399 2.87938C10.3989 2.96398 10.3125 3.11644 10.3125 3.28124V15.5313C10.3125 15.7002 10.4031 15.8558 10.55 15.9391C10.6967 16.0222 10.8771 16.0203 11.0225 15.9332L14.7725 13.1207C14.9135 13.036 15 12.8835 15 12.7187V0.468738ZM11.7196 9.40625C11.4607 9.40625 11.2509 9.19641 11.2509 8.9375C11.2509 8.67858 11.4607 8.46874 11.7196 8.46874C11.9785 8.46874 12.1884 8.67858 12.1884 8.9375C12.1884 9.19641 11.9785 9.40625 11.7196 9.40625Z"
        fill={props.color === "white" ? "white" : "#FF8900"}
      />
      <path
        d="M0.46875 8H4.6875V8.46874C4.6875 8.64184 4.78272 8.80065 4.93518 8.8822C5.08545 8.96276 5.27088 8.95568 5.41626 8.85876L7.29127 7.45251C7.42176 7.3656 7.50001 7.21912 7.50001 7.06262C7.50001 6.90601 7.42176 6.75952 7.29127 6.67261L5.41626 5.266C5.27295 5.17042 5.08716 5.16163 4.93518 5.24268C4.78272 5.32422 4.6875 5.48304 4.6875 5.65613V6.12512H0.46875C0.209595 6.12512 0 6.33472 0 6.59387V7.53137C0 7.7904 0.209595 8 0.46875 8Z"
        fill={props.color === "white" ? "white" : "#FF8900"}
      />
    </svg>
  );
}

export default EnterSvg;