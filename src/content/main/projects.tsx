import {graphql, useStaticQuery} from "gatsby";
import * as React from "react";
import icon from "../../assets/icons/AppleTalk.png";
import browser from "../../assets/icons/Browser.png";
import hardDisk from "../../assets/icons/HardDisk.png";
import "../../stylesheets/projects.scss";
import info from "../../assets/icons/MacInfoCenter.png";
import scrapbook from "../../assets/icons/Scrap Book.png";
import Navbar from "../../components/Navbar";
import {WindowsManagerContext} from "../../constants/contexts";
import {NavLink, Project, ProjectType} from "../../types";

const NAV_LINKS: NavLink[] = [
  {title: "Favorites", slug: ProjectType.FAVORITE, icon: scrapbook},
  {title: "Robotics", slug: ProjectType.ROBOTICS, icon},
  {title: "Research", slug: ProjectType.RESEARCH, icon: info},
  {title: "Web & Apps", slug: ProjectType.WEB, icon: browser},
  {title: "Tech Arts", slug: ProjectType.TECH_ARTS, icon: browser},
  {title: "All", slug: "", icon: browser},
];

const Projects: React.FC = () => {
  const {addWindow} = React.useContext(WindowsManagerContext);
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
  const projects = data.allMarkdownRemark.edges.map(({node}) => (
    {...node.frontmatter}
  )).filter(({title, slug, types}) => title && slug && types) as Project[];

  const [active, setActive] = React.useState<string | null>(null);
  const [projectFilter, setProjectFilter] = React.useState<ProjectType | null>(null);

  const setActiveProject = (e: React.MouseEvent, id: string | null) => {
    setActive(id);
    e.stopPropagation();
  };

  const setFilter = (id: string) => {
    setProjectFilter(id.length === 0 ? null : id as ProjectType);
    setActive(null);
  };

  const openProject = (id: string) => {
    addWindow(id);
  };

  return (
    <div className="projects">
      <div className="content" onClick={(e) => setActiveProject(e, null)}>
        {projects
          .filter(({types}) => !projectFilter || types.includes(projectFilter))
          .map(({slug, title, types}) => (
            <button
              key={slug}
              className={`project-link ${active === slug ? "active" : ""}`}
              onClick={(e) => setActiveProject(e, slug)}
              onDoubleClick={() => openProject(slug)}
            >
              <img src={hardDisk} alt={title} />
              <div><span>{title}</span></div>
            </button>
          ))}
      </div>
      <Navbar keepActive links={NAV_LINKS} onNavigate={setFilter} />
    </div>
  );
};

export default Projects;
