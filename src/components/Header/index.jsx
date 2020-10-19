import React from "react";
import Link from "next/link";
import s from "./header.module.scss";

const Header = () => {
  return (
    <nav className={s.nav}>
      <Link href="/about">
        <a className={s.nav__link}>about me</a>
      </Link>
      <Link href="/work">
        <a className={s.nav__link}>work</a>
      </Link>
      <Link href="/contact">
        <a className={s.nav__link} s>
          contact me
        </a>
      </Link>
    </nav>
  );
};

export default Header;
