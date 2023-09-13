import React from "react";
import { motion } from "framer-motion";
import DownloadIOS from "../assets/images/download-icons/download-ios.svg";
import downloadPlayStore from "../assets/images/download-icons/download-android.png";
import { ItemProps } from "../constants/AnimateProps";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type DownloadButtonsProps = {
  buttons: AccessTypes
};

const DownloadButtons: React.FunctionComponent<DownloadButtonsProps> = ({ buttons }) => (
  <motion.div {...ItemProps} className={"download-buttons"}>
    {buttons.ios && (
      <a className={"ios"} href={buttons.ios} target={"_blank"}>
        <DownloadIOS />
      </a>
    )}
    {buttons.android && (
      <a className={"android"} href={buttons.android} target={"_blank"}>
        <img src={downloadPlayStore} alt={"Download from Play Store"} />
      </a>
    )}
    {buttons.web && (
      <a className={"web text"} href={buttons.web} target={"_blank"}>
        Visit website
        <FaExternalLinkAlt className={"external-link-icon"} />
      </a>
    )}
    {buttons.github && (
      <a className={"github text"} href={buttons.github} target={"_blank"}>
        <FaGithub className={"github-icon"} />
        View code
      </a>
    )}
  </motion.div>
);

export default DownloadButtons;