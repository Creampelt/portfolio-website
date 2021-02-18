import React from "react";
import ProjectPage from "../components/ProjectPage";
import "../stylesheets/project-page.scss";

const SCREENSHOTS = [
  require("../assets/images/project-screenshots/hyphen-hacks-helper/announcements.jpg"),
  require("../assets/images/project-screenshots/hyphen-hacks-helper/schedule.jpg"),
  require("../assets/images/project-screenshots/hyphen-hacks-helper/workshops.jpg"),
  require("../assets/images/project-screenshots/hyphen-hacks-helper/example-workshop.jpg"),
  require("../assets/images/project-screenshots/hyphen-hacks-helper/map.jpg"),
]

const HyphenHacksHelperPage = () => (
  <ProjectPage id={"hyphen-hacks-helper"}>
    <div className={"screenshots rtl"}>
      {SCREENSHOTS.map((src: string, i: number) => <img src={src} alt={"HH Helper " + i} key={i} />)}
      <p>
        Since freshman year, I’ve been part of the planning team for Hyphen-Hacks, an annual, student-organized
        hackathon held at my high school. I was interested in software development, so I volunteered to build an app
        that would help attendees navigate the event. Over about a month, I taught myself React Native in order to build
        a simple first version in time for the event, which took place in October 2018. The next year, after having much
        more experience in app development, I redesigned the app to match our website’s theme and be updated in real
        time from our admin dashboard.
      </p>
    </div>
  </ProjectPage>
);

export default HyphenHacksHelperPage;