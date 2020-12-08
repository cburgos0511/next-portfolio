import React, { useRef, useEffect, useState } from "react";
import s from "./form.module.scss";
import axios from "axios";
import { TimelineLite, Expo, gsap } from "gsap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { fadeInHeader, staggerReveal } from "../../../styles/animation";

const ContactForm = ({ state, onClose }) => {
  /* Server State Handling */
  const [serverState, setServerState] = useState();

  let sectionEl = useRef(null);
  let formEl = useRef(null);
  let formRightEl = useRef(null);
  let formLeftEl = useRef(null);
  let h1El = useRef(null);
  let iOneEl = useRef(null);
  let iTwoEl = useRef(null);
  let iThreeEl = useRef(null);

  const tl = new TimelineLite();

  useEffect(() => {
    if (state.clicked === false) {
      // close our form

      tl.to([formRightEl, formLeftEl, h1El, iThreeEl, iOneEl, iTwoEl], {
        duration: 1,
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      })
        .to(formEl, {
          height: "0",
          duration: 0.9,
          ease: Expo.easeOut,
        })
        .to(sectionEl, {
          height: "0",
          ease: Expo.easeOut,
          duration: 0.9,
        })
        .to(sectionEl, {
          duration: 0.01,
          css: { display: "none" },
        });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open our form
      gsap.to(sectionEl, {
        duration: 0.1,
        css: { display: "block" },
      });

      tl.to([sectionEl, formEl], {
        duration: 0,
        opacity: 1,
        height: "100%",
      })
        .to(
          formLeftEl,
          {
            delay: 1.2,
            duration: 1.2,
            opacity: 1,
            ease: Expo.easeInOut,
          },
          "+=.55"
        )
        .to(formRightEl, { duration: 1.2, opacity: 1 }, "-=.65");

      staggerReveal(sectionEl, formEl);
      fadeInHeader(h1El, iThreeEl, iOneEl, iTwoEl);
    }
  }, [state]);

  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  return (
    <div id="section" ref={(el) => (sectionEl = el)} className={`${s.modal}`}>
      <section ref={(el) => (formEl = el)} style={{}} className={s.section}>
        <button className={s.modal__close} onClick={onClose}>
          (close)
        </button>
        <div className={s.modal__imgcover}>
          <img src="/contact.jpg" />
        </div>
        <div className={s.modal__rightcontainer}>
          <h1
            ref={(el) => (h1El = el)}
            className={s.modal__rightcontainer__hello}
          >
            <i ref={(el) => (iOneEl = el)}>It's a</i> pleasure <br />{" "}
            <i ref={(el) => (iTwoEl = el)}>to</i> meet{" "}
            <i ref={(el) => (iThreeEl = el)}>you.</i>
          </h1>

          <Formik
            className={s.modal__rightcontainer__form}
            validate={(values) => {
              const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              const errors = {};
              if (!values.name) {
                errors.name = "Name Required";
              }
              if (!values.email || !emailRegex.test(values.email)) {
                errors.email = "Valid Email Required";
              }
              if (!values.message) {
                errors.message = "Message Required";
              }
              if (!values.phone) {
                errors.phone = "Phone Required";
              }
              return errors;
            }}
            initialValues={{
              name: "",
              email: "",
              message: "",
              phone: "",
            }}
            onSubmit={(values, actions) => {
              // TODO: Hook into actual form submission
              axios({
                method: "POST",
                url: "https://formspree.io/f/xvovwzpp",
                data: values,
              })
                .then((response) => {
                  actions.setSubmitting(false);
                  actions.resetForm();
                  handleServerResponse(true, "Thanks!");
                  onClose();
                })
                .catch((error) => {
                  actions.setSubmitting(false);
                  handleServerResponse(false, error.response.data.error);
                });
            }}
          >
            {() => (
              <Form className={s.form}>
                <div ref={(el) => (formLeftEl = el)} className={s.form__left}>
                  <label className={s.formlabel} htmlFor="name">
                    Name{" "}
                  </label>
                  <Field className={s.forminput} name="name" />
                  <ErrorMessage
                    name="name"
                    render={(msg) => <span className={s.error}>*{msg}</span>}
                  />
                  <label className={s.formlabel} htmlFor="email">
                    Email{" "}
                  </label>
                  <Field className={s.forminput} name="email" />
                  <ErrorMessage
                    name="email"
                    render={(msg) => <span className={s.error}>*{msg}</span>}
                  />
                  <label className={s.formlabel} htmlFor="phone">
                    Phone{" "}
                  </label>
                  <Field className={s.forminput} name="phone" />
                  <ErrorMessage
                    name="phone"
                    render={(msg) => <span className={s.error}>*{msg}</span>}
                  />
                </div>
                <div ref={(el) => (formRightEl = el)} className={s.form__right}>
                  <label className={s.formlabel} htmlFor="message">
                    Message{" "}
                  </label>
                  <Field
                    className={s.forminput}
                    name="message"
                    component="textarea"
                    rows={13}
                  />
                  <ErrorMessage
                    name="message"
                    render={(msg) => <span className={s.error}>*{msg}</span>}
                  />
                  <div className={s.submitwrap}>
                    <button className={s.submitwrap__btn} type="submit">
                      Send
                    </button>
                  </div>
                  {serverState && (
                    <p className={!serverState.ok ? s.reserror : s.ressucces}>
                      {serverState.msg}
                    </p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};
export default ContactForm;
