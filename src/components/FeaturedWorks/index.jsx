import React from "react";
import s from "./works.module.scss";
// import Work from "./Work";
import Donut from "../Donut";
import Slider from "./Slider";

const data = [
  {
    id: 0,
    titlef: "Running",
    titleS: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/burgos.jpg",
  },
  {
    id: 1,
    titlef: "Running",
    titleS: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/burgos.jpg",
  },
  {
    id: 2,
    titlef: "Running",
    titleS: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/burgos.jpg",
  },
  {
    id: 3,
    titlef: "Running",
    titleS: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/burgos.jpg",
  },
];

const FeaturedWorks = () => {
  return (
    <section className={s.section}>
      <Donut move={-450} top="8%" left="2%" />
      <Donut move={-240} top="20%" right="10%" />
      <Donut move={-120} top="65%" left="16%" />
      <Donut move={-360} bottom="5%" right="5%" />
      <div className={s.header}>
        <h1 className={s.header__text}>
          <span>featured_</span> <br />
          <span>works</span>
        </h1>
      </div>
      <div className={s.work__container}>
        <Slider data={data} />
      </div>
    </section>
  );
};

export default FeaturedWorks;
