---
slug: "f110-slam"
title: "F1/10 Navigation & SLAM"
types: [ "robotics", "research", "favorite" ]
description: "Autonomous navigation and SLAM implementation on a F1/10 car"
report: "auton-report.pdf"
---

## Navigation

I worked with two group members to implement autonomous navigation on an F1/10 car. We started by implementing obstacle
avoidance, then a particle filter that allowed the car to localize itself within a given map, and finally an A*-based
algorithm that allows the car to plan a path within the map and navigate around unmapped obstacles.

![SLAM results](../../assets/images/project-screenshots/nav-and-slam/slam-results.png)

## SLAM

Simultaneous localization and mapping, or SLAM, is a method used
by <a href="https://spectrum.ieee.org/irobot-brings-visual-mapping-and-navigation-to-the-roomba-980" target="__blank">
many autonomous robots</a> to map out and navigate within unfamiliar environments. We implemented LiDAR-based SLAM using
the iterative closest point (ICP) algorithm, which iteratively aligns two point clouds by comparing and reducing both
translational and rotational error. We implemented point-to-point ICP (below), which calculates error based on the
distance between closest points. We also created an untested version of point-to-plane ICP, which uses the concept that
points are part of larger objects by aligning the estimated normal vectors of points.

<img src="../../assets/images/project-screenshots/nav-and-slam/icp.gif" alt="ICP" class="gif">

Using ICP, the car captures LiDAR scans at specified intervals, then aligns them to create a larger map. However, an
issue we faced with this is that the point clouds are not meant to match exactly &mdash; rather, there should be some
overlap within the points, as well as some newly captured points that should not be compared to previous scans. To
handle this, we implemented outlier rejection using a non-dynamic version of the Welsch function (below), which allowed
the car to more heavily weight points that were closer to those in the previous scan. For more details on our
implementation, take a look at the report linked above.

![Welsch function](../../assets/images/project-screenshots/nav-and-slam/welsch.png)

As expected, our implementation did accumulate error over time. The image above depicts how our SLAM algorithm matched
up with the second floor of the Gates-Dell Complex (the CS building at UT). GDC2 has a large, open atrium, so the car
accumulated much more error than it would in a smaller, enclosed space.