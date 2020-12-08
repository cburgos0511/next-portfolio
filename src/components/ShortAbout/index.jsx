import React from "react";
import s from "./shortAbout.module.scss";
import { motion } from "framer-motion";
import Circle from "../../../svg/circle.svg";

const text = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
  },
};
const circle = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const p = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delay: 1.3,
    },
  },
};

const pSpan = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ShortAbout = () => {
  return (
    <div className={s.container}>
      <div className={s.circle}>
        <motion.div
          variants={circle}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.7, delay: 1.3 }}
        >
          <Circle />
        </motion.div>

        <div className={s.circle__creativity}>
          <motion.p
            variants={text}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.4, delay: 1.3 }}
          >
            <span>Freelace</span>
            <br />
            <span>Developer</span>
          </motion.p>
        </div>
        <div className={s.circle__date}>
          <div className="hidden">
            <motion.h1
              variants={text}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.4, delay: 1 }}
            >
              09
            </motion.h1>
          </div>
          <div className={s.circle__date__month}>
            <motion.h3
              variants={text}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.4, delay: 1.2 }}
            >
              <span>DEC</span>
              <br />
              <span className={s.available}>available for coffee</span>
            </motion.h3>
          </div>
        </div>
      </div>
      <div className={s.about}>
        <motion.p
          className={s.about__paragraph}
          variants={p}
          initial="hidden"
          animate="visible"
        >
          <span className="hidden">
            <motion.span variants={pSpan}>
              I am a full stack developer and freelancer based in US.
            </motion.span>
          </span>

          <span className="hidden">
            <motion.span variants={pSpan}>
              National customers have relied on me for design,
            </motion.span>
          </span>
          <span className="hidden">
            <motion.span variants={pSpan}>
              implementation, and management of their digital products.
            </motion.span>
          </span>
          <span className="hidden">
            <motion.span variants={pSpan}>
              As a developer, I also work with web companies,
            </motion.span>
          </span>
          <span className="hidden">
            <motion.span variants={pSpan}>
              startups and individuals to create a blueprint for the digital
              business.
            </motion.span>
          </span>

          <span className="hidden">
            <motion.span variants={pSpan}>
              Also, enjoy learning new tech and running.
            </motion.span>
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default ShortAbout;
