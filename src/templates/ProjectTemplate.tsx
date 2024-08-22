import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { getReportUrl } from "../constants/helpers";
import "../stylesheets/projects.scss";
import type { ProjectPageInfo } from "../types";

type ProjectTemplateProps = Omit<ProjectPageInfo, "slug">;

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ title, description, github, report, html }) => {
  const query = useStaticQuery<Queries.DownloadLinksQuery>(graphql`
    query DownloadLinks {
      allFile(filter: {absolutePath: {glob: "**/downloads/*"}}) {
        edges {
          node {
            publicURL
            relativePath
          }
        }
      }
    }
  `);
  const reportUrl = React.useMemo(() => getReportUrl(query, report), [query, report]);
  return (
    <div className="markdown-content project">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="project-buttons">
        {github && <a href={github} target="__blank">github</a>}
        {reportUrl && <a href={reportUrl} target="__blank">report</a>}
      </div>
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default ProjectTemplate;