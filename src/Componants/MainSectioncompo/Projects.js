import React, { useEffect, useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import reactProjectImg from "../../Images/reactProject2.png";
import rgconsultingImg from "../../Images/rgconsultingImg.png";
import uomoImg from "../../Images/uomoImg.png";
import hollyImg from "../../Images/hollyImg.png";
import reflectonImg from "../../Images/reflectorImg.png";
import gymImg from "../../Images/gymImg.png";
import confey from "../../Images/confeyImg.png";
import satyamevImg from "../../Images/satyamevImg.png";
import rgphotogaphy from "../../Images/rgphotography.png";
import { motion } from "framer-motion";

function Projects() {
  const parentRef = useRef(null);

  const [projects, setProjects] = useState(0);

  const handleSetProject = (e) => {
    setProjects(e.target.value);
  };

  const projectData = [
    {
      pStatus: { selectedStatus: 1 },
      pName: "Real Market Dashboard",
      pImage: reactProjectImg,
      pTech: "React Js",
      pLink: "https://rg4025.github.io/ReactDashboard/",
      pLike: 0,
      pColor: "bg-danger",
    },
    {
      pStatus: { selectedStatus: 2 },
      pName: "RG Photography",
      pImage: rgphotogaphy,
      pTech: "Java,MySQL,Jsp,JDBC",
      pLink: null,
      pLike: 0,
      pColor: "bg-success",
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "GYM",
      pImage: gymImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "https://rg4025.github.io/GymProject/",
      pLike: 0,
      pColor: "bg-primary",
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "RG Consulting",
      pImage: rgconsultingImg,
      pTech: "React Js",
      pLink: "https://rg4025.github.io/RGConsulting/",
      pLike: 0,
      pColor: "bg-danger",
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "UOMO Fashion",
      pImage: uomoImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "https://rg4025.github.io/NewProject/",
      pLike: 0,
      pColor: "bg-primary",
    },
    {
      pStatus: { selectedStatus: 2 },
      pName: "Satyamev Granthalay",
      pImage: satyamevImg,
      pTech: "PHP,Html,Bootstrap",
      pLink: "http://satyamevsevasanstha.000webhostapp.com/",
      pLike: 0,
      pColor: "bg-success",
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "Holly Hotel",
      pImage: hollyImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "https://rg4025.github.io/HoolyHotel/",
      pLike: 0,
      pColor: "bg-primary",
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "Reflector Photo",
      pImage: reflectonImg,
      pTech: "Html,CSS,Bootstrap",
      pLink: "https://rg4025.github.io/Reflector/",
      pLike: 0,
      pColor: "bg-primary",
    },
    {
      pStatus: { selectedStatus: 1 },
      pName: "Confey Event",
      pImage: confey,
      pTech: "Html,CSS,Bootstrap",
      pLink: "https://rg4025.github.io/ConfeyEvent/",
      pLike: 0,
      pColor: "bg-primary",
    },
    // {
    //   pStatus: { selectedStatus: 2 },
    //   pName: "CRUD Operation",
    //   pImage: reactProjectImg,
    //   pTech: "SpringBoot",
    //   pLink: "",
    //   pLike: 0,
    //   pColor:"bg-success"
    // },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const filteredProject = projectData.filter((e) => {
    if (projects == 0) {
      return e.pStatus.selectedStatus;
    } else {
      return e.pStatus.selectedStatus == projects;
    }
  });

  useEffect(() => {}, [projects, filteredProject]);

  return (
    <>
      <div className="container">
        <div className="sectionProject d-flex justify-content-start align-items-center gap-3">
          <div className="d-flex justify-content-end align-items-center pb-2">
            <h4 className="aboutTitle">Project's :</h4>
          </div>
          <select
            className="px-3 py-2 fw-bold rounded-2 bg-secondary outline-danger"
            name="project"
            id=""
            onClick={handleSetProject}
          >
            <option className="p-2 fw-bold rounded-2 outline" value="0">
              All
            </option>
            <option className="p-2 fw-bold rounded-2 outline" value="1">
              Frontend
            </option>
            <option className="p-2 fw-bold rounded-2 outline" value="2">
              Backend
            </option>
          </select>
        </div>
        <div className="container">
          <motion.div
            ref={parentRef}
            variants={container}
            initial="hidden"
            animate="visible"
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 py-3 "
          >
            {filteredProject.map((item, index) => (
              <ProjectCard data={item} index={index} reference={parentRef} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Projects;
