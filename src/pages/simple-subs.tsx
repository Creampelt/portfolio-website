import React from "react";
import ProjectPage from "../components/ProjectPage";
import "../stylesheets/project-page.scss";

const SCREENSHOTS = [
  require("../images/simple-subs/login.png"),
  require("../images/simple-subs/home.png"),
  require("../images/simple-subs/custom_order.png"),
]

const SimpleSubsPage = () => (
  <ProjectPage id={"simple-subs"}>
    <div className={"screenshots"}>
      {SCREENSHOTS.map((src: string, i: number) => <img src={src} alt={"simple-subs-" + i} key={i} />)}
    </div>
    <div className={"problem-solution accent"}>
      <h2>The problem</h2>
      <p>
        The sandwich-ordering system at LWHS was inefficient; the order slips were inconveniently located on campus, and
        they need to be turned in before school on the day of your order, making them easy to forget. Exacerbated by
        COVID-19 and the increasing size of the student body (and therefore an ever-growing lunch line), we needed a
        better solution.
      </p>
      <h2>The solution</h2>
      <p>
        SimpleSubs is an easy-to-use app built in the React Native framework. It is compatible with iOS, Android, and
        web browsers. In the app, users may easily place orders up to fourteen days in advance. They can also create
        order presets through the settings page in order to quickly and easily reorder their favorite sandwiches.
      </p>
    </div>
  </ProjectPage>
);

export default SimpleSubsPage;