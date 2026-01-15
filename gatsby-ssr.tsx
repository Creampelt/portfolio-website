import React from "react";
import type { GatsbySSR } from "gatsby";
import Layout from "./src/components/Layout";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
    <Layout>{element}</Layout>
)

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/AXROutrunner.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
            key="outrunnerFont"
        />,
        <link
            rel="preload"
            href="/fonts/IBMPlexSerif-ExtraLight.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="plexExtraLightFont"
        />,
        <link
            rel="preload"
            href="/fonts/IBMPlexSerif-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="plexMediumFont"
        />,
    ])
}