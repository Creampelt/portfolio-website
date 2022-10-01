import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import diagrams from "../assets/images/about/diagrams.png";
import driving from "../assets/images/about/driving.png";
import withSister from "../assets/images/about/with-sister.png";
import withDad from "../assets/images/about/with-dad.png";
import resume from "../assets/downloads/resume.pdf";
import { ItemProps, ContainerProps, BackgroundProps } from "../constants/AnimateProps";
import "../stylesheets/about.scss";

const AboutPage: React.FC = () => (
  <motion.main id={"about"} {...ContainerProps}>
    <Helmet>
      <title>About Me &bull; Emily Sturman</title>
    </Helmet>
    <header>
      <div className={"title main-title"}>
        <h1>
          <motion.span {...ItemProps}>About </motion.span>
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
          Hi! My name is Emily, and I'm currently a sophomore in the Turing
          Scholars Honors Program in Computer Science at UT Austin. I have
          developed skills in Javascript, React, Python, C++, and Java as
          well as in building full-stack applications using tools such as
          Firebase, Elastic, and Contentful. If you have the time, I’d
          encourage you to look at my <a target={"_blank"} href={resume}>resume</a> or
          my <a target={"_blank"} href={"https://github.com/Creampelt"}>Github</a>,
          where you can better understand the projects I’ve worked on so far.
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
          I’ve been enthusiastic about computer science for about as long as I
          can remember &mdash; I’ve been coding and working on individual
          projects since middle school. While still very early in my career as
          a software engineer, I’ve been fortunate enough to have had a number
          of opportunities to work on in-depth projects that were launched and
          used by others. After my freshman year of high school, I interned at
          Cloudera, where I worked on the QA team to build internal test-reporting
          tools. I also believe very strongly in using CS and technology for
          social issues, which I was able to do in following years at the
          Center for Gender and Refugee Studies, an organization that assists
          lawyers representing asylum seekers, and Leadout Capital, a venture
          capital firm that focuses on historically underrepresented founders.
          To continue this, I am currently the corporate officer and website
          developer for Q++, an organization at UT for LGBT students in tech.
          I’ve also found that I enjoy teaching and mentoring others and am
          now a teaching assistant for CS 311H: Discrete Mathematics under
          Prof. Isil Dilig.
        </motion.p>
        <motion.p {...ItemProps}>
          In late high school, I wanted to find a way to help my school reopen
          as quickly as possible while keeping students safe during the
          COVID-19 pandemic. A key issue the school was struggling with was
          how to safely distribute lunches to students. To fix this, I reached
          out to my high school and offered to build them a lunch-ordering app.
          The app, SimpleSubs, allowed for quick, online lunch-ordering for the
          entire student body that allowed lunches to be made and distributed
          safely and contactlessly. As my largest and longest-lasting project,
          I not only acquired more technical knowledge and experience, but also
          learned the importance of rigorous unit tests, writing readable and
          reusable code, and good communication with customers.
        </motion.p>
        <motion.p {...ItemProps}>
          Last summer, I had the opportunity to participate in the Meta
          University program, where I was able to improve my web development
          skills through a ten-week boot camp that culminated in a six-week
          capstone project. Working closely with my mentor, I enjoyed enhancing
          my skills in fullstack development and managing complex projects while
          also getting to learn how the technologies I used were deployed at scale.
        </motion.p>
      </div>
    </div>
  </motion.main>
);

export default AboutPage;