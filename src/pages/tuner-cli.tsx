import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { BackgroundProps, ItemProps } from "../constants/AnimateProps";

const SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/tuner-cli/tuner--help.jpg").default,
  require("../assets/images/project-screenshots/tuner-cli/a441.png").default,
  require("../assets/images/project-screenshots/tuner-cli/tuner-functionality.jpg").default
];

const TunerCLIPage: React.FunctionComponent = () => (
  <ProjectPage id={"tuner-cli"}>
    <ProjectImages images={SCREENSHOTS} alt={"Tuner CLI"} />
    <motion.div {...BackgroundProps} className={"problem-solution accent"}>
      <motion.p {...ItemProps}>
        Aside from computer science, one of my biggest passions is music. I’ve played violin for over ten years, and I
        love it almost as much as I love making. I’m also constantly fascinated by how these two interests overlap, so
        when we were assigned an open-ended research project in orchestra class, I decided to look at music through a
        CS perspective. Over the course of a quarter, without the help of any external libraries other than NumPy (for
        processing data), I built a tool that could find the average frequency of a .wav recording. Afterwards, I
        adapted the program into a command-line interface that would also report the pitch and intonation of the
        recordings.
      </motion.p>
    </motion.div>
  </ProjectPage>
);

export default TunerCLIPage;