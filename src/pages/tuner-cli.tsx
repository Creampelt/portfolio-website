import React from "react";
import ProjectPage from "../components/ProjectPage";

const SCREENSHOTS = [
  require("../assets/images/project-screenshots/tuner-cli/tuner--help.jpg"),
  require("../assets/images/project-screenshots/tuner-cli/a441.png"),
  require("../assets/images/project-screenshots/tuner-cli/tuner-functionality.jpg")
];

const TunerCLIPage = () => (
  <ProjectPage id={"tuner-cli"}>
    <div className={"screenshots"}>
      {SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"sv-for-pete-" + i} />)}
    </div>
    <div className={"problem-solution accent"}>
      <p>
        Aside from computer science, one of my biggest passions is music. I’ve played violin for over ten years, and I
        love it almost as much as I love making. I’m also constantly fascinated by how these two interests overlap, so
        when we were assigned an open-ended research project in orchestra class, I decided to look at music through a
        CS perspective. Over the course of a quarter, without the help of any external libraries other than NumPy (for
        processing data), I built a tool that could find the average frequency of a .wav recording. Afterwards, I
        adapted the program into a command-line interface that would also report the pitch and intonation of the
        recordings.
      </p>
    </div>
  </ProjectPage>
);

export default TunerCLIPage;