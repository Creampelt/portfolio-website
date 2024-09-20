import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import folder from "../assets/images/icons/Folder.png";
import { WindowsManagerContext } from "../constants/contexts";
import { getPages, getPagesByType } from "../constants/helpers";
import { STATIC_PAGES, WINDOW_OFFSET } from "../constants/staticConstants";
import "../stylesheets/index.scss";
import PageManager from "../templates/PageTemplate";
import type { Position, WindowSpawnInfo } from "../types";
import FolderButton from "./FolderButton";
import Window from "./Window";

const WindowsManager: React.FC = () => {
  const query = useStaticQuery<Queries.AllPagesQuery>(graphql`
    query AllPages {
      main: allMarkdownRemark(
        filter: {fileAbsolutePath: {glob: "**/main/*"}}
        sort: {frontmatter: {title: ASC}}
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            html
          }
        }
      }
      projects: allMarkdownRemark(
        filter: {fileAbsolutePath: {glob: "**/projects/*"}}
        sort: {frontmatter: {title: ASC}}
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              description
              date(formatString: "MMMM, YYYY")
              github
              report
              website
            }
            html
          }
        }
      }
    }
  `);
  const pages = React.useMemo(() => getPages(query), [query]);
  const pagesByType = React.useMemo(() => getPagesByType(Object.values(pages)), [pages]);
  const [windows, setWindows] = React.useState<WindowSpawnInfo[]>([]);

  const filterSlug = (slug: string) => windows.filter((winSlug) => winSlug.slug !== slug);

  const addWindow = (slug: string, currentPos: Position | null) => {
    setWindows([...filterSlug(slug), { slug, spawningPos: currentPos, relativeToCenter: false }]);
  };

  const removeWindow = (slug: string) => setWindows(filterSlug(slug));
  const moveWindowToFront = (slug: string) => setWindows([
    ...filterSlug(slug),
    { slug, spawningPos: null, relativeToCenter: false },
  ]);
  const openHome = () => addWindow(STATIC_PAGES.home.slug, null);

  React.useEffect(() => {
    const savedWindows = localStorage.getItem("windows");
    const prevWindows: string[] = savedWindows ? JSON.parse(savedWindows) : [];
    setWindows(prevWindows.map((slug, i) => (
      {
        slug,
        spawningPos: i === 0 ? null : {
          x: (
            i - 1
          ) * WINDOW_OFFSET,
          y: (
            i - 1
          ) * WINDOW_OFFSET,
        },
        relativeToCenter: true,
      }
    )));
  }, []);

  React.useEffect(() => {
    localStorage.setItem("windows", JSON.stringify(windows.map(({ slug }) => slug)));
  }, [windows]);

  return (
    <WindowsManagerContext.Provider value={{ windows, pageIndex: pagesByType, addWindow, removeWindow }}>
      <>
        <FolderButton icon={folder} text="Open me" onClick={openHome} />
        {windows.map(({ slug, spawningPos, relativeToCenter }, i) => (
          !pages[slug] ? null : (
            <Window
              key={slug}
              slug={slug}
              title={pages[slug].title}
              index={i}
              spawningPos={spawningPos}
              relativeToCenter={relativeToCenter}
              moveToFront={() => moveWindowToFront(slug)}
            >
              <PageManager pageInfo={pages[slug]} />
            </Window>
          )
        ))}
      </>
    </WindowsManagerContext.Provider>
  );
};

export default WindowsManager;
