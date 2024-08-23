import * as React from "react";
import {v4 as uuid} from "uuid";
import type {ButtonInfo} from "../types";

type FolderButtonsProps = {
  onClick: (id: string) => void;
  buttons: ButtonInfo[];
  className?: string;
};

const FolderButtons: React.FC<FolderButtonsProps> = ({onClick, buttons, className = ""}) => {
  const containerId = React.useMemo(() => uuid(), []);
  const [active, setActive] = React.useState<string | null>(null);

  const clearActive = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains(containerId)) {
      setActive(null);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", clearActive);
    return () => window.removeEventListener("click", clearActive);
  }, []);

  return buttons.map(({id, icon, text}) => (
    <button
      className={`${containerId} folder-button ${active === id ? "active" : ""} ${className}`}
      onClick={() => setActive(id)}
      onDoubleClick={() => onClick(id)}
      key={id}
    >
      <img className={containerId} src={icon} alt={text} />
      <div className={containerId}><span className={id}>{text}</span></div>
    </button>
  ));
};

export default FolderButtons;