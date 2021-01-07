import React from "react";
import "../stylesheets/index.scss";
import ProjectCard from "../components/ProjectCard";
import ShowOnLoad from "../components/ShowOnLoad";
import Projects from "../constants/Projects";

const IndexPage = () => {
  return (
    <main id={"index"}>
      <title>Emily Sturman</title>
      <header>
        <ShowOnLoad className={"title"}>
          <h1><span>Emily </span><span>Sturman</span></h1>
        </ShowOnLoad>
        <p className={"subtitle"}><span>inventor</span> &bull; <span>developer</span> &bull; <span>designer</span></p>
      </header>
      <div id={"projects"} className={"project-card-container"}>
        {Projects.map((project: Project) => <ProjectCard key={project.id} {...project} />)}
      </div>
    </main>
  );
};

export default IndexPage;
