import React from "react";
import { motion } from "framer-motion";
import { ItemProps } from "../constants/AnimateProps";

type ProjectImagesProps = React.PropsWithChildren<{
  images: string[],
  alt: string,
  className?: string
}>;

const ProjectImages: React.FC<ProjectImagesProps> = ({ images, alt, className = "", children }) => (
  <div className={"screenshots " + className}>
    {images.map((src, i) => (
      <motion.img {...ItemProps} src={src} key={src} alt={`${alt} ${i}`} />
    ))}
    {children}
  </div>
);

export default ProjectImages;