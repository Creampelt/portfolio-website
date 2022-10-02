import React from "react"
import { motion } from "framer-motion";
import Link from "../components/Link";
import { ItemProps, ContainerProps } from "../constants/AnimateProps";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "../stylesheets/404.scss";

const NotFoundPage: React.FC = () => (
  <motion.main {...ContainerProps} id={"not-found"}>
    <motion.title {...ItemProps}>Page Not Found</motion.title>
    <motion.h1 {...ItemProps}>404</motion.h1>
    <motion.h2 {...ItemProps}>Page not found</motion.h2>
    <motion.p {...ItemProps}>There doesn't seem to be a page here.</motion.p>
    <motion.div {...ItemProps} className={"home"}>
      <FaLongArrowAltLeft className={"hidden arrow"} />
      <p className={"styled-underline"}><Link to="/">Take me home</Link></p>
      <FaLongArrowAltLeft className={"arrow"} />
    </motion.div>
  </motion.main>
);

export default NotFoundPage;
