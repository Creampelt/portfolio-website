import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import favicon from "../assets/images/favicon.png";
import thumbnail from "../assets/images/thumbnail.png";
import Desktop from "../components/Desktop";
import "../stylesheets/index.scss";
import WindowsManager from "../components/WindowsManager";

const IndexPage: React.FC<PageProps> = () => (
  <WindowsManager>
    <Desktop />
  </WindowsManager>
);

export default IndexPage;

export const Head: HeadFC<Queries.MetadataQuery> = ({ data }) => (
  <>
    <meta name="description" content={data.site!.siteMetadata!.description!} />
    <meta property="og:image" content={thumbnail} />
    <meta name="theme-color" content="#90ee90" data-react-helmet="true" />
    <link rel="icon" type="image/x-icon" href={favicon} />
  </>
);

export const query = graphql`
  query Metadata {
    site {
      siteMetadata {
        description
      }
    }
  }
`;