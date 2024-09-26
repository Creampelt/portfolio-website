import * as React from "react";
import { isMobile } from "../constants/helpers";

type FolderButtonProps = {
  icon: string;
  text: string;
  onClick: () => void;
  className?: string;
};

const FolderButton: React.FC<FolderButtonProps> = ({ icon, text, onClick, className = "" }) => (
  <button
    className={`folder-button ${className}`}
    onClick={isMobile() ? onClick : undefined}
    onDoubleClick={!isMobile() ? onClick : undefined}
  >
    <img src={icon} alt={text} />
    <div>
        <span>
          {text}
        </span>
    </div>
  </button>
);

export default FolderButton;