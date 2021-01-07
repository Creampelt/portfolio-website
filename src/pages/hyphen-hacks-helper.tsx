import React from "react";
import ProjectPage from "../components/ProjectPage";
import "../stylesheets/project-page.scss";

const SCREENSHOTS = [
  require("../images/project-screenshots/hyphen-hacks-helper/announcements.jpg"),
  require("../images/project-screenshots/hyphen-hacks-helper/schedule.jpg"),
  require("../images/project-screenshots/hyphen-hacks-helper/workshops.jpg"),
  require("../images/project-screenshots/hyphen-hacks-helper/example-workshop.jpg"),
  require("../images/project-screenshots/hyphen-hacks-helper/map.jpg"),
]

const HyphenHacksHelperPage = () => (
  <ProjectPage id={"hyphen-hacks-helper"}>
    <div className={"screenshots rtl"}>
      {SCREENSHOTS.map((src: string, i: number) => <img src={src} alt={"HH Helper " + i} key={i} />)}
    </div>
  </ProjectPage>
);

export default HyphenHacksHelperPage;