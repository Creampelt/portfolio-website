import React from "react";
import "../stylesheets/footer.scss";
import Link from "./Link";
import Projects from "../constants/Projects";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaEnvelope, FaGithub, FaFileDownload } from "react-icons/fa";

const FilteredProjects = Projects.filter(({ hidden }: Project) => !hidden);

interface Neighbors {
  next?: Project,
  prev?: Project
}

function getProjIndex(key): number {
  for (let i = 0; i < FilteredProjects.length; i++) {
    if (FilteredProjects[i].id === key) {
      return i;
    }
  }
  return -1;
}

function getNextAndPrev(path?: string): Neighbors {
  if (!path) {
    return {};
  }
  let index = getProjIndex(path.substr(1, path.length - 2));
  if (index === -1) {
    return {};
  }
  return {
    next: index + 1 < FilteredProjects.length ? FilteredProjects[index + 1] : null,
    prev: index > 0 ? FilteredProjects[index - 1] : null
  };
}

const Footer = ({ path }: { path?: string }) => {
  const [{ prev, next }, setNeighbors]: [state: Neighbors, setState: (newState: Neighbors) => void] = React.useState({});
  React.useEffect(() => {
    setTimeout(() => setNeighbors(getNextAndPrev(path)), 250);
  }, [path]);
  return (
    <footer>
      {(prev || next) && (
        <div className={"next-prev-buttons"}>
          <div className={"prev"}>
            {prev && (
              <>
                <p><Link to={"/" + prev.id}>{prev.title}</Link></p>
                <FaLongArrowAltLeft className={"arrow"} />
              </>
            )}
          </div>
          <div className={"next"}>
            {next &&
              <>
                <p><Link to={"/" + next.id}>{next.title}</Link></p>
                <FaLongArrowAltRight className={"arrow"} />
              </>
            }
          </div>
        </div>
      )}
      <div className={"links"}>
        <a target={"_blank"} href={"mailto:emily@sturman.org"}>
          <span>emily@sturman.org</span>
          <FaEnvelope className={"link-icon"} />
        </a>
        <span className={"bullet"}>&bull;</span>
        <a target={"_blank"} href={"https://github.com/Creampelt"}>
          <span>github.com/Creampelt</span>
          <FaGithub className={"link-icon"} />
        </a>
        <span className={"bullet"}>&bull;</span>
        <a target={"_blank"} href={require("../assets/downloads/portfolio.pdf")}>
          <span>Download PDF portfolio</span>
          <FaFileDownload className={"link-icon"} />
        </a>
      </div>
    </footer>
  )
};

export default Footer;