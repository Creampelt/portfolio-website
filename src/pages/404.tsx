import React from "react"
import Link from "../components/Link";
import "../stylesheets/404.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NotFoundPage: React.FC = () => (
  <main id={"not-found"}>
    <title>Page Not Found</title>
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>There doesn't seem to be a page here.</p>
    <div className={"home"}>
      <FaLongArrowAltLeft className={"hidden arrow"} />
      <p className={"styled-underline"}><Link to="/">Take me home</Link></p>
      <FaLongArrowAltLeft className={"arrow"} />
    </div>
  </main>
);

export default NotFoundPage;
