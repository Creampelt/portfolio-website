import * as React from "react";
import type {NavLink} from "../types";

type NavbarProps = {
  links: NavLink[];
  keepActive?: boolean;
  onNavigate: (slug: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({links, keepActive, onNavigate}) => {
  const [active, setActive] = React.useState<string | null>(null);

  const onNavClick = (slug: string) => {
    if (keepActive) {
      setActive(slug);
    }
    onNavigate(slug);
  };

  return (
    <nav className="navbar">
      {links.map(({title, slug, icon}) => (
        <button key={slug} className={`nav-link ${active === slug ? "active" : ""}`} onClick={() => onNavClick(slug)}>
          <img src={icon} alt={slug} />
          {title}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;