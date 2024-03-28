import React, { useRef } from "react";
import * as icon from "react-bootstrap-icons";
import { motion } from "framer-motion";
function Education() {
  const educationMain = [
    {
      eTitle: "Java Fullstack Development",
      eDate: "Mar 2024",
      eContent:
        "I became a full-stack Java developer at Envision Institute in Pune, where I also gained expertise in front-end and back-end technologies.",
      eGrade: null,
    },
    {
      eTitle: "Bachlor Of Computer Application (BCA)",
      eDate: "2020 — 2023",
      eContent:
        "completed the graduation program at Bharti Vidyapeeth Kolhapur, deemed to be university Pune, in computer application.",
      eGrade: `A+, CGPA - 9.07`,
    },
    {
      eTitle: " Higher Secondary School (HSC)",
      eDate: "2017 — 2019",
      eContent:
        "completed the HSC with the PCM-It group at B.Y. College Peth Vadgaon.",
      eGrade: "63.80%",
    },
  ];

  const iconRef = useRef();

  return (
    <>
      <section className="sectionEducation" ref={iconRef}>
        <motion.div drag dragConstraints={iconRef} className="container">
          <div className="d-flex justify-content-start align-items-center gap-3 py-2 mb-3">
            <div className="socialTwoOne d-flex justify-content-center align-items-center px-2  rounded-3">
              <i class="bi bi-award-fill"></i>
            </div>
            <div className="d-flex justify-content-start align-items-center pb-2">
              <h4 className="aboutTitle">Education</h4>
            </div>
          </div>

          <motion.ol class="education-list">
            {educationMain.map((e) => {
              return (
                <motion.li class="educationItem">
                  <h5 class="h5 educationItem-title">{e.eTitle}</h5>
                  <span>{e.eDate}</span>
                  <p class="educationText">{e.eContent}</p>
                  {e.eGrade == null ? " " : <p>Grade : {e.eGrade}</p>}
                </motion.li>
              );
            })}
          </motion.ol>
        </motion.div>
      </section>
    </>
  );
}

export default Education;
