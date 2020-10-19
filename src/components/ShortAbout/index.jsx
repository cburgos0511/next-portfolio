import React from "react";
import s from "./shortAbout.module.scss";
import Circle from "../../../svg/circle.svg";

const ShortAbout = () => {
  return (
    <div className={s.container}>
      <div className={s.circle}>
        <Circle />
        <div className={s.circle__creativity}>
          <span>Show</span>
          <span>Creativity</span>
        </div>
        <div className={s.circle__date}>
          <span>09</span>
          <div className={s.circle__date__month}>
            <span>DEC</span>
            <span className={s.available}>available for coffee</span>
          </div>
        </div>
      </div>
      <div className={s.about}>
        <p className={s.about__paragraph}>
          <span>I am a developer and UX/UI designer based in Italy.</span>
          <span>
            National and international customers have relied on me for design,
          </span>
          <span>implementation, and management of their digital products.</span>
          <span>
            As a freelancer, I works also with web agencies, companies,
          </span>
          <span>
            startups and individuals to create a blueprint for the digital
            business.
          </span>
          <span>Also, Judge at CSSDA and Envato Author.</span>
        </p>
      </div>
    </div>
  );
};

export default ShortAbout;
