import PropTypes from "prop-types";
import "./ToggleSwitch.scss";

const ToggleSwitchComponent = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled
}) => {
  const handleKeyPress = (event) => {
    //espace keyCode 32
    if (event.keyCode !== 32) return;
    event.preventDefault();
    onChange(!checked);
  };

  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <div className={"toggle-switch" + (small ? " small-switch" : "")}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      {id ? (
        <label
          className="toggle-switch-label"
          tabIndex={disabled ? -1 : 1}
          onKeyDown={handleKeyPress}
          htmlFor={id}
        >
          <span
            className={
              disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={
              disabled
                ? "toggle-switch-switch toggle-switch-disabled"
                : "toggle-switch-switch"
            }
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  );
};

// Set optionLabels for rendering.
ToggleSwitchComponent.defaultProps = {
  optionLabels: ["Yes", "No"]
};

ToggleSwitchComponent.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitchComponent;
