import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import diagrams from "../assets/images/about/diagrams.png";
import driving from "../assets/images/about/driving.png";
import withSister from "../assets/images/about/with-sister.png";
import withDad from "../assets/images/about/with-dad.png";
import { ItemProps, ContainerProps, BackgroundProps } from "../constants/AnimateProps";
import "../stylesheets/about.scss";

const RESUME = "https://drive.google.com/file/d/11D-jcPnkigXPRZTw1jl-H33W33o1S74b/view?usp=sharing";

const AboutPage: React.FunctionComponent = () => (
  <motion.main id={"about"} {...ContainerProps}>
    <Helmet>
      <title>About Me &bull; Emily Sturman</title>
    </Helmet>
    <header>
      <div className={"title main-title"}>
        <h1>
          <motion.span {...ItemProps}>About&nbsp;</motion.span>
          <motion.span {...ItemProps}>Me</motion.span>
        </h1>
      </div>
      <motion.img
        {...ItemProps}
        className={"sticker driving"}
        src={driving}
        alt={"Driving a robot at competition"}
      />
      <motion.img
        {...ItemProps}
        className={"sticker diagrams"}
        src={diagrams}
        alt={"Discussing dimensions for a robot"}
      />
    </header>
    <motion.div className={"bio section accent"} {...BackgroundProps}>
      <motion.img
        {...ItemProps}
        className={"sticker with-sister"}
        src={withSister}
        alt={"Me with my older sister, Helen"}
      />
      <div>
        <motion.h2 {...ItemProps}>Who I am</motion.h2>
        <motion.p {...ItemProps}>
          Hi! My name is Emily, and I'm currently a junior at UT Austin in the Turing Scholars Honors Program in
          Computer Science with a minor in Robotics. I have developed skills in C++, Python,
          Typescript, Ruby, and Java as well as in using tools such as ROS, React, Firebase, and GraphQL. If you have
          the time, feel free to take a look at my <a target="_blank" href={RESUME}>resume</a> or my&nbsp;
          <a target="_blank" href="https://github.com/Creampelt">Github</a>, where you can better understand the
          projects I’ve worked on so far.
        </motion.p>
      </div>
    </motion.div>
  </motion.main>
);

export default AboutPage;