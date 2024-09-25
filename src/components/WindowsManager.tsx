import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { WindowsManagerContext } from "../constants/contexts";
import { getPages, getPagesByType } from "../constants/helpers";
import { WINDOW_OFFSET } from "../constants/staticConstants";
import "../stylesheets/windows.scss";
import PageManager from "../templates/PageTemplate";
import type { Position, WindowSpawnInfo } from "../types";
import Window from "./Window";

const WindowsManager: React.FC<React.PropsWithChildren> = ({ children }) => {
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
  const moveWindowToFront = (slug: string) => addWindow(slug, null);

  React.useEffect(() => {
    const isReload = window.performance
      .getEntriesByType("navigation")
      .map((nav) => (
        nav as PerformanceNavigationTiming
      ).type)
      .includes("reload");
    // Only load saved windows if reloading
    if (!isReload && window.location.pathname === "/") {
      return;
    }
    const savedWindows = localStorage.getItem("windows");
    const prevWindows: string[] = (
      isReload && savedWindows
    )
      ? JSON.parse(savedWindows)
      : window.location.pathname !== "/"
        ? [window.location.pathname.substring(1)]
        : [];
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
    window.history.replaceState(null, "", `/${windows.length ? windows[windows.length - 1].slug : ""}`);
  }, [windows]);

  return (
    <WindowsManagerContext.Provider value={{ windows, pageIndex: pagesByType, addWindow, removeWindow }}>
      <>
        <title>
          {!windows.length ? null : (
            pages[windows[windows.length - 1].slug].title + " \u2022 "
          )}
          Emily Sturman
        </title>
        {children}
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
