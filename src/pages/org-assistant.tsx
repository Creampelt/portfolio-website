import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps, BackgroundProps } from "../constants/AnimateProps";
import "../stylesheets/project-page.scss";

const SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/org-assistant/home-page.png").default,
  require("../assets/images/project-screenshots/org-assistant/org-page.png").default,
  require("../assets/images/project-screenshots/org-assistant/event-page.png").default,
  require("../assets/images/project-screenshots/org-assistant/check-in.png").default,
];

const OrgAssistantPage: React.FunctionComponent = () => (
  <ProjectPage id="org-assistant">
    <ProjectImages images={SCREENSHOTS} alt="Org Assistant" />
    <motion.div {...BackgroundProps} className="problem-solution accent">
      <motion.p {...ItemProps}>
        As an officer of Q++, keeping track of attendees at our various events proved to be very difficult. Usually, we
        would use a Google form and end up with tens of spreadsheets containing duplicate attendee data, with no easy
        way to consolidate these spreadsheets or gain anything meaningful from them (such as what kinds of events were
        most popular, how many RSVPs carried over to attendees, even general attendee demographics).
      </motion.p>
      <motion.p {...ItemProps}>
        So this year, another officer and I co-built Org Assistant, which solves all of these problems. Org Assistant
        allows members to easily check in and saves their previously entered data locally, so that they don't need to
        re-type all of their information for each event. Each event contains auto-generated statistics regarding RSVPs,
        check-ins, and demographics like graduation year, and all check-ins are consolidated into a master list of
        attendees. Org Assistant also allows the user to download a CSV containing this data, in case check in or
        attendee data needs to be manipulated or exported.
      </motion.p>
    </motion.div>
  </ProjectPage>
);

export default OrgAssistantPage;