import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import s from "./works.module.scss";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? -1200 : 1200,
      opacity: 0,
    };
  },
};
const title = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.22,
    },
  },
};

const word = {
  hidden: { y: 120 },
  visible: {
    y: 0,
  },
};

const Slider = ({ data }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [explore, setExplore] = useState(false);
  const imageIndex = wrap(0, data.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const show = !explore ? "none" : "block";

  return (
    <div className={s.sliderContainer}>
      <AnimatePresence custom={direction}>
        <motion.div
          style={{ position: "absolute", left: 200 }}
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            duration: 1.4,
          }}
        >
          <motion.div className={s.content}>
            <motion.div variants={title} initial="hidden" animate="visible">
              <div className="hidden">
                <motion.h1
                  variants={word}
                  transition={{ duration: 1.23, delay: 1.33 }}
                >
                  {data[imageIndex].titlef}
                </motion.h1>
              </div>
              <div className="hidden">
                <motion.h1
                  variants={word}
                  transition={{ duration: 1.23, delay: 1.33 }}
                >
                  {data[imageIndex].titleS}
                </motion.h1>
              </div>
            </motion.div>

            <div
              className={s.number}
              onMouseEnter={() => setExplore(true)}
              onMouseLeave={() => setExplore(false)}
            >
              <div className={s.divider} />
              <button>{imageIndex + 1}</button>
              <div className={s.explore} style={{ display: show }}>
                <h6>Explore</h6>
              </div>
            </div>
          </motion.div>
          <div className={s.type}>
            <motion.div
              variants={title}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.4, delay: 1 }}
            >
              <div className="hidden">
                <motion.h3 variants={word} transition={{ duration: 1.5 }}>
                  Web application
                </motion.h3>
              </div>
              <div className="hidden">
                <motion.h3 variants={word} transition={{ duration: 1.5 }}>
                  2020
                </motion.h3>
              </div>
            </motion.div>
          </div>

          <div className={s.slider__img}>
            <motion.img src={data[imageIndex].src} />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48.669 25.3344L25.3345 48.6689L20.3847 43.7192L39.4113 24.6926L20.6676 6.6668L25.3345 1.9999L48.669 25.3344Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.00001 25.3345L25.3345 2L30.2843 6.94975L11.2577 25.9764L30.0014 44.0021L25.3345 48.669L2.00001 25.3345Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
