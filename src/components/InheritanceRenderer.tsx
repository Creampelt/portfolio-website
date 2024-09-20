import * as React from "react";
import { InheritanceTree, PageByTypeIndex, PageType } from "../types";
import PageLink from "./PageLink";

type InheritanceRendererProps = {
  tree: InheritanceTree;
  pageIndex: PageByTypeIndex;
  isRoot?: boolean;
  search: string;
}

const InheritanceRenderer: React.FC<InheritanceRendererProps> = ({
  tree,
  pageIndex,
  isRoot,
  search,
}) => {
  if (!tree) {
    return null;
  }

  const children = Object.entries(tree).map(([pageType, subtree]) => (
    pageIndex[pageType as PageType].map(({ slug, title }) => {
      const searchIdx = title.toLowerCase().indexOf(search.toLowerCase());
      const subRenderer = InheritanceRenderer({ tree: subtree, pageIndex, search });
      return (
        searchIdx === -1 && !subRenderer
      ) ? null : (
        <li className={isRoot ? "root-node" : "tree-node"} key={slug}>
          <PageLink className="node-link" href={slug} executeOnDoubleClick>
            {searchIdx === -1 ? title : (
              <>
                {title.substring(0, searchIdx)}
                <span className="search-highlight">
                  {title.substring(searchIdx, searchIdx + search.length)}
                </span>
                {title.substring(searchIdx + search.length)}
              </>
            )}
          </PageLink>
          {subRenderer}
        </li>
      );
    })
  )).flat().filter((child) => !!child);

  return !children.length ? null : (
    <ul className={isRoot ? "root-level" : "tree-level"}>
      {children}
    </ul>
  );
};

export default InheritanceRenderer;