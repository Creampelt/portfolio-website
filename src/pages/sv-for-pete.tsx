import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../images/project-screenshots/sv-for-pete/pete_home.jpg"),
  require("../images/project-screenshots/sv-for-pete/pete_sign_up.jpg"),
  require("../images/project-screenshots/sv-for-pete/pete_bottom.jpg")
];

const SVForPetePage = () => (
  <ProjectPage id={"sv-for-pete"}>
    <div className={"screenshots rtl"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"sv-for-pete-" + i} />)}
    </div>
  </ProjectPage>
);

export default SVForPetePage;