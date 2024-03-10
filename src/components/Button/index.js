import React from 'react';
import "./styles.sass"

const Button = ({ type = "button", text, className }) => {
  return <button type={type} className={`btn ${className || ""}`}>
    {text}
  </button>;
}
export default Button;