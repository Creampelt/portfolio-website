import * as React from "react";
import folder from "../assets/images/icons/Folder.png";
import { WindowsManagerContext } from "../constants/contexts";
import { STATIC_PAGES } from "../constants/staticConstants";
import FolderButton from "./FolderButton";
import Footer from "./Footer";
import AudioControls from "./AudioControls";
import "../stylesheets/desktop.scss";

const Desktop: React.FC = () => {
  const { addWindow } = React.useContext(WindowsManagerContext);
  const openHome = () => addWindow(STATIC_PAGES.home.slug, null);
  return (
    <div className="desktop">
      <AudioControls />
      <FolderButton className="main-folder" icon={folder} text="Open me" onClick={openHome} />
      <Footer />
    </div>
  );
};

export default Desktop;