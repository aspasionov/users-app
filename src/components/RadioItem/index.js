import React from "react";
import "./styles.sass";

const RadioItem = ({
  className = "",
  id,
  name,
  value,
  checked,
  handleChange,
  label,
}) => {
  return (
    <label htmlFor={id} className={`radio-field ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        hidden
      />
      <div className="fake"></div>
      <span className="radio-field__label">{label}</span>
    </label>
  );
};

export default RadioItem;
