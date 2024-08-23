import * as React from "react";
import type {Position, WindowInfo, WindowSpawnInfo} from "../types";

export type WindowsManagerContextType = {
  windows: WindowSpawnInfo[];
  addWindow: (slug: string, pos: Position | null) => void;
  removeWindow: (slug: string) => void;
};

export type WindowContextType = WindowInfo;

export const WindowsManagerContext = React.createContext<WindowsManagerContextType>({
  windows: [],
  addWindow: () => {},
  removeWindow: () => {},
});

export const WindowContext = React.createContext<WindowContextType>({
  slug: "",
  pos: null,
});