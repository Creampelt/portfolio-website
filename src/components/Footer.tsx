import React from "react";
import "../stylesheets/footer.scss";
import Link from "./Link";
import Projects from "../constants/Projects";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface Neighbors {
  next?: Project,
  prev?: Project
}

function getProjIndex(key): number {
  for (let i = 0; i < Projects.length; i++) {
    if (Projects[i].id === key) {
      return i;
    }
  }
  return -1;
}

function getNextAndPrev(path): Neighbors {
  let index = getProjIndex(path.substr(1, path.length - 2));
  if (index === -1) {
    return {};
  }
  return {
    next: index + 1 < Projects.length ? Projects[index + 1] : null,
    prev: index > 0 ? Projects[index - 1] : null
  };
}

const Footer = ({ path }: { path: string }) => {
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
        <p><a target={"_blank"} href={"mailto:emily@sturman.org"}>emily@sturman.org</a></p>
        <span className={"bullet"}>&bull;</span>
        <p><a target={"_blank"} href={"https://github.com/Creampelt"}>github.com/Creampelt</a></p>
      </div>
    </footer>
  )
};

export default Footer;