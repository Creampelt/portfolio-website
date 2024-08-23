import {PageType, type StaticPageInfo} from "../types";

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
};

export const WINDOW_OFFSET = 20;

export const INHERITANCE: { [key: PageType]: PageType | null } = {
  // PageType.HOME:
};