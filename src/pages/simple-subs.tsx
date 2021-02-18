import React from "react";
import ProjectPage from "../components/ProjectPage";
import "../stylesheets/project-page.scss";

const ORDER_SCREENSHOTS = [
  require("../assets/images/simple-subs/login.png"),
  require("../assets/images/simple-subs/home.png"),
  require("../assets/images/simple-subs/custom_order.png"),
];

const PRESET_SCREENSHOTS = [
  require("../assets/images/simple-subs/order_presets.png"),
  require("../assets/images/simple-subs/new_preset.png"),
  require("../assets/images/simple-subs/preset_order.png"),
]

const CONSOLE_SCREENSHOTS = [
  require("../assets/images/simple-subs/simple-subs-console/orders.jpg"),
  require("../assets/images/simple-subs/simple-subs-console/users.jpg"),
  require("../assets/images/simple-subs/simple-subs-console/app-settings.jpg"),
  require("../assets/images/simple-subs/simple-subs-console/edit-field.jpg")
];

const PRINTER_SCREENSHOTS = [
  // require("../images/simple-subs/simple-subs-printer/cutoff-time.jpg"),
  require("../assets/images/simple-subs/simple-subs-printer/printer-and-raspi.jpg"),
  require("../assets/images/simple-subs/simple-subs-printer/order-label.jpg")
];

const SimpleSubsPage = () => (
  <>
    <ProjectPage id={"simple-subs"}>
      <div className={"screenshots arranged"}>
        {ORDER_SCREENSHOTS.map((src: string, i: number) => <img src={src} alt={"simple-subs-" + i} key={i} />)}
      </div>
      <div className={"problem-solution accent"}>
        <h2>The problem</h2>
        <p>
          I began designing SimpleSubs in 10th grade to replace the current sandwich-ordering system, which, while
          functional, made it easy to forget to pre-order one’s food; instead, many students spent half of their lunch
          period waiting in line. But with the rise of COVID-19, SimpleSubs went from a nice-to-have app to an essential
          part of Lick’s COVID-19 response plan. Over the summer, I worked with LWHS administration to update the app so
          all students and faculty could pre-order their lunch and obtain it safely on campus.
        </p>
      </div>
      <div className={"screenshots arranged"}>
        {PRESET_SCREENSHOTS.map((src: string, i: number) => <img src={src} alt={"simple-subs-" + i} key={i} />)}
      </div>
      <div className={"problem-solution accent"}>
        <h2>Personal presets</h2>
        <p>
          Customizability is an important feature of SimpleSubs that I’ve kept in mind since the beginning. Most people
          who order sandwiches settle on one or two favorites and simply reorder them every day. When I asked students
          what features they would most want to see in SimpleSubs, the overwhelming answer was order presets: being able
          to save and reorder your favorite sandwiches.
        </p>
      </div>
    </ProjectPage>
    <ProjectPage id={"simple-subs-console"}>
      <div className={"screenshots"}>
        {CONSOLE_SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"sv-for-pete-" + i} />)}
      </div>
      <div className={"problem-solution accent"}>
        <h2>Custom backend</h2>
        <p>
          When updating the app for COVID-19, one of the biggest changes I made was allowing for backend customization.
          Lick’s menu has basically stayed the same as long as I’ve been in high school; after all, the ingredients were
          all pre-printed on order slips. However, in order to adapt to the pandemic, the cafeteria has needed to cut
          back on available options. So, I implemented an Admin Console, where the Caf staff can not only view existing
          orders and users but also update the menu and required profile information.
        </p>
      </div>
    </ProjectPage>
    <ProjectPage id={"simple-subs-printer"}>
      <div className={"screenshots"}>
        {PRINTER_SCREENSHOTS.map((src, i) => <img key={i} src={src} alt={"sv-for-pete-" + i} />)}
      </div>
      <div className={"problem-solution accent"}>
        <h2>End-to-end interface</h2>
        <p>
          As I was first pitching the idea of SimpleSubs to the LWHS administration, a significant issue was access to and
          ability to use technology. There are only a couple of computers in the cafeteria, and most of the staff wouldn’t
          be comfortable with looking up orders to make them. Simultaneously, we also needed a way to mark each sandwich
          so that students would know which one was theirs. My solution was a Raspberry Pi connected to a label printer
          that would automatically print sandwich labels for all of that day’s orders—not only could the Caf staff prep
          the meals without having to touch a computer, but students could easily find their sandwiches at lunch.
        </p>
      </div>
    </ProjectPage>
  </>
);

export default SimpleSubsPage;