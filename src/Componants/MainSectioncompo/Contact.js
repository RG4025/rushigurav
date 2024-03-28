import Swal from "sweetalert2";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as icon from "react-bootstrap-icons";
import { motion } from "framer-motion";
function Contact() {
  const yearone = useRef();
  const iconRef = useRef();

  useEffect(() => {
    // let year = document.getElementById("yearMain");
    let currYear = new Date();
    yearone.current.innerText = `All Rights Reserved @${currYear.getFullYear()}`;
    // yearone.current.innerText=currYear.getFullYear();
    // console.log(currYear.getFullYear());
  }, [yearone]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eql3fxd",
        "template_u95mj17",
        form.current,
        "doh70r-RBS96oifej"
      )
      .then(
        (result) => {
          (function alertNew() {
            Swal.fire({
              title: "Yeah!",
              text: "Your Response has been submitted!",
              icon: "success",
            });
          })();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          (function swAlert() {
            Swal.fire(
              "Sorry for the inconvenience! response is not submitted.., Check your internate connection."
            );
          })();
        }
      );
  };

  function resetForm() {
    setTimeout(() => {
      let form = document.getElementById("reset");
      form.reset();
    }, 5000);
  }

  return (
    <>
      <section className="sectionContact w-100 mt-3">
        <div className="">
          <div className="w-100 container">
            <div className="d-flex justify-content-start align-items-center py-3">
              <h4 className="aboutTitle">Let's Connect </h4>
            </div>
            <div className="contactMain">
              <form
                className="gap-3"
                id="reset"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="d-flex flex-column gap-3 flex-sm-row gap-sm-4 justify-content-evenly align-items-center">
                  <input
                    type="text"
                    placeholder="Name*"
                    name="user_name"
                    title="Enter Your Name"
                    className="w-100 p-2 p-sm-3"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    name="user_email"
                    title="Enter Your Email"
                    className="w-100 p-2 p-sm-3"
                    required
                  />
                </div>
                <div className="py-3 py-sm-4">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    cols=""
                    title="Enter Your Message"
                    placeholder="Message*"
                    className="w-100 p-2"
                    required
                  ></textarea>
                </div>
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <ul
                    ref={iconRef}
                    class="list-unstyled gap-1 gap-sm-2 d-flex justify-content-center align-items-center"
                  >
                    <motion.li
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      class="py-1 px-2 contactIcon d-flex justify-content-center align-items-center"
                    >
                      <a
                        target="_blank"
                        class="text-decoration-none"
                        href="https://www.linkedin.com/in/rushikesh-gurav-2694b0234/"
                      >
                        <icon.Linkedin />
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      class="py-1 px-2 contactIcon d-flex justify-content-center align-items-center"
                    >
                      <a
                        target="_blank"
                        class="text-decoration-none"
                        href="https://github.com/RG4025"
                      >
                        <icon.Github />
                      </a>
                    </motion.li>
                    <motion.li
                      initial={{ scale: 0 }}
                      animate={{ rotate: 360, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      class="py-1 px-2 contactIcon d-flex justify-content-center align-items-center"
                    >
                      <a
                        target="_blank"
                        class="text-decoration-none"
                        href="https://twitter.com/RG4025"
                      >
                        <icon.TwitterX />
                      </a>
                    </motion.li>
                  </ul>
                  <button
                    className="p-1 p-sm-2 fw-bold btn btn-secondary btn-sm "
                    type="submit"
                    onClick={resetForm}
                  >
                    <icon.ArrowUpRightSquare className="text-dark fs-6" /> Send
                    Message
                  </button>
                </div>
              </form>
            </div>
            <div className="py-3 py-sm-1 d-flex flex-column justify-content-center gap-2 align-items-center ">
              <div className="skillChildTwo py-1 px-4 d-flex justify-content-center align-items-center text-center">
                <small
                  id="yearMain"
                  className="ms-3 fs-6 text-info"
                  ref={yearone}
                ></small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
