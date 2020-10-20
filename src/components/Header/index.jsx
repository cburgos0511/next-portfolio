import React from "react";
import Link from "next/link";
import s from "./header.module.scss";

const Header = () => {
  return (
    <nav className={s.nav}>
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
        <a data-text="contact" className={s.nav__link} s>
          contact
        </a>
      </Link>
    </nav>
  );
};

export default Header;
