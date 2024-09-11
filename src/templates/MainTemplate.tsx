import * as React from "react";
import "../stylesheets/main.scss";
import type { MainPageInfo } from "../types";

type MainTemplateProps = MainPageInfo;

const MainTemplate: React.FC<MainTemplateProps> = ({ slug, title, html }) => {
  return (
    <div className={`markdown-content main ${slug}`}>
      <h1>{title}</h1>
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default MainTemplate;