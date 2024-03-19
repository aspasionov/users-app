import React from "react";
import "./styles.sass";

const FileUploader = ({
  placeholder = "Upload your photo",
  name,
  id,
  classsName = "",
  handleChange,
  fileName = "",
}) => {
  return (
    <div className={`uploader ${classsName}`}>
      <label htmlFor={id} className="uploader__btn">
        <input
          type="file"
          id={id}
          name={name}
          accept=".jpg, .jpeg"
          onChange={handleChange}
          hidden
        />
        Upload
      </label>
      <div
        className={`uploader__field ${
          fileName ? "uploader__field_active" : ""
        }`}
      >
        {fileName ? fileName : <span>{placeholder}</span>}
      </div>
    </div>
  );
};

export default FileUploader;
