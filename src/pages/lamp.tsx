import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../images/project-screenshots/lamp/cad.jpg"),
  require("../images/project-screenshots/lamp/final-model.jpg")
];

const Lamp = () => (
  <ProjectPage id={"lamp"}>
    <div className={"screenshots fixed-layout"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"Lamp " + i} />)}
    </div>
  </ProjectPage>
);

export default Lamp;