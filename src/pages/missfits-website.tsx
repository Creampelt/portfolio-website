import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps } from "../constants/AnimateProps";

const SCREENSHOTS = [
  require("../assets/images/project-screenshots/missfits-website/home.jpg").default,
  require("../assets/images/project-screenshots/missfits-website/outreach.jpg").default,
  require("../assets/images/project-screenshots/missfits-website/contact.jpg").default
];

const MissfitsPage: React.FunctionComponent = () => (
  <ProjectPage id={"missfits-website"}>
    <ProjectImages images={SCREENSHOTS} alt={"Missfits Website"} className={"rtl"}>
      <motion.p {...ItemProps}>
        I’ve been against building websites with drag-and-drop editors ever since I learned how to make them myself.
        While the editors are nice for getting started, nothing beats the originality of a custom-designed website.
        Every chance I can, I offer to rebuild template websites from scratch. Since joining my robotics team in 9th
        grade, I’d wanted to redesign it, but never had the time; so, when quarantine started, I did just that.
      </motion.p>
    </ProjectImages>
  </ProjectPage>
);

export default MissfitsPage;