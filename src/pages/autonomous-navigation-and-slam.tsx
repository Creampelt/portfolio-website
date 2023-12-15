import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps, BackgroundProps } from "../constants/AnimateProps";
import "../stylesheets/project-page.scss";

const SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/nav-and-slam/slam-results.png").default,
];

const FIGURES: string[] = [
  require("../assets/images/project-screenshots/nav-and-slam/icp.gif").default,
  require("../assets/images/project-screenshots/nav-and-slam/welsch.png").default,
];

const RobotArmPage: React.FunctionComponent = () => (
  <ProjectPage id="autonomous-navigation-and-slam">
    <ProjectImages images={SCREENSHOTS} alt="Navigation and SLAM" className="slam" />
    <motion.div {...BackgroundProps} className="problem-solution accent">
      <motion.h2 {...ItemProps}>Navigation</motion.h2>
      <motion.p {...ItemProps}>
        I worked with two group members to implement autonomous navigation on an&nbsp;
        <a href="https://f1tenth.org/" target="_blank">F1/10 car</a>. We started by implementing obstacle avoidance
        (where the car drives aimlessly and avoids obstacles), then a particle filter that allows the car to localize
        itself within a given map, and finally an A*-based algorithm that allows the car to plan a path within the map
        and navigate around unforeseen obstacles.
      </motion.p>
    </motion.div>
    <motion.div {...BackgroundProps} className="problem-solution">
      <motion.h2 {...ItemProps}>SLAM</motion.h2>
      <motion.p {...ItemProps}>
        Simultaneous localization and mapping, or SLAM, is a method used by many autonomous robots (including&nbsp;
        <a
          href="https://spectrum.ieee.org/irobot-brings-visual-mapping-and-navigation-to-the-roomba-980"
          target="_blank"
        >Roomba</a>) to map out and navigate unfamiliar environments. We implemented LiDAR-based SLAM (SLAM that uses
        only LiDAR data, as opposed to visual SLAM, which would use a camera) using the iterative closest point (ICP)
        algorithm. ICP iteratively aligns two point clouds by comparing and reducing both translational and rotational
        error. We implemented point-to-point ICP (see below, on the left), which calculates error based on the distance
        between closest points. However, we did create an untested version of point-to-plane ICP, which also considers
        the estimated normal vector of a point (that is, using the theory that points are not discrete and rather are
        part of larger objects).
      </motion.p>
      <motion.p {...ItemProps}>
        Using ICP, the car would capture LiDAR scans at specified intervals, then align them to create a larger map.
        However, an issue we faced with this is that the point clouds are not meant to match exactly &mdash; rather,
        there should be some overlap within the points, as well as some newly captured points that should not be
        compared to previous scans. To handle this, we implemented outlier rejection using a non-dynamic version of the
        Welsch function (see below, on the right), which allows the car to more heavily weight points that are closer to
        those in the previous scan. For a more details on our implementation, take a look at the report linked above.
      </motion.p>
      <motion.p>
        As expected, our implementation does accumulate error over time. The image above depicts how our SLAM algorithm
        matches up with the GDC second floor. GDC2 has a large, open atrium, which means that there is much more error
        than if the car was in smaller, enclosed space.
      </motion.p>
    </motion.div>
    <ProjectImages images={FIGURES} alt="ICP and Welsch" className="figures" />
  </ProjectPage>
);

export default RobotArmPage;