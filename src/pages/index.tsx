import { PageProps } from "gatsby";
import * as React from "react";
import Desktop from "../components/Desktop";
import "../stylesheets/index.scss";
import WindowsManager from "../components/WindowsManager";

const IndexPage: React.FC<PageProps> = () => (
  <WindowsManager>
    <Desktop />
  </WindowsManager>
);

export default IndexPage;
