---
slug: "robot-arm"
title: "Robot Arm"
types: [ "robotics", "favorite" ]
description: "A 3D printed robot arm with forward kinematics, inverse kinematics, and computer vision tracking"
github: "https://github.com/Creampelt/pupper-cv"
report: "robot-cv.pdf"
---

![Robot Arm](../../assets/images/project-screenshots/robot-arm.png)

## Overview

I worked with two group members to 3D print, assemble and wire one arm of the
<a href="https://www.youtube.com/watch?v=_Sh4kRtmAog" target="__blank">Stanford Pupper Robot</a>. We also implemented
forward and inverse kinematics for the arm's end-effector.

## Adding computer vision

Using OpenCV, we programmed the arm to track a red dot from a laptop camera and follow the dot with its end effector.
See the video below for a demo, or read the attached report for an in-depth description of our methodology.

<iframe
src="https://drive.google.com/file/d/1aW8GShbJa_nvSgMrsHAPHexv3npq6He0/preview"
width="500"
height="273"
style={{border: "none"}}
allow="autoplay"
allowFullScreen></iframe>

## Tangent: what not to do

You might be wondering, why not demonstrate this on the physical robot? While debugging our computer vision
implementation, we decided to disable some safeguards that seemed to be the source of an issue we were facing.
Unsurprisingly, this caused us to break the end of the robot arm (twice)! Ultimately, we were able to get the code
working, but we no longer have a physical arm to run it on. :\(