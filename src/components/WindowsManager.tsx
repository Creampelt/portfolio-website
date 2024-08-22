import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import folder from "../assets/icons/Folder.png";
import { WindowsManagerContext } from "../constants/contexts";
import { getPages } from "../constants/helpers";
import { DEFAULT_WINDOWS } from "../constants/staticConstants";
import "../stylesheets/index.scss";
import PageManager from "../templates/PageTemplate";
import type { Position, WindowSpawnInfo } from "../types";
import FolderButtons from "./FolderButtons";
import Window from "./Window";

const WindowsManager: React.FC = () => {
  const query = useStaticQuery<Queries.AllPagesQuery>(graphql`
    query AllPages {
      allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/projects/*"}}) {
        edges {
          node {
            frontmatter {
              slug
              title
              description
              github
              report
            }
            html
          }
        }
      }
    }
  `);
  const pages = React.useMemo(() => getPages(query), [query]);
  const [windows, setWindows] = React.useState<WindowSpawnInfo[]>(DEFAULT_WINDOWS);

  const filterSlug = (slug: string) => windows.filter((winSlug) => winSlug.slug !== slug);

  const addWindow = (slug: string, currentPos: Position | null) => {
    setWindows([...filterSlug(slug), { slug, spawningPos: currentPos }]);
  };

  const removeWindow = (slug: string) => {
    setWindows(filterSlug(slug));
  };

  const moveWindowToFront = (slug: string) => {
    setWindows([...filterSlug(slug), { slug, spawningPos: null }]);
  };

  return (
    <WindowsManagerContext.Provider value={{ windows, addWindow, removeWindow }}>
      <>
        <FolderButtons onClick={() => {}} buttons={[{ id: "thing", icon: folder, text: "Open me" }]} />
        {windows.map(({ slug, spawningPos }, i) => (
          !pages[slug] ? null : (
            <Window
              key={slug}
              slug={slug}
              title={pages[slug].title}
              index={i}
              spawningPos={spawningPos}
              onDragStart={() => moveWindowToFront(slug)}
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
