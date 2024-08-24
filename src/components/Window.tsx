import * as React from "react";
import { WindowContext, WindowsManagerContext } from "../constants/contexts";
import { clamp } from "../constants/helpers";
import { WINDOW_OFFSET } from "../constants/staticConstants";
import type { Position } from "../types";

type WindowProps = React.PropsWithChildren<{
  slug: string;
  title: string;
  index: number;
  spawningPos: Position | null;
  moveToFront: () => void;
}>;

const Window: React.FC<WindowProps> = ({ slug, title, index, spawningPos, moveToFront, children }) => {
  const { removeWindow } = React.useContext(WindowsManagerContext);
  const [dragging, setDragging] = React.useState<boolean>(false);
  const [posToMouse, setPosToMouse] = React.useState<Position | null>(null);
  const [pos, setPos] = React.useState<Position | null>(null);
  const [showContent, setShowContent] = React.useState<boolean>(true);
  const [minHeight, setMinHeight] = React.useState<number>(0);

  const windowRef = React.useRef<HTMLDivElement>(null);
  const titleBarRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef<boolean>(false);

  const onMouseDown: React.MouseEventHandler = (e) => {
    // only left mouse button
    if (e.button !== 0 || !windowRef.current) {
      return;
    }
    const windowPos = windowRef.current.getBoundingClientRect();
    setDragging(true);
    setPosToMouse(
      {
        x: e.pageX - windowPos.left,
        y: e.pageY - windowPos.top,
      },
    );
    moveToFront();
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setDragging(false);
    setPosToMouse(null);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging.current || !posToMouse || !windowRef.current) {
      return;
    }
    const { width, height } = windowRef.current.getBoundingClientRect();
    setPos(
      {
        x: clamp(e.pageX - posToMouse.x, 0, window.innerWidth - width),
        y: clamp(e.pageY - posToMouse.y, 0, window.innerHeight - height),
      },
    );
    e.stopPropagation();
    e.preventDefault();
  };

  const close = () => removeWindow(slug);

  const minimize = () => setShowContent(!showContent);

  React.useEffect(() => {
    if (!titleBarRef.current) {
      return;
    }
    setMinHeight(titleBarRef.current.getBoundingClientRect().height);
  }, [titleBarRef.current]);

  React.useEffect(() => {
    if (!windowRef.current || pos) {
      return;
    }
    const { width, height } = windowRef.current.getBoundingClientRect();
    if (!spawningPos) {
      setPos({
        x: (
          window.innerWidth - width
        ) / 2,
        y: (
          window.innerHeight - height
        ) / 2,
      });
    } else {
      const maxX = window.innerWidth - width;
      const maxY = window.innerHeight - height;
      setPos({
        x: (
          spawningPos.x + WINDOW_OFFSET
        ) % maxX,
        y: (
          spawningPos.y + WINDOW_OFFSET
        ) % maxY,
      });
    }
  }, [spawningPos, windowRef.current]);

  React.useEffect(() => {
    if (dragging && !isDragging.current) {
      isDragging.current = true;
      // @ts-ignore 2769
      window.addEventListener("mousemove", onMouseMove);
      // @ts-ignore 2769
      window.addEventListener("mouseup", onMouseUp);
    } else if (!dragging && isDragging.current) {
      isDragging.current = false;
      // @ts-ignore 2769
      window.removeEventListener("mousemove", onMouseMove);
      // @ts-ignore 2769
      window.removeEventListener("mouseup", onMouseUp);
    }
  }, [dragging]);

  return (
    <WindowContext.Provider value={{ slug, pos }}>
      <div
        className={`window ${!showContent ? "minimized" : "expanded"}`}
        ref={windowRef}
        style={{
          ...(
            pos ? { left: pos.x, top: pos.y } : { visibility: "hidden" }
          ), zIndex: index, ...(
            !showContent ? { height: minHeight } : {}
          ),
        }}
        onMouseDown={moveToFront}
      >
        <div
          className={`title-bar ${dragging ? "dragging" : ""}`}
          ref={titleBarRef}
          onMouseDown={onMouseDown}
        >
          <div className="buttons">
            <button className="quit" onClick={close}>x</button>
            <button className="quit" onClick={minimize}>_</button>
          </div>
          <div className="bar-decoration">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
        </div>
        {showContent && (
          <div className="content">
            {children}
          </div>
        )}
      </div>
    </WindowContext.Provider>
  );
};

export default Window;