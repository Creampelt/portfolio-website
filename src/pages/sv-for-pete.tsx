import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../assets/images/project-screenshots/sv-for-pete/pete_home.jpg"),
  require("../assets/images/project-screenshots/sv-for-pete/pete_sign_up.jpg"),
  require("../assets/images/project-screenshots/sv-for-pete/pete_bottom.jpg")
];

const SVForPetePage = () => (
  <ProjectPage id={"sv-for-pete"}>
    <div className={"screenshots rtl"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"sv-for-pete-" + i} />)}
      <p>
        In 2019, my dad joined a grassroots campaign organization called Silicon Valley for Pete, which supported Pete
        Buttigeig for President in 2020. Being one of the more technical people in the group, he volunteered to build
        their website using Wix. However, he soon became frustrated with the software’s limitations, so, since I had web
        development experience and some free time, he handed off the task to me. I used React so that I could build the
        website to look exactly how I envisioned it, and I worked with SV for Pete to maintain the site until Buttigieg
        suspended his campaign in March.
      </p>
    </div>
  </ProjectPage>
);

export default SVForPetePage;