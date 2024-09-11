import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import documentIcon from "../assets/images/icons/document.png";
import githubIcon from "../assets/images/icons/github.png";
import linkIcon from "../assets/images/icons/link.png";
import { getReportUrl } from "../constants/helpers";
import "../stylesheets/projects.scss";
import type { ProjectPageInfo } from "../types";

type ProjectTemplateProps = Omit<ProjectPageInfo, "slug">;

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  description,
  date,
  github,
  report,
  website,
  html,
}) => {
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
      <p>({date}) {description}</p>
      <div className="project-buttons">
        {website && <a href={website} target="__blank"><img src={linkIcon} className="link-icon" alt="" />website</a>}
        {github && <a href={github} target="__blank"><img src={githubIcon} className="link-icon" alt="" />github</a>}
        {reportUrl &&
          <a href={reportUrl} target="__blank"><img src={documentIcon} className="link-icon" alt="" />report</a>}
      </div>
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default ProjectTemplate;