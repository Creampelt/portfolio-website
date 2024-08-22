import * as React from "react";
import Home from "../content/main/home";
import Projects from "../content/main/projects";
import ProjectTemplate from "../templates/ProjectTemplate";
import {type PageInfo, PageType} from "../types";

type PageRendererProps = {
  pageInfo: PageInfo;
}

const PageRenderer: React.FC<PageRendererProps> = ({pageInfo}) => {
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

export default PageRenderer;