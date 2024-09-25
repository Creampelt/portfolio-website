import * as React from "react";
import type { WindowInfo, WindowsManagerContextType } from "../types";
import { DEFAULT_WINDOW_CONTEXT } from "./staticConstants";

export type WindowContextType = WindowInfo;

export const WindowsManagerContext = React.createContext<WindowsManagerContextType>(DEFAULT_WINDOW_CONTEXT);

export const WindowContext = React.createContext<WindowContextType>({
  slug: "",
  pos: null,
});