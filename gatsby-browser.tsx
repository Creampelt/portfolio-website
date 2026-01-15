import React from "react";
import type { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/Layout";
import "./src/stylesheets/global.scss";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => (
    <Layout>{element}</Layout>
)