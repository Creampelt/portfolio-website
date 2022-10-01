import { Variants } from "framer-motion";

export const STAGGER = 0.1;

const ContainerAnimation: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER
    }
  }
};

const ItemAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

const BackgroundAnimation: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export const ContainerProps = {
  variants: ContainerAnimation,
  initial: "hidden",
  animate: "show",
  exit: "hidden"
};

export const ItemProps = {
  variants: ItemAnimation
};

export const BackgroundProps = {
  variants: BackgroundAnimation
}