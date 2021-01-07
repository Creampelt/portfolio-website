import React from "react";
import Link from "./Link";
import "../stylesheets/navbar.scss";

const LINKS: NavLink[] = [
  {
    title: "My Work",
    to: "/",
    // subpages: [{
    //   title: "SimpleSubs",
    //   to: "/simple-subs"
    // }]
  },
  {
    title: "About Me",
    to: "/about"
  }
];

const Navbar = ({ path }: { path: string }) => {
  const [top, setTop] = React.useState(true);

  const detectTop = () => {
    if (pageYOffset <= 20) {
      setTop(true);
    } else {
      setTop(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", detectTop);
    return () => window.addEventListener("scroll", detectTop);
  }, []);

  return (
    <nav className={top ? "top" : ""}>
      <ul>
        {LINKS.map(({ title, to, subpages }, i) => (
          <li key={i}>
            <Link className={path === to ? "active" : ""} to={to}>{title}</Link>
            {subpages && (
              <div className={"subpages"}>
                <ul>
                  {subpages.map(({ title, to }, i) => (
                    <li key={i}><Link className={path === to ? "active" : ""} to={to}>{title}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navbar;