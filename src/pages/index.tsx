import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Projects from "../constants/Projects";
import { ItemProps, ContainerProps } from "../constants/AnimateProps";
import "../stylesheets/index.scss";

const projectsToDisplay = Projects
  .filter(({ hidden }) => !hidden)
  .map((project) => <ProjectCard key={project.id} {...project} />);

const IndexPage: React.FC = () => (
  <motion.main {...ContainerProps} id={"index"}>
    <header>
      <div className={"title main-title"}>
        <h1>
          <motion.span {...ItemProps}>Emily </motion.span>
          <motion.span {...ItemProps}>Sturman</motion.span>
        </h1>
      </div>
      <p className={"subtitle"}>
        <motion.span {...ItemProps}>inventor</motion.span>&bull;
        <motion.span {...ItemProps}>developer</motion.span>&bull;
        <motion.span {...ItemProps}>designer</motion.span></p>
    </header>
    <div id={"projects"} className={"project-card-container"}>
      {projectsToDisplay}
    </div>
  </motion.main>
);

export default IndexPage;
