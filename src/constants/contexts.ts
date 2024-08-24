import * as React from "react";
import type { PageByTypeIndex, Position, WindowInfo, WindowSpawnInfo } from "../types";

export type WindowsManagerContextType = {
  windows: WindowSpawnInfo[];
  pageIndex: PageByTypeIndex | null;
  addWindow: (slug: string, pos: Position | null) => void;
  removeWindow: (slug: string) => void;
};

export type WindowContextType = WindowInfo;

export const WindowsManagerContext = React.createContext<WindowsManagerContextType>({
  windows: [],
  pageIndex: null,
  addWindow: () => {},
  removeWindow: () => {},
});

export const WindowContext = React.createContext<WindowContextType>({
  slug: "",
  pos: null,
});