import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps, BackgroundProps } from "../constants/AnimateProps";

const SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/chair/unfolded.jpg").default,
  require("../assets/images/project-screenshots/chair/folded.jpg").default
];

const Chair: React.FunctionComponent = () => (
  <ProjectPage id={"chair"}>
    <ProjectImages images={SCREENSHOTS} alt={"Chair"} className={"fixed-layout"} />
    <motion.div className={"problem-solution accent"} {...BackgroundProps}>
      <motion.p {...ItemProps}>
        I designed this chair for Rethinking Furniture, a metal shop class I took in 11th grade. Having had some more
        experience with shop construction through both school and robotics, I decided to make my design more complex
        engineering-wise by making a folding, collapsible metal chair. I built the frames by welding steel tubing and,
        while the stability of the final product was questionable, I was very happy with its craft.
      </motion.p>
    </motion.div>
  </ProjectPage>
);

export default Chair;