import React from "react";

const InputFieldTextArea = ({
  iFLabel,
  iFPlaceholder,
  iFvalue,
  onChange,
  iFError,
  iFErrorMessage,
}) => {
  return (
    <div className="form-control">
      <label>{iFLabel}</label>
      {iFError === true && (
        <label className="error-message">{iFErrorMessage}</label>
      )}
      <textarea
        name="textarea"
        onChange={onChange}
        iFvalue={iFvalue}
        placeholder={iFPlaceholder}
        style={iFError ? { borderColor: "red", borderWidth: "3px" } : {}}
      />
    </div>
  );
};

export default InputFieldTextArea;
