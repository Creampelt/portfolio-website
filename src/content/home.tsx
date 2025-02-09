import * as React from "react";
import browser from "../assets/images/icons/Browser.png";
import info from "../assets/images/icons/MacInfoCenter.png";
import music from "../assets/images/icons/musicF.png";
import rainbowDs from "../assets/images/icons/rainbowDs.png";
import Navbar from "../components/Navbar";
import { WindowContext, WindowsManagerContext } from "../constants/contexts";
import "../stylesheets/home.scss";
import type { NavLink } from "../types";
import statue from "../assets/images/vaporwave/vapor_bust_spin.gif";
import headed from "../assets/images/vaporwave/headed.gif";

const NAV_LINKS: NavLink[] = [
  { title: "Projects", slug: "projects", icon: rainbowDs },
  { title: "Playlists", slug: "playlists", icon: music },
  { title: "About Me", slug: "about", icon: info },
  { title: "Directory", slug: "directory", icon: browser },
];

const Home = () => {
  const { addWindow } = React.useContext(WindowsManagerContext);
  const { pos } = React.useContext(WindowContext);
  return (
    <div className="home">
      <div className="content">
        <div className="text">
          <p>
            Hello! Welcome to my portfolio website :)
          </p>
          <p>
            Feel free to take a look around.
          </p>
        </div>
        <img className="statue" src={statue} alt="vaporwave spinning bust" />
        <img className="headed" src={headed} alt="headed" />
      </div>
      <Navbar links={NAV_LINKS} onNavigate={(slug: string) => addWindow(slug, pos)} />
    </div>
  );
};

export default Home;