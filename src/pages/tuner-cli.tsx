import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../images/project-screenshots/tuner-cli/tuner--help.jpg"),
  require("../images/project-screenshots/tuner-cli/a441.png"),
  require("../images/project-screenshots/tuner-cli/tuner-functionality.jpg")
];

const TunerCLIPage = () => (
  <ProjectPage id={"tuner-cli"}>
    <div className={"screenshots"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"sv-for-pete-" + i} />)}
    </div>
  </ProjectPage>
);

export default TunerCLIPage;