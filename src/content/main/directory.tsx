import * as React from "react";
import InheritanceRenderer from "../../components/InheritanceRenderer";
import { WindowsManagerContext } from "../../constants/contexts";
import { INHERITANCE } from "../../constants/staticConstants";
import "../../stylesheets/directory.scss";

const Directory: React.FC = () => {
  const { pageIndex } = React.useContext(WindowsManagerContext);
  if (!pageIndex) {
    return null;
  }
  return (
    <div className="directory">
      <InheritanceRenderer tree={INHERITANCE} pageIndex={pageIndex} isRoot />
    </div>
  );
};

export default Directory;