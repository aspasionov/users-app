import React from "react";
import "./styles.sass";

const Button = ({
  type = "button",
  text,
  className,
  handleClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`btn ${className || ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default Button;
