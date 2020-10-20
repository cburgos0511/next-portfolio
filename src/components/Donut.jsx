import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Donut = ({
  top = "unset",
  bottom = "unset",
  left = "unset",
  right = "unset",
  bgColor = "#01BCD4",
  move = -100,
}) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 2000], [0, move]);
  return (
    <motion.svg
      style={{
        position: "absolute",
        top,
        left,
        bottom,
        right,
        zIndex: -1,
        y: y,
      }}
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
    </motion.svg>
  );
};

export default Donut;
