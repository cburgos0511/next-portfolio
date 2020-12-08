import React, { useEffect, useState } from "react";
import s from "./projectInMind.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ContactForm from "../Contact/Form";
gsap.registerPlugin(ScrollTrigger);

const ProjectInMind = () => {
  useEffect(() => {
    const handleFadeUp = () => {
      for (let i = 1; i <= 7; i++) {
        gsap.from(`#text-${i}`, {
          scrollTrigger: `#text-${i}`,
          y: 120,
          duration: 1.1,
        });
      }
    };
    gsap.from(`#text-8`, {
      scrollTrigger: `#text-8`,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    });
    handleFadeUp();
  });
  const [formState, setFormState] = useState({
    initial: false,
    clicked: null,
  });

  const handleForm = () => {
    if (formState.initial === false) {
      setFormState({
        initial: null,
        clicked: true,
      });
    } else if (formState.clicked === true) {
      setFormState({
        clicked: !formState.clicked,
      });
    } else if (formState.clicked === false) {
      setFormState({
        clicked: !formState.clicked,
      });
    }
  };

  return (
    <section className={s.section}>
      <ContactForm state={formState} onClose={handleForm} />

      <div className="hidden">
        <h1 id="text-1" className={s.projInMind}>
          I’m always
        </h1>
      </div>
      <div className="hidden">
        <h1 id="text-2" className={s.projInMind}>
          interested in
        </h1>
      </div>
      <div className="hidden">
        <h1 id="text-3" className={s.projInMind}>
          learning cool
        </h1>
      </div>
      <div className="hidden">
        <h1 id="text-4" className={s.projInMind}>
          things.
        </h1>
      </div>
      <div className="hidden">
        <h1 id="text-5" className={s.projInMind}>
          Do you have
        </h1>
      </div>
      <div className="hidden">
        <h1 id="text-6" className={s.projInMind}>
          a project in
        </h1>
      </div>
      <div className="hidden">
        <h1 id="text-7" className={s.projInMind}>
          mind?
        </h1>
      </div>
      <div id="text-8">
        <h1 onClick={handleForm} data-text="Let's Talk" className={s.letstalk}>
          Let's Talk.
        </h1>
      </div>
    </section>
  );
};

export default ProjectInMind;
