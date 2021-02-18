import React from "react";
import ShowOnLoad from "../components/ShowOnLoad";
import "../stylesheets/about.scss";

const AboutPage = () => {
  return (
    <main id={"about"}>
      <title>About Me &bull; Emily Sturman</title>
      <header>
        <ShowOnLoad className={"title"}>
          <h1><span>About </span><span>Me</span></h1>
        </ShowOnLoad>
      </header>
      <div className={"bio section accent"}>
        <div>
          <h2>Who I am</h2>
          <p>
            Hi! My name is Emily, and I'm a total nerd. A full on dresses-like-she’s-from-Silicon-Valley (Allbirds,
            hoodie, and all), gets-excited-when-talking-about-robotics, builds-apps-for-fun nerd. Whether it's ranting
            about JavaScript or browsing through xkcd, I am one hundred percent here for it.
          </p>
          <p>
            Of course, my nerdiness extends beyond just computer science. I also play violin, so naturally most of my
            YouTube suggestions are for TwoSetViolin, and about ninety percent of my Instagram feed are classical music
            memes. This also means I tell lots of viola jokes and headbang to Borodin quartets.
          </p>
        </div>
      </div>
      <div className={"bio-img"} />
      <div className={"story section"}>
        <h2>My story</h2>
        <p>
          I’ve been passionate about computer science ever since I realized how it could be applied to improve the
          world. CS is the perfect middle ground between theoretical and practical &mdash; it has given me the tools to
          build solutions for the world around me, to exercise my problem-solving skills on real problems. Computer
          science has made me want to tear out my hair and work for days on end without sleep and give all-too-in-depth
          explanations of my projects to my friends. Best of all, there is always something in CS I don’t know,
          something I’ve yet to try.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;