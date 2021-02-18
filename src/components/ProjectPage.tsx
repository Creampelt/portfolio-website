import React from "react";
import Projects from "../constants/Projects";
import DownloadIOS from "../assets/images/download-icons/download-ios.svg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../stylesheets/project-page.scss";

const DownloadButtons = ({ buttons }: { buttons: AccessTypes }) => (
  <div className={"download-buttons"}>
    {buttons.ios && <a className={"ios"} href={buttons.ios} target={"_blank"}><DownloadIOS /></a>}
    {buttons.android && (
      <a className={"android"} href={buttons.android} target={"_blank"}>
        <img src={require("../assets/images/download-icons/download-android.png")} alt={"Download from Play Store"} />
      </a>
    )}
    {buttons.web && (
      <a className={"web text"} href={buttons.web} target={"_blank"}>
        Visit website
        <FaExternalLinkAlt className={"external-link-icon"} />
      </a>
    )}
    {buttons.github && (
      <a className={"github text"} href={buttons.github} target={"_blank"}>
        <FaGithub className={"github-icon"} />
        View code
      </a>
    )}
  </div>
)

const ProjectPage = ({ id, children }: { id: string, children: React.ReactNode }) => {
  const { title, description, buttons = {} }: Project = Projects.filter((project) => project.id === id)[0]
  return (
    <main className={"project-page"} id={id}>
      <header>
        <title>{title} &bull; Emily Sturman</title>
        <h1 className={"title"}>{title}</h1>
        <p className={"caption"}>{description}</p>
        <DownloadButtons buttons={buttons} />
      </header>
      {children}
    </main>
  )
};

export default ProjectPage;