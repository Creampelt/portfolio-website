import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../images/project-screenshots/chair/unfolded.jpg"),
  require("../images/project-screenshots/chair/folded.jpg")
];

const Lamp = () => (
  <ProjectPage id={"chair"}>
    <div className={"screenshots fixed-layout"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"Chair " + i} />)}
    </div>
  </ProjectPage>
);

export default Lamp;