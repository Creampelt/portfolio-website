import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../assets/images/project-screenshots/chair/unfolded.jpg"),
  require("../assets/images/project-screenshots/chair/folded.jpg")
];

const Lamp = () => (
  <ProjectPage id={"chair"}>
    <div className={"screenshots fixed-layout"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"Chair " + i} />)}
    </div>
    <div className={"problem-solution accent"}>
      <p>
        I designed this chair for Rethinking Furniture, a metal shop class I took in 11th grade. Having had some more
        experience with shop construction through both school and robotics, I decided to make my design more complex
        engineering-wise by making a folding, collapsible metal chair. I built the frames by welding steel tubing and,
        while the stability of the final product was questionable, I was very happy with its craft.
      </p>
    </div>
  </ProjectPage>
);

export default Lamp;