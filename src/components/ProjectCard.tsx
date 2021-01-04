import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectCard = ({ id, title, shortDescription, type, image }: Project) => {
  const [showCol1, setShowCol1] = React.useState(false);
  const [showCol2, setShowCol2] = React.useState(false);
  const cardRef = React.useRef(null);
  const showCols = () => {
    if (cardRef.current.getBoundingClientRect().y < window.innerHeight - 150) {
      setShowCol1(true);
      setTimeout(() => setShowCol2(true), 250)
    }
  };
  React.useEffect(() => {
    showCols();
    window.addEventListener("scroll", showCols);
    return () => window.removeEventListener("scroll", showCols);
  }, []);
  return (
    <AniLink className={"ani-link"} cover direction={"up"} bg={"#3CB371"} to={"simple-subs"}>
      <div ref={cardRef} id={id} className={"project-card"}>
        <div className={"column"} />
        <div className={"image-col column " + (showCol2 ? "" : "hide")}>
          {typeof image === "string" ?
            <img src={image} alt={title}/> :
            image.map((src: string, i: number) => <img key={i} src={src} alt={`${title}-${i}`}/>)
          }
        </div>
        <div className={"column " + (showCol1 ? "" : "hide")}>
          <h6 className={"type"}>{type}</h6>
          <h2 className={"title"}>{title}</h2>
          <p className={"short-description"}>{shortDescription}</p>
        </div>
      </div>
    </AniLink>
  )
};

export default ProjectCard;