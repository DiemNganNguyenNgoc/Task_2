// src/components/CustomNextArrow.js
import React from "react";
import "./CustomNextArrow.css"

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
    </svg>
  </div>
);

export default CustomNextArrow;
