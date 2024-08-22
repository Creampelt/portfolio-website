import * as React from "react";
import {HeadFC, PageProps} from "gatsby";
import WindowsManager from "../components/WindowsManager";
import "../stylesheets/index.scss";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="index">
      <WindowsManager />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
