import React from "react";
import "../stylesheets/index.scss";
import ProjectCard from "../components/ProjectCard";
import Projects from "../constants/Projects";

const IndexPage = () => {
  return (
    <main>
      <title>Emily Sturman</title>
      <header>
        <h1>Emily Sturman</h1>
        <p className={"subtitle"}><span>inventor</span> &bull; <span>developer</span> &bull; <span>designer</span></p>
      </header>
      <div className={"project-card-container"}>
        {Projects.map((project: Project) => <ProjectCard key={project.id} {...project} />)}
      </div>
    </main>
  );
};

export default IndexPage;
