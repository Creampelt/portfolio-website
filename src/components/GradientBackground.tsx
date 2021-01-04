import React from "react";

const GradientBackground = ({ children, startColor, endColor, ...props }: { children: JSX.Element, startColor: string, endColor: string }) => {
  const [bottomHalf, setBottomHalf] = React.useState(false);

  const onScroll = () => setBottomHalf(window.scrollY > window.innerHeight / 2);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      {...props}
      style={{ backgroundColor: bottomHalf ? endColor : startColor }}
      className={"gradient-container"}
    >
      {children}
    </div>
  );
};

export default GradientBackground;