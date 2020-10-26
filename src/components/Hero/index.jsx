import React from "react";
import s from "./hero.module.scss";
import Donut from "../Donut";
import heroMe from "./heroMe";
import { motion } from "framer-motion";

const h1 = {
  hidden: { y: 150 },
  visible: {
    y: 0,
  },
};
const icon = {
  hidden: {
    opacity: 0,
    y: -80,
    x: -80,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};
const ul = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const li = {
  hidden: { y: 40 },
  visible: {
    y: 0,
  },
};

const Hero = () => {
  return (
    <>
      <Donut move={-180} delay={1.9} />
      <Donut move={-240} delay={2.1} top="40%" left="14%" />
      <Donut move={-350} delay={1.8} top="77%" right="13%" />
      <Donut move={-100} bottom="-25%" left="40%" />
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          variants={h1}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5 }}
          className={s.herotext}
        >
          Hello<span>.</span>
        </motion.h1>
      </div>
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          variants={h1}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 0.1 }}
          className={s.herotext}
        >
          I am Cruz
        </motion.h1>
      </div>

      <div className={s.svgwrap}>
        <svg
          width="47"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, delay: 1.1 }}
            d="M46 46V1H41.3846V37.7105L4.55263 1L1 4.55263L37.4747 41.3846H1V46H46Z"
            stroke="white"
          />
        </svg>

        <motion.ul variants={ul} initial="hidden" animate="visible">
          {heroMe.map((item) => (
            <div style={{ overflow: "hidden" }}>
              <motion.li
                transition={{ duration: 2, delay: 0.8 }}
                variants={li}
                key={item.id}
              >
                {item.position}
              </motion.li>
            </div>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default Hero;
