import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps, BackgroundProps } from "../constants/AnimateProps";
import "../stylesheets/project-page.scss";

const ORDER_SCREENSHOTS: string[] = [
  require("../assets/images/simple-subs/login.png").default,
  require("../assets/images/simple-subs/home.png").default,
  require("../assets/images/simple-subs/custom_order.png").default,
];

const HH_HELPER_SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/hyphen-hacks-helper/announcements.jpg").default,
  require("../assets/images/project-screenshots/hyphen-hacks-helper/schedule.jpg").default,
  require("../assets/images/project-screenshots/hyphen-hacks-helper/workshops.jpg").default,
  require("../assets/images/project-screenshots/hyphen-hacks-helper/example-workshop.jpg").default,
  require("../assets/images/project-screenshots/hyphen-hacks-helper/map.jpg").default,
];

const MISSFITS_SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/missfits-website/home.jpg").default,
  require("../assets/images/project-screenshots/missfits-website/outreach.jpg").default,
  require("../assets/images/project-screenshots/missfits-website/contact.jpg").default,
];

const TUNER_CLI_SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/tuner-cli/tuner--help.jpg").default,
  require("../assets/images/project-screenshots/tuner-cli/a441.png").default,
  require("../assets/images/project-screenshots/tuner-cli/tuner-functionality.jpg").default,
];

const SV_FOR_PETE_SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/sv-for-pete/pete_home.jpg").default,
  require("../assets/images/project-screenshots/sv-for-pete/pete_sign_up.jpg").default,
  require("../assets/images/project-screenshots/sv-for-pete/pete_bottom.jpg").default,
];

const LAMP_SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/lamp/cad.jpg").default,
  require("../assets/images/project-screenshots/lamp/final-model.jpg").default,
];

const CHAIR_SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/chair/unfolded.jpg").default,
  require("../assets/images/project-screenshots/chair/folded.jpg").default,
];

const ArchivePage: React.FunctionComponent = () => (
  <>
    <ProjectPage id="archive">
      <motion.div className={"problem-solution accent"} {...BackgroundProps}>
        <motion.p {...ItemProps}>
          Below, you'll find my archive of projects, dating back to 2017. While I no longer consider these to be
          accurate representations of my abilities (most were completed over three years ago), many of these were
          starting points for skills that I have since developed.
        </motion.p>
      </motion.div>
    </ProjectPage>
    <ProjectPage id="hyphen-hacks-helper">
      <ProjectImages images={HH_HELPER_SCREENSHOTS} alt="HH Helper" className="rtl" />
    </ProjectPage>
    <ProjectPage id="missfits-website">
      <ProjectImages images={MISSFITS_SCREENSHOTS} alt="Missfits Website" />
    </ProjectPage>
    <ProjectPage id="tuner-cli">
      <ProjectImages images={TUNER_CLI_SCREENSHOTS} alt="Tuner CLI" />
    </ProjectPage>
    <ProjectPage id="sv-for-pete">
      <ProjectImages images={SV_FOR_PETE_SCREENSHOTS} alt="SV for Pete" className="rtl" />
    </ProjectPage>
    <ProjectPage id="lamp">
      <ProjectImages images={LAMP_SCREENSHOTS} alt="Lamp" className="fixed-layout" />
    </ProjectPage>
    <ProjectPage id="chair">
      <ProjectImages images={CHAIR_SCREENSHOTS} alt="Chair" className="fixed-layout" />
    </ProjectPage>
  </>
);

export default ArchivePage;