import React from "react";
import { Helmet } from "react-helmet";
import { GatsbyBrowser } from "gatsby";
import { MotionConfig, AnimatePresence } from "framer-motion";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => (
  <MotionConfig transition={{ duration: 0.5, reducedMotion: "user" }}>
    <div>
      <Helmet>
        <title>Emily Sturman</title>
        <meta name={"description"} content="Emily Sturman's portfolio website" />
        <meta name={"theme-color"} content={"#3cb371"} />
      </Helmet>
      <Navbar {...props} />
      <AnimatePresence mode={"wait"}>
        {element}
      </AnimatePresence>
      <Footer {...props} />
    </div>
  </MotionConfig>
);

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = ({ routerProps: { location }, getSavedScrollPosition }) => {
  // @ts-ignore
  const savedPosition: number[] = location.action === "PUSH"
    ? [0, 0]
    : (getSavedScrollPosition(location) || [0, 0]);
  window.scrollTo({
    top: savedPosition[1],
    left: savedPosition[0],
    behavior: "smooth"
  });
  return false;
};