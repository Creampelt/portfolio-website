import React from "react";
import { motion } from "framer-motion";
import ProjectPage from "../components/ProjectPage";
import ProjectImages from "../components/ProjectImages";
import { ItemProps, BackgroundProps } from "../constants/AnimateProps";
import "../stylesheets/project-page.scss";

const ORDER_SCREENSHOTS: string[] = [
  require("../assets/images/simple-subs/login.png").default,
  require("../assets/images/simple-subs/home.png").default,
  require("../assets/images/simple-subs/custom_order.png").default,
];

const PRESET_SCREENSHOTS: string[] = [
  require("../assets/images/simple-subs/order_presets.png").default,
  require("../assets/images/simple-subs/new_preset.png").default,
  require("../assets/images/simple-subs/preset_order.png").default,
]

const CONSOLE_SCREENSHOTS: string[] = [
  require("../assets/images/simple-subs/simple-subs-console/orders.jpg").default,
  require("../assets/images/simple-subs/simple-subs-console/users.jpg").default,
  require("../assets/images/simple-subs/simple-subs-console/app-settings.jpg").default,
  require("../assets/images/simple-subs/simple-subs-console/edit-field.jpg").default
];

const PRINTER_SCREENSHOTS: string[] = [
  require("../assets/images/simple-subs/simple-subs-printer/printer-and-raspi.jpg").default,
  require("../assets/images/simple-subs/simple-subs-printer/order-label.jpg").default
];

const SimpleSubsPage: React.FunctionComponent = () => (
  <>
    <ProjectPage id={"simple-subs"}>
      <ProjectImages images={ORDER_SCREENSHOTS} alt={"SimpleSubs"} className={"arranged"} />
      <motion.div {...BackgroundProps} className={"problem-solution accent"}>
        <motion.h2 {...ItemProps}>The problem</motion.h2>
        <motion.p {...ItemProps}>
          I began designing SimpleSubs in 10th grade to replace the current sandwich-ordering system, which, while
          functional, made it easy to forget to pre-order one’s food; instead, many students spent half of their lunch
          period waiting in line. But with the rise of COVID-19, SimpleSubs went from a nice-to-have app to an essential
          part of Lick’s COVID-19 response plan. Over the summer, I worked with LWHS administration to update the app so
          all students and faculty could pre-order their lunch and obtain it safely on campus.
        </motion.p>
      </motion.div>
      <ProjectImages images={PRESET_SCREENSHOTS} alt={"SimpleSubs"} className={"arranged"} />
      <motion.div {...BackgroundProps} className={"problem-solution accent"}>
        <motion.h2 {...ItemProps}>Personal presets</motion.h2>
        <motion.p {...ItemProps}>
          Customizability is an important feature of SimpleSubs that I’ve kept in mind since the beginning. Most people
          who order sandwiches settle on one or two favorites and simply reorder them every day. When I asked students
          what features they would most want to see in SimpleSubs, the overwhelming answer was order presets: being able
          to save and reorder your favorite sandwiches.
        </motion.p>
      </motion.div>
    </ProjectPage>
    <ProjectPage id={"simple-subs-console"}>
      <ProjectImages images={CONSOLE_SCREENSHOTS} alt={"SimpleSubs Console"} />
      <motion.div {...BackgroundProps} className={"problem-solution accent"}>
        <motion.h2 {...ItemProps}>Custom backend</motion.h2>
        <motion.p {...ItemProps}>
          When updating the app for COVID-19, one of the biggest changes I made was allowing for backend customization.
          Lick’s menu has basically stayed the same as long as I’ve been in high school; after all, the ingredients were
          all pre-printed on order slips. However, in order to adapt to the pandemic, the cafeteria has needed to cut
          back on available options. So, I implemented an Admin Console, where the Caf staff can not only view existing
          orders and users but also update the menu and required profile information.
        </motion.p>
      </motion.div>
    </ProjectPage>
    <ProjectPage id={"simple-subs-printer"}>
      <ProjectImages images={PRINTER_SCREENSHOTS} alt={"SimpleSubs Printer"} />
      <motion.div {...BackgroundProps} className={"problem-solution accent"}>
        <motion.h2 {...ItemProps}>End-to-end interface</motion.h2>
        <motion.p {...ItemProps}>
          As I was first pitching the idea of SimpleSubs to the LWHS administration, a significant issue was access to and
          ability to use technology. There are only a couple of computers in the cafeteria, and most of the staff wouldn’t
          be comfortable with looking up orders to make them. Simultaneously, we also needed a way to mark each sandwich
          so that students would know which one was theirs. My solution was a Raspberry Pi connected to a label printer
          that would automatically print sandwich labels for all of that day’s orders—not only could the Caf staff prep
          the meals without having to touch a computer, but students could easily find their sandwiches at lunch.
        </motion.p>
      </motion.div>
    </ProjectPage>
  </>
);

export default SimpleSubsPage;