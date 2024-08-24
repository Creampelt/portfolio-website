import * as React from "react";
import { InheritanceTree, PageByTypeIndex, PageType } from "../types";
import PageLink from "./PageLink";

type InheritanceRendererProps = {
  tree: InheritanceTree;
  pageIndex: PageByTypeIndex;
  isRoot?: boolean;
}

const InheritanceRenderer: React.FC<InheritanceRendererProps> = ({ tree, pageIndex, isRoot }) => {
  if (!tree) {
    return null;
  }
  return (
    <ul className={isRoot ? "root-level" : "tree-level"}>
      {Object.entries(tree).map(([pageType, subtree]) => (
        pageIndex[pageType as PageType].map(({ slug, title }) => (
          <li className={isRoot ? "root-node" : "tree-node"} key={slug}>
            <PageLink className="node-link" href={slug} executeOnDoubleClick>
              {title}
            </PageLink>
            <InheritanceRenderer tree={subtree} pageIndex={pageIndex} />
          </li>
        ))
      ))}
    </ul>
  );
};

export default InheritanceRenderer;