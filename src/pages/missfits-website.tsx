import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../images/project-screenshots/missfits-website/home.jpg"),
  require("../images/project-screenshots/missfits-website/outreach.jpg"),
  require("../images/project-screenshots/missfits-website/contact.jpg")
];

const MissfitsPage = () => (
  <ProjectPage id={"missfits-website"}>
    <div className={"screenshots rtl"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"sv-for-pete-" + i} />)}
    </div>
  </ProjectPage>
);

export default MissfitsPage;