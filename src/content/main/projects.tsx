import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import icon from "../../assets/images/icons/AppleTalk.png";
import browser from "../../assets/images/icons/Browser.png";
import hardDisk from "../../assets/images/icons/HardDisk.png";
import info from "../../assets/images/icons/MacInfoCenter.png";
import scrapbook from "../../assets/images/icons/Scrap Book.png";
import FolderButton from "../../components/FolderButton";
import Navbar from "../../components/Navbar";
import { WindowContext, WindowsManagerContext } from "../../constants/contexts";
import "../../stylesheets/projects.scss";
import { NavLink, Project, ProjectType } from "../../types";

const NAV_LINKS: NavLink[] = [
  { title: "Favorites", slug: ProjectType.FAVORITE, icon: scrapbook },
  { title: "Robotics", slug: ProjectType.ROBOTICS, icon },
  { title: "Research", slug: ProjectType.RESEARCH, icon: info },
  { title: "Web & Apps", slug: ProjectType.WEB, icon: browser },
  { title: "Tech Arts", slug: ProjectType.TECH_ARTS, icon: browser },
  { title: "All", slug: "", icon: browser },
];

const Projects: React.FC = () => {
  const { addWindow } = React.useContext(WindowsManagerContext);
  const { pos } = React.useContext(WindowContext);
  const data = useStaticQuery<Queries.ProjectListQuery>(
    graphql`
      query ProjectList {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {glob: "**/projects/*.md"}}
          sort: {frontmatter: {date: DESC}}
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                types
              }
            }
          }
        }
      }
    `,
  );
  const projects = data.allMarkdownRemark.edges.map(({ node }) => (
    { ...node.frontmatter }
  )).filter(({ title, slug, types }) => title && slug && types) as Project[];

  const [projectFilter, setProjectFilter] = React.useState<ProjectType | null>(ProjectType.FAVORITE);

  const setFilter = (id: string) => {
    setProjectFilter(id.length === 0 ? null : id as ProjectType);
  };

  return (
    <div className="projects">
      <div className="content">
        {projects
          .filter(({ types }) => !projectFilter || types.includes(projectFilter))
          .map(({ slug, title }) => (
            <FolderButton
              key={slug}
              icon={hardDisk}
              text={title}
              onClick={() => addWindow(slug, pos)}
              className="project-link"
            />
          ))}
      </div>
      <Navbar keepActive initialActive={ProjectType.FAVORITE} links={NAV_LINKS} onNavigate={setFilter} />
    </div>
  );
};

export default Projects;
