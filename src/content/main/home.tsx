import * as React from "react";
import {lazy} from "react";
import icon from "../../assets/icons/AppleTalk.png";
import browser from "../../assets/icons/Browser.png";
import "../../stylesheets/home.scss";
import info from "../../assets/icons/MacInfoCenter.png";
import scrapbook from "../../assets/icons/Scrap Book.png";
import {WindowsManagerContext} from "../../constants/contexts";
// import Navbar from "../../components/Navbar";
import type {NavLink} from "../../types";

const Navbar = lazy(() =>
  import("../../components/Navbar").then((module) => (
    {
      default: module.default,
    }
  )),
);


const NAV_LINKS: NavLink[] = [
  {title: "Projects", slug: "projects", icon: scrapbook},
  {title: "Playlists", slug: "playlists", icon},
  {title: "About Me", slug: "about", icon: info},
  {title: "Directory", slug: "directory", icon: browser},
];

const Home = () => {
  const {addWindow} = React.useContext(WindowsManagerContext);
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
      <Navbar links={NAV_LINKS} onNavigate={addWindow} />
    </div>
  );
};

export default Home;