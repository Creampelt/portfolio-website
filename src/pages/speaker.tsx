import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../images/project-screenshots/speaker/full-shot.jpg"),
  require("../images/project-screenshots/speaker/top.jpg"),
  require("../images/project-screenshots/speaker/detail.jpg")
];

const SpeakerPage = () => (
  <ProjectPage id={"speaker"}>
    <div className={"screenshots fixed-layout"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"Speaker " + i} />)}
    </div>
  </ProjectPage>
);

export default SpeakerPage;