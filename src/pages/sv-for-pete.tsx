import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps } from "../constants/AnimateProps";

const SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/sv-for-pete/pete_home.jpg").default,
  require("../assets/images/project-screenshots/sv-for-pete/pete_sign_up.jpg").default,
  require("../assets/images/project-screenshots/sv-for-pete/pete_bottom.jpg").default
];

const SVForPetePage: React.FC = () => (
  <ProjectPage id={"sv-for-pete"}>
    <ProjectImages images={SCREENSHOTS} alt={"SV for Pete"} className={"rtl"}>
      <motion.p {...ItemProps}>
        In 2019, my dad joined a grassroots campaign organization called Silicon Valley for Pete, which supported Pete
        Buttigeig for President in 2020. Being one of the more technical people in the group, he volunteered to build
        their website using Wix. However, he soon became frustrated with the software’s limitations, so, since I had web
        development experience and some free time, he handed off the task to me. I used React so that I could build the
        website to look exactly how I envisioned it, and I worked with SV for Pete to maintain the site until Buttigieg
        suspended his campaign in March.
      </motion.p>
    </ProjectImages>
  </ProjectPage>
);

export default SVForPetePage;