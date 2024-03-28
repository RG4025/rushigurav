import React from "react";
import * as icon from "react-bootstrap-icons";
import html_logo from "../../Images/html_logo.jpeg";
import css_logo from "../../Images/css_logo.png";
import js_logo from "../../Images/js_logo.png";
import jquery_logo from "../../Images/jquery_logo.jpg";
import react_logo from "../../Images/react_logo.png";
import java_logo from "../../Images/java_logo.png";
import jdbc_logo from "../../Images/jdbc_logo.png";
import mysql_logo from "../../Images/mysql_logo.jpg";
import servlet_logo2 from "../../Images/servlet_logo2.jpg";
import springboot_logo from "../../Images/springboot_logo.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import udemyC from "../../CertificatesPDF/udemyC++.pdf";
import reactCer from "../../CertificatesPDF/CourseraReactBasics.pdf";
import mscit from "../../CertificatesPDF/MS-CIT_Rushi.pdf";
import Javascript from "../../CertificatesPDF/javascript_Rushi.pdf";
import uxDesign from "../../CertificatesPDF/CourseraRushikeshGurav.pdf";
import { motion } from "framer-motion";

function SkillsAndCertificates() {
  const skillFrontend = [
    {
      img: html_logo,
      title: "HTML",
    },
    {
      img: css_logo,
      title: "CSS",
    },
    {
      img: js_logo,
      title: "Javascript",
    },
    {
      img: jquery_logo,
      title: "jQuery",
    },
    {
      img: react_logo,
      title: "React Js",
    },
  ];
  const skillBackend = [
    {
      img: java_logo,
      title: "Java",
    },
    {
      img: jdbc_logo,
      title: "JDBC",
    },
    {
      img: servlet_logo2,
      title: "Servlet",
    },
    {
      img: springboot_logo,
      title: "Springboot",
    },
    {
      img: mysql_logo,
      title: "MySQL",
    },
  ];

  const owlResponsive = {
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
    },
  };

  const certificatesMain = [
    {
      cName: "Javascript",
      cDate: "2023",
      cBy: "Meta",
      cLink: Javascript,
    },
    {
      cName: "React Basics",
      cDate: "2023",
      cBy: "Meta",
      cLink: reactCer,
    },
    {
      cName: "C++",
      cDate: "2023",
      cBy: "Udemy",
      cLink: udemyC,
    },
    {
      cName: "MS-CIT",
      cDate: "2023",
      cBy: "MSRTC",
      cLink: mscit,
    },
    {
      cName: "UX Design",
      cDate: "2023",
      cBy: "Google",
      cLink: uxDesign,
    },
  ];

  return (
    <>
      <section className="">
        <div className="sectionSkillParent">
          <div className="d-flex justify-content-end align-items-center pb-2">
            <h4 className="aboutTitle">Frontend </h4>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5">
            {skillFrontend.map((e, index) => {
              return (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="col py-2 "
                  key={index}
                >
                  <div className="container skillChildOne p-3  d-flex flex-column justify-content-center align-items-center">
                    <div className="skillImage d-flex justify-content-center align-items-center">
                      <img src={e.img} alt="Language" className="img-fluid" />
                    </div>
                    <div className="py-2  fw-bold">
                      <span>{e.title}</span>{" "}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="sectionSkillParent py-3">
          <div className="d-flex justify-content-start align-items-center pb-2">
            <h4 className="aboutTitle">Backend</h4>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5">
            {skillBackend.map((e, index) => {
              return (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: -360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="col py-2 "
                  key={index}
                >
                  <div className="container skillChildOne p-3  d-flex flex-column justify-content-center align-items-center">
                    <div className="skillImage d-flex justify-content-center align-items-center">
                      <img src={e.img} alt="Language" className="img-fluid" />
                    </div>

                    <div className="py-2  fw-bold">
                      <span>{e.title}</span>{" "}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="sectionSkillParent py-4">
          <div className="d-flex justify-content-start align-items-center pb-3">
            <h4 className="aboutTitle">Certificates</h4>
          </div>
          <div className="skillChildTwo p-3">
            <OwlCarousel
              className=""
              loop
              margin={10}
              dots={true}
              autoplay={true}
              autoplayTimeout={2000}
              autoplayHoverPause={true}
              items={5}
              responsive={owlResponsive.responsive}
            >
              {certificatesMain.map((e) => {
                return (
                  <div class="owlItem p-2">
                    <div className="container text-center">
                      <p>
                        <strong>{e.cName}</strong>
                      </p>
                      <p className="d-flex justify-content-around align-items-center">
                        <span>
                          From : <strong>{e.cBy}</strong>
                        </span>
                        <span>|</span>
                        <span>{e.cDate}</span>
                      </p>
                      <p>
                        <a href={e.cLink} target="_blank">
                          <button
                            className="btn btn-primary btn-sm"
                            type="button"
                          >
                            View Here
                          </button>
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsAndCertificates;
