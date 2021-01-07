import React from "react";

const ShowOnLoad = ({ className = "", children }) => {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setShown(true), 500);
  }, []);
  return (
    <div className={className + (shown ? "" : " hidden")}>
      {children}
    </div>
  );
};

export default ShowOnLoad;