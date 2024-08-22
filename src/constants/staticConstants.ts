import {PageType, type StaticPageInfo, type WindowContextInfo} from "../types";

export const DEFAULT_WINDOWS: WindowContextInfo[] = [{slug: "home", spawningPos: null}];

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