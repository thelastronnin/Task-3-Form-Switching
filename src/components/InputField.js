import React from "react";

// iF = input Field

class InputField extends React.Component {
  render() {
    const {
      iFLabel,
      iFType,
      iFPlaceholder,
      iFvalue,
      onChange,
      iFError,
      iFErrorMessage,
      maxlength,
    } = this.props;

    return (
      <div>
        <div className="form-control">
          <label>{iFLabel}</label>
          {iFError === true && (
            <label className="error-message">{iFErrorMessage}</label>
          )}

          <input
            type={iFType}
            placeholder={iFPlaceholder}
            value={iFvalue}
            onChange={onChange}
            style={iFError ? { borderColor: "red", borderWidth: "3px" } : {}}
            maxlength={maxlength}
          />
        </div>
      </div>
    );
  }
}

export default InputField;
