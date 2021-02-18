import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../assets/images/project-screenshots/lamp/cad.jpg"),
  require("../assets/images/project-screenshots/lamp/final-model.jpg")
];

const Lamp = () => (
  <ProjectPage id={"lamp"}>
    <div className={"screenshots fixed-layout"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"Lamp " + i} />)}
    </div>
    <div className={"problem-solution accent"}>
      <p>
        In order to familiarize students with the shops, my high school requires that all freshmen design and build a
        lamp using metal, wood, and acrylic. Other than these material requirements, there are no additional constraints
        on the lamp’s design. This was my first time using tools other than drills and screwdrivers, and while the
        design was much more complicated to execute than I anticipated, I was surprised with how well the result turned
        out.
      </p>
    </div>
  </ProjectPage>
);

export default Lamp;