import React from "react";
import "../stylesheets/footer.scss";
import Link from "./Link";
import Projects from "../constants/Projects";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaEnvelope, FaGithub, FaFileDownload } from "react-icons/fa";
import resume from "../assets/downloads/resume.pdf";

const FilteredProjects = Projects.filter(({ hidden, incomplete }: Project) => (
  !hidden && !incomplete
));

interface Neighbors {
  next?: Project,
  prev?: Project
}

type FooterProps = {
  path?: string
}

const Footer: React.FC<FooterProps> = ({ path }) => {
  const [{ prev, next }, setNeighbors] = React.useState<Neighbors>({});

  const getNextAndPrev = (path?: string): Neighbors => {
    if (!path) {
      return {};
    }
    const index = FilteredProjects.findIndex(({ id }) => (
      id === path.substring(1, 1 + path.length - 2)
    ));
    return index === -1 ? {} : {
      next: index + 1 < FilteredProjects.length ? FilteredProjects[index + 1] : undefined,
      prev: index > 0 ? FilteredProjects[index - 1] : undefined
    };
  }

  React.useEffect(() => {
    setNeighbors(getNextAndPrev(path));
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