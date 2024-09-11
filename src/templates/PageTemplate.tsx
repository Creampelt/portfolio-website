import * as React from "react";
import Home from "../content/home";
import Directory from "../content/main/directory";
import Projects from "../content/main/projects";
import { type PageInfo, PageType } from "../types";
import MainTemplate from "./MainTemplate";
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
    case PageType.DIRECTORY:
      return <Directory />;
    case PageType.MAIN:
      return <MainTemplate {...pageInfo} />;
    case PageType.PROJECT:
      return <ProjectTemplate {...pageInfo} />;
    default:
      return null;
  }
};

export default PageTemplate;