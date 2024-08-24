import * as React from "react";

type FolderButtonProps = {
  icon: string;
  text: string;
  onClick: () => void;
  className?: string;
};

const FolderButton: React.FC<FolderButtonProps> = ({ icon, text, onClick, className = "" }) => (
  <button className={`folder-button ${className}`} onDoubleClick={onClick}>
    <img src={icon} alt={text} />
    <div>
        <span>
          {text}
        </span>
    </div>
  </button>
);

export default FolderButton;