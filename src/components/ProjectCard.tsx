import React from "react";
import {GatsbyLinkProps, Link} from "gatsby";
import { motion } from "framer-motion";
import { BackgroundProps } from "../constants/AnimateProps";

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, type, image, incomplete }) => {
  const [showCol1, setShowCol1] = React.useState(false);
  const [showCol2, setShowCol2] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const showCols = () => {
    if (!cardRef.current) return;
    if (cardRef.current.getBoundingClientRect().y < window.innerHeight - 150) {
      setShowCol1(true);
      setTimeout(() => setShowCol2(true), 250);
    }
  };

  React.useEffect(() => {
    setTimeout(showCols, 250);
    window.addEventListener("scroll", showCols);
    return () => window.removeEventListener("scroll", showCols);
  }, []);

  const children = (
    <motion.div {...BackgroundProps} ref={cardRef} id={id} className={`project-card ${incomplete ? "under-construction" : ""}`}>
      <div className={"column"} />
      <div className={"image-col column " + (showCol2 ? "" : "hide")}>
        {Array.isArray(image)
          ? image.map((src, i) => <img key={i} src={src} alt={`${title}-${i}`} />)
          : <img src={image} alt={title} />
        }
      </div>
      <div className={"column " + (showCol1 ? "" : "hide")}>
        <h6 className={"type"}>{type}</h6>
        <h2 className={"title"}>{title}</h2>
        <p className={"short-description"}>{description}</p>
      </div>
    </motion.div>
  );

  return incomplete ? children : (
    <Link className={"card-link"} to={id}>
      {children}
    </Link>
  );
};

export default ProjectCard;