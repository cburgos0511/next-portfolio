import React from "react";
import s from "./hero.module.scss";
import Arrow from "../../../svg/hero-arrow.svg";
import Donut from "../Donut";
import heroMe from "./heroMe";

const Hero = () => {
  return (
    <>
      <h1 className={s.herotext}>
        Hello<span>.</span>
        <br />I am Cruz
        <Donut move={-180} />
        <Donut move={-240} top="40%" left="14%" />
        <Donut move={-350} top="77%" right="13%" />
        <Donut move={-100} bottom="-25%" left="40%" />
      </h1>
      <div className={s.svgwrap}>
        <Arrow />
        <ul>
          {heroMe.map((item) => (
            <li key={item.id}>{item.position}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hero;
