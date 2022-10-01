import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { BackgroundProps, ItemProps } from "../constants/AnimateProps";

const FINAL_SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/speaker/full-shot.jpg").default,
  require("../assets/images/project-screenshots/speaker/top.jpg").default,
  require("../assets/images/project-screenshots/speaker/detail.jpg").default
];

const PROCESS_SCREENSHOTS: string[] = [
  require("../assets/images/project-screenshots/speaker/drawing.jpeg").default,
  require("../assets/images/project-screenshots/speaker/rhino.png").default,
  require("../assets/images/project-screenshots/speaker/pcbs.jpg").default
]

const SpeakerPage: React.FC = () => (
  <ProjectPage id={"speaker"}>
    <ProjectImages images={FINAL_SCREENSHOTS} alt={"Speaker"} className={"fixed-layout"} />
    <motion.div {...BackgroundProps} className={"problem-solution accent"}>
      <motion.h2 {...ItemProps}>Analog design</motion.h2>
      <motion.p {...ItemProps}>
        I designed this speaker with simplicity in mind. All of my previous tech arts projects have had complex designs,
        making them difficult to execute well. For the speaker, I wanted to build something simple so that I could focus
        on the craft and on finishing it on time. However, I still wanted to challenge myself, so I decided to cast half
        the design in Rockite (quick-drying cement or hydraulic expansion cement), which I’d never done before.
      </motion.p>
    </motion.div>
    <ProjectImages images={PROCESS_SCREENSHOTS} alt={"Speaker"} className={"fixed-layout contain-img"} />
    <motion.div {...BackgroundProps} className={"problem-solution accent"}>
      <motion.h2 {...ItemProps}>Digital design</motion.h2>
      <motion.p {...ItemProps}>
        On top of the physical design, I wanted the speaker to stand out when it played music. To do this, I programmed
        the LEDs on an Adafruit Circuit Playground to react to sound using the device’s built in microphone: the color
        of the LEDs change based on the frequency of the music, and the number of illuminated LEDs change based on the
        volume. Therefore, different songs and genres display different patterns on the speaker.
      </motion.p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uxe4buU6ngE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
    </motion.div>
  </ProjectPage>
);

export default SpeakerPage;