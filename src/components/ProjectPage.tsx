import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import DownloadButtons from "./DownloadButtons";
import Projects from "../constants/Projects";
import { ItemProps, ContainerProps } from "../constants/AnimateProps";
import "../stylesheets/project-page.scss";

type ProjectPageProps = React.PropsWithChildren<{
  id: string
}>;

const ProjectPage: React.FC<ProjectPageProps> = ({ id, children }) => {
  const { title, description, buttons = {} }: Project = Projects.filter((project) => project.id === id)[0]
  return (
    <motion.main {...ContainerProps} className={"project-page"} id={id}>
      <header>
        <Helmet>
          <title>{title} &bull; Emily Sturman</title>
        </Helmet>
        <motion.h1 {...ItemProps} className={"title"}>{title}</motion.h1>
        <motion.p {...ItemProps} className={"caption"}>{description}</motion.p>
        <DownloadButtons buttons={buttons} />
      </header>
      {children}
    </motion.main>
  )
};

export default ProjectPage;