import { InheritanceTree, PageType, type StaticPageInfo, type AudioTrack } from "../types";
import tricks from "../assets/audio/tricks.mp3";
import repeated from "../assets/audio/re_peated.mp3";
import cyclesomatic from "../assets/audio/cyclesomatic.mp3";
import drummy from "../assets/audio/drummy.mp3";
import salons from "../assets/audio/salons.mp3";

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

export const DEFAULT_WINDOW_CONTEXT = {
  windows: [],
  pageIndex: null,
  addWindow: () => { },
  removeWindow: () => { },
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

export const MOBILE_WIDTH = 600;

export const PLAYLIST: AudioTrack[] = [
  { track: tricks, title: "Tricks", artist: "Nihilore" },
  { track: repeated, title: "Re:peated", artist: "Aldous Ichnite" },
  { track: cyclesomatic, title: "Cyclesomatic", artist: "Aldous Ichnite" },
  { track: drummy, title: "drummy", artist: "Uncan" },
  { track: salons, title: "salons", artist: "Uncan" },
];
