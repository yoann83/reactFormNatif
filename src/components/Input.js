import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({
  dataId,
  dataLabel,
  dataType,
  dataName,
  dataPlaceholder,
  dataValue,
  dataOption
}) => {
  //STATES
  const [value, setValue] = useState(dataValue);
  const [errorMessage, setErrorMessage] = useState("");
  const [styleError, setStyleError] = useState("");

  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (value.length < dataOption.minLength) {
      setErrorMessage("Required");
      setStyleError("error");
    } else {
      setErrorMessage("");
      setStyleError("");
    }
  }, [value]);

  return (
    <div className="container mt-4">
      <label>{dataLabel} : </label>
      <input
        id={dataId}
        type={dataType}
        name={dataName}
        value={value}
        placeholder={dataPlaceholder}
        onChange={handleChange}
        required={dataOption.required}
        className={styleError}
      />
      <dfn className={styleError}> {errorMessage} </dfn>
    </div>
  );
};

Input.propTypes = {
  dataId: PropTypes.number.isRequired,
  dataType: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
  dataPlaceholder: PropTypes.string,
  dataOption: PropTypes.object,
  dataValue: PropTypes.string
};

export default Input;
