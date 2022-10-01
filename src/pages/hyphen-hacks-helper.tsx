import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps } from "../constants/AnimateProps";
import "../stylesheets/project-page.scss";

const SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/hyphen-hacks-helper/announcements.jpg").default,
  require("../assets/images/project-screenshots/hyphen-hacks-helper/schedule.jpg").default,
  require("../assets/images/project-screenshots/hyphen-hacks-helper/workshops.jpg").default,
  require("../assets/images/project-screenshots/hyphen-hacks-helper/example-workshop.jpg").default,
  require("../assets/images/project-screenshots/hyphen-hacks-helper/map.jpg").default,
]

const HyphenHacksHelperPage: React.FC = () => (
  <ProjectPage id={"hyphen-hacks-helper"}>
    <ProjectImages images={SCREENSHOTS} alt={"HH Helper"} className={"rtl"}>
      <motion.p {...ItemProps}>
        Since freshman year, I’ve been part of the planning team for Hyphen-Hacks, an annual, student-organized
        hackathon held at my high school. I was interested in software development, so I volunteered to build an app
        that would help attendees navigate the event. Over about a month, I taught myself React Native in order to build
        a simple first version in time for the event, which took place in October 2018. The next year, after having much
        more experience in app development, I redesigned the app to match our website’s theme and be updated in real
        time from our admin dashboard.
      </motion.p>
    </ProjectImages>
  </ProjectPage>
);

export default HyphenHacksHelperPage;