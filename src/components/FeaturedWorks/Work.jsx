import React from "react";
import s from "./works.module.scss";

const Work = ({ titleF, titleS, description, src }) => {
  return (
    <div className={s.work}>
      <div className={s.work__texts}>
        <h3>
          {titleF} <br />
          {titleS}
        </h3>
        <p>{description}</p>
      </div>
      <div className={s.work__img}>
        <img src={src} alt="running" />
      </div>
    </div>
  );
};

export default Work;
