import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const ButtonComponent = ({ errorMessage }) => {
  const [disable, isDisable] = useState(true);

  const handleClickDisable = () => {
    setTimeout(() => {
      isDisable(false);
    }, 5000);
  };

  //INITIALIZE FUNCTION
  useEffect(() => {
    handleClickDisable();
  }, [disable]);

  return (
    <div className="box_submit">
         <button disabled={disable}>Submit</button>   
    </div>
  );
};

ButtonComponent.propTypes = {
  errorMessage: PropTypes.string
};

export default ButtonComponent;
