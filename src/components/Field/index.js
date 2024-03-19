import React from "react";
import "./styles.sass";

import InputMask from "react-input-mask";

const Field = ({
  placeholder,
  type = "text",
  handleChange,
  description = "",
  name,
  value,
  className = "",
  error = "",
}) => {
  const isPhoneField = type === "phone";

  return (
    <div className={`field ${className}`}>
      {isPhoneField ? (
        <InputMask
          mask="+38 (099) 999-99-99"
          name={name}
          className={`field__input  ${error ? "field__input_error" : ""}`}
          value={value}
          placeholder={placeholder}
          maskChar={null}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          className={`field__input  ${error ? "field__input_error" : ""}`}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={(e) => handleChange(e)}
        />
      )}
      {description && <div className="field__descr">{description}</div>}
      {error && <div className="field__error">{error}</div>}
    </div>
  );
};

export default Field;
