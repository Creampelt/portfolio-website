import { InheritanceTree, PageType, type StaticPageInfo } from "../types";

export const STATIC_PAGES: { [slug: string]: StaticPageInfo } = {
  home: {
    slug: "home",
    title: "Home",
    type: PageType.HOME,
  },
  projects: {
    slug: "projects",
    title: "Projects",
    type: PageType.PROJECT_BROWSER,
  },
  directory: {
    slug: "directory",
    title: "Directory",
    type: PageType.DIRECTORY,
  },
};

export const WINDOW_OFFSET = 20;

export const INHERITANCE: InheritanceTree = {
  [PageType.HOME]: {
    [PageType.PROJECT_BROWSER]: {
      [PageType.PROJECT]: null,
    },
    [PageType.MAIN]: null,
    [PageType.DIRECTORY]: null,
  },
};