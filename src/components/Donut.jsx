import React from "react";

const Donut = ({
  top = "unset",
  bottom = "unset",
  left = "unset",
  right = "unset",
  bgColor = "#01BCD4",
}) => {
  return (
    <svg
      style={{ position: "absolute", top, left, bottom, right, zIndex: -1 }}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="34" height="34" rx="12.0417" fill={bgColor} />
      <rect
        x="9.91667"
        y="9.91669"
        width="14.1667"
        height="14.1667"
        rx="4.25"
        fill="black"
      />
    </svg>
  );
};

export default Donut;
