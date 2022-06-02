import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Input.scss";
import "./Button.scss";

const Input = ({
  dataLabel,
  dataType,
  dataName,
  dataPlaceholder,
  dataValue,
  dataOption
}) => {
  //STATES
  const [value, setValue] = useState(dataValue ? dataValue : "");
  const [regex, setRegex] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [styleError, setStyleError] = useState("");
  const [styleShow, setStyleShow] = useState(dataOption.class);

  //ATTRIBUTES
  const regexPwd =
    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[&+$!* ])([a-zA-Z0-9&+$!* ]{8,})$";

  const regexEmail = "[a-zA-Z0-9_\\.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}$";

  //EVENTS
  const testEmailRegex = (valueEmail) => {
    if (valueEmail.match(regexEmail)) {
      setErrorMessage([]);
      setStyleError("");
    } else {
      setErrorMessage("Invalid Email");
      setStyleError("error");
    }
  };

  const testPwdRegex = (valuePassword) => {
    if (valuePassword.match(regexPwd)) {
      setErrorMessage([]);
      setStyleError("");
    } else {
      setStyleShow("styleHidden");
      setErrorMessage([
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      ]);
      setStyleError("error");
    }
  };

  const testError = () => {
    if (value.length === 0 && dataOption.required) {
      setErrorMessage("Required");
      setStyleShow("styleHidden");
      setStyleError("error");
    }
    if (value.length < dataOption.minLength) {
      setErrorMessage("Minimum : " + dataOption.minLength + " characters");
      setStyleError("error");
      setStyleShow("styleHidden");
    }
    if (value.length > dataOption.maxLength) {
      setErrorMessage("Maximum : " + dataOption.maxLength + " characters");
      setStyleError("error");
      setStyleShow("styleHidden");
    }
    if (dataType === "password") {
      setRegex(regexPwd);
      testPwdRegex(value);
      setStyleShow("styleHidden");
    }
    if (dataType === "email") {
      setRegex(regexEmail);
      testEmailRegex(value);
      setStyleShow("styleHidden");
    }
  };

  //INITIALIZE FUNCTION
  useEffect(() => {
    setErrorMessage("");
    setStyleError("");
    testError();
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={dataType === "button" ? styleShow : dataOption.class}>
      <label
        htmlFor={dataType === "radio" ? dataOption.idRadio : dataName}
        style={dataOption.labelStyle}
      >
        {dataLabel}
      </label>
      <input
        type={dataType}
        name={dataName}
        id={dataType === "radio" ? dataOption.idRadio : dataName}
        pattern={regex}
        placeholder={dataPlaceholder}
        autoComplete={dataOption.autoComplete}
        onChange={handleChange}
        checked={dataType === "radio" ? dataOption.checkedRadio : ""}
        required={dataOption.required}
        className={styleError}
        style={dataOption.inputStyle}
      />
      <p className={styleError}> {errorMessage} </p>
    </div>
  );
};

Input.propTypes = {
  dataType: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
  dataPlaceholder: PropTypes.string,
  dataOption: PropTypes.object,
  dataValue: PropTypes.string
};

export default Input;
