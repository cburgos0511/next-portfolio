import React from "react";
import s from "./works.module.scss";
import Work from "./Work";
import Donut from "../Donut";

const data = [
  {
    id: 0,
    titlef: "Running_",
    titleS: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/running.jpg",
  },
  {
    id: 1,
    titlef: "Running_",
    titleS: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/running.jpg",
  },
  {
    id: 2,
    titlef: "Running_",
    titleS: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/running.jpg",
  },
  {
    id: 3,
    titlef: "Running_",
    titleS: "Tracker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.",
    src: "/running.jpg",
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
        {data.map((work, i) => (
          <Work
            index={i}
            titleS={work.titleS}
            titleF={work.titlef}
            description={work.description}
            src={work.src}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;
