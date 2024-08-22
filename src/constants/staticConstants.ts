import { PageType, type StaticPageInfo, type WindowSpawnInfo } from "../types";

export const DEFAULT_WINDOWS: WindowSpawnInfo[] = [{ slug: "home", spawningPos: null }];

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