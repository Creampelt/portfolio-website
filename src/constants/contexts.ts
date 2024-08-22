import * as React from "react";
import type {Position, WindowContextInfo, WindowInfo} from "../types";
import {DEFAULT_WINDOWS} from "./staticConstants";


export type WindowsContextType = {
  windows: WindowContextInfo[];
  addWindow: (slug: string, pos: Position | null) => void;
  removeWindow: (slug: string) => void;
};

export type WindowContextType = {
  windows: WindowInfo[];
}

export const WindowsManagerContext = React.createContext<WindowsContextType>({
  windows: DEFAULT_WINDOWS,
  addWindow: () => {},
  removeWindow: () => {},
});

export const WindowContext = React.createContext<WindowContextType>({
  windows: [],
});