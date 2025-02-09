import * as React from "react";

type MarqueeProps = {
  text: string;
  paused?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, paused, className }) => (
  <div className={`marquee-container ${className ?? ""} ${paused ? "paused" : ""}`}>
    <p className="marquee">
      <span>{text}</span>
    </p>
    <p className="marquee marquee2">
      <span>{text}</span>
    </p>
  </div>
);

export default Marquee;