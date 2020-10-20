import React from "react";
import s from "./projectInMind.module.scss";

const ProjectInMind = () => {
  return (
    <section className={s.section}>
      <h1 className={s.projInMind}>
        I’m always interested in learning cool things. <br /> Do you have a
        project in mind?
      </h1>
      <h1 data-text="Let's Talk" className={s.letstalk}>
        Let's Talk.
      </h1>
    </section>
  );
};

export default ProjectInMind;
