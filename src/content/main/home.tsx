import * as React from "react";
import icon from "../../assets/icons/AppleTalk.png";
import browser from "../../assets/icons/Browser.png";
import info from "../../assets/icons/MacInfoCenter.png";
import scrapbook from "../../assets/icons/Scrap Book.png";
import Navbar from "../../components/Navbar";
import { WindowContext, WindowsManagerContext } from "../../constants/contexts";
import "../../stylesheets/home.scss";
import type { NavLink } from "../../types";

const NAV_LINKS: NavLink[] = [
  { title: "Projects", slug: "projects", icon: scrapbook },
  { title: "Playlists", slug: "playlists", icon },
  { title: "About Me", slug: "about", icon: info },
  { title: "Directory", slug: "directory", icon: browser },
];

const Home = () => {
  const { addWindow } = React.useContext(WindowsManagerContext);
  const { pos } = React.useContext(WindowContext);
  return (
    <div className="home">
      <div className="content">
        <p>
          Hello! Welcome to my portfolio website :)
        </p>
        <p>
          Feel free to take a look around.
        </p>
      </div>
      <Navbar links={NAV_LINKS} onNavigate={(slug: string) => addWindow(slug, pos)} />
    </div>
  );
};

export default Home;