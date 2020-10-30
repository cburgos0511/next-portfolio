import React from "react";
import Link from "next/link";
import s from "./header.module.scss";
import { motion } from "framer-motion";

const nav = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
  },
};

const Header = () => {
  return (
    <motion.nav
      id="top"
      variants={nav}
      initial="hidden"
      animate="visible"
      transition={{
        delay: -0.5,
        type: "spring",
        stiffness: 100,
        velocity: 5,
      }}
      className={s.nav}
    >
      <Link href="/about">
        <a data-text="about me" className={s.nav__link}>
          about me
        </a>
      </Link>
      <Link href="/work">
        <a data-text="work" className={s.nav__link}>
          work
        </a>
      </Link>
      <Link href="/contact">
        <a data-text="contact" className={s.nav__link}>
          contact
        </a>
      </Link>
    </motion.nav>
  );
};

export default Header;
