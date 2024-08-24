export type NavLink = {
  title: string;
  slug: string;
  icon: string;
};

export enum ProjectType {
  FAVORITE = "favorite",
  ROBOTICS = "robotics",
  RESEARCH = "research",
  WEB = "web",
  TECH_ARTS = "tech arts",
}

export type Project = {
  slug: string;
  title: string;
  types: ProjectType[];
};

export enum PageType {
  HOME = "home",
  PROJECT_BROWSER = "projectBrowser",
  PROJECT = "project",
  DIRECTORY = "directory",
}

type PageInfoFields = {
  slug: string;
  title: string;
};

export type StaticPageInfo = PageInfoFields & {
  type: PageType.HOME | PageType.PROJECT_BROWSER | PageType.DIRECTORY;
};

export type ProjectPageInfo = PageInfoFields & {
  type: PageType.PROJECT;
  html: string;
  description: string;
  github?: string;
  report?: string;
};

export type PageInfo = StaticPageInfo | ProjectPageInfo;

export type Position = {
  x: number;
  y: number;
};

export type WindowSpawnInfo = {
  slug: string;
  spawningPos: Position | null;
};

export type WindowInfo = {
  slug: string;
  pos: Position | null;
};

export type ButtonInfo = {
  id: string;
  icon: string;
  text: string;
};

export type InheritanceTree = null | {
  [key in PageType]?: InheritanceTree
};

export type PageByTypeIndex = {
  [type in PageType]: PageInfo[];
};