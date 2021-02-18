import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../assets/images/project-screenshots/missfits-website/home.jpg"),
  require("../assets/images/project-screenshots/missfits-website/outreach.jpg"),
  require("../assets/images/project-screenshots/missfits-website/contact.jpg")
];

const MissfitsPage = () => (
  <ProjectPage id={"missfits-website"}>
    <div className={"screenshots rtl"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"sv-for-pete-" + i} />)}
      <p>
        I’ve been against building websites with drag-and-drop editors ever since I learned how to make them myself.
        While the editors are nice for getting started, nothing beats the originality of a custom-designed website.
        Every chance I can, I offer to rebuild template websites from scratch. Since joining my robotics team in 9th
        grade, I’d wanted to redesign it, but never had the time; so, when quarantine started, I did just that.
      </p>
    </div>
  </ProjectPage>
);

export default MissfitsPage;