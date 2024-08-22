import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import icon from "../../assets/icons/AppleTalk.png";
import browser from "../../assets/icons/Browser.png";
import hardDisk from "../../assets/icons/HardDisk.png";
import info from "../../assets/icons/MacInfoCenter.png";
import scrapbook from "../../assets/icons/Scrap Book.png";
import FolderButtons from "../../components/FolderButtons";
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
        allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/projects/*.md"}}) {
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

  const [projectFilter, setProjectFilter] = React.useState<ProjectType | null>(null);

  const setFilter = (id: string) => {
    setProjectFilter(id.length === 0 ? null : id as ProjectType);
  };

  return (
    <div className="projects">
      <div className="content">
        <FolderButtons
          onClick={(slug: string) => addWindow(slug, pos)}
          buttons={projects
            .filter(({ types }) => !projectFilter || types.includes(projectFilter))
            .map(({ slug, title }) => (
              { id: slug, icon: hardDisk, text: title }
            ))}
          className="project-link"
        />
      </div>
      <Navbar keepActive links={NAV_LINKS} onNavigate={setFilter} />
    </div>
  );
};

export default Projects;
