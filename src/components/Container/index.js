import React from "react";

import "./styles.sass";

const Container = ({ children, className }) => {
  return <div className={`container ${className || ""}`}>{children}</div>;
};

export default Container;
