import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { BackgroundProps, ItemProps } from "../constants/AnimateProps";

const SCREENSHOTS_1: string[] = [
  require("../assets/images/project-screenshots/qpp-website/home.png").default,
  require("../assets/images/project-screenshots/qpp-website/about.png").default,
];

const SCREENSHOTS_2: string[] = [
  require("../assets/images/project-screenshots/qpp-website/get-involved.png").default,
  require("../assets/images/project-screenshots/qpp-website/sponsors.png").default,
];

const QppWebsitePage: React.FunctionComponent = () => (
  <ProjectPage id="qpp-website">
    <ProjectImages images={SCREENSHOTS_1} alt="Q++ Website" />
    <motion.div {...BackgroundProps} className="problem-solution accent">
      <motion.p {...ItemProps}>
        Freshman year of college, I joined Q++, an org for LGBT people in CS. Since then, I have gone from member to
        junior officer to corporate officer, and now to president. Previously, we had a fairly bare-bones website,
        which I wanted to improve in my spare time. I built the new Q++ using Gatsby and Contentful to make it fast,
        easily configurable, and beautiful. The events calendar on the site also fetches directly from <a
        href="/org-assistant">Org Assistant</a>, our custom-built events manager, so that event data will always be up
        to date.
      </motion.p>
    </motion.div>
    <ProjectImages images={SCREENSHOTS_2} alt="Q++ Website" />
  </ProjectPage>
);

export default QppWebsitePage;