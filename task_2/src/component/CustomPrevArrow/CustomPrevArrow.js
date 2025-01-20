import React from "react";
import "./CustomPrevArrow.css"

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
    </svg>
  </div>
);

export default CustomPrevArrow;
