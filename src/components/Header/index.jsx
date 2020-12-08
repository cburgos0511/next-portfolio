import React, { useState } from "react";
import Link from "next/link";
import s from "./header.module.scss";
import { motion } from "framer-motion";
import ContactForm from "../Contact/Form";

const nav = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
  },
};

const Header = ({ handleOpen }) => {
  const [formState, setFormState] = useState({
    initial: false,
    clicked: null,
  });

  const handleForm = () => {
    if (formState.initial === false) {
      setFormState({
        initial: null,
        clicked: true,
      });
    } else if (formState.clicked === true) {
      setFormState({
        clicked: !formState.clicked,
      });
    } else if (formState.clicked === false) {
      setFormState({
        clicked: !formState.clicked,
      });
    }
  };
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
      <ContactForm state={formState} onClose={handleForm} />

      <Link href="#about">
        <a data-text="about me" className={s.nav__link}>
          about me
        </a>
      </Link>
      <a onClick={handleForm} data-text="contact" className={s.nav__link}>
        contact
      </a>
    </motion.nav>
  );
};

export default Header;
