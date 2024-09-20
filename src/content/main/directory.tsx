import * as React from "react";
import searchIcon from "../../assets/images/icons/findFileA.png";
import InheritanceRenderer from "../../components/InheritanceRenderer";
import { WindowsManagerContext } from "../../constants/contexts";
import { INHERITANCE } from "../../constants/staticConstants";
import "../../stylesheets/directory.scss";

const Directory: React.FC = () => {
  const { pageIndex } = React.useContext(WindowsManagerContext);
  const [search, setSearch] = React.useState("");

  return !pageIndex ? null : (
    <div className="directory">
      <div className="search-bar">
        <img className="icon" src={searchIcon} alt="Search" />
        <input
          type="search"
          value={search}
          placeholder="Search pages..."
          onInput={(e) => setSearch((
            e.target as HTMLInputElement
          ).value)}
        />
      </div>
      <div className="tree">
        <InheritanceRenderer tree={INHERITANCE} pageIndex={pageIndex} isRoot search={search} />
      </div>
    </div>
  );
};

export default Directory;