import React from 'react';
import "./styles.sass"

const Button = ({ type = "button", text, className, handleClick }) => {
  return <button type={type} className={`btn ${className || ""}`} onClick={handleClick}>
    {text}
  </button>;
}
export default Button;