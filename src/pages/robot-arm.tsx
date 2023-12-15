import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps, BackgroundProps } from "../constants/AnimateProps";
import "../stylesheets/project-page.scss";

const SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/robot-arm/main.png").default,
];

const RobotArmPage: React.FunctionComponent = () => (
  <ProjectPage id="robot-arm">
    <ProjectImages images={SCREENSHOTS} alt="Robot Arm" />
    <motion.div {...BackgroundProps} className="problem-solution accent">
      <motion.h2 {...ItemProps}>The basics</motion.h2>
      <motion.p {...ItemProps}>
        I worked with two group members to 3D print and assemble one arm of
        the <a href="https://www.youtube.com/watch?v=_Sh4kRtmAog" target="_blank">Stanford Pupper Robot</a>. We
        implemented forward kinematics for all three joints &mdash; that is, given joint angles, we determine the
        Cartesian coordinates of each joint &mdash; as well as inverse kinematics for the arm's
        end-effector &mdash; given Cartesian coordinates of the end-effector, determine a joint angle configuration that
        can achieve that.
      </motion.p>
    </motion.div>
    <motion.div {...BackgroundProps} className="problem-solution">
      <motion.h2 {...ItemProps}>Adding computer vision</motion.h2>
      <motion.p {...ItemProps}>
        We added computer vision functionality to the arm as well: a red dot is tracked from a laptop camera or webcam,
        then transformed to the robot coordinates. The robot then uses our previously implemented inverse kinematics to
        follow the dot with its end-effector. See the video below for a live demo, or read the attached report for an
        in-depth description of our methodology.
      </motion.p>
      <iframe
        src="https://drive.google.com/file/d/1aW8GShbJa_nvSgMrsHAPHexv3npq6He0/preview"
        width="640"
        height="350"
        style={{ border: "none" }}
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </motion.div>
    <motion.div {...BackgroundProps} className="problem-solution accent">
      <motion.h2 {...ItemProps}>Tangent: what not to do</motion.h2>
      <motion.p {...ItemProps}>
        You might be wondering, why not demonstrate this on the physical robot? While debugging our computer vision
        implementation, we decided to disable some safeguards that seemed to be the source of an issue we were facing.
        Unsurprisingly, this caused us to break the end of the robot arm (twice)! Ultimately, we were able to get the
        code working (as demonstrated in simulation), but we no longer have a physical arm to run it on.
      </motion.p>
    </motion.div>
  </ProjectPage>
);

export default RobotArmPage;