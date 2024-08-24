import * as React from "react";
import { WindowContext, WindowsManagerContext } from "../constants/contexts";

type PageLinkProps = React.HTMLProps<HTMLAnchorElement> & {
  executeOnDoubleClick?: boolean;
}

const PageLink: React.FC<PageLinkProps> = ({ executeOnDoubleClick, href, ...props }) => {
  const { addWindow } = React.useContext(WindowsManagerContext);
  const { pos } = React.useContext(WindowContext);
  const onClick = (e: React.MouseEvent, isDoubleClick: boolean) => {
    e.preventDefault();
    if ((
      (
        isDoubleClick && executeOnDoubleClick
      ) || (
        !isDoubleClick && !executeOnDoubleClick
      )
    ) && href) {
      addWindow(href, pos);
    }
  };
  return (
    <a onClick={(e) => onClick(e, false)} onDoubleClick={(e) => onClick(e, true)} href={href} {...props} />
  );
};

export default PageLink;