import React from "react";
import ProjectPage from "../components/ProjectPage";

const FINAL_SCREENSHOTS = [
  require("../assets/images/project-screenshots/speaker/full-shot.jpg"),
  require("../assets/images/project-screenshots/speaker/top.jpg"),
  require("../assets/images/project-screenshots/speaker/detail.jpg")
];

const PROCESS_SCREENSHOTS = [
  require("../assets/images/project-screenshots/speaker/drawing.jpeg"),
  require("../assets/images/project-screenshots/speaker/rhino.png"),
  require("../assets/images/project-screenshots/speaker/pcbs.jpg")
]

const SpeakerPage = () => (
  <ProjectPage id={"speaker"}>
    <div className={"screenshots fixed-layout"}>
      {FINAL_SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"Speaker " + i} />)}
    </div>
    <div className={"problem-solution accent"}>
      <h2>Analog design</h2>
      <p>
        I designed this speaker with simplicity in mind. All of my previous tech arts projects have had complex designs,
        making them difficult to execute well. For the speaker, I wanted to build something simple so that I could focus
        on the craft and on finishing it on time. However, I still wanted to challenge myself, so I decided to cast half
        the design in Rockite (quick-drying cement or hydraulic expansion cement), which I’d never done before.
      </p>
    </div>
    <div className={"screenshots fixed-layout contain-img"}>
      {PROCESS_SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"Speaker " + i} />)}
    </div>
    <div className={"problem-solution accent"}>
      <h2>Digital design</h2>
      <p>
        On top of the physical design, I wanted the speaker to stand out when it played music. To do this, I programmed
        the LEDs on an Adafruit Circuit Playground to react to sound using the device’s built in microphone: the color
        of the LEDs change based on the frequency of the music, and the number of illuminated LEDs change based on the
        volume. Therefore, different songs and genres display different patterns on the speaker.
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uxe4buU6ngE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
    </div>
  </ProjectPage>
);

export default SpeakerPage;