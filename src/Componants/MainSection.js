import React, { useRef } from "react";
import "../App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./MainSectioncompo/About";
import SkillsAndCertificates from "./MainSectioncompo/SkillsAndCertificates";
import Contact from "./MainSectioncompo/Contact";
import Projects from "./MainSectioncompo/Projects";
import Education from "./MainSectioncompo/Education";
import { motion } from "framer-motion";
function MainSection() {
  const navRef = useRef();

  const navbarLinks = [
    {
      name: "About",
      to: "/",
    },
    {
      name: "Skills",
      to: "/SkillsAndCertificates",
    },
    {
      name: "Education",
      to: "/Education",
    },
    {
      name: "Projects",
      to: "/Projects",
    },
    {
      name: "Contact",
      to: "/Contact",
    },
  ];

  return (
    <>
      <section className="sectionOneMain">
        <div className=" ">
          <motion.div ref={navRef} className="navbarMainSection p-2 py-md-3 ">
            <motion.div  className="">
              <ul className="navbarScroll navScrollbar">
                {navbarLinks.map((e, index) => {
                  return (
                    <li className="navLink px-0 py-0 py-sm-0" key={index}>
                      <NavLink className="navItem" to={e.to}>
                        {e.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
          <div className="container pt-3">
            <Routes>
              <Route path="/" element={<About />} />
              <Route
                path="/SkillsAndCertificates"
                element={<SkillsAndCertificates />}
              />
              <Route path="/Education" element={<Education />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainSection;
