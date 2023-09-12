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
          Hi! My name is Emily, and I'm currently a junior in the Turing Scholars Honors Program in Computer Science
          with a minor in robotics at UT Austin. I have developed skills in Typescript, Python, Ruby, C++, and Java as
          well as in building full-stack applications using tools such as React, Firebase, and GraphQL. If you have the
          time, I'd encourage you to look at my <a target="_blank" href={RESUME}>resume</a> or
          my <a target="_blank" href="https://github.com/Creampelt">Github</a>, where you can better understand the
          projects I’ve worked on so far.
        </motion.p>
      </div>
    </motion.div>
    <div className={"story section"}>
      <motion.img
        {...ItemProps}
        className={"sticker with-dad"}
        src={withDad}
        alt={"Me with my dad"}
      />
      <div>
        <motion.h2 {...ItemProps}>My story</motion.h2>
        <motion.p {...ItemProps}>
          While still very early in my career as a software engineer, I’ve been fortunate enough to have had a number of
          opportunities to work on in-depth projects that were launched and used by others. In late high school, I
          wanted to find a way to help my school reopen as quickly as possible while keeping students safe during the
          COVID-19 pandemic. A key issue the school was struggling with was how to safely distribute lunches to
          students. To fix this, I reached out to my high school and offered to build them a lunch-ordering app. The
          app, SimpleSubs, allowed for quick, online lunch-ordering for the entire student body that allowed lunches to
          be made and distributed safely and contactlessly. As my largest and longest-lasting project, I not only
          acquired more technical knowledge and experience, but also learned the importance of rigorous unit tests,
          writing readable and reusable code, and good communication with customers. I have since passed on SimpleSubs
          to my school’s IT department, and it is still in use to this day.
        </motion.p>
        <motion.p {...ItemProps}>
          In the summer of 2022, I had the opportunity to participate in the Meta University program, where I was able
          to improve my web development skills through a ten-week boot camp that culminated in a six-week capstone
          project. Working closely with my mentor, I enjoyed enhancing my skills in fullstack development and managing
          complex projects while also getting to learn how the technologies I used were deployed at scale.
        </motion.p>
        <motion.p {...ItemProps}>
          This past summer, I interned at Stripe on the Supportability Intelligence team to build
          supportability-rules-srv (SRS), a full-stack application that allowed non-technical strategists to view and
          configure accurate, deterministic supportability rules for different types of merchants. Not only was I able
          to work on SRS, but I also made key design decisions, presented and demoed SRS to key stakeholders, and was
          the primary contact for many aspects of the project.
        </motion.p>
        <motion.p {...ItemProps}>
          This semester, I have also begun to get involved in research at
          the <a target="_blank" href="https://reneu.robotics.utexas.edu">ReNeu Robotics Lab</a> with Dr. Ashish
          Deshpande, which focuses on using robots to improve the rehabilitation process and overall quality of life for
          those with disabilities. I was drawn to this opportunity because of how human-centric the lab’s mission is. In
          the lab, I am focusing on developing VR "minigames" that will interface with existing exoskeleton robots
          (Harmony and Maestro) to assist in the gamification of learning skills applicable to the real world.
        </motion.p>
        <motion.p {...ItemProps}>
          Today, I make an effort to stay active in my community and in the mentorship of others. I am the president and
          website developer of Q++, an organization at UT for LGBT students in tech. I have also worked with another Q++
          officer to build Org Assistant, a web app that consolidates attendee data from events and simplifies the
          attendee RSVP/check-in process. Additionally, I am an undergraduate teaching assistant for CS 311H: Discrete
          Mathematics Honors under Dr. Isil Dillig, where I host weekly office hours, lead discussion sections, and
          grade problem sets and exams.
        </motion.p>
      </div>
    </div>
  </motion.main>
);

export default AboutPage;