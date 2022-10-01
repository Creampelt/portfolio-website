import React from "react";
import "../stylesheets/footer.scss";
import Link from "./Link";
import Projects from "../constants/Projects";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaEnvelope, FaGithub, FaFileDownload } from "react-icons/fa";
import resume from "../assets/downloads/resume.pdf";

const FilteredProjects = Projects.filter(({ hidden }: Project) => !hidden);

interface Neighbors {
  next?: Project,
  prev?: Project
}

type FooterProps = {
  path?: string
}

const Footer: React.FC<FooterProps> = ({ path }) => {
  const [{ prev, next }, setNeighbors]: [state: Neighbors, setState: (newState: Neighbors) => void] = React.useState({});

  React.useEffect(() => {
    setTimeout(() => setNeighbors(getNextAndPrev(path)), 250);
  }, [path]);

  const getProjIndex = (key: string): number => {
    for (let i = 0; i < FilteredProjects.length; i++) {
      if (FilteredProjects[i].id === key) {
        return i;
      }
    }
    return -1;
  }

  const getNextAndPrev = (path?: string): Neighbors => {
    if (!path) {
      return {};
    }
    let index = getProjIndex(path.substring(1, 1 + path.length - 2));
    if (index === -1) {
      return {};
    }
    return {
      next: index + 1 < FilteredProjects.length ? FilteredProjects[index + 1] : undefined,
      prev: index > 0 ? FilteredProjects[index - 1] : undefined
    };
  }

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
          <span>sturman@utexas.edu</span>
          <FaEnvelope className={"link-icon"} />
        </a>
        <span className={"bullet"}>&bull;</span>
        <a target={"_blank"} href={"https://github.com/Creampelt"}>
          <span>github.com/Creampelt</span>
          <FaGithub className={"link-icon"} />
        </a>
        <span className={"bullet"}>&bull;</span>
        <a target={"_blank"} href={resume}>
          <span>Download resume</span>
          <FaFileDownload className={"link-icon"} />
        </a>
      </div>
    </footer>
  )
};

export default Footer;