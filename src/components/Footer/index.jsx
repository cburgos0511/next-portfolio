import React, { useEffect } from "react";
import s from "./footer.module.scss";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <footer id="footer" className={s.footer}>
      <ul className={s.footer__container}>
        <div className={s.footer__container__left}>
          <li>
            <a href="/">dribble</a>
          </li>
          <li>
            <a href="/">dribble</a>
          </li>
          <li>
            <a href="/">dribble</a>
          </li>
        </div>
        <div>
          <li>
            <Link
              className={s.totop}
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span data-text="back to top">back to top</span>
            </Link>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
