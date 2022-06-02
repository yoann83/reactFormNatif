import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ disabled, setClassStyleBg }) => {
  return (
    <div>
      <button disabled={disabled} className={setClassStyleBg}>
        <p>titi</p>
      </button>
    </div>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool.isRequired
};

export default Button;
