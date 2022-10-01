import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { BackgroundProps } from "../constants/AnimateProps";

const SCREENSHOTS = [
  require("../assets/images/project-screenshots/lamp/cad.jpg").default,
  require("../assets/images/project-screenshots/lamp/final-model.jpg").default
];

const Lamp: React.FC = () => (
  <ProjectPage id={"lamp"}>
    <ProjectImages images={SCREENSHOTS} alt={"Lamp"} className={"fixed-layout"} />
    <motion.div {...BackgroundProps} className={"problem-solution accent"}>
      <motion.p>
        In order to familiarize students with the shops, my high school requires that all freshmen design and build a
        lamp using metal, wood, and acrylic. Other than these material requirements, there are no additional constraints
        on the lamp’s design. This was my first time using tools other than drills and screwdrivers, and while the
        design was much more complicated to execute than I anticipated, I was surprised with how well the result turned
        out.
      </motion.p>
    </motion.div>
  </ProjectPage>
);

export default Lamp;