import React from "react";
import Link from "./Link";
import NavLinks from "../constants/NavLinks";
import "../stylesheets/navbar.scss";

type NavbarProps = {
  path: string
};

const Navbar: React.FC<NavbarProps> = ({ path }) => {
  const [top, setTop] = React.useState(true);

  const detectTop = () => {
    if (window.scrollY <= 20) {
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
        {NavLinks.map(({ title, to, subpages }, i) => (
          <li key={i}>
            <Link className={path === to ? "active" : ""} to={to}>{title}</Link>
            {subpages && (
              <div className={"subpages"}>
                <ul>
                  {subpages.map(({ title, to }, i) => (
                    <li key={i}>
                      <Link className={path === to ? "active" : ""} to={to}>
                        {title}
                      </Link>
                    </li>
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