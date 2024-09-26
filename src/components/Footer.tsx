import * as React from "react";
import resume from "../assets/downloads/resume.pdf";
import document from "../assets/images/icons/document.png";
import github from "../assets/images/icons/github.png";
import linkedin from "../assets/images/icons/linkedin.png";

const Footer: React.FC = () => (
  <footer className="important-links">
    <a href={resume} target="_blank">
      <img src={document} alt="" />
      <span className="text">my resume</span>
    </a>
    <a href="https://github.com/Creampelt" target="_blank">
      <img src={github} alt="" />
      <span className="text">my github</span>
    </a>
    <a href="https://www.linkedin.com/in/emily-sturman/" target="_blank">
      <img src={linkedin} alt="" />
      <span className="text">my linkedin</span>
    </a>
  </footer>
);

export default Footer;