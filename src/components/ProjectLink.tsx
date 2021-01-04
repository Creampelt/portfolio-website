import React from "react";

const ProjectLink = ({ icon, shortTitle, title }: Project) => (
  <button className={"project-link"} style={{ backgroundImage: `url(${icon.file})`, backgroundColor: icon.backgroundColor }}>
    <div>
      <p>{shortTitle || title}</p>
    </div>
  </button>
);

export default ProjectLink;