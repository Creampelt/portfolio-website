import * as React from "react";
import Home from "../content/main/home";
import Projects from "../content/main/projects";
import { type PageInfo, PageType } from "../types";
import ProjectTemplate from "./ProjectTemplate";

type PageTemplateProps = {
  pageInfo: PageInfo;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ pageInfo }) => {
  switch (pageInfo.type) {
    case PageType.HOME:
      return <Home />;
    case PageType.PROJECT_BROWSER:
      return <Projects />;
    case PageType.PROJECT:
      return <ProjectTemplate {...pageInfo} />;
    default:
      return null;
  }
};

export default PageTemplate;