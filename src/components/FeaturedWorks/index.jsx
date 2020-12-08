import React, { useEffect, useRef } from "react";
import s from "./works.module.scss";
import Donut from "../Donut";
import Slider from "./Slider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 0,
    titlef: "Web",
    titleS: "Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/burgos.jpg",
    cate: "Work & Career",
  },
  {
    id: 1,
    titlef: "Ultra",
    titleS: "Marathoner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/burgos.jpg",
    cate: "Life & Hobby",
  },

  {
    id: 2,
    titlef: "Programming",
    titleS: "Student",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/burgos.jpg",
    cate: "Work & Career",
  },
];

const FeaturedWorks = () => {
  useEffect(() => {
    gsap.from("#feature", {
      scrollTrigger: "#feature",
      y: 120,
      duration: 1.1,
    });
    gsap.from("#work", {
      scrollTrigger: "#work",
      y: 120,
      duration: 1.1,
    });
  });

  return (
    <section id="about" className={s.section}>
      <Donut move={-450} top="8%" left="2%" />
      <Donut move={-240} top="20%" right="10%" />
      <Donut move={-120} top="65%" left="16%" />
      <Donut move={-360} bottom="5%" right="5%" />
      <div className={s.header}>
        <div className={s.header__text}>
          <div style={{ width: "65vw" }} className="hidden">
            <h1 id="feature">a bit_</h1>
          </div>
          <div className="hidden">
            <h1 id="work">off me</h1>
          </div>
        </div>
      </div>
      <div className={s.work__container}>
        <Slider data={data} />
      </div>
    </section>
  );
};

export default FeaturedWorks;
