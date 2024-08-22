import * as React from "react";
import type { ButtonInfo } from "../types";

type FolderButtonsProps = {
  onClick: (id: string) => void;
  buttons: ButtonInfo[];
  className?: string;
};

const FolderButtons: React.FC<FolderButtonsProps> = ({ onClick, buttons, className = "" }) => {
  const [active, setActive] = React.useState<string | null>(null);
  const [isHovering, setHovering] = React.useState<boolean>(false);

  const clearActive = () => {
    if (!isHovering) {
      setActive(null);
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", clearActive);
    return () => window.removeEventListener("mousedown", clearActive);
  }, []);

  console.log(isHovering);

  return buttons.map(({ id, icon, text }) => (
    <button
      className={`folder-button ${active === id ? "active" : ""} ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseDown={() => setActive(id)}
      onDoubleClick={() => onClick(id)}
    >
      <img src={icon} alt={text} />
      <div><span>{text}</span></div>
    </button>
  ));
};

export default FolderButtons;