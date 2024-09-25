import type { GatsbyNode } from "gatsby";
import path from "node:path";

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({ page, actions }) => {
  const { createPage } = actions;
  createPage({
    ...page,
    component: page.path.startsWith("/static") ? page.component : path.resolve("./src/pages/index.tsx"),
  });
};