import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./ButtonComponent";
import "./Input.scss";
import "./Button.scss";

const InputComponent = ({
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

  //ATTRIBUTES
  const regexPwd =
    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[&+$!* ])([a-zA-Z0-9&+$!* ]{8,})$";

  const regexEmail = "[a-zA-Z0-9_\\.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}$";

  //EVENTS
  const testEmailRegex = (valueEmail) => {
    if (valueEmail.match(regexEmail)) {
      setErrorMessage("");
      setStyleError("");
    } else if (valueEmail.length === 0) {
      setErrorMessage("Required");
      setStyleError("error");
    } else {
      setErrorMessage("Invalid Email");
      setStyleError("error");
    }
  };

  const testPwdRegex = (valuePassword) => {
    if (valuePassword.match(regexPwd)) {
      setErrorMessage("");
      setStyleError("");
    } else {
      setErrorMessage(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      setStyleError("error");
    }
  };

  const testError = () => {
    if (value.length === 0 && dataOption.required) {
      setErrorMessage("Required");
      setStyleError("error");
    } else if (value.length < dataOption.minLength) {
      setErrorMessage("Minimum : " + dataOption.minLength + " characters");
      setStyleError("error");
    } else if (value.length > dataOption.maxLength) {
      setErrorMessage("Maximum : " + dataOption.maxLength + " characters");
      setStyleError("error");
    } else if (dataType === "password") {
      setRegex(regexPwd);
      testPwdRegex(value);
    } else if (dataType === "email") {
      setRegex(regexEmail);
      testEmailRegex(value);
    } else {
      setStyleError("");
    }
  };

  //INITIALIZE FUNCTION
  useEffect(() => {
    testError();
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={dataOption.class}>
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
        pattern={regex ? regex : "^(?=*)$"}
        placeholder={dataPlaceholder}
        autoComplete={dataOption.autoComplete}
        onChange={handleChange}
        checked={dataType === "radio" ? dataOption.checkedRadio : ""}
        required={dataOption.required}
        className={styleError}
        style={dataOption.inputStyle}
      />
      <p className={styleError}> {errorMessage} </p>
      <div>
        {dataType === "button" ? <Button errorMessage={errorMessage} /> : ""}
      </div>
    </div>
  );
};

InputComponent.propTypes = {
  dataType: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
  dataPlaceholder: PropTypes.string,
  dataOption: PropTypes.object,
  dataValue: PropTypes.string
};

export default InputComponent;
